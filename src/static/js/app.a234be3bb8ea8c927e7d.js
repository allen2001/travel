webpackJsonp([1],{"0AWq":function(t,e){},"5kur":function(t,e){},"6C9P":function(t,e){},"9n10":function(t,e){},A3r9:function(t,e){},Aaar:function(t,e){},F6WN:function(t,e){},Iwzp:function(t,e){},M6Sr:function(t,e){},MlgS:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("d+AB")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("NYxO"),d={name:"HomeHeader",computed:c()({},Object(l.d)(["city"]),Object(l.b)(["filterCity"]))},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header_right"},[t._v("\n        "+t._s(t.city)+"\n        "),i("i",{staticClass:"iconfont"},[t._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header_left"},[e("i",{staticClass:"iconfont back_icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header_input"},[e("i",{staticClass:"iconfont"},[this._v("")]),this._v(" "),e("input",{attrs:{type:"text",placeholder:"输入城市/景点/游玩主题"}})])}]};var h=i("VU/8")(d,u,!1,function(t){i("V6Mv")},"data-v-49d72f3e",null).exports,p={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:2e3}}},computed:{showSwiper:function(){return this.list.length}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wraper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper_img",attrs:{src:t.imgUrl,alt:"error!"}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var v=i("VU/8")(p,f,!1,function(t){i("Aaar")},"data-v-da747210",null).exports,m={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{autoplay:!1,pagination:".swiper-pagination"}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"img_wrap"},[i("img",{attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("p",{staticClass:"icon_des"},[t._v(t._s(e.desc))])])}))}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var y=i("VU/8")(m,_,!1,function(t){i("0AWq")},"data-v-b789fa08",null).exports,w={name:"HomeRecommend",props:{list:Array},data:function(){return{}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"rec_title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item_img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("div",{staticClass:"item_info"},[i("p",{staticClass:"item_title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item_desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item_btn",attrs:{type:"button"}},[t._v("查看详情")])])])}))])},staticRenderFns:[]};var g=i("VU/8")(w,C,!1,function(t){i("fUry")},"data-v-8644f9fa",null).exports,b={name:"HomeWeekend",props:{list:Array},data:function(){return{}}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"rec_title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item"},[i("div",{staticClass:"item_img_wrapper"},[i("img",{staticClass:"item_img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"item_info"},[i("p",{staticClass:"item_title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item_desc"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var x=i("VU/8")(b,k,!1,function(t){i("xQJ/")},"data-v-7fc7e8a4",null).exports,S=i("mtWM"),$=i.n(S),I={name:"Home",components:{HomeHeader:h,HomeSwiper:v,HomeIcons:y,HomeRecommend:g,HomeWeekend:x},data:function(){return{swiperList:[],iconList:[],recommendList:[],weekendList:[],lastCity:""}},computed:c()({},Object(l.d)(["city"])),methods:{getHomeInfo:function(){$.a.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}console.log(t)}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var A=i("VU/8")(I,E,!1,function(t){i("5kur")},null,null).exports,L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n\t城市选择\n\t"),e("router-link",{attrs:{to:"/"}},[e("i",{staticClass:"iconfont back_icon"},[this._v("")])])],1)},staticRenderFns:[]};var N=i("VU/8")({name:"CityHeader"},L,!1,function(t){i("6C9P")},"data-v-d1168ada",null).exports,U=i("GQaK"),H={name:"CitySearch",props:{cities:Object},data:function(){return{keywords:"",timer:null,list:[]}},computed:{hasNoData:function(){return!this.list.length}},watch:{keywords:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keywords?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keywords)>-1||i.name.indexOf(t.keywords)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},methods:c()({},Object(l.c)(["changeCity"]),{handleCityClick:function(t){this.changeCity(t.name),this.$router.push("/")}}),mounted:function(){this.scroll=new U.a(this.$refs.content)}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"search_input",attrs:{type:"text",placeholder:"请输入关键字"},domProps:{value:t.keywords},on:{input:function(e){e.target.composing||(t.keywords=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keywords,expression:"keywords"}],ref:"content",staticClass:"search_content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search_item border-bottom",on:{click:function(i){t.handleCityClick(e)}}},[t._v(t._s(e.name))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search_item border-bottom"},[t._v("未找到相关匹配项")])],2)])])},staticRenderFns:[]};var T=i("VU/8")(H,F,!1,function(t){i("vYeh")},"data-v-5eab8392",null).exports,j={name:"CityList",props:{hot:Array,cities:Object,letter:String},computed:c()({},Object(l.d)(["city"])),watch:{letter:function(){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}},methods:c()({},Object(l.c)(["changeCity"]),{handleCityClick:function(t){this.changeCity(t.name),this.$router.push("/")}}),mounted:function(){this.scroll=new U.a(this.$refs.wrapper)}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("您的位置")]),t._v(" "),i("div",{staticClass:"button_list"},[i("div",{staticClass:"button_wrap"},[i("div",{staticClass:"button"},[t._v(t._s(t.city))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button_list"},t._l(t.hot,function(e){return i("div",{key:e.id,staticClass:"button_wrap",on:{click:function(i){t.handleCityClick(e)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("ul",{staticClass:"item_list"},t._l(e,function(e){return i("li",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){t.handleCityClick(e)}}},[t._v(t._s(e.name))])}))])})],2)])},staticRenderFns:[]};var D=i("VU/8")(j,O,!1,function(t){i("MlgS")},"data-v-4aeb5865",null).exports,R={name:"CityAlphabet",props:{cities:Object},data:function(){return{startStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.startStatus=!0},handleTouchMove:function(t){var e=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){if(e.startStatus){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])}},16)},handleTouchEnd:function(){this.startStatus=!1}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleLetterClick,touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},[t._v("\n            "+t._s(e)+"\n        ")])}))},staticRenderFns:[]};var G={name:"City",components:{CityHeader:N,CitySearch:T,CityList:D,CityAlphabet:i("VU/8")(R,V,!1,function(t){i("SjyI")},"data-v-8c05ea98",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){$.a.get("/api/city.json").then(this.getCityInfoSucc)},getCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{hot:t.hotCities,cities:t.cities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var Y=i("VU/8")(G,M,!1,function(t){i("gHT/")},null,null).exports,W={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var z=i("VU/8")({name:"FadeAnimation"},W,!1,function(t){i("jYoj")},"data-v-1b8b9072",null).exports,P={name:"CommonGallary",props:{imgs:{type:Array,default:[]}},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGallaryClick:function(){this.$emit("closeGallary")}}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGallaryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary_img",attrs:{src:t,alt:"error!"}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var q={name:"DetailBanner",components:{CommonGallary:i("VU/8")(P,B,!1,function(t){i("grDY")},"data-v-44226265",null).exports,FadeAnimation:z},props:{sightName:String,bannerImg:String,gallaryImgs:Array},data:function(){return{showGallary:!1}},methods:{handleShowGallary:function(){this.showGallary=!0},handleHideGallary:function(){this.showGallary=!1}}},J={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleShowGallary}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:""}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(t.sightName))]),t._v(" "),i("div",{staticClass:"banner-num"},[i("i",{staticClass:"iconfont banner_icon"},[t._v("")]),t._v("\n\t\t\t\t"+t._s(t.gallaryImgs.length)+"\n\t\t\t")])])]),t._v(" "),i("fade-animation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.gallaryImgs},on:{closeGallary:t.handleHideGallary}})],1)],1)},staticRenderFns:[]};var Q=i("VU/8")(q,J,!1,function(t){i("UvgU")},"data-v-286f51c8",null).exports,K={name:"DetailHeader",props:{detailName:String},data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){console.log(this.showAbs);var t=document.documentElement.scrollTop||document.body.scrollTop;if(t>10){this.showAbs=!1;var e=t/206;e=e>1?1:e,this.opacityStyle={opacity:e}}else this.showAbs=!0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},X={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showAbs,expression:"showAbs"}],staticClass:"header_abs",attrs:{to:"/"}},[i("i",{staticClass:"iconfont header_abs_icon"},[t._v("")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.showAbs,expression:"!showAbs"}],staticClass:"header_fixed",style:t.opacityStyle},[t._v("\n\t\t"+t._s(t.detailName)+"\n\t\t"),i("router-link",{attrs:{to:"/"}},[i("i",{staticClass:"iconfont header_fixed_icon"},[t._v("")])])],1)],1)},staticRenderFns:[]};var Z=i("VU/8")(K,X,!1,function(t){i("Iwzp")},"data-v-30ac4e6a",null).exports,tt={name:"DetailList",props:{list:Array}},et={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e){return i("div",{key:e.id,staticClass:"item"},[i("div",{staticClass:"title border-bottom"},[i("span",{staticClass:"icon"}),t._v("\n\t\t\t"+t._s(e.title)+"\n\t\t")]),t._v(" "),e.children?i("div",{staticClass:"item_child"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}))},staticRenderFns:[]};var it={name:"Detail",components:{DetailBanner:Q,DetailHeader:Z,DetailList:i("VU/8")(tt,et,!1,function(t){i("F6WN")},"data-v-4f1ad9d8",null).exports},data:function(){return{detailName:"",sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},methods:{getDetailInfo:function(){$.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.getDetailInfoSucc)},getDetailInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.detailName=e.detailName,this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}}},mounted:function(){this.getDetailInfo()}},st={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-header",{attrs:{detailName:this.detailName}}),this._v(" "),e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("div",{staticClass:"content"},[e("detail-list",{attrs:{list:this.list}})],1)],1)},staticRenderFns:[]};var nt=i("VU/8")(it,st,!1,function(t){i("A3r9")},"data-v-f4247e56",null).exports;s.a.use(r.a);var at=new r.a({routes:[{path:"/",name:"Home",component:A},{path:"/city",name:"City",component:Y},{path:"/detail/:id",name:"Detail",component:nt}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),rt="北京";try{rt=localStorage.city||"北京"}catch(t){console.error(t.message)}var ot={city:rt},ct={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){console.error(t.message)}}};s.a.use(l.a);var lt=new l.a.Store({state:ot,mutations:ct,getters:{filterCity:function(t){return"城市/"+t.city}}}),dt=i("v5o6"),ut=i.n(dt),ht=i("F3EI"),pt=i.n(ht);i("j1ja"),i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns"),i("UAgs");s.a.config.productionTip=!1,ut.a.attach(document.body),s.a.use(pt.a),new s.a({el:"#app",router:at,store:lt,components:{App:a},template:"<App/>"})},SjyI:function(t,e){},TzC8:function(t,e){},UAgs:function(t,e){var i,s,n,a,r;i=document,s=window,n=i.documentElement,a="orientationchange"in window?"orientationchange":"resize",r=function(){var t=n.clientWidth;t&&(n.style.fontSize=t/375*50+"px")},i.addEventListener&&(s.addEventListener(a,r,!1),i.addEventListener("DOMContentLoaded",r,!1))},UvgU:function(t,e){},V6Mv:function(t,e){},"d+AB":function(t,e){},fUry:function(t,e){},"gHT/":function(t,e){},grDY:function(t,e){},jYoj:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},v2ns:function(t,e){},vYeh:function(t,e){},"xQJ/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a234be3bb8ea8c927e7d.js.map