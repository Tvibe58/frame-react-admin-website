import{aJ as o,aK as r,aL as i,j as s,i as u,aM as h}from"./index-3e7d7600.js";import{D as l,S as d}from"./index-9568f00d.js";function c(e=o){const n=e===o?r:i(e);return function(){const{store:a}=n();return a}}const x=c();function p(e=o){const n=e===o?x:c(e);return function(){return n().dispatch}}const f=p(),m=[{label:"中文",key:"zh"},{label:"English",key:"en"}],C=()=>{const e=f(),n=({key:t})=>{u.changeLanguage(t),e(h(t))};return s.jsx(l,{menu:{items:m,onClick:n},children:s.jsx("a",{onClick:t=>t.preventDefault(),children:s.jsx(d,{children:s.jsxs("svg",{viewBox:"0 0 24 24",focusable:"false",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",children:[s.jsx("path",{d:"M0 0h24v24H0z",fill:"none"}),s.jsx("path",{d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",className:"css-c4d79v"})]})})})})};export{C as S,f as u};
