"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{134:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),i=n(757),c=n.n(i),o=n(791),s=n(87),u=n(243),l=n(984),p=n(184);function h(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),n=t[0],i=t[1],h=(0,o.useState)([]),d=(0,a.Z)(h,2),m=d[0],x=d[1],f=function(){var e=(0,r.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTFlM2NhNWEwMzhjYjE5YWE0NDQ4MTcyMjJjNDViMyIsInN1YiI6IjY0Nzc3ZDQ5MTc0OTczMDEzNWZmOWMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wAdw2a-XnOHB5EkPOkcAHNROr6KXTn-LqbFP8KDzpdE"}},e.next=6,(0,u.Z)("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),t);case 6:r=e.sent,x(r.data.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f()},children:[(0,p.jsx)("button",{type:"submit",children:(0,p.jsx)("span",{children:"Search"})}),(0,p.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search for movies",onChange:function(e){i(e.target.value)}})]}),(0,p.jsx)("ul",{style:{display:"grid",maxWidth:"calc(100vw - 44px)",gridTemplateColumns:"repeat(auto-fill, minmax(500px, 1fr))",gridGap:"44px",marginTop:"0",marginBottom:"0",padding:"32px",listStyle:"none",marginLeft:"auto",marginRight:"auto"},children:m.map((function(e){return(0,p.jsx)(s.rU,{to:"".concat(e.id),children:(0,p.jsx)("li",{style:{width:"500px"},children:(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:""}),(0,p.jsxs)("p",{children:[" ",e.original_title]}),(0,p.jsx)("p",{})]})},e.id)},(0,l.x0)())}))})]})}}}]);
//# sourceMappingURL=134.98d68803.chunk.js.map