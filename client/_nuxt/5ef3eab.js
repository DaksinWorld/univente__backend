(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{368:function(e,t,r){var content=r(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("d4fb0eba",content,!0,{sourceMap:!1})},406:function(e,t,r){"use strict";r(368)},407:function(e,t,r){var n=r(45)(!1);n.push([e.i,".custom-file-upload[data-v-50de97c5]{border:1px solid #ccc;display:inline-block;padding:6px 12px;cursor:pointer;width:100%}input[type=file][data-v-50de97c5]{display:none}",""]),e.exports=n},439:function(e,t,r){"use strict";r.r(t);var n=r(7),o=(r(47),r(14),r(28),r(29),r(21),r(39),r(24),r(65)),l={layout:"admin",components:{"ckeditor-nuxt":function(){return r.e(0).then(r.t.bind(null,426,7))}},data:function(){return{data:[],description:"",name:"",file:"",color:"",vhtml:"",iconUrl:"",imageUrl:o.k}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/api/admission/find/"+e.$route.params.id);case 2:e.data=t.sent,data=e.data,e.description=data.description,e.name=data.name,e.vhtml=data.htmlText,e.color=data.color,e.iconUrl=data.iconUrl;case 9:case"end":return t.stop()}}),t)})))()},methods:{SubmitHandler:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,n=new FormData,""!==t.file&&n.append("file",t.file),n.append("name",t.name),n.append("htmlText",t.vhtml),n.append("description",t.description),n.append("color",t.color),n.append("iconUrl",t.iconUrl),r.next=11,t.$axios.$patch("/api/admission/"+t.$route.params.id,n,{headers:{Authorization:"Bearer "+localStorage.getItem("jwt"),"Content-Type":"multipart/form-data"}});case 11:t.$store.dispatch("setMessage",{value:"Admission updated",type:"primary"}),r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(1),r.next=18,t.$store.dispatch("setMessage",{value:r.t0,type:"danger"});case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()},getFile:function(){this.file=this.$refs.file.files[0]},deleteProduct:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.$delete("/api/admission/"+e.$route.params.id,{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}});case 3:e.$store.dispatch("setMessage",{value:"Admission deleted",type:"primary"}),e.$router.push("/admin"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.$store.dispatch("setMessage",{value:t.t0,type:"danger"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},c=(r(406),r(13)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.SubmitHandler.apply(null,arguments)}}},[r("label",[e._v("Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),r("label",[e._v("Description")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),e._v(" "),r("label",[e._v("Html Text")]),e._v(" "),r("client-only",{attrs:{placeholder:"loading..."}},[r("ckeditor-nuxt",{model:{value:e.vhtml,callback:function(t){e.vhtml=t},expression:"vhtml"}})],1),e._v(" "),r("label",[e._v("Color")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.color,expression:"color"}],staticClass:"form-control",attrs:{type:"color",placeholder:"Description"},domProps:{value:e.color},on:{input:function(t){t.target.composing||(e.color=t.target.value)}}}),e._v(" "),r("label",[e._v("Icon Svg")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.iconUrl,expression:"iconUrl"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Description"},domProps:{value:e.iconUrl},on:{input:function(t){t.target.composing||(e.iconUrl=t.target.value)}}}),e._v(" "),r("label",[e._v("Image")]),e._v(" "),r("label",[e._v("Image")]),e._v(" "),r("label",{staticClass:"custom-file-upload",attrs:{for:"file-upload"}},[e._v("\n      Upload Image\n    ")]),e._v(" "),r("input",{ref:"file",staticClass:"form-control",attrs:{id:"file-upload",type:"file"},on:{change:e.getFile}}),e._v(" "),r("button",{staticClass:"btn btn-primary mt-5 w-100",attrs:{type:"submit"}},[e._v("Submit")])],1),e._v(" "),r("button",{staticClass:"btn btn-danger my-5",on:{click:e.deleteProduct}},[e._v("Delete")])])}),[],!1,null,"50de97c5",null);t.default=component.exports}}]);