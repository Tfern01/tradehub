// TradeHub live preview — demo data, saved in the browser (localStorage).
const KEY = 'tradehub-state-v1';
const ME = { name: 'Alex Martinez', handle: '@alexm', location: 'San Francisco, CA', since: 'January 2024', rating: 4.8, trades: 24, bio: 'Tech enthusiast and avid trader. Always looking for interesting gear and new connections.', initials: 'AM', color: '#DBEAFE', text: '#155DFC' };

const SEED = {
  items: [
    { id: 1, title: 'Vintage Polaroid Camera', desc: 'Classic Polaroid SX-70 in excellent working condition. Comes with original leather case.', category: 'Collectibles', condition: 'Good', image: 'https://picsum.photos/seed/polaroid/600/400', owner: 'Sarah Chen', ownerLoc: 'New York, NY', ownerRating: 4.9, ownerInitials: 'SC', listed: '3/9/2026' },
    { id: 2, title: 'Mechanical Keyboard', desc: 'Custom mechanical keyboard with Cherry MX Blue switches. RGB backlit.', category: 'Electronics', condition: 'Like New', image: 'https://picsum.photos/seed/keyboard/600/400', owner: 'Alex Martinez', ownerLoc: 'San Francisco, CA', ownerRating: 4.8, ownerInitials: 'AM', listed: '3/9/2026' },
    { id: 3, title: 'Vinyl Record Collection', desc: 'Set of 20 classic rock vinyl records from the 70s and 80s. All in great condition.', category: 'Music', condition: 'Good', image: 'https://picsum.photos/seed/vinyl/600/400', owner: 'James Wilson', ownerLoc: 'Austin, TX', ownerRating: 4.7, ownerInitials: 'JW', listed: '3/9/2026' },
    { id: 4, title: 'Camping Tent (4-person)', desc: 'Spacious 4-person tent with rainfly. Perfect for family camping trips.', category: 'Outdoor', condition: 'Like New', image: 'https://picsum.photos/seed/tent/600/400', owner: 'Emma Thompson', ownerLoc: 'Denver, CO', ownerRating: 5.0, ownerInitials: 'ET', listed: '3/8/2026' },
    { id: 5, title: 'Vintage Typewriter', desc: 'Beautiful Royal typewriter from the 1950s. Fully functional with original ribbon.', category: 'Collectibles', condition: 'Good', image: 'https://picsum.photos/seed/typewriter/600/400', owner: 'Sarah Chen', ownerLoc: 'New York, NY', ownerRating: 4.9, ownerInitials: 'SC', listed: '3/8/2026' },
    { id: 6, title: 'Leather Messenger Bag', desc: 'Handcrafted genuine leather messenger bag with laptop compartment.', category: 'Fashion', condition: 'Like New', image: 'https://picsum.photos/seed/bag/600/400', owner: 'James Wilson', ownerLoc: 'Austin, TX', ownerRating: 4.7, ownerInitials: 'JW', listed: '3/8/2026' },
    { id: 7, title: 'Hiking Backpack', desc: '65L hiking backpack with rain cover. Great for multi-day treks.', category: 'Outdoor', condition: 'Good', image: 'https://picsum.photos/seed/backpack/600/400', owner: 'Emma Thompson', ownerLoc: 'Denver, CO', ownerRating: 5.0, ownerInitials: 'ET', listed: '3/7/2026' },
    { id: 8, title: 'Bluetooth Speaker', desc: 'Portable waterproof Bluetooth speaker with 12-hour battery life.', category: 'Electronics', condition: 'Like New', image: 'https://picsum.photos/seed/speaker/600/400', owner: 'Alex Martinez', ownerLoc: 'San Francisco, CA', ownerRating: 4.8, ownerInitials: 'AM', listed: '3/7/2026' },
  ],
  offers: [
    { id: 1, from: 'Sarah Chen', date: '3/10/2026', status: 'Pending', direction: 'received', theirItemId: 1, myItemId: 2, message: 'Hi! I love your mechanical keyboard. Would you be interested in trading for my vintage Polaroid camera?' },
    { id: 2, from: 'James Wilson', date: '3/9/2026', status: 'Pending', direction: 'received', theirItemId: 6, myItemId: 8, message: 'Hey Alex, that Bluetooth speaker would be perfect for my workshop. I can offer my leather messenger bag — barely used!' },
  ],
  conversations: [
    { id: 1, with: 'Sarah Chen', initials: 'SC', messages: [
      { from: 'them', text: 'Hi! I love your mechanical keyboard. Would you be interested in trading?', time: '07:00 AM' },
      { from: 'me', text: "Thanks for reaching out! That's a beautiful camera.", time: '07:15 AM' },
      { from: 'them', text: 'No problem! I can also throw in the original leather case.', time: '07:30 AM' },
    ]},
    { id: 2, with: 'James Wilson', initials: 'JW', messages: [
      { from: 'them', text: 'That sounds interesting! Can you send me more photos?', time: '06:45 AM' },
      { from: 'me', text: 'Sure, I will send some over tonight.', time: '07:05 AM' },
    ]},
  ],
};

let state;
try { state = JSON.parse(localStorage.getItem(KEY)) || structuredClone(SEED); }
catch { state = structuredClone(SEED); }
function save() { localStorage.setItem(KEY, JSON.stringify(state)); }

let currentCategory = 'All';
let currentSearch = '';
let activeTab = 'received';
let activeConvo = null;
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
  if (view === 'browse') renderBrowse();
  if (view === 'trades') renderTrades();
  if (view === 'messages') renderMessages();
  if (view === 'profile') renderProfile();
}
$$('[data-nav]').forEach(el => el.addEventListener('click', () => nav(el.dataset.nav)));

// ---------- BROWSE ----------
function renderBrowse() {
  const cats = ['All', 'Electronics', 'Music', 'Outdoor', 'Collectibles', 'Fashion'];
  $('#categoryChips').innerHTML = cats.map(c =>
    `<button class="chip ${c === currentCategory ? 'active' : ''}" data-cat="${c}">${c}</button>`).join('');
  $$('#categoryChips .chip').forEach(ch => ch.addEventListener('click', () => { currentCategory = ch.dataset.cat; renderBrowse(); }));
  const q = currentSearch.trim().toLowerCase();
  const items = state.items.filter(i =>
    (currentCategory === 'All' || i.category === currentCategory) &&
    (!q || (i.title + ' ' + i.desc + ' ' + i.owner).toLowerCase().includes(q)));
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
      <div class="owner-row">
        <span class="avatar">${esc(i.ownerInitials)}</span>
        <div class="owner-meta"><div class="owner-name">${esc(i.owner)}</div><div class="owner-loc">◎ ${esc(i.ownerLoc)}</div></div>
        <span class="rating"><span class="star">★</span>${i.ownerRating}</span>
      </div>
    </div>
  </article>`;
}
$('#searchInput').addEventListener('input', e => { currentSearch = e.target.value; renderBrowse(); });

// ---------- DETAIL ----------
function openDetail(id) {
  const i = itemById(id);
  const mine = i.owner === ME.name;
  $('#detailContent').innerHTML = `
    <img class="detail-img" src="${esc(i.image)}" alt="${esc(i.title)}">
    <div class="detail-head"><h1>${esc(i.title)}</h1><span class="badge">${esc(i.condition)}</span></div>
    <p class="detail-desc">${esc(i.desc)}</p>
    <p class="detail-meta">Category: ${esc(i.category)} &nbsp;·&nbsp; Listed ${esc(i.listed)}</p>
    <div class="owner-card">
      <span class="avatar lg">${esc(i.ownerInitials)}</span>
      <div class="owner-meta">
        <div class="owner-name">${esc(i.owner)}</div>
        <div class="owner-loc">◎ ${esc(i.ownerLoc)}</div>
        <div class="rating"><span class="star">★</span>${i.ownerRating} · ${i.owner === ME.name ? state.items.filter(x => x.owner === ME.name).length : '—'} items</div>
      </div>
    </div>
    ${mine
      ? `<p class="muted">This is your item.</p>`
      : `<button class="btn btn-primary" id="proposeBtn">Propose Trade</button>`}`;
  const btn = $('#proposeBtn');
  if (btn) btn.addEventListener('click', () => openTradeModal(id));
  nav('detail');
}

// ---------- TRADE PROPOSAL ----------
function openTradeModal(targetId) {
  tradeTargetId = targetId;
  tradeSelectedMine = null;
  $('#tradeTargetTitle').textContent = itemById(targetId).title;
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
$('#addForm').addEventListener('submit', e => {
  e.preventDefault();
  const title = $('#fTitle').value.trim();
  const desc = $('#fDesc').value.trim();
  const cat = $('#fCategory').value;
  const cond = $('#fCondition').value;
  const img = $('#fImage').value.trim();
  if (!title || !desc || !cat || !cond) return;
  const id = Date.now();
  state.items.unshift({ id, title, desc, category: cat, condition: cond,
    image: img || `https://picsum.photos/seed/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'))}/600/400`,
    owner: ME.name, ownerLoc: ME.location, ownerRating: ME.rating, ownerInitials: 'AM', listed: new Date().toLocaleDateString('en-US') });
  save();
  e.target.reset();
  toast('"' + title + '" is now listed!');
  currentCategory = 'All'; currentSearch = ''; $('#searchInput').value = '';
  nav('browse');
});

// ---------- TRADES ----------
$$('.tab').forEach(t => t.addEventListener('click', () => {
  activeTab = t.dataset.tab;
  $$('.tab').forEach(x => x.classList.toggle('active', x === t));
  renderTrades();
}));
function renderTrades() {
  const rec = state.offers.filter(o => o.direction === 'received').length;
  const sent = state.offers.filter(o => o.direction === 'sent').length;
  $('#receivedCount').textContent = rec;
  $('#sentCount').textContent = sent;
  const list = state.offers.filter(o => o.direction === activeTab);
  $('#offersList').innerHTML = list.length ? list.map(offerHTML).join('') : `<p class="empty">No ${activeTab} offers yet.</p>`;
  $$('#offersList .offer-card').forEach(card => {
    const id = +card.dataset.id;
    const acc = card.querySelector('[data-act="accept"]');
    const dec = card.querySelector('[data-act="decline"]');
    if (acc) acc.addEventListener('click', () => setOffer(id, 'Accepted'));
    if (dec) dec.addEventListener('click', () => setOffer(id, 'Declined'));
  });
}
function offerHTML(o) {
  const theirs = itemById(o.theirItemId);
  const mine = itemById(o.myItemId);
  const actions = o.direction === 'received' && o.status === 'Pending'
    ? `<div class="offer-actions"><button class="btn btn-dark" data-act="accept">Accept</button><button class="btn btn-outline" data-act="decline">Decline</button></div>` : '';
  return `<div class="offer-card" data-id="${o.id}">
    <div class="offer-top"><span class="offer-from">${o.direction === 'received' ? 'From ' + esc(o.from) : 'To ' + esc(theirs ? theirs.owner : '')}</span>
    <span><span class="status ${o.status}">${o.status}</span> <span class="offer-date">${esc(o.date)}</span></span></div>
    <div class="trade-sides">
      <div><div class="side-label">They offer</div><div class="mini-item"><img src="${theirs ? esc(theirs.image) : ''}"><div><div class="mi-title">${theirs ? esc(theirs.title) : 'Item removed'}</div><div class="mi-sub">${theirs ? esc(theirs.condition) : ''}</div></div></div></div>
      <div><div class="side-label">For your item</div><div class="mini-item"><img src="${mine ? esc(mine.image) : ''}"><div><div class="mi-title">${mine ? esc(mine.title) : 'Item removed'}</div><div class="mi-sub">${mine ? esc(mine.condition) : ''}</div></div></div></div>
    </div>
    <p class="offer-msg">${esc(o.message)}</p>${actions}</div>`;
}
function setOffer(id, status) {
  const o = state.offers.find(x => x.id === id);
  if (!o) return;
  o.status = status;
  save();
  toast(status === 'Accepted' ? 'Trade accepted!' : 'Offer declined.');
  renderTrades();
}

// ---------- MESSAGES ----------
function renderMessages() {
  $('#conversationList').innerHTML = state.conversations.map(c => {
    const last = c.messages[c.messages.length - 1];
    return `<div class="convo ${activeConvo === c.id ? 'active' : ''}" data-id="${c.id}">
      <span class="avatar">${esc(c.initials)}</span>
      <div class="convo-text"><div class="convo-name">${esc(c.with)}</div><div class="convo-preview">${esc(last ? last.text : '')}</div></div>
    </div>`;
  }).join('');
  $$('#conversationList .convo').forEach(cv => cv.addEventListener('click', () => { activeConvo = +cv.dataset.id; renderMessages(); }));
  const convo = state.conversations.find(c => c.id === activeConvo);
  if (!convo) { $('#threadView').innerHTML = '<p class="empty">Select a conversation to start messaging.</p>'; return; }
  $('#threadView').innerHTML = `
    <div class="thread-head"><span class="avatar">${esc(convo.initials)}</span><div class="convo-name">${esc(convo.with)}</div></div>
    <div class="thread-msgs" id="threadMsgs">${convo.messages.map(m =>
      `<div class="bubble ${m.from === 'me' ? 'me' : 'them'}">${esc(m.text)}<span class="time">${esc(m.time)}</span></div>`).join('')}</div>
    <form class="thread-input" id="msgForm"><input id="msgInput" placeholder="Type a message..." autocomplete="off"><button type="submit">Send</button></form>`;
  const box = $('#threadMsgs');
  box.scrollTop = box.scrollHeight;
  $('#msgForm').addEventListener('submit', e => {
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
        <div class="profile-meta"><span>◎ ${ME.location}</span><span>Member since ${ME.since}</span></div>
        <div class="stats">
          <div class="stat"><b>★ ${ME.rating}</b><span>Rating</span></div>
          <div class="stat"><b>${ME.trades}</b><span>Trades</span></div>
          <div class="stat"><b>${mine.length}</b><span>Items</span></div>
        </div>
        <p class="bio" style="margin-top:12px">${ME.bio}</p>
      </div>
    </div>
    <div class="section-head"><h2>My Items</h2><button class="btn btn-dark" data-nav="add">+ Add New Item</button></div>
    <div class="grid">${mine.map(cardHTML).join('') || '<p class="empty">No items yet — list your first one!</p>'}</div>`;
  $$('#profileContent [data-nav]').forEach(el => el.addEventListener('click', () => nav(el.dataset.nav)));
  $$('#profileContent .card').forEach(c => c.addEventListener('click', () => openDetail(+c.dataset.id)));
}

// ---------- INIT ----------
renderBrowse();
