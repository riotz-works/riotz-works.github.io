(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{176:function(t,e,n){"use strict";var i=n(5),r=n(37),s=n(23),o=n(4),a=n(54),c=[],u=c.sort,l=o((function(){c.sort(void 0)})),d=o((function(){c.sort(null)})),p=a("sort");i({target:"Array",proto:!0,forced:l||!d||!p},{sort:function(t){return void 0===t?u.call(s(this)):u.call(s(this),r(t))}})},177:function(t,e,n){},178:function(t,e){},183:function(t,e,n){"use strict";var i=n(5),r=n(184).left,s=n(54),o=n(39),a=s("reduce"),c=o("reduce",{1:0});i({target:"Array",proto:!0,forced:!a||!c},{reduce:function(t){return r(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},184:function(t,e,n){var i=n(37),r=n(23),s=n(38),o=n(16),a=function(t){return function(e,n,a,c){i(n);var u=r(e),l=s(u),d=o(u.length),p=t?d-1:0,f=t?-1:1;if(a<2)for(;;){if(p in l){c=l[p],p+=f;break}if(p+=f,t?p<0:d<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:d>p;p+=f)p in l&&(c=n(c,l[p],p,u));return c}};t.exports={left:a(!1),right:a(!0)}},185:function(t,e,n){"use strict";var i=n(177);n.n(i).a},186:function(t,e,n){"use strict";var i=n(178),r=n.n(i);e.default=r.a},210:function(t,e,n){"use strict";n.r(e);n(135),n(136),n(183),n(176);var i=n(115),r=n(14),s={data:function(){return{title:"Works",description:""}},computed:{works:function(){return this.$page?this.$page.works.edges.sort((function(t,e){return t.node.number<e.node.number?-1:1})):[]},engineers:function(){return this.$page?this.$page.engineers.edges.reduce((function(t,e){return Object(r.a)({},t,Object(i.a)({},e.node.account,e))}),{}):[]}},metaInfo:function(){return{title:this.title,meta:[{key:"description",template:!0,content:this.description},{key:"twitter:title",template:!0,content:this.title},{key:"twitter:description",template:!0,content:this.description},{key:"og:title",template:!0,content:this.title},{key:"og:description",template:!0,content:this.description},{key:"itemprop:name",template:!0,content:this.title},{key:"itemprop:description",template:!0,content:this.description}]}}},o=(n(185),n(22)),a=n(186),c=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("h1",{staticClass:"mt-5"},[t._v("Works")]),n("v-divider"),n("p",[t._v(t._s(t.description))]),n("v-container",{attrs:{fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"justify-space-around":"",wrap:""}},[t._l(t.works,(function(e){return n("v-flex",{key:e.node.id},[n("h2",[n("g-image",{staticClass:"icon",attrs:{src:e.node.icon,alt:e.node.title}}),t._v(t._s(e.node.title))],1),n("p",{staticClass:"link"},[n("ul",[n("li",[n("a",{staticClass:"url",attrs:{href:e.node.url}},[n("i",{staticClass:"uil uil-link"}),n("span",[t._v(t._s(e.node.url))])])]),t._l(e.node.repos,(function(e){return n("li",{key:e},[n("a",{staticClass:"url",attrs:{href:e}},[n("i",{staticClass:"uil uil-diary"}),n("span",[t._v(t._s(e))])])])}))],2)]),n("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(e.node.excerpt)}}),n("h3",[t._v("開発")]),n("p",t._l(e.node.engineers,(function(e){return n("a",{key:e,staticClass:"engineer",attrs:{href:"/engineers/#"+e,title:e}},[n("v-avatar",{attrs:{slot:"activator",size:"36px"},slot:"activator"},[n("g-image",{attrs:{src:t.engineers[e].node.image,alt:t.engineers[e].node.account}})],1)],1)})),0),n("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(e.node.content)}})])})),t._l(t.works,(function(t){return n("v-flex",{key:"empty-"+t.node.id,staticClass:"empty"},[n("div")])}))],2)],1)],1)}),[],!1,null,"469b8daf",null);"function"==typeof a.default&&Object(a.default)(c);e.default=c.exports}}]);