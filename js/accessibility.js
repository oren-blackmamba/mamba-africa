
(function(){var R=document.documentElement,fab=document.getElementById('a11yfab'),pn=document.getElementById('a11ypanel'),K='gvul-a11y',st={};
function sv(){try{localStorage.setItem(K,JSON.stringify(st))}catch(e){}}
function ap(){['big','bigger','contrast','gray','links','font','still'].forEach(function(k){R.classList.toggle('a11y-'+k,!!st[k]);var b=pn.querySelector('[data-a="'+k+'"]');if(b)b.setAttribute('aria-pressed',!!st[k])})}
try{st=JSON.parse(localStorage.getItem(K)||'{}')||{}}catch(e){st={}}ap();
function op(o){pn.hidden=!o;fab.setAttribute('aria-expanded',o);if(o)pn.querySelector('button').focus();else fab.focus()}
fab.onclick=function(){op(pn.hidden)};document.getElementById('a11yclose').onclick=function(){op(false)};
var sb=document.getElementById('a11ystmt');if(sb)sb.onclick=function(){op(true);var h=document.getElementById('a11yst');if(h){h.setAttribute('tabindex','-1');h.focus();h.scrollIntoView()}};
pn.addEventListener('keydown',function(e){if(e.key==='Escape')op(false)});
pn.querySelectorAll('[data-a]').forEach(function(b){b.onclick=function(){var k=b.dataset.a;st[k]=!st[k];if(k==='big'&&st[k])st.bigger=false;if(k==='bigger'&&st[k])st.big=false;ap();sv()}});
document.getElementById('a11yreset').onclick=function(){st={};ap();sv()};
if(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches&&st.still===undefined){st.still=true;ap()}
})();
