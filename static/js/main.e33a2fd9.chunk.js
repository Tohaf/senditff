(this.webpackJsonpsenditff=this.webpackJsonpsenditff||[]).push([[0],{11:function(e,t,n){e.exports={top:"main_top__2Id-j",mage:"main_mage__3P7_w",bod:"main_bod__1vSBs",footer:"main_footer__1Yv2s",footerCon:"main_footerCon__34zvE"}},23:function(e,t,n){e.exports={form:"delete_form__1GcHF",p:"delete_p__2Zg1q"}},24:function(e,t,n){e.exports={form:"admin_form__2sFkH"}},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(17),s=n.n(r),i=n(6),a=n(3),j=n(4),o=n(23),d=n.n(o),l=n(0),b=localStorage.getItem("tokens");var u=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useRef)();return Object(l.jsxs)("form",{className:d.a.form,onSubmit:function(e){e.preventDefault();var t=s.current.value;fetch("https://web-app-senditb.herokuapp.com/api/v1/parcels/".concat(t,"/cancel"),{method:"DELETE",mode:"cors",crossDomain:"true",body:JSON.stringify(t),headers:{"Content-Type":"application/json:charset=utf-8",authorization:b}}).then((function(e){return e.json()})).then((function(e){r(JSON.stringify(e))}))},children:[Object(l.jsx)("label",{htmlFor:"myId",children:" RefID "}),Object(l.jsx)("input",{name:"myId",type:"text",required:!0,ref:s}),Object(l.jsx)("button",{type:"submit",children:" Delete"}),n&&Object(l.jsxs)("div",{role:"alert",children:[Object(l.jsx)("pre",{children:n})," "]})]})},O=n(5),h=n(10),x=n.n(h),p=localStorage.getItem("tokens");var m=function(e){var t=e.myId,n=Object(c.useRef)(null),r=Object(c.useState)(),s=Object(j.a)(r,2),i=s[0],a=s[1],o=Object(c.useState)(""),d=Object(j.a)(o,2),b=d[0],u=d[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=n.current.value,r={id:t,destination:c};fetch("https://web-app-senditb.herokuapp.com/api/v1/parcels/".concat(t,"/destination"),{method:"PUT",body:JSON.stringify(r),mode:"cors",crossDomain:"true",headers:{"Content-Type":"application/json;charset=utf-8",authorization:p}}).then((function(e){return e.json()})).then((function(e){window.location.reload(),a("")}))},children:[Object(l.jsx)("div",{children:Object(l.jsx)(x.a,{value:b,onChange:u,children:function(e){var t=e.getInputProps,c=e.getSuggestionItemProps,r=e.suggestions,s=e.loading;return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"destination",children:" Destination"}),Object(l.jsx)("input",Object(O.a)(Object(O.a)({},t({autoFocus:!0})),{},{required:!0,type:"text",id:"destination",name:"destination",ref:n})),Object(l.jsxs)("div",{children:[s&&Object(l.jsx)("div",{children:"loading..."}),r.map((function(e){return Object(l.jsx)("div",Object(O.a)(Object(O.a)({},c(e)),{},{children:Object(l.jsx)("span",{children:e.description},e.id)}))}))]})]})}})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})}),i&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:i})})]})})},f=n(12),v=n.n(f),g=localStorage.getItem("tokens");var y=function(e){var t=e.val,n=Object(c.useState)(!1),r=Object(j.a)(n,2),s=r[0],i=r[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t._id}),Object(l.jsx)("td",{children:t.destination}),Object(l.jsx)("td",{children:t.location}),Object(l.jsx)("td",{children:t.recipient}),Object(l.jsx)("td",{children:t.phone}),Object(l.jsx)("td",{children:t.status}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{onClick:function(){"cancelled"===t.status||"delivered"===t.status?alert("already cancelled or delivered"):i(!0)},children:"edit"})}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{onClick:function(){var e=t._id,n={status:"cancelled",id:e};"delivered"===t.status||"cancelled"===t.status?alert("order already delivered/cancelled"):window.confirm("are you sure you want to cancel")?fetch("https://web-app-senditb.herokuapp.com/api/v1/parcels/".concat(e,"/status"),{method:"put",body:JSON.stringify(n),crossDomain:!0,mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8",authorization:g}}).then((function(e){return e.json()})).then((function(e){window.location.reload(),alert("sucessfully cancelled")})):window.document.location="/senditff/get"},children:"cancel"})})]},t._id),Object(l.jsx)(v.a,{title:"enter update",isOpen:s,onRequestClose:function(){i(!1)},style:{content:{top:"10%",left:"50%",right:"50%",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"},overlay:{background:""}},children:Object(l.jsx)(m,{myId:t._id})})]})},S=localStorage.getItem("tokens");var w=function(){var e=JSON.parse(localStorage.getItem("token")),t=Object(c.useState)([]),n=Object(j.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(),o=Object(j.a)(a,2),d=o[0],b=o[1],u=Object(c.useState)(),O=Object(j.a)(u,2),h=O[0],x=O[1],p=Object(c.useState)(),m=Object(j.a)(p,2),f=m[0],v=m[1],g=Object(c.useState)(),w=Object(j.a)(g,2),k=w[0],C=w[1];return Object(c.useEffect)((function(){fetch("https://web-app-senditb.herokuapp.com/api/v1/users/:id/parcels?name=".concat(e),{headers:{authorization:S}}).then((function(e){return e.json()})).then((function(e){s(e);var t=e.filter((function(e){return"delivered"===e.status}));x(t.length);var n=e.filter((function(e){return"transit"===e.status}));v(n.length),b(e.length),0===e.length?C("NO ENTRY YET"):C("")}))}),[e]),Object(l.jsxs)("div",{children:["Welcome ",e,Object(l.jsx)("br",{}),Object(l.jsx)(i.b,{to:"/post",children:" create order"}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["Total Number Of Orders: ",Object(l.jsx)("span",{id:"order",children:d&&Object(l.jsx)("span",{children:d})})]}),Object(l.jsxs)("li",{children:["Number Of Orders Delivered: ",Object(l.jsx)("span",{id:"deliver",children:h&&Object(l.jsx)("span",{children:h})})]}),Object(l.jsxs)("li",{children:[" Number Of Orders On Transit:  ",Object(l.jsx)("span",{id:"transit",children:f&&Object(l.jsx)("span",{children:f})})]})]}),Object(l.jsxs)("table",{cellPadding:40,margin:0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Order id"}),Object(l.jsx)("th",{children:"destination"}),Object(l.jsx)("th",{children:"Location"}),Object(l.jsx)("th",{children:"recipient name"}),Object(l.jsx)("th",{children:"recipient mobile"}),Object(l.jsx)("th",{children:"status"}),Object(l.jsx)("th",{children:"update destination"}),Object(l.jsx)("th",{children:"cancel"})]})}),Object(l.jsx)("tbody",{children:r.map((function(e){return Object(l.jsx)(y,{val:e},e._id)}))})]}),k&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:k})})]})},k=localStorage.getItem("tokens");var C=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),n=Object(c.useState)(),r=Object(j.a)(n,2),s=r[0],i=r[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault();var c=e.current.value,r=t.current.value,s={location:c,id:r};fetch("https://web-app-senditb.herokuapp.com/api/v1/parcels/".concat(r,"/location"),{method:"PUT",body:JSON.stringify(s),mode:"cors",crossDomain:"true",headers:{"Content-Type":"application/json;chrset=utf-8",authorization:k}}).then((function(e){return e.json()})).then((function(e){i(JSON.stringify(e))}))},children:[Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",name:"location",id:"location",required:!0,placeholder:"location",ref:e})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"string",name:"id",id:"id",required:!0,placeholder:"enter id",ref:t})}),Object(l.jsx)("button",{type:"submit",children:"submit"})]}),s&&Object(l.jsxs)("div",{children:[Object(l.jsx)("pre",{children:s})," "]})]})},I=localStorage.getItem("tokens");var _=function(e){var t=e.myne,n=Object(c.useRef)();return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=n.current.value,r=t;console.log(r);var s={status:c,id:r};fetch("https://web-app-senditb.herokuapp.com/api/v1/parcels/".concat(r,"/status"),{method:"put",body:JSON.stringify(s),crossDomain:!0,mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8",authorization:I}}).then((function(e){return e.json()})).then((function(e){window.location.reload(),console.log(e)}))},children:[Object(l.jsx)("label",{htmlFor:"status",children:" Status"}),Object(l.jsxs)("select",{id:"status",name:"status",ref:n,required:!0,children:[Object(l.jsx)("option",{value:"transit",children:" transit"}),Object(l.jsx)("option",{value:"delivered",children:" delivered"})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})})]})})},N=n(11),R=n.n(N);var D=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(),a=Object(j.a)(s,2),o=a[0],d=a[1];return Object(c.useEffect)((function(){var e=["You are welcome to our website","We offer the best service ever","A trier will confuse you","Always stay tune for the latest"],t=0;setInterval((function(){t>=e.length&&(t=0),d(e[t]),t++}),2e3)}),[]),setInterval((function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),c=e.getSeconds(),s="AM";t>12&&(t-=12,s="PM"),t<10&&(t="0"+t),n<10&&(n="0"+n),c<10&&(c="0"+c),r(t+":"+n+":"+c+":"+s)})),Object(l.jsxs)("div",{className:R.a.bod,children:[Object(l.jsx)("nav",{className:R.a.top,children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/",children:" Home "})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/register",children:" Register "})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/login",children:" Login "})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/",children:" About "})})]})}),Object(l.jsx)("section",{className:R.a.body,children:Object(l.jsxs)("div",{className:R.a.mage,children:[o&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:o})}),Object(l.jsx)("button",{children:"Learn more"})]})}),n&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:n})}),Object(l.jsx)("footer",{className:R.a.footer,children:Object(l.jsxs)("div",{className:R.a.footerCon,children:[Object(l.jsxs)("div",{id:"about",children:[Object(l.jsx)("h1",{children:"About"}),Object(l.jsx)("p",{children:"SendIt is a superfast delivery company aimed at making life better"})]}),Object(l.jsxs)("div",{id:"contact",children:[Object(l.jsx)("h1",{children:"Contact"}),Object(l.jsx)("p",{children:"customer service: 08086107117"}),Object(l.jsx)("p",{children:"No.32 laula Street, Lagos State"})]}),Object(l.jsxs)("div",{id:"socials",children:[Object(l.jsx)("h1",{children:"Socials"}),Object(l.jsx)("p",{children:"you can get to us via our social media handles:"})]})]})})]})},F=n(24),P=n.n(F);var T=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)();return Object(l.jsxs)("div",{className:P.a.form,children:[Object(l.jsxs)("form",{onSubmit:function(c){c.preventDefault();var r={username:t.current.value,password:n.current.value};e.sendData(r)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"username",children:" Username"}),Object(l.jsx)("input",{required:!0,type:"text",id:"username",ref:t})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"password",children:" Password"}),Object(l.jsx)("input",{required:!0,type:"text",id:"password",ref:n})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})})]}),Object(l.jsx)("nav",{children:Object(l.jsx)(i.b,{to:"/login",children:" go to login "})})]})},E=localStorage.getItem("tokens");var q=function(){var e=Object(c.useState)(!0),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(a.g)();return Object(l.jsxs)("div",{children:[Object(l.jsx)(T,{sendData:function(e){fetch("https://web-app-senditb.herokuapp.com/admin/add",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",authorization:E}}).then((function(e){return e.json()})).then((function(e){e&&(console.log(e),s("/get"))})),r("username or password not match")}}),n&&Object(l.jsxs)("div",{role:"alert",children:[Object(l.jsx)("pre",{children:n})," "]})]})};v.a.setAppElement("#root");var J=localStorage.getItem("tokens");var z=function(e){var t=e.valo,n=(e.editable,e.del,e.myne),r=Object(c.useState)(!1),s=Object(j.a)(r,2),i=s[0],a=s[1],o=n;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t._id}),Object(l.jsx)("td",{children:t.destination}),Object(l.jsx)("td",{children:t.location}),Object(l.jsx)("td",{children:t.status}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{type:"button",onClick:function(){"cancelled"===t.status||"delivered"===t.status?alert("already cancelled or delivered"):a(!0)},children:"edit"})}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{onClick:function(){"transit"===t.status||"ready for pickup"===t.status?alert("cannot be deleted, Order still in transit and not yet delivered"):window.confirm("are you sure you want to delete")?fetch("https://web-app-senditb.herokuapp.com/api/v1/parcels/".concat(o,"/cancel"),{method:"DELETE",mode:"cors",crossDomain:"true",body:JSON.stringify(o),headers:{"Content-Type":"application/json:charset=utf-8",authorization:J}}).then((function(e){return e.json()})).then((function(e){console.log(e),alert("succesfully deleted")})):window.document.location="/senditff/receive"},children:"Delete"})})]}),Object(l.jsx)(v.a,{title:"enter update",isOpen:i,onRequestClose:function(){a(!1)},style:{content:{top:"10%",left:"50%",right:"50%",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"},overlay:{background:""}},children:Object(l.jsx)(_,{myne:o})})]})},A=localStorage.getItem("tokens");var L=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),a=Object(j.a)(s,2),o=a[0],d=a[1];function b(){d(!0)}function u(){alert("deleted")}return Object(c.useEffect)((function(){fetch("https://web-app-senditb.herokuapp.com/api/v1/parcels",{headers:{authorization:A}}).then((function(e){return e.json()})).then((function(e){r(e)}))}),[n]),Object(l.jsxs)("div",{children:[Object(l.jsx)(i.b,{to:"../",children:"Logout"}),o?Object(l.jsx)(_,{oncance:function(){d(o)}}):null,Object(l.jsxs)("table",{cellPadding:40,cellSpacing:0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"orderid"}),Object(l.jsx)("th",{children:"destination"}),Object(l.jsx)("th",{children:"location"}),Object(l.jsx)("th",{children:"status"}),Object(l.jsx)("th",{children:"Update Status"}),Object(l.jsx)("th",{children:"Delete order"})]})}),Object(l.jsxs)("tbody",{children:[n.map((function(e){return Object(l.jsx)(c.Fragment,{children:Object(l.jsx)(z,{myne:e._id,valo:e,editable:b,del:u})},e._id)})),";"]})]})]})};var U=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)();return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(c){c.preventDefault();var r={email:t.current.value,password:n.current.value};e.sendData(r)},children:[Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:" Email "}),Object(l.jsx)("input",{required:!0,type:"email",id:"email",ref:t})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"password",children:" Password"}),Object(l.jsx)("input",{required:!0,type:"password",id:"password",ref:n})]}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})}),"NOT YET A USER?",Object(l.jsx)(i.b,{to:"/register",children:" REGISTER"}),Object(l.jsx)("br",{}),Object(l.jsx)(i.b,{to:"/",children:"Go to homepage"})]})})};var Y=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(a.g)();return Object(l.jsxs)("div",{children:[Object(l.jsx)(U,{sendData:function(e){console.log(e),fetch("https://web-app-senditb.herokuapp.com/api/v1/auth/login",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){"error"===t.status?r("email or password not match"):"lmn@gmail.com"===e.email&&"toheeb"===e.password?(s("/receive"),r(t)):(s("/get"),r(t),localStorage.setItem("token",JSON.stringify(t.nama)),localStorage.setItem("tokens",t.token))}))}}),n&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:n})})]})},H=(n(22),n(13));var Z=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(null),a=Object(j.a)(i,2),o=a[0],d=a[1],b=Object(c.useState)(""),u=Object(j.a)(b,2),h=u[0],p=u[1],m=Object(c.useRef)(),f=Object(c.useRef)(),v=Object(c.useRef)(),g=Object(c.useRef)(),y=JSON.parse(localStorage.getItem("token"));return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=m.current.value,c=f.current.value,r=v.current.value,s=g.current.value,i={destination:n,location:c,status:"ready for pickup",name:y,recipient:s,phone:r};e.sendData(i)},children:[Object(l.jsx)("br",{}),Object(l.jsx)(x.a,{value:r,onChange:s,children:function(e){var t=e.getInputProps,n=e.getSuggestionItemProps,c=e.suggestions,r=e.loading;return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"destination",children:" destination "}),Object(l.jsx)("input",Object(O.a)(Object(O.a)({},t({autoFocus:!0})),{},{required:!0,type:"text",id:"destination",ref:m})),Object(l.jsxs)("div",{children:[r&&Object(l.jsx)("div",{children:"loading..."}),c.map((function(e){return Object(l.jsx)("div",Object(O.a)(Object(O.a)({},n(e)),{},{children:Object(l.jsx)("span",{children:e.description},e.id)}))}))]})]})}}),Object(l.jsx)("br",{}),Object(l.jsx)(x.a,{value:h,onChange:p,children:function(e){var t=e.getInputProps,n=e.getSuggestionItemProps,c=e.suggestions,r=e.loading;return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"location",children:"pickup Location"}),Object(l.jsx)("input",Object(O.a)(Object(O.a)({},t({autoFocus:!0})),{},{required:!0,type:"text",id:"location",ref:f})),Object(l.jsxs)("div",{children:[r&&Object(l.jsx)("div",{children:"loading..."}),c.map((function(e){return Object(l.jsx)("div",Object(O.a)(Object(O.a)({},n(e)),{},{children:Object(l.jsx)("span",{children:e.description},e.id)}))}))]})]})}}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"phone"}),Object(l.jsx)(H.a,{international:!0,defaultCountry:"RU",countryCallingCodeEditable:!1,value:o,onChange:d,required:!0,type:"tel",id:"phone",ref:v,placeholders:"phone no"})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"recipient",children:" recipient"}),Object(l.jsx)("input",{required:!0,type:"text",id:"recipient",ref:g})]}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})})]})})},G=localStorage.getItem("tokens");var M=function(){var e=Object(a.g)(),t=Object(c.useState)(),n=Object(j.a)(t,2),r=n[0],s=n[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(Z,{sendData:function(t){fetch("https://web-app-senditb.herokuapp.com/api/v1/parcels",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",authorization:G}}).then((function(e){return e.json()})).then((function(t){console.log(t),s(JSON.stringify(t)),e("/get")})),s(r)}}),r&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:r})})]})};var B=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(),o=Object(j.a)(a,2),d=o[0],b=o[1],u=Object(c.useState)(),h=Object(j.a)(u,2),p=h[0],m=h[1],f=Object(c.useState)(),v=Object(j.a)(f,2),g=v[0],y=v[1],S=Object(c.useRef)(),w=Object(c.useRef)(),k=Object(c.useRef)(),C=Object(c.useRef)(),I=Object(c.useRef)(),_=Object(c.useRef)(),N=Object(c.useRef)();return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=w.current.value,c=S.current.value,r=k.current.value,s=C.current.value,i=I.current.value,a=N.current.value,j={confirmPassword:n,password:c,nama:r,namo:s,email:i,phone:_.current.value,address:a};e.sendData(j)},children:[Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"nama",children:" Firstname"}),Object(l.jsx)("input",{required:!0,type:"text",id:"nama",ref:k})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"namo",children:" Lastname"}),Object(l.jsx)("input",{required:!0,type:"text",id:"namo",ref:C})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"password",children:" Password"}),Object(l.jsx)("input",{required:!0,type:"password",id:"password",name:"password",ref:S})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"confirmPassword",children:" confirmPassword"}),Object(l.jsx)("input",{required:!0,onChange:function(){var e=w.current.value,t=S.current.value;m(e!==t?"password not match":"")},type:"password",id:"confirmPassword",name:"confirmPassword",ref:w}),p&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:p})})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:" Email"}),Object(l.jsx)("input",{required:!0,onChange:function(){I.current.value.match("^[a-zA-ZO]+@[a-zA-ZO]+\\.[A-Za-z]+$")?y(""):y("Not a valid email")},type:"email",id:"email",ref:I}),g&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:g})})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"phone"}),Object(l.jsx)(H.a,{international:!0,defaultCountry:"RU",countryCallingCodeEditable:!1,value:d,onChange:b,required:!0,type:"tel",id:"phone",ref:_})]}),Object(l.jsx)("br",{}),Object(l.jsx)(x.a,{value:r,onChange:s,children:function(e){var t=e.getInputProps,n=e.getSuggestionItemProps,c=e.suggestions,r=e.loading;return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"address",children:"address"}),Object(l.jsx)("input",Object(O.a)(Object(O.a)({},t({autoFocus:!0})),{},{required:!0,type:"text",id:"address",ref:N})),Object(l.jsxs)("div",{children:[r&&Object(l.jsx)("div",{children:"loading..."}),c.map((function(e){return Object(l.jsx)("div",Object(O.a)(Object(O.a)({},n(e)),{},{children:Object(l.jsx)("span",{children:e.description},e.id)}))}))]})]})}}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})}),"Already have an account:",Object(l.jsx)(i.b,{to:"/login",children:"Login"})]})})},W=localStorage.getItem("token");var $=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(a.g)();return Object(l.jsxs)("div",{children:[Object(l.jsx)(B,{sendData:function(e){fetch("https://web-app-senditb.herokuapp.com/api/v1/auth/signup",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",authorization:W}}).then((function(e){return e.json()})).then((function(t){console.log(t),e.confirmPassword!==e.password?alert("password are not the same"):"error"===t.status?(r("Email already exiist"),alert("Email already exist")):s("/login")}))}}),n&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:n})})]})};var K=function(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)(a.d,{children:[Object(l.jsx)(a.b,{path:"/admin",element:Object(l.jsx)(q,{})}),Object(l.jsx)(a.b,{path:"/login",element:Object(l.jsx)(Y,{})}),Object(l.jsx)(a.b,{path:"/register",element:Object(l.jsx)($,{})}),Object(l.jsx)(a.b,{path:"/post",element:Object(l.jsx)(M,{})}),Object(l.jsx)(a.b,{path:"/receive",element:Object(l.jsx)(L,{})}),Object(l.jsx)(a.b,{path:"/cancel",element:Object(l.jsx)(u,{})}),Object(l.jsx)(a.b,{index:!0,element:Object(l.jsx)(D,{})}),Object(l.jsx)(a.b,{path:"/admin",element:Object(l.jsx)(q,{})}),Object(l.jsx)(a.b,{path:"/get",element:Object(l.jsx)(w,{})}),Object(l.jsx)(a.b,{path:"/destination",element:Object(l.jsx)(m,{})}),Object(l.jsx)(a.b,{path:"/location",element:Object(l.jsx)(C,{})}),Object(l.jsx)(a.b,{path:"/status",element:Object(l.jsx)(_,{})})]}),Object(l.jsx)(a.a,{})]})};n(48);s.a.render(Object(l.jsx)(i.a,{basename:"/senditff",children:Object(l.jsx)(a.d,{children:Object(l.jsx)(a.b,{exact:!0,path:"*",element:Object(l.jsx)(K,{})})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.e33a2fd9.chunk.js.map