// TradeHub live preview — demo data, saved in the browser (localStorage).
const KEY = 'tradehub-state-v5';
// Demo data is localized around Alex in San Francisco so the radius
// filter shows real results. Distances are miles from San Francisco.
let ME = { name: 'Alex Martinez', handle: '@alexm', location: 'San Francisco, CA', since: 'January 2024', rating: 4.8, trades: 24, bio: 'Tech enthusiast and avid trader. Always looking for interesting gear and new connections.', initials: 'AM', color: '#DBEAFE', text: '#155DFC' };

const SEED = {
  items: [
    { id: 1, title: 'Vintage Polaroid Camera', desc: 'Classic Polaroid SX-70 in excellent working condition. Comes with original leather case.', category: 'Collectibles', condition: 'Good', image: 'images/polaroid.jpg', owner: 'Sarah Chen', ownerLoc: 'Berkeley, CA', distance: 11, cashPrice: 120, ownerRating: 4.9, ownerInitials: 'SC', listed: '3/9/2026' },
    { id: 2, title: 'Mechanical Keyboard', desc: 'Custom mechanical keyboard with Cherry MX Blue switches. RGB backlit.', category: 'Electronics', condition: 'Like New', image: 'images/keyboard.jpg', owner: 'Alex Martinez', ownerLoc: 'San Francisco, CA', distance: 0, cashPrice: 85, ownerRating: 4.8, ownerInitials: 'AM', listed: '3/9/2026' },
    { id: 3, title: 'Vinyl Record Collection', desc: 'Set of 20 classic rock vinyl records from the 70s and 80s. All in great condition.', category: 'Music', condition: 'Good', image: 'images/vinyl.jpg', owner: 'James Wilson', ownerLoc: 'Oakland, CA', distance: 8, ownerRating: 4.7, ownerInitials: 'JW', listed: '3/9/2026' },
    { id: 4, title: 'Camping Tent (4-person)', desc: 'Spacious 4-person tent with rainfly. Perfect for family camping trips.', category: 'Outdoor', condition: 'Like New', image: 'images/tent.jpg', owner: 'Emma Thompson', ownerLoc: 'Daly City, CA', distance: 4, ownerRating: 5.0, ownerInitials: 'ET', listed: '3/8/2026' },
    { id: 5, title: 'Vintage Typewriter', desc: 'Beautiful Royal typewriter from the 1950s. Fully functional with original ribbon.', category: 'Collectibles', condition: 'Good', image: 'images/typewriter.jpg', owner: 'Sarah Chen', ownerLoc: 'Berkeley, CA', distance: 11, ownerRating: 4.9, ownerInitials: 'SC', listed: '3/8/2026' },
    { id: 6, title: 'Leather Messenger Bag', desc: 'Handcrafted genuine leather messenger bag with laptop compartment.', category: 'Fashion', condition: 'Like New', image: 'images/bag.jpg', owner: 'James Wilson', ownerLoc: 'Oakland, CA', distance: 8, ownerRating: 4.7, ownerInitials: 'JW', listed: '3/8/2026' },
    { id: 7, title: 'Hiking Backpack', desc: '65L hiking backpack with rain cover. Great for multi-day treks.', category: 'Outdoor', condition: 'Good', image: 'images/backpack.jpg', owner: 'Emma Thompson', ownerLoc: 'Daly City, CA', distance: 4, ownerRating: 5.0, ownerInitials: 'ET', listed: '3/7/2026' },
    { id: 8, title: 'Bluetooth Speaker', desc: 'Portable waterproof Bluetooth speaker with 12-hour battery life.', category: 'Electronics', condition: 'Like New', image: 'images/speaker.jpg', owner: 'Alex Martinez', ownerLoc: 'San Francisco, CA', distance: 0, ownerRating: 4.8, ownerInitials: 'AM', listed: '3/7/2026' },
    { id: 9, title: 'Mountain Bike', desc: '27-speed hardtail mountain bike, recently serviced. Great for Bay Area trails.', category: 'Outdoor', condition: 'Good', image: 'images/bike.jpg', owner: 'David Kim', ownerLoc: 'San Jose, CA', distance: 45, ownerRating: 4.6, ownerInitials: 'DK', listed: '3/6/2026' },
    { id: 10, title: 'Espresso Machine', desc: 'Semi-automatic espresso machine with built-in grinder. Makes a great shot.', category: 'Electronics', condition: 'Like New', image: 'images/espresso.jpg', owner: 'Priya Patel', ownerLoc: 'Marin, CA', distance: 14, cashPrice: 150, ownerRating: 4.9, ownerInitials: 'PP', listed: '3/6/2026' },
    { id: 11, title: '35mm Film Camera', desc: 'Classic 35mm SLR with 50mm lens. Light meter works, recently serviced.', category: 'Electronics', condition: 'Good', image: 'images/film.jpg', owner: 'Maria Lopez', ownerLoc: 'San Francisco, CA', distance: 2, cashPrice: 95, ownerRating: 4.8, ownerInitials: 'ML', listed: '3/5/2026' },
  ],
  offers: [
    { id: 1, from: 'Sarah Chen', date: '3/10/2026', status: 'Pending', direction: 'received', theirItemId: 1, myItemId: 2, message: 'Hi! I love your mechanical keyboard. Would you be interested in trading for my vintage Polaroid camera?' },
    { id: 2, from: 'James Wilson', date: '3/9/2026', status: 'Pending', direction: 'received', theirItemId: 6, myItemId: 8, message: 'Hey Alex, that Bluetooth speaker would be perfect for my workshop. I can offer my leather messenger bag — barely used!' },
  ],
  conversations: [
    { id: 1, with: 'Sarah Chen', initials: 'SC', itemId: 2, folder: 'inbox', unread: 1, messages: [
      { from: 'them', text: 'Hi! I love your mechanical keyboard. Would you be interested in trading?', time: '07:00 AM' },
      { from: 'me', text: "Thanks for reaching out! That's a beautiful camera.", time: '07:15 AM' },
      { from: 'them', text: 'No problem! I can also throw in the original leather case.', time: '07:30 AM' },
    ]},
    { id: 2, with: 'James Wilson', initials: 'JW', itemId: 8, folder: 'inbox', unread: 0, messages: [
      { from: 'them', text: 'That sounds interesting! Can you send me more photos?', time: '06:45 AM' },
      { from: 'me', text: 'Sure, I will send some over tonight.', time: '07:05 AM' },
    ]},
    { id: 3, with: 'Emma Thompson', initials: 'ET', itemId: 4, folder: 'sent', unread: 0, messages: [
      { from: 'me', text: 'Hi Emma! Is the camping tent still available? Would love to trade for it.', time: '09:12 AM' },
      { from: 'them', text: 'Hey Alex! Yes, it is still available. What did you have in mind?', time: '09:40 AM' },
      { from: 'me', text: 'I have a Bluetooth speaker in Like New condition — interested?', time: '10:02 AM' },
    ]},
  ],
};

let state;
try { state = JSON.parse(localStorage.getItem(KEY)) || structuredClone(SEED); }
catch { state = structuredClone(SEED); }
// Migrate old offer statuses: pre-trade-window 'Accepted' means the trade completed.
if (state.offers) state.offers.forEach(o => { if (o.status === 'Accepted') o.status = 'Completed'; });
if (!state.ratings) state.ratings = [];
if (!state.blocked) state.blocked = [];
if (!state.reports) state.reports = [];
if (!state.saved) state.saved = [];
if (!state.interests) state.interests = [];
function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    toast('Storage is full — that photo could not be saved. Try a smaller photo or remove an old listing.');
  }
}

// ---------- ACCOUNTS ----------
// Standalone TradeHub accounts: email + password only. No Facebook,
// Google, or PayPal login anywhere. Passwords are stored as SHA-256
// hashes, never in plain text. (Demo data, stored in this browser.)
const ACCOUNTS_KEY = 'tradehub-accounts-v1';
const SESSION_KEY = 'tradehub-session-v1';
const DEMO_ACCOUNT = { name: 'Alex Martinez', email: 'alex@demo.tradehub', city: 'San Francisco, CA', passHash: '0ead2060b65992dca4769af601a1b3a35ef38cfad2c2c465bb160ea764157c5d', createdAt: 1704067200000, rating: 4.8, trades: 24, bio: 'Tech enthusiast and avid trader. Always looking for interesting gear and new connections.' };
let accounts;
try { accounts = JSON.parse(localStorage.getItem(ACCOUNTS_KEY)) || null; }
catch { accounts = null; }
if (!accounts) { accounts = [DEMO_ACCOUNT]; localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts)); }
function persistAccounts() { localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts)); }
function getSessionAccount() {
  const email = localStorage.getItem(SESSION_KEY);
  return accounts.find(a => a.email === email) || null;
}
function accountToME(acc) {
  const parts = acc.name.trim().split(/\s+/);
  const initials = ((parts[0] || '')[0] || '') + ((parts[parts.length - 1] || '')[0] || '');
  return { name: acc.name, handle: '@' + acc.email.split('@')[0].replace(/[^a-z0-9._]/gi, ''), location: acc.city, since: acc.createdAt ? new Date(acc.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'January 2024', rating: acc.rating ?? '—', trades: acc.trades ?? 0, bio: acc.bio || 'New trader on TradeHub.', initials: initials.toUpperCase(), color: '#DBEAFE', text: '#155DFC' };
}
async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}
function signInAs(acc) {
  localStorage.setItem(SESSION_KEY, acc.email);
  ME = accountToME(acc);
  nav('home');
}

let currentCategory = 'All';
let currentRadius = 0; // 0 = any distance
let activeTab = 'received';
let activeConvo = null;
let currentFolder = 'inbox';
let tradeTargetId = null;
let tradeSelectedMine = null;

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const itemById = id => state.items.find(i => i.id === id);

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  setTimeout(() => t.classList.add('hidden'), 2600);
}

let currentView = 'home';
const navStack = [];
function nav(view, push = true) {
  if (view !== 'auth' && view !== 'onboard' && !getSessionAccount()) view = 'auth';
  if (push && currentView && currentView !== view && !['auth', 'onboard'].includes(currentView) && !['auth', 'onboard'].includes(view)) navStack.push(currentView);
  currentView = view;
  document.body.classList.toggle('on-auth', view === 'auth' || view === 'onboard');
  $$('.view').forEach(v => v.classList.remove('active'));
  $('#view-' + view).classList.add('active');
  $$('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.nav === view));
  const ha = $('#headerAvatar');
  if (ha) ha.textContent = ME.initials || initialsOf(ME.name);
  window.scrollTo(0, 0);
  if (view === 'home') renderHome();
  if (view === 'discover') renderBrowse();
  if (view === 'trades') renderTrades();
  if (view === 'messages') renderMessages();
  if (view === 'profile') renderProfile();
}
$$('[data-nav]').forEach(el => el.addEventListener('click', () => nav(el.dataset.nav)));
// Context-aware back: returns to wherever you came from.
function goBack() {
  let v;
  do { v = navStack.pop(); } while (v === currentView && navStack.length);
  nav(v || 'home', false);
}
$('#detailBack').addEventListener('click', goBack);

// ---------- AUTH ----------
// Sign-in lives on the auth view; "Create an account" opens the
// 4-step onboarding flow.
$('#goSignup').addEventListener('click', () => { nav('onboard'); obShow(1); });
function authError(id, msg) {
  const el = $(id);
  el.textContent = msg;
  el.classList.toggle('hidden', !msg);
}
$('#signinForm').addEventListener('submit', async e => {
  e.preventDefault();
  const email = $('#siEmail').value.trim().toLowerCase();
  const pass = $('#siPass').value;
  const acc = accounts.find(a => a.email === email);
  if (!acc) { authError('#siError', 'No account with that email. Try creating one.'); return; }
  if (await sha256(pass) !== acc.passHash) { authError('#siError', 'Wrong password.'); return; }
  authError('#siError', '');
  toast('Welcome back, ' + acc.name.split(' ')[0] + '!');
  signInAs(acc);
});
// ---------- ONBOARDING ----------
// 4-step new-user flow: account → interests → first listing → matches.
// Only fresh sign-ups come through here; sign-in and demo skip it.
let obStep = 1;
const obInterests = new Set();
let obPhoto = null;
const OB_EXPLORE = ['keyboards', 'vinyl', 'bikes', 'espresso', 'film', 'sneakers', 'books', 'plants', 'guitars', 'camping'];
function obShow(n) {
  obStep = n;
  $$('.ob-step').forEach(s => s.classList.toggle('hidden', s.id !== 'obStep' + n));
  if (n === 2) renderObInterests();
  if (n === 4) renderObDone();
  window.scrollTo(0, 0);
}
$('#obBack1').addEventListener('click', () => nav('auth'));
$('#obBack2').addEventListener('click', () => obShow(1));
$('#obBack3').addEventListener('click', () => obShow(2));

// Step 1 — account creation (same validation as the old inline form).
$('#obAccountForm').addEventListener('submit', async e => {
  e.preventDefault();
  const name = $('#obName').value.trim();
  const email = $('#obEmail').value.trim().toLowerCase();
  const city = $('#obCity').value.trim();
  const pass = $('#obPass').value;
  if (!name) { authError('#obError', 'Please enter your name.'); return; }
  if (!/^\S+@\S+\.\S+$/.test(email)) { authError('#obError', 'Please enter a valid email address.'); return; }
  if (!city) { authError('#obError', 'Please enter your city.'); return; }
  if (pass.length < 8) { authError('#obError', 'Password must be at least 8 characters.'); return; }
  if (accounts.some(a => a.email === email)) { authError('#obError', 'An account with that email already exists. Try signing in.'); return; }
  const acc = { name, email, city, passHash: await sha256(pass), createdAt: Date.now(), rating: '—', trades: 0, bio: 'New trader on TradeHub.' };
  accounts.push(acc);
  persistAccounts();
  authError('#obError', '');
  localStorage.setItem(SESSION_KEY, acc.email);
  ME = accountToME(acc);
  obShow(2);
});

// Step 2 — interests. Live "Popular near you" suggestions (same engine as
// the profile picker), a static explore row, and custom tags. Taps toggle;
// the panel stays open so tags can be stacked.
const obChip = t => '<button type="button" class="ob-chip' + (obInterests.has(t.toLowerCase()) ? ' on' : '') + '" data-obtag="' + esc(t) + '">' + esc(t) + '</button>';
function renderObInterests() {
  $('#obPopular').innerHTML = suggestedTags().map(obChip).join('');
  $('#obExplore').innerHTML = OB_EXPLORE.filter(t => !obInterests.has(t.toLowerCase())).map(obChip).join('');
  $('#obCount').textContent = obInterests.size ? obInterests.size + ' selected' : 'Pick a few — or skip';
}
$('#obStep2').addEventListener('click', e => {
  const chip = e.target.closest('[data-obtag]');
  if (!chip) return;
  const tag = chip.dataset.obtag.toLowerCase();
  if (obInterests.has(tag)) obInterests.delete(tag);
  else if (obInterests.size < 12) obInterests.add(tag);
  renderObInterests();
});
const obAddCustom = () => {
  const v = $('#obCustom').value.trim().toLowerCase();
  if (v && !obInterests.has(v) && obInterests.size < 12) obInterests.add(v);
  $('#obCustom').value = '';
  renderObInterests();
};
$('#obAddCustom').addEventListener('click', obAddCustom);
$('#obCustom').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); obAddCustom(); } });
const obCommitInterests = () => {
  obInterests.forEach(t => { if (!state.interests.some(x => x.toLowerCase() === t)) state.interests.push(t); });
  state.interests = state.interests.slice(0, 12);
  save();
  obShow(3);
};
$('#obNext2').addEventListener('click', obCommitInterests);
$('#obSkip2').addEventListener('click', () => obShow(3));
$('#obSkip2b').addEventListener('click', () => obShow(3));

// Step 3 — first listing. Photo is optional here to keep momentum;
// title, category, and condition are the minimum for a live listing.
$('#obPhotoInput').addEventListener('change', async e => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    obPhoto = await fileToCompressedDataURL(file);
    $('#obPhotoImg').src = obPhoto;
    $('#obPhotoHero').classList.add('has-photo');
    $('#obPhotoRemove').classList.remove('hidden');
  } catch { toast('Could not read that photo — try another one.'); }
});
$('#obPhotoRemove').addEventListener('click', () => {
  obPhoto = null;
  $('#obPhotoInput').value = '';
  $('#obPhotoHero').classList.remove('has-photo');
  $('#obPhotoRemove').classList.add('hidden');
});
const obSkipListing = () => obShow(4);
$('#obSkip3').addEventListener('click', obSkipListing);
$('#obSkip3b').addEventListener('click', obSkipListing);
$('#obListIt').addEventListener('click', () => {
  const title = $('#obTitle').value.trim();
  const cat = $('#obCategory').value;
  const cond = $('#obCondition').value;
  if (!title || !cat || !cond) { authError('#obListError', 'Give your item a title, category, and condition.'); return; }
  authError('#obListError', '');
  state.items.unshift({ id: Date.now(), title, desc: '', category: cat, condition: cond,
    image: obPhoto || 'images/no-photo.jpg',
    owner: ME.name, ownerLoc: ME.location, distance: 0, cashPrice: null,
    ownerRating: ME.rating, ownerInitials: ME.initials || initialsOf(ME.name),
    listed: new Date().toLocaleDateString('en-US') });
  save();
  obShow(4);
});

// Step 4 — payoff. Pairings run on the real engine against the new user's
// just-declared interests and first listing.
function renderObDone() {
  const myListing = state.items.find(i => i.owner === ME.name);
  const pairs = buildPairings().slice(0, 3);
  const sub = $('#obDoneSub');
  const box = $('#obPairs');
  if (myListing && pairs.length) {
    const n = pairs.length;
    sub.innerHTML = 'Your <b>' + esc(myListing.title) + '</b> already has <b>' + n + ' potential trade' + (n > 1 ? 's' : '') + '</b> nearby.';
    box.innerHTML = pairs.map(pairCardHTML).join('');
  } else if (pairs.length) {
    sub.innerHTML = 'Your feed is tailored to your interests — and we found <b>' + pairs.length + ' people</b> near you to trade with.';
    box.innerHTML = pairs.map(pairCardHTML).join('');
  } else if (myListing) {
    sub.innerHTML = 'Your <b>' + esc(myListing.title) + '</b> is live! As more traders join near you, matches will appear here.';
    box.innerHTML = '';
  } else {
    sub.innerHTML = 'Your account is ready. List your first item to start trading.';
    box.innerHTML = '';
  }
  $$('#obPairs [data-pairitem]').forEach(c => c.addEventListener('click', () => {
    nav('home');
    openDetail(+c.dataset.pairitem);
  }));
}
$('#obFinish').addEventListener('click', () => nav('home'));
$('#demoSignin').addEventListener('click', () => signInAs(DEMO_ACCOUNT));

// ---------- HOME ----------
// ---------- CATEGORY SYSTEM ----------
// Each category owns a color (tinted tile, saturated icon). Frequent users
// read the color before the word.
const CATS = [
  { name: 'Electronics', bg: '#E0F2FE', fg: '#0284C7', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="12" rx="2"/><path d="M8 20h8"/></svg>' },
  { name: 'Music', bg: '#EDE9FE', fg: '#7C3AED', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V6l10-2v11"/><circle cx="7" cy="18" r="2.5"/><circle cx="17" cy="15" r="2.5"/></svg>' },
  { name: 'Outdoor', bg: '#D1FAE5', fg: '#059669', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="6" cy="17" r="3.5"/><circle cx="18" cy="17" r="3.5"/><path d="M6 17l3.5-7h5L18 17"/></svg>' },
  { name: 'Collectibles', bg: '#FEF3C7', fg: '#D97706', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13" r="3.5"/></svg>' },
  { name: 'Fashion', bg: '#FCE7F3', fg: '#DB2777', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8h15l-1.5 12h-12z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>' },
];
const catColor = name => { const c = CATS.find(c => c.name === name); return c ? c.fg : '#86868B'; };
const initialsOf = name => String(name || '').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

// Avatar face colors, hashed from the name so each trader keeps theirs.
const AV_COLORS = ['#7C3AED', '#059669', '#D97706', '#DB2777', '#0284C7', '#EA580C'];
function faceColor(name) { let h = 0; for (const ch of String(name)) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return AV_COLORS[h % AV_COLORS.length]; }

// ---------- LEVELS & GOALS ----------
// Progression for the account: levels and goals.
const LEVELS = [
  { n: 1, name: 'New Trader', at: 0 },
  { n: 2, name: 'Getting Going', at: 1 },
  { n: 3, name: 'Seasoned Trader', at: 3 },
  { n: 4, name: 'Trusted Trader', at: 6 },
  { n: 5, name: 'Neighborhood Pro', at: 10 },
  { n: 6, name: 'Trade Master', at: 15 },
  { n: 7, name: 'Local Legend', at: 25 },
];
function traderLevel(done) {
  let cur = LEVELS[0], next = null;
  for (const l of LEVELS) { if (done >= l.at) cur = l; else { next = l; break; } }
  const pct = next ? Math.min(100, Math.round((done - cur.at) / (next.at - cur.at) * 100)) : 100;
  return { cur, next, pct };
}
const completedTrades = () => state.offers.filter(o => o.status === 'Completed').length;

// ---------- INTERESTS ----------
// YouTube-style interest tags: one store, shared by Home, Profile, and the pairing engine.
const interestTags = () => state.interests.map(t => t.toLowerCase());
const matchesInterests = i => { const tags = interestTags(); return tags.length > 0 && tags.some(t => (i.title + ' ' + i.desc + ' ' + i.category).toLowerCase().includes(t)); };
const matchingTag = i => interestTags().find(t => (i.title + ' ' + i.desc + ' ' + i.category).toLowerCase().includes(t));
function interestTagsHTML() {
  return '<div class="interest-tags">'
    + state.interests.map(t => '<span class="interest-tag">' + esc(t) + '<button data-rmtag="' + esc(t) + '" aria-label="Remove interest">\u00d7</button></span>').join('')
    + '<button class="interest-add" data-addinterest><span class="material-symbols-outlined icon-inline">add</span> Add</button></div>';
}
function openInterestModal() {
  $('#interestInput').value = '';
  renderSuggestions();
  $('#interestModal').classList.remove('hidden');
  setTimeout(() => $('#interestInput').focus(), 60);
}
function bindInterestTags(root) {
  root.querySelectorAll('[data-rmtag]').forEach(b => b.addEventListener('click', () => {
    state.interests = state.interests.filter(t => t !== b.dataset.rmtag);
    save();
    if (currentView === 'home') renderHome(); else renderProfile();
  }));
  root.querySelectorAll('[data-addinterest]').forEach(b => b.addEventListener('click', openInterestModal));
}
// Tap-to-add suggestions, derived from what's actually listed nearby.
function suggestedTags() {
  const have = new Set(interestTags());
  const live = state.items.filter(i => !i.traded && !state.blocked.includes(i.owner));
  const cats = [...new Set(live.map(i => i.category))].filter(c => !have.has(c.toLowerCase()));
  const stop = new Set(['with', 'from', 'your', 'this', 'that', 'and', 'for', 'the']);
  const freq = {};
  live.forEach(i => i.title.toLowerCase().split(/[^a-z]+/).forEach(w => {
    if (w.length >= 4 && !stop.has(w) && !have.has(w)) freq[w] = (freq[w] || 0) + 1;
  }));
  const words = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 6).map(e => e[0]);
  return [...cats, ...words].slice(0, 8);
}
function renderSuggestions() {
  const box = $('#suggestRow');
  const sug = suggestedTags();
  box.innerHTML = sug.length
    ? sug.map(t => '<button class="suggest-chip" data-suggest="' + esc(t) + '">' + esc(t) + '</button>').join('')
    : '<span class="muted">No suggestions right now — type your own above.</span>';
  box.querySelectorAll('[data-suggest]').forEach(b => b.addEventListener('click', () => {
    const v = b.dataset.suggest;
    if (!state.interests.some(t => t.toLowerCase() === v.toLowerCase()) && state.interests.length < 12) {
      state.interests.push(v); save();
    }
    renderSuggestions();
    if (currentView === 'home') renderHome(); else renderProfile();
  }));
}
// Declared wants per trader (demo seed). In production this comes from each
// trader's own "Interested in" profile section — the other half of the trade.
const TRADER_WANTS = {
  'Sarah Chen': ['mechanical keyboard', 'electronics'],
  'James Wilson': ['bluetooth speaker'],
  'Emma Thompson': ['film camera', 'camera'],
  'David Kim': ['espresso machine'],
  'Priya Patel': ['mechanical keyboard'],
  'Maria Lopez': ['speaker', 'audio'],
};
function traderWants(name) {
  if (TRADER_WANTS[name]) return TRADER_WANTS[name];
  // Fallback: infer from the categories they trade in.
  return [...new Set(state.items.filter(i => i.owner === name).map(i => i.category))];
}
// Pairing engine v2: the double coincidence of wants, both sides declared.
// They HAVE what I want  +  they WANT what I have, then distance decay and
// a light reputation tiebreak.
function buildPairings() {
  const others = [...new Set(state.items.filter(i => i.owner !== ME.name && !i.traded && !state.blocked.includes(i.owner)).map(i => i.owner))];
  const myItems = state.items.filter(i => i.owner === ME.name && !i.traded);
  const pairs = [];
  others.forEach(name => {
    const theirItems = state.items.filter(i => i.owner === name && !i.traded);
    if (!theirItems.length) return;
    // Side 1: their listings hitting MY declared interests.
    const theirHits = theirItems.filter(matchesInterests);
    // Side 2: my listings hitting THEIR declared wants.
    const wantTags = traderWants(name).map(t => t.toLowerCase());
    const hitText = i => (i.title + ' ' + i.desc + ' ' + i.category).toLowerCase();
    const myHits = wantTags.length ? myItems.filter(i => wantTags.some(t => hitText(i).includes(t))) : [];
    let score = theirHits.length * 2 + myHits.length * 2;
    if (score <= 0) return;
    // RuneScape rule: both sides priced and values wildly apart -> no pairing.
    const priceA = (theirHits[0] || theirItems[0]).cashPrice;
    const priceB = myHits.length ? myHits[0].cashPrice : null;
    if (priceA && priceB && Math.max(priceA, priceB) / Math.min(priceA, priceB) > 3) return;
    // Distance decay: nearer traders win ties.
    const dist = Math.min(...theirItems.map(i => i.distance == null ? 999 : i.distance));
    score = score / (1 + dist / 12);
    // Reputation tiebreak: higher-rated traders float slightly up.
    const rating = theirItems[0].ownerRating || 4.5;
    score = score * (0.8 + rating * 0.06);
    const first = theirHits[0] || theirItems[0];
    const mutual = theirHits.length > 0 && myHits.length > 0;
    const reasons = [];
    if (theirHits.length) {
      const tag = matchingTag(theirHits[0]);
      reasons.push('Has <b>' + esc(theirHits[0].title) + '</b>' + (tag ? ' — you want \u201c' + esc(tag) + '\u201d' : ''));
    }
    if (myHits.length) {
      const wtag = wantTags.find(t => hitText(myHits[0]).includes(t));
      reasons.push('Wants <b>' + esc(myHits[0].title) + '</b>' + (wtag ? ' — matches their \u201c' + esc(wtag) + '\u201d' : ''));
    }
    pairs.push({ name, score, mutual, itemId: first.id,
      dist: first.distance == null ? 'nearby' : '~' + first.distance + ' mi',
      reason: reasons.join('<br>') });
  });
  return pairs.sort((a, b) => b.score - a.score);
}
function pairCardHTML(p) {
  return '<div class="pair-card" data-pairitem="' + p.itemId + '">'
    + '<span class="avatar" style="background:' + faceColor(p.name) + ';color:#fff">' + esc(initialsOf(p.name)) + '</span>'
    + '<div class="pair-text"><div class="pair-name">' + esc(p.name) + ' <span class="muted">· ' + esc(p.dist) + '</span>' + (p.mutual ? '<span class="mutual-pill">Mutual match</span>' : '') + '</div>'
    + '<div class="pair-reason">' + p.reason + '</div></div>'
    + '<span class="material-symbols-outlined icon-inline">arrow_forward</span></div>';
}
function pairingsHTML() {
  const pairs = buildPairings().slice(0, 3);
  if (!pairs.length) return '';
  return '<div class="home-section"><div class="home-section-head"><h2>Made to trade</h2></div>' + pairs.map(pairCardHTML).join('') + '</div>';
}


// Personalized hub: pending offers, unread messages, categories,
// nearby items, and community activity. Browse lives behind See all.
function renderHome() {
  const mine = state.items.filter(i => i.owner === ME.name);
  const nearby = state.items.filter(i => i.owner !== ME.name && !i.traded && !state.blocked.includes(i.owner))
    .sort((a, b) => (matchesInterests(b) - matchesInterests(a)) || ((a.distance ?? 999) - (b.distance ?? 999))).slice(0, 4);
  const pending = state.offers.filter(o => o.status === 'Pending');
  const unreadConvos = state.conversations.filter(c => c.folder === 'inbox' && c.unread);
  const offerRow = o => {
    const theirItem = o.type === 'cash' ? itemById(o.theirItemId) : itemById(o.direction === 'received' ? o.myItemId : o.theirItemId);
    return `<div class="home-offer" data-offer="${o.id}">
      ${theirItem ? `<img src="${esc(theirItem.image)}" alt="">` : ''}
      <div class="home-offer-text"><div class="home-offer-title">${esc(theirItem ? theirItem.title : 'Trade offer')}</div>
      <div class="home-offer-sub">${o.direction === 'received' ? 'From ' + esc(o.from) : 'Sent to ' + esc(o.from)} · ${esc(o.date)}</div></div>
      <span class="badge">${esc(o.status)}</span>
    </div>`;
  };
  const tile = c => {
    const n = state.items.filter(i => i.category === c.name && !i.traded && !state.blocked.includes(i.owner)).length;
    return `<button class="cat-tile" data-cat="${c.name}"><span class="tic" style="background:${c.bg};color:${c.fg}">${c.svg}</span><b>${c.name}</b><span>${n} item${n === 1 ? '' : 's'}</span></button>`;
  };
  $('#homeContent').innerHTML = `
    <div class="home-welcome"><h1>Welcome back</h1></div>
    ${pending.length ? `<div class="home-section"><div class="home-section-head"><h2>Pending offers</h2><button class="see-all" data-nav="trades">See all <span class="material-symbols-outlined icon-inline">arrow_forward</span></button></div>${pending.slice(0, 2).map(offerRow).join('')}</div>` : ''}
    ${unreadConvos.length ? `<div class="home-section"><div class="home-section-head"><h2>Unread messages</h2><button class="see-all" data-nav="messages">See all <span class="material-symbols-outlined icon-inline">arrow_forward</span></button></div>${unreadConvos.map(c => {
      const last = c.messages[c.messages.length - 1];
      return `<div class="home-msg" data-convo="${c.id}"><span class="avatar">${esc(c.initials)}</span><div class="convo-text"><div class="convo-name">${esc(c.with)}</div><div class="convo-preview">${esc(last ? last.text : '')}</div></div></div>`;
    }).join('')}</div>` : ''}
    <div class="home-section"><div class="home-section-head"><h2>Categories</h2><button class="see-all" data-nav="discover">See all <span class="material-symbols-outlined icon-inline">arrow_forward</span></button></div><div class="cat-tiles">${CATS.map(tile).join('')}</div></div>
    ${pairingsHTML()}
    <div class="home-section"><div class="home-section-head"><h2>Near you</h2></div><div class="grid" id="nearGrid">${nearby.map(cardHTML).join('')}</div>
      <div class="see-more-wrap"><button class="btn btn-outline see-more" data-nav="discover">See More</button></div></div>`;
  $$('#homeContent [data-nav]').forEach(el => el.addEventListener('click', () => nav(el.dataset.nav)));
  $$('#homeContent [data-cat]').forEach(el => el.addEventListener('click', () => { currentCategory = el.dataset.cat; nav('discover'); }));
  $$('#homeContent [data-pairitem]').forEach(c => c.addEventListener('click', () => openDetail(+c.dataset.pairitem)));
  // "For you" badges on interest-matched cards
  $$('#nearGrid .card').forEach(c => {
    const item = itemById(+c.dataset.id);
    if (item && matchesInterests(item)) c.insertAdjacentHTML('afterbegin', '<span class="foryou-badge">For you</span>');
  });
  $$('#homeContent .home-offer').forEach(el => el.addEventListener('click', () => nav('trades')));
  $$('#homeContent .home-msg').forEach(el => el.addEventListener('click', () => { activeConvo = +el.dataset.convo; currentFolder = 'inbox'; nav('messages'); }));
  $$('#homeContent .card').forEach(c => c.addEventListener('click', () => openDetail(+c.dataset.id)));
  bindSaveButtons();
}

// ---------- SAVED ----------
// Bookmark an item to come back to it. Saved items live in Profile.
function isSaved(id) { return state.saved.includes(id); }
function toggleSave(id) {
  if (isSaved(id)) {
    state.saved = state.saved.filter(x => x !== id);
    toast('Removed from saved.');
  } else {
    state.saved.push(id);
    toast('Saved.');
  }
  save();
}
function bindSaveButtons() {
  $$('[data-save]').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    toggleSave(+b.dataset.save);
    b.classList.toggle('saved', isSaved(+b.dataset.save));
  }));
}
// Local-first: listings sorted nearest-first, filterable by radius.
function renderBrowse() {
  const cats = ['All', 'Electronics', 'Music', 'Outdoor', 'Collectibles', 'Fashion'];
  $('#categoryChips').innerHTML = cats.map(c =>
    `<button class="chip ${c === currentCategory ? 'active' : ''}" data-cat="${c}">${c}</button>`).join('');
  $$('#categoryChips .chip').forEach(ch => ch.addEventListener('click', () => { currentCategory = ch.dataset.cat; renderBrowse(); }));
  const radii = [[0, 'Any distance'], [5, 'Within 5 mi'], [10, 'Within 10 mi'], [25, 'Within 25 mi'], [50, 'Within 50 mi']];
  $('#radiusChips').innerHTML = radii.map(([v, label]) =>
    `<button class="chip ${v === currentRadius ? 'active' : ''}" data-radius="${v}">${label}</button>`).join('');
  $$('#radiusChips .chip').forEach(ch => ch.addEventListener('click', () => { currentRadius = +ch.dataset.radius; renderBrowse(); }));
  const items = state.items
    .filter(i => !i.traded && !state.blocked.includes(i.owner) &&
      (currentCategory === 'All' || i.category === currentCategory) &&
      (currentRadius === 0 || (i.distance ?? 999) <= currentRadius))
    .sort((a, b) => (a.distance ?? 999) - (b.distance ?? 999));
  $('#noResults').classList.toggle('hidden', items.length > 0);
  $('#browseGrid').innerHTML = items.map(cardHTML).join('');
  $$('#browseGrid .card').forEach(c => c.addEventListener('click', () => openDetail(+c.dataset.id)));
  bindSaveButtons();
}
function cardHTML(i) {
  return `<article class="card ${i.traded ? 'traded' : ''}" data-id="${i.id}">
    <button class="save-btn ${isSaved(i.id) ? 'saved' : ''}" data-save="${i.id}" aria-label="Save item"><span class="material-symbols-outlined">bookmark</span></button>
    <img src="${esc(i.image)}" alt="${esc(i.title)}" loading="lazy">
    <div class="card-body">
      <div class="card-title-row"><span class="card-title">${esc(i.title)}</span><span class="badge">${i.traded ? 'Traded' : esc(i.condition)}</span></div>
      <p class="card-desc">${esc(i.desc)}</p>
      ${i.cashPrice ? `<div class="cash-note">Also accepts $${esc(i.cashPrice)} cash</div>` : ''}
      <div class="owner-row">
        <span class="avatar">${esc(i.ownerInitials)}</span>
        <div class="owner-meta"><div class="owner-name">${esc(i.owner)}</div><div class="owner-loc"><span class="material-symbols-outlined icon-inline">location_on</span> ${esc(i.ownerLoc)}${i.distance == null ? '' : (i.distance === 0 ? ' · Your listing' : ' · ' + esc(i.distance) + ' mi away')}</div></div>
        <span class="rating"><span class="material-symbols-outlined icon-star">star</span>${i.ownerRating}</span>
      </div>
    </div>
  </article>`;
}

// ---------- DETAIL ----------
function openDetail(id) {
  const i = itemById(id);
  const mine = i.owner === ME.name;
  $('#detailContent').innerHTML = `
    <button class="save-btn detail-save ${isSaved(i.id) ? 'saved' : ''}" data-save="${i.id}" aria-label="Save item"><span class="material-symbols-outlined">bookmark</span></button>
    <img class="detail-img" src="${esc(i.image)}" alt="${esc(i.title)}">
    <div class="detail-head"><h1>${esc(i.title)}</h1><span class="badge">${i.traded ? 'Traded' : esc(i.condition)}</span></div>
    <p class="detail-desc">${esc(i.desc)}</p>
    <p class="detail-meta">Category: ${esc(i.category)} &nbsp;·&nbsp; Listed ${esc(i.listed)}${i.distance == null ? '' : (i.distance === 0 ? ' &nbsp;·&nbsp; Your listing' : ' &nbsp;·&nbsp; ' + esc(i.distance) + ' mi away')}</p>
    <div class="owner-card">
      <span class="avatar lg">${esc(i.ownerInitials)}</span>
      <div class="owner-meta">
        <div class="owner-name">${esc(i.owner)}</div>
        <div class="owner-loc"><span class="material-symbols-outlined icon-inline">location_on</span> ${esc(i.ownerLoc)}</div>
        <div class="rating"><span class="material-symbols-outlined icon-star">star</span>${i.ownerRating} · ${i.owner === ME.name ? state.items.filter(x => x.owner === ME.name).length : '—'} items</div>
      </div>
    </div>
    ${i.traded
      ? `<p class="muted">This item has been traded.</p>`
      : mine
      ? `<p class="muted">This is your item.</p>`
      : `<button class="btn btn-primary" id="proposeBtn">Propose Trade</button>
      <button class="btn btn-outline" id="messageBtn" style="margin-top:8px">Message ${esc(i.owner.split(' ')[0])}</button>
      ${i.cashPrice ? `<button class="btn btn-outline" id="cashOfferBtn" style="margin-top:8px">Offer $${esc(i.cashPrice)} cash</button>
      <div id="cashConfirm" class="cash-confirm hidden"><p>Send a cash offer of $${esc(i.cashPrice)} to ${esc(i.owner)}?</p><p class="promise-small">A 5% TradeHub fee applies to cash payments. Arrange payment directly with ${esc(i.owner)}.</p>
      <div class="form-actions"><button class="btn btn-ghost" id="cashCancel">Cancel</button><button class="btn btn-primary" id="cashSend">Send Offer</button></div></div>` : ''}`}`;
  const detailActions = `<div class="detail-actions"><button class="text-btn" id="reportListingBtn">Report listing</button>${mine ? '' : `<button class="text-btn" id="blockUserBtn">Block ${esc(i.owner)}</button>`}</div>
  <div id="blockConfirm" class="cash-confirm hidden"><p>Block ${esc(i.owner)}? You won't see their listings, offers, or messages.</p><div class="form-actions"><button class="btn btn-ghost" id="blockCancel">Cancel</button><button class="btn btn-primary" id="blockConfirmBtn">Block</button></div></div>`;
  $('#detailContent').insertAdjacentHTML('beforeend', detailActions);
  const reportBtn = $('#reportListingBtn');
  if (reportBtn) reportBtn.addEventListener('click', () => openReport(i.owner + ' — ' + i.title));
  const blockBtn = $('#blockUserBtn');
  if (blockBtn) blockBtn.addEventListener('click', () => $('#blockConfirm').classList.remove('hidden'));
  const blockCancel = $('#blockCancel');
  if (blockCancel) blockCancel.addEventListener('click', () => $('#blockConfirm').classList.add('hidden'));
  const blockConfirmBtn = $('#blockConfirmBtn');
  if (blockConfirmBtn) blockConfirmBtn.addEventListener('click', () => { blockUser(i.owner); nav('discover'); });
  bindSaveButtons();
  nav('detail');
  const btn = $('#proposeBtn');
  if (btn) btn.addEventListener('click', () => openTradeModal(id));
  const msgBtn = $('#messageBtn');
  if (msgBtn) msgBtn.addEventListener('click', () => openConversationWith(i.owner, i.id));
  const cashBtn = $('#cashOfferBtn');
  if (cashBtn) cashBtn.addEventListener('click', () => $('#cashConfirm').classList.remove('hidden'));
  const cashCancel = $('#cashCancel');
  if (cashCancel) cashCancel.addEventListener('click', () => $('#cashConfirm').classList.add('hidden'));
  const cashSend = $('#cashSend');
  if (cashSend) cashSend.addEventListener('click', () => {
    state.offers.push({ id: Date.now(), from: ME.name, date: new Date().toLocaleDateString('en-US'), status: 'Pending', direction: 'sent', type: 'cash', cashAmount: i.cashPrice, theirItemId: id, myItemId: null, message: `Hi! I'd like to offer $${i.cashPrice} cash for your ${i.title}.` });
    save();
    toast(`Cash offer of $${i.cashPrice} sent to ${i.owner}!`);
    nav('trades');
  });
  nav('detail');
}

// ---------- TRADE PROPOSAL ----------
function openTradeModal(targetId) {
  tradeTargetId = targetId;
  tradeSelectedMine = null;
  const target = itemById(targetId);
  $('#tradeTargetCard').innerHTML = `<div class="mini-item"><img src="${esc(target.image)}" alt=""><div><div class="mi-title">${esc(target.title)}</div><div class="mi-sub">${esc(target.condition)} · ${esc(target.owner)}</div></div></div>`;
  const mine = state.items.filter(i => i.owner === ME.name);
  $('#myItemsPicker').innerHTML = mine.map(i =>
    `<div class="mini-item" data-id="${i.id}"><img src="${esc(i.image)}" alt=""><div><div class="mi-title">${esc(i.title)}</div><div class="mi-sub">${esc(i.condition)}</div></div></div>`).join('');
  $$('#myItemsPicker .mini-item').forEach(m => m.addEventListener('click', () => {
    tradeSelectedMine = +m.dataset.id;
    $$('#myItemsPicker .mini-item').forEach(x => x.classList.toggle('selected', +x.dataset.id === tradeSelectedMine));
  }));
  $('#tradeModal').classList.remove('hidden');
}
$('#tradeCancel').addEventListener('click', () => $('#tradeModal').classList.add('hidden'));
$('#tradeConfirm').addEventListener('click', () => {
  if (!tradeSelectedMine) { toast('Choose one of your items to offer.'); return; }
  const target = itemById(tradeTargetId);
  state.offers.push({ id: Date.now(), from: ME.name, date: new Date().toLocaleDateString('en-US'), status: 'Pending', direction: 'sent', theirItemId: tradeTargetId, myItemId: tradeSelectedMine, message: `Hi! I'd like to trade my ${itemById(tradeSelectedMine).title} for your ${target.title}. Let me know what you think!` });
  save();
  $('#tradeModal').classList.add('hidden');
  toast('Offer sent to ' + target.owner + '!');
  nav('trades');
});

// ---------- ADD ITEM ----------
// Photo-first listing: snap a pic or pick one, compressed so it fits in
// browser storage. No image URL needed.
let pendingPhoto = null;
function fileToCompressedDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const max = 1200;
        const scale = Math.min(1, max / Math.max(img.width, img.height));
        const w = Math.round(img.width * scale);
        const h = Math.round(img.height * scale);
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
$('#fPhoto').addEventListener('change', async e => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    pendingPhoto = await fileToCompressedDataURL(file);
    $('#photoPreviewImg').src = pendingPhoto;
    $('#photoHero').classList.add('has-photo');
  } catch {
    toast('Could not read that photo — try another one.');
  }
});
$('#photoRemove').addEventListener('click', () => {
  pendingPhoto = null;
  $('#fPhoto').value = '';
  $('#photoHero').classList.remove('has-photo');
});
$('#addForm').addEventListener('submit', e => {
  e.preventDefault();
  const title = $('#fTitle').value.trim();
  const desc = $('#fDesc').value.trim();
  const cat = $('#fCategory').value;
  const cond = $('#fCondition').value;
  const cash = parseFloat($('#fCash').value);
  if (!title || !desc || !cat || !cond) return;
  const id = Date.now();
  state.items.unshift({ id, title, desc, category: cat, condition: cond,
    image: pendingPhoto || 'images/no-photo.jpg',
    owner: ME.name, ownerLoc: ME.location, distance: 0, cashPrice: Number.isFinite(cash) && cash > 0 ? cash : null, ownerRating: ME.rating, ownerInitials: ME.initials || initialsOf(ME.name), listed: new Date().toLocaleDateString('en-US') });
  save();
  e.target.reset();
  const newImg = pendingPhoto || 'images/no-photo.jpg';
  pendingPhoto = null;
  $('#photoHero').classList.remove('has-photo');
  currentCategory = 'All';
  // Mercari-style celebration: your listing is live.
  lastListedId = id;
  $('#successImg').src = newImg;
  $('#successTitle').textContent = title;
  $('#successSub').textContent = cat + ' · ' + cond;
  $('#listSuccessModal').classList.remove('hidden');
});

// ---------- SAFETY ----------
// Report / Block. Blocked users' listings, offers, and conversations
// are hidden everywhere; blocks can be undone from Profile.
let reportTarget = null;
function blockUser(name) {
  if (!state.blocked.includes(name)) state.blocked.push(name);
  save();
  toast(name + ' blocked. You can unblock them from your Profile.');
}
function openReport(name) {
  reportTarget = name;
  $('#reportTargetName').textContent = name;
  $('#reportNote').value = '';
  $('#reportModal').classList.remove('hidden');
}
$('#reportCancel').addEventListener('click', () => $('#reportModal').classList.add('hidden'));
let lastListedId = null;
function hideSuccess() { $('#listSuccessModal').classList.add('hidden'); }
$('#successView').addEventListener('click', () => { hideSuccess(); nav('profile', false); openDetail(lastListedId); });
$('#successAgain').addEventListener('click', () => { hideSuccess(); nav('add'); });
$('#successClose').addEventListener('click', () => { hideSuccess(); nav('profile'); });
$('#listSuccessModal').addEventListener('click', e => { if (e.target.id === 'listSuccessModal') { hideSuccess(); nav('profile'); } });
const addInterest = () => {
  const v = $('#interestInput').value.trim();
  if (v && !state.interests.some(t => t.toLowerCase() === v.toLowerCase()) && state.interests.length < 12) {
    state.interests.push(v);
    save();
  }
  $('#interestInput').value = '';
  $('#interestModal').classList.add('hidden');
  if (currentView === 'home') renderHome(); else if (currentView === 'profile') renderProfile();
};
$('#interestAdd').addEventListener('click', addInterest);
$('#interestInput').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); addInterest(); } });
$('#interestClose').addEventListener('click', () => $('#interestModal').classList.add('hidden'));
const openProfileEditor = () => {
  const acc = getSessionAccount(); if (!acc) return;
  $('#pfName').value = acc.name || '';
  $('#pfCity').value = acc.city || '';
  $('#pfBio').value = acc.bio || '';
  $('#editProfileModal').classList.remove('hidden');
};
const saveProfile = () => {
  const acc = getSessionAccount(); if (!acc) return;
  const name = $('#pfName').value.trim() || acc.name;
  const oldName = acc.name;
  acc.name = name;
  acc.city = $('#pfCity').value.trim();
  acc.bio = $('#pfBio').value.trim();
  if (name !== oldName) {
    // A rename follows the trader everywhere: listings, offers, conversations.
    state.items.forEach(i => { if (i.owner === oldName) i.owner = name; });
    state.offers.forEach(o => { if (o.from === oldName) o.from = name; });
    state.conversations.forEach(c => { if (c.with === oldName) c.with = name; });
    save();
  }
  persistAccounts();
  ME = accountToME(acc);
  const ha = $('#headerAvatar');
  if (ha) ha.textContent = ME.initials || initialsOf(ME.name);
  $('#editProfileModal').classList.add('hidden');
  if (currentView === 'profile') renderProfile();
  toast('Profile updated.');
};
$('#profileSave').addEventListener('click', saveProfile);
$('#profileEditClose').addEventListener('click', () => $('#editProfileModal').classList.add('hidden'));
$('#editProfileModal').addEventListener('click', e => { if (e.target.id === 'editProfileModal') $('#editProfileModal').classList.add('hidden'); });
$('#pfName').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); saveProfile(); } });
$('#pfCity').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); saveProfile(); } });
$('#interestModal').addEventListener('click', e => { if (e.target.id === 'interestModal') $('#interestModal').classList.add('hidden'); });
$('#successShare').addEventListener('click', async () => {
  const item = itemById(lastListedId);
  const shareText = item ? `Check out "${item.title}" on TradeHub — trade locally!` : 'Check out TradeHub — trade locally!';
  const shareUrl = location.origin + location.pathname;
  if (navigator.share) {
    try { await navigator.share({ title: 'TradeHub', text: shareText, url: shareUrl }); } catch (e) { /* dismissed */ }
  } else if (navigator.clipboard) {
    try { await navigator.clipboard.writeText(shareText + ' ' + shareUrl); toast('Link copied — share it anywhere!'); }
    catch (e) { toast('Sharing is not available here.'); }
  } else {
    toast('Sharing is not available here.');
  }
});
$('#reportSubmit').addEventListener('click', () => {
  if (!reportTarget) return;
  state.reports.push({ target: reportTarget, reason: $('#reportReason').value, note: $('#reportNote').value.trim(), from: ME.name, date: new Date().toLocaleDateString('en-US') });
  save();
  $('#reportModal').classList.add('hidden');
  toast('Thanks — we will review this report.');
});
// RuneScape-style trade window: both sides' items visible at once,
// both sides must confirm. Step 1: review + accept/decline.
// Step 2: confirm screen. Then the other side confirms -> completed.
$$('.tab').forEach(t => t.addEventListener('click', () => {
  activeTab = t.dataset.tab;
  $$('.tab').forEach(x => x.classList.toggle('active', x === t));
  renderTrades();
}));
function statusClass(s) { return 'status-' + s.toLowerCase().replace(/\s+/g, '-'); }
function renderTrades() {
  const rec = state.offers.filter(o => o.direction === 'received').length;
  const sent = state.offers.filter(o => o.direction === 'sent').length;
  $('#receivedCount').textContent = rec;
  $('#sentCount').textContent = sent;
  const list = state.offers.filter(o => {
    if (o.direction === 'received' && state.blocked.includes(o.from)) return false;
    if (o.direction === 'sent') {
      const theirs = itemById(o.theirItemId);
      if (theirs && state.blocked.includes(theirs.owner)) return false;
    }
    return o.direction === activeTab;
  });
  $('#offersList').innerHTML = list.length ? list.map(offerHTML).join('') : `<p class="empty">No ${activeTab} offers yet.</p>`;
  $$('#offersList .offer-card').forEach(card => card.addEventListener('click', () => openTradeWindow(+card.dataset.id)));
}
function offerHTML(o) {
  const theirs = itemById(o.theirItemId);
  const mine = itemById(o.myItemId);
  const sides = o.type === 'cash'
    ? `<div class="trade-sides"><div><div class="side-label">Cash offer</div><div class="mini-item"><div><div class="mi-title">$${esc(o.cashAmount)} cash</div><div class="mi-sub">For ${theirs ? esc(theirs.title) : 'item'}</div></div></div></div></div>`
    : `<div class="trade-sides">
      <div><div class="side-label">They offer</div><div class="mini-item"><img src="${theirs ? esc(theirs.image) : ''}"><div><div class="mi-title">${theirs ? esc(theirs.title) : 'Item removed'}</div><div class="mi-sub">${theirs ? esc(theirs.condition) : ''}</div></div></div></div>
      <div><div class="side-label">For your item</div><div class="mini-item"><img src="${mine ? esc(mine.image) : ''}"><div><div class="mi-title">${mine ? esc(mine.title) : 'Item removed'}</div><div class="mi-sub">${mine ? esc(mine.condition) : ''}</div></div></div></div>
    </div>`;
  return `<div class="offer-card" data-id="${o.id}">
    <div class="offer-top"><span class="offer-from">${o.direction === 'received' ? 'From ' + esc(o.from) : 'To ' + esc(theirs ? theirs.owner : '')}</span>
    <span><span class="status ${statusClass(o.status)}">${esc(o.status)}</span> <span class="offer-date">${esc(o.date)}</span></span></div>
    ${sides}
    <p class="offer-msg">${esc(o.message)}</p><p class="offer-tap-hint">Tap to review this trade <span class="material-symbols-outlined icon-inline">arrow_forward</span></p></div>`;
}
// ---------- TRADE WINDOW (hybrid restyle) ----------
const moneyFmt = n => { const v = +n; return Number.isInteger(v) ? String(v) : v.toFixed(2); };
const TW_CHECK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m8 12.5 2.7 2.7L16 9.5"/></svg>';
const TW_WARN_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 2.5 20h19L12 3z"/><path d="M12 9.5v5"/><path d="M12 17.5v.01"/></svg>';

function twItemCard(item, whoLabel, fallback) {
  if (!item) return `<div class="tw-item"><div class="tw-photo tw-photo-empty"></div><div><div class="tw-who">${whoLabel}</div><div class="tw-name">${esc(fallback)}</div></div></div>`;
  return `<div class="tw-item">
    <img class="tw-photo" src="${esc(item.image)}" alt="">
    <div><div class="tw-who">${whoLabel}</div><div class="tw-name">${esc(item.title)}</div>
    <div class="tw-meta">${esc(item.category)} · ${esc(item.condition)}</div>
    ${item.cashPrice ? `<div class="tw-price">$${moneyFmt(item.cashPrice)}</div>` : ''}</div>
  </div>`;
}
function twCashCard(amount, whoLabel) {
  return `<div class="tw-item"><div class="tw-photo tw-cash"><span>$</span></div>
    <div><div class="tw-who">${whoLabel}</div><div class="tw-name">$${moneyFmt(amount)} cash</div><div class="tw-meta">Cash offer</div></div></div>`;
}
// RuneScape-style value check, visualized at the decision point.
function fairnessHTML(o, mine, theirs) {
  let myP = null, theirP = null;
  if (o.type === 'cash') {
    const itemP = theirs && theirs.cashPrice ? +theirs.cashPrice : null;
    if (o.direction === 'received') { myP = itemP; theirP = +o.cashAmount; }
    else { myP = +o.cashAmount; theirP = itemP; }
  } else {
    myP = mine && mine.cashPrice ? +mine.cashPrice : null;
    theirP = theirs && theirs.cashPrice ? +theirs.cashPrice : null;
  }
  if (!myP || !theirP) return '';
  const ratio = Math.max(myP, theirP) / Math.min(myP, theirP);
  const ok = ratio <= 3;
  return `<div class="tw-fair ${ok ? 'ok' : 'warn'}">${ok ? TW_CHECK_SVG : TW_WARN_SVG}
    <div><div class="tw-fair-t">${ok ? 'Fair trade — values are close' : 'Values are far apart'}</div>
    <div class="tw-fair-s">$${moneyFmt(myP)} ⇄ $${moneyFmt(theirP)} · ${ok ? 'within' : 'outside'} fair range</div></div></div>`;
}
function twNoteHTML(o, otherName) {
  if (!o.message) return '';
  const isMine = o.direction === 'sent';
  const label = isMine ? 'Your note' : `${esc(otherName)}'s note`;
  const initials = isMine ? ME.initials : initialsOf(o.from);
  return `<div class="tw-sec-label">${label}</div>
  <div class="tw-note"><div class="tw-note-avatar">${esc(initials)}</div>
  <div><div class="tw-note-sub">Attached to this offer</div><div class="tw-note-text">“${esc(o.message)}”</div></div></div>`;
}
function openTradeWindow(id, step) {
  const o = state.offers.find(x => x.id === id);
  if (!o) return;
  const theirs = itemById(o.theirItemId);
  const mine = itemById(o.myItemId);
  const otherName = o.direction === 'received' ? o.from : (theirs ? theirs.owner : 'Trader');
  const box = $('#tradeWindowContent');
  const theirWho = `${esc(otherName)} offers`;
  // For cash offers, theirItemId is the item being bought; one side is cash.
  const mySide = o.type === 'cash'
    ? (o.direction === 'received' ? twItemCard(theirs, 'You offer', 'Item removed') : twCashCard(o.cashAmount, 'You offer'))
    : twItemCard(mine, 'You offer', 'Item removed');
  const theirSide = o.type === 'cash'
    ? (o.direction === 'received' ? twCashCard(o.cashAmount, theirWho) : twItemCard(theirs, theirWho, 'Item removed'))
    : twItemCard(theirs, theirWho, 'Item removed');
  const duel = `<div class="tw-duel">${mySide}<div class="tw-for"><span>for</span></div>${theirSide}</div>`;
  const fair = fairnessHTML(o, mine, theirs);
  const note = twNoteHTML(o, otherName);
  const head = title => `<h2 class="tw-title">${title}</h2><span class="status ${statusClass(o.status)}">${esc(o.status)}</span>`;
  if (o.status === 'Completed') {
    const existing = state.ratings.find(r => r.offerId === o.id);
    const ratingSection = existing
      ? `<div class="rating-done"><span class="material-symbols-outlined icon-star">star</span> You rated ${esc(otherName)} ${existing.stars} out of 5${existing.comment ? ` — “${esc(existing.comment)}”` : ''}</div>`
      : `<div class="rating-form"><h3>How was trading with ${esc(otherName)}?</h3>
        <div class="rating-stars" id="ratingStars">${[1, 2, 3, 4, 5].map(n => `<button class="star-pick" data-stars="${n}"><span class="material-symbols-outlined">star</span></button>`).join('')}</div>
        <textarea id="ratingComment" rows="2" placeholder="Anything to add? (optional)"></textarea>
        <button class="btn btn-primary" id="ratingSubmit">Submit Rating</button></div>`;
    box.innerHTML = `${head('Trade completed')}<p class="muted">You traded with ${esc(otherName)}.</p>${duel}${fair}${ratingSection}`;
    let picked = 0;
    $$('#ratingStars .star-pick').forEach(b => b.addEventListener('click', () => {
      picked = +b.dataset.stars;
      $$('#ratingStars .star-pick').forEach(x => x.classList.toggle('selected', +x.dataset.stars <= picked));
    }));
    const submit = $('#ratingSubmit');
    if (submit) submit.addEventListener('click', () => {
      if (!picked) { toast('Tap the stars to rate this trade.'); return; }
      state.ratings.push({ offerId: o.id, from: ME.name, to: otherName, stars: picked, comment: $('#ratingComment').value.trim(), date: new Date().toLocaleDateString('en-US') });
      save();
      toast('Thanks for rating ' + otherName + '!');
      openTradeWindow(id);
    });
  } else if (o.status === 'Declined' || o.status === 'Cancelled') {
    box.innerHTML = `${head('Trade ' + o.status.toLowerCase())}<p class="muted">This offer is no longer active.</p>${duel}${fair}`;
  } else if (o.status === 'Awaiting confirmation') {
    box.innerHTML = `${head('Waiting for confirmation')}<p class="muted">You confirmed. Waiting for ${esc(otherName)} to confirm.</p>${duel}${fair}`;
  } else if (step === 'confirm') {
    const feeLine = o.type === 'cash'
      ? ` A 5% TradeHub fee applies to this cash payment — the seller receives $${(o.cashAmount * 0.95).toFixed(2)} of $${moneyFmt(o.cashAmount)}.`
      : '';
    box.innerHTML = `${head('Confirm this trade')}<p class="muted">Double-check both sides. Both traders must confirm before the trade is final.</p>${duel}${fair}<p class="safety-note">Meeting up? Meet in a public place during the day, bring a friend, and inspect both items before confirming.</p><p class="promise-note">Item trades are free.${feeLine}</p><div class="form-actions"><button class="btn btn-ghost" id="twBack">Go back</button><button class="btn btn-primary" id="twConfirm">Confirm Trade</button></div>`;
    $('#twBack').addEventListener('click', () => openTradeWindow(id));
    $('#twConfirm').addEventListener('click', () => {
      o.status = 'Awaiting confirmation';
      save();
      openTradeWindow(id);
      renderTrades();
      setTimeout(() => {
        o.status = 'Completed';
        // Traded items leave circulation.
        [mine, theirs].forEach(it => { if (it) it.traded = true; });
        save();
        toast('Trade completed with ' + otherName + '!');
        renderTrades();
        openTradeWindow(id);
      }, 2500);
    });
  } else if (o.direction === 'received') {
    box.innerHTML = `${head('Trade with ' + esc(otherName))}${duel}${fair}${note}<div class="form-actions"><button class="btn btn-outline" id="twDecline">Decline</button><button class="btn btn-primary" id="twAccept">Accept Trade</button></div><p class="safety-note">Meet in a public place during the day. Inspect both items before confirming.</p>`;
    $('#twDecline').addEventListener('click', () => { o.status = 'Declined'; save(); toast('Offer declined.'); renderTrades(); openTradeWindow(id); });
    $('#twAccept').addEventListener('click', () => openTradeWindow(id, 'confirm'));
  } else {
    box.innerHTML = `${head('Offer to ' + esc(otherName))}<p class="muted">Waiting for ${esc(otherName)} to respond.</p>${duel}${fair}${note}<div class="form-actions"><button class="btn btn-outline" id="twCancel">Cancel Offer</button></div>`;
    $('#twCancel').addEventListener('click', () => { o.status = 'Cancelled'; save(); toast('Offer cancelled.'); renderTrades(); openTradeWindow(id); });
  }
  box.insertAdjacentHTML('afterbegin', '<button class="modal-x" id="twX" aria-label="Close">×</button>');
  $('#twX').addEventListener('click', closeTradeWindow);
  $('#tradeWindow').classList.remove('hidden');
}
function closeTradeWindow() { $('#tradeWindow').classList.add('hidden'); }
// Backdrop tap and Escape close the trade window and other modals.
$('#tradeWindow').addEventListener('click', e => { if (e.target.id === 'tradeWindow') closeTradeWindow(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeTradeWindow();
    $('#tradeModal').classList.add('hidden');
    $('#reportModal').classList.add('hidden');
  }
});

// ---------- MESSAGES ----------
// eBay-style messaging: item-led conversation list, item card pinned at the
// top of each thread, chat bubbles, full-screen thread on mobile.
function updateMsgBadge() {
  const total = state.conversations.filter(c => !state.blocked.includes(c.with)).reduce((n, c) => n + (c.unread || 0), 0);
  const badge = $('#msgBadge');
  badge.textContent = total;
  badge.classList.toggle('hidden', total === 0);
}
// Open (or start) a conversation with a trader about one of their items.
function openConversationWith(owner, itemId) {
  const item = itemById(itemId);
  let c = state.conversations.find(x => x.with === owner && x.itemId === itemId && x.folder !== 'trash');
  if (!c) {
    c = { id: Date.now(), with: owner, initials: item ? item.ownerInitials : initialsOf(owner), itemId, folder: 'sent', unread: 0, messages: [] };
    state.conversations.unshift(c);
    save();
  }
  activeConvo = c.id;
  currentFolder = c.folder;
  nav('messages');
}
function renderMessages() {
  updateMsgBadge();
  const layout = $('.messages-layout');
  if (layout) layout.classList.toggle('thread-open', activeConvo !== null);
  // Folder sidebar (Inbox / Sent / Unread / Trash). Blocked users hidden.
  const visibleConvos = state.conversations.filter(c => !state.blocked.includes(c.with));
  const inboxN = visibleConvos.filter(c => c.folder === 'inbox').length;
  const sentN = visibleConvos.filter(c => c.folder === 'sent').length;
  const unreadN = visibleConvos.filter(c => c.folder === 'inbox' && c.unread).length;
  const trashN = visibleConvos.filter(c => c.folder === 'trash').length;
  const folders = [
    ['inbox', 'Inbox', inboxN], ['sent', 'Sent', sentN],
    ['unread', 'Unread', unreadN], ['trash', 'Trash', trashN],
  ];
  $('#folderList').innerHTML = folders.map(([key, label, n]) =>
    `<button class="folder ${currentFolder === key ? 'active' : ''}" data-folder="${key}"><span>${label}</span><span class="folder-count">${n}</span></button>`).join('');
  $$('#folderList .folder').forEach(f => f.addEventListener('click', () => {
    currentFolder = f.dataset.folder;
    activeConvo = null;
    renderMessages();
  }));
  const visible = visibleConvos.filter(c =>
    currentFolder === 'inbox' ? c.folder === 'inbox' :
    currentFolder === 'sent' ? c.folder === 'sent' :
    currentFolder === 'unread' ? (c.folder === 'inbox' && c.unread) :
    c.folder === 'trash');
  $('#conversationList').innerHTML = visible.length ? visible.map(c => {
    const last = c.messages[c.messages.length - 1];
    const item = itemById(c.itemId);
    return `<div class="convo ${activeConvo === c.id ? 'active' : ''} ${c.unread ? 'unread' : ''}" data-id="${c.id}">
      ${item ? `<img class="convo-item-img" src="${esc(item.image)}" alt="">` : `<span class="avatar">?</span>`}
      <div class="convo-text">
        <div class="convo-top"><span class="convo-name">${esc(c.with)}</span><span class="convo-time">${last ? esc(last.time) : ''}</span></div>
        ${item ? `<div class="convo-item-title">${esc(item.title)}</div>` : ''}
        <div class="convo-preview">${esc(last ? last.text : '')}</div>
      </div>
      ${c.unread ? `<span class="unread-badge">${c.unread}</span>` : ''}
    </div>`;
  }).join('') : `<p class="empty">Nothing in ${currentFolder}.</p>`;
  $$('#conversationList .convo').forEach(cv => cv.addEventListener('click', () => {
    activeConvo = +cv.dataset.id;
    const c = state.conversations.find(x => x.id === activeConvo);
    if (c && c.unread && c.folder !== 'trash') { c.unread = 0; save(); }
    renderMessages();
  }));
  const convo = state.conversations.find(c => c.id === activeConvo);
  if (!convo) { $('#threadView').innerHTML = '<p class="empty">Select a conversation to start messaging.</p>'; return; }
  const item = itemById(convo.itemId);
  const inTrash = convo.folder === 'trash';
  const bubblesHTML = convo.messages.map(m => {
    const me = m.from === 'me';
    return `<div class="bubble-row ${me ? 'me' : 'them'}">
      <div class="bubble ${me ? 'me' : 'them'}">${esc(m.text)}</div>
      <span class="bubble-time">${esc(m.time)}</span>
    </div>`;
  }).join('');
  $('#threadView').innerHTML = `
    <div class="thread-head">
      <button class="thread-back" id="threadBack"><span class="material-symbols-outlined">arrow_back</span></button>
      <span class="avatar">${esc(convo.initials)}</span>
      <div class="thread-who"><div class="convo-name">${esc(convo.with)}</div><div class="thread-sub">${item ? `About “${esc(item.title)}”` : 'Direct message'}</div></div>
      <div class="thread-actions">
        ${inTrash
          ? `<button class="thread-action" id="restoreBtn">Restore</button><button class="thread-action danger" id="deleteForeverBtn">Delete forever</button>`
          : `<button class="thread-action" id="markUnreadBtn">Mark unread</button><button class="thread-action" id="trashBtn">Delete</button><button class="thread-action" id="blockThreadBtn">Block</button>`}
      </div>
    </div>
    ${item ? `<div class="thread-item-card" data-item="${item.id}">
      <img src="${esc(item.image)}" alt="">
      <div><div class="mi-title">${esc(item.title)}</div><div class="mi-sub">${esc(item.condition)} · Listed ${esc(item.listed)}</div></div>
      <span class="view-item-link">View item <span class="material-symbols-outlined icon-inline">arrow_forward</span></span>
    </div>` : ''}
    <div class="thread-msgs" id="threadMsgs">
      <div class="date-divider"><span>Today</span></div>
      ${bubblesHTML}
    </div>
    ${inTrash
      ? `<p class="thread-trashed-note">This conversation is in Trash. Restore it to reply.</p>`
      : `<form class="thread-input" id="msgForm"><input id="msgInput" placeholder="Type a message..." autocomplete="off"><button type="submit">Send</button></form>`}`;
  const backBtn = $('#threadBack');
  if (backBtn) backBtn.addEventListener('click', () => { activeConvo = null; renderMessages(); });
  const markUnread = $('#markUnreadBtn');
  if (markUnread) markUnread.addEventListener('click', () => {
    convo.unread = 1; convo.folder = 'inbox'; save();
    toast('Marked as unread.');
    currentFolder = 'inbox'; activeConvo = null; renderMessages();
  });
  const trashBtn = $('#trashBtn');
  if (trashBtn) trashBtn.addEventListener('click', () => {
    convo.folder = 'trash'; convo.unread = 0; save();
    toast('Conversation moved to Trash.');
    currentFolder = 'trash'; activeConvo = null; renderMessages();
  });
  const blockThreadBtn = $('#blockThreadBtn');
  if (blockThreadBtn) blockThreadBtn.addEventListener('click', () => {
    blockUser(convo.with);
    activeConvo = null; renderMessages();
  });
  const restoreBtn = $('#restoreBtn');
  if (restoreBtn) restoreBtn.addEventListener('click', () => {
    convo.folder = 'inbox'; save();
    toast('Conversation restored to Inbox.');
    currentFolder = 'inbox'; activeConvo = null; renderMessages();
  });
  const delForever = $('#deleteForeverBtn');
  if (delForever) delForever.addEventListener('click', () => {
    state.conversations = state.conversations.filter(x => x.id !== convo.id);
    save();
    toast('Conversation permanently deleted.');
    activeConvo = null; renderMessages();
  });
  const itemCard = $('#threadView .thread-item-card');
  if (itemCard) itemCard.addEventListener('click', () => openDetail(+itemCard.dataset.item));
  const box = $('#threadMsgs');
  box.scrollTop = box.scrollHeight;
  const msgForm = $('#msgForm');
  if (msgForm) msgForm.addEventListener('submit', e => {
    e.preventDefault();
    const v = $('#msgInput').value.trim();
    if (!v) return;
    convo.messages.push({ from: 'me', text: v, time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) });
    save();
    renderMessages();
    setTimeout(() => {
      convo.messages.push({ from: 'them', text: 'Thanks for the message! Let me take a look and get back to you.', time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) });
      save();
      renderMessages();
    }, 1500);
  });
}

// ---------- PROFILE ----------
function renderProfile() {
  const mine = state.items.filter(i => i.owner === ME.name);
  const done = completedTrades();
  const lv = traderLevel(done);
  const goalItems = Math.min(mine.length, 5);
  $('#profileContent').innerHTML = `
    <div class="profile-card">
      <span class="avatar lg">${ME.initials}</span>
      <div style="flex:1">
        <h1>${ME.name}</h1>
        <div class="handle">${ME.handle}</div>
        <div class="profile-meta"><span><span class="material-symbols-outlined icon-inline">location_on</span> ${ME.location}</span><span>Member since ${ME.since}</span></div>
        <div class="stats">
          <div class="stat"><b><span class="material-symbols-outlined icon-star">star</span> ${ME.rating}</b><span>Rating</span></div>
          <div class="stat"><b>${ME.trades}</b><span>Trades</span></div>
          <div class="stat"><b>${mine.length}</b><span>Items</span></div>
        </div>
        <p class="bio" style="margin-top:12px">${ME.bio}</p>
        <div style="margin-top:16px;display:flex;gap:10px"><button class="btn btn-outline" id="editProfileBtn" style="flex:1">Edit profile</button><button class="btn btn-outline" id="signOutBtn" style="flex:1">Sign out</button></div>
      </div>
    </div>
    <div class="section-head"><h2>Interested in</h2></div>
    ${interestTagsHTML()}
    <p class="muted interests-hint" style="margin-bottom:20px">These tune your feed \u2014 and help nearby traders find you.</p>
    <div class="level-card"><div class="level-top"><b>Level ${lv.cur.n} · ${lv.cur.name}</b><span class="lvl-pill">LV ${lv.cur.n}</span></div><div class="progress"><i style="width:${lv.pct}%"></i></div><p class="muted">${lv.next ? `${lv.next.at - done} more trade${lv.next.at - done === 1 ? '' : 's'} to reach <b>Level ${lv.next.n} · ${lv.next.name}</b>` : 'Max level — local legend status.'}</p></div>
    <div class="goal-card"><h2>Goals</h2>
      <div class="goal-row"><div class="gr-top"><b>List 5 items</b><span>${goalItems} of 5</span></div><div class="progress sm"><i style="width:${goalItems / 5 * 100}%"></i></div></div>
      <div class="goal-row"><div class="gr-top"><b>50 trades in October</b><span>${done} so far · nearby traders</span></div><div class="progress sm"><i class="goal" style="width:${Math.min(100, done / 50 * 100)}%"></i></div></div>
    </div>
    <div class="section-head"><h2>My Items</h2><button class="btn btn-dark" data-nav="add"><span class="material-symbols-outlined icon-inline">add</span> Add New Item</button></div>
    <div class="grid">${mine.map(cardHTML).join('') || '<p class="empty">No items yet — list your first one!</p>'}</div>
    <div class="section-head"><h2>Saved</h2></div>
    <div class="grid">${state.items.filter(x => isSaved(x.id) && !state.blocked.includes(x.owner)).map(cardHTML).join('') || '<p class="empty">Nothing saved yet — tap the bookmark on any item.</p>'}</div>
    <div class="card safety-card"><h2>Stay safe</h2><ul>
      <li>Meet in a public place during the day — a coffee shop, library, or police station lobby.</li>
      <li>Bring a friend, and tell someone where you're going.</li>
      <li>Inspect items in person before confirming a trade.</li>
      <li>Never share passwords, verification codes, or payment info in chat.</li>
      <li>Trust your gut — if a deal feels off, walk away.</li>
    </ul></div>
    ${state.blocked.length ? `<div class="card blocked-card"><h2>Blocked users</h2>${state.blocked.map(n => `<div class="blocked-row"><span>${esc(n)}</span><button class="btn btn-outline" data-unblock="${esc(n)}">Unblock</button></div>`).join('')}</div>` : ''}`;
  $$('#profileContent [data-nav]').forEach(el => el.addEventListener('click', () => nav(el.dataset.nav)));
  $$('#profileContent [data-unblock]').forEach(b => b.addEventListener('click', () => {
    state.blocked = state.blocked.filter(n => n !== b.dataset.unblock);
    save();
    toast(b.dataset.unblock + ' unblocked.');
    renderProfile();
  }));
  const signOut = $('#signOutBtn');
  if (signOut) signOut.addEventListener('click', () => {
    localStorage.removeItem(SESSION_KEY);
    toast('Signed out.');
    nav('auth');
  });
  $$('#profileContent .card[data-id]').forEach(c => c.addEventListener('click', () => openDetail(+c.dataset.id)));
  bindSaveButtons();
  bindInterestTags($('#profileContent'));
  const epb = $('#editProfileBtn');
  if (epb) epb.addEventListener('click', openProfileEditor);
}

// ---------- INIT ----------
const sess = getSessionAccount();
if (sess) ME = accountToME(sess);
updateMsgBadge();
nav(sess ? 'home' : 'auth');
