(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return l.p+"js/"+({Account:"Account"}[t]||t)+"."+{Account:"d2b4cabf"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={Account:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({Account:"Account"}[t]||t)+"."+{Account:"bd8d1628"}[t]+".css",o=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===a||u===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],m.parentNode.removeChild(m),n(i)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(m);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0906":function(t,e,n){"use strict";n("1d87")},"1d87":function(t,e,n){},"399a":function(t,e,n){},"4a33":function(t,e,n){"use strict";n("5e69")},5493:function(t,e,n){"use strict";n("399a")},"56d7":function(t,e,n){"use strict";n.r(e);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-wrapper",attrs:{id:"app-wrapper"}},[n("CustomerAside"),n("div",{staticClass:"page-content"},[t.userLogged?n("HeaderCustomer"):t._e(),n("div",{staticClass:"main-container",class:{"px-0":t.isMobile&&"account"!=t.$route.name}},[n("div",{staticClass:"app-content pt-5"},[t.$store.state.offlineMode?n("Offline"):n("router-view")],1)])],1),t.$store.state.isLoading&&null===t.$store.state.activeBtn&&!this.$store.state.driver?n("div",{attrs:{id:"loading-wrapper"}},[t._m(0)]):t._e(),t.driver||this.$store.state.driver?n("bottom-drawer",[n("img",{staticClass:"img-fluid mx-auto",attrs:{slot:"overlaycontent",src:t.publicPath+"img/loading.gif"},slot:"overlaycontent"}),n("div",{attrs:{slot:"contents"},slot:"contents"},[n("div",{staticClass:"text-center w-100"},[n("h5",{staticClass:"font-weight-bold text-primary mb-0"},[t._v(" Waiting for Driver's reply... ")]),n("hr"),n("h6",[t._v("You have a pending request")]),n("div",{staticClass:"border py-2 px-3"},[n("p",{staticClass:"mb-0"},[t._v("Driver Name: "+t._s(t.driver.firstname||"N/A"))]),n("p",{staticClass:"mb-0"},[t._v("Phone Number: "+t._s(t.driver.phone||"N/A"))])]),n("div",{staticClass:"d-flex"},[n("div",{staticClass:"bg-white img-thumbnail rounded-circle mx-auto",staticStyle:{padding:"6px",width:"45px",height:"45px"},on:{click:t.cancelRequest}},[n("img",{staticClass:"img-fluid",attrs:{src:t.publicPath+"img/icons_delete.png",alt:""}})])]),n("p",{staticClass:"mt-2",staticStyle:{color:"#000 !important"}},[t._v("Cancel this Request")])])])]):t._e()],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-border",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header pl-1 align-items-center",class:{"map-header":"map"===t.currentRouteName}},[n("div",{staticClass:"toggle-btns"},[n("a",{attrs:{id:"toggle-sidebar",href:"javascript:void(0)"},on:{click:t.toggleSideBar}},[n("img",{staticClass:"img img-fluid",staticStyle:{width:"35px"},attrs:{src:t.publicPath+"img/menu.png"}})])]),"map"!==t.currentRouteName?n("div",{staticClass:"d-flex w-100 pl-3 align-items-center"},[n("h4",{staticClass:"font-weight-bold mb-0 text-primary ml-2"},[t._v("YEGO Cabs ltd")]),n("a",{staticClass:"ml-auto",attrs:{href:"javascript:void(0)"}},[n("img",{staticStyle:{width:"28px",height:"28px"},attrs:{src:t.publicPath+"img/avatar.png",alt:"User Account"}})])]):t._e()])},s=[],l=(n("b0c0"),{name:"Header",data:function(){return{}},created:function(){},computed:{currentRouteName:function(){return this.$route.name}},methods:{togglePinned:function(){document.getElementById("app-wrapper").classList.toggle("pinned")},toggleSideBar:function(){document.getElementById("app-wrapper").classList.toggle("toggled"),this.$store.state.toggled=!this.$store.state.toggled}}}),c=l,u=(n("0906"),n("2877")),d=Object(u["a"])(c,i,s,!1,null,null,null),m=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"sidebar-wrapper",attrs:{id:"sidebar"}},[t.$store.state.toggled?n("div",{staticClass:"modal fade show",staticStyle:{background:"rgba(0, 0, 0, 0.2)",display:"block","z-index":"-1",width:"100vw"},attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-modal":"true"},on:{click:t.toggleSideBar}}):t._e(),n("div",{staticClass:"sidebar-brand d-flex align-items-center mb-0"},[n("a",{staticClass:"logo",attrs:{href:"javascript:void(0)"}},[n("img",{attrs:{src:t.publicPath+"img/avatar.png",alt:"User Account"}})]),n("div",{staticClass:"text-white"},[n("span",{staticClass:"d-block"},[t._v(t._s(t.$store.state.user.firstname+" "+t.$store.state.user.lastname))]),n("span",{staticClass:"d-block"},[t._v("Tel: "+t._s(t.$store.state.user.phone))])])]),n("div",{staticClass:"slimScrollDiv",staticStyle:{position:"relative",overflow:"hidden",width:"auto",height:"100%"}},[n("div",{staticClass:"sidebar-content",staticStyle:{overflow:"hidden",width:"auto",height:"100%","overflow-y":"scroll"}},[n("div",{staticClass:"sidebar-menu"},[n("ul",[n("li",{staticClass:"header-menu pt-2"},[t._v("Navigation")]),n("li",[n("router-link",{attrs:{to:{name:"account"}}},[n("img",{staticClass:"icon-img",attrs:{src:t.publicPath+"img/home.png",alt:""}}),n("span",{staticClass:"menu-text"},[t._v("Dashboard")])])],1),n("li",[n("router-link",{attrs:{to:{name:"cars"}}},[n("img",{staticClass:"icon-img",attrs:{src:t.publicPath+"img/cars.png",alt:""}}),n("span",{staticClass:"menu-text"},[t._v("Your Cars")])])],1),n("li",[n("router-link",{attrs:{to:{name:""}}},[n("img",{staticClass:"icon-img",attrs:{src:t.publicPath+"img/requests.png",alt:""}}),n("span",{staticClass:"menu-text"},[t._v("Requests")])])],1),n("li",[n("router-link",{attrs:{to:{name:"accountchangepassword"}}},[n("img",{staticClass:"icon-img",attrs:{src:t.publicPath+"img/cog.png",alt:""}}),n("span",{staticClass:"menu-text"},[t._v("Your Profile")])])],1),n("li",[n("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.signout(e)}}},[n("img",{staticClass:"icon-img",attrs:{src:t.publicPath+"img/shutdown.png",alt:""}}),n("span",{staticClass:"menu-text"},[t._v("Logout")])])])])])])])])},f=[],g={name:"CustomerAside",data:function(){return{}},created:function(){var t=this;this.isEmpty(this.$store.state.user)&&this.userLogged&&this.$store.dispatch("getRequest","get_logged_user").then((function(e){t.$store.dispatch("setUser",e.data.user)}))},methods:{signout:function(){var t=this;this.$store.dispatch("logout").then((function(){t.$router.push({name:"landing"})}))},toggleSideBar:function(){document.getElementById("app-wrapper").classList.toggle("toggled"),this.$store.state.toggled=!this.$store.state.toggled}}},h=g,v=(n("5493"),Object(u["a"])(h,p,f,!1,null,null,null)),b=v.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"min-vh-100 position-relative bg-white"},[n("svg",{staticClass:"floating-shape top-0 right-0 position-fixed",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"181",height:"76.649",viewBox:"0 0 181 76.649"}},[n("defs",[n("linearGradient",{attrs:{id:"linear-gradient",x1:"1",x2:"0.287",y2:"1.279",gradientUnits:"objectBoundingBox"}},[n("stop",{attrs:{offset:"0","stop-color":"#ff6f41"}}),n("stop",{attrs:{offset:"1","stop-color":"#fc3997"}})],1),n("linearGradient",{attrs:{id:"linear-gradient-2",y1:"0.065",x2:"0.5",y2:"1","xlink:href":"#linear-gradient"}})],1),n("g",{attrs:{id:"Group_2831","data-name":"Group 2831",transform:"translate(-575 -3003)"}},[n("path",{attrs:{id:"Intersection_14","data-name":"Intersection 14",d:"M0,0H177a4,4,0,0,1,4,4V26.918c-15.161,1.061-35.15,5.038-61.457,13.929-15.874,5.364-29.864,7.612-42.184,7.61C31.7,48.451,9.134,17.561,0,0Z",transform:"translate(575 3003)",opacity:"0.2",fill:"url(#linear-gradient)"}}),n("path",{attrs:{id:"Intersection_13","data-name":"Intersection 13",d:"M69.06,43.168C45.119,19.316,17.025,6.275,0,0H145.005a4,4,0,0,1,4,4V76.372c-2.221.158-4.716.277-7.46.277C124.537,76.649,98.038,72.037,69.06,43.168Z",transform:"translate(606.995 3003)",opacity:"0.2",fill:"url(#linear-gradient-2)"}})])]),n("div",{staticClass:"container-fluid min-vh-100"},[n("div",{staticClass:"row min-vh-100 justify-content-center"},[n("div",{staticClass:"col-12 my-auto"},[n("div",{staticClass:"mb-3 w-100"},[n("div",{staticClass:"text-center w-100"},[n("img",{staticClass:"img-fluid",attrs:{src:t.publicPath+"img/offline.png"}}),n("h4",{staticClass:"mb-2 font-weight-bold"},[t._v("You're offline")]),n("p",[t._v(" You don't have internet connection. Please connect to the internet and try again ")]),n("a",{staticClass:"btn btn-primary mt-4",attrs:{href:t.$router.resolve(t.$route.name).href}},[t._v(" Try again ")])])])])])]),n("svg",{staticClass:"floating-shape position-fixed bottom-0",staticStyle:{transform:"rotate(180deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"181",height:"76.649",viewBox:"0 0 181 76.649"}},[n("defs",[n("linearGradient",{attrs:{id:"linear-gradient",x1:"1",x2:"0.287",y2:"1.279",gradientUnits:"objectBoundingBox"}},[n("stop",{attrs:{offset:"0","stop-color":"#ff6f41"}}),n("stop",{attrs:{offset:"1","stop-color":"#fc3997"}})],1),n("linearGradient",{attrs:{id:"linear-gradient-2",y1:"0.065",x2:"0.5",y2:"1","xlink:href":"#linear-gradient"}})],1),n("g",{attrs:{id:"Group_2831","data-name":"Group 2831",transform:"translate(-575 -3003)"}},[n("path",{attrs:{id:"Intersection_14","data-name":"Intersection 14",d:"M0,0H177a4,4,0,0,1,4,4V26.918c-15.161,1.061-35.15,5.038-61.457,13.929-15.874,5.364-29.864,7.612-42.184,7.61C31.7,48.451,9.134,17.561,0,0Z",transform:"translate(575 3003)",opacity:"0.2",fill:"url(#linear-gradient)"}}),n("path",{attrs:{id:"Intersection_13","data-name":"Intersection 13",d:"M69.06,43.168C45.119,19.316,17.025,6.275,0,0H145.005a4,4,0,0,1,4,4V76.372c-2.221.158-4.716.277-7.46.277C124.537,76.649,98.038,72.037,69.06,43.168Z",transform:"translate(606.995 3003)",opacity:"0.2",fill:"url(#linear-gradient-2)"}})])])])},w=[],C={name:"Offline"},_=C,x=(n("5a8e"),Object(u["a"])(_,y,w,!1,null,"17af6dda",null)),k=x.exports,S={name:"app",components:{HeaderCustomer:m,CustomerAside:b,Offline:k},data:function(){return{isMobile:!1,status:null}},created:function(){this.checkMobileEnv(),this.getDriverLocation()},methods:{getDriverLocation:function(){var t=this;return new Promise((function(e,n){function a(n){var a=n.coords.latitude,r=n.coords.longitude;t.$store.dispatch("setCurrentLocation",{lat:a,long:r}),e()}function r(){console.log("Error"),n()}navigator.geolocation?navigator.geolocation.getCurrentPosition(a,r):n()}))},checkMobileEnv:function(){if(matchMedia){var t=window.matchMedia("(max-width: 768px)");t.addListener(this.WidthChange),this.WidthChange(t)}},WidthChange:function(t){this.isMobile=t.matches},setActiveRouter:function(){return new Promise((function(t){var e=document.getElementsByClassName("router-link-exact-active");e.length&&(e[0].parentElement.classList.add("active"),t(!0))}))},cancelRequest:function(){var t=this,e=this.requestId||this.$store.state.requestId;this.$store.dispatch("postRequest",{formData:this.formData({requestId:e}),url:"cancel_request"}).then((function(e){e.data.success&&t.$store.dispatch("cancelRequest")}))}},updated:function(){this.setActiveRouter()},computed:{driver:function(){return this.$store.getters.driver},requestId:function(){return this.$store.getters.requestId}}},q=S,$=(n("034f"),Object(u["a"])(q,r,o,!1,null,null,null)),I=$.exports,O=(n("45fc"),n("ac1f"),n("5319"),n("8c4f")),A=n("5530"),L=n("2f62"),P=n("bc3a"),E=n.n(P),B="http://taxi.inkoko.rw/";E.a.defaults.baseURL=B,a["a"].use(L["a"]);var j=new L["a"].Store({state:{status:"",token:localStorage.getItem("token")||"",user:{},isLoading:!1,activeBtn:null,currentRow:null,toggled:!1,offlineMode:!1,drawerOpen:!1,drawerBottomOpen:!1,coords:{},pendingRequest:!1,driver:JSON.parse(localStorage.getItem("driver"))||null,requestId:localStorage.getItem("requestId")||null},mutations:{auth_request:function(t){t.status="loading",t.offlineMode=!1},auth_success:function(t,e){t.status="success",t.token=e.token,t.user=e.user},offline_mode:function(t){t.offlineMode=!0},logout:function(t){t.status="",t.token=""},set_user:function(t,e){t.user=e},set_current_location:function(t,e){t.coords=Object(A["a"])({},e)},toggle_pending_request:function(t,e){t.pendingRequest=e},cancel_request:function(t){t.driver=null,t.requestId=null,t.pendingRequest=!1}},actions:{togglePendingRequest:function(t,e){var n=t.commit;return new Promise((function(t){localStorage.setItem("requestId",e.data.requestId),localStorage.setItem("driver",JSON.stringify(e.data.driver)),n("toggle_pending_request",e.bool),t()}))},cancelRequest:function(t){var e=t.commit;return new Promise((function(t){e("cancel_request"),localStorage.removeItem("driver"),localStorage.removeItem("requestId"),t()}))},setUser:function(t,e){var n=t.commit;return new Promise((function(t){n("set_user",e),t()}))},setCurrentLocation:function(t,e){var n=t.commit;return new Promise((function(t){n("set_current_location",e),t()}))},authRequest:function(t,e){var n=t.commit;return new Promise((function(t,a){n("auth_request"),E()({url:e.url,data:e.formData,method:"POST"}).then((function(e){var a=e.data.token;a&&(localStorage.removeItem("token"),localStorage.setItem("token",a),E.a.defaults.headers.common["Authorization"]=a,n("auth_success",e.data)),t(e)})).catch((function(t){t.response||n("offline_mode"),localStorage.removeItem("token"),a(t)}))}))},logUser:function(t,e){var n=t.commit;return new Promise((function(t,a){n("auth_request"),E.a.post("login",e).then((function(e){var a=e.data.token;a&&(localStorage.setItem("token",a),E.a.defaults.headers.common["Authorization"]=a,n("auth_success",e.data)),t(e)})).catch((function(t){t.response||n("offline_mode"),localStorage.removeItem("token"),a(t)}))}))},logout:function(t){var e=t.commit;return new Promise((function(t){e("logout"),localStorage.removeItem("token"),delete E.a.defaults.headers.common["Authorization"],t()}))},postRequest:function(t,e){var n=this,a=t.commit;return new Promise((function(t,r){var o=localStorage.getItem("token");o&&e.formData.append("token",o),a("auth_request"),E.a.post(e.url,e.formData).then((function(e){e.data.unauthorized&&n.dispatch("logout").then((function(){window.location.replace("/")})),t(e)})).catch((function(t){t.response?401==t.response.status&&n.dispatch("logout").then((function(){window.location.replace("/")})):a("offline_mode"),r(t)}))}))},getRequest:function(t,e){var n=this,a=t.commit;return new Promise((function(t,r){a("auth_request");var o=localStorage.getItem("token"),i=new FormData;o&&i.append("token",o),E.a.post(e,i).then((function(e){e.data.unauthorized&&n.dispatch("logout").then((function(){window.location.replace("/")})),t(e)})).catch((function(t){t.response?401==t.response.status&&n.dispatch("logout").then((function(){window.location.replace("/")})):a("offline_mode"),r(t)}))}))},handleNewRequest:function(t,e){var n=t.commit;return new Promise((function(t){localStorage.setItem("currentRequest",JSON.stringify(e)),n("request_confirmed",e),t()}))}},getters:{isLoggedIn:function(t){return!!t.token},authStatus:function(t){return t.status},driver:function(t){return t.driver},requestId:function(t){return t.requestId},pendingRequest:function(t){return t.pendingRequest},currentRequest:function(t){return t.currentRequest}}});a["a"].use(O["a"]);var R=new O["a"]({base:"",routes:[{path:"/",name:"landing",component:function(){return n.e("Account").then(n.bind(null,"bede"))},meta:{}},{path:"/home",name:"home",component:function(){return n.e("Account").then(n.bind(null,"bb51"))},meta:{}},{path:"/register",name:"signup",component:function(){return n.e("Account").then(n.bind(null,"5c9c"))},meta:{}},{path:"/login",name:"login",component:function(){return n.e("Account").then(n.bind(null,"a55b"))},meta:{},props:!0},{path:"/driver-account",name:"account",component:function(){return n.e("Account").then(n.bind(null,"5db4"))},meta:{requiresUserAuth:!0}},{path:"/cars",name:"cars",component:function(){return n.e("Account").then(n.bind(null,"519f"))},meta:{requiresUserAuth:!0}},{path:"/requests",name:"requests",component:function(){return n.e("Account").then(n.bind(null,"2336"))},meta:{requiresUserAuth:!0}},{path:"/change-password",name:"accountchangepassword",component:function(){return n.e("Account").then(n.bind(null,"0060"))},meta:{requiresUserAuth:!0}},{path:"/map",name:"map",component:function(){return n.e("Account").then(n.bind(null,"7277"))},meta:{}},{path:"/driver-requests",name:"DriverRequests",component:function(){return n.e("Account").then(n.bind(null,"261d"))},meta:{requiresUserAuth:!0}}],scrollBehavior:function(){return{x:0,y:0}}});R.beforeEach((function(t,e,n){if(t.matched.some((function(t){return t.meta.requiresUserAuth}))){if(j.getters.isLoggedIn)return void n();window.location.replace("/login")}else if(t.matched.some((function(t){return t.meta.requiresCustomerAuth}))){if(j.getters.isLoggedIn)return void n();window.location.replace("/login")}else n()})),R.afterEach((function(){a["a"].nextTick((function(){j.state.toggled&&(j.state.toggled=!1);var t=document.getElementById("app-wrapper");t&&t.classList.remove("toggled")}))}));var N=R,D=n("7bb1"),M=n("a7fe"),V=n.n(M),T=(n("a623"),n("4de4"),n("c975"),n("a9e3"),n("b64b"),n("07ac"),n("25f0"),n("53ca")),F={data:function(){return{emptyResult:!1,records:[],recordsLength:0,dbResponse:{},isLoading:!1,alertDefaults:{title:null,content:null,actionType:null,actionButton:null,classes:null,modalOpen:!1},choosenRow:{},modalOpen:!1,filterKey:null,publicPath:""}},computed:{userLogged:function(){return this.$store.getters.isLoggedIn},filteredRecords:function(){var t=this.filterKey&&this.filterKey.toLowerCase(),e=this.records;return t&&(e=e.filter((function(e){return Object.keys(e).some((function(n){return String(e[n]).toLowerCase().indexOf(t)>-1}))}))),e}},methods:{formData:function(t){var e=new FormData;for(var n in t)null!==t[n]&&("object"===Object(T["a"])(t[n])?e.append(n,JSON.stringify(t[n])):e.append(n,t[n]));return e},incrementIndex:function(t){return t+1},toggleParentClass:function(t,e){var n=document.getElementById(t);n.classList.toggle(e)},closeAlert:function(){this.alertDefaults.modalOpen=!1},toggleModalOpen:function(){var t=document.documentElement;t.classList.contains("modal-open")?t.classList.remove("modal-open"):t.classList.add("modal-open");var e=document.body;e.classList.contains("modal-open")?e.classList.remove("modal-open"):e.classList.add("modal-open")},toggleModal:function(){this.toggleModalOpen(),this.modalOpen=!this.modalOpen},clearObject:function(t){for(var e in t)if(!0===t[e])t[e]=!1;else{if(!1===t[e])continue;t[e]=null}return t},falseObject:function(t,e){for(var n in t)t[n]=n===e},selectRecord:function(t){this.choosenRow=t},isEqual:function(t,e){return e===t-1},isEmpty:function(t){var e=Object.values(t).every((function(t){return null===t}));return 0===Object.keys(t).length||!0===e},addComma:function(t){var e=/\B(?=(\d{3})+(?!\d))/g;return Number(t)?t.toString().replace(e,","):null},incrementObjectKey:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;n?Number(t[e])<=n&&(t[e]=Number(t[e])+1):t[e]=Number(t[e])+1},decrementObjectKey:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;Number(t[e])>n&&(t[e]=Number(t[e])-1)},chatDate:function(t){var e={month:"short",day:"numeric"},n=new Date(t);return n.toLocaleDateString("en-US",e)},dukaHotelDate:function(t){var e={year:"numeric",month:"short",day:"numeric"},n=new Date(t);return n.toLocaleDateString("en-US",e)},toggleMobileRecordActions:function(t){this.$store.state.currentRow!==t?this.$store.state.currentRow=t:this.$store.state.currentRow=null}}},U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{"enter-active-class":"","leave-active-class":"animated rollOut"}},[n("div",{staticClass:"modal fade show",staticStyle:{"z-index":"999999999",display:"block",background:"rgba(0, 0, 0, 0.7)"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered",class:[t.modalSize]},[n("div",{staticClass:"modal-content rounded-0 border-0"},[n("div",{staticClass:"modal-header wolf-modal-header py-3 d-flex align-items-center"},[n("a",{staticClass:"btn bg-white rounded-circle",staticStyle:{width:"35px",height:"35px","line-height":"35px",padding:"unset",position:"absolute",left:"17px"},attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.$emit("close")}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}})])]),n("h6",{staticClass:"modal-title text-white font-weight-bold",staticStyle:{width:"100%","margin-left":"4rem !important"}},[t._t("head")],2)]),n("div",{staticClass:"modal-body",staticStyle:{"margin-top":"3.875rem"}},[t._t("body")],2),n("div",{staticClass:"modal-footer"},[t._t("foot")],2)])])])])],1)},z=[],H={name:"DukaModal",props:{modalSize:String,needFooter:{default:!0,type:Boolean}}},G=H,W=(n("4a33"),Object(u["a"])(G,U,z,!1,null,"4c471f78",null)),J=W.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{"enter-active-class":"","leave-active-class":"animated rollOut"}},[n("div",{staticClass:"modal alert-modal fade show",staticStyle:{"padding-right":"15px",display:"block",background:"rgba(0, 0, 0, 0.7)","z-index":"9999999999"},attrs:{id:"modal-default",tabindex:"-1",role:"dialog","aria-labelledby":"modal-default"},on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[n("div",{staticClass:"modal-dialog modal- modal-dialog-centered modal-",attrs:{role:"document"}},[n("div",{staticClass:"modal-content rounded-0",staticStyle:{"border-color":"transparent"}},[n("div",{staticClass:"modal-header wolf-modal-header"},[n("h6",{staticClass:"modal-title text-white",attrs:{id:"modal-title-default"}},[t._v(" "+t._s(t.modalTitle)+" ")]),n("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.$emit("close")}}},[n("span",{staticClass:"text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])]),n("div",{staticClass:"modal-body text-left"},[n("div",{staticClass:"font-weight-bold text-dark",domProps:{innerHTML:t._s(t.modalContent)}})]),n("div",{staticClass:"modal-footer"},[n("button",{class:"rounded-0 "+t.actionButtonClasses,attrs:{type:"button"},on:{click:function(e){return t.$emit("accept-alert")}}},[t._v(" "+t._s(t.actionButton)+" ")]),t.singleButton?t._e():n("button",{staticClass:"btn btn-link ml-auto",attrs:{type:"button"},on:{click:function(e){return t.$emit("close")}}},[t._v(" "+t._s(t.closeButton)+" ")])])])])])])],1)},Y=[],Z={name:"DukaAlert",props:{modalTitle:String,modalContent:{type:String,required:!0},singleButton:{type:Boolean,default:!1},actionButton:{type:String,required:!0},actionButtonClasses:{type:String,required:!0},closeButton:{type:String,default:"close"}},created:function(){this.toggleModalOpen()},destroyed:function(){this.toggleModalOpen()}},Q=Z,X=(n("c762"),Object(u["a"])(Q,K,Y,!1,null,"40e7a2e6",null)),tt=X.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.classes,attrs:{type:t.buttonType,disabled:t.$store.state.isLoading||t.disabler},on:{click:function(e){t.$store.state.activeBtn=t.activator,t.$emit("btn-role")}}},[t.$store.state.activeBtn===t.activator?[t._m(0)]:[t._v(" "+t._s(t.caption)+" ")]],2)},nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{attrs:{id:"loading"}},[n("span"),n("span"),n("span")])}],at={name:"DukaButton",data:function(){return{axiosRequestings:!1}},props:{caption:{type:String,required:!0},loadText:{type:String,required:!0},classes:{type:String,required:!0},buttonType:{type:String,default:"button"},height:{type:Number,default:14},width:{type:Number,default:14},color:{type:String,default:"#fff"},activator:{type:String,required:!0},disabler:{type:Boolean,default:!1}}},rt=at,ot=(n("8c83"),Object(u["a"])(rt,et,nt,!1,null,"3fa71a12",null)),it=ot.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group label-floating",class:{"is-empty":t.isEmptyOrWhite,"is-focused":t.isFocused},attrs:{id:t.id}},[n("label",{staticClass:"control-label"},[t._v(t._s(t.label))]),"textarea"!==t.type?["checkbox"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"},{name:"validate",rawName:"v-validate",value:t.validator,expression:"validator"}],staticClass:"form-control",class:{"is-invalid":t.errors.has(t.name)},attrs:{placeholder:t.placeholder,name:t.name,autocomplete:"off",type:"checkbox"},domProps:{checked:Array.isArray(t.inputValue)?t._i(t.inputValue,null)>-1:t.inputValue},on:{focus:t.handleFocus,blur:t.handleFocus,keyup:t.isInputEmpty,change:function(e){var n=t.inputValue,a=e.target,r=!!a.checked;if(Array.isArray(n)){var o=null,i=t._i(n,o);a.checked?i<0&&(t.inputValue=n.concat([o])):i>-1&&(t.inputValue=n.slice(0,i).concat(n.slice(i+1)))}else t.inputValue=r}}}):"radio"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"},{name:"validate",rawName:"v-validate",value:t.validator,expression:"validator"}],staticClass:"form-control",class:{"is-invalid":t.errors.has(t.name)},attrs:{placeholder:t.placeholder,name:t.name,autocomplete:"off",type:"radio"},domProps:{checked:t._q(t.inputValue,null)},on:{focus:t.handleFocus,blur:t.handleFocus,keyup:t.isInputEmpty,change:function(e){t.inputValue=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"},{name:"validate",rawName:"v-validate",value:t.validator,expression:"validator"}],staticClass:"form-control",class:{"is-invalid":t.errors.has(t.name)},attrs:{placeholder:t.placeholder,name:t.name,autocomplete:"off",type:t.type},domProps:{value:t.inputValue},on:{focus:t.handleFocus,blur:t.handleFocus,keyup:t.isInputEmpty,input:function(e){e.target.composing||(t.inputValue=e.target.value)}}})]:[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"},{name:"validate",rawName:"v-validate",value:t.validator,expression:"validator"}],staticClass:"form-control",class:{"is-invalid":t.errors.has(t.name)},attrs:{name:t.name,rows:"4"},domProps:{value:t.inputValue},on:{focus:t.handleFocus,blur:t.handleFocus,keyup:t.isInputEmpty,input:function(e){e.target.composing||(t.inputValue=e.target.value)}}})],n("span",{staticClass:"invalid-feedback text-danger"},[t._v(" "+t._s(t.errors.first(t.name))+" ")])],2)},lt=[],ct=(n("498a"),{name:"FloatingInput",props:{value:{},label:{type:String,required:!0},type:{type:String,required:!0,default:"text"},placeholder:{type:String,required:!1,default:""},id:{type:String,required:!0},name:{type:String,required:!0},validator:{type:String,required:!1,default:""}},data:function(){return{isFocused:!1,isEmptyOrWhite:!0,inputValue:null}},watch:{inputValue:function(t){this.$emit("input",t)}},mounted:function(){var t=this;this.inputValue=this.value,this.$nextTick((function(){t.isInputEmpty()}))},methods:{handleFocus:function(){this.isFocused=!this.isFocused},isInputEmpty:function(){var t=document.getElementById(this.id);if(t){var e=t.children[1].value;this.isEmptyOrWhite=!e||""===e.trim(),this.$emit("changed")}}}}),ut=ct,dt=Object(u["a"])(ut,st,lt,!1,null,null,null),mt=dt.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drawer-container"},[n("div",{staticClass:"overlay-content d-flex",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[n("div",{staticClass:"d-flex mx-auto my-auto"},[t._t("overlaycontent")],2)]),n("div",{staticClass:"drawer-dialog"},[t._t("contents")],2)])},ft=[],gt={name:"BottomDrawer",methods:{}},ht=gt,vt=(n("d837"),Object(u["a"])(ht,pt,ft,!1,null,null,null)),bt=vt.exports;a["a"].prototype.$http=E.a;var yt=localStorage.getItem("token");yt&&(a["a"].prototype.$http.defaults.headers.common["Authorization"]=yt),E.a.interceptors.request.use((function(t){return j.state.isLoading=!0,t}),(function(t){return j.state.isLoading=!1,j.state.activeBtn=null,Promise.reject(t)})),E.a.interceptors.response.use((function(t){return j.state.isLoading=!1,j.state.activeBtn=null,t}),(function(t){return j.state.isLoading=!1,j.state.activeBtn=null,Promise.reject(t)})),a["a"].mixin(F),a["a"].use(V.a,E.a),a["a"].use(D["a"]),a["a"].config.productionTip=!1,a["a"].component("wolf-modal",J),a["a"].component("wolf-alert",tt),a["a"].component("wolf-button",it),a["a"].component("floating-input",mt),a["a"].component("bottom-drawer",bt),new a["a"]({router:N,store:j,render:function(t){return t(I)}}).$mount("#app")},"5a8e":function(t,e,n){"use strict";n("71e3")},"5e69":function(t,e,n){},"70be":function(t,e,n){},"71e3":function(t,e,n){},"7bd5":function(t,e,n){},"85ec":function(t,e,n){},"8c83":function(t,e,n){"use strict";n("70be")},c762:function(t,e,n){"use strict";n("c7f4")},c7f4:function(t,e,n){},d837:function(t,e,n){"use strict";n("7bd5")}});
//# sourceMappingURL=app.9c0b12cc.js.map