/* KHS Enhancement v4.0 â€” Emerald Ã— Gold */
(function(){
'use strict';

/* â”€â”€ ready â”€â”€ */
function ready(fn){ document.readyState!=='loading'?fn():document.addEventListener('DOMContentLoaded',fn); }

/* â”€â”€ 1. CHALK PARTICLES â”€â”€ */
function initParticles(){
  var c=document.createElement('canvas');
  c.id='khs-canvas';
  document.body.prepend(c);
  var ctx=c.getContext('2d'),W,H,pts=[];
  var N=window.innerWidth<768?16:32;
  var PAL=[
    'rgba(52,211,153,0.35)',
    'rgba(245,158,11,0.3)',
    'rgba(255,255,255,0.4)',
    'rgba(6,95,70,0.25)',
  ];
  function resize(){ W=c.width=window.innerWidth; H=c.height=window.innerHeight; }
  function rnd(a,b){ return Math.random()*(b-a)+a; }
  function mk(){
    return{
      x:rnd(0,W),y:rnd(-H,H),
      r:rnd(0.8,2.2),
      vx:rnd(-.12,.12),vy:rnd(-.35,-.08),
      a:rnd(.1,.45),da:rnd(-.002,.002),
      col:PAL[Math.floor(Math.random()*PAL.length)]
    };
  }
  function init(){ pts=[]; for(var i=0;i<N;i++) pts.push(mk()); }
  function tick(){
    ctx.clearRect(0,0,W,H);
    for(var i=0;i<pts.length;i++){
      var p=pts[i];
      ctx.save(); ctx.globalAlpha=Math.max(0,Math.min(1,p.a));
      ctx.fillStyle=p.col;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
      ctx.restore();
      p.x+=p.vx; p.y+=p.vy; p.a+=p.da;
      if(p.a<.06||p.a>.5) p.da*=-1;
      if(p.y<-8||p.x<-10||p.x>W+10){ pts[i]=mk(); pts[i].y=H+6; }
    }
    requestAnimationFrame(tick);
  }
  resize(); init(); tick();
  window.addEventListener('resize',function(){ resize(); init(); });
}

/* â”€â”€ 2. SCROLL REVEAL â”€â”€ */
function initReveal(){
  var SEL=[
    '.section-title','.message-box','.post-media',
    '.blog-item','.course-item','.our-team',
    '.pricing-table','.inner-hmv','.timeline__item',
    '.stat-wrap [class*="col-"]',
    '#overviews [class*="col-"]',
    '.section.lb [class*="col-"]',
    '.section.wb [class*="col-"]',
    '.hmv-box [class*="col-"]',
  ].join(',');

  document.querySelectorAll(SEL).forEach(function(el,i){
    if(el.classList.contains('khs-reveal')) return;
    el.classList.add('khs-reveal');
    var m=i%3;
    if(m===1) el.classList.add('from-left');
    if(m===2) el.classList.add('from-right');
  });

  if(!('IntersectionObserver' in window)){
    document.querySelectorAll('.khs-reveal').forEach(function(el){ el.classList.add('visible'); });
    return;
  }

  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  },{ threshold:.1, rootMargin:'0px 0px -36px 0px' });

  document.querySelectorAll('.khs-reveal').forEach(function(el){ obs.observe(el); });
}

/* â”€â”€ 3. COUNTER â”€â”€ */
function initCounters(){
  var els=document.querySelectorAll('.stat_count, .fun_count h3');
  if(!els.length||!('IntersectionObserver' in window)) return;
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting) return;
      var el=e.target;
      if(el.dataset.counted) return;
      el.dataset.counted='1';
      var raw=el.innerText.replace(/[^0-9]/g,'');
      var target=parseInt(raw,10);
      if(!target) return;
      var suffix=el.innerText.replace(/[0-9,.]/g,'').trim();
      var start=0, step=Math.ceil(target/60);
      var t=setInterval(function(){
        start=Math.min(start+step,target);
        el.innerText=start.toLocaleString()+(suffix?' '+suffix:'');
        if(start>=target) clearInterval(t);
      },20);
      obs.unobserve(el);
    });
  },{ threshold:.6 });
  els.forEach(function(el){ obs.observe(el); });
}

/* â”€â”€ 4. RIPPLE â”€â”€ */
function initRipple(){
  document.querySelectorAll('.hover-btn-new,.btn:not(.close):not(.navbar-toggler)').forEach(function(btn){
    btn.classList.add('khs-ripple-host');
    btn.addEventListener('click',function(e){
      var r=btn.getBoundingClientRect();
      var sz=Math.max(r.width,r.height);
      var rp=document.createElement('span');
      rp.className='khs-ripple';
      rp.style.cssText='width:'+sz+'px;height:'+sz+'px;left:'+(e.clientX-r.left-sz/2)+'px;top:'+(e.clientY-r.top-sz/2)+'px';
      btn.appendChild(rp);
      rp.addEventListener('animationend',function(){ rp.remove(); });
    });
  });
}

/* â”€â”€ 5. NAVBAR SCROLL STATE â”€â”€ */
function initNavScroll(){
  var nav=document.querySelector('.top-navbar .bg-light');
  if(!nav) return;
  window.addEventListener('scroll',function(){
    nav.style.boxShadow=window.scrollY>60
      ?'0 4px 40px rgba(0,0,0,.38)':'0 2px 32px rgba(0,0,0,.28)';
  },{passive:true});
}

/* â”€â”€ 6. SMOOTH SCROLL â”€â”€ */
function initSmooth(){
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var id=this.getAttribute('href');
      if(id==='#'||id==='#login') return;
      var t=document.querySelector(id);
      if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth',block:'start'}); }
    });
  });
}

/* â”€â”€ 7. SECTION TITLE UNDERLINE â”€â”€ */
function initTitleLine(){
  if(!('IntersectionObserver' in window)) return;
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('khs-title-in'); obs.unobserve(e.target); }
    });
  },{ threshold:.2 });
  document.querySelectorAll('.section-title h2,.section-title h3').forEach(function(el){
    el.style.cssText+='position:relative;display:inline-block;';
    var bar=document.createElement('span');
    bar.style.cssText=[
      'position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);',
      'height:3px;border-radius:3px;width:0;',
      'background:linear-gradient(90deg,#f59e0b,#059669);',
      'transition:width .65s cubic-bezier(0.16,1,.3,1) .2s;',
      'display:block;'
    ].join('');
    el.appendChild(bar);
    obs.observe(el.closest('.section-title')||el);
    el.closest('.section-title')&&el.closest('.section-title').addEventListener('khs-title-in',function(){
      bar.style.width='55%';
    });
  });
  // trigger via class
  var obs2=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.querySelectorAll('h2 span[style],h3 span[style]').forEach(function(bar){
          bar.style.width='55%';
        });
        obs2.unobserve(e.target);
      }
    });
  },{ threshold:.15 });
  document.querySelectorAll('.section-title').forEach(function(el){ obs2.observe(el); });
}

/* â”€â”€ INIT â”€â”€ */
ready(function(){
  initParticles();
  initReveal();
  initCounters();
  initRipple();
  initNavScroll();
  initSmooth();
  initTitleLine();
  console.log('%cðŸ« KHS v4.0 â€” Emerald Ã— Gold','background:#064e3b;color:#f59e0b;font-weight:800;padding:4px 12px;border-radius:6px;font-size:13px');
});


/* â”€â”€ 9. DROPDOWN NAV FIX â”€â”€ */
function initDropdownFix(){
  document.querySelectorAll('.dropdown').forEach(function(drop){
    var toggle = drop.querySelector('.dropdown-toggle');
    var menu = drop.querySelector('.dropdown-menu');
    if(!toggle || !menu) return;

    drop.addEventListener('mouseenter', function(){
      menu.style.display='block';
    });

    drop.addEventListener('mouseleave', function(){
      menu.style.display='none';
    });

    toggle.addEventListener('click', function(e){
      var isOpen = menu.style.display === 'block';
      if(!isOpen){
        e.preventDefault();
        menu.style.display = 'block';
        return;
      }

      if(!toggle.getAttribute('href') || toggle.getAttribute('href') === '#'){
        e.preventDefault();
        menu.style.display = 'none';
      }
    });
  });
}

ready(function(){
  initDropdownFix();
});
})();
