(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7398:function(e,t,a){Promise.resolve().then(a.bind(a,2417))},2417:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var r=a(4552),c=a(5446),o=a(24);let n=()=>{},l=e=>{let{checked:t,disabled:a,i:c,name:o,onClick:l,...i}=e,s={cursor:"pointer",display:"inline-block"},m="".concat(o,"_").concat(c);return(0,r.jsxs)("span",{style:"weight"in i?{display:"flex",alignItems:"center"}:{},children:[(0,r.jsxs)("span",{style:{...s,marginRight:16,whiteSpace:"nowrap"},onClick:a?n:l,children:[(0,r.jsx)("input",{disabled:a,style:s,name:m,type:"checkbox",checked:t,onChange:()=>null}),(0,r.jsx)("label",{style:s,htmlFor:m,children:o})]}),"onClickWeightLock"in i?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{style:{display:"inline-block",marginRight:4},value:i.weight,type:"range",disabled:i.locked||i.disabledWeights,min:0,max:1,step:.01,onChange:e=>i.onWeightChange(parseFloat(e.currentTarget.value))}),(0,r.jsx)("span",{style:{opacity:.5,margin:2},children:"".concat((100*i.weight).toFixed(0),"%")}),(0,r.jsx)("button",{style:{display:"inline-block",padding:4},onClick:i.onClickWeightLock,children:i.locked?"\uD83D\uDD12":"\uD83D\uDD13"})]}):null]})};function i(e){let t=1/e.length;return e.reduce((e,a)=>({...e,[a]:t}),{})}let s=e=>{let{name:t,options:a,onSelect:n,zerosum:s,maxSelections:m,noSelection:u,...p}=e,[y,d]=c.useState([]),[g,v]=c.useState(new Set),h=new Set(y),S=[...(0,o.e5)(a,h)],[b,x]=c.useState(i(y));c.useEffect(()=>{n&&n({[t]:Object.keys(b).length?b:null})},[y,n,t,b]);let f=y.length-g.size<=1;return(0,r.jsxs)(r.Fragment,{children:[y.length?y.map((e,t)=>(0,r.jsx)(l,{checked:!0,i:t,onClick:()=>{g.delete(e),h.delete(e);let t=[...h];v(new Set(g));let a=i(t);console.log({nextWeights:a}),x(a),d(t)},...s&&e in b?{weight:b[e],onWeightChange(t){b[e]=t,x(function(e){let{key:t,value:a,selectedWeights:r,lockedWeightSet:c}=e,o={},n={...r},l=1;if(c.has(t))throw Error("".concat(t," in locked set--should not change!"));for(let e of c){let t=n[e];o[e]=t,l-=t,delete n[e]}let i=a>=l?l:a;l-=i,o[t]=i,delete n[t];let s=Object.values(n).reduce((e,t)=>t+e,0),m=s?l/s:1,u=Object.keys(n).length,p=l/u;if(Object.entries(n).forEach((e,t)=>{let[a,r]=e;if(t+1===u)o[a]=l,l=0;else{let e=(r||p)*m;l-=e,o[a]=e}}),0!==l)throw Error("rebalance failed");return o}({key:e,value:t,selectedWeights:b,lockedWeightSet:g}))},disabledWeights:f,locked:g.has(e),onClickWeightLock(){g.has(e)?g.delete(e):g.add(e),v(new Set(g))}}:{},name:e},t)):u,(0,r.jsx)("br",{}),S.map((e,t)=>(0,r.jsx)(l,{disabled:y.length>=(m||Number.MAX_VALUE),checked:!1,i:t,name:e,onClick:()=>{h.add(e);let t=[...h],a=i(t);console.log({nextWeights:a}),x(a),d(t)}},t))]})},m=(e,t,a)=>{let r=Object.values(e).reduce((e,a)=>{var r,c;e[a.category]=e[a.category]||0;let o=("ecosystem"===a.category||"community"===a.category||"hiring"===a.category?(null===(r=t.socialValues)||void 0===r?void 0:r[a.category])||0:null===(c=t.technicalValues)||void 0===c?void 0:c[a.category])||0,n="na"===a.value?0:a.value;if(!Number.isFinite(n))throw Error("invalid traitValue ".concat(JSON.stringify(a)));let l=a.traitScalar*n*o;return e[a.category]+=l,e},{});return Object.values(r).reduce((e,t)=>e+t,0)},u=(e,t,a)=>{let r=[],c=Object.keys(e.domains||{})[0],o=a[c];for(let a in t){let c=(null==o?void 0:o[a])||1;if(!Number.isFinite(c))throw Error("invalid domainScalar ".concat(c," (").concat(o,")"));let n=t[a];if(!n)throw Error("missing meta for lang ".concat(a));r.push([a,m(n,e,a)*c])}return r.sort((e,t)=>{let[,a]=e,[,r]=t;return a>r?-1:1})};var p=JSON.parse('{"javascript":{"modeled fallibility":{"traitScalar":3,"comment":"present in exceptions, null, undefined, cb sigs. extremely non-uniform, but present","value":1,"category":"correctness"},"memory safety - compile time":{"traitScalar":3,"comment":"","value":"na","category":"correctness"},"memory safety - run time":{"traitScalar":3,"comment":"","value":3,"category":"correctness"},"collection transforms (e.g. functional operators, functor, iter streams/xforms, etc)":{"traitScalar":2,"comment":"basic functional ops and iter capabilities","value":2,"category":"correctness"},"laziness":{"traitScalar":1,"comment":"generators","value":1,"category":"correctness"},"types - existant":{"traitScalar":3,"comment":"","value":"na","category":"correctness"},"types - type mapping":{"traitScalar":1,"comment":"","value":"na","category":"correctness"},"types - inference":{"traitScalar":2,"comment":"","value":"na","category":"correctness"},"types - alegbraic":{"traitScalar":2,"comment":"","value":"na","category":"correctness"},"types - completeness":{"traitScalar":3,"comment":"","value":"na","category":"correctness"},"types - advanced (dependent, hkt, etc)":{"traitScalar":1,"comment":"","value":"na","category":"correctness"},"types - structual":{"traitScalar":1,"comment":"","value":"na","category":"correctness"},"types - nominal":{"traitScalar":1,"comment":"","value":"na","category":"correctness"},"paradigm - functional":{"traitScalar":0,"comment":"","value":2,"category":"developer ux"},"paradigm - procedural":{"traitScalar":0,"comment":"","value":3,"category":"developer ux"},"paradigm - oop":{"traitScalar":0,"comment":"","value":3,"category":"developer ux"},"meta-programming":{"traitScalar":1,"comment":"","value":0,"category":"developer ux"},"debugger":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - syntax":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - launch":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - completions":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - task execution":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"learning - teachable":{"traitScalar":2,"comment":"","value":3,"category":"developer ux"},"learning - accessible":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"project - hydration/bootstrap":{"traitScalar":1,"comment":"clone, npm i, npm start","value":3,"category":"developer ux"},"efficent machine/bytecode":{"traitScalar":2,"comment":"","value":"na","category":"performance"},"abstractions - memory cost":{"traitScalar":3,"comment":"astractions often cost objects","value":1,"category":"performance"},"abstractions - cpu cost":{"traitScalar":3,"comment":"","value":3,"category":"performance"},"common compile duration":{"traitScalar":1,"comment":"","value":"na","category":"performance"},"batteries - standard modules":{"traitScalar":1,"comment":"3p libs oft required","value":1,"category":"developer ux"},"batteries - testing":{"traitScalar":2,"comment":"none, but clear 3p winners","value":2,"category":"developer ux"},"batteries - project/repo management":{"traitScalar":2,"comment":"unmatched, npm + scripts + deps","value":3,"category":"developer ux"},"batteries - packaging & distribution":{"traitScalar":3,"comment":"unmatched","value":3,"category":"ecosystem"},"module abundance":{"traitScalar":3,"comment":"unmatched","value":3,"category":"ecosystem"},"support - community":{"traitScalar":3,"comment":"","value":3,"category":"community"},"support - enterprise":{"traitScalar":1,"comment":"","value":3,"category":"community"},"tooling - builds":{"traitScalar":1,"comment":"","value":3,"category":"ecosystem"},"tooling - ci/cd":{"traitScalar":1,"comment":"","value":3,"category":"ecosystem"},"tooling - asset management":{"traitScalar":1,"comment":"","value":3,"category":"ecosystem"},"maturity":{"traitScalar":2,"comment":"","value":3,"category":"ecosystem"},"hiring availability":{"traitScalar":2,"comment":"","value":3,"category":"hiring"}},"typescript":{"modeled fallibility":{"traitScalar":3,"comment":"present in exceptions, null, undefined, cb sigs. extremely non-uniform, but present. however, strict mode allows for greatly improved detection, even if modeling not uniform","value":2,"category":"correctness"},"memory safety - compile time":{"traitScalar":3,"comment":"","value":"na","category":"correctness"},"memory safety - run time":{"traitScalar":3,"comment":"","value":3,"category":"correctness"},"collection transforms (e.g. functional operators, functor, iter streams/xforms, etc)":{"traitScalar":2,"comment":"basic functional ops and iter capabilities","value":2,"category":"correctness"},"laziness":{"traitScalar":1,"comment":"generators","value":1,"category":"correctness"},"types - existant":{"traitScalar":3,"comment":"","value":3,"category":"correctness"},"types - type mapping":{"traitScalar":1,"comment":"","value":3,"category":"correctness"},"types - inference":{"traitScalar":2,"comment":"","value":3,"category":"correctness"},"types - alegbraic":{"traitScalar":2,"comment":"","value":2,"category":"correctness"},"types - completeness":{"traitScalar":3,"comment":"you can mix ts/js, but it\'s not what is observed in practice at user level. package level source language variance is high, with plenty of JS deps","value":2,"category":"correctness"},"types - advanced (dependent, hkt, etc)":{"traitScalar":1,"comment":"","value":1,"category":"correctness"},"types - structual":{"traitScalar":1,"comment":"","value":3,"category":"correctness"},"types - nominal":{"traitScalar":1,"comment":"branding is easy, but 3p","value":2,"category":"correctness"},"paradigm - functional":{"traitScalar":0,"comment":"fp is harder without hkt","value":2,"category":"developer ux"},"paradigm - procedural":{"traitScalar":0,"comment":"","value":3,"category":"developer ux"},"paradigm - oop":{"traitScalar":0,"comment":"","value":3,"category":"developer ux"},"meta-programming":{"traitScalar":1,"comment":"","value":0,"category":"developer ux"},"debugger":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - syntax":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - launch":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - completions":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - task execution":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"learning - teachable":{"traitScalar":2,"comment":"","value":3,"category":"developer ux"},"learning - accessible":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"project - hydration/bootstrap":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"efficent machine/bytecode":{"traitScalar":2,"comment":"","value":2,"category":"performance"},"abstractions - memory cost":{"traitScalar":3,"comment":"astractions often cost objects, but fancy types can reduce weight","value":2,"category":"performance"},"abstractions - cpu cost":{"traitScalar":3,"comment":"","value":3,"category":"performance"},"common compile duration":{"traitScalar":1,"comment":"","value":2,"category":"performance"},"batteries - standard modules":{"traitScalar":1,"comment":"","value":1,"category":"developer ux"},"batteries - testing":{"traitScalar":2,"comment":"none, but clear 3p winners","value":1,"category":"developer ux"},"batteries - project/repo management":{"traitScalar":2,"comment":"unmatched, npm + scripts + deps","value":3,"category":"developer ux"},"batteries - packaging & distribution":{"traitScalar":3,"comment":"unmatched","value":3,"category":"ecosystem"},"module abundance":{"traitScalar":3,"comment":"unmatched","value":3,"category":"ecosystem"},"support - community":{"traitScalar":3,"comment":"","value":3,"category":"community"},"support - enterprise":{"traitScalar":1,"comment":"","value":3,"category":"community"},"tooling - builds":{"traitScalar":1,"comment":"","value":3,"category":"ecosystem"},"tooling - ci/cd":{"traitScalar":1,"comment":"","value":3,"category":"ecosystem"},"tooling - asset management":{"traitScalar":1,"comment":"","value":3,"category":"ecosystem"},"maturity":{"traitScalar":2,"comment":"","value":3,"category":"ecosystem"},"hiring availability":{"traitScalar":2,"comment":"","value":2,"category":"hiring"}},"rust":{"modeled fallibility":{"traitScalar":3,"comment":"universal monadic impls","value":3,"category":"correctness"},"memory safety - compile time":{"traitScalar":3,"comment":"","value":3,"category":"correctness"},"memory safety - run time":{"traitScalar":3,"comment":"","value":3,"category":"correctness"},"collection transforms (e.g. functional operators, functor, iter streams/xforms, etc)":{"traitScalar":2,"comment":"entirely unmatched iter tooling with extremely productive and capable batteries","value":3,"category":"correctness"},"laziness":{"traitScalar":1,"comment":"async naturally lazy, generators, ...mainly opt in","value":2,"category":"correctness"},"types - existant":{"traitScalar":3,"comment":"","value":3,"category":"correctness"},"types - type mapping":{"traitScalar":1,"comment":"there, less ergo: https://stackoverflow.com/a/67532477/1438908","value":2,"category":"correctness"},"types - inference":{"traitScalar":2,"comment":"","value":3,"category":"correctness"},"types - alegbraic":{"traitScalar":2,"comment":"https://stackoverflow.com/questions/45065518/how-to-show-that-the-rust-type-system-supports-algebraic-data-types-adts, but standard algebraic operations are not as easily expressable as FP","value":1,"category":"correctness"},"types - completeness":{"traitScalar":3,"comment":"","value":3,"category":"correctness"},"types - advanced (dependent, hkt, etc)":{"traitScalar":1,"comment":"???","value":1,"category":"correctness"},"types - structual":{"traitScalar":1,"comment":"https://beachape.com/blog/2021/05/25/structural-typing-in-rust/","value":"na","category":"correctness"},"types - nominal":{"traitScalar":1,"comment":"","value":3,"category":"correctness"},"paradigm - functional":{"traitScalar":0,"comment":"","value":2,"category":"developer ux"},"paradigm - procedural":{"traitScalar":0,"comment":"","value":2,"category":"developer ux"},"paradigm - oop":{"traitScalar":0,"comment":"","value":3,"category":"developer ux"},"meta-programming":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"debugger":{"traitScalar":1,"comment":"","value":1,"category":"developer ux"},"ide - syntax":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - launch":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - completions":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - task execution":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"learning - teachable":{"traitScalar":2,"comment":"","value":3,"category":"developer ux"},"learning - accessible":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"project - hydration/bootstrap":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"efficent machine/bytecode":{"traitScalar":2,"comment":"","value":3,"category":"performance"},"abstractions - memory cost":{"traitScalar":3,"comment":"","value":3,"category":"performance"},"abstractions - cpu cost":{"traitScalar":3,"comment":"","value":3,"category":"performance"},"common compile duration":{"traitScalar":1,"comment":"","value":1,"category":"performance"},"batteries - standard modules":{"traitScalar":1,"comment":"","value":2,"category":"developer ux"},"batteries - testing":{"traitScalar":2,"comment":"","value":3,"category":"developer ux"},"batteries - project/repo management":{"traitScalar":2,"comment":"","value":2,"category":"developer ux"},"batteries - packaging & distribution":{"traitScalar":3,"comment":"","value":2,"category":"ecosystem"},"module abundance":{"traitScalar":3,"comment":"","value":3,"category":"ecosystem"},"support - community":{"traitScalar":3,"comment":"","value":3,"category":"community"},"support - enterprise":{"traitScalar":1,"comment":"","value":3,"category":"community"},"tooling - builds":{"traitScalar":1,"comment":"","value":3,"category":"ecosystem"},"tooling - ci/cd":{"traitScalar":1,"comment":"","value":3,"category":"ecosystem"},"tooling - asset management":{"traitScalar":1,"comment":"","value":3,"category":"ecosystem"},"maturity":{"traitScalar":2,"comment":"","value":2,"category":"ecosystem"},"hiring availability":{"traitScalar":2,"comment":"","value":1,"category":"hiring"}},"python":{"modeled fallibility":{"traitScalar":3,"comment":"None, exception","value":2,"category":"correctness"},"memory safety - compile time":{"traitScalar":3,"comment":"","value":"na","category":"correctness"},"memory safety - run time":{"traitScalar":3,"comment":"","value":3,"category":"correctness"},"collection transforms (e.g. functional operators, functor, iter streams/xforms, etc)":{"traitScalar":2,"comment":"procedural loops and comprehensions only, weak functional iter capabilities. itertools package common, but pales in comparison to other langs","value":1,"category":"correctness"},"laziness":{"traitScalar":1,"comment":"","value":1,"category":"correctness"},"types - existant":{"traitScalar":3,"comment":"typings module is inadequate for all entirely non-trival typing, that it\'s existence, presence is extremely week","value":0,"category":"correctness"},"types - type mapping":{"traitScalar":1,"comment":"","value":0,"category":"correctness"},"types - inference":{"traitScalar":2,"comment":"","value":0,"category":"correctness"},"types - alegbraic":{"traitScalar":2,"comment":"","value":0,"category":"correctness"},"types - completeness":{"traitScalar":3,"comment":"","value":0,"category":"correctness"},"types - advanced (dependent, hkt, etc)":{"traitScalar":1,"comment":"","value":0,"category":"correctness"},"types - structual":{"traitScalar":1,"comment":"","value":"na","category":"correctness"},"types - nominal":{"traitScalar":1,"comment":"","value":"na","category":"correctness"},"paradigm - functional":{"traitScalar":0,"comment":"","value":1,"category":"developer ux"},"paradigm - procedural":{"traitScalar":0,"comment":"","value":3,"category":"developer ux"},"paradigm - oop":{"traitScalar":0,"comment":"","value":3,"category":"developer ux"},"meta-programming":{"traitScalar":1,"comment":"","value":0,"category":"developer ux"},"debugger":{"traitScalar":1,"comment":"","value":2,"category":"developer ux"},"ide - syntax":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - launch":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - completions":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - task execution":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"learning - teachable":{"traitScalar":2,"comment":"","value":3,"category":"developer ux"},"learning - accessible":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"project - hydration/bootstrap":{"traitScalar":1,"comment":"","value":2,"category":"developer ux"},"efficent machine/bytecode":{"traitScalar":2,"comment":"","value":1,"category":"performance"},"abstractions - memory cost":{"traitScalar":3,"comment":"abstractions = classes","value":1,"category":"performance"},"abstractions - cpu cost":{"traitScalar":3,"comment":"","value":3,"category":"performance"},"common compile duration":{"traitScalar":1,"comment":"","value":"na","category":"performance"},"batteries - standard modules":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"batteries - testing":{"traitScalar":2,"comment":"","value":3,"category":"developer ux"},"batteries - project/repo management":{"traitScalar":2,"comment":"setup.py, non std impl patterns","value":1,"category":"developer ux"},"batteries - packaging & distribution":{"traitScalar":3,"comment":"famously non std toolkits (requirements, pip-lock, etc)","value":1,"category":"ecosystem"},"module abundance":{"traitScalar":3,"comment":"","value":3,"category":"ecosystem"},"support - community":{"traitScalar":3,"comment":"","value":3,"category":"community"},"support - enterprise":{"traitScalar":1,"comment":"","value":3,"category":"community"},"tooling - builds":{"traitScalar":1,"comment":"","value":3,"category":"ecosystem"},"tooling - ci/cd":{"traitScalar":1,"comment":"","value":3,"category":"ecosystem"},"tooling - asset management":{"traitScalar":1,"comment":"","value":3,"category":"ecosystem"},"maturity":{"traitScalar":2,"comment":"","value":3,"category":"ecosystem"},"hiring availability":{"traitScalar":2,"comment":"","value":3,"category":"hiring"}},"java":{"modeled fallibility":{"traitScalar":3,"comment":"null, Exception","value":2,"category":"correctness"},"memory safety - compile time":{"traitScalar":3,"comment":"","value":"na","category":"correctness"},"memory safety - run time":{"traitScalar":3,"comment":"","value":3,"category":"correctness"},"collection transforms (e.g. functional operators, functor, iter streams/xforms, etc)":{"traitScalar":2,"comment":"diverse selection of iter tooling, including streams() intfcs, but lesser than the competion","value":2,"category":"correctness"},"laziness":{"traitScalar":1,"comment":"","value":1,"category":"correctness"},"types - existant":{"traitScalar":3,"comment":"","value":3,"category":"correctness"},"types - type mapping":{"traitScalar":1,"comment":"https://docs.oracle.com/javase/tutorial/java/generics/index.html","value":0,"category":"correctness"},"types - inference":{"traitScalar":2,"comment":"","value":2,"category":"correctness"},"types - alegbraic":{"traitScalar":2,"comment":"","value":0,"category":"correctness"},"types - completeness":{"traitScalar":3,"comment":"","value":3,"category":"correctness"},"types - advanced (dependent, hkt, etc)":{"traitScalar":1,"comment":"","value":0,"category":"correctness"},"types - structual":{"traitScalar":1,"comment":"","value":"na","category":"correctness"},"types - nominal":{"traitScalar":1,"comment":"","value":3,"category":"correctness"},"paradigm - functional":{"traitScalar":0,"comment":"","value":1,"category":"developer ux"},"paradigm - procedural":{"traitScalar":0,"comment":"","value":1,"category":"developer ux"},"paradigm - oop":{"traitScalar":0,"comment":"","value":3,"category":"developer ux"},"meta-programming":{"traitScalar":1,"comment":"","value":2,"category":"developer ux"},"debugger":{"traitScalar":1,"comment":"","value":2,"category":"developer ux"},"ide - syntax":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - launch":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - completions":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - task execution":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"learning - teachable":{"traitScalar":2,"comment":"","value":3,"category":"developer ux"},"learning - accessible":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"project - hydration/bootstrap":{"traitScalar":1,"comment":"","value":1,"category":"developer ux"},"efficent machine/bytecode":{"traitScalar":2,"comment":"","value":2,"category":"performance"},"abstractions - memory cost":{"traitScalar":3,"comment":"","value":1,"category":"performance"},"abstractions - cpu cost":{"traitScalar":3,"comment":"","value":3,"category":"performance"},"common compile duration":{"traitScalar":1,"comment":"","value":2,"category":"performance"},"batteries - standard modules":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"batteries - testing":{"traitScalar":2,"comment":"none, but clear 3p winners","value":1,"category":"developer ux"},"batteries - project/repo management":{"traitScalar":2,"comment":"swaths of metadata, oft ide driven for common project. present, but compare to others","value":1,"category":"developer ux"},"batteries - packaging & distribution":{"traitScalar":3,"comment":"","value":2,"category":"ecosystem"},"module abundance":{"traitScalar":3,"comment":"https://vegibit.com/wp-content/uploads/2018/05/npm-package-counts.png","value":2,"category":"ecosystem"},"support - community":{"traitScalar":3,"comment":"","value":3,"category":"community"},"support - enterprise":{"traitScalar":1,"comment":"","value":3,"category":"community"},"tooling - builds":{"traitScalar":1,"comment":"","value":3,"category":"ecosystem"},"tooling - ci/cd":{"traitScalar":1,"comment":"","value":3,"category":"ecosystem"},"tooling - asset management":{"traitScalar":1,"comment":"","value":3,"category":"ecosystem"},"maturity":{"traitScalar":2,"comment":"","value":3,"category":"ecosystem"},"hiring availability":{"traitScalar":2,"comment":"","value":3,"category":"hiring"}},"ocaml":{"modeled fallibility":{"traitScalar":3,"comment":"","value":3,"category":"correctness"},"memory safety - compile time":{"traitScalar":3,"comment":"","value":"na","category":"correctness"},"memory safety - run time":{"traitScalar":3,"comment":"","value":3,"category":"correctness"},"collection transforms (e.g. functional operators, functor, iter streams/xforms, etc)":{"traitScalar":2,"comment":"","value":2,"category":"correctness"},"laziness":{"traitScalar":1,"comment":"","value":1,"category":"correctness"},"types - existant":{"traitScalar":3,"comment":"","value":3,"category":"correctness"},"types - type mapping":{"traitScalar":1,"comment":"module X = struct ... type t = X.t Map ... blarg","value":2,"category":"correctness"},"types - inference":{"traitScalar":2,"comment":"","value":3,"category":"correctness"},"types - alegbraic":{"traitScalar":2,"comment":"","value":3,"category":"correctness"},"types - completeness":{"traitScalar":3,"comment":"","value":3,"category":"correctness"},"types - advanced (dependent, hkt, etc)":{"traitScalar":1,"comment":"","value":3,"category":"correctness"},"types - structual":{"traitScalar":1,"comment":"","value":"na","category":"correctness"},"types - nominal":{"traitScalar":1,"comment":"","value":3,"category":"correctness"},"paradigm - functional":{"traitScalar":0,"comment":"","value":3,"category":"developer ux"},"paradigm - procedural":{"traitScalar":0,"comment":"","value":3,"category":"developer ux"},"paradigm - oop":{"traitScalar":0,"comment":"","value":3,"category":"developer ux"},"meta-programming":{"traitScalar":1,"comment":"ppx is rough","value":1,"category":"developer ux"},"debugger":{"traitScalar":1,"comment":"don\'t get me started","value":1,"category":"developer ux"},"ide - syntax":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"ide - launch":{"traitScalar":1,"comment":"","value":1,"category":"developer ux"},"ide - completions":{"traitScalar":1,"comment":"","value":1,"category":"developer ux"},"ide - task execution":{"traitScalar":1,"comment":"","value":1,"category":"developer ux"},"learning - teachable":{"traitScalar":2,"comment":"","value":2,"category":"developer ux"},"learning - accessible":{"traitScalar":1,"comment":"","value":3,"category":"developer ux"},"project - hydration/bootstrap":{"traitScalar":1,"comment":"","value":1,"category":"developer ux"},"efficent machine/bytecode":{"traitScalar":2,"comment":"","value":3,"category":"performance"},"abstractions - memory cost":{"traitScalar":3,"comment":"e.g. Option::None does carry cost in some scenarios","value":2,"category":"performance"},"abstractions - cpu cost":{"traitScalar":3,"comment":"","value":3,"category":"performance"},"common compile duration":{"traitScalar":1,"comment":"famous, but practically, on par","value":2,"category":"performance"},"batteries - standard modules":{"traitScalar":1,"comment":"famously lack of","value":1,"category":"developer ux"},"batteries - testing":{"traitScalar":2,"comment":"","value":1,"category":"developer ux"},"batteries - project/repo management":{"traitScalar":2,"comment":"dune","value":2,"category":"developer ux"},"batteries - packaging & distribution":{"traitScalar":3,"comment":"opam. works, less ergo than alt envs","value":1,"category":"ecosystem"},"module abundance":{"traitScalar":3,"comment":"","value":2,"category":"ecosystem"},"support - community":{"traitScalar":3,"comment":"great 1:1 issues (SO, discord), online resources small","value":1,"category":"community"},"support - enterprise":{"traitScalar":1,"comment":"","value":1,"category":"community"},"tooling - builds":{"traitScalar":1,"comment":"","value":2,"category":"ecosystem"},"tooling - ci/cd":{"traitScalar":1,"comment":"","value":1,"category":"ecosystem"},"tooling - asset management":{"traitScalar":1,"comment":"","value":3,"category":"ecosystem"},"maturity":{"traitScalar":2,"comment":"","value":3,"category":"ecosystem"},"hiring availability":{"traitScalar":2,"comment":"","value":1,"category":"hiring"}}}'),y=JSON.parse('{"ar":{"javascript":0,"typescript":0,"rust":1,"python":0,"java":1,"ocaml":0},"browser application":{"javascript":3,"typescript":3,"rust":1,"python":1,"java":1,"ocaml":1},"command line application":{"javascript":2,"typescript":2,"rust":3,"python":2,"java":2,"ocaml":2},"data science":{"javascript":1,"typescript":1,"rust":2,"python":3,"java":2,"ocaml":1},"data visualization":{"javascript":3,"typescript":3,"rust":1,"python":3,"java":1,"ocaml":1},"desktop application":{"javascript":2,"typescript":2,"rust":2,"python":1,"java":2,"ocaml":1},"embedded":{"javascript":0,"typescript":0,"rust":3,"python":0,"java":0,"ocaml":2},"etl":{"javascript":2,"typescript":2,"rust":3,"python":2,"java":2,"ocaml":3},"game":{"javascript":2,"typescript":2,"rust":2,"python":1,"java":1,"ocaml":1},"messaging":{"javascript":3,"typescript":3,"rust":3,"python":1,"java":1,"ocaml":3},"mobile application":{"javascript":1,"typescript":1,"rust":1,"python":1,"java":3,"ocaml":1},"system":{"javascript":0,"typescript":0,"rust":3,"python":0,"java":0,"ocaml":3},"vr":{"javascript":0,"typescript":0,"rust":1,"python":0,"java":1,"ocaml":1},"web server":{"javascript":3,"typescript":3,"rust":3,"python":1,"java":2,"ocaml":3}}');let d=e=>{let{params:t}=e,a=u(t,p,y),c=a.map(e=>{let[,t]=e;return t}),o=Math.min(...c),n=Math.max(...c)-o,l=e=>(e-o)/n,i=a.map(e=>{let[t,a]=e;return[t,l(a).toFixed(2)]});return(0,r.jsx)("table",{children:(0,r.jsx)("tbody",{children:i.map(e=>{let[t,a]=e;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:t}),(0,r.jsx)("td",{children:a})]},t)})})})},g=["ar","browser application","command line application","data science","data visualization","desktop application","embedded","etl","game","messaging","mobile application","system","vr","web server"],v=["correctness","developer ux","performance"],h=["community","ecosystem","hiring"],S=(0,r.jsxs)(r.Fragment,{children:["No options selected.",(0,r.jsx)("p",{style:{fontSize:"0.8rem"},children:"Omitting a dimension drops all score contributions along that dimension."})]});function b(){let[e,t]=c.useState({technicalValues:null,socialValues:null,domains:null}),a=c.useCallback(e=>t(t=>({...t,...e})),[]),o=Object.entries(e).reduce((e,t)=>{let[a,r]=t;return r?e:"socialValues"===a?e:[...e,a]},[]);return(0,r.jsxs)("main",{children:[(0,r.jsx)("h1",{children:"Programming Language Selector"}),(0,r.jsx)("p",{children:"Score & rank programming languages given user specified social values and the target programming domain."}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["See the ",(0,r.jsx)("a",{href:"#faq",children:"FAQ"})," for more."]}),(0,r.jsx)("h2",{children:"Parameters"}),(0,r.jsx)("p",{children:"Adjust the below parameters based on preference & needs. The results are normalized 0-1 and sorted accordingly."}),(0,r.jsx)("h3",{children:"Domains"}),g.map(e=>(0,r.jsxs)("span",{style:{cursor:"pointer",display:"inline-block",marginRight:16,whiteSpace:"nowrap"},onClick:()=>{t(t=>({...t,domains:{[e]:1}}))},children:[(0,r.jsx)("input",{id:e,type:"radio",name:"domains",value:e}),(0,r.jsx)("label",{htmlFor:e,children:e})]},e)),(0,r.jsx)("h3",{children:"Technical Values"}),(0,r.jsx)(s,{zerosum:!0,onSelect:a,name:"technicalValues",options:v,noSelection:S}),(0,r.jsx)("h3",{children:"Social Values"}),(0,r.jsx)(s,{zerosum:!0,onSelect:a,name:"socialValues",options:h,noSelection:S}),(0,r.jsx)("h2",{children:"Result"}),o.length?(0,r.jsxs)("p",{style:{width:"100%",padding:4,borderRadius:4,borderWidth:2,borderStyle:"dashed",minHeight:200},children:["Missing inputs for: ",o.join(", ")]}):(0,r.jsx)(d,{params:e}),(0,r.jsx)("hr",{style:{marginTop:40}}),(0,r.jsx)("h2",{id:"faq",children:"FAQ"}),(0,r.jsxs)("ol",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{children:"What is this tool for?"}),(0,r.jsxs)("p",{children:["This tool ",(0,r.jsx)("code",{children:"score"}),"s programming languages based on their characteristics. It tries to enhance the decision making process when selecting a programming language. The decision making process is enhanced by using quantitative data and qualitative data (re-encoded as quantative data) by taking a complex assessment and projecting it down into a single dimension--a scalar"," ",(0,r.jsx)("code",{children:"score"}),". The higher the score, the more fit the language for your use case."]})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{children:"Can I trust this? Are the values correct?"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"No one can or should agree with every value in the underlying assessment data or model"}),". There are billions of combinations of inputs that the assessment data could hold. If you agree with everything as it is in its current state, you are not critiquing or looking hard enough. Values in default assessment and model are both objective and subjective, but mainly the latter. Experienced developers understand that software is art. The assessed values liberally reflect subjectively artful evaluations ",(0,r.jsx)("b",{children:"with experience and practice driven"})," ","guidance. All persons have biases, but we commit to the best and of our abilities to minimize biases in the assessed values. This tool is meant to assist, not to condemn or promote any given tool. Absolute judgement or dogmatism are unwelcome. If you are using this tool to prove a point, you are using it wrong. Can you trust it? Sure. Should this tool alone form your judgements in decision making? No, it should not."]})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{children:"My language of interest is missing, why?"}),(0,r.jsx)("p",{children:"Feel free to add it! This project is new. Give it time to catch up."}),"See the ",(0,r.jsx)("code",{children:"CONTRIBUTING.md"})," in github."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{children:"Why is the model designed the way it is?"}),(0,r.jsxs)("p",{children:["The model is known (at current time) to be primitive/low-sophistication. Nonetheless, I surmise it does a better job at evaluating PL fitness than the average-","developer™'s"," gut feeling, given the breadth of weighted dimensions in the model. Want to improve it? Please send a GitHub issue with a very concise explanation of your proposal. I am biased towards the default model having a high signal:complexity ratio. If a better model could be done at high complexity, we can work on supporting remote model loading."]})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{children:"I think the input parameters could be better. Can we change them?"}),(0,r.jsx)("p",{children:"Yes. Please send a GitHub issue with a very concise explanation of your proposal. The model should be as simple as possible at the known loss of model fidelity."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{children:"Can we use a different model entirely?"}),(0,r.jsxs)("p",{children:["Absolutely. The functionality is not yet baked in, but this should absolutely accept models as input, versus purely the default model.",(0,r.jsx)("code",{children:"rank = f(model, data, userValue)"})]})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{children:"I disagree with the model. Can we tune the values?"}),(0,r.jsx)("p",{children:"Sure! Send a PR. We reserve the right to reject suggestions."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{children:"When I do X, this says A is better than B. That is definitely not correct. Why?"}),(0,r.jsx)("p",{children:"There very well could be mis-modeling. Let us work to correct it. Please open an issue and make a suggestion."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{children:"Who makes all the rules here?"})," I do! This is a single person project. I am willing to expand ownership to a counsel of informed experts. You must demonstrate experience, sympathy, empathy, and the pursuit of nirvana. I will check a sample of your comment history in public GitHub. You must, above all else, be demonstrably kind in your programming public life on GitHub."]})]})]})}},2231:function(e,t,a){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=a(5446),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,a){var r,o={},s=null,m=null;for(r in void 0!==a&&(s=""+a),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(m=t.ref),t)n.call(t,r)&&!i.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:c,type:e,key:s,ref:m,props:o,_owner:l.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},4552:function(e,t,a){"use strict";e.exports=a(2231)},24:function(e,t){"use strict";let a=(e=[])=>e instanceof Set?e:new Set(e);t.e5=(e,t)=>{let r=a(e),c=a(t);return a([...r].filter(e=>!c.has(e)))}}},function(e){e.O(0,[729,291,744],function(){return e(e.s=7398)}),_N_E=e.O()}]);