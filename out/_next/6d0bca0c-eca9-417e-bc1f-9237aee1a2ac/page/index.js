
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([1],{121:function(e,t,n){"use strict";var o=n(81),a=o.addPassiveEventListener,r=function(e){var t=void 0;return function(n){t||(t=setTimeout(function(){t=null,e(n)},66))}},s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e){if(e){var t=r(function(t){s.scrollHandler(e)});s.scrollSpyContainers.push(e),a(e,"scroll",t)}},isMounted:function(e){return-1!==s.scrollSpyContainers.indexOf(e)},currentPositionY:function(e){if(e===document){var t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach(function(t){return t(s.currentPositionY(e))})},addStateHandler:function(e){s.spySetState.push(e)},addSpyHandler:function(e,t){var n=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e)},updateStates:function(){s.spySetState.forEach(function(e){return e()})},unmount:function(e,t){s.scrollSpyContainers.forEach(function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)}),s.spySetState&&s.spySetState.length&&s.spySetState.splice(s.spySetState.indexOf(e),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach(function(e){return s.scrollHandler(e)})}};e.exports=s},122:function(e,t,n){"use strict";var o=n(36),a=n(53),r=n(123),s=n(82),l={},i=void 0;e.exports={unmount:function(){l={}},register:function(e,t){l[e]=t},unregister:function(e){delete l[e]},get:function(e){return l[e]||document.getElementById(e)||document.getElementsByName(e)[0]},setActiveLink:function(e){return i=e},getActiveLink:function(){return i},scrollTo:function(e,t){var n=this.get(e);if(!n)return void console.warn("target Element not found");t=o({},t,{absolute:!1});var l=t.containerId,i=t.container,c=void 0;c=l?document.getElementById(l):i&&i.nodeType?i:a.getScrollParent(n),s.registered.begin&&s.registered.begin(e,n),t.absolute=!0;var u=void 0;if(c===document)u=n.offsetTop;else{u="relative"===getComputedStyle(c).position?n.offsetTop:n.offsetTop-c.offsetTop}if(u+=t.offset||0,!t.smooth)return c===document?window.scrollTo(0,u):c.scrollTop=u,void(s.registered.end&&s.registered.end(e,n));r.animateTopScroll(u,t,e,n)}}},123:function(e,t,n){"use strict";var o=n(36),a=n(53),r=n(264),s=n(265),l=n(82),i=function(e){return r[e.smooth]||r.defaultEasing},c=function(e){return"function"==typeof e?e:function(){return e}},u=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame},d=function(){return u()||function(e,t,n){window.setTimeout(e,n||1e3/60,(new Date).getTime())}}(),f=0,p=0,m=0,h=0,g=0,v=!1,y=void 0,b=void 0,E=void 0,x=void 0,w=void 0,_=void 0,C=void 0;s.subscribe(function(){v=!0});var N=function(){if(b&&b!==document&&b!==document.body)return b.scrollTop;var e=void 0!==window.pageXOffset,t="CSS1Compat"===(document.compatMode||"");return e?window.pageYOffset:t?document.documentElement.scrollTop:document.body.scrollTop},T=function(){if(b&&b!==document&&b!==document.body)return Math.max(b.scrollHeight,b.offsetHeight,b.clientHeight);var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)},S=function e(t,n,o){if(!n.ignoreCancelEvents&&v)return void(l.registered.end&&l.registered.end(E,y,f));if(w=Math.round(m-p),null===x&&(x=o),h=o-x,_=h>=g?1:t(h/g),f=p+Math.ceil(w*_),b&&b!==document&&b!==document.body?b.scrollTop=f:window.scrollTo(0,f),_<1){var a=e.bind(null,t,n);return void d.call(window,a)}l.registered.end&&l.registered.end(E,y,f)},j=function(e){b=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:e.element&&e.element.nodeType?a.getScrollParent(e.element):document:null},O=function(e,t,n,o){window.clearTimeout(C),j(t),x=null,v=!1,p=N(),m=t.absolute?e:e+p,w=Math.round(m-p),g=c(t.duration)(w),g=isNaN(parseFloat(g))?1e3:parseFloat(g),E=n,y=o;var a=i(t),r=S.bind(null,a,t);if(t&&t.delay>0)return void(C=window.setTimeout(function(){d.call(window,r)},t.delay));d.call(window,r)},k=function(e){return e=e&&e.nodeType?{element:e}:o({},e),e.absolute=!0,e},B=function(e){O(0,k(e))},H=function(e,t){O(e,k(t))},P=function(e){e=k(e),j(e),O(T(),e)},F=function(e,t){t=k(t),j(t),O(N()+e,t)};e.exports={animateTopScroll:O,getAnimationType:i,scrollToTop:B,scrollToBottom:P,scrollTo:H,scrollMore:F}},258:function(e,t,n){e.exports=n(259)},259:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),r=o(a),s=n(0),l=o(s),i=n(28),c=o(i),u=n(37),d=o(u),f=n(260),p=o(f),m=n(261),h=o(m),g=n(4),v=n(262),y=o(v),b={steps:"index__steps___2BmVR",stepsOuter:"index__stepsOuter___2cCvR",stepsPhoto:"index__stepsPhoto___DRDGE",step:"index__step___3Q7VV",headerCenterText:"index__headerCenterText___2rvbJ",tryNowBtn:"index__tryNowBtn___3AwvN",tryNowBtnTwo:"index__tryNowBtnTwo___1PCbc",tryNowBtnThree:"index__tryNowBtnThree___9GSg-",tryNowBtnFour:"index__tryNowBtnFour___1JCeo",downArrow:"index__downArrow___1iubN",savingsHeader:"index__savingsHeader___D2wxF",savingsSubheader:"index__savingsSubheader___yJb5x",testimonial:"index__testimonial___3dKCh",guaranteeHeader:"index__guaranteeHeader___D03HN",guaranteeText:"index__guaranteeText___1GNwN",footer:"index__footer___231Fr",testimonialBorder:"index__testimonialBorder___2yHgm",panelBanner:"index__panelBanner___rP_Bx",tryNowBtnFive:"index__tryNowBtnFive___2BDAl",panelBannerMobile:"index__panelBannerMobile___3QbAS"},E=y.default.Link,x=y.default.Element,w=function(){return l.default.createElement(d.default,null,l.default.createElement(g.Row,{className:"no-gutters",style:_},l.default.createElement(g.Container,null,l.default.createElement(p.default,null),l.default.createElement("div",{className:"jsx-3697373088 "+(b.headerCenterText||"")},l.default.createElement("h1",{className:"jsx-3697373088"},"Fair prices, real security"),l.default.createElement("h3",{className:"jsx-3697373088"},"Starting at $19.99"),l.default.createElement(g.Row,{className:"align-items-end justify-content-center"},l.default.createElement(g.Col,{xs:6,className:"mx-auto",style:{marginTop:"30px",position:"relative",bottom:"18%"}},l.default.createElement(c.default,{href:"/products"},l.default.createElement("div",{className:"jsx-3697373088 "+b.tryNowBtn+" mx-auto"},"Try it now")),l.default.createElement(E,{to:"priceComparisonTable",smooth:!0},l.default.createElement("div",{className:"jsx-3697373088 "+b.downArrow+" mx-auto"},l.default.createElement("img",{src:"/static/images/downArrow.png",className:"jsx-3697373088"})))))))),l.default.createElement(x,{name:"priceComparisonTable"},l.default.createElement(h.default,null)),l.default.createElement(c.default,{href:"/products"},l.default.createElement("div",{className:"jsx-3697373088 "+b.tryNowBtn+" mx-auto "+b.tryNowBtnTwo},"Try it now")),l.default.createElement("div",{className:"jsx-3697373088 "+(b.stepsOuter||"")},l.default.createElement("div",{className:"jsx-3697373088 "+(b.stepsPhoto||"")},l.default.createElement("img",{src:"/static/images/panelPhoto.png",className:"jsx-3697373088 img-fluid"})),l.default.createElement(g.Container,null,l.default.createElement("div",{className:"jsx-3697373088 "+(b.steps||"")},l.default.createElement(g.Row,null,l.default.createElement(g.Col,{md:{size:7,offset:5}},l.default.createElement("h1",{className:"jsx-3697373088"},"Switching is easy"),l.default.createElement("h4",{className:"jsx-3697373088"},"80% of equipment is compatible"),l.default.createElement("div",{className:"jsx-3697373088 "+(b.step||"")},l.default.createElement("b",{className:"jsx-3697373088"},"1.")," Order equipment to replace existing sensors in your home",l.default.createElement("p",{className:"jsx-3697373088"},"(Don’t worry, if your sensors are not compatible, you can send back extras for free)")),l.default.createElement("div",{className:"jsx-3697373088 "+(b.step||"")},l.default.createElement("b",{className:"jsx-3697373088"},"2.")," Plug in panel and follow on screen instructions"),l.default.createElement("div",{className:"jsx-3697373088 "+(b.step||"")},l.default.createElement("b",{className:"jsx-3697373088"},"3.")," Send back unused equipment"),l.default.createElement("div",{className:"jsx-3697373088 "+b.tryNowBtn+" "+b.tryNowBtnThree},"Try it now")))),l.default.createElement("h1",{className:"jsx-3697373088 "+(b.savingsHeader||"")},"Savings so big you can’t help but love it!"),l.default.createElement("h3",{className:"jsx-3697373088 "+(b.savingsSubheader||"")},"Every year with Cove is more money in your pocket"),l.default.createElement("img",{src:"/static/images/tempSlider.png",className:"jsx-3697373088 img-fluid mx-auto"}),l.default.createElement(c.default,{href:"/products"},l.default.createElement("div",{className:"jsx-3697373088 "+b.tryNowBtn+" "+b.tryNowBtnFour+" mx-auto"},"Try it now")),l.default.createElement("div",{className:"jsx-3697373088 "+(b.testimonial||"")},l.default.createElement("div",{className:"jsx-3697373088 "+(b.testimonialBorder||"")}),l.default.createElement("h1",{className:"jsx-3697373088"},'"Something nice about Cove"'),l.default.createElement("h3",{className:"jsx-3697373088"},"- Someone"))),l.default.createElement("div",{className:"jsx-3697373088 "+(b.panelBannerMobile||"")},l.default.createElement("img",{src:"/static/images/panelClose.png",className:"jsx-3697373088 img-fluid"})),l.default.createElement(g.Container,null,l.default.createElement("div",{className:"jsx-3697373088 "+(b.panelBanner||"")}),l.default.createElement("h1",{className:"jsx-3697373088 "+(b.guaranteeHeader||"")},"100% satisfaction gauranteed"),l.default.createElement(g.Row,null,l.default.createElement(g.Col,{md:{size:6,offset:2},sm:12,xs:12},l.default.createElement("div",{className:"jsx-3697373088 "+(b.guaranteeText||"")},"Try out Cove for 30 days free, and if you don’t like it better than your current alarm, send it back for a complete refund. (Don’t worry, you don’t need to cancel your current system to try ours.)")),l.default.createElement(g.Col,{md:3,sm:12,xs:12},l.default.createElement(c.default,{href:"/products"},l.default.createElement("div",{className:"jsx-3697373088 "+b.tryNowBtn+"  "+b.tryNowBtnFive+" mx-auto"},"Try it now")))),l.default.createElement("div",{className:"jsx-3697373088 "+(b.footer||"")}))),l.default.createElement(r.default,{styleId:"3697373088",css:[]}))};t.default=w;var _={backgroundImage:'url("/static/images/landingBanner.png")',height:"100%",minHeight:"400px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}},260:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),r=o(a),s=n(0),l=o(s),i=n(4),c=n(28),u=o(c);t.default=function(e){return l.default.createElement("div",{className:"jsx-1413334535 header"},l.default.createElement(i.Navbar,{color:"faded",light:!0},l.default.createElement(i.NavbarBrand,{href:"/",className:"mr-auto"},l.default.createElement("img",{src:"/static/images/logoWhite.png",className:"jsx-1413334535"})," "),l.default.createElement(i.Nav,null,l.default.createElement(u.default,{href:"/login"},l.default.createElement("div",{className:"jsx-1413334535"},"Sign in")),l.default.createElement(u.default,{href:"/signup"},l.default.createElement("div",{className:"jsx-1413334535 signup"},"Sign Up"))),l.default.createElement(i.NavbarToggler,{className:"toggler"}),l.default.createElement(i.Collapse,{navbar:!0},l.default.createElement(i.Nav,{navbar:!0},l.default.createElement(i.NavItem,null,l.default.createElement(i.NavLink,{href:"/about"},"About Us")),l.default.createElement(i.NavItem,null,l.default.createElement(i.NavLink,{href:"/Contact"},"Contact"))))),l.default.createElement(r.default,{styleId:"2530802950",css:[".header.jsx-1413334535{color:#FFFFFF;}",".signup.jsx-1413334535{border:2px solid #FFFFFF;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;height:32px;width:136px;color:#FFFFFF;text-align:center;margin-left:30px;margin-right:30px;}"]}),l.default.createElement(r.default,{styleId:"1199043880",css:[".toggler{border:none;color:#FFFFFF;}",'.toggler .navbar-toggler-icon{height:20px;width:24px;background-image:url("/static/images/toggler.png");}']}))}},261:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),r=o(a),s=n(0),l=o(s),i=n(4);t.default=function(){return l.default.createElement("div",{className:"jsx-2602952869 priceComparisonTable"},l.default.createElement(i.Container,null,l.default.createElement(i.Row,{className:"pctHeader align-items-center"},l.default.createElement(i.Col,{md:{size:3,offset:6},xs:6,sm:6,className:"pcTableLogo"},l.default.createElement("img",{src:"/static/images/coveTeal.png",style:c,className:"jsx-2602952869"})),l.default.createElement(i.Col,{md:3,xs:6,sm:6},l.default.createElement("h1",{className:"jsx-2602952869"},"Them"))),l.default.createElement(i.Row,{className:"no-gutters"},l.default.createElement(i.Col,{xs:12,sm:12,md:6,className:"pcTableColLeft"},"Long term contracts"),l.default.createElement(i.Col,{xs:6,sm:6,md:3,className:"pcTableColMid"},"Not our style"),l.default.createElement(i.Col,{xs:6,sm:6,md:3,className:"pcTableColRight"},"3-5 years")),l.default.createElement(i.Row,{className:"no-gutters"},l.default.createElement(i.Col,{xs:12,md:6,className:"pcTableColLeft"},"Monthly Monitoring"),l.default.createElement(i.Col,{xs:6,md:3,className:"pcTableColMid"},"$19.99"),l.default.createElement(i.Col,{xs:6,md:3,className:"pcTableColRight"},"$44.99")),l.default.createElement(i.Row,{className:"no-gutters"},l.default.createElement(i.Col,{xs:12,md:6,className:"pcTableColLeft"},"Cancellation Fees"),l.default.createElement(i.Col,{xs:6,md:3,className:"pcTableColMid"},"None"),l.default.createElement(i.Col,{xs:6,md:3,className:"pcTableColRight"},"High as $2000",l.default.createElement("p",{style:{fontSize:"10px"},className:"jsx-2602952869"},"Crazy, we know"))),l.default.createElement(i.Row,{className:"no-gutters"},l.default.createElement(i.Col,{xs:12,md:6,className:"pcTableColLeft"},"Service Windows"),l.default.createElement(i.Col,{xs:6,md:3,className:"pcTableColMid"},"None"),l.default.createElement(i.Col,{xs:6,md:3,className:"pcTableColRight"},"1 - 3 weeks")),l.default.createElement(i.Row,{className:"no-gutters"},l.default.createElement(i.Col,{xs:12,md:6,className:"pcTableColLeft"},"Finance Equipment at 0% APR"),l.default.createElement(i.Col,{xs:6,md:3,className:"pcTableColMid"},"Yes"),l.default.createElement(i.Col,{xs:6,md:3,className:"pcTableColRight"},"No")),l.default.createElement(i.Row,{className:"no-gutters"},l.default.createElement(i.Col,{xs:12,md:6,className:"pcTableColLeft",style:{paddingTop:"20px"}},"Warranty"),l.default.createElement(i.Col,{xs:6,md:3,className:"pcTableColMid",style:{paddingTop:"20px"}},"3 years"),l.default.createElement(i.Col,{xs:6,md:3,className:"pcTableColRight"},l.default.createElement("p",{className:"jsx-2602952869"},"3 years"),l.default.createElement("p",{className:"jsx-2602952869"},"$45 service calls")))),l.default.createElement(r.default,{styleId:"2602952869",css:[".priceComparisonTable h1{font-size:32px;}",".priceComparisonTable .pctHeader{padding-bottom:20px;margin-top:66px;}",".priceComparisonTable .row{border-bottom:1px solid #BEC2C5;font-family:GothamRoundedBold;font-size:20px;padding-top:20px;}",".priceComparisonTable .col{padding-left:20px;}",".priceComparisonTable .pcTableColLeft{font-family:'Open Sans',sans-serif;font-size:16px;font-weight:bold;padding-left:100px;}","@media (max-width:767px){.priceComparisonTable .pcTableColLeft{padding-left:0px;}}",".priceComparisonTable .pcTableColMid{height:56px;color:#00B19B;}"]}))};var c={paddingBottom:"10px"}},262:function(e,t,n){"use strict";t.Link=n(263),t.Button=n(267),t.Element=n(268),t.Helpers=n(52),t.scroller=n(122),t.Events=n(82),t.scrollSpy=n(121),t.animateScroll=n(123)},263:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),i=n(52),c=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),s(t,[{key:"render",value:function(){return l.createElement("a",this.props,this.props.children)}}]),t}(l.Component);e.exports=i.Scroll(c)},264:function(e,t,n){"use strict";e.exports={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},265:function(e,t,n){"use strict";var o=n(81),a=o.addPassiveEventListener,r=(o.removePassiveEventListener,["mousedown","mousewheel","touchmove","keydown"]);e.exports={subscribe:function(e){return"undefined"!=typeof document&&r.forEach(function(t){return a(document,t,e)})}}},266:function(e,t,n){"use strict";var o=(n(81),n(53)),a={mountFlag:!1,initialized:!1,scroller:null,mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout(function(){e.scrollTo(t,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller,a=n.get(e);if(a&&(t||e!==n.getActiveLink())){var r=o.getScrollParent(a);n.scrollTo(e,{container:r})}},getHash:function(){return o.getHash()},changeHash:function(e){this.isInitialized()&&o.pushHash(e)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,window.removeEventListener("hashchange",this.handleHashChange)}};e.exports=a},267:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),i=n(52),c=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),s(t,[{key:"render",value:function(){return l.createElement("input",this.props,this.props.children)}}]),t}(l.Component);e.exports=i.Scroll(c)},268:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),c=n(52),u=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),l(t,[{key:"render",value:function(){var e=this,t=s({},this.props);return t.parentBindings&&delete t.parentBindings,i.createElement("div",s({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}(i.Component);e.exports=c.Element(u)},52:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),c=n(70),u=n(53),d=n(121),f=n(122),p=n(36),m=n(12),h=n(266),g={to:m.string.isRequired,containerId:m.string,container:m.object,activeClass:m.string,spy:m.bool,smooth:m.oneOfType([m.bool,m.string]),offset:m.number,delay:m.number,isDynamic:m.bool,onClick:m.func,duration:m.oneOfType([m.number,m.func]),absolute:m.bool,onSetActive:m.func,onSetInactive:m.func,ignoreCancelEvents:m.bool,hashSpy:m.bool},v={Scroll:function(e,t){var n=t||f,m=function(t){function s(e){o(this,s);var t=a(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));return v.call(t),t.state={active:!1},t}return r(s,t),l(s,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:u.getScrollParent(c.findDOMNode(this))}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();d.isMounted(e)||d.mount(e),this.props.hashSpy&&(h.isMounted()||h.mount(n)),this.props.spy&&d.addStateHandler(this.stateHandler),d.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){d.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=p({},this.props);for(var o in g)n.hasOwnProperty(o)&&delete n[o];return n.className=t,n.onClick=this.handleClick,i.createElement(e,n)}}]),s}(i.Component),v=function(){var e=this;this.scrollTo=function(t,o){n.scrollTo(t,s({},e.state,o))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var o=e.getScrollSpyContainer();if(!h.isMounted()||h.isInitialized()){var a=e.props.to,r=null,s=0,l=0,i=0;if(o.getBoundingClientRect){i=o.getBoundingClientRect().top}if(!r||e.props.isDynamic){if(!(r=n.get(a)))return;var c=r.getBoundingClientRect();s=c.top-i+t,l=s+c.height}var u=t-e.props.offset,f=u>=Math.floor(s)&&u<Math.floor(l),p=u<Math.floor(s)||u>=Math.floor(l),m=n.getActiveLink();return p?(a===m&&n.setActiveLink(void 0),e.props.hashSpy&&h.getHash()===a&&h.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),d.updateStates()):f&&m!==a?(n.setActiveLink(a),e.props.hashSpy&&h.changeHash(a),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(a)),d.updateStates()):void 0}}};return m.propTypes=g,m.defaultProps={offset:0},m},Element:function(e){var t=function(t){function n(e){o(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return r(n,t),l(n,[{key:"componentDidMount",value:function(){this.registerElems(this.props.name)}},{key:"componentWillReceiveProps",value:function(e){this.props.name!==e.name&&this.registerElems(e.name)}},{key:"componentWillUnmount",value:function(){f.unregister(this.props.name)}},{key:"registerElems",value:function(e){f.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return i.createElement(e,s({},this.props,{parentBindings:this.childBindings}))}}]),n}(i.Component);return t.propTypes={name:m.string,id:m.string},t}};e.exports=v},53:function(e,t,n){"use strict";var o=function(e,t){var n=getComputedStyle(e),o="absolute"===n.position,a=t?/(auto|scroll|hidden)/:/(auto|scroll)/;if("fixed"===n.position)return document;for(var r=e;r=r.parentElement;)if(n=getComputedStyle(r),(!o||"static"!==n.position)&&a.test(n.overflow+n.overflowY+n.overflowX))return r;return document},a=function(e){if(e=e?0===e.indexOf("#")?e:"#"+e:"",history.pushState){var t=window.location;history.pushState(null,null,e||t.pathname+t.search)}else location.hash=e},r=function(){return window.location.hash.replace(/^#/,"")},s=function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}};e.exports={getScrollParent:o,pushHash:a,getHash:r,filterElementInContainer:s}},81:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addPassiveEventListener=function(e,t,n){var o=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}();e.addEventListener(t,n,!!o&&{passive:!0})},t.removePassiveEventListener=function(e,t,n){e.removeEventListener(t,n)}},82:function(e,t,n){"use strict";var o={registered:{},scrollEvent:{register:function(e,t){o.registered[e]=t},remove:function(e){o.registered[e]=null}}};e.exports=o}},[258]);
            return { page: comp.default }
          })
        