(this.webpackJsonpseodong4378=this.webpackJsonpseodong4378||[]).push([[0],{43:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),i=s(13),r=s.n(i),c=s(4),o=s.n(c),l=s(14),d=s(15),m=s(16),j=s(19),v=s(18),u=s(17),h=s.n(u),b=(s(43),s(0));var g=function(e){e.id;var t=e.year,s=e.title,n=e.summary,a=e.poster,i=e.genres;return Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("div",{className:"movie_poster",children:Object(b.jsx)("img",{src:a,alt:s})}),Object(b.jsxs)("div",{className:"movie__data",children:[Object(b.jsx)("h2",{className:"movie__title",children:s}),Object(b.jsx)("h4",{className:"movie__year",children:t}),Object(b.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(b.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(b.jsxs)("p",{children:[n.slice(0,300),"..."]})]})]})},p=(s(45),function(e){Object(j.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(d.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,console.log(s,"start getMovies"),e.setState({movies:s.data.data.movies,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(b.jsx)("section",{className:"container",children:t?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(b.jsx)("div",{className:"movies",children:s.map((function(e){return Object(b.jsx)(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.Component));r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.6d654abf.chunk.js.map