const SCRIPT_URL='https://script.google.com/macros/s/AKfycbxyhuQI69BhzxYKzX07mcFqro-vC40xPjcHOY8coCYT7YCDK_c16vJncFPdwEcAfKed/exec';
const dialog=document.querySelector('#join-dialog');
const form=document.querySelector('#join-form');
const statusText=document.querySelector('.form-status');
const menuButton=document.querySelector('.menu-toggle');
const primaryNav=document.querySelector('#primary-nav');
document.querySelectorAll('img[data-fallback-src]').forEach(image=>{
  const useFallback=()=>{
    if(image.dataset.fallbackUsed==='true') return;
    image.dataset.fallbackUsed='true';
    image.src=image.dataset.fallbackSrc;
  };
  image.addEventListener('error',useFallback);
  // Handle images that already failed before this script ran.
  if(image.complete&&image.naturalWidth===0) useFallback();
});
const closeMenu=()=>{primaryNav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation')};
menuButton.addEventListener('click',()=>{
  const open=menuButton.getAttribute('aria-expanded')!=='true';
  primaryNav.classList.toggle('open',open);
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');
});
primaryNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape') closeMenu()});
document.querySelectorAll('[data-open-form]').forEach(button=>button.addEventListener('click',()=>{
  const program=button.dataset.program;
  if(program) document.querySelector('#program-select').value=program;
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog) dialog.close()});
form.addEventListener('submit',async event=>{
  event.preventDefault();
  const submit=form.querySelector('.submit');
  const payload=Object.fromEntries(new FormData(form));
  payload.submitted_at=new Date().toLocaleString('ko-KR',{timeZone:'Asia/Seoul'});
  submit.disabled=true; submit.textContent='Sending…'; statusText.textContent='';
  try{
    await fetch(SCRIPT_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    form.reset(); statusText.textContent='Thanks — we’ll contact you soon.'; submit.textContent='Request sent';
    setTimeout(()=>{dialog.close();submit.disabled=false;submit.textContent='Send my request';statusText.textContent=''},1800);
  }catch(error){statusText.textContent='Something went wrong. Please try again.';submit.disabled=false;submit.textContent='Send my request'}
});
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting) return;
  if(!reduceMotion) entry.target.animate(
    [{opacity:.2,transform:'translateY(24px)'},{opacity:1,transform:'translateY(0)'}],
    {duration:480,easing:'cubic-bezier(.16,1,.3,1)',fill:'both'}
  );
  observer.unobserve(entry.target);
}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
