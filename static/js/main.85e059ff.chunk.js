(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{50:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(10),s=c.n(n),l=c(24),o=(c(50),c(30));c(52);o.b.initializeApp({authDomain:"camera-health-66ccb.firebaseapp.com",databaseURL:"https://camera-health-66ccb-default-rtdb.firebaseio.com",projectId:"camera-health-66ccb"});var i=o.b.database(),r=c(105),j=c(99),b=c(103),d=c(104),u=(c(56),c(109)),p=c(107),h=c(101),O=c(106),m=c(9),f=Object(j.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:"theme.palette.text.secondary"},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function v(){var e=f(),t=Object(a.useState)([]),c=Object(l.a)(t,2),n=c[0],s=c[1],o=Object(a.useState)(0),j=Object(l.a)(o,2),v=j[0],x=j[1],g=Object(a.useState)([]),y=Object(l.a)(g,2),S=y[0],k=y[1],A=Object(a.useState)(""),C=Object(l.a)(A,2),E=C[0],N=C[1],w=Object(a.useState)(""),D=Object(l.a)(w,2),R=D[0],T=D[1],H=Object(a.useState)(!1),I=Object(l.a)(H,2),L=I[0],U=I[1],z=function(e){N(e.target.value)};return Object(a.useEffect)((function(){i.ref("stations").once("value",(function(e){k(Object.keys(e.val())),N(Object.keys(e.val())[0])}))}),[]),Object(a.useEffect)((function(){if(console.log("inside 2nd useEffect"),console.log(S),console.log(E),""!=E){var e=i.ref("stations/".concat(E,"/lastRead"));e.once("value",(function(e){T(e.val())})),e.on("value",(function(e){console.log(e.val()),T(e.val())}));var t=i.ref("stations/".concat(E,"/nvrDown"));t.once("value",(function(e){U(e.val())})),t.on("value",(function(e){console.log(e.val()),U(e.val())}));var c=i.ref("stations/".concat(E,"/cameras"));c.once("value",(function(e){var t=e.val();console.log(t),s(t);var c=0;Object.keys(t).map((function(e){"DOWN"===t[e].status&&(c+=1)})),x(c)})),c.on("value",(function(e){var t=e.val();s(t);var c=0;Object.keys(t).map((function(e){"DOWN"===t[e].status&&(c+=1)})),x(c)}))}}),[E]),0===Object.keys(n).length?Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"CAMERA HEALTH"}),Object(m.jsxs)(h.a,{className:e.formControl,children:[Object(m.jsx)(u.a,{id:"demo-simple-select-label",children:"Station"}),Object(m.jsx)(O.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:E,onChange:z,children:S.map((function(e){return Object(m.jsx)(p.a,{value:e,children:e})}))})]}),Object(m.jsx)(d.a,{})]}):Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"CAMERA HEALTH"}),Object(m.jsxs)(h.a,{className:e.formControl,children:[Object(m.jsx)(u.a,{id:"demo-simple-select-label",children:"Station"}),Object(m.jsx)(O.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:E,onChange:z,children:S.map((function(e){return Object(m.jsx)(p.a,{value:e,children:e})}))})]}),Object(m.jsxs)("h2",{children:[" ","Total Cam : ",Object.keys(n).length,", Down Cam : ",v," "]}),L?Object(m.jsx)("h2",{style:{color:"red"},children:" NVR is Down"}):Object(m.jsx)("h2",{style:{color:"green"},children:" NVR is UP"}),Object(m.jsxs)("h3",{children:[" Last Updated Time : ",R]}),Object(m.jsx)("div",{children:Object(m.jsx)(r.a,{container:!0,spacing:3,children:Object.keys(n).map((function(t){return Object(m.jsx)(r.a,{item:!0,xs:3,children:Object(m.jsxs)(b.a,{style:{color:"white",backgroundColor:"UP"===n[t].status?"green":"red",height:"44px",paddingTop:"29px",fontSize:"20px"},className:e.paper,children:[t,Object(m.jsx)("p",{style:{fontSize:"16px",position:"realtive",top:"-15px"},children:n[t].time?n[t].time:""})]})})}))})})]})}var x=document.getElementById("root");s.a.render(Object(m.jsx)(a.StrictMode,{children:Object(m.jsx)(v,{})}),x)}},[[64,1,2]]]);
//# sourceMappingURL=main.85e059ff.chunk.js.map