const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(menu){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)})}document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();

// Make the first screen immediately understandable: customers choose what they need.
const heroTitle=document.querySelector('.hero h1');
if(heroTitle){heroTitle.innerHTML='YOUR HOME.<br>YOUR FAMILY.<br><em>WECARE.</em>'}
const heroText=document.querySelector('.hero-text');
if(heroText){heroText.textContent='Professional property care and trusted local support for families living away from Kerala. Tell us what matters to you, and we’ll take care of the rest.'}
const actions=document.querySelector('.hero-actions');
if(actions){actions.innerHTML='<a class="btn btn-primary" href="#contact">Start a Conversation <span>↗</span></a><a class="btn btn-secondary" href="#services">Explore Services</a>'}
const trust=document.querySelector('.trust-row');
if(trust){const chooser=document.createElement('div');chooser.className='need-chooser';chooser.innerHTML='<a href="#services"><span class="need-icon">⌂</span><span><strong>My Property</strong><small>Keep my home cared for</small></span><b>→</b></a><a href="#services"><span class="need-icon">♡</span><span><strong>My Parents</strong><small>Support my family</small></span><b>→</b></a><a href="#contact"><span class="need-icon">✦</span><span><strong>I Need Help</strong><small>Handle a local task</small></span><b>→</b></a>';trust.replaceWith(chooser)}
