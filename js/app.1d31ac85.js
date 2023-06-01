(function(t){function e(e){for(var r,s,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0215":function(t,e,n){"use strict";n("9fc4")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"bg"}),r("div",{staticClass:"content"},[r("img",{attrs:{src:n("c3f8")}}),r("h1",{staticClass:"intro_text intro_text--title"},[t._v(" Robin Mazumder ")]),r("small",{staticClass:"intro_text intro_text--smallcaps"},[t._v("Work in progress")]),r("p",{staticClass:"intro_text intro_text--para intro_text--desc"},[t._v(" Neuroscientist interested in helping design cities that support well-being, equity, and our planet. ")]),r("p",[t._v(" I give keynote talks and interactive workshops on urbanism, public health, citizenship, mental health and more. ")]),r("button",{staticClass:"button-success pure-button button-xlarge",attrs:{type:"submit"}},[t._v(" View old website ")]),t._m(0),r("Contact")],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" This website is a work in progress, in the meantime, book time with me on "),n("a",{attrs:{target:"_blank",href:"https://calendly.com/robinmazumder"}},[t._v("Calendly")]),t._v(" ↗, "),n("a",{attrs:{target:"_blank",href:"https://twitter.com/RobinMazumder"}},[t._v("tweet me")]),t._v(" ↗, or send me an email below: ")])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section contact contact-style b-loaded",attrs:{id:"contact"}},[n("div",{staticClass:"contact_contents"},[n("div",{staticClass:"contact_contents--form"},[n("p",[n("span",{staticClass:"hidden-start",class:t.showLoading?"show":"hide"},[t._v(" Sending... ")]),n("span",{staticClass:"hidden-start",class:t.showSuccess?"show":"hide"},[t._v(" Thanks ")]),n("span",{staticClass:"hidden-start",class:t.showError?"show":"hide"},[t._v(" Sorry there was an error, email me at "),n("a",{attrs:{href:"mailto:robin@robinmazumder.com"}},[t._v("robin@robinmazumder.com")]),t._v(". ")])]),n("form",{staticClass:"gform pure-form pure-form-stacked hidden-start",class:t.showSuccess||t.showError||t.showLoading?"hide":"show",on:{submit:function(e){return e.preventDefault(),t.checkForm(e)}}},[t._m(0),t._m(1),t._m(2),n("fieldset",{staticClass:"pure-group honeypot-field",attrs:{"aria-hidden":"true"}},[n("label",{attrs:{for:"honeypot"}},[t._v(" To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot. ")]),n("input",t._b({attrs:{id:"honeypot",type:"text",name:"honeypot"}},"input",this.honeypot,!1))]),n("button",{staticClass:"button-success pure-button button-xlarge",attrs:{type:"submit"}},[t._v(" Send ")])])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fieldset",{staticClass:"pure-group"},[n("label",{attrs:{for:"name"}},[t._v("Name: ")]),n("input",{attrs:{id:"name",name:"name",placeholder:"First and last name"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fieldset",{staticClass:"pure-group"},[n("label",{attrs:{for:"email"}},[t._v("Email:")]),n("input",{attrs:{id:"email",name:"email",type:"email",required:"",placeholder:"your.name@email.com"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fieldset",{staticClass:"pure-group"},[n("label",{attrs:{for:"message"}},[t._v("Message: ")]),n("textarea",{attrs:{id:"message",name:"message",rows:"10",placeholder:"How can we work together?"}})])}],c=(n("d3b7"),n("4de4"),n("d81d"),n("b64b"),n("b0c0"),n("159b"),n("a15b"),{name:"contact",methods:{checkForm:function(t){var e=this;this.showLoading=!0;var n=t.target,r=this.getFormData(n);r.honeypot||fetch("https://script.google.com/macros/s/AKfycbx5HebznWt2vdcIPS9F3PF96GJbvuyNIKY5C5WgUbGLQanUenm_h_nDUbcB39jP0jLs/exec",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:r.data}).then((function(){console.log("Form sent :)"),e.showLoading=!1,e.showSuccess=!0})).catch((function(){e.showLoading=!1,e.showError=!0}))},getFormData:function(t){var e,n=t.elements,r=Object.keys(n).filter((function(t){return"honeypot"!==n[t].name||(e=n[t].value,!1)})).map((function(t){return void 0!==n[t].name?n[t].name:n[t].length>0?n[t].item(0).name:void 0})).filter((function(t,e,n){return n.indexOf(t)==e&&t})),o={};r.forEach((function(t){var e=n[t];if(o[t]=e.value,e.length){for(var r=[],a=0;a<e.length;a++){var s=e.item(a);(s.checked||s.selected)&&r.push(s.value)}o[t]=r.join(", ")}}));var a=Object.keys(o).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(o[t])})).join("&");return{data:a,honeypot:e}}},data:function(){return{showLoading:!1,showSuccess:!1,showError:!1,url:"https://script.google.com/macros/s/AKfycbwf9vHrFYI6KMJYyhOukPqpd1x1TUhTt41uwqtfmkxUwKmKypGNHmW8cKCdWM9KjAHL/exec",honeypot:""}}}),u=c,l=(n("0215"),n("2877")),p=Object(l["a"])(u,s,i,!1,null,"770fb52d",null),d=p.exports,m={name:"App",components:{Contact:d}},h=m,f=(n("5c0b"),Object(l["a"])(h,o,a,!1,null,null,null)),b=f.exports,v=n("caf9"),_=n("ad3d"),g=n("b3b5");r["a"].use(v["a"]),r["a"].component("font-awesome-icon",_["a"]),r["a"].use(g["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},"9fc4":function(t,e,n){},c3f8:function(t,e,n){t.exports=n.p+"img/robinfeet.86ecfd20.jpeg"}});
//# sourceMappingURL=app.1d31ac85.js.map