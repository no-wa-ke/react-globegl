(this["webpackJsonpreact-globegl"]=this["webpackJsonpreact-globegl"]||[]).push([[0],{89:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(13),l=t.n(o),c=t(36),d=t(44);class s extends r.a.Component{render(){return r.a.createElement("div",{className:"application"},r.a.createElement(d.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"K I D O Y O J I"),r.a.createElement("link",{rel:"icon",href:"icon/favicon.ico"})))}}var m=s,u=t(47),i=t.n(u);t(88),t(89);class h extends r.a.Component{render(){return r.a.createElement("div",{className:"Loading-container"},r.a.createElement(i.a,{type:"Puff",color:"#FFFFFF",height:100,width:100,timeout:5e3}))}}t(39);var p=t(123);t(125),t(127),t(129),t(126),t(128),t(49),t(51),t(50),t(52);Object(p.a)((e=>({root:{width:"50%",position:"absolute",maxWidth:360,top:"50%",left:"25%",transform:"translateY(-50%) translateX(-50%)",backgroundColor:e.palette.background.dark,color:"#ffffff"}})));t(93);var E=t(53),g=t.n(E);class f extends n.Component{constructor(e){super(e),this.state={data:["a","a","a"]}}componentDidMount(){let e=document.querySelector(".timer1").querySelectorAll(".seconds").innerHTML,a=document.querySelectorAll(".seconds");console.info("-------------beforeUpdateState------------"),console.info(e),console.warn(a),this.setState({data:["a","b","c","d"]})}render(){return g()(".timer1",{date:"July 16, 2017 00:00:00",canContinue:!0,update(e){}}),r.a.createElement("div",{className:"timer1"},"Stroke 2017.06.17",r.a.createElement("div",null),"Days",r.a.createElement("div",{"data-days":!0}),"Hours",r.a.createElement("div",{"data-hours":!0}),"Minutes",r.a.createElement("div",{"data-minutes":!0}),r.a.createElement("span",{class:"seconds"},"Seconds"),r.a.createElement("div",{"data-seconds":!0}))}}var M=f;const b=[...Array(20).keys()].map((()=>({startLat:180*(Math.random()-.5),startLng:360*(Math.random()-.5),endLat:180*(Math.random()-.5),endLng:180*(Math.random()-.5),color:[["red","red","red","red"][Math.round(3*Math.random())],["red","red","red","red"][Math.round(1*Math.random())]]}))),v=()=>r.a.createElement(c.a,{globeImageUrl:"//unpkg.com/three-globe/example/img/earth-night.jpg",arcsData:b,arcColor:"color",arcDashLength:()=>Math.random(),arcDashGap:()=>Math.random(),arcDashAnimateTime:()=>4e4*Math.random()+50});t(94);const y=Object(n.lazy)((()=>new Promise((e=>{setTimeout((()=>{e({default:()=>r.a.createElement("b",null," ")})}),2500)}))));class k extends n.Component{render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(n.Suspense,{fallback:r.a.createElement(h,null)},r.a.createElement(y,null),r.a.createElement(v,null),r.a.createElement("div",{className:"App"},r.a.createElement(M,null))))}}var L=k;[...Array(20).keys()].map((()=>({startLat:180*(Math.random()-.1),startLng:360*(Math.random()-.1),endLat:180*(Math.random()-.1),endLng:180*(Math.random()-.1),color:[["red","white","blue","green"][Math.round(3*Math.random())],["red","white","blue","green"][Math.round(1*Math.random())]]}))),document.getElementById("root");l.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.5067538e.chunk.js.map