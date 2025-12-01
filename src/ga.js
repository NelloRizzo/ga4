export function gtag(){ window.dataLayer = window.dataLayer || []; window.dataLayer.push(arguments); }

export function pageview(path, title){
  if(window.gtag){
    window.gtag('event','page_view',{ page_path: path, page_title: title });
  }
}

export function trackEvent(name, params){
  if(window.gtag){
    window.gtag('event', name, params || {});
  }
}
