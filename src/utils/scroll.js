// scroll depth 50% once
let fired = false;
export function initScrollDepth(){
  if(typeof window === 'undefined') return;
  window.addEventListener('scroll', () => {
    if(fired) return;
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if(scrollPercent > 50){
      fired = true;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'scroll_depth', percent: '50' });
    }
  });
}
