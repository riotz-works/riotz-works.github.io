(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{215:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return a}),n.d(e,"a",function(){return s});var r=n(1),i=r.default.observable({});function o(t,e){return r.default.set(i,t,e)}function a(t){return i[t]}function s(t,e){var n=e.matched[0],r=n?n.components.default:{};if(t.stringified&&r.__file)return console.error("An error occurred while executing "+"page-query for ".concat(r.__file,"\n\n")+"Error: ".concat(t.stringified));console.error(t.message)}},216:function(t,e,n){"use strict";var r=n(5),i=n(38),o=n(39),a=n(8),s=[].sort,c=[1,2,3];r(r.P+r.F*(a(function(){c.sort(void 0)})||!a(function(){c.sort(null)})||!n(128)(s)),"Array",{sort:function(t){return void 0===t?s.call(o(this)):s.call(o(this),i(t))}})},217:function(t,e,n){},218:function(t,e,n){"use strict";var r=n(1),i=n(215),o=r.default.config.optionMergeStrategies;e.a=function(t){var e=t.options,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e.__pageQuery)e.__pageQuery=r;else{e.__pageQuery=r,e.computed=o.computed({$page:function(){return Object(i.b)(this.$route.path)}},e.computed);var a=function(t){e[t]=o[t]([s(e)],e[t])},s=function(){return function(t,r,o){n.e(7).then(n.bind(null,226)).then(function(n){n.default(t,e.__pageQuery).then(function(){return o()}).catch(function(e){"MODULE_NOT_FOUND"===e.code?(console.error(e),o({name:"*",params:{0:t.path}})):Object(i.a)(e,t)})})}};a("beforeRouteEnter"),a("beforeRouteUpdate")}}},227:function(t,e,n){"use strict";var r=n(5),i=n(228);r(r.P+r.F*!n(128)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},228:function(t,e,n){var r=n(38),i=n(39),o=n(50),a=n(26);t.exports=function(t,e,n,s,c){r(e);var u=i(t),l=o(u),f=a(u.length),d=c?f-1:0,p=c?-1:1;if(n<2)for(;;){if(d in l){s=l[d],d+=p;break}if(d+=p,c?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;c?d>=0:f>d;d+=p)d in l&&(s=e(s,l[d],d,u));return s}},229:function(t,e,n){"use strict";var r=n(217);n.n(r).a},251:function(t,e,n){"use strict";n.r(e);var r=n(108),i=n(11),o=(n(227),n(216),{data:function(){return{title:"Works",description:""}},computed:{works:function(){return this.$page?this.$page.works.edges.sort(function(t,e){return t.node.number<e.node.number?-1:1}):[]},engineers:function(){return this.$page?this.$page.engineers.edges.reduce(function(t,e){return Object(i.a)({},t,Object(r.a)({},e.node.account,e))},{}):[]}},metaInfo:function(){return{title:this.title,meta:[{key:"description",template:!0,content:this.description},{key:"twitter:title",template:!0,content:this.title},{key:"twitter:description",template:!0,content:this.description},{key:"og:title",template:!0,content:this.title},{key:"og:description",template:!0,content:this.description},{key:"itemprop:name",template:!0,content:this.title},{key:"itemprop:description",template:!0,content:this.description}]}}}),a=(n(229),n(28)),s=n(218),c=function(t){Object(s.a)(t,void 0)},u=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("h1",{staticClass:"mt-5"},[t._v("Works")]),n("v-divider"),n("p",[t._v(t._s(t.description))]),n("v-container",{attrs:{fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"justify-space-around":"",wrap:""}},[t._l(t.works,function(e){return n("v-flex",{key:e.node.id},[n("h2",[n("g-image",{staticClass:"icon",attrs:{src:e.node.icon}}),t._v(t._s(e.node.title))],1),n("p",{staticClass:"link"},[n("ul",[n("li",[n("a",{staticClass:"url",attrs:{href:e.node.url}},[n("i",{staticClass:"material-icons"},[t._v("link")]),n("span",[t._v(t._s(e.node.url))])])]),t._l(e.node.repos,function(e){return n("li",{key:e},[n("a",{staticClass:"url",attrs:{href:e}},[n("i",{staticClass:"material-icons"},[t._v("library_books")]),n("span",[t._v(t._s(e))])])])})],2)]),n("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(e.node.excerpt)}}),n("h3",[t._v("開発")]),n("p",t._l(e.node.engineers,function(e){return n("a",{key:e,staticClass:"engineer",attrs:{href:"/engineers/#"+e,title:e}},[n("v-avatar",{attrs:{slot:"activator",size:"36px"},slot:"activator"},[n("g-image",{attrs:{src:t.engineers[e].node.image}})],1)],1)}),0),n("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(e.node.content)}})])}),t._l(t.works,function(t){return n("v-flex",{key:"empty-"+t.node.id,staticClass:"empty"},[n("div")])})],2)],1)],1)},[],!1,null,"7922c066",null);"function"==typeof c&&c(u);e.default=u.exports}}]);