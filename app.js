// TradeHub live preview — demo data, saved in the browser (localStorage).
const KEY = 'tradehub-state-v4';
// Demo data is localized around Alex in San Francisco so the radius
// filter shows real results. Distances are miles from San Francisco.
const ME = { name: 'Alex Martinez', handle: '@alexm', location: 'San Francisco, CA', since: 'January 2024', rating: 4.8, trades: 24, bio: 'Tech enthusiast and avid trader. Always looking for interesting gear and new connections.', initials: 'AM', color: '#DBEAFE', text: '#155DFC' };

const SEED = {
  items: [
    { id: 1, title: 'Vintage Polaroid Camera', desc: 'Classic Polaroid SX-70 in excellent working condition. Comes with original leather case.', category: 'Collectibles', condition: 'Good', image: 'https://picsum.photos/seed/polaroid/600/400', owner: 'Sarah Chen', ownerLoc: 'Berkeley, CA', distance: 11, cashPrice: 120, ownerRating: 4.9, ownerInitials: 'SC', listed: '3/9/2026' },
    { id: 2, title: 'Mechanical Keyboard', desc: 'Custom mechanical keyboard with Cherry MX Blue switches. RGB backlit.', category: 'Electronics', condition: 'Like New', image: 'https://picsum.photos/seed/keyboard/600/400', owner: 'Alex Martinez', ownerLoc: 'San Francisco, CA', distance: 0, cashPrice: 85, ownerRating: 4.8, ownerInitials: 'AM', listed: '3/9/2026' },
    { id: 3, title: 'Vinyl Record Collection', desc: 'Set of 20 classic rock vinyl records from the 70s and 80s. All in great condition.', category: 'Music', condition: 'Good', image: 'https://picsum.photos/seed/vinyl/600/400', owner: 'James Wilson', ownerLoc: 'Oakland, CA', distance: 8, ownerRating: 4.7, ownerInitials: 'JW', listed: '3/9/2026' },
    { id: 4, title: 'Camping Tent (4-person)', desc: 'Spacious 4-person tent with rainfly. Perfect for family camping trips.', category: 'Outdoor', condition: 'Like New', image: 'https://picsum.photos/seed/tent/600/400', owner: 'Emma Thompson', ownerLoc: 'Daly City, CA', distance: 4, ownerRating: 5.0, ownerInitials: 'ET', listed: '3/8/2026' },
    { id: 5, title: 'Vintage Typewriter', desc: 'Beautiful Royal typewriter from the 1950s. Fully functional with original ribbon.', category: 'Collectibles', condition: 'Good', image: 'https://picsum.photos/seed/typewriter/600/400', owner: 'Sarah Chen', ownerLoc: 'Berkeley, CA', distance: 11, ownerRating: 4.9, ownerInitials: 'SC', listed: '3/8/2026' },
    { id: 6, title: 'Leather Messenger Bag', desc: 'Handcrafted genuine leather messenger bag with laptop compartment.', category: 'Fashion', condition: 'Like New', image: 'https://picsum.photos/seed/bag/600/400', owner: 'James Wilson', ownerLoc: 'Oakland, CA', distance: 8, ownerRating: 4.7, ownerInitials: 'JW', listed: '3/8/2026' },
    { id: 7, title: 'Hiking Backpack', desc: '65L hiking backpack with rain cover. Great for multi-day treks.', category: 'Outdoor', condition: 'Good', image: 'https://picsum.photos/seed/backpack/600/400', owner: 'Emma Thompson', ownerLoc: 'Daly City, CA', distance: 4, ownerRating: 5.0, ownerInitials: 'ET', listed: '3/7/2026' },
    { id: 8, title: 'Bluetooth Speaker', desc: 'Portable waterproof Bluetooth speaker with 12-hour battery life.', category: 'Electronics', condition: 'Like New', image: 'https://picsum.photos/seed/speaker/600/400', owner: 'Alex Martinez', ownerLoc: 'San Francisco, CA', distance: 0, ownerRating: 4.8, ownerInitials: 'AM', listed: '3/7/2026' },
    { id: 9, title: 'Mountain Bike', desc: '27-speed hardtail mountain bike, recently serviced. Great for Bay Area trails.', category: 'Outdoor', condition: 'Good', image: 'https://picsum.photos/seed/bike/600/400', owner: 'David Kim', ownerLoc: 'San Jose, CA', distance: 45, ownerRating: 4.6, ownerInitials: 'DK', listed: '3/6/2026' },
    { id: 10, title: 'Espresso Machine', desc: 'Semi-automatic espresso machine with built-in grinder. Makes a great shot.', category: 'Electronics', condition: 'Like New', image: 'https://picsum.photos/seed/espresso/600/400', owner: 'Priya Patel', ownerLoc: 'Marin, CA', distance: 14, cashPrice: 150, ownerRating: 4.9, ownerInitials: 'PP', listed: '3/6/2026' },
    { id: 11, title: '35mm Film Camera', desc: 'Classic 35mm SLR with 50mm lens. Light meter works, recently serviced.', category: 'Electronics', condition: 'Good', image: 'https://picsum.photos/seed/film/600/400', owner: 'Maria Lopez', ownerLoc: 'San Francisco, CA', distance: 2, cashPrice: 95, ownerRating: 4.8, ownerInitials: 'ML', listed: '3/5/2026' },
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
function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    toast('Storage is full — that photo could not be saved. Try a smaller photo or remove an old listing.');
  }
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

function nav(view) {
  $$('.view').forEach(v => v.classList.remove('active'));
  $('#view-' + view).classList.add('active');
  $$('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.nav === view));
  window.scrollTo(0, 0);
  if (view === 'home') renderHome();
  if (view === 'discover') renderBrowse();
  if (view === 'trades') renderTrades();
  if (view === 'messages') renderMessages();
  if (view === 'profile') renderProfile();
}
$$('[data-nav]').forEach(el => el.addEventListener('click', () => nav(el.dataset.nav)));

// ---------- HOME ----------
// Personalized hub: your activity, pending offers, unread messages,
// nearby items, and your listings. Discover is the full catalog.
function renderHome() {
  const mine = state.items.filter(i => i.owner === ME.name);
  const nearby = state.items.filter(i => i.owner !== ME.name).sort((a, b) => (a.distance ?? 999) - (b.distance ?? 999)).slice(0, 4);
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
  $('#homeContent').innerHTML = `
    <div class="home-welcome"><h1>Welcome back, Alex</h1><p>Here's what's happening with your trades.</p></div>
    <div class="home-stats">
      <div class="home-stat" data-nav="profile"><b>${mine.length}</b><span>Your listings</span></div>
      <div class="home-stat" data-nav="trades"><b>${pending.length}</b><span>Pending offers</span></div>
      <div class="home-stat" data-nav="messages"><b>${unreadConvos.reduce((n, c) => n + (c.unread || 0), 0)}</b><span>Unread messages</span></div>
    </div>
    ${pending.length ? `<div class="home-section"><div class="home-section-head"><h2>Pending offers</h2><button class="see-all" data-nav="trades">See all <span class="material-symbols-outlined icon-inline">arrow_forward</span></button></div>${pending.slice(0, 2).map(offerRow).join('')}</div>` : ''}
    ${unreadConvos.length ? `<div class="home-section"><div class="home-section-head"><h2>Unread messages</h2><button class="see-all" data-nav="messages">See all <span class="material-symbols-outlined icon-inline">arrow_forward</span></button></div>${unreadConvos.map(c => {
      const last = c.messages[c.messages.length - 1];
      return `<div class="home-msg" data-convo="${c.id}"><span class="avatar">${esc(c.initials)}</span><div class="convo-text"><div class="convo-name">${esc(c.with)}</div><div class="convo-preview">${esc(last ? last.text : '')}</div></div></div>`;
    }).join('')}</div>` : ''}
    <div class="home-section"><div class="home-section-head"><h2>Near you</h2><button class="see-all" data-nav="discover">See all <span class="material-symbols-outlined icon-inline">arrow_forward</span></button></div><div class="grid">${nearby.map(cardHTML).join('')}</div></div>
    ${mine.length ? `<div class="home-section"><div class="home-section-head"><h2>Your listings</h2><button class="see-all" data-nav="profile">See all <span class="material-symbols-outlined icon-inline">arrow_forward</span></button></div><div class="grid">${mine.slice(0, 4).map(cardHTML).join('')}</div></div>` : ''}`;
  $$('#homeContent [data-nav]').forEach(el => el.addEventListener('click', () => nav(el.dataset.nav)));
  $$('#homeContent .home-offer').forEach(el => el.addEventListener('click', () => nav('trades')));
  $$('#homeContent .home-msg').forEach(el => el.addEventListener('click', () => { activeConvo = +el.dataset.convo; currentFolder = 'inbox'; nav('messages'); }));
  $$('#homeContent .card').forEach(c => c.addEventListener('click', () => openDetail(+c.dataset.id)));
}

// ---------- BROWSE ----------
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
    .filter(i => (currentCategory === 'All' || i.category === currentCategory) &&
      (currentRadius === 0 || (i.distance ?? 999) <= currentRadius))
    .sort((a, b) => (a.distance ?? 999) - (b.distance ?? 999));
  $('#noResults').classList.toggle('hidden', items.length > 0);
  $('#browseGrid').innerHTML = items.map(cardHTML).join('');
  $$('#browseGrid .card').forEach(c => c.addEventListener('click', () => openDetail(+c.dataset.id)));
}
function cardHTML(i) {
  return `<article class="card" data-id="${i.id}">
    <img src="${esc(i.image)}" alt="${esc(i.title)}" loading="lazy">
    <div class="card-body">
      <div class="card-title-row"><span class="card-title">${esc(i.title)}</span><span class="badge">${esc(i.condition)}</span></div>
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
    <img class="detail-img" src="${esc(i.image)}" alt="${esc(i.title)}">
    <div class="detail-head"><h1>${esc(i.title)}</h1><span class="badge">${esc(i.condition)}</span></div>
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
    ${mine
      ? `<p class="muted">This is your item.</p>`
      : `<button class="btn btn-primary" id="proposeBtn">Propose Trade</button>
      ${i.cashPrice ? `<button class="btn btn-outline" id="cashOfferBtn" style="margin-top:8px">Offer $${esc(i.cashPrice)} cash</button>
      <div id="cashConfirm" class="cash-confirm hidden"><p>Send a cash offer of $${esc(i.cashPrice)} to ${esc(i.owner)}?</p>
      <div class="form-actions"><button class="btn btn-ghost" id="cashCancel">Cancel</button><button class="btn btn-primary" id="cashSend">Send Offer</button></div></div>` : ''}`}`;
  const btn = $('#proposeBtn');
  if (btn) btn.addEventListener('click', () => openTradeModal(id));
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
    $('#photoPreview').classList.remove('hidden');
  } catch {
    toast('Could not read that photo — try another one.');
  }
});
$('#photoRemove').addEventListener('click', () => {
  pendingPhoto = null;
  $('#fPhoto').value = '';
  $('#photoPreview').classList.add('hidden');
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
    image: pendingPhoto || `https://picsum.photos/seed/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'))}/600/400`,
    owner: ME.name, ownerLoc: ME.location, distance: 0, cashPrice: Number.isFinite(cash) && cash > 0 ? cash : null, ownerRating: ME.rating, ownerInitials: 'AM', listed: new Date().toLocaleDateString('en-US') });
  save();
  e.target.reset();
  pendingPhoto = null;
  $('#photoPreview').classList.add('hidden');
  toast('"' + title + '" is now listed!');
  currentCategory = 'All';
  nav('discover');
});

// ---------- TRADES ----------
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
  const list = state.offers.filter(o => o.direction === activeTab);
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
function tradeItemCard(item, fallback) {
  if (!item) return `<div class="mini-item"><div><div class="mi-title">${fallback}</div></div></div>`;
  return `<div class="mini-item"><img src="${esc(item.image)}" alt=""><div><div class="mi-title">${esc(item.title)}</div><div class="mi-sub">${esc(item.condition)} · ${esc(item.owner)}</div></div></div>`;
}
function openTradeWindow(id, step) {
  const o = state.offers.find(x => x.id === id);
  if (!o) return;
  const theirs = itemById(o.theirItemId);
  const mine = itemById(o.myItemId);
  const otherName = o.direction === 'received' ? o.from : (theirs ? theirs.owner : 'Trader');
  const box = $('#tradeWindowContent');
  const cashCard = o.type === 'cash'
    ? `<div class="mini-item"><div><div class="mi-title">$${esc(o.cashAmount)} cash</div><div class="mi-sub">Cash offer</div></div></div>`
    : null;
  // For cash offers, theirItemId is the item being bought; one side is cash.
  const cashItem = o.type === 'cash' ? theirs : null;
  const myPaneCard = o.type === 'cash'
    ? (o.direction === 'received' ? tradeItemCard(cashItem, 'Item removed') : cashCard)
    : tradeItemCard(mine, 'Item removed');
  const theirPaneCard = o.type === 'cash'
    ? (o.direction === 'received' ? cashCard : tradeItemCard(cashItem, 'Item removed'))
    : tradeItemCard(theirs, 'Item removed');
  const panes = `<div class="trade-panes">
    <div class="trade-pane"><div class="side-label">You're offering</div>${myPaneCard}</div>
    <div class="trade-divider"><span class="material-symbols-outlined">swap_horiz</span></div>
    <div class="trade-pane"><div class="side-label">They're offering</div>${theirPaneCard}</div>
  </div>`;
  const closeBtn = `<button class="btn btn-ghost" id="twClose">Close</button>`;
  if (o.status === 'Completed') {
    box.innerHTML = `<h2>Trade completed</h2><p class="muted">You traded with ${esc(otherName)}.</p>${panes}<div class="form-actions">${closeBtn}</div>`;
  } else if (o.status === 'Declined' || o.status === 'Cancelled') {
    box.innerHTML = `<h2>Trade ${o.status.toLowerCase()}</h2><p class="muted">This offer is no longer active.</p>${panes}<div class="form-actions">${closeBtn}</div>`;
  } else if (o.status === 'Awaiting confirmation') {
    box.innerHTML = `<h2>Waiting for confirmation</h2><p class="muted">You confirmed. Waiting for ${esc(otherName)} to confirm.</p>${panes}<div class="form-actions">${closeBtn}</div>`;
  } else if (step === 'confirm') {
    box.innerHTML = `<h2>Confirm this trade</h2><p class="muted">Double-check both sides. Both traders must confirm before the trade is final.</p>${panes}<div class="form-actions"><button class="btn btn-ghost" id="twBack">Go back</button><button class="btn btn-primary" id="twConfirm">Confirm Trade</button></div>`;
    $('#twBack').addEventListener('click', () => openTradeWindow(id));
    $('#twConfirm').addEventListener('click', () => {
      o.status = 'Awaiting confirmation';
      save();
      openTradeWindow(id);
      renderTrades();
      setTimeout(() => {
        o.status = 'Completed';
        save();
        toast('Trade completed with ' + otherName + '!');
        renderTrades();
        openTradeWindow(id);
      }, 2500);
    });
  } else if (o.direction === 'received') {
    box.innerHTML = `<h2>Trade with ${esc(otherName)}</h2><span class="status ${statusClass(o.status)}">${esc(o.status)}</span><p class="offer-msg" style="margin-top:12px">${esc(o.message)}</p>${panes}<div class="form-actions"><button class="btn btn-outline" id="twDecline">Decline</button><button class="btn btn-primary" id="twAccept">Accept Trade</button></div>`;
    $('#twDecline').addEventListener('click', () => { o.status = 'Declined'; save(); toast('Offer declined.'); renderTrades(); openTradeWindow(id); });
    $('#twAccept').addEventListener('click', () => openTradeWindow(id, 'confirm'));
  } else {
    box.innerHTML = `<h2>Offer to ${esc(otherName)}</h2><span class="status ${statusClass(o.status)}">${esc(o.status)}</span><p class="muted" style="margin-top:12px">Waiting for ${esc(otherName)} to respond.</p>${panes}<div class="form-actions"><button class="btn btn-outline" id="twCancel">Cancel Offer</button>${closeBtn}</div>`;
    $('#twCancel').addEventListener('click', () => { o.status = 'Cancelled'; save(); toast('Offer cancelled.'); renderTrades(); openTradeWindow(id); });
  }
  const close = $('#twClose');
  if (close) close.addEventListener('click', () => $('#tradeWindow').classList.add('hidden'));
  $('#tradeWindow').classList.remove('hidden');
}

// ---------- MESSAGES ----------
// eBay-style messaging: item-led conversation list, item card pinned at the
// top of each thread, chat bubbles, full-screen thread on mobile.
function updateMsgBadge() {
  const total = state.conversations.reduce((n, c) => n + (c.unread || 0), 0);
  const badge = $('#msgBadge');
  badge.textContent = total;
  badge.classList.toggle('hidden', total === 0);
}
function renderMessages() {
  updateMsgBadge();
  const layout = $('.messages-layout');
  if (layout) layout.classList.toggle('thread-open', activeConvo !== null);
  // Folder sidebar (Inbox / Sent / Unread / Trash).
  const inboxN = state.conversations.filter(c => c.folder === 'inbox').length;
  const sentN = state.conversations.filter(c => c.folder === 'sent').length;
  const unreadN = state.conversations.filter(c => c.folder === 'inbox' && c.unread).length;
  const trashN = state.conversations.filter(c => c.folder === 'trash').length;
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
  const visible = state.conversations.filter(c =>
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
      <div style="flex:1"><div class="convo-name">${esc(convo.with)}</div><div class="thread-sub">Conversation about your listing</div></div>
      <div class="thread-actions">
        ${inTrash
          ? `<button class="thread-action" id="restoreBtn">Restore</button><button class="thread-action danger" id="deleteForeverBtn">Delete forever</button>`
          : `<button class="thread-action" id="markUnreadBtn">Mark unread</button><button class="thread-action" id="trashBtn">Delete</button>`}
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
      </div>
    </div>
    <div class="section-head"><h2>My Items</h2><button class="btn btn-dark" data-nav="add"><span class="material-symbols-outlined icon-inline">add</span> Add New Item</button></div>
    <div class="grid">${mine.map(cardHTML).join('') || '<p class="empty">No items yet — list your first one!</p>'}</div>`;
  $$('#profileContent [data-nav]').forEach(el => el.addEventListener('click', () => nav(el.dataset.nav)));
  $$('#profileContent .card').forEach(c => c.addEventListener('click', () => openDetail(+c.dataset.id)));
}

// ---------- INIT ----------
updateMsgBadge();
nav('home');
