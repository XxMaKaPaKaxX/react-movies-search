(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),r=c.n(s),i=(c(12),c(0)),l=function(){return Object(i.jsx)("footer",{className:"bg-success text-center text-lg-start text-white",children:Object(i.jsxs)("div",{className:"text-center p-3",children:["\xa9 ",(new Date).getFullYear()," Copyright Text: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo!"]})})},o=function(){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-success",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"!#",children:"React movies search"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("i",{className:"fas fa-bars"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:Object(i.jsx)("ul",{className:"navbar-nav",children:Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsxs)("a",{className:"nav-link active","aria-current":"page",href:"https://github.com/XxMaKaPaKaxX?tab=repositories",children:["See another my projects",Object(i.jsx)("i",{className:"fab fa-github mx-2"})]})})})})]})})},j=c(3),b=c.n(j),d=c(5),u=c(2),h=Object(n.createContext)({}),O="76cc608b",x=function(e){var t=e.children,c=Object(n.useState)(""),a=Object(u.a)(c,2),s=a[0],r=a[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),j=o[0],x=o[1],m=Object(n.useState)(1),p=Object(u.a)(m,2),f=p[0],v=p[1],g=Object(n.useState)("https://www.omdbapi.com/?apikey=".concat(O,"&type=").concat(j,"&page=").concat(f,"&s=").concat(s)),N=Object(u.a)(g,2),y=N[0],k=N[1],C=Object(n.useState)([]),w=Object(u.a)(C,2),S=w[0],R=w[1],I=Object(n.useState)(),T=Object(u.a)(I,2),P=T[0],M=T[1],D=Object(n.useState)(!1),E=Object(u.a)(D,2),A=E[0],F=E[1],L=Object(n.useState)(!1),K=Object(u.a)(L,2),J=K[0],U=K[1],X=Object(n.useState)(),Y=Object(u.a)(X,2),B=Y[0],q=Y[1];Object(n.useEffect)((function(){k("https://www.omdbapi.com/?apikey=".concat(O,"&type=").concat(j,"&page=").concat(f,"&s=").concat(s))}),[j,f,s,y]),Object(n.useEffect)((function(){z(y)}),[y]);var z=function(){var e=Object(d.a)(b.a.mark((function e(t){var c,n,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,F(!0),e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,a=n.Search,s=n.totalResults,R(a),M(s||0),F(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0),F(!1);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsx)(h.Provider,{value:{searchingUrl:y,setSearchingUrl:k,searchingResult:S,setSearchingResult:R,totalResults:P,setTotalResults:M,fetchData:z,typeContent:j,setTypeContent:x,loading:A,isModalOpen:J,setIsModalOpen:U,selectedItemId:B,setSelectedItemId:q,currentPage:f,setCurrentPage:v,setTitle:r},children:t})},m=c(7),p=function(e){var t=e.imdbID,c=e.Poster,a=e.Title,s=e.Type,r=e.Year,l=Object(n.useContext)(h),o=l.setIsModalOpen,j=l.setSelectedItemId;return Object(i.jsx)("div",{className:"col",children:Object(i.jsxs)("div",{className:"card h-100",children:[Object(i.jsx)("img",{src:"N/A"!==c?c:"https://via.placeholder.com/300x400?text=".concat(a),className:"card-img-top",alt:"poster"}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h5",{className:"card-title",children:a}),Object(i.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(i.jsx)("p",{className:"card-text",children:s}),Object(i.jsx)("p",{className:"card-text",children:r})]})]}),Object(i.jsx)("div",{className:"card-footer text-muted d-flex justify-content-center",children:Object(i.jsx)("button",{type:"button",className:"btn btn-outline-success","data-mdb-ripple-color":"dark",onClick:function(){o(!0),j(t)},children:"see details"})})]})})},f=function(){var e=Object(n.useContext)(h),t=e.currentPage,c=e.setCurrentPage,a=e.totalResults,s=function(){window.scrollTo(0,0)};return Object(i.jsxs)("div",{className:"d-flex py-2 justify-content-between",children:[Object(i.jsxs)("p",{children:["Amount records: ",a]}),Object(i.jsxs)("div",{className:"btn-group",role:"group",children:[Object(i.jsxs)("button",{type:"button",className:"btn btn-light btn-pagination",onClick:function(){c((function(e){return e-1})),s()},disabled:t<2,children:[Object(i.jsx)("i",{className:"fas fa-angle-left mx-2"}),"prev."]}),Object(i.jsxs)("button",{type:"button",className:"btn btn-light btn-pagination",onClick:function(){c((function(e){return e+1})),s()},disabled:t===Math.ceil(a/10),children:["next",Object(i.jsx)("i",{className:"fas fa-angle-right"})]})]})]})},v=function(){var e=Object(n.useContext)(h),t=e.searchingResult,c=void 0===t?[]:t,a=e.totalResults,s=c.map((function(e,t){return Object(i.jsx)(p,Object(m.a)({},e),"".concat(e.imdbID).concat(t,"}"))}));return Object(i.jsxs)("section",{children:[Object(i.jsx)("section",{className:"row row-cols-2 row-cols-md-4 g-4 my-2",children:0!==c.length?s:Object(i.jsx)("h4",{children:"Nothing found"})}),(a||0!==a)&&Object(i.jsx)(f,{})]})},g=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useContext)(h),r=s.setTitle,l=s.setCurrentPage;return Object(i.jsxs)("div",{className:"input-group my-3",children:[Object(i.jsx)("span",{className:"input-group-text border-0",id:"search-addon",children:Object(i.jsx)("i",{className:"fas fa-search"})}),Object(i.jsx)("input",{type:"search",className:"form-control rounded",placeholder:"Enter the title...","aria-label":"Search","aria-describedby":"search-addon",value:c,onChange:function(e){a(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(r(c),l(1))}}),Object(i.jsx)("button",{className:"btn btn-outline-success",type:"button",onClick:function(){r(c),l(1)},children:"Search"})]})},N=function(){var e=Object(n.useContext)(h),t=e.typeContent,c=e.setTypeContent,a=function(e){var t=e.target.value;c(t)};return Object(i.jsxs)("section",{className:"d-flex justify-content-around",children:[Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"",onChange:a,checked:""===t}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio1",children:"All"})]}),Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio2",value:"movie",onChange:a,checked:"movie"===t}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio2",children:"Movies only"})]}),Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio3",value:"series",onChange:a,checked:"series"===t}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio3",children:"Series only"})]})]})},y=function(){return Object(i.jsx)("div",{className:"d-flex justify-content-center my-4",children:Object(i.jsxs)("button",{className:"btn btn-success",type:"button",disabled:!0,children:[Object(i.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Loading..."]})})},k=(c(15),function(e){var t=e.handleOnClose,c=Object(n.useContext)(h).selectedItemId,a=Object(n.useState)({}),s=Object(u.a)(a,2),r=s[0],l=s[1],o=Object(n.useState)(!0),j=Object(u.a)(o,2),O=j[0],x=j[1],m=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,fetch("https://www.omdbapi.com/?apikey=".concat("76cc608b","&i=").concat(c));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,l(n),x(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){m()}),[c]);var p=r.Actors,f=r.Country,v=r.Director,g=r.Language,N=r.Plot,k=r.Title;return Object(i.jsxs)("section",{className:"d-flex flex-column",children:[Object(i.jsx)("button",{className:"btn btn-danger btn-rounded align-self-end",onClick:t,children:"close"}),O?Object(i.jsx)(y,{}):Object(i.jsxs)("div",{className:"d-flex flex-column",children:[Object(i.jsxs)("p",{children:["Title: ",k]}),Object(i.jsxs)("p",{children:["Actors: ",p]}),Object(i.jsxs)("p",{children:["Director: ",v]}),Object(i.jsxs)("p",{children:["Country: ",f]}),Object(i.jsxs)("p",{children:["Language: ",g]}),Object(i.jsxs)("p",{children:["Plot: ",N]})]})]})}),C=function(){var e=Object(n.useContext)(h),t=e.isModalOpen,c=(e.selectedItemData,e.setIsModalOpen),a=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=a.current;t?e.showModal():t||e.close()}),[t]),r.a.createPortal(Object(i.jsx)("dialog",{className:"modal-info",ref:a,children:Object(i.jsx)(k,{handleOnClose:function(){c(!1)}})}),document.body)},w=function(){var e=Object(n.useContext)(h),t=(e.searchingResult,e.loading);return Object(i.jsxs)("main",{className:"container content",children:[Object(i.jsx)(g,{}),Object(i.jsx)(N,{}),t?Object(i.jsx)(y,{}):Object(i.jsx)(v,{}),Object(i.jsx)(C,{})]})},S=function(){return Object(i.jsxs)(x,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(w,{}),Object(i.jsx)(l,{})]})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(S,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.af189e17.chunk.js.map