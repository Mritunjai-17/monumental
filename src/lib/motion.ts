// Inline scripts for motion that must run before first paint.

/**
 * Adds html.motion-ok unless the user prefers reduced motion. Runs in <head>.
 * If the reveal script (RevealObserver) has not started within 4s, e.g. the JS
 * bundle failed, the class is removed again so no content stays hidden.
 */
export const motionOkScript =
  "if(!window.matchMedia||!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion-ok');setTimeout(function(){if(!window.__revealReady)document.documentElement.classList.remove('motion-ok')},4000)}";

/**
 * Groups the hero headline's word spans into rendered lines and exposes each
 * word's line index as --hw{i} on <html>, so the CSS entrance reveals the
 * headline line by line with a masked slide-up effect.
 */
export const heroLineIndexScript = `(function(){var h=document.getElementById('hero-title');if(!h)return;var w=h.querySelectorAll('.hero-word'),s=document.documentElement.style,t=null,l=-1;for(var i=0;i<w.length;i++){var o=w[i].offsetTop;if(t===null||o>t+2){l++;t=o}s.setProperty('--hw'+i,l)}})()`;


