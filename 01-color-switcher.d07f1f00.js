!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null;function c(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){o=setInterval(c,1e3)})),e.addEventListener("click",(function(){clearInterval(o)})),e.style.opacity="0.5",e.style.pointerEvents="none",e.addEventListener("click",(function(){e.style.opacity="0.5",e.style.pointerEvents="none",t.style.opacity="1",t.style.pointerEvents="auto"})),t.addEventListener("click",(function(){t.style.opacity="0.5",t.style.pointerEvents="none",e.style.opacity="1",e.style.pointerEvents="auto"}))}();
//# sourceMappingURL=01-color-switcher.d07f1f00.js.map