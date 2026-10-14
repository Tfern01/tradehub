"""Build a minimal self-hosted Material Symbols font with only the 10 icons
TradeHub uses, plus the Latin component glyphs needed for the rlig
ligature substitutions (icon names -> icon glyphs)."""
from fontTools.ttLib import TTFont, newTable
from fontTools import subset
from fontTools.ttLib.tables import otTables as ot

SRC = '/tmp/material-symbols-full.woff2'
OUT = 'material-symbols-embedded.woff2'

ICONS = {
    'home': 'glyph01366',
    'add': 'glyph01281',
    'swap_horiz': 'glyph01175',
    'mail': 'glyph00672',
    'person': 'glyph02266',
    'search': 'glyph00007',
    'location_on': 'glyph00059',
    'star': 'glyph02072',
    'arrow_back': 'glyph01179',
    'arrow_forward': 'glyph01181',
    'radar': 'glyph02136',
    'bookmark': 'glyph00962',
}

font = TTFont(SRC)
cmap = font.getBestCmap()
chars = set(''.join(ICONS.keys()))  # letters + underscore used by icon names
comp_names = [cmap[ord(c)] for c in sorted(chars)]
keep = sorted(set(comp_names) | set(ICONS.values()))

opts = subset.Options()
opts.layout_features = []      # drop all GSUB/GPOS; we rebuild GSUB below
opts.glyph_names = True        # keep original glyph names
opts.name_IDs = ['*']
opts.hinting = False
opts.desubroutinize = True
sub = subset.Subsetter(options=opts)
sub.populate(glyphs=keep)
sub.subset(font)

# Rebuild a minimal GSUB with one rlig LigatureSubst lookup: icon name -> glyph.
order = font.getGlyphOrder()
rules = {}
for name, lig_glyph in ICONS.items():
    seq = [cmap[ord(c)] for c in name]
    rules.setdefault(seq[0], []).append((seq[1:], lig_glyph))
firsts = sorted(rules.keys(), key=lambda g: order.index(g))

gsub = newTable('GSUB')
gsub.table = ot.GSUB()
gsub.table.Version = 1.0

script_list = ot.ScriptList()
script_list.ScriptCount = 2
script_list.ScriptRecord = []
for tag in ('DFLT', 'latn'):
    rec = ot.ScriptRecord()
    rec.ScriptTag = tag
    script = ot.Script()
    lang = ot.LangSys()
    lang.ReqFeatureIndex = 0xFFFF
    lang.FeatureIndex = [0]
    lang.LookupOrder = None
    script.DefaultLangSys = lang
    script.LangSysRecord = []
    rec.Script = script
    script_list.ScriptRecord.append(rec)
gsub.table.ScriptList = script_list

feat_list = ot.FeatureList()
feat_list.FeatureCount = 1
frec = ot.FeatureRecord()
frec.FeatureTag = 'rlig'
feat = ot.Feature()
feat.FeatureParams = None
feat.LookupListIndex = [0]
frec.Feature = feat
feat_list.FeatureRecord = [frec]
gsub.table.FeatureList = feat_list

lookup_list = ot.LookupList()
lookup_list.LookupCount = 1
lookup = ot.Lookup()
lookup.LookupType = 4
lookup.LookupFlag = 0
lookup.MarkFilteringSet = None
lig = ot.LigatureSubst()
lig.Format = 1
lig.ligatures = {}
for first in firsts:
    entries = []
    for comps, lg in rules[first]:
        entry = ot.Ligature()
        entry.LigGlyph = lg
        entry.Component = comps
        entries.append(entry)
    lig.ligatures[first] = entries
lookup.SubTable = [lig]
lookup.SubTableCount = 1
lookup_list.Lookup = [lookup]
gsub.table.LookupList = lookup_list

font['GSUB'] = gsub
font.flavor = 'woff2'
font.save(OUT)

# Verify
check = TTFont(OUT)
print('glyphs:', len(check.getGlyphOrder()))
print('tables:', 'GSUB' in check, 'fvar' in check)
c = check.getBestCmap()
print('ascii cmap entries kept:', sum(1 for cp in c if cp < 128))
gs = check['GSUB'].table
n = 0
for rec in gs.FeatureList.FeatureRecord:
    for idx in rec.Feature.LookupListIndex:
        for sub in gs.LookupList.Lookup[idx].SubTable:
            ext = getattr(sub, 'ExtSubTable', sub)
            for _, ligs in ext.ligatures.items():
                n += len(ligs)
print('ligature rules:', n)
print('fvar axes:', [(a.axisTag) for a in check['fvar'].axes] if 'fvar' in check else None)
