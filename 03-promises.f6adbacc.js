!function(){var e=document.querySelector(".form");e.addEventListener("submit",(function(i){i.preventDefault(),t=Number(e.elements.delay.value),o=Number(e.elements.step.value),r=Number(e.elements.amount.value),function(){for(var e=0;e<r;e+=1)a(n,t).then((function(e){var n=e.position,t=e.delay;return console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;return console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),n+=1,t+=o}(),i.currentTarget.reset()}));var n=1,t=0,o=0,r=0;function a(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}}();
//# sourceMappingURL=03-promises.f6adbacc.js.map