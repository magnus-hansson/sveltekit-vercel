import{S as t,i as e,s as a,e as o,k as s,c as n,a as l,n as d,d as r,b as c,F as i,f as u,G as h,Q as m,R as f,T as p,U as v,V as g,W as x,X as b,N as E,t as j,P as T,g as w,Y as y,u as q,v as k,r as M,Z as N,_ as O,B as U,$ as _,H as F}from"../../chunks/vendor-033104bd.js";function R(t,{pending:e,error:a,result:o}){let s;async function n(n){const l=s={};n.preventDefault();const d=new FormData(t);e&&e(d,t);try{const e=await fetch(t.action,{method:t.method,headers:{accept:"application/json"},body:d});if(l!==s)return;e.ok?o(e,t):a?a(e,null,t):console.error(await e.text())}catch(r){if(!a)throw r;a(null,r,t)}}return t.addEventListener("submit",n),{destroy(){t.removeEventListener("submit",n)}}}function B(t,e,a){const o=t.slice();return o[5]=e[a],o[6]=e,o[7]=a,o}function D(t,e){let a,j,T,w,y,q,k,M,U,_,B,D,I,P,V,$,H,L,S,A,C,G,Q,W,X,Y,Z,z=F;function J(...t){return e[3](e[5],e[6],e[7],...t)}function K(){return e[4](e[5])}return{key:t,first:null,c(){a=o("div"),j=o("form"),T=o("input"),y=s(),q=o("button"),_=s(),B=o("form"),D=o("input"),P=s(),V=o("button"),H=s(),L=o("form"),S=o("button"),G=s(),this.h()},l(t){a=n(t,"DIV",{class:!0});var e=l(a);j=n(e,"FORM",{action:!0,method:!0});var o=l(j);T=n(o,"INPUT",{type:!0,name:!0,class:!0}),y=d(o),q=n(o,"BUTTON",{class:!0,"aria-label":!0}),l(q).forEach(r),o.forEach(r),_=d(e),B=n(e,"FORM",{class:!0,action:!0,method:!0});var s=l(B);D=n(s,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),P=d(s),V=n(s,"BUTTON",{class:!0,"aria-label":!0}),l(V).forEach(r),s.forEach(r),H=d(e),L=n(e,"FORM",{action:!0,method:!0});var c=l(L);S=n(c,"BUTTON",{class:!0,"aria-label":!0}),l(S).forEach(r),c.forEach(r),G=d(e),e.forEach(r),this.h()},h(){c(T,"type","hidden"),c(T,"name","done"),T.value=w=e[5].done?"":"true",c(T,"class","svelte-dmxqmd"),c(q,"class","toggle svelte-dmxqmd"),c(q,"aria-label",k="Mark todo as "+(e[5].done?"not done":"done")),c(j,"action",M="/todos/"+e[5].uid+".json?_method=patch"),c(j,"method","post"),c(D,"aria-label","Edit todo"),c(D,"type","text"),c(D,"name","text"),D.value=I=e[5].text,c(D,"class","svelte-dmxqmd"),c(V,"class","save svelte-dmxqmd"),c(V,"aria-label","Save todo"),c(B,"class","text svelte-dmxqmd"),c(B,"action",$="/todos/"+e[5].uid+".json?_method=patch"),c(B,"method","post"),c(S,"class","delete svelte-dmxqmd"),c(S,"aria-label","Delete todo"),c(L,"action",A="/todos/"+e[5].uid+".json?_method=delete"),c(L,"method","post"),c(a,"class","todo svelte-dmxqmd"),i(a,"done",e[5].done),this.first=a},m(t,o){u(t,a,o),h(a,j),h(j,T),h(j,y),h(j,q),h(a,_),h(a,B),h(B,D),h(B,P),h(B,V),h(a,H),h(a,L),h(L,S),h(a,G),X=!0,Y||(Z=[m(U=R.call(null,j,{pending:J,result:e[1]})),m(R.call(null,B,{result:e[1]})),m(C=R.call(null,L,{result:K}))],Y=!0)},p(t,o){e=t,(!X||1&o&&w!==(w=e[5].done?"":"true"))&&(T.value=w),(!X||1&o&&k!==(k="Mark todo as "+(e[5].done?"not done":"done")))&&c(q,"aria-label",k),(!X||1&o&&M!==(M="/todos/"+e[5].uid+".json?_method=patch"))&&c(j,"action",M),U&&f(U.update)&&1&o&&U.update.call(null,{pending:J,result:e[1]}),(!X||1&o&&I!==(I=e[5].text)&&D.value!==I)&&(D.value=I),(!X||1&o&&$!==($="/todos/"+e[5].uid+".json?_method=patch"))&&c(B,"action",$),(!X||1&o&&A!==(A="/todos/"+e[5].uid+".json?_method=delete"))&&c(L,"action",A),C&&f(C.update)&&1&o&&C.update.call(null,{result:K}),1&o&&i(a,"done",e[5].done)},r(){W=a.getBoundingClientRect()},f(){p(a),z(),v(a,W)},a(){z(),z=g(a,W,N,{duration:200})},i(t){X||(t&&x((()=>{Q||(Q=b(a,O,{start:.7},!0)),Q.run(1)})),X=!0)},o(t){t&&(Q||(Q=b(a,O,{start:.7},!1)),Q.run(0)),X=!1},d(t){t&&r(a),t&&Q&&Q.end(),Y=!1,E(Z)}}}function I(t){let e,a,i,p,v,g,x,b,E,N,O,F,I=[],P=new Map,V=t[0];const $=t=>t[5].uid;for(let o=0;o<V.length;o+=1){let e=B(t,V,o),a=$(e);P.set(a,I[o]=D(a,e))}return{c(){e=s(),a=o("div"),i=o("h1"),p=j("Todos"),v=s(),g=o("form"),x=o("input"),E=s();for(let t=0;t<I.length;t+=1)I[t].c();this.h()},l(t){T('[data-svelte="svelte-181o7gf"]',document.head).forEach(r),e=d(t),a=n(t,"DIV",{class:!0});var o=l(a);i=n(o,"H1",{});var s=l(i);p=w(s,"Todos"),s.forEach(r),v=d(o),g=n(o,"FORM",{class:!0,action:!0,method:!0});var c=l(g);x=n(c,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),c.forEach(r),E=d(o);for(let e=0;e<I.length;e+=1)I[e].l(o);o.forEach(r),this.h()},h(){document.title="Todos",c(x,"name","text"),c(x,"aria-label","Add todo"),c(x,"placeholder","+ tap to add a todo"),c(x,"class","svelte-dmxqmd"),c(g,"class","new svelte-dmxqmd"),c(g,"action","/todos.json"),c(g,"method","post"),c(a,"class","todos svelte-dmxqmd")},m(o,s){u(o,e,s),u(o,a,s),h(a,i),h(i,p),h(a,v),h(a,g),h(g,x),h(a,E);for(let t=0;t<I.length;t+=1)I[t].m(a,null);N=!0,O||(F=m(b=R.call(null,g,{result:t[2]})),O=!0)},p(t,[e]){if(b&&f(b.update)&&1&e&&b.update.call(null,{result:t[2]}),3&e){V=t[0],U();for(let t=0;t<I.length;t+=1)I[t].r();I=y(I,e,$,1,t,V,P,a,_,D,null,B);for(let t=0;t<I.length;t+=1)I[t].a();q()}},i(t){if(!N){for(let t=0;t<V.length;t+=1)k(I[t]);N=!0}},o(t){for(let e=0;e<I.length;e+=1)M(I[e]);N=!1},d(t){t&&r(e),t&&r(a);for(let e=0;e<I.length;e+=1)I[e].d();O=!1,F()}}}const P=async({fetch:t})=>{const e=await t("/todos.json");if(e.ok){return{props:{todos:await e.json()}}}const{message:a}=await e.json();return{error:new Error(a)}};function V(t,e,a){let{todos:o}=e;return t.$$set=t=>{"todos"in t&&a(0,o=t.todos)},[o,async function(t){const e=await t.json();a(0,o=o.map((t=>t.uid===e.uid?e:t)))},async(t,e)=>{const s=await t.json();a(0,o=[...o,s]),e.reset()},(t,e,s,n)=>{a(0,e[s].done=!!n.get("done"),o)},t=>{a(0,o=o.filter((e=>e.uid!==t.uid)))}]}export default class extends t{constructor(t){super(),e(this,t,V,I,a,{todos:0})}}export{P as load};
