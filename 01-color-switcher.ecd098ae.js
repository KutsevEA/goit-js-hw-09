const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");let o=null;function l(){n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{o=setInterval(l,1e3)})),e.addEventListener("click",(()=>{clearInterval(o)})),e.style.opacity="0.5",e.style.pointerEvents="none",e.addEventListener("click",(()=>{e.style.opacity="0.5",e.style.pointerEvents="none",t.style.opacity="1",t.style.pointerEvents="auto"})),t.addEventListener("click",(()=>{t.style.opacity="0.5",t.style.pointerEvents="none",e.style.opacity="1",e.style.pointerEvents="auto"}));
//# sourceMappingURL=01-color-switcher.ecd098ae.js.map