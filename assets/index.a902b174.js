(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function p(){}function ge(e){return e()}function le(){return Object.create(null)}function C(e){e.forEach(ge)}function _e(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Se(e){return Object.keys(e).length===0}function me(e,...t){if(e==null)return p;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function J(e,t,n){e.$$.on_destroy.push(me(t,n))}function _(e,t){e.appendChild(t)}function O(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode.removeChild(e)}function pe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function k(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function P(){return x(" ")}function Ee(){return x("")}function j(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function Q(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Le(e){return Array.from(e.childNodes)}function T(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function oe(e,t,n,l){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}function ie(e,t,n){e.classList[n?"add":"remove"](t)}let W;function I(e){W=e}const z=[],ce=[],H=[],se=[],Ae=Promise.resolve();let U=!1;function Ce(){U||(U=!0,Ae.then(ye))}function V(e){H.push(e)}const Y=new Set;let q=0;function ye(){const e=W;do{for(;q<z.length;){const t=z[q];q++,I(t),Ne(t.$$)}for(I(null),z.length=0,q=0;ce.length;)ce.pop()();for(let t=0;t<H.length;t+=1){const n=H[t];Y.has(n)||(Y.add(n),n())}H.length=0}while(z.length);for(;se.length;)se.pop()();U=!1,Y.clear(),I(e)}function Ne(e){if(e.fragment!==null){e.update(),C(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}const K=new Set;let L;function be(){L={r:0,c:[],p:L}}function $e(){L.r||C(L.c),L=L.p}function v(e,t){e&&e.i&&(K.delete(e),e.i(t))}function G(e,t,n,l){if(e&&e.o){if(K.has(e))return;K.add(e),L.c.push(()=>{K.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function xe(e){e&&e.c()}function X(e,t,n,l){const{fragment:r,on_mount:o,on_destroy:i,after_update:u}=e.$$;r&&r.m(t,n),l||V(()=>{const c=o.map(ge).filter(_e);i?i.push(...c):C(c),e.$$.on_mount=[]}),u.forEach(V)}function Z(e,t){const n=e.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Oe(e,t){e.$$.dirty[0]===-1&&(z.push(e),Ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ee(e,t,n,l,r,o,i,u=[-1]){const c=W;I(e);const s=e.$$={fragment:null,ctx:null,props:o,update:p,not_equal:r,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:le(),dirty:u,skip_bound:!1,root:t.target||c.$$.root};i&&i(s.root);let y=!1;if(s.ctx=n?n(e,t.props||{},(g,w,...m)=>{const b=m.length?m[0]:w;return s.ctx&&r(s.ctx[g],s.ctx[g]=b)&&(!s.skip_bound&&s.bound[g]&&s.bound[g](b),y&&Oe(e,g)),w}):[],s.update(),y=!0,C(s.before_update),s.fragment=l?l(s.ctx):!1,t.target){if(t.hydrate){const g=Le(t.target);s.fragment&&s.fragment.l(g),g.forEach(A)}else s.fragment&&s.fragment.c();t.intro&&v(e.$$.fragment),X(e,t.target,t.anchor,t.customElement),ye()}I(c)}class te{$destroy(){Z(this,1),this.$destroy=p}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!Se(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const N=[];function Ge(e,t){return{subscribe:R(e,t).subscribe}}function R(e,t=p){let n;const l=new Set;function r(u){if(F(e,u)&&(e=u,n)){const c=!N.length;for(const s of l)s[1](),N.push(s,e);if(c){for(let s=0;s<N.length;s+=2)N[s][0](N[s+1]);N.length=0}}}function o(u){r(u(e))}function i(u,c=p){const s=[u,c];return l.add(s),l.size===1&&(n=t(r)||p),u(e),()=>{l.delete(s),l.size===0&&(n(),n=null)}}return{set:r,update:o,subscribe:i}}function ze(e,t,n){const l=!Array.isArray(e),r=l?[e]:e,o=t.length<2;return Ge(n,i=>{let u=!1;const c=[];let s=0,y=p;const g=()=>{if(s)return;y();const m=t(l?c[0]:c,i);o?i(m):y=_e(m)?m:p},w=r.map((m,b)=>me(m,$=>{c[b]=$,s&=~(1<<b),u&&g()},()=>{s|=1<<b}));return u=!0,g(),function(){C(w),y()}})}const Ie={key:null,code:null},Pe={x:0,y:0},B={minSize:5,maxSize:25,initSize:8},je={h:{x:-1,y:0},j:{x:0,y:1},k:{x:0,y:-1},l:{x:1,y:0}};function qe(e,t,n){console.log(e),console.log(t),console.log(n);let l=e-1,r=t.x+n.x,o=t.y+n.y;return r>l&&o==l&&(r=0,o=0),r>l&&o<l&&(r=0,o+=1),r<0&&o>0&&(r=l,o-=1),r<0&&o==0&&(r=l),o<0&&(o=l),o>l&&(o=0),{x:r,y:o}}function Be(){const{subscribe:e,set:t}=R(Ie);return{subscribe:e,log:n=>t({key:n.key,code:n.keyCode})}}function He(){const{subscribe:e,set:t,update:n}=R(B.initSize);return{subscribe:e,add:l=>n(r=>r+l>B.maxSize?r:r+l),reduce:l=>n(r=>r-l<B.minSize?r:r-l),reset:()=>t(B.initSize)}}function Ke(){const{subscribe:e,set:t,update:n}=R(Pe);return{subscribe:e,move:(l,r)=>n(o=>qe(l,r,o))}}const ve=Be(),M=He(),ke=Ke(),Me=ze(ve,e=>je[e.key],{x:0,y:0});function Te(e){let t,n,l,r;return{c(){t=k("div"),n=x(e[0]),l=x(","),r=x(e[1]),Q(t,"class","svelte-1ifyfrj"),ie(t,"selected",e[0]===e[2].x&&e[1]===e[2].y)},m(o,i){O(o,t,i),_(t,n),_(t,l),_(t,r)},p(o,[i]){i&1&&T(n,o[0]),i&2&&T(r,o[1]),i&7&&ie(t,"selected",o[0]===o[2].x&&o[1]===o[2].y)},i:p,o:p,d(o){o&&A(t)}}}function Fe(e,t,n){let l;J(e,ke,i=>n(2,l=i));let{idx:r}=t,{idy:o}=t;return e.$$set=i=>{"idx"in i&&n(0,r=i.idx),"idy"in i&&n(1,o=i.idy)},[r,o,l]}class Re extends te{constructor(t){super(),ee(this,t,Fe,Te,F,{idx:0,idy:1})}}function ue(e,t,n){const l=e.slice();return l[5]=t[n],l[7]=n,l}function fe(e,t,n){const l=e.slice();return l[5]=t[n],l[9]=n,l}function de(e){let t,n;return t=new Re({props:{idx:e[9],idy:e[7]}}),{c(){xe(t.$$.fragment)},m(l,r){X(t,l,r),n=!0},p,i(l){n||(v(t.$$.fragment,l),n=!0)},o(l){G(t.$$.fragment,l),n=!1},d(l){Z(t,l)}}}function ae(e){let t,n,l={length:e[0]},r=[];for(let i=0;i<l.length;i+=1)r[i]=de(fe(e,l,i));const o=i=>G(r[i],1,1,()=>{r[i]=null});return{c(){for(let i=0;i<r.length;i+=1)r[i].c();t=Ee()},m(i,u){for(let c=0;c<r.length;c+=1)r[c].m(i,u);O(i,t,u),n=!0},p(i,u){if(u&1){l={length:i[0]};let c;for(c=0;c<l.length;c+=1){const s=fe(i,l,c);r[c]?(r[c].p(s,u),v(r[c],1)):(r[c]=de(s),r[c].c(),v(r[c],1),r[c].m(t.parentNode,t))}for(be(),c=l.length;c<r.length;c+=1)o(c);$e()}},i(i){if(!n){for(let u=0;u<l.length;u+=1)v(r[u]);n=!0}},o(i){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)G(r[u]);n=!1},d(i){pe(r,i),i&&A(t)}}}function De(e){let t,n,l,r,o,i,u,c,s,y=e[0]**2+"",g,w,m,b,$,S,D,ne,E={length:e[0]},d=[];for(let f=0;f<E.length;f+=1)d[f]=ae(ue(e,E,f));const we=f=>G(d[f],1,1,()=>{d[f]=null});return{c(){t=k("div"),n=k("button"),n.textContent="add cells",l=P(),r=k("button"),r.textContent="reset cells",o=P(),i=k("button"),i.textContent="reduce cells",u=P(),c=k("div"),s=x("total cells: "),g=x(y),w=x(" width: "),m=x(e[0]),b=P(),$=k("div");for(let f=0;f<d.length;f+=1)d[f].c();Q(t,"class","grid-config"),Q($,"class","cell-container svelte-97fpwq"),oe($,"--cols",e[0])},m(f,h){O(f,t,h),_(t,n),_(t,l),_(t,r),_(t,o),_(t,i),_(t,u),_(t,c),_(c,s),_(c,g),_(c,w),_(c,m),O(f,b,h),O(f,$,h);for(let a=0;a<d.length;a+=1)d[a].m($,null);S=!0,D||(ne=[j(window,"keydown",e[1]),j(n,"click",e[2]),j(r,"click",M.reset),j(i,"click",e[3])],D=!0)},p(f,[h]){if((!S||h&1)&&y!==(y=f[0]**2+"")&&T(g,y),(!S||h&1)&&T(m,f[0]),h&1){E={length:f[0]};let a;for(a=0;a<E.length;a+=1){const re=ue(f,E,a);d[a]?(d[a].p(re,h),v(d[a],1)):(d[a]=ae(re),d[a].c(),v(d[a],1),d[a].m($,null))}for(be(),a=E.length;a<d.length;a+=1)we(a);$e()}(!S||h&1)&&oe($,"--cols",f[0])},i(f){if(!S){for(let h=0;h<E.length;h+=1)v(d[h]);S=!0}},o(f){d=d.filter(Boolean);for(let h=0;h<d.length;h+=1)G(d[h]);S=!1},d(f){f&&A(t),f&&A(b),f&&A($),pe(d,f),D=!1,C(ne)}}}let he=1;function Ye(e,t,n){let l,r;J(e,Me,c=>n(4,l=c)),J(e,M,c=>n(0,r=c));function o(c){ve.log(c),ke.move(r,l)}return[r,o,()=>M.add(he),()=>M.reduce(he)]}class Je extends te{constructor(t){super(),ee(this,t,Ye,De,F,{})}}function Qe(e){let t,n,l;return n=new Je({}),{c(){t=k("main"),xe(n.$$.fragment)},m(r,o){O(r,t,o),X(n,t,null),l=!0},p,i(r){l||(v(n.$$.fragment,r),l=!0)},o(r){G(n.$$.fragment,r),l=!1},d(r){r&&A(t),Z(n)}}}class Ue extends te{constructor(t){super(),ee(this,t,null,Qe,F,{})}}new Ue({target:document.getElementById("app")});