(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{372:function(e,t,r){var content=r(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("d6e4e0fa",content,!0,{sourceMap:!1})},414:function(e,t,r){"use strict";r(372)},415:function(e,t,r){var n=r(45)(!1);n.push([e.i,".custom-file-upload[data-v-bf68d8dc]{border:1px solid #ccc;display:inline-block;padding:6px 12px;cursor:pointer;width:100%}input[type=file][data-v-bf68d8dc]{display:none}",""]),e.exports=n},443:function(e,t,r){"use strict";r.r(t);var n=r(7),o=(r(47),r(24),r(21),r(39),r(14),r(66),r(65)),l={layout:"admin",data:function(){return{data:[],response:"",name:"",degree:"",programs:"",fieldOfStudy:"",description:"",price:"",language:"",location:"",duration:"",foundationCoursePrice:"",form:[],degreeData:o.h,fieldOfStudyData:o.j,programsData:o.n}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/api/product/find/"+e.$route.params.id);case 2:e.data=t.sent,e.name=e.data.name,e.fieldOfStudy=e.data.fieldOfStudy,e.programs=e.data.programs,e.degree=e.data.degree,e.description=e.data.description,e.price=e.data.price,e.language=e.data.language,e.location=e.data.location,e.duration=e.data.duration,e.foundationCoursePrice=e.data.foundationCoursePrice,e.file=e.data.images;case 14:case"end":return t.stop()}}),t)})))()},methods:{SubmitHandler:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,n=new FormData,""!==t.file&&n.append("file",t.file),n.append("name",t.name),n.append("degree",t.degree),n.append("programs",t.programs),n.append("fieldOfStudy",t.fieldOfStudy),n.append("description",t.description),n.append("price",t.price),n.append("createdAt",Date.now().toString()),n.append("language",t.language),n.append("location",t.location),n.append("duration",t.duration),n.append("foundationCoursePrice",t.foundationCoursePrice),r.next=17,t.$axios.$patch("/api/product/"+t.$route.params.id,n,{headers:{Authorization:"Bearer "+localStorage.getItem("jwt"),"Content-Type":"multipart/form-data"}});case 17:t.$store.dispatch("setMessage",{value:o.c,type:"primary"}),r.next=24;break;case 20:return r.prev=20,r.t0=r.catch(1),r.next=24,t.$store.dispatch("setMessage",{value:r.t0,type:"danger"});case 24:case"end":return r.stop()}}),r,null,[[1,20]])})))()},getFile:function(){this.file=this.$refs.file.files[0]},deleteProduct:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.$delete("/api/product/"+e.$route.params.id,{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}});case 3:e.$store.dispatch("setMessage",{value:o.b,type:"primary"}),e.$router.push("/admin"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.$store.dispatch("setMessage",{value:t.t0,type:"danger"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},d=(r(414),r(13)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.data?r("div",{staticClass:"container"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.SubmitHandler.apply(null,arguments)}}},[r("label",[e._v("Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.data.name},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),r("label",[e._v("Degree")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.degree,expression:"degree"}],staticClass:"form-control",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.degree=t.target.multiple?r:r[0]}}},e._l(e.degreeData,(function(t,i){return r("option",{key:i,domProps:{value:t}},[e._v(e._s(t))])})),0),e._v(" "),r("label",[e._v("Field Of Study")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.fieldOfStudy,expression:"fieldOfStudy"}],staticClass:"form-control",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.fieldOfStudy=t.target.multiple?r:r[0]}}},e._l(e.fieldOfStudyData,(function(t,i){return r("option",{key:i,domProps:{value:t}},[e._v(e._s(t))])})),0),e._v(" "),r("label",[e._v("Programs")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.programs,expression:"programs"}],staticClass:"form-control",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.programs=t.target.multiple?r:r[0]}}},e._l(e.programsData,(function(t,i){return r("option",{key:i,domProps:{value:t}},[e._v(e._s(t))])})),0),e._v(" "),r("label",[e._v("Description")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.data.description},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),e._v(" "),r("label",[e._v("Price")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.data.price},domProps:{value:e.price},on:{input:function(t){t.target.composing||(e.price=t.target.value)}}}),e._v(" "),r("label",[e._v("Language")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.language,expression:"language"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.data.language},domProps:{value:e.language},on:{input:function(t){t.target.composing||(e.language=t.target.value)}}}),e._v(" "),r("label",[e._v("Location")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.data.location},domProps:{value:e.location},on:{input:function(t){t.target.composing||(e.location=t.target.value)}}}),e._v(" "),r("label",[e._v("Duration")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.duration,expression:"duration"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.data.duration},domProps:{value:e.duration},on:{input:function(t){t.target.composing||(e.duration=t.target.value)}}}),e._v(" "),r("label",[e._v("Foundation Course Price")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.foundationCoursePrice,expression:"foundationCoursePrice"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.data.foundationCoursePrice},domProps:{value:e.foundationCoursePrice},on:{input:function(t){t.target.composing||(e.foundationCoursePrice=t.target.value)}}}),e._v(" "),r("label",[e._v("Image")]),e._v(" "),r("label",{staticClass:"custom-file-upload",attrs:{for:"file-upload"}},[e._v("\n      Upload Image\n    ")]),e._v(" "),r("input",{ref:"file",staticClass:"form-control",attrs:{id:"file-upload",type:"file"},on:{change:e.getFile}}),e._v(" "),e.data.images?r("img",{attrs:{width:"100",height:"130",src:"/images/"+e.data.images[1].url,alt:"image"}}):e._e(),e._v(" "),r("button",{staticClass:"btn btn-primary mt-5 w-100",attrs:{type:"submit"}},[e._v("Submit")])]),e._v(" "),r("button",{staticClass:"btn btn-danger my-5",on:{click:e.deleteProduct}},[e._v("Delete")])]):e._e()}),[],!1,null,"bf68d8dc",null);t.default=component.exports}}]);