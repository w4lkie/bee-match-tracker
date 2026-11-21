
const MODES={"small":["Regular Memory Match","25,000 Honey","2 hours",16,"🍯","In front of the Pro Shop","1 Royal Jelly|1 Ticket|15 Sunflower Seeds|15 Pineapples|15 Blueberries|15 Strawberries|15 Treats|1 Jelly Beans|5 Gumdrops|5 Moon Charms|3 Honeysuckles|1 Magic Bean|1 Micro-Converter|1 Field Dice|5 Tickets|1 Oil|1 Enzymes|1 Glitter"],"med":["Mega Memory Match","500,000 Honey","4 hours",16,"🏆","Inside the Badge Bearer's Guild","3 Royal Jellies|3 Tickets|2 Micro-Converters|2 Field Dice|10 Gumdrops|1 Jelly Beans|1 Magic Bean|25 Sunflower Seeds|25 Pineapples|10 Moon Charms|5 Honeysuckles|50 Treats|25 Blueberries|25 Strawberries|1 Oil|1 Enzymes|1 Glitter|1 Star Jelly"],"night":["Night Memory Match","5,000,000 Honey","8 hours",16,"🌙","Near Bubble Bee Man","25 Moon Charms|1 Magic Bean|1 Glitter|1 Oil|1 Enzymes|3 Micro-Converters|1 Star Jelly|5 Stingers|5 Tickets|500 Treats|5 Honeysuckles|3 Field Dice|1 Night Bell|1 Star Treat"],"extreme":["Extreme Memory Match","25,000,000 Honey","8 hours",20,"🔥","Near the Pepper Patch","1 Star Jelly|25 Royal Jellies|5 Tickets|1 Magic Bean|3 Oils|3 Enzymes|3 Red Extracts|3 Blue Extracts|1 Tropical Drink|1 Glitter|25 Gumdrops|3 Micro-Converters|3 Jelly Beans|200 Sunflower Seeds|200 Blueberries|200 Strawberries|200 Pineapples|10 Honeysuckles|1 Cloud Vial|5 Coconuts|5 Stingers|2,500 Treats|15 Tickets|5 Glitter|1 Gold Egg|3 Star Jellies|1 Sideways Spirit Bear Sticker|1 Diamond Egg|1 Star Treat"],"winter":["Winter Memory Match","100 Snowflakes","4 hours",20,"❄️","Beesmas seasonal match","1 Gingerbread Bear|3 Jelly Beans|5 Micro-Converters|5 Field Dice|1 Magic Bean|1 Glitter|15 Honeysuckles|1 Star Jelly|3 Oils|3 Soft Waxes|3 Enzymes|10 Tickets|100 Gumdrops|3 Tropical Drinks|1 Hard Wax|1 Smooth Dice|1 Swirled Wax|1 Gold Egg|1 Night Bell|1 Silver Egg|1 Diamond Egg|1 Super Smoothie|1 Mythic Egg|1 Festive Bean|1 Star Treat"],"spirit":["Spirit Bear Quest Match","Free (quest reward)","Quest only",16,"🌸","During certain Spirit Bear quests","10 Royal Jellies|1 Glitter|150 Sunflower Seeds|150 Pineapples|150 Strawberries|150 Blueberries|25 Moon Charms|25 Gumdrops|5 Jelly Beans|3 Magic Beans|1,000 Treats|2 Oils|2 Enzymes"]};
const ICONS=[["royal-jelly","Royal Jelly"],["star-jelly","Star Jelly"],["jelly-bean","Jelly Bean"],["ticket","Ticket"],["moon-charm","Moon Charm"],["gingerbread-bear","Gingerbread Bear"],["star-treat","Star Treat"],["treat","Treat"],["gold-egg","Gold Egg"],["silver-egg","Silver Egg"],["diamond-egg","Diamond Egg"],["mythic-egg","Mythic Egg"],["sunflower-seed","Sunflower Seed"],["pineapple","Pineapple"],["blueberry","Blueberry"],["strawberry","Strawberry"],["gumdrop","Gumdrop"],["magic-bean","Magic Bean"],["glitter","Glitter"],["night-bell","Night Bell"],["oil","Oil"],["enzyme","Enzyme"],["field-dice","Field Dice"],["smooth-dice","Smooth Dice"],["micro-converter","Micro-Converter"],["honeysuckle","Honeysuckle"],["coconut","Coconut"],["red-extract","Red Extract"],["blue-extract","Blue Extract"],["soft-wax","Soft Wax"],["hard-wax","Hard Wax"],["swirled-wax","Swirled Wax"],["cloud-vial","Cloud Vial"],["tropical-drink","Tropical Drink"],["stinger","Stinger"],["snowflake","Snowflake"],["sticker","Sticker"],["festive-bean","Festive Bean"],["super-smoothie","Super Smoothie"],["gift","Gift"]];
const GAME_ICON_FILES={"royal jelly":"royal jelly.png","star jelly":"star jelly.png","jelly bean":"jelly beans.png","ticket":"ticket.png","moon charm":"moon charm.png","gingerbread bear":"gingerbread bear.png","star treat":"star treat.png","treat":"treat.png","gold egg":"gold egg.png","silver egg":"silver egg.png","diamond egg":"diamond egg.png","mythic egg":"mythic egg.png","sunflower seed":"sunflower seed.png","pineapple":"pineapple.png","blueberry":"blueberry.png","strawberry":"strawberry.png","gumdrop":"gumdrops.png","magic bean":"magic bean.png","glitter":"glitter.png","night bell":"night bell.png","oil":"oil.png","enzyme":"enzymes.png","field dice":"field dice.png","smooth dice":"smooth dice.png","micro-converter":"micro-converter.png","honeysuckle":"honeysuckle.png","coconut":"coconut.png","red extract":"red extract.png","blue extract":"blue extract.png","soft wax":"soft wax.png","hard wax":"hard wax.png","swirled wax":"swirled wax.png","cloud vial":"cloud vial.png","tropical drink":"tropical drink.png","snowflake":"snowflake.png","festive bean":"festive bean.png","super smoothie":"super smoothie.png"};

const route = document.body.dataset.mode || "home";
const root = document.body.dataset.root || "./";
const mode = MODES[route] || null;
const modeKeys = Object.keys(MODES);
const wikiBase = "https://bee-swarm-simulator.fandom.com/wiki/";
const descriptions = {
  small:"A quick, low-cost Memory Match found near the Pro Shop.",
  med:"The Mega Memory Match in the Badge Bearer's Guild.",
  night:"A nighttime Memory Match with a larger entry cost.",
  extreme:"A higher-level Memory Match with 20 tiles.",
  winter:"A seasonal Beesmas Memory Match that costs Snowflakes.",
  spirit:"A special Memory Match encountered during Spirit Bear quests."
};
const shortNames={small:"Regular",med:"Mega",night:"Night",extreme:"Extreme",winter:"Winter",spirit:"Spirit Bear"};
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}

const GAME_IMAGE_BASE="https://raw.githubusercontent.com/FaethyvveIcye/bss/main/images/items/";
const EXTRA_GAME_IMAGES={
 "stinger":"https://raw.githubusercontent.com/IamDanteDev/Bee-Swarm-Simulator-Remake/main/assets/Icons/bss/Stinger.webp",
 "sideways spirit bear sticker":"https://bee-swarm-simulator.fandom.com/wiki/Special:Redirect/file/Hivesticker_sideways_spirit_bear.png",
 "gift":"https://raw.githubusercontent.com/IamDanteDev/Bee-Swarm-Simulator-Remake/main/assets/Icons/bss/Present.webp"
};
function rewardKey(name) {
  return String(name).toLowerCase().trim()
   .replace(/^[\d,.\s×x]+/g,"")
   .replace(/\bjellies$/,"jelly")
   .replace(/berries$/,"berry")
   .replace(/waxes$/,"wax")
   .replace(/s$/,"")
   .trim();
}
function localIcon(name) {
  const key=rewardKey(name);
  const found=[...ICONS].sort((a,b)=>b[1].length-a[1].length)
    .find(x=>rewardKey(x[1])===key);
  return root+"icons/"+(found?found[0]:"gift")+".svg";
}
function gameIcon(name) {
  const key=rewardKey(name);
  if(GAME_ICON_FILES[key])return GAME_IMAGE_BASE+encodeURIComponent(GAME_ICON_FILES[key]);
  if(EXTRA_GAME_IMAGES[key])return EXTRA_GAME_IMAGES[key];
  return null;
}
function img(name,cls="item-image") {
  const fallback=localIcon(name);
  const imageUrl=gameIcon(name)||fallback;
  return '<img class="'+escapeHtml(cls)+'" src="'+escapeHtml(imageUrl)+'" data-fallback="'+escapeHtml(fallback)+'" alt="'+escapeHtml(name)+'" loading="lazy" referrerpolicy="no-referrer">';
}
document.addEventListener("error",event=>{
  const el=event.target;
  if(el instanceof HTMLImageElement&&el.dataset.fallback&&!el.classList.contains("fallback-icon")){
    el.classList.add("fallback-icon");
    el.src=el.dataset.fallback;
  }
},true);

function modeLink(id,extra="") {
  return '<a href="'+root+id+'/" class="'+extra+' '+(route===id?"is-active":"")+'"><span class="nav-icon">'+MODES[id][4]+'</span><span>'+shortNames[id]+'</span></a>';
}
function sidebar() {
  return '<aside class="wiki-sidebar" aria-label="Site navigation">'+
   '<div class="sidebar-heading">Navigation</div>'+
   '<a class="sidebar-link '+(route==="home"?"is-active":"")+'" href="'+root+'"><span class="nav-icon">⌂</span><span>Main page</span></a>'+
   '<a class="sidebar-link" href="'+wikiBase+'Memory_Match" target="_blank" rel="noopener noreferrer"><span class="nav-icon">↗</span><span>Wiki: Memory Match</span></a>'+
   '<div class="sidebar-heading">Memory Matches</div>'+
   modeKeys.map(k=>modeLink(k,"sidebar-link")).join("")+
   '<div class="sidebar-heading">Resources</div>'+
   '<a class="sidebar-link" href="'+wikiBase+'Items" target="_blank" rel="noopener noreferrer"><span class="nav-icon">▣</span><span>Items on the wiki</span></a>'+
   '<a class="sidebar-link" href="'+wikiBase+'Bee_Swarm_Simulator_Wiki" target="_blank" rel="noopener noreferrer"><span class="nav-icon">↗</span><span>Official community wiki</span></a>'+
   '<div class="sidebar-footer">Unofficial fan-made tracking tool.<br>Not affiliated with Fandom or Roblox.</div></aside>';
}
function masthead() {
 return '<div class="fandom-bar"><div class="fandom-inner"><span class="mini-hex">⬡</span><strong>BEE MATCH TRACKER</strong><span class="global-divider"></span><span class="global-caption">A Bee Swarm Simulator companion</span><a href="'+wikiBase+'Bee_Swarm_Simulator_Wiki" target="_blank" rel="noopener noreferrer">Visit BSS Wiki ↗</a></div></div>'+
 '<div class="site-masthead"><div class="masthead-shade"></div><div class="masthead-copy"><div class="masthead-eyebrow">THE UNOFFICIAL MEMORY MATCH COMPANION</div><div class="masthead-title"><span class="masthead-badge">🐝</span><div><strong>BEE SWARM SIMULATOR</strong><span>MEMORY MATCH TRACKER</span></div></div><p>Track revealed rewards • Discover pairs • Never lose your place</p></div></div>'+
 '<nav class="wiki-topnav" aria-label="Main navigation"><div class="topnav-links"><a class="'+(route==="home"?"current":"")+'" href="'+root+'">Main Page</a><a class="'+(route!=="home"?"current":"")+'" href="'+root+'small/">Memory Matches</a><a href="'+root+'#how-it-works">How to Use</a><a href="'+wikiBase+'Items" target="_blank" rel="noopener noreferrer">Items Wiki ↗</a></div><div class="nav-tag">FAN TOOL • NO ROBLOX CONNECTION</div></nav>';
}
function footer(){
 return '<footer class="wiki-footer"><span>Bee Match Tracker is an independent, fan-made site. Game names and artwork belong to their respective owners.</span><span>Item image sources: <a href="https://github.com/FaethyvveIcye/bss/tree/main/images/items" target="_blank" rel="noopener noreferrer">BSS item PNG archive ↗</a> · <a href="https://github.com/IamDanteDev/Bee-Swarm-Simulator-Remake/tree/main/assets/Icons/bss" target="_blank" rel="noopener noreferrer">Additional game art ↗</a> · <a href="'+wikiBase+'Bee_Swarm_Simulator_Wiki" target="_blank" rel="noopener noreferrer">BSS Wiki ↗</a></span></footer>';
}
function page(main,right) {
 document.getElementById("app").innerHTML=masthead()+'<div class="wiki-layout">'+sidebar()+'<main id="main-content" class="wiki-article">'+main+'</main><aside class="right-sidebar" aria-label="Details and tools">'+right+'</aside></div>'+footer();
}
function articleHeader(title,slug="",subtitle=""){
 return '<div class="article-breadcrumb"><a href="'+root+'">Bee Match Tracker</a><span>›</span>'+(slug?'<span>Memory Matches</span><span>›</span>':'')+'<b>'+escapeHtml(slug||"Main Page")+'</b></div>'+
 '<div class="article-title-row"><div><div class="article-label">BEE SWARM SIMULATOR • FAN GUIDE</div><h1>'+escapeHtml(title)+'</h1>'+(subtitle?'<p class="article-subtitle">'+escapeHtml(subtitle)+'</p>':'')+'</div><a class="wiki-outlink" href="'+wikiBase+'Memory_Match" target="_blank" rel="noopener noreferrer">View wiki article ↗</a></div>';
}
function tabBar(names) {
 return '<div class="article-tabs">'+names.map(([id,title],i)=>'<a class="'+(i===0?"active":"")+'" href="#'+id+'">'+escapeHtml(title)+'</a>').join("")+'</div>';
}
function infobox(key) {
 const m=MODES[key];
 const tileSize=m[3]===20?"4 × 5":"4 × 4";
 return '<section class="infobox"><h2>'+m[4]+' '+escapeHtml(m[0])+'</h2><div class="infobox-graphic"><div class="honeycomb-mark">⬡</div><span>MEMORY MATCH</span></div><table class="info-table"><tbody>'+
 '<tr><th>Entry cost</th><td>'+escapeHtml(m[1])+'</td></tr>'+
 '<tr><th>Cooldown</th><td>'+escapeHtml(m[2])+'</td></tr>'+
 '<tr><th>Board size</th><td>'+tileSize+'</td></tr>'+
 '<tr><th>Total tiles</th><td>'+m[3]+'</td></tr>'+
 '<tr><th>Location</th><td>'+escapeHtml(m[5])+'</td></tr>'+
 '</tbody></table><p class="infobox-note">Reference values for planning your in-game round. This website does not spend Honey or interact with Roblox.</p></section>';
}
function quickInfo(){
 return '<section class="infobox"><h2>🍯 Memory Match at a glance</h2><div class="infobox-graphic"><div class="honeycomb-mark">⬡</div><span>6 TRACKABLE MODES</span></div><table class="info-table"><tbody>'+
 '<tr><th>Game modes</th><td>6</td></tr><tr><th>Board layouts</th><td>4 × 4 / 4 × 5</td></tr><tr><th>Reward images</th><td>Wiki-linked + fallback</td></tr><tr><th>Account required</th><td>None</td></tr><tr><th>Data storage</th><td>On your device</td></tr></tbody></table></section>'+
 '<section class="rail-panel"><h3>Quick links</h3><a href="'+wikiBase+'Memory_Match" target="_blank" rel="noopener noreferrer">Memory Match on Fandom ↗</a><a href="'+wikiBase+'Items" target="_blank" rel="noopener noreferrer">Item reference ↗</a></section>';
}
function homeCard(k) {
 const m=MODES[k];
 return '<a class="mode-entry" href="'+root+k+'/"><span class="mode-entry-image"><span>'+m[4]+'</span></span><span class="mode-entry-copy"><b>'+escapeHtml(m[0])+'</b><small>'+escapeHtml(descriptions[k])+'</small><span class="mode-meta"><span>🍯 '+escapeHtml(m[1])+'</span><span>▦ '+(m[3]===20?'4×5':'4×4')+'</span><span>◷ '+escapeHtml(m[2])+'</span></span></span><span class="entry-arrow" aria-hidden="true">›</span></a>';
}
function home(){
 const body=articleHeader("Memory Match Tracker","", "A wiki-style tool for remembering the rewards you reveal in Bee Swarm Simulator.")+
 tabBar([["overview","Overview"],["matches","Memory Match types"],["how-it-works","How to use"]])+
 '<section id="overview" class="wiki-section"><div class="welcome"><span class="welcome-icon">🐝</span><div><strong>Welcome to the Memory Match Tracker!</strong><p>Use this companion alongside Bee Swarm Simulator. Select a match type, choose a tile, and record the reward you see. Revealed tiles and matched pairs stay saved in your browser.</p></div></div>'+
 '<div class="section-heading"><h2>Getting started</h2></div><p>Select a Memory Match from the list below. Every mode has its own board, reward picker, prices, and saved progress.</p></section>'+
 '<section id="matches" class="wiki-section"><div class="section-heading"><h2>Memory Match types</h2><span>6 pages</span></div><div class="mode-list">'+modeKeys.map(homeCard).join("")+'</div>'+
 '<h3 class="subheading">Quick comparison</h3><div class="table-scroll"><table class="wiki-data-table"><thead><tr><th>Memory Match</th><th>Entry cost</th><th>Board</th><th>Cooldown</th></tr></thead><tbody>'+modeKeys.map(k=>{const m=MODES[k];return '<tr><td><a href="'+root+k+'/">'+escapeHtml(m[0])+'</a></td><td>'+escapeHtml(m[1])+'</td><td>'+(m[3]===20?'4 × 5':'4 × 4')+'</td><td>'+escapeHtml(m[2])+'</td></tr>'}).join("")+'</tbody></table></div></section>'+
 '<section id="how-it-works" class="wiki-section"><div class="section-heading"><h2>How to use</h2></div><ol class="how-list"><li><strong>Open a match.</strong> Choose the mode that you are playing in Roblox.</li><li><strong>Reveal a tile.</strong> Click the corresponding numbered square on this website.</li><li><strong>Pick the reward.</strong> Search or select the item and quantity you revealed.</li><li><strong>Find a pair.</strong> Use the "Known pairs" section to see duplicates, then mark completed tiles.</li><li><strong>Start over.</strong> Use "New round" when the next Memory Match begins.</li></ol><div class="notice">🔒 <strong>Private and manual:</strong> Your progress is stored in this browser only. This site cannot read the hidden tiles in Roblox.</div></section>';
 page(body,quickInfo());
}
function rewardTools(key){
 return '<section class="rail-panel reward-editor" id="reward-editor"><h3>🎁 Record a Reward</h3><p class="editor-hint">Selected tile <strong id="selected-tile">#1</strong></p>'+
 '<div class="selected-preview" id="selected-preview">No reward recorded yet</div>'+
 '<label class="input-label" for="reward-search">Search items</label><input id="reward-search" type="search" placeholder="Search Royal Jelly, Tickets…" autocomplete="off" aria-label="Search reward options">'+
 '<div id="reward-options" class="reward-options"></div>'+
 '<label class="input-label" for="custom-reward">Other reward / quantity</label><div class="custom-reward-row"><input id="custom-reward" placeholder="e.g. 10 Tickets" maxlength="90"><button class="btn btn-gold" id="set-custom">Add</button></div>'+
 '<div class="editor-buttons"><button class="btn btn-green" id="match-selected">✓ Mark matched</button><button class="btn" id="clear-selected">Clear tile</button><button class="btn" id="undo-action">↶ Undo</button></div>'+
 '<p class="editor-tip">Tip: Click a numbered tile on the board first. The reward choices will be applied to that tile.</p></section>';
}
function startMode(){
 const m=mode;
 const body=articleHeader(m[0],shortNames[route],descriptions[route])+
 tabBar([["board-section","Match board"],["pairs-section","Known pairs"],["instructions","Instructions"]])+
 '<section class="wiki-section" id="board-section"><div class="notice notice-honey">🐝 <strong>Playing '+escapeHtml(m[0])+'?</strong> Record each reward after you flip a tile in Roblox. Your progress stays saved if you leave or refresh.</div>'+
 '<div class="section-heading board-heading"><h2>Memory Match Board</h2><button class="btn btn-outline" id="reset-round">↻ New round</button></div>'+
 '<div class="progress-row"><div><strong id="recorded-count">0</strong> of '+m[3]+' tiles recorded</div><div><strong id="matched-count">0</strong> tiles matched</div><div class="save-label"><span class="save-dot"></span>Saved locally</div></div>'+
 '<div class="progress-track"><span id="progress-fill"></span></div>'+
 '<div class="board-frame"><div class="board-instructions"><span>① Select a square</span><span>② Record the item</span><span>③ Match pairs</span></div><div class="memory-grid" id="memory-board" role="group" aria-label="'+escapeHtml(m[0])+' board"></div></div>'+
 '<div class="mobile-editor-prompt">📌 The reward picker is below the board on smaller screens.</div></section>'+
 '<section id="pairs-section" class="wiki-section"><div class="section-heading"><h2>Known pairs</h2><span id="pair-total">0 pairs</span></div><div id="known-pairs" class="known-pairs"><p>Record revealed rewards to find your matching tiles.</p></div></section>'+
 '<section id="instructions" class="wiki-section"><div class="section-heading"><h2>How this tracker works</h2></div><ol class="how-list"><li>Start the Memory Match in Bee Swarm Simulator.</li><li>Click the same square number here as the tile you revealed.</li><li>Select the correct item and quantity from the reward picker.</li><li>Return to an existing tile or follow the known-pairs hints.</li><li>Mark finished pairs as matched. Use Undo for mistakes or New round for your next game.</li></ol><div class="notice">⚠️ A tile stays unknown until you enter its reward. This website does not predict or reveal concealed tiles.</div></section>'+
 '<section class="wiki-section"><div class="section-heading"><h2>Other Memory Matches</h2></div><div class="related-modes">'+modeKeys.filter(k=>k!==route).map(k=>'<a href="'+root+k+'/">'+MODES[k][4]+' '+shortNames[k]+'</a>').join("")+'</div></section>';
 page(body,infobox(route)+rewardTools(route));
 const count=m[3],storageKey="bee-match-tracker-"+route+"-v1";
 let cells=Array.from({length:count},()=>({reward:"",matched:false}));
 let selected=0,history=[];
 const rewards=m[6].split("|");
 try{
   const saved=JSON.parse(localStorage.getItem(storageKey));
   if(Array.isArray(saved)&&saved.length===count){
     cells=saved.map(v=>({reward:typeof v?.reward==="string"?v.reward:"",matched:!!v?.matched}));
   }
 }catch(err){}
 const $=id=>document.getElementById(id);
 const save=()=>{try{localStorage.setItem(storageKey,JSON.stringify(cells))}catch(err){}};
 function update(change){
   history.push(JSON.stringify(cells));
   if(history.length>60)history.shift();
   change();save();render();
 }
 function renderBoard(){
   $("memory-board").innerHTML=cells.map((cell,i)=>
    '<button class="memory-tile '+(i===selected?'tile-selected ':'')+(cell.reward?'tile-revealed ':'')+(cell.matched?'tile-matched':'')+'" type="button" data-index="'+i+'" aria-pressed="'+(i===selected)+'" aria-label="Tile '+(i+1)+': '+escapeHtml(cell.reward||"Unknown")+'">'+
    '<span class="tile-number">'+(i+1)+'</span>'+
    (cell.reward?img(cell.reward,"tile-reward-image"):'<span class="tile-question">?</span>')+
    '<span class="tile-reward-name">'+escapeHtml(cell.reward||"Not revealed")+'</span>'+
    (cell.matched?'<span class="tile-check">✓</span>':'')+
    '</button>').join("");
 }
 function renderOptions(){
   const term=$("reward-search").value.trim().toLowerCase();
   const choices=rewards.map((name,i)=>({name,i})).filter(v=>v.name.toLowerCase().includes(term));
   $("reward-options").innerHTML=choices.length?choices.map(({name,i})=>
    '<button type="button" data-reward-index="'+i+'" class="reward-choice '+(cells[selected].reward===name?'chosen':'')+'">'+
    img(name,"choice-image")+'<span>'+escapeHtml(name)+'</span></button>').join(""):'<div class="empty-choice">No rewards found. Try a custom entry.</div>';
 }
 function renderPairs(){
   const map=new Map();
   cells.forEach((cell,i)=>{
      if(cell.reward&&!cell.matched){
         const r=cell.reward.trim().toLowerCase();
         if(!map.has(r))map.set(r,{name:cell.reward,indices:[]});
         map.get(r).indices.push(i);
      }
   });
   const groups=[...map.values()].filter(g=>g.indices.length>=2);
   $("pair-total").textContent=groups.length+" "+(groups.length===1?"pair":"pairs");
   $("known-pairs").innerHTML=groups.length?groups.map(g=>
    '<div class="pair-row">'+img(g.name,"pair-icon")+'<div><strong>'+escapeHtml(g.name)+'</strong><small>Tiles '+g.indices.map(i=>i+1).join(", ")+'</small></div><button class="btn btn-green pair-complete" type="button" data-pair="'+g.indices.join(",")+'">Mark pair ✓</button></div>').join(""):'<div class="pair-empty">⌕ No known pairs yet. When two revealed tiles contain the same reward, they will show up here.</div>';
 }
 function render(){
   renderBoard();renderOptions();renderPairs();
   const recorded=cells.filter(c=>!!c.reward).length;
   $("recorded-count").textContent=recorded;
   $("matched-count").textContent=cells.filter(c=>c.matched).length;
   $("progress-fill").style.width=(100*recorded/count)+"%";
   $("selected-tile").textContent="#"+(selected+1);
   const current=cells[selected];
   $("selected-preview").innerHTML=current.reward?img(current.reward,"preview-image")+'<div><strong>'+escapeHtml(current.reward)+'</strong><span>'+(current.matched?"Marked as matched":"Recorded item")+'</span></div>':'<span class="no-preview">Select a reward for tile #'+(selected+1)+'</span>';
   $("match-selected").textContent=current.matched?"↶ Unmark tile":"✓ Mark matched";
   $("match-selected").disabled=!current.reward;
 }
 $("memory-board").addEventListener("click",event=>{
   const tile=event.target.closest("[data-index]");
   if(!tile)return;
   selected=Number(tile.dataset.index);
   render();
 });
 $("reward-options").addEventListener("click",event=>{
   const button=event.target.closest("[data-reward-index]");
   if(!button)return;
   const name=rewards[Number(button.dataset.rewardIndex)];
   if(name)update(()=>{cells[selected]={reward:name,matched:false}});
 });
 $("reward-search").addEventListener("input",renderOptions);
 $("set-custom").addEventListener("click",()=>{
   const name=$("custom-reward").value.trim();
   if(name){update(()=>{cells[selected]={reward:name,matched:false}});$("custom-reward").value="";}
 });
 $("custom-reward").addEventListener("keydown",event=>{if(event.key==="Enter")$("set-custom").click()});
 $("clear-selected").addEventListener("click",()=>update(()=>{cells[selected]={reward:"",matched:false}}));
 $("match-selected").addEventListener("click",()=>{
   if(!cells[selected].reward)return;
   const cell=cells[selected];
   const target=!cell.matched;
   update(()=>{
      cells[selected].matched=target;
      if(target){
        const partner=cells.findIndex((v,i)=>i!==selected&&!v.matched&&v.reward.toLowerCase()===cell.reward.toLowerCase());
        if(partner>=0)cells[partner].matched=true;
      }
   });
 });
 $("known-pairs").addEventListener("click",event=>{
   const btn=event.target.closest(".pair-complete");
   if(!btn)return;
   const indices=btn.dataset.pair.split(",").map(Number);
   update(()=>{indices.forEach(i=>{if(cells[i])cells[i].matched=true})});
 });
 $("undo-action").addEventListener("click",()=>{
   if(!history.length)return;
   cells=JSON.parse(history.pop());save();render();
 });
 $("reset-round").addEventListener("click",()=>{
   if(!confirm("Clear this Memory Match board and start a new round?"))return;
   update(()=>{cells=Array.from({length:count},()=>({reward:"",matched:false}));selected=0});
 });
 render();
}
if(mode){startMode()}else{home()}
