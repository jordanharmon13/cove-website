
          window.__NEXT_REGISTER_PAGE('/coveclub', function() {
            var comp = module.exports=webpackJsonp([8],{276:function(e,t,l){e.exports=l(277)},277:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=l(7),s=a(c),n=l(1),m=a(n),o=l(4),u=a(o),r=l(2),i=a(r),d=l(3),f=a(d),E=l(0),C=a(E),g=l(6),N=l(50),_=a(N),b=l(24),p=l(30),v=a(p),x=l(41),h=a(x),w=l(278),R=a(w),k=l(279),y=a(k),L={mobile:"coveclub__mobile___1Gy4z",full:"coveclub__full___2cmpu"},F=function(e){function t(){return(0,m.default)(this,t),(0,i.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return C.default.createElement(v.default,null,C.default.createElement(g.Container,null,C.default.createElement(h.default,{color:"secondary"})),C.default.createElement("div",{className:L.full},C.default.createElement(R.default,null)),C.default.createElement("div",{className:L.mobile},C.default.createElement(y.default,null)))}}],[{key:"getInitialProps",value:function(e){e.store}}]),t}(E.Component);t.default=(0,_.default)({createStore:b.initStore,storeKey:"rootRedux"})(F)},278:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=l(7),s=a(c),n=l(1),m=a(n),o=l(4),u=a(o),r=l(2),i=a(r),d=l(3),f=a(d),E=l(0),C=a(E),g=l(15),N=a(g),_=l(12),b=l(31),p=l(6),v=l(24),x=l(22),h=a(x),w={header:"coveClubFullsize__header___22aWl",titleSubText:"coveClubFullsize__titleSubText___2f94e",coveClubTableHeader:"coveClubFullsize__coveClubTableHeader___3mAhn",coveClubTableFooter:"coveClubFullsize__coveClubTableFooter___3a1tB",coveNonClubTableHeader:"coveClubFullsize__coveNonClubTableHeader___2u1Lt",nonClubTableFooter:"coveClubFullsize__nonClubTableFooter___o2Vil",coveClubCol:"coveClubFullsize__coveClubCol___2cQvy",colLeftFirst:"coveClubFullsize__colLeftFirst___342_l",colLeftContent:"coveClubFullsize__colLeftContent___3w5Ul",colLeft:"coveClubFullsize__colLeft___3IhoZ",colLeftLast:"coveClubFullsize__colLeftLast___hUibt",firstCol:"coveClubFullsize__firstCol___2J9Hu",colMid:"coveClubFullsize__colMid___1a4us",colSpacer:"coveClubFullsize__colSpacer___JCN2H",colRight:"coveClubFullsize__colRight___20yma",compareContent:"coveClubFullsize__compareContent___3WpDO",highlight:"coveClubFullsize__highlight___2wlH2",selectionBox:"coveClubFullsize__selectionBox___26_A4",optionLabel:"coveClubFullsize__optionLabel___2R7SC",alert:"coveClubFullsize__alert___2iZA-",financeOption:"coveClubFullsize__financeOption___1RiCH",selectBtn:"coveClubFullsize__selectBtn___2Hyzm"},R=function(e){function t(e){(0,m.default)(this,t);var l=(0,i.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return l.toggleFinance=l.toggleFinance.bind(l),l.selectSubscriptionType=l.selectSubscriptionType.bind(l),l}return(0,f.default)(t,e),(0,u.default)(t,[{key:"toggleFinance",value:function(){this.props.toggleFinance()}},{key:"selectSubscriptionType",value:function(e){this.props.selectSubscriptionType(e)}},{key:"render",value:function(){var e=this,t=this.props.payment;return C.default.createElement(p.Container,null,C.default.createElement(p.Row,null,C.default.createElement(p.Col,{className:w.header},C.default.createElement("h2",null,"Cove members to Cove Pay"),C.default.createElement("div",{className:w.titleSubText},"Save $5/mo on your monitoring and use CoveClub EasyPay to pay your",C.default.createElement("br",null),"equipment off over time with 0% APR"))),C.default.createElement(p.Row,{className:"no-gutters"},C.default.createElement(p.Col,{md:3}),C.default.createElement(p.Col,{md:4},C.default.createElement("div",{className:w.coveClubTableHeader+"  row"},C.default.createElement(p.Col,{xs:12},C.default.createElement("h4",null,"Cove Club - $99")),C.default.createElement(p.Col,{xs:6},C.default.createElement("h5",null,"$19.99"),C.default.createElement("p",null,"Basic")),C.default.createElement(p.Col,{xs:6},C.default.createElement("h5",null,"$29.99"),C.default.createElement("p",null,"Premium")))),C.default.createElement(p.Col,{md:{size:4,offset:1}},C.default.createElement("div",{className:w.coveNonClubTableHeader+"  row"},C.default.createElement(p.Col,{xs:12},C.default.createElement("h4",null,"Non-Club")),C.default.createElement(p.Col,{xs:6},C.default.createElement("h5",null,"$24.99"),C.default.createElement("p",null,"Basic")),C.default.createElement(p.Col,{xs:6},C.default.createElement("h5",null,"$34.99"),C.default.createElement("p",null,"Premium"))))),C.default.createElement(p.Row,{className:"no-gutters"},C.default.createElement(p.Col,{className:w.colLeftFirst,md:3},C.default.createElement("div",{className:w.colLeftContent},"24/7 Monitoring")),C.default.createElement(p.Col,{className:w.colMid+" "+w.firstCol+" row",md:4},C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/check.svg"})),C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/check.svg"}))),C.default.createElement(p.Col,{className:w.colSpacer+" "+w.firstCol,md:1}),C.default.createElement(p.Col,{className:w.colRight+" row "+w.firstCol,md:4},C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/check.svg"})),C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/check.svg"})))),C.default.createElement(p.Row,{className:"no-gutters"},C.default.createElement(p.Col,{className:w.colLeft,md:3},C.default.createElement("div",{className:w.colLeftContent},"App Support")),C.default.createElement(p.Col,{className:w.colMid+" row",md:4},C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/x.svg"})),C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/check.svg"}))),C.default.createElement(p.Col,{className:w.colSpacer,md:1}),C.default.createElement(p.Col,{className:w.colRight+" row",md:4},C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/x.svg"})),C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/check.svg"})))),C.default.createElement(p.Row,{className:"no-gutters"},C.default.createElement(p.Col,{className:w.colLeft,md:3},C.default.createElement("div",{className:w.colLeftContent},"Remote Control")),C.default.createElement(p.Col,{className:w.colMid+" row",md:4},C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/x.svg"})),C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/check.svg"}))),C.default.createElement(p.Col,{className:w.colSpacer,md:1}),C.default.createElement(p.Col,{className:w.colRight+" row",md:4},C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/x.svg"})),C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/check.svg"})))),C.default.createElement(p.Row,{className:"no-gutters"},C.default.createElement(p.Col,{className:w.colLeft,md:3},C.default.createElement("div",{className:w.colLeftContent},"$5/month Loyalty Credit")),C.default.createElement(p.Col,{className:w.colMid+" row",md:4},C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/x.svg"})),C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/check.svg"}))),C.default.createElement(p.Col,{className:w.colSpacer,md:1}),C.default.createElement(p.Col,{className:w.colRight+" row",md:4},C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/x.svg"})),C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/check.svg"})))),C.default.createElement(p.Row,{className:"no-gutters"},C.default.createElement(p.Col,{className:w.colLeft,md:3},C.default.createElement("div",{className:w.colLeftContent},"Warranty")),C.default.createElement(p.Col,{className:w.colMid+" row",md:4},C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("div",null,"3 years")),C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("div",{className:w.highlight},"Lifetime"))),C.default.createElement(p.Col,{className:w.colSpacer,md:1}),C.default.createElement(p.Col,{className:w.colRight+" row",md:4},C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("div",null,"3 years")),C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("div",{className:w.highlight},"Lifetime")))),C.default.createElement(p.Row,{className:"no-gutters"},C.default.createElement(p.Col,{className:w.colLeft,md:3},C.default.createElement("div",{className:w.colLeftContent},"Live Voice Assistance")),C.default.createElement(p.Col,{className:w.colMid+" row",md:4},C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/x.svg"})),C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/check.svg"}))),C.default.createElement(p.Col,{className:w.colSpacer,md:1}),C.default.createElement(p.Col,{className:w.colRight+" row",md:4},C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/x.svg"})),C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/check.svg"})))),C.default.createElement(p.Row,{className:"no-gutters"},C.default.createElement(p.Col,{className:w.colLeft+" "+w.colLeftLast,md:3},C.default.createElement("div",{className:w.colLeftContent},"Camera")),C.default.createElement(p.Col,{className:w.colMid+" row",md:4},C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/x.svg"})),C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/check.svg"}))),C.default.createElement(p.Col,{className:w.colSpacer,md:1}),C.default.createElement(p.Col,{className:w.colRight+" row",md:4},C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/x.svg"})),C.default.createElement(p.Col,{className:w.compareContent,xs:6},C.default.createElement("img",{className:"img-fluid",src:"/static/images/check.svg"})))),C.default.createElement(p.Row,{className:"no-gutters"},C.default.createElement(p.Col,{md:{size:4,offset:3}},C.default.createElement("div",{className:w.coveClubTableFooter},C.default.createElement("div",{className:w.selectionBox},C.default.createElement(p.Row,{className:"no-gutters"},C.default.createElement(p.Col,{xs:{size:2,offset:1}},C.default.createElement("div",null,C.default.createElement(h.default,{clickHandler:function(){return e.selectSubscriptionType("clubBasic")},label:[C.default.createElement("span",{className:"bold"})],checked:"clubBasic"===t.subscriptionType}))),C.default.createElement(p.Col,{className:w.optionLabel,xs:8},"Basic")),C.default.createElement(p.Row,{className:"no-gutters"},C.default.createElement(p.Col,{xs:{size:10,offset:3}},C.default.createElement("div",{className:w.highlight},"$19.99/mo")))),C.default.createElement("div",{className:w.selectionBox},C.default.createElement(p.Row,{className:"no-gutters"},C.default.createElement(p.Col,{xs:{size:2,offset:1}},C.default.createElement("div",null,C.default.createElement(h.default,{clickHandler:function(){return e.selectSubscriptionType("clubPremium")},label:[C.default.createElement("span",{className:"bold"})],checked:"clubPremium"===t.subscriptionType}))),C.default.createElement(p.Col,{className:w.optionLabel,xs:8},"Premium")),C.default.createElement(p.Row,{className:"no-gutters"},C.default.createElement(p.Col,{xs:{size:10,offset:3}},C.default.createElement("div",{className:w.highlight},"$29.99/mo")))),C.default.createElement(p.Row,null,C.default.createElement(p.Col,{className:w.financeOption,xs:{size:10,offset:1}},C.default.createElement(h.default,{clickHandler:function(){return e.toggleFinance()},label:[C.default.createElement("span",null,"Pay equipment in full")],checked:!t.finance})),C.default.createElement(p.Col,{className:w.financeOption,xs:{size:10,offset:1}},C.default.createElement(h.default,{clickHandler:function(){return e.toggleFinance()},label:[C.default.createElement("span",null,"Finance equipment at",C.default.createElement("br",null)," 0% APR for 60 months")],checked:t.finance}))),C.default.createElement(p.Row,null,C.default.createElement(p.Col,{xs:12},C.default.createElement(N.default,{href:"/checkout"},C.default.createElement("div",{className:w.selectBtn+" mx-auto"},"Select")))))),C.default.createElement(p.Col,{md:1}),C.default.createElement(p.Col,{md:4},C.default.createElement("div",{className:w.nonClubTableFooter},C.default.createElement("div",{className:w.selectionBox},C.default.createElement(p.Row,{className:"no-gutters"},C.default.createElement(p.Col,{xs:{size:2,offset:1}},C.default.createElement("div",null,C.default.createElement(h.default,{clickHandler:function(){return e.selectSubscriptionType("ncBasic")},label:[C.default.createElement("span",{className:"bold"})],checked:"ncBasic"===t.subscriptionType}))),C.default.createElement(p.Col,{className:w.optionLabel,xs:8},"Basic")),C.default.createElement(p.Row,{className:"no-gutters"},C.default.createElement(p.Col,{xs:{size:10,offset:3}},C.default.createElement("div",{className:w.alert},"$19.99/mo")))),C.default.createElement("div",{className:w.selectionBox},C.default.createElement(p.Row,{className:"no-gutters"},C.default.createElement(p.Col,{xs:{size:2,offset:1}},C.default.createElement("div",null,C.default.createElement(h.default,{clickHandler:function(){return e.selectSubscriptionType("ncPremium")},label:[C.default.createElement("span",{className:"bold"})],checked:"ncPremium"===t.subscriptionType}))),C.default.createElement(p.Col,{className:w.optionLabel,xs:8},"Premium")),C.default.createElement(p.Row,{className:"no-gutters"},C.default.createElement(p.Col,{xs:{size:10,offset:3}},C.default.createElement("div",{className:w.alert},"$29.99/mo")))),C.default.createElement(p.Row,null,C.default.createElement(p.Col,{xs:12},C.default.createElement(N.default,{href:"/checkout"},C.default.createElement("div",{className:w.selectBtn+" mx-auto"},"Select"))))))))}}]),t}(E.Component),k=function(e){return{payment:e.payment}},y=function(e){return{toggleFinance:(0,_.bindActionCreators)(v.toggleFinance,e),selectSubscriptionType:(0,_.bindActionCreators)(v.selectSubscriptionType,e)}};t.default=(0,b.connect)(k,y)(R)},279:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=l(7),s=a(c),n=l(1),m=a(n),o=l(4),u=a(o),r=l(2),i=a(r),d=l(3),f=a(d),E=l(0),C=a(E),g=l(15),N=a(g),_=l(12),b=l(31),p=l(24),v=l(6),x=l(22),h=a(x),w={mobileContainer:"coveClubMobile__mobileContainer___3rxTC",header:"coveClubMobile__header___2SeU_",headerSubText:"coveClubMobile__headerSubText___18cQ6",compareTable:"coveClubMobile__compareTable___EOm2m",colHeader:"coveClubMobile__colHeader___3CxhQ",highlight:"coveClubMobile__highlight___uqEri",alert:"coveClubMobile__alert___2ov-y",colLabel:"coveClubMobile__colLabel___1vRzC",rowLabel:"coveClubMobile__rowLabel___226e3",nonClubRow:"coveClubMobile__nonClubRow___2ROrE",compareRow:"coveClubMobile__compareRow___3HYRw",cell:"coveClubMobile__cell___1AEm2",selectionBox:"coveClubMobile__selectionBox___1H9zm",optionLabel:"coveClubMobile__optionLabel___bcql7",financeOption:"coveClubMobile__financeOption___4iK4m",selectBtn:"coveClubMobile__selectBtn___19AN-"},R=function(e){function t(e){(0,m.default)(this,t);var l=(0,i.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return l.toggleFinance=l.toggleFinance.bind(l),l.selectSubscriptionType=l.selectSubscriptionType.bind(l),l}return(0,f.default)(t,e),(0,u.default)(t,[{key:"toggleFinance",value:function(){this.props.toggleFinance()}},{key:"selectSubscriptionType",value:function(e){this.props.selectSubscriptionType(e)}},{key:"render",value:function(){var e=this,t=this.props.payment;return C.default.createElement("div",{className:w.mobileContainer},C.default.createElement(v.Row,{className:w.header},C.default.createElement("h2",null,"Cove Members do CovePay"),C.default.createElement("div",{className:w.headerSubText},"Save $5/mo on your monitoring and use CoveClub EasyPay to pay your equipment off over time with 0% APR")),C.default.createElement("div",{className:w.compareTable},C.default.createElement(v.Row,null,C.default.createElement(v.Col,{className:w.colHeader,xs:6},C.default.createElement("h4",{className:w.highlight},"Cove Club",C.default.createElement("br",null),"$99")),C.default.createElement(v.Col,{className:w.colHeader,xs:6},C.default.createElement("h4",null,"Non-Club"))),C.default.createElement(v.Row,{className:"no-gutters"},C.default.createElement(v.Col,{className:w.colLabel,xs:3},C.default.createElement("h5",{className:w.highlight},"$19.99"),"Basic"),C.default.createElement(v.Col,{className:w.colLabel,xs:3},C.default.createElement("h5",{className:w.highlight},"$29.99"),"Premium"),C.default.createElement(v.Col,{className:w.colLabel,xs:3},C.default.createElement("h5",{className:w.alert},"$24.99"),"Basic"),C.default.createElement(v.Col,{className:w.colLabel,xs:3},C.default.createElement("h5",{className:w.alert},"$34.99"),"Premium")),C.default.createElement(v.Row,null,C.default.createElement(v.Col,{className:w.rowLabel,xs:12},"24/7 Monitoring")),C.default.createElement(v.Row,{className:w.compareRow},C.default.createElement(v.Col,{xs:6},C.default.createElement(v.Row,{className:"no-gutters"},C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/check.svg",alt:"check icon"})),C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/check.svg",alt:"check icon"})))),C.default.createElement(v.Col,{xs:6},C.default.createElement(v.Row,{className:w.nonClubRow+" no-gutters"},C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/check.svg",alt:"check icon"})),C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/check.svg",alt:"check icon"}))))),C.default.createElement(v.Row,null,C.default.createElement(v.Col,{className:w.rowLabel,xs:12},"App Support")),C.default.createElement(v.Row,{className:w.compareRow},C.default.createElement(v.Col,{xs:6},C.default.createElement(v.Row,{className:"no-gutters"},C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/x.svg",alt:"x icon"})),C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/check.svg",alt:"check icon"})))),C.default.createElement(v.Col,{xs:6},C.default.createElement(v.Row,{className:w.nonClubRow+" no-gutters"},C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/x.svg",alt:"x icon"})),C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/check.svg",alt:"check icon"}))))),C.default.createElement(v.Row,null,C.default.createElement(v.Col,{className:w.rowLabel,xs:12},"Remote Control")),C.default.createElement(v.Row,{className:w.compareRow},C.default.createElement(v.Col,{xs:6},C.default.createElement(v.Row,{className:"no-gutters"},C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/x.svg",alt:"x icon"})),C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/check.svg",alt:"check icon"})))),C.default.createElement(v.Col,{xs:6},C.default.createElement(v.Row,{className:w.nonClubRow+" no-gutters"},C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/x.svg",alt:"x icon"})),C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/check.svg",alt:"check icon"}))))),C.default.createElement(v.Row,null,C.default.createElement(v.Col,{className:w.rowLabel,xs:12},"$5/month Loyalty Credit")),C.default.createElement(v.Row,{className:w.compareRow},C.default.createElement(v.Col,{xs:6},C.default.createElement(v.Row,{className:"no-gutters"},C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/x.svg",alt:"x icon"})),C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/check.svg",alt:"check icon"})))),C.default.createElement(v.Col,{xs:6},C.default.createElement(v.Row,{className:w.nonClubRow+" no-gutters"},C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/x.svg",alt:"x icon"})),C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/check.svg",alt:"check icon"}))))),C.default.createElement(v.Row,null,C.default.createElement(v.Col,{className:w.rowLabel,xs:12},"Warranty")),C.default.createElement(v.Row,{className:w.compareRow},C.default.createElement(v.Col,{xs:6},C.default.createElement(v.Row,{className:"no-gutters"},C.default.createElement(v.Col,{className:w.cell,xs:6},"3 years"),C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("span",{className:w.highlight},"Lifetime")))),C.default.createElement(v.Col,{xs:6},C.default.createElement(v.Row,{className:w.nonClubRow+" no-gutters"},C.default.createElement(v.Col,{className:w.cell,xs:6},"3 years"),C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("span",{className:w.highlight},"Lifetime"))))),C.default.createElement(v.Row,null,C.default.createElement(v.Col,{className:w.rowLabel,xs:12},"Live Voice Assistant")),C.default.createElement(v.Row,{className:w.compareRow},C.default.createElement(v.Col,{xs:6},C.default.createElement(v.Row,{className:"no-gutters"},C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/x.svg",alt:"x icon"})),C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/check.svg",alt:"check icon"})))),C.default.createElement(v.Col,{xs:6},C.default.createElement(v.Row,{className:w.nonClubRow+" no-gutters"},C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/x.svg",alt:"x icon"})),C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/check.svg",alt:"check icon"}))))),C.default.createElement(v.Row,null,C.default.createElement(v.Col,{className:w.rowLabel,xs:12},"Camera")),C.default.createElement(v.Row,{className:w.compareRow},C.default.createElement(v.Col,{xs:6},C.default.createElement(v.Row,{className:"no-gutters"},C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/x.svg",alt:"x icon"})),C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/check.svg",alt:"check icon"})))),C.default.createElement(v.Col,{xs:6},C.default.createElement(v.Row,{className:w.nonClubRow+" no-gutters"},C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/x.svg",alt:"x icon"})),C.default.createElement(v.Col,{className:w.cell,xs:6},C.default.createElement("img",{src:"/static/images/check.svg",alt:"check icon"})))))),C.default.createElement("div",{className:w.selectionBox},C.default.createElement(v.Row,{className:"no-gutters"},C.default.createElement(v.Col,{xs:{size:2,offset:1}},C.default.createElement("div",null,C.default.createElement(h.default,{clickHandler:function(){return e.selectSubscriptionType("clubBasic")},label:[C.default.createElement("span",{className:"bold"})],checked:"clubBasic"===t.subscriptionType}))),C.default.createElement(v.Col,{className:w.optionLabel,xs:8},"Basic")),C.default.createElement(v.Row,{className:"no-gutters"},C.default.createElement(v.Col,{xs:{size:10,offset:3}},C.default.createElement("div",{className:w.highlight},"$19.99/mo")))),C.default.createElement(v.Collapse,{isOpen:"clubBasic"===t.subscriptionType},C.default.createElement(v.Row,null,C.default.createElement(v.Col,{className:w.financeOption,xs:{size:10,offset:1}},C.default.createElement(h.default,{clickHandler:function(){return e.toggleFinance()},label:[C.default.createElement("span",null,"Pay equipment in full")],checked:!t.finance})),C.default.createElement(v.Col,{className:w.financeOption,xs:{size:10,offset:1}},C.default.createElement(h.default,{clickHandler:function(){return e.toggleFinance()},label:[C.default.createElement("span",null,"Finance equipment at",C.default.createElement("br",null)," 0% APR for 60 months")],checked:t.finance})))),C.default.createElement("div",{className:w.selectionBox},C.default.createElement(v.Row,{className:"no-gutters"},C.default.createElement(v.Col,{xs:{size:2,offset:1}},C.default.createElement("div",null,C.default.createElement(h.default,{clickHandler:function(){return e.selectSubscriptionType("clubPremium")},label:[C.default.createElement("span",{className:"bold"})],checked:"clubPremium"===t.subscriptionType}))),C.default.createElement(v.Col,{className:w.optionLabel,xs:8},"Premium")),C.default.createElement(v.Row,{className:"no-gutters"},C.default.createElement(v.Col,{xs:{size:10,offset:3}},C.default.createElement("div",{className:w.highlight},"$29.99/mo")))),C.default.createElement(v.Collapse,{isOpen:"clubPremium"===t.subscriptionType},C.default.createElement(v.Row,null,C.default.createElement(v.Col,{className:w.financeOption,xs:{size:10,offset:1}},C.default.createElement(h.default,{clickHandler:function(){return e.toggleFinance()},label:[C.default.createElement("span",null,"Pay equipment in full")],checked:!t.finance})),C.default.createElement(v.Col,{className:w.financeOption,xs:{size:10,offset:1}},C.default.createElement(h.default,{clickHandler:function(){return e.toggleFinance()},label:[C.default.createElement("span",null,"Finance equipment at",C.default.createElement("br",null)," 0% APR for 60 months")],checked:t.finance})))),C.default.createElement("div",{className:w.selectionBox},C.default.createElement(v.Row,{className:"no-gutters"},C.default.createElement(v.Col,{xs:{size:2,offset:1}},C.default.createElement("div",null,C.default.createElement(h.default,{clickHandler:function(){return e.selectSubscriptionType("ncBasic")},label:[C.default.createElement("span",{className:"bold"})],checked:"ncBasic"===t.subscriptionType}))),C.default.createElement(v.Col,{className:w.optionLabel,xs:8},"Basic")),C.default.createElement(v.Row,{className:"no-gutters"},C.default.createElement(v.Col,{xs:{size:10,offset:3}},C.default.createElement("div",{className:w.alert},"$24.99/mo")))),C.default.createElement("div",{className:w.selectionBox},C.default.createElement(v.Row,{className:"no-gutters"},C.default.createElement(v.Col,{xs:{size:2,offset:1}},C.default.createElement("div",null,C.default.createElement(h.default,{clickHandler:function(){return e.selectSubscriptionType("ncPremium")},label:[C.default.createElement("span",{className:"bold"})],checked:"ncPremium"===t.subscriptionType}))),C.default.createElement(v.Col,{className:w.optionLabel,xs:8},"Premium")),C.default.createElement(v.Row,{className:"no-gutters"},C.default.createElement(v.Col,{xs:{size:10,offset:3}},C.default.createElement("div",{className:w.alert},"$34.99/mo")))),C.default.createElement(v.Row,null,C.default.createElement(v.Col,{xs:12},C.default.createElement(N.default,{href:"/checkout"},C.default.createElement("div",{className:w.selectBtn+" mx-auto"},"Select")))))}}]),t}(E.Component),k=function(e){return{payment:e.payment}},y=function(e){return{toggleFinance:(0,_.bindActionCreators)(p.toggleFinance,e),selectSubscriptionType:(0,_.bindActionCreators)(p.selectSubscriptionType,e)}};t.default=(0,b.connect)(k,y)(R)}},[276]);
            return { page: comp.default }
          })
        