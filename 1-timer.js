import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as p,i as x}from"./assets/vendor-BbbuE1sJ.js";const c=document.querySelector("#datetime-picker"),n=document.querySelector("button[data-start]"),i=document.querySelector("[data-days]"),m=document.querySelector("[data-hours]"),f=document.querySelector("[data-minutes]"),h=document.querySelector("[data-seconds]");let a=null,C=null;function y(){const t=Date.now(),e=a-t;if(e<=0){clearInterval(C),i.textContent="00",m.textContent="00",f.textContent="00",h.textContent="00",c.disabled=!1,n.disabled=!0;return}const{days:u,hours:d,minutes:l,seconds:s}=r(e);i.textContent=o(u),m.textContent=o(d),f.textContent=o(l),h.textContent=o(s)}function g(){n.disabled=!0,c.disabled=!0,y(),C=setInterval(y,1e3)}function r(t){const s=Math.floor(t/864e5),S=Math.floor(t%864e5/36e5),T=Math.floor(t%864e5%36e5/6e4),b=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:S,minutes:T,seconds:b}}function o(t){return String(t).padStart(2,"0")}const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){a=t[0].getTime();const e=Date.now();if(a<=e){x.error({message:"Please choose a date in the future"}),n.disabled=!0;return}n.disabled=!1}};p(c,q);n.addEventListener("click",g);console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));
//# sourceMappingURL=1-timer.js.map
