(this["webpackJsonpscrimba-forms"]=this["webpackJsonpscrimba-forms"]||[]).push([[0],{10:function(e,a,t){e.exports=t(18)},15:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(4),c=t.n(r),o=(t(15),t(16),t(2)),m=t(5),i=t(6),s=t(8),u=t(7),h=t(1),d=t(9),E=function(e){return l.a.createElement("main",null,l.a.createElement("form",null,l.a.createElement("p",null,"First Name"),l.a.createElement("input",{type:"text",name:"firtsName",value:e.data.firtsName,placeholder:"Firts Name",onChange:e.handleChange}),l.a.createElement("br",null),l.a.createElement("p",null,"Last Name"),l.a.createElement("input",{type:"text",name:"lastName",value:e.data.lastName,placeholder:"Last Name",onChange:e.handleChange}),l.a.createElement("br",null),l.a.createElement("p",null,"Your Age"),l.a.createElement("input",{type:"text",name:"age",value:e.data.age,placeholder:"Age",onChange:e.handleChange}),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"gender",value:"male",checked:"male"===e.data.gender,onChange:e.handleChange})," Male"),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"gender",value:"female",checked:"female"===e.data.gender,onChange:e.handleChange})," Female"),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"isVegan",checked:e.data.isVegan,onChange:e.handleChange})," Is vegetarian?"),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"isKosher",checked:e.data.isKosher,onChange:e.handleChange})," Is kosher?"),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"isLactoseFree",checked:e.data.isLactoseFree,onChange:e.handleChange})," Is Lactose Free?"),l.a.createElement("br",null),l.a.createElement("label",null,"Destination:"),l.a.createElement("select",{value:e.data.destination,onChange:e.handleChange,name:"destination"},l.a.createElement("option",null,"--Select A Destination--"),l.a.createElement("option",{value:"America"},"America"),l.a.createElement("option",{value:"Some Island"},"Some Island"),l.a.createElement("option",{value:"Moon"},"Moon"),l.a.createElement("option",{value:">The Sun (Death Wish)"},"The Sun (Death Wish)")),l.a.createElement("br",null),l.a.createElement("button",null,"Submit")),l.a.createElement("hr",null),l.a.createElement("h2",null,"Entered information:"),l.a.createElement("p",null,"Your name: ",e.data.firtsName," ",e.data.lastName),l.a.createElement("p",null,"Your age: ",e.data.age),l.a.createElement("p",null,"Your gender: ",e.data.gender),l.a.createElement("p",null,"Your destination: ",e.data.destination),l.a.createElement("p",null,"Your dietary restrictions:",l.a.createElement("p",null,"Vegan: ",e.data.isVegan?"Yes":"No"),l.a.createElement("p",null,"Kosher: ",e.data.isKosher?"Yes":"No"),l.a.createElement("p",null,"Lactose Free: ",e.data.isLactoseFree?"Yes":"No")))},g=function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(s.a)(this,Object(u.a)(a).call(this))).state={firtsName:"",lastName:"",age:"",gender:"",isVegan:!1,isKosher:!1,isLactoseFree:!1,destination:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"handleChange",value:function(e){var a=e.target,t=a.name,n=a.value,l=a.type,r=a.checked;"checkbox"===l?this.setState(Object(o.a)({},t,r)):this.setState(Object(o.a)({},t,n))}},{key:"render",value:function(){return l.a.createElement(E,{data:this.state,handleChange:this.handleChange})}}]),a}(n.Component);t(17);var p=function(){return l.a.createElement("div",{className:"tc"},l.a.createElement("div",null,l.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.4cb6f575.chunk.js.map