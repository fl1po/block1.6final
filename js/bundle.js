!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);var r=document.querySelector(".blurred-space"),o=(document.querySelectorAll(".button__call"),document.querySelector(".call")),l=document.querySelector(".call__close-button"),i=(document.querySelectorAll(".button__chat"),document.querySelector(".feedback")),c=document.querySelector(".feedback__close-button"),a=function(e,t,n){event.preventDefault(),e.style.transform="translateX(460px)",M.matches||(u.style.transform="translateX(0px)"),t.style.filter="opacity(0)",t.style.transform="translate(0px, 0px)",r.style.zIndex="2";C.style.filter="opacity(1)",r.style.display="none"},s=function(e,t,n){if(event.preventDefault(),p(),r.style.zIndex="4",!e){t.style.transform="translateX(-460px)",n.style.filter="opacity(1)",M.matches&&(n.style.transform="translate(-80px, 20px)");C.style.filter="opacity(0.8)",r.style.display="block"}};r.addEventListener("click",(function(){a(i,c),a(o,l),p(),r.style.zIndex="2"})),document.querySelectorAll(".button__call").forEach((function(e){e.addEventListener("click",(function(){s(!1,o,l)}))})),document.querySelectorAll(".button__chat").forEach((function(e){e.addEventListener("click",(function(){s(!1,i,c)}))})),l.addEventListener("click",(function(){a(o,l)})),c.addEventListener("click",(function(){a(i,c)}));var u=document.querySelector(".sidebar"),d=document.querySelector(".blurred-space"),y=document.querySelector(".sidebar__close-button"),p=(document.querySelectorAll(".burger-button"),function(){if(!M.matches){event.preventDefault(),u.style.transform="translateX(0px)",C.style.filter="opacity(1)";d.style.display="none",d.style.zIndex="2"}});document.querySelectorAll(".burger-button").forEach((function(e){e.addEventListener("click",(function(){if(event.preventDefault(),!O){u.style.transform="translateX(340px)",u.style.display="block";C.style.filter="opacity(0.8)",d.style.display="block"}}))})),y.addEventListener("click",(function(){p(),d.style.zIndex="2"})),d.addEventListener("click",(function(){p(),d.style.zIndex="2"}));var f=window.matchMedia("(min-width: 768px)"),_=document.querySelectorAll(".slide"),m=new Swiper(".prices__container",{pagination:{el:".prices__pagination"},direction:"horizontal",spaceBetween:16,width:224,loop:!0,init:!1}),h=new Swiper(".brands__container",{pagination:{el:".brands__pagination"},direction:"horizontal",spaceBetween:16,width:224,init:!1}),b=new Swiper(".tech__container",{pagination:{el:".tech__pagination"},direction:"horizontal",spaceBetween:16,width:240,loop:!0,init:!1}),w=document.querySelector(".brands__show-all"),S=document.querySelector(".tech__show-all"),x=document.querySelector(".tech__wrapper"),v=document.querySelector(".brands__wrapper"),q=document.querySelector(".tech__show-all > .show-all__img"),g=document.querySelector(".tech__show-all > .show-all__text"),k=document.querySelector(".brands__show-all > .show-all__img"),E=document.querySelector(".brands__show-all > .show-all__text"),L=!1,z=!1;S.addEventListener("click",(function(){z?(z=!1,q.style.transform="rotate(0deg)",g.textContent="Показать все",x.style.height="160px"):(z=!0,q.style.transform="rotate(180deg)",g.textContent="Скрыть",x.style.height="100%")})),w.addEventListener("click",(function(){L?(L=!1,k.style.transform="rotate(0deg)",E.textContent="Показать все",v.style.height="160px"):(L=!0,k.style.transform="rotate(180deg)",E.textContent="Скрыть",v.style.height="100%")}));for(var j=0;j<_.length;j++)f.matches||(h.init(),b.init(),m.init());f.addListener((function(e){for(var t=0;t<_.length;t++)e.matches?(_[t].classList.remove("swiper-slide"),p(),h.destroy(),b.destroy(),m.destroy()):(_[t].classList.add("swiper-slide"),h.init(),b.init(),m.init())})),n.d(t,"desktop",(function(){return M})),n.d(t,"sidebarShown",(function(){return O})),n.d(t,"main",(function(){return C}));var A=window.matchMedia("(min-width: 768px)"),M=window.matchMedia("(min-width: 1120px)"),O=!1,C=document.querySelector(".main"),I=document.querySelector(".description__link"),P=document.querySelector(".description__text--tabletplus"),X=document.querySelector(".description__text--full"),D=document.querySelector(".description__text--all"),B=!1;I.addEventListener("click",(function(){B?(B=!1,A.matches||(D.style.display="none"),M.matches||(X.style.display="none"),D.style.display="none",document.querySelector(".description__link > .show-all__text").textContent="Читать далее",document.querySelector(".description__link > .show-all__img").style.transform="rotate(0deg)"):(B=!0,P.style.display="inline",D.style.display="inline",X.style.display="inline",document.querySelector(".description__link > .show-all__text").textContent="Скрыть",document.querySelector(".description__link > .show-all__img").style.transform="rotate(180deg)")}))}]);
//# sourceMappingURL=bundle.js.map