(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Account"],{"0060":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("wolf-modal",{staticStyle:{display:"block"},attrs:{modalSize:"default"},on:{close:t.gotoHome}},[e("span",{staticStyle:{"padding-top":"10px"},attrs:{slot:"head"},slot:"head"},[t._v("Change your password")]),e("div",{attrs:{slot:"body"},slot:"body"},[e("floating-input",{attrs:{id:"passsword",type:"password",validator:"required",name:"Current Password",label:"Your current passsword"},model:{value:t.credentials.password,callback:function(a){t.$set(t.credentials,"password",a)},expression:"credentials.password"}}),e("floating-input",{attrs:{id:"new-password",type:"password",validator:"required",name:"password",label:"Type new password"},model:{value:t.credentials.newPassword,callback:function(a){t.$set(t.credentials,"newPassword",a)},expression:"credentials.newPassword"}}),e("floating-input",{attrs:{id:"new-password-re",type:"password",validator:"required|confirmed:password",name:"Password Confirmation","data-vv-as":"password",label:"Re-type the new password"},model:{value:t.credentials.passwordConf,callback:function(a){t.$set(t.credentials,"passwordConf",a)},expression:"credentials.passwordConf"}}),t.invalidPassword?e("div",{staticClass:"w-100"},[e("div",{staticClass:"alert alert-danger"},[t._v(" Invalid Current Password. Try again ")])]):t._e(),t.passwordChanged?e("div",{staticClass:"w-100"},[e("div",{staticClass:"alert alert-success"},[t._v(" Your Password has been changed successfully. ")])]):t._e(),e("wolf-button",{attrs:{loadText:"please wait...",caption:"Change Password",classes:"btn btn-block btn-primary",disabler:!t.credentials.password,activator:"settingaccountpassword"},on:{"btn-role":t.changePassword}})],1)])},i=[],n={name:"ChangePassword",data:function(){return{currentUser:{},credentials:{newPassword:null,password:null,passwordConf:null},invalidPassword:!1,passwordChanged:!1}},methods:{gotoHome:function(){this.toggleModal(),this.$router.push({name:"account"})},changePassword:function(){var t=this,a=this.formData(this.credentials),e="user/change-account-password",s={formData:a,url:e};this.$store.dispatch("postRequest",s).then((function(a){a.data.invalid_password?t.invalidPassword=!0:(t.invalidPassword=!1,t.passwordChanged=!0,t.clearObject(t.credentials))})).catch((function(t){return console.log(t)}))}}},r=n,l=e("2877"),o=Object(l["a"])(r,s,i,!1,null,null,null);a["default"]=o.exports},1276:function(t,a,e){"use strict";var s=e("d784"),i=e("44e7"),n=e("825a"),r=e("1d80"),l=e("4840"),o=e("8aa5"),c=e("50c4"),d=e("14c3"),u=e("9263"),p=e("d039"),m=[].push,v=Math.min,f=4294967295,g=!p((function(){return!RegExp(f,"y")}));s("split",2,(function(t,a,e){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var s=String(r(this)),n=void 0===e?f:e>>>0;if(0===n)return[];if(void 0===t)return[s];if(!i(t))return a.call(s,t,n);var l,o,c,d=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,g=new RegExp(t.source,p+"g");while(l=u.call(g,s)){if(o=g.lastIndex,o>v&&(d.push(s.slice(v,l.index)),l.length>1&&l.index<s.length&&m.apply(d,l.slice(1)),c=l[0].length,v=o,d.length>=n))break;g.lastIndex===l.index&&g.lastIndex++}return v===s.length?!c&&g.test("")||d.push(""):d.push(s.slice(v)),d.length>n?d.slice(0,n):d}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,e){var i=r(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,i,e):s.call(String(i),a,e)},function(t,i){var r=e(s,t,this,i,s!==a);if(r.done)return r.value;var u=n(t),p=String(this),m=l(u,RegExp),h=u.unicode,C=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),b=new m(g?u:"^(?:"+u.source+")",C),w=void 0===i?f:i>>>0;if(0===w)return[];if(0===p.length)return null===d(b,p)?[p]:[];var _=0,x=0,y=[];while(x<p.length){b.lastIndex=g?x:0;var k,q=d(b,g?p:p.slice(x));if(null===q||(k=v(c(b.lastIndex+(g?0:x)),p.length))===_)x=o(p,x,h);else{if(y.push(p.slice(_,x)),y.length===w)return y;for(var $=1;$<=q.length-1;$++)if(y.push(q[$]),y.length===w)return y;x=_=k}}return y.push(p.slice(_)),y}]}),!g)},"1e03":function(t,a,e){},2336:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row gutters my-5 justify-content-center"},[t.alertDefaults.modalOpen?e("wolf-alert",{attrs:{modalTitle:t.alertDefaults.title,modalContent:t.alertDefaults.content,actionButton:t.alertDefaults.actionButton,actionButtonClasses:t.alertDefaults.classes},on:{"accept-alert":function(a){return t.toggleActions(t.alertDefaults.actionType)},close:t.closeAlert}}):t._e(),t.modalOpen?e("wolf-modal",{staticStyle:{display:"block"},attrs:{modalSize:"default",headerColor:"#c92f4e","need-footer":!1},on:{close:t.toggleModal}},[e("span",{staticStyle:{"padding-top":"10px"},attrs:{slot:"head"},slot:"head"},[t._v("Request car assistance")]),e("div",{attrs:{slot:"body"},slot:"body"},[e("form",{staticClass:"forms-sample"},[e("div",{staticClass:"form-group label-floating is-select",class:{"is-empty":!t.newRequest.car_id}},[e("label",{staticClass:"control-label"},[t._v("Select a car")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.newRequest.car_id,expression:"newRequest.car_id"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("Car")},attrs:{name:"Car",validator:"required"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.newRequest,"car_id",a.target.multiple?e:e[0])}}},t._l(t.cars,(function(a,s){return e("option",{key:"car"+s,domProps:{value:a.id}},[t._v(" "+t._s(a.plate_number+" - "+a.make)+" ")])})),0),t.errors.first("Car")?e("div",{staticClass:"invalid-requestback"},[t._v(" "+t._s(t.errors.first("Car"))+" ")]):t._e()]),e("floating-input",{attrs:{type:"textarea",name:"description",id:"description",validator:"required",label:"Describe your car's problem"},model:{value:t.newRequest.description,callback:function(a){t.$set(t.newRequest,"description",a)},expression:"newRequest.description"}}),e("div",{staticClass:"payment-option"},[e("div",{staticClass:"payment-item active-item"}),e("div",{staticClass:"payment-item"},[e("div",{staticClass:"d-flex align-items-center"},[e("img",{staticClass:"payment-cards",attrs:{src:t.publicPath+"img/bank_cards.png",alt:""}}),e("span",[t._v("Any bank cards")])])]),e("div",{staticClass:"payment-item"},[e("div",{staticClass:"d-flex align-items-center"},[e("img",{staticClass:"payment-cards",attrs:{src:t.publicPath+"img/paypal.png",alt:""}}),e("span",[t._v("PayPal")])])]),e("div",{staticClass:"payment-item"},[e("div",{staticClass:"d-flex align-items-center"},[e("img",{staticClass:"payment-cards",attrs:{src:t.publicPath+"img/mastercard.png",alt:""}}),e("span",[t._v("Master card")])])]),e("div",{staticClass:"payment-item"},[e("div",{staticClass:"d-flex align-items-center"},[e("img",{staticClass:"payment-cards",attrs:{src:t.publicPath+"img/visa.png",alt:""}}),e("span",[t._v("Visa cards")])])])]),e("div",{staticClass:"w-100"},[e("wolf-button",{attrs:{"load-text":"",caption:"Request now","button-type":"submit",classes:"btn btn-block btn-primary",disabler:!t.newRequest.car_id||!t.newRequest.description,activator:"saving"},on:{"btn-role":t.setRequest}})],1)],1)])]):t._e(),e("div",{staticClass:"col-12"},[e("div",{staticClass:"mobile"},[e("div",{staticClass:"mobile-body"},[e("div",{staticClass:"date-container py-4",staticStyle:{"background-color":"#772c2e"}},[e("div",{staticClass:"d-flex align-items-center"},[e("img",{staticClass:"date-icon",attrs:{src:t.publicPath+"img/calendar-white.png",alt:""}}),e("span",{staticClass:"h4 date-text mb-0 ml-3"},[t._v(t._s(this.dukaHotelDate(new Date)))])])]),e("div",{staticClass:"title-container py-2",style:"background-image:url("+t.publicPath+"img/dataform_wood_pattern.jpg);padding-left:1.625rem"},[e("h4",{staticClass:"title-view-item mb-1"},[t._v("Requests History")]),e("span",{staticClass:"h5 subtitle-view-item"},[t._v(t._s(t.requests.length)+" Requests")]),e("img",{staticClass:"record-add",attrs:{src:t.publicPath+"img/add.png"},on:{click:t.toggleModal}})]),e("div",{staticClass:"bg-white"},[t._m(0),t._l(t.requests,(function(a,s){return e("div",{key:"request"+s,staticClass:"listing-content pt-3 px-3"},[e("div",{staticClass:"d-flex align-items-center",on:{"!click":function(a){return t.toggleMobileRecordActions("request"+s)}}},[e("div",{staticClass:"number-container"},[t._v(" "+t._s(t.incrementIndex(s))+" ")]),e("div",{staticClass:"details-container"},[e("h5",{staticClass:"text-dark mb-0"},[t._v(t._s(a.garage_name))]),e("h6",{staticClass:"text-primary"},[t._v(" "+t._s(t.dukaHotelDate(a.request_date))+" ")])]),e("span",{staticClass:"mx-auto"},[t._v(t._s(a.plate_number))]),e("div",{staticClass:"date-container ml-auto"},[e("span",[t._v(t._s(0==a.resolved?"Pending":"Resolved"))])])]),t.$store.state.currentRow==="request"+s?e("div",{staticClass:"row-actions"},[t._m(1,!0),t._m(2,!0)]):t._e()])}))],2)])])])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"listing-content pb-3 px-3"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"text-dark"},[e("h5",{staticClass:"mb-0"},[t._v("S/N")])]),e("div",{staticClass:"details-container"},[e("h5",{staticClass:"mb-0"},[t._v("Garage & date")])]),e("h5",{staticClass:"mx-auto mb-0"},[t._v("Car")]),e("div",{staticClass:"date-container ml-auto"},[e("span",[t._v("Status")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"icon-edit"}),t._v(" Edit record ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"icon-trash"}),t._v(" Delete record ")])}],n={name:"Requests",data:function(){return{newRequest:{id:null,lat:-1.9562495999999998,long:30.1006848,description:null},cars:[],requests:[]}},created:function(){this.getCars(),this.getRequests()},methods:{getCars:function(){var t=this;this.$store.dispatch("getRequest","get_driver_cars").then((function(a){t.cars=a.data.cars}))},getRequests:function(){var t=this;this.$store.dispatch("getRequest","get_driver_requests").then((function(a){t.requests=a.data.requests}))},setRequest:function(){var t=this;this.$validator.validateAll().then((function(a){a&&t.$store.dispatch("postRequest",{formData:t.formData(t.newRequest),url:"request"}).then((function(a){a.data.success&&(t.getRequests(),t.toggleModal(),t.clearObject(t.newRequest))}))}))}}},r=n,l=(e("aaaa"),e("2877")),o=Object(l["a"])(r,s,i,!1,null,null,null);a["default"]=o.exports},"34cc":function(t,a,e){},"44e7":function(t,a,e){var s=e("861d"),i=e("c6b6"),n=e("b622"),r=n("match");t.exports=function(t){var a;return s(t)&&(void 0!==(a=t[r])?!!a:"RegExp"==i(t))}},"48fe":function(t,a,e){},"519f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row gutters my-5 justify-content-center"},[t.alertDefaults.modalOpen?e("wolf-alert",{attrs:{modalTitle:t.alertDefaults.title,modalContent:t.alertDefaults.content,actionButton:t.alertDefaults.actionButton,actionButtonClasses:t.alertDefaults.classes},on:{"accept-alert":function(a){return t.toggleActions(t.alertDefaults.actionType)},close:t.closeAlert}}):t._e(),t.modalOpen?e("wolf-modal",{staticStyle:{display:"block"},attrs:{modalSize:"default",headerColor:"#CD161A","need-footer":!1},on:{close:t.toggleModal}},[e("span",{staticStyle:{"padding-top":"10px"},attrs:{slot:"head"},slot:"head"},[t._v("Add a new car")]),e("div",{attrs:{slot:"body"},slot:"body"},[e("form",{staticClass:"forms-sample"},[e("floating-input",{attrs:{type:"text",name:"Make",id:"make",validator:"required",label:"Car Make"},model:{value:t.newCar.make,callback:function(a){t.$set(t.newCar,"make",a)},expression:"newCar.make"}}),e("floating-input",{attrs:{type:"text",name:"model",id:"model",validator:"required",label:"Car Model"},model:{value:t.newCar.model,callback:function(a){t.$set(t.newCar,"model",a)},expression:"newCar.model"}}),e("floating-input",{attrs:{type:"number",name:"Year",id:"Year",validator:"required",label:"Released Year"},model:{value:t.newCar.year,callback:function(a){t.$set(t.newCar,"year",a)},expression:"newCar.year"}}),e("floating-input",{attrs:{type:"text",name:"plate_number",id:"plate_number",validator:"required",label:"Plate Number"},model:{value:t.newCar.plate_number,callback:function(a){t.$set(t.newCar,"plate_number",a)},expression:"newCar.plate_number"}}),e("floating-input",{attrs:{type:"textarea",name:"Comment",id:"Comment",validator:"required",label:"Write some comments(optional)"},model:{value:t.newCar.comment,callback:function(a){t.$set(t.newCar,"comment",a)},expression:"newCar.comment"}}),e("div",{staticClass:"w-100"},[e("wolf-button",{attrs:{"load-text":"",caption:"Confirm and save","button-type":"submit",classes:"btn btn-block btn-primary",disabler:!t.newCar.make||!t.newCar.plate_number,activator:"saving"},on:{"btn-role":t.addCar}})],1)],1)])]):t._e(),e("div",{staticClass:"col-12"},[e("div",{staticClass:"mobile"},[e("div",{staticClass:"mobile-body"},[e("div",{staticClass:"date-container py-4",staticStyle:{"background-color":"#772c2e"}},[e("div",{staticClass:"d-flex align-items-center"},[e("img",{staticClass:"date-icon",attrs:{src:t.publicPath+"img/calendar-white.png",alt:""}}),e("span",{staticClass:"h4 date-text mb-0 ml-3"},[t._v(t._s(this.dukaHotelDate(new Date)))])])]),e("div",{staticClass:"title-container py-2",style:"background-image:url("+t.publicPath+"img/dataform_wood_pattern.jpg);padding-left:1.625rem"},[e("h4",{staticClass:"title-view-item mb-1"},[t._v("Your Cars")]),e("span",{staticClass:"h5 subtitle-view-item"},[t._v(t._s(t.cars.length)+" cars")]),e("img",{staticClass:"record-add",attrs:{src:t.publicPath+"img/add.png"},on:{click:t.toggleModal}})]),e("div",{staticClass:"bg-white"},[t._m(0),t._l(t.cars,(function(a,s){return e("div",{key:"car"+s,staticClass:"listing-content pt-3 px-3"},[e("div",{staticClass:"d-flex align-items-center",on:{"!click":function(a){return t.toggleMobileRecordActions("car"+s)}}},[e("div",{staticClass:"number-container"},[t._v(" "+t._s(a.id)+" ")]),e("div",{staticClass:"details-container"},[e("h5",{staticClass:"text-dark mb-0"},[t._v(t._s(a.plate_number))]),e("h6",{staticClass:"text-primary"},[t._v(" "+t._s(a.make+", "+a.model+", "+a.car_year)+" ")])]),t._m(1,!0)]),t.$store.state.currentRow==="car"+s?e("div",{staticClass:"row-actions"},[e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.selectcar(a)}}},[e("i",{staticClass:"icon-edit"}),t._v(" Edit record ")]),e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.carDelete(a)}}},[e("i",{staticClass:"icon-trash"}),t._v(" Delete record ")])]):t._e()])}))],2)])])])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"listing-content pb-3 px-3"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"text-dark"},[e("h5",{staticClass:"mb-0"},[t._v("S/N")])]),e("div",{staticClass:"details-container"},[e("h5",{staticClass:"mb-0"},[t._v("Plate Number")])]),e("div",{staticClass:"date-container ml-auto"},[e("span",[t._v("Status")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"date-container ml-auto"},[e("span",[t._v("Active")])])}],n=e("5530"),r={name:"Cars",data:function(){return{newCar:{id:null,make:null,model:null,year:null,plate_number:null,comment:null},cars:[]}},created:function(){this.getCars()},methods:{getCars:function(){var t=this;this.$store.dispatch("getRequest","get_driver_cars").then((function(a){t.cars=a.data.cars}))},addCar:function(){var t=this;this.$validator.validateAll().then((function(a){a&&t.$store.dispatch("postRequest",{formData:t.formData(t.newCar),url:"add_car"}).then((function(a){a.data.error||(t.getCars(),t.clearObject(t.newCar),t.toggleModal())}))}))},deleteCar:function(){var t=this;this.$store.dispatch("getRequest","delete_car"+this.choosenRow.id).then((function(){t.getCars()}))},selectCar:function(t){this.newCar=Object(n["a"])({},t),this.toggleModal()},toggleActions:function(t){switch(t){case"car_delete":this.deleteCar();break;default:console.log("default data");break}this.alertDefaults.modalOpen=!1},carDelete:function(t){this.choosenRow=t,this.alertDefaults={title:"Deleting a car",content:"Are you sure you want to delete this car",actionType:"car_delete",actionButton:"Yes, delete",classes:"btn btn-danger",modalOpen:!0}}}},l=r,o=e("2877"),c=Object(o["a"])(l,s,i,!1,null,null,null);a["default"]=c.exports},"5c9c":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"min-vh-100 position-relative"},[e("router-link",{staticClass:"btn bg-white rounded-circle",staticStyle:{width:"35px",height:"35px","line-height":"35px",padding:"unset",position:"absolute",top:"12px",left:"17px","z-index":"9"},attrs:{to:{name:"landing"}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),e("path",{attrs:{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}})])]),e("svg",{staticClass:"floating-shape top-0 right-0 position-fixed",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"181",height:"76.649",viewBox:"0 0 181 76.649"}},[e("defs",[e("linearGradient",{attrs:{id:"linear-gradient",x1:"1",x2:"0.287",y2:"1.279",gradientUnits:"objectBoundingBox"}},[e("stop",{attrs:{offset:"0","stop-color":"#ff6f41"}}),e("stop",{attrs:{offset:"1","stop-color":"#fc3997"}})],1),e("linearGradient",{attrs:{id:"linear-gradient-2",y1:"0.065",x2:"0.5",y2:"1","xlink:href":"#linear-gradient"}})],1),e("g",{attrs:{id:"Group_2831","data-name":"Group 2831",transform:"translate(-575 -3003)"}},[e("path",{attrs:{id:"Intersection_14","data-name":"Intersection 14",d:"M0,0H177a4,4,0,0,1,4,4V26.918c-15.161,1.061-35.15,5.038-61.457,13.929-15.874,5.364-29.864,7.612-42.184,7.61C31.7,48.451,9.134,17.561,0,0Z",transform:"translate(575 3003)",opacity:"0.2",fill:"url(#linear-gradient)"}}),e("path",{attrs:{id:"Intersection_13","data-name":"Intersection 13",d:"M69.06,43.168C45.119,19.316,17.025,6.275,0,0H145.005a4,4,0,0,1,4,4V76.372c-2.221.158-4.716.277-7.46.277C124.537,76.649,98.038,72.037,69.06,43.168Z",transform:"translate(606.995 3003)",opacity:"0.2",fill:"url(#linear-gradient-2)"}})])]),e("div",{staticClass:"container-fluid min-vh-100"},[e("div",{staticClass:"row min-vh-100"},[e("div",{staticClass:"col-12 my-auto"},[e("div",{staticClass:"w-100"},[t._m(0),e("h5",{staticClass:"mt-4 mb-2 text-center font-weight-bold"},[t._v(" Sign up as a driver ")]),e("form",{ref:"userForm",attrs:{autocomplete:"off"},on:{submit:function(a){return a.preventDefault(),t.signUp(a)}}},[e("floating-input",{attrs:{id:"full-name",name:"Full name",validator:"required",type:"text",label:"Your name"},model:{value:t.user.fullname,callback:function(a){t.$set(t.user,"fullname",a)},expression:"user.fullname"}}),e("floating-input",{attrs:{id:"email",type:"email",validator:"required|email",name:"email",label:"Email address"},model:{value:t.user.email,callback:function(a){t.$set(t.user,"email",a)},expression:"user.email"}}),t.emailError?e("span",{staticClass:"text-danger"},[t._v("There is account associated with this email address")]):t._e(),e("floating-input",{attrs:{id:"Phone",name:"Phone Number",label:"Mobile number",type:"number",validator:"required"},model:{value:t.user.phone_number,callback:function(a){t.$set(t.user,"phone_number",a)},expression:"user.phone_number"}}),t.phoneError?e("span",{staticClass:"text-danger"},[t._v("Phone number alreadyin use by different account")]):t._e(),e("floating-input",{attrs:{id:"password",type:"password",validator:"required",name:"password",label:"Password"},model:{value:t.user.password,callback:function(a){t.$set(t.user,"password",a)},expression:"user.password"}}),e("div",{staticClass:"form-group"},[e("wolf-button",{attrs:{"load-text":"",caption:"Register","button-type":"submit",classes:"btn btn-block btn-primary",disabler:!t.user.fullname,activator:"registering"},on:{"btn-role":t.signUp}})],1),e("div",{staticClass:"mb-4 text-center"},[t._v(" Already have account"),e("router-link",{staticClass:"text-primary",attrs:{to:{name:"login"}}},[t._v(" Login")])],1)],1)])])])])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"text-center w-100 mt-2"},[s("img",{staticClass:"img-fluid",staticStyle:{cursor:"pointer",width:"35% !important"},attrs:{src:e("cf05")}})])}],n={name:"SignUp",data:function(){return{user:{fullname:null,email:null,phone_number:null,password:null},emailSent:!1,emailError:!1,phoneError:!1,agreed:!0}},created:function(){},methods:{signUp:function(){var t=this;this.$validator.validateAll().then((function(a){a&&t.$store.dispatch("logout").then((function(){var a=t.formData(t.user),e="register",s={formData:a,url:e};t.emailError=!1,t.phoneError=!1,t.$store.dispatch("authRequest",s).then((function(a){a.data.email_error?t.emailError=!0:a.data.phone_error?t.phoneError=!0:a.data.success&&t.$router.push({name:"account"})}))}))}))}}},r=n,l=e("2877"),o=Object(l["a"])(r,s,i,!1,null,null,null);a["default"]=o.exports},"5db4":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pt-5"},[t._m(0),e("div",{staticClass:"row cards"},[e("div",{staticClass:"col-6 px-2"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body px-1"},[e("div",{staticClass:"d-flex align-items-center"},[e("img",{staticClass:"card-img",attrs:{src:t.publicPath+"img/total.png",alt:""}}),e("div",{staticClass:"d-block"},[e("span",{staticClass:"mb-0 d-block font-weight-bold"},[t._v("Total Requests")]),e("h5",{staticClass:"mb-0 d-block text-right"},[t._v(" "+t._s(t.requests.total||0)+" ")])])])])])]),e("div",{staticClass:"col-6 px-1"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body px-1"},[e("div",{staticClass:"d-flex align-items-center"},[e("img",{staticClass:"card-img",attrs:{src:t.publicPath+"img/pending.png",alt:""}}),e("div",{staticClass:"d-block"},[e("span",{staticClass:"mb-0 d-block font-weight-bold"},[t._v("Pending Requests")]),e("h5",{staticClass:"mb-0 d-block text-right"},[t._v(" "+t._s(t.requests.pending||0)+" ")])])])])])])]),e("div",{staticClass:"row cards"},[e("div",{staticClass:"col-6 px-2"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body px-1"},[e("div",{staticClass:"d-flex align-items-center"},[e("img",{staticClass:"card-img",attrs:{src:t.publicPath+"img/accepted.png",alt:""}}),e("div",{staticClass:"d-block"},[e("span",{staticClass:"mb-0 d-block font-weight-bold"},[t._v("Accepted ones")]),e("h5",{staticClass:"mb-0 d-block text-right"},[t._v(" "+t._s(t.requests.resolved||0)+" ")])])])])])]),e("div",{staticClass:"col-6 px-1"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body px-1"},[e("div",{staticClass:"d-flex align-items-center"},[e("img",{staticClass:"card-img",attrs:{src:t.publicPath+"img/denied.png",alt:""}}),e("div",{staticClass:"d-block"},[e("span",{staticClass:"mb-0 d-block font-weight-bold"},[t._v("Canceled Ones")]),e("h5",{staticClass:"mb-0 d-block text-right"},[t._v(" "+t._s(t.requests.canceled||0)+" ")])])])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 px-2"},[e("div",{staticClass:"mobile"},[e("div",{staticClass:"mobile-body"},[e("div",{staticClass:"bg-white"},[e("h5",{staticClass:"pt-3 pl-3 text-primary"},[t._v("Garages near you")]),t._m(1),t._l(t.garages,(function(a,s){return e("div",{key:"garage"+s,staticClass:"listing-content pt-3 px-3"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"number-container"},[t._v(" "+t._s(t.incrementIndex(s))+" ")]),e("div",{staticClass:"details-container"},[e("h5",{staticClass:"text-dark mb-0"},[t._v(t._s(a.garage_name))])]),e("div",{staticClass:"date-container ml-auto"},[e("span",[t._v(t._s(a.distance.toFixed(3))+" km")])])])])}))],2)])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row pt-2"},[e("div",{staticClass:"col-12"},[e("h5",{staticClass:"mb-2"},[t._v("Requests overview")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"listing-content pb-3 px-3"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"text-dark"},[e("h6",{staticClass:"mb-0"},[t._v("S/N")])]),e("div",{staticClass:"details-container"},[e("h5",{staticClass:"mb-0"},[t._v("Garage")])]),e("div",{staticClass:"date-container ml-auto"},[e("span",[t._v("Distance")])])])])}],n=e("5530"),r={name:"DriverAccount",data:function(){return{user:{},requests:{},garages:[]}},created:function(){var t=this;document.body.classList.remove("modal-open");var a=this.isEmpty(this.$store.state.coords)?{lat:-1.9562495999999998,long:30.1006848}:this.$store.state.coords;this.$store.dispatch("postRequest",{url:"dashboard",formData:this.formData(a)}).then((function(a){t.requests=Object(n["a"])({},a.data.requests),t.garages=a.data.garages}))},methods:{}},l=r,o=(e("d225"),e("2877")),c=Object(o["a"])(l,s,i,!1,null,"05e11d74",null);a["default"]=c.exports},"855a":function(t,a,e){},"98da":function(t,a,e){"use strict";e("855a")},a55b:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"min-vh-100 position-relative"},[e("router-link",{staticClass:"btn bg-white rounded-circle",staticStyle:{width:"35px",height:"35px","line-height":"35px",padding:"unset",position:"absolute",top:"12px",left:"17px"},attrs:{to:{name:"landing"}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),e("path",{attrs:{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}})])]),e("svg",{staticClass:"floating-shape top-0 right-0 position-fixed",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"181",height:"76.649",viewBox:"0 0 181 76.649"}},[e("defs",[e("linearGradient",{attrs:{id:"linear-gradient",x1:"1",x2:"0.287",y2:"1.279",gradientUnits:"objectBoundingBox"}},[e("stop",{attrs:{offset:"0","stop-color":"#ff6f41"}}),e("stop",{attrs:{offset:"1","stop-color":"#fc3997"}})],1),e("linearGradient",{attrs:{id:"linear-gradient-2",y1:"0.065",x2:"0.5",y2:"1","xlink:href":"#linear-gradient"}})],1),e("g",{attrs:{id:"Group_2831","data-name":"Group 2831",transform:"translate(-575 -3003)"}},[e("path",{attrs:{id:"Intersection_14","data-name":"Intersection 14",d:"M0,0H177a4,4,0,0,1,4,4V26.918c-15.161,1.061-35.15,5.038-61.457,13.929-15.874,5.364-29.864,7.612-42.184,7.61C31.7,48.451,9.134,17.561,0,0Z",transform:"translate(575 3003)",opacity:"0.2",fill:"url(#linear-gradient)"}}),e("path",{attrs:{id:"Intersection_13","data-name":"Intersection 13",d:"M69.06,43.168C45.119,19.316,17.025,6.275,0,0H145.005a4,4,0,0,1,4,4V76.372c-2.221.158-4.716.277-7.46.277C124.537,76.649,98.038,72.037,69.06,43.168Z",transform:"translate(606.995 3003)",opacity:"0.2",fill:"url(#linear-gradient-2)"}})])]),e("div",{staticClass:"container-fluid min-vh-100"},[e("div",{staticClass:"row min-vh-100 justify-content-center"},[e("div",{staticClass:"col-12 my-auto"},[e("div",{staticClass:"w-100"},[t._m(0),e("h5",{staticClass:"my-2 mt-4 text-center font-weight-bold"},[t._v("Login")]),e("form",{attrs:{autocomplete:"off"},on:{submit:function(a){return a.preventDefault(),t.logUser(a)}}},[t.invalidLogin?e("div",{staticClass:"alert alert-danger mb-2"},[e("span",[t._v("Invalid Password or username")])]):t._e(),e("floating-input",{attrs:{id:"Username",type:"text",label:"Your username",name:"Username",validator:"required"},model:{value:t.credentials.username,callback:function(a){t.$set(t.credentials,"username",a)},expression:"credentials.username"}}),e("floating-input",{attrs:{type:"password",validator:"required",name:"password",label:"Your Password",id:"password"},model:{value:t.credentials.password,callback:function(a){t.$set(t.credentials,"password",a)},expression:"credentials.password"}}),e("div",{staticClass:"mb-4 text-center"},[e("router-link",{attrs:{to:{}}},[t._v("Forgot your password?")])],1),e("div",{staticClass:"form-group"},[e("wolf-button",{attrs:{"load-text":"",caption:"Login","button-type":"submit",classes:"btn btn-block btn-primary",disabler:!t.credentials.username||!t.credentials.password,activator:"signing"},on:{"btn-role":t.logUser}})],1),e("div",{staticClass:"text-center"},[t._v(" Don't have a driver account?"),e("router-link",{staticClass:"text-primary",attrs:{to:{name:"signup"}}},[t._v(" Sign up now")])],1)],1)])])])])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"text-center w-100"},[s("img",{staticClass:"img-fluid",staticStyle:{cursor:"pointer",width:"35% !important"},attrs:{src:e("cf05")}})])}],n={name:"Login",data:function(){return{credentials:{username:null,password:null},invalidLogin:!1,loginSucceed:!1}},created:function(){},methods:{logUser:function(){var t=this;this.$validator.validateAll().then((function(a){if(a){var e=t.formData(t.credentials);t.$store.dispatch("logUser",e).then((function(a){a.data.error?(t.invalidLogin=!0,t.loginSucceed=!1):(t.invalidLogin=!1,t.loginSucceed=!0,t.$router.push({name:"account"}))})).catch((function(t){return console.log(t)}))}}))}}},r=n,l=(e("c8a5"),e("2877")),o=Object(l["a"])(r,s,i,!1,null,"7c9cd58d",null);a["default"]=o.exports},aaaa:function(t,a,e){"use strict";e("1e03")},bede:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"min-vh-100 position-relative bg-white"},[e("svg",{staticClass:"floating-shape top-0 right-0 position-fixed",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"181",height:"76.649",viewBox:"0 0 181 76.649"}},[e("defs",[e("linearGradient",{attrs:{id:"linear-gradient",x1:"1",x2:"0.287",y2:"1.279",gradientUnits:"objectBoundingBox"}},[e("stop",{attrs:{offset:"0","stop-color":"#ff6f41"}}),e("stop",{attrs:{offset:"1","stop-color":"#fc3997"}})],1),e("linearGradient",{attrs:{id:"linear-gradient-2",y1:"0.065",x2:"0.5",y2:"1","xlink:href":"#linear-gradient"}})],1),e("g",{attrs:{id:"Group_2831","data-name":"Group 2831",transform:"translate(-575 -3003)"}},[e("path",{attrs:{id:"Intersection_14","data-name":"Intersection 14",d:"M0,0H177a4,4,0,0,1,4,4V26.918c-15.161,1.061-35.15,5.038-61.457,13.929-15.874,5.364-29.864,7.612-42.184,7.61C31.7,48.451,9.134,17.561,0,0Z",transform:"translate(575 3003)",opacity:"0.2",fill:"url(#linear-gradient)"}}),e("path",{attrs:{id:"Intersection_13","data-name":"Intersection 13",d:"M69.06,43.168C45.119,19.316,17.025,6.275,0,0H145.005a4,4,0,0,1,4,4V76.372c-2.221.158-4.716.277-7.46.277C124.537,76.649,98.038,72.037,69.06,43.168Z",transform:"translate(606.995 3003)",opacity:"0.2",fill:"url(#linear-gradient-2)"}})])]),e("div",{staticClass:"container-fluid min-vh-100"},[e("div",{staticClass:"row min-vh-100 justify-content-center"},[e("div",{staticClass:"col-12 my-auto"},[e("div",{staticClass:"mb-3 w-100"},[t._m(0),t._m(1),e("div",{staticClass:"pt-3 1-100"},[e("router-link",{staticClass:"btn btn-outline-primary btn-block mb-3",staticStyle:{background:"rgba(39, 43, 65, 0.15)",color:"#272b41"},attrs:{to:{name:"login"}}},[t._v("Login")]),e("h5",{staticClass:"mb-0"},[t._v("Lorem, ipsum dolor.")]),e("p",[t._v(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, a! ")]),e("router-link",{staticClass:"btn btn-primary ml-auto btn-block",attrs:{to:{name:"signup"}}},[t._v("Register")])],1)])])])]),e("svg",{staticClass:"floating-shape bottom-0 position-fixed",staticStyle:{transform:"rotate(180deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"181",height:"76.649",viewBox:"0 0 181 76.649"}},[e("defs",[e("linearGradient",{attrs:{id:"linear-gradient",x1:"1",x2:"0.287",y2:"1.279",gradientUnits:"objectBoundingBox"}},[e("stop",{attrs:{offset:"0","stop-color":"#ff6f41"}}),e("stop",{attrs:{offset:"1","stop-color":"#fc3997"}})],1),e("linearGradient",{attrs:{id:"linear-gradient-2",y1:"0.065",x2:"0.5",y2:"1","xlink:href":"#linear-gradient"}})],1),e("g",{attrs:{id:"Group_2831","data-name":"Group 2831",transform:"translate(-575 -3003)"}},[e("path",{attrs:{id:"Intersection_14","data-name":"Intersection 14",d:"M0,0H177a4,4,0,0,1,4,4V26.918c-15.161,1.061-35.15,5.038-61.457,13.929-15.874,5.364-29.864,7.612-42.184,7.61C31.7,48.451,9.134,17.561,0,0Z",transform:"translate(575 3003)",opacity:"0.2",fill:"url(#linear-gradient)"}}),e("path",{attrs:{id:"Intersection_13","data-name":"Intersection 13",d:"M69.06,43.168C45.119,19.316,17.025,6.275,0,0H145.005a4,4,0,0,1,4,4V76.372c-2.221.158-4.716.277-7.46.277C124.537,76.649,98.038,72.037,69.06,43.168Z",transform:"translate(606.995 3003)",opacity:"0.2",fill:"url(#linear-gradient-2)"}})])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"text-center w-100"},[s("img",{staticClass:"img-fluid",staticStyle:{cursor:"pointer",width:"35% !important"},attrs:{src:e("cf05")}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pt-3"},[e("h4",{staticClass:"text-center font-weight-bold mb-1"},[t._v("Mobo Garage")]),e("p",[t._v(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, a! ")])])}],n=(e("ac1f"),e("1276"),{name:"Landing",data:function(){return{}},created:function(){this.userLogged&&(window.location.href=window.location.href.split("#")[0]+"#/driver-account")},methods:{}}),r=n,l=(e("98da"),e("2877")),o=Object(l["a"])(r,s,i,!1,null,"54f2cada",null);a["default"]=o.exports},c8a5:function(t,a,e){"use strict";e("48fe")},d225:function(t,a,e){"use strict";e("34cc")}}]);
//# sourceMappingURL=Account.83342134.js.map