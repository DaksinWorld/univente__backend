(window.webpackJsonp=window.webpackJsonp||[]).push([[38,14],{331:function(t,e,r){var content=r(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("27fb288c",content,!0,{sourceMap:!1})},348:function(t,e,r){"use strict";r(331)},349:function(t,e,r){var n=r(45)(!1);n.push([t.i,".card[data-v-48f088f5]{background-color:rgb(var(--middle_lavender));height:130px;width:176px;display:flex;flex-direction:column;justify-content:space-between;padding:10px}span[data-v-48f088f5]{color:#fff;font-weight:600}",""]),t.exports=n},369:function(t,e,r){var content=r(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("6e782a1d",content,!0,{sourceMap:!1})},382:function(t,e,r){"use strict";r.r(e);var n={props:["data"]},o=(r(348),r(13)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a",{attrs:{href:"/Programs?field="+t.data.fieldOfCourse+"&univ="+t.data.universities}},[r("div",{staticClass:"card"},[r("span",[t._v(t._s(t.data.name))]),t._v(" "),r("span",[t._v(t._s(t.data.fieldOfCourse))])])])])}),[],!1,null,"48f088f5",null);e.default=component.exports},406:function(t,e,r){"use strict";r(369)},407:function(t,e,r){var n=r(45)(!1);n.push([t.i,'.body[data-v-b1febb86]{background-color:rgb(var(--color_primary))!important}.description[data-v-b1febb86]{color:var(--light_yellow);font-family:Montserrat;font-weight:700}.wrapper[data-v-b1febb86]{padding-top:100px}.img[data-v-b1febb86]{border-radius:50%;width:450px;height:450px;-o-object-fit:cover;object-fit:cover}ul[data-v-b1febb86]{padding:2px}li[data-v-b1febb86]{display:flex;flex-direction:column;color:var(--gray_light);font-family:"Source Sans Pro",serif;font-weight:600;padding:5px}li span[data-v-b1febb86]{color:rgb(var(--green_light));font-weight:700}.content[data-v-b1febb86]{padding:20px;margin-left:20px;background-color:#2b3990;width:100%;border-radius:var(--standard_border_radius)}.programs[data-v-b1febb86]{margin-top:15px}.programs h2[data-v-b1febb86]{color:var(--light_yellow);font-weight:700;font-family:Montserrat}@media screen and (max-width:768px){.img[data-v-b1febb86]{width:330px;height:330px;margin:10px}}',""]),t.exports=n},428:function(t,e,r){"use strict";r.r(e);var n=r(7),o=(r(47),r(24),r(65)),d={layout:"href",data:function(){return{data:[],programs:[],imageUrl:o.l}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.querySelector("body").style.backgroundColor="rgb(61, 39, 156)",e.next=3,t.$axios.$get("/api/univ/find/"+t.$route.query.id);case 3:if(t.data=e.sent,!t.data.name){e.next=8;break}return e.next=7,t.$axios.$post("/api/courses/findPrograms",{category:t.data.name});case 7:t.programs=e.sent;case 8:case"end":return e.stop()}}),e)})))()}},l=(r(406),r(13)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.data?r("div",{staticClass:"wrapper"},[r("div",{staticClass:"d-flex flex-row flex-wrap justify-content-center"},[t.data.images?r("img",{staticClass:"img",attrs:{src:t.imageUrl+t.data.images[0].url,alt:"univ-image"}}):t._e(),t._v(" "),r("div",{staticClass:"content m-0"},[r("h3",{staticClass:"description"},[t._v("\n          "+t._s(t.data.description)+"\n        ")]),t._v(" "),r("ul",[r("li",[t._v("\n            City\n            "),r("span",[t._v(t._s(t.data.location))])]),t._v(" "),r("li",[t._v("\n            Founded\n            "),r("span",[t._v(t._s(t.data.founded))])]),t._v(" "),r("li",[t._v("\n            Int'l Students\n            "),r("span",[t._v(t._s(t.data.intStudents))])]),t._v(" "),r("li",[t._v("\n            Faculty\n            "),r("span",[t._v(t._s(t.data.faculty))])]),t._v(" "),r("li",[t._v("\n            Total Students\n            "),r("span",[t._v(t._s(t.data.totalStudents))])]),t._v(" "),r("li",[t._v("\n            Established By\n            "),r("span",[t._v(t._s(t.data.name))])])])])]),t._v(" "),r("div",{staticClass:"programs"},[r("h2",{staticClass:"mx-2"},[t._v("Programs")]),t._v(" "),t._l(t.programs,(function(t){return r("div",{key:t.name,staticClass:" d-flex flex-row flex-wrap"},[r("ProgramCard",{staticClass:"m-2",attrs:{data:t}})],1)}))],2)]):t._e()])}),[],!1,null,"b1febb86",null);e.default=component.exports;installComponents(component,{ProgramCard:r(382).default})}}]);