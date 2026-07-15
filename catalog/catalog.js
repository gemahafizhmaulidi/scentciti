const IMAGE_MAP = {
  Floral: 'https://images.unsplash.com/photo-1626280435034-9a7e7b6711a3?auto=format&fit=crop&w=900&q=86',
  Woody: 'https://images.unsplash.com/photo-1511444075070-d0cc09883afa?auto=format&fit=crop&w=900&q=86',
  Fresh: 'https://images.unsplash.com/photo-1517263856247-2766cfd802a2?auto=format&fit=crop&w=900&q=86',
  Amber: 'https://images.unsplash.com/photo-1616581140368-c95002af164f?auto=format&fit=crop&w=900&q=86',
  Fruity: 'https://images.unsplash.com/photo-1525307742130-bb0549f92dd1?auto=format&fit=crop&w=900&q=86',
  Gourmand: 'https://images.unsplash.com/photo-1615108395437-df128ad79e80?auto=format&fit=crop&w=900&q=86',
  Citrus: 'https://images.unsplash.com/photo-1517263856247-2766cfd802a2?auto=format&fit=crop&w=900&q=86',
  Musk: 'https://images.unsplash.com/photo-1626280435034-9a7e7b6711a3?auto=format&fit=crop&w=900&q=86'
};

const seedProducts = [
  ['SC-0241','Velvet Ember','Amber',['Amber','Woody','Gourmand'],'Fine Fragrance','Elegant','Sample available',['Pink Pepper','Saffron','Bergamot'],['Rose','Orris','Cedar'],['Vanilla','Amber','Sandalwood'],'Warm resin, polished woods and a soft vanilla trail.'],
  ['SC-0318','Iris Veil','Floral',['Floral','Musk','Powdery'],'Fine Fragrance','Elegant','Ready stock',['Bergamot','Aldehydes'],['Iris','Violet','Rose'],['White Musk','Cashmere Wood'],'A luminous floral veil with a refined powdery finish.'],
  ['SC-0492','Citrus Current','Citrus',['Citrus','Fresh','Green'],'Personal Care','Clean','Sample available',['Lemon','Mandarin','Petitgrain'],['Green Tea','Neroli'],['Cedar','Clean Musk'],'A bright citrus current made modern with green clarity.'],
  ['SC-0557','Soft Linen','Fresh',['Fresh','Musk','Floral'],'Fabric & Laundry','Clean','Ready stock',['Aldehydes','Bergamot'],['Cotton Flower','Muguet'],['Soft Musk','Blonde Woods'],'Airy cleanliness with a comfortable freshly washed signature.'],
  ['SC-0614','Fig Horizon','Fruity',['Fruity','Green','Woody'],'Home & Air Care','Comforting','By import',['Fig Leaf','Pear'],['Fig Milk','Violet'],['Cedar','Tonka'],'Green fig leaves open into a creamy, meditative wood.'],
  ['SC-0732','Nocturne Wood','Woody',['Woody','Amber','Spicy'],'Fine Fragrance','Bold','Sample available',['Cardamom','Black Pepper'],['Cedar','Patchouli'],['Vetiver','Amber','Musk'],'Dark woods, dry spices and a quietly magnetic amber base.'],
  ['SC-0819','Petal Air','Floral',['Floral','Fresh','Musk'],'Personal Care','Clean','Ready stock',['Pear','Bergamot'],['Peony','Muguet','Rose'],['White Musk','Cedar'],'Weightless petals and clean air for an effortless daily ritual.'],
  ['SC-0944','Golden Tonka','Gourmand',['Gourmand','Amber','Spicy'],'Fine Fragrance','Comforting','Sample available',['Cinnamon','Mandarin'],['Heliotrope','Cacao'],['Tonka','Vanilla','Benzoin'],'A polished gourmand balancing warm spice and golden tonka.'],
  ['SC-1036','Rain Garden','Fresh',['Fresh','Green','Floral'],'Home & Air Care','Clean','Ready stock',['Ozonic Accord','Lemon'],['Water Lily','Green Leaves'],['Moss','White Musk'],'The cool clarity of leaves and flowers immediately after rain.'],
  ['SC-1178','Rose Mineral','Floral',['Floral','Amber','Spicy'],'Fine Fragrance','Bold','By import',['Pink Pepper','Saffron'],['Rose Absolute','Geranium'],['Mineral Amber','Patchouli'],'A modern rose cut with mineral light and a dry spicy edge.'],
  ['SC-1245','Solar Nectar','Fruity',['Fruity','Floral','Gourmand'],'Personal Care','Comforting','Sample available',['Mango','Mandarin'],['Frangipani','Jasmine'],['Vanilla','Musk'],'Tropical nectar with sunlit florals and a creamy skin-like finish.'],
  ['SC-1320','Cedar Atlas','Woody',['Woody','Fresh','Aromatic'],'Home & Air Care','Elegant','Ready stock',['Bergamot','Juniper'],['Cypress','Sage'],['Atlas Cedar','Vetiver'],'Dry aromatic woods with a composed, architectural presence.'],
  ['SC-1471','Pure Bloom','Floral',['Floral','Fresh','Fruity'],'Personal Care','Clean','Sample available',['Apple','Bergamot'],['Jasmine','Peony'],['Musk','Sandalwood'],'A transparent floral bloom with crisp, optimistic brightness.'],
  ['SC-1586','Amber Studio','Amber',['Amber','Woody','Musk'],'Home & Air Care','Elegant','By import',['Bergamot','Elemi'],['Amber','Cedar'],['Labdanum','Musk'],'A modern amber atmosphere: warm, textural and restrained.'],
  ['SC-1642','Vanilla Suede','Gourmand',['Gourmand','Woody','Musk'],'Fine Fragrance','Comforting','Sample available',['Pink Pepper','Almond'],['Vanilla Orchid','Suede'],['Tonka','Sandalwood'],'Soft vanilla wrapped in suede and pale woods.'],
  ['SC-1764','Green Pulse','Fresh',['Fresh','Green','Citrus'],'Fabric & Laundry','Clean','Ready stock',['Lime','Verbena'],['Green Leaves','Tea'],['Clean Musk','Cedar'],'A high-energy green freshness designed for noticeable bloom.'],
  ['SC-1831','Musk Canvas','Musk',['Musk','Floral','Woody'],'Personal Care','Elegant','Sample available',['Aldehydes','Pear'],['Cotton Flower','Iris'],['White Musk','Cashmere Wood'],'A clean, understated musk with a soft textile effect.'],
  ['SC-1915','Spiced Orchard','Fruity',['Fruity','Spicy','Woody'],'Home & Air Care','Comforting','By import',['Apple','Orange'],['Cinnamon','Clove'],['Cedar','Tonka'],'A comforting orchard accord warmed with subtle spice and woods.']
];

const products = seedProducts.map((p, index) => ({code:p[0],name:p[1],family:p[2],accords:p[3],application:p[4],mood:p[5],availability:p[6],top:p[7],middle:p[8],base:p[9],story:p[10],image:IMAGE_MAP[p[2]],new:index%5===0,featured:index%3===0,index}));
const ACCORD_COLORS={Amber:'#a85b35',Woody:'#79502f',Gourmand:'#b88145',Floral:'#c66f91',Musk:'#a999ad',Powdery:'#b99bb0',Citrus:'#d5ad31',Fresh:'#65a99d',Green:'#668b55',Fruity:'#bd5b66',Spicy:'#b75b35',Aromatic:'#558f82'};
const NOTE_ICONS={
  'Pink Pepper':'fluent-emoji-flat:hot-pepper','Black Pepper':'fluent-emoji-flat:hot-pepper','Saffron':'fluent-emoji-flat:herb','Bergamot':'fluent-emoji-flat:lemon','Lemon':'fluent-emoji-flat:lemon','Lime':'fluent-emoji-flat:lime','Mandarin':'fluent-emoji-flat:tangerine','Orange':'fluent-emoji-flat:tangerine','Petitgrain':'fluent-emoji-flat:leaf-fluttering-in-wind','Verbena':'fluent-emoji-flat:herb','Green Tea':'fluent-emoji-flat:teacup-without-handle','Green Leaves':'fluent-emoji-flat:leaf-fluttering-in-wind','Fig Leaf':'fluent-emoji-flat:leaf-fluttering-in-wind','Rose':'fluent-emoji-flat:rose','Rose Absolute':'fluent-emoji-flat:rose','Peony':'fluent-emoji-flat:cherry-blossom','Cotton Flower':'fluent-emoji-flat:cloud','Muguet':'fluent-emoji-flat:blossom','Jasmine':'fluent-emoji-flat:blossom','Violet':'fluent-emoji-flat:blossom','Iris':'fluent-emoji-flat:blossom','Orris':'fluent-emoji-flat:blossom','Water Lily':'fluent-emoji-flat:lotus','Frangipani':'fluent-emoji-flat:hibiscus','Heliotrope':'fluent-emoji-flat:sunflower','Geranium':'fluent-emoji-flat:cherry-blossom','Cedar':'fluent-emoji-flat:evergreen-tree','Atlas Cedar':'fluent-emoji-flat:evergreen-tree','Cedarwood':'fluent-emoji-flat:wood','Sandalwood':'fluent-emoji-flat:wood','Cashmere Wood':'fluent-emoji-flat:wood','Blonde Woods':'fluent-emoji-flat:wood','Vetiver':'fluent-emoji-flat:sheaf-of-rice','Patchouli':'fluent-emoji-flat:herb','Cypress':'fluent-emoji-flat:evergreen-tree','Moss':'fluent-emoji-flat:herb','Sage':'fluent-emoji-flat:herb','Vanilla':'fluent-emoji-flat:seedling','Vanilla Orchid':'fluent-emoji-flat:blossom','Tonka':'fluent-emoji-flat:peanuts','Cacao':'fluent-emoji-flat:chocolate-bar','Cinnamon':'fluent-emoji-flat:wood','Clove':'fluent-emoji-flat:herb','Cardamom':'fluent-emoji-flat:seedling','Almond':'fluent-emoji-flat:peanuts','Apple':'fluent-emoji-flat:red-apple','Pear':'fluent-emoji-flat:pear','Mango':'fluent-emoji-flat:mango','Fig Milk':'fluent-emoji-flat:glass-of-milk','Amber':'fluent-emoji-flat:gem-stone','Mineral Amber':'fluent-emoji-flat:gem-stone','Labdanum':'fluent-emoji-flat:drop-of-blood','Elemi':'fluent-emoji-flat:droplet','White Musk':'fluent-emoji-flat:cloud','Soft Musk':'fluent-emoji-flat:cloud','Clean Musk':'fluent-emoji-flat:cloud','Musk':'fluent-emoji-flat:cloud','Ozonic Accord':'fluent-emoji-flat:cloud','Aldehydes':'fluent-emoji-flat:bubbles','Suede':'fluent-emoji-flat:gloves','Juniper':'fluent-emoji-flat:evergreen-tree'
};
const NOTE_PHOTO_GROUPS={
  spice:['Pink Pepper','Black Pepper','Saffron','Cardamom','Cinnamon','Clove'],
  citrus:['Bergamot','Lemon','Lime','Mandarin','Orange','Petitgrain','Verbena'],
  floral:['Rose','Rose Absolute','Peony','Cotton Flower','Muguet','Jasmine','Violet','Iris','Orris','Water Lily','Frangipani','Heliotrope','Geranium','Vanilla Orchid'],
  wood:['Cedar','Atlas Cedar','Cedarwood','Sandalwood','Cashmere Wood','Blonde Woods','Vetiver','Cypress','Suede'],
  green:['Green Tea','Green Leaves','Fig Leaf','Patchouli','Moss','Sage','Juniper'],
  fruit:['Apple','Pear','Mango','Fig Milk'],
  gourmand:['Vanilla','Tonka','Cacao','Almond'],
  resin:['Amber','Mineral Amber','Labdanum','Elemi','Benzoin'],
  airy:['White Musk','Soft Musk','Clean Musk','Musk','Ozonic Accord','Aldehydes']
};
const NOTE_PHOTOS={
  spice:'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=320&q=84',
  citrus:IMAGE_MAP.Citrus,floral:IMAGE_MAP.Floral,wood:IMAGE_MAP.Woody,green:IMAGE_MAP.Fresh,
  fruit:IMAGE_MAP.Fruity,gourmand:IMAGE_MAP.Gourmand,resin:IMAGE_MAP.Amber,airy:IMAGE_MAP.Musk
};
const state = {query:'',filters:{application:new Set(),family:new Set(),availability:new Set(),mood:new Set()},sort:'featured',limit:9,board:new Set(JSON.parse(localStorage.getItem('scentCitiBoard')||'[]'))};

const $ = s => document.querySelector(s); const $$ = s => [...document.querySelectorAll(s)];
const grid=$('[data-product-grid]'), count=$('[data-result-count]'), empty=$('[data-empty]'), loadMore=$('[data-load-more]');

function matches(product){const q=state.query.toLowerCase().trim();const text=[product.code,product.name,product.family,product.application,product.mood,product.availability,...product.accords,...product.top,...product.middle,...product.base].join(' ').toLowerCase();if(q&&!text.includes(q))return false;return Object.entries(state.filters).every(([key,set])=>!set.size||set.has(product[key]));}
function filtered(){let list=products.filter(matches);if(state.sort==='name')list.sort((a,b)=>a.name.localeCompare(b.name));if(state.sort==='code')list.sort((a,b)=>a.code.localeCompare(b.code));if(state.sort==='newest')list.sort((a,b)=>Number(b.new)-Number(a.new)||b.index-a.index);if(state.sort==='featured')list.sort((a,b)=>Number(b.featured)-Number(a.featured));return list;}
function availabilityBadge(p){const type=p.availability==='Ready stock'?'ready':p.availability==='Sample available'?'sample':'import';const label=type==='ready'?'Ready stock ID':type==='sample'?'Sample available':'By import';return `<span class="availability-badge ${type}"><i></i>${label}</span>`}
function card(p){const saved=state.board.has(p.code);return `<article class="product-card"><div class="product-visual" data-detail="${p.code}"><img src="${p.image}" alt="${p.name} olfactive visual" loading="lazy">${p.new?'<span class="product-badge">New direction</span>':''}<button class="save-product ${saved?'saved':''}" data-save="${p.code}" aria-label="${saved?'Remove from':'Add to'} scent board">${saved?'−':'+'}</button>${availabilityBadge(p)}</div><div class="product-info"><div class="product-meta"><span>${p.code}</span><span>${p.application}</span></div><h3>${p.name}</h3><div class="product-accords">${p.accords.map(a=>`<span>${a}</span>`).join('')}</div><div class="product-actions"><button data-detail="${p.code}">View scent</button><button data-sample="${p.code}">Request sample ↗</button></div></div></article>`}
function render(){const list=filtered();count.textContent=list.length;grid.innerHTML=list.slice(0,state.limit).map(card).join('');empty.hidden=list.length>0;loadMore.hidden=state.limit>=list.length||!list.length;renderChips();updateBoardCount();}
function renderChips(){const host=$('[data-active-chips]');const chips=[];if(state.query)chips.push(`<button data-remove-query>${state.query}<span>×</span></button>`);Object.entries(state.filters).forEach(([key,set])=>set.forEach(value=>chips.push(`<button data-remove-filter="${key}" data-value="${value}">${value}<span>×</span></button>`)));host.innerHTML=chips.join('');const total=(state.query?1:0)+Object.values(state.filters).reduce((n,s)=>n+s.size,0);$('[data-active-filter-count]').textContent=total;}
function setQuery(value){state.query=value.trim();state.limit=9;$('#main-search').value=state.query;render();document.querySelector('#all-fragrances').scrollIntoView({behavior:'smooth'});}
function product(code){return products.find(p=>p.code===code);}
function openDetail(code){const p=product(code);if(!p)return;$('[data-product-detail]').innerHTML=`<div class="detail-image"><img src="${p.image}" alt="${p.name} olfactive visual"></div><div class="detail-content"><div class="detail-code"><span>${p.code}</span><span>${p.availability}</span></div><h2>${p.name}</h2><p class="detail-story">${p.story}</p><div class="detail-accords">${p.accords.map(a=>`<span>${a}</span>`).join('')}</div><div class="pyramid"><div class="pyramid-row"><b>Top</b><span>${p.top.join(' · ')}</span></div><div class="pyramid-row"><b>Heart</b><span>${p.middle.join(' · ')}</span></div><div class="pyramid-row"><b>Base</b><span>${p.base.join(' · ')}</span></div></div><div class="detail-facts"><div><b>Application</b><span>${p.application}</span></div><div><b>Character</b><span>${p.mood}</span></div><div><b>Pack size</b><span>Sample · 1 kg · 5 kg · 25 kg</span></div><div><b>Availability</b><span>${p.availability}</span></div></div><div class="detail-cta"><button data-save="${p.code}">${state.board.has(p.code)?'Remove from':'Add to'} scent board</button><button class="primary" data-sample="${p.code}">Request sample ↗</button></div></div>`;openPanel($('[data-product-drawer]'));}
function iconUrl(name,collection='lucide'){return `https://api.iconify.design/${collection}/${name}.svg`}
function noteIcon(name){const spec=NOTE_ICONS[name]||'fluent-emoji-flat:sparkles';const [collection,...icon]=spec.split(':');return iconUrl(icon.join(':'),collection)}
function accordBars(p){return p.accords.map((accord,index)=>`<div class="accord-bar" style="--accord:${ACCORD_COLORS[accord]||'#9c7180'};--width:${100-index*15}%"><span>${accord}</span></div>`).join('')}
function notePhoto(name){const group=Object.entries(NOTE_PHOTO_GROUPS).find(([,notes])=>notes.includes(name))?.[0]||'floral';return NOTE_PHOTOS[group]}
function noteTiles(notes){return notes.map(note=>`<div class="note-tile"><div><img src="${notePhoto(note)}" alt="${note}" loading="lazy" onerror="this.onerror=null;this.src='${IMAGE_MAP.Floral}'"></div><span>${note}</span></div>`).join('')}
function usageProfile(p){const warm=['Amber','Gourmand','Woody'].includes(p.family);const fresh=['Fresh','Citrus','Fruity'].includes(p.family);return {best:warm?['fall','night']:fresh?['spring','summer','day']:['spring','fall','day'],intensity:p.mood==='Bold'?92:warm?80:68,diffusion:fresh?86:75,longevity:warm?90:72}}
function usageTiles(p){const active=new Set(usageProfile(p).best);const items=[['winter','snowflake'],['spring','sprout'],['summer','sun'],['fall','leaf'],['day','sun-medium'],['night','moon-star']];return items.map(([label,icon])=>`<div class="usage-tile ${active.has(label)?'active':''}"><img src="${iconUrl(icon)}" alt=""><span>${label}</span></div>`).join('')}
function metric(label,value){return `<div class="performance-metric"><div><span>${label}</span><b>${value>=88?'High':value>=75?'Medium–high':'Moderate'}</b></div><i><em style="width:${value}%"></em></i></div>`}
function fact(icon,label,value){return `<div><img src="${iconUrl(icon)}" alt=""><section><b>${label}</b><span>${value}</span></section></div>`}

openDetail=function(code){
  const p=product(code);if(!p)return;
  const usage=usageProfile(p);
  $('[data-product-detail]').innerHTML=`
    <div class="detail-image">
      <img src="${p.image}" alt="${p.name} olfactive visual">
      <span class="detail-image-label">Olfactive direction · ${p.family}</span>
    </div>
    <div class="detail-content">
      <div class="detail-code"><span>${p.code}</span><span>${p.availability}</span></div>
      <h2>${p.name}</h2>
      <p class="detail-story">${p.story}</p>
      <div class="detail-accords">${p.accords.map(a=>`<span>${a}</span>`).join('')}</div>

      <section class="visual-block accord-section">
        <div class="visual-title"><img src="${iconUrl('waves')}" alt=""><span>Main accords</span></div>
        <div class="accord-bars">${accordBars(p)}</div>
      </section>

      <section class="visual-block suitability-section">
        <div class="visual-title"><img src="${iconUrl('clock-3')}" alt=""><span>Performance & suitability</span></div>
        <div class="usage-grid">${usageTiles(p)}</div>
        <div class="performance-grid">
          ${metric('Intensity',usage.intensity)}
          ${metric('Diffusion',usage.diffusion)}
          ${metric('Expected longevity',usage.longevity)}
        </div>
        <p class="data-note">Indicative profile for selection. Final performance depends on dosage, base and finished-product testing.</p>
      </section>

      <section class="visual-block pyramid-visual">
        <div class="visual-title"><img src="${iconUrl('flask-conical')}" alt=""><span>Fragrance pyramid</span></div>
        <div class="note-level"><h3>Top notes</h3><div class="note-grid">${noteTiles(p.top)}</div></div>
        <div class="note-level"><h3>Heart notes</h3><div class="note-grid">${noteTiles(p.middle)}</div></div>
        <div class="note-level"><h3>Base notes</h3><div class="note-grid">${noteTiles(p.base)}</div></div>
      </section>

      <div class="detail-facts visual-facts">
        ${fact('beaker', 'Application', p.application)}
        ${fact('sparkles', 'Character', p.mood)}
        ${fact('package-open', 'Pack size', 'Sample · 1 kg · 5 kg · 25 kg')}
        ${fact('badge-check', 'Availability', p.availability)}
      </div>
      <div class="detail-cta"><button data-save="${p.code}">${state.board.has(p.code)?'Remove from':'Add to'} scent board</button><button class="primary" data-sample="${p.code}">Request sample ↗</button></div>
    </div>`;
  openPanel($('[data-product-drawer]'));
};

function openPanel(panel){$('[data-overlay]').classList.add('open');panel.classList.add('open');panel.setAttribute('aria-hidden','false');document.body.classList.add('locked');}
function closePanels(){$('[data-overlay]').classList.remove('open');$$('.product-drawer,.board-drawer').forEach(p=>{p.classList.remove('open');p.setAttribute('aria-hidden','true')});document.body.classList.remove('locked');}
function toggleBoard(code){state.board.has(code)?state.board.delete(code):state.board.add(code);localStorage.setItem('scentCitiBoard',JSON.stringify([...state.board]));render();renderBoard();showToast(state.board.has(code)?'Added to your scent board.':'Removed from your scent board.');}
function updateBoardCount(){$$('[data-board-count]').forEach(el=>el.textContent=state.board.size);}
function renderBoard(){const items=[...state.board].map(product).filter(Boolean);$('[data-board-items]').innerHTML=items.map(p=>`<div class="board-item"><img src="${p.image}" alt=""><div><b>${p.name}</b><span>${p.code} · ${p.family}</span></div><button data-save="${p.code}" aria-label="Remove ${p.name}">×</button></div>`).join('');$('[data-board-empty]').hidden=items.length>0;$('.board-footer').style.display=items.length?'block':'none';updateBoardCount();}
function openRequest(title='Request samples'){closePanels();$('[data-modal-title]').textContent=title;$('[data-request-modal]').showModal();}
let toastTimer;function showToast(text){const el=$('[data-toast]');el.textContent=text;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2500);}

$('[data-search-form]').addEventListener('submit',e=>{e.preventDefault();setQuery($('#main-search').value)});
$$('[data-query]').forEach(b=>b.addEventListener('click',()=>setQuery(b.dataset.query)));
$$('[data-filter]').forEach(input=>input.addEventListener('change',()=>{const set=state.filters[input.dataset.filter];input.checked?set.add(input.value):set.delete(input.value);state.limit=9;render()}));
$('[data-sort]').addEventListener('change',e=>{state.sort=e.target.value;render()});
$$('[data-clear-filters]').forEach(b=>b.addEventListener('click',()=>{state.query='';Object.values(state.filters).forEach(s=>s.clear());$$('[data-filter]').forEach(i=>i.checked=false);$('#main-search').value='';render()}));
loadMore.addEventListener('click',()=>{state.limit+=6;render()});
document.addEventListener('click',e=>{const save=e.target.closest('[data-save]');if(save){e.stopPropagation();toggleBoard(save.dataset.save);if($('[data-product-drawer]').classList.contains('open'))openDetail(save.dataset.save);return}const sample=e.target.closest('[data-sample]');if(sample){e.stopPropagation();openRequest(`Request sample · ${sample.dataset.sample}`);return}const detail=e.target.closest('[data-detail]');if(detail)openDetail(detail.dataset.detail);const remove=e.target.closest('[data-remove-filter]');if(remove){state.filters[remove.dataset.removeFilter].delete(remove.dataset.value);$$(`[data-filter="${remove.dataset.removeFilter}"]`).filter(i=>i.value===remove.dataset.value).forEach(i=>i.checked=false);render()}if(e.target.closest('[data-remove-query]')){state.query='';$('#main-search').value='';render()}});
$('[data-open-board]').addEventListener('click',()=>{renderBoard();openPanel($('[data-board-drawer]'))});
$('[data-close-board]').addEventListener('click',closePanels);$('[data-close-drawer]').addEventListener('click',closePanels);$('[data-overlay]').addEventListener('click',closePanels);
$('[data-request-board]').addEventListener('click',()=>openRequest('Request selected samples'));$('[data-consult]').addEventListener('click',()=>openRequest('Start a guided fragrance request'));$('[data-close-modal]').addEventListener('click',()=>$('[data-request-modal]').close());
$('[data-login]').addEventListener('click',()=>$('[data-login-modal]').showModal());$('[data-close-login]').addEventListener('click',()=>$('[data-login-modal]').close());
$('[data-request-form]').addEventListener('submit',e=>{e.preventDefault();$('[data-request-modal]').close();e.target.reset();showToast('Request received. Our team will contact you shortly.')});$('[data-login-form]').addEventListener('submit',e=>{e.preventDefault();$('[data-login-modal]').close();showToast('Demo account access submitted.')});
$('[data-filter-trigger]').addEventListener('click',()=>{$('[data-filter-panel]').classList.add('open');document.body.classList.add('locked')});$$('[data-filter-close]').forEach(b=>b.addEventListener('click',()=>{$('[data-filter-panel]').classList.remove('open');document.body.classList.remove('locked')}));
$$('.filter-group-title').forEach(b=>b.addEventListener('click',()=>{const open=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!open));b.querySelector('span').textContent=open?'+':'−';b.nextElementSibling.hidden=open}));
renderBoard();render();
