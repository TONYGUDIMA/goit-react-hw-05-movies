"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{443:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(861),c=n(671),a=n(144),i=n(757),s=n.n(i),o=n(243),u=function(){function e(){(0,c.Z)(this,e)}return(0,a.Z)(e,null,[{key:"getTrending",value:function(){var e=(0,r.Z)(s().mark((function e(){var t,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTFlM2NhNWEwMzhjYjE5YWE0NDQ4MTcyMjJjNDViMyIsInN1YiI6IjY0Nzc3ZDQ5MTc0OTczMDEzNWZmOWMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wAdw2a-XnOHB5EkPOkcAHNROr6KXTn-LqbFP8KDzpdE"}},e.next=4,(0,o.Z)("https://api.themoviedb.org/3/trending/all/day?language=en-US",t);case 4:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"getMovieByQ",value:function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTFlM2NhNWEwMzhjYjE5YWE0NDQ4MTcyMjJjNDViMyIsInN1YiI6IjY0Nzc3ZDQ5MTc0OTczMDEzNWZmOWMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wAdw2a-XnOHB5EkPOkcAHNROr6KXTn-LqbFP8KDzpdE"}},e.next=4,(0,o.Z)("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),n);case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieById",value:function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTFlM2NhNWEwMzhjYjE5YWE0NDQ4MTcyMjJjNDViMyIsInN1YiI6IjY0Nzc3ZDQ5MTc0OTczMDEzNWZmOWMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wAdw2a-XnOHB5EkPOkcAHNROr6KXTn-LqbFP8KDzpdE"}},e.next=4,(0,o.Z)("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),n);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getReviewsById",value:function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTFlM2NhNWEwMzhjYjE5YWE0NDQ4MTcyMjJjNDViMyIsInN1YiI6IjY0Nzc3ZDQ5MTc0OTczMDEzNWZmOWMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wAdw2a-XnOHB5EkPOkcAHNROr6KXTn-LqbFP8KDzpdE"}},e.next=4,(0,o.Z)("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),n);case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getCastById",value:function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTFlM2NhNWEwMzhjYjE5YWE0NDQ4MTcyMjJjNDViMyIsInN1YiI6IjY0Nzc3ZDQ5MTc0OTczMDEzNWZmOWMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wAdw2a-XnOHB5EkPOkcAHNROr6KXTn-LqbFP8KDzpdE"}},e.next=4,(0,o.Z)("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),n);case 4:return r=e.sent,e.abrupt("return",r.data.cast);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()},961:function(e,t,n){n.r(t);var r=n(861),c=n(439),a=n(757),i=n.n(a),s=n(791),o=n(689),u=n(87),h=n(984),l=n(443),p=n(184);t.default=function(){var e,t,n=(0,o.UO)().movieId,a=(0,s.useState)(),d=(0,c.Z)(a,2),v=d[0],j=d[1],f=(0,o.TH)(),I=(0,s.useRef)(null!==(e=null===(t=f.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,l.Z.getMovieById(n);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),v&&(0,p.jsxs)("div",{style:{paddingBottom:"500px"},children:[(0,p.jsx)(u.rU,{to:I.current,children:"Go back"}),(0,p.jsxs)("div",{style:{display:"flex",gap:"32px",marginBottom:"30px"},children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(v.poster_path),alt:""}),(0,p.jsxs)("div",{children:[" ",(0,p.jsx)("h2",{children:v.original_title}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsxs)("p",{children:["'",v.overview,"'"]}),(0,p.jsx)("h4",{children:"Genres"}),(0,p.jsx)("p",{children:v.genres.map((function(e){var t=e.name;return(0,p.jsxs)("span",{children:[t," "]},(0,h.x0)())}))})]})]}),(0,p.jsx)("hr",{}),(0,p.jsx)("h4",{style:{paddingLeft:"30px"},children:"Additional info"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(u.rU,{to:"/movies/".concat(v.id,"/cast"),children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(u.rU,{to:"/movies/".concat(v.id,"/reviews"),children:"Reviews"})})]}),(0,p.jsx)("hr",{}),(0,p.jsx)(o.j3,{})]})}}}]);
//# sourceMappingURL=961.291dfa2a.chunk.js.map