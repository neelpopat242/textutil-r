(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(6),c=a.n(r),s=(a(12),a(3));a(14);function o(e){return e.alert&&l.a.createElement("div",{className:" alert alert-success alert-dismissible fade show",role:"alert"},l.a.createElement("strong",null,e.alert.type),": ",e.alert.message)}var m=a(4);function i(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(m.b,{className:"navbar-brand",to:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link",to:"/about"},e.aboutus)))))))}function u(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",{className:"mb-3"},l.a.createElement("h1",null,"Enter text to be analysed "),l.a.createElement("textarea",{className:"form-control",value:r,id:"myBox",onChange:function(e){c(e.target.value)},rows:"8"})),l.a.createElement("button",{className:"btn btn-primary mx-2 my-2 ",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert(" Text has been converted to uppercase","success")}},"Convert to Upper Case"),l.a.createElement("button",{className:"btn btn-primary mx-2 my-2 ",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert(" Text has been converted to lowercase","success")}},"Convert to Lower Case"),l.a.createElement("button",{className:"btn btn-primary mx-2 my-2 ",onClick:function(){navigator.clipboard.writeText(r),e.showAlert(" Text has been copied to clipboard","success")}},"Copy  Text")),l.a.createElement("div",{className:"container my-3"},l.a.createElement("h1",null,"Text Summary"),l.a.createElement("table",{class:"table table-dark table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"First"),l.a.createElement("th",{scope:"col"},"Value"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Words"),l.a.createElement("td",null,r.split(/\s+/).filter(function(e){return 0!==e.length}).length)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"Character"),l.a.createElement("td",null,r.length)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3"),l.a.createElement("td",null,"Typing time  "),l.a.createElement("td",null,.005*r.split(/\s+/).filter(function(e){return 0!==e.length}).length," "))))))}function b(){return l.a.createElement("div",null,l.a.createElement("div",{className:"card bg-dark",style:{marginLeft:"400px",marginTop:"50px",width:"15rem"}},l.a.createElement("img",{src:"https://i.ibb.co/rdCVL3Z/np.jpg",style:{maxWidth:"100%",height:"auto"},className:"card-img-top",alt:"..."}),l.a.createElement("ul",{class:"list-group list-group-flush"},l.a.createElement("li",{class:"list-group-item"},"Neel Popat"),l.a.createElement("li",{class:"list-group-item"},"B.Tech in Computer Science , Ahmedabad University"),l.a.createElement("li",{class:"list-group-item"},l.a.createElement("a",{href:"https://github.com/neelpopat242",target:"_blank",rel:"noopener noreferrer",class:"card-link"},"Github")))))}i.defaultProps={title:"TextUtils",aboutus:"About Devs"};var p=a(0);var E=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{basename:"/"},l.a.createElement(i,null),l.a.createElement(o,{alert:a}),l.a.createElement("div",{className:"container"},l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",element:l.a.createElement(u,{showAlert:function(e,t){r({message:e,type:t}),setTimeout(function(){r(null)},2e3)}})}),l.a.createElement(p.a,{exact:!0,path:"about",element:l.a.createElement(b,null)})))))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,17)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),d()},7:function(e,t,a){e.exports=a(16)}},[[7,3,2]]]);
//# sourceMappingURL=main.add6d860.chunk.js.map