(this["webpackJsonpgradient-generator"]=this["webpackJsonpgradient-generator"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),i=n.n(r),s=n(2),l=n(1);function d(e){return Object(l.jsxs)("div",{className:"window",children:[Object(l.jsxs)("div",{className:"big"===e.size?"bar bar-big":"bar",children:[Object(l.jsxs)("div",{className:"bar-buttons",children:[Object(l.jsx)("span",{className:"dot red"}),Object(l.jsx)("span",{className:"dot yellow"}),Object(l.jsx)("span",{className:"dot green"})]}),"big"===e.size?Object(l.jsx)("div",{className:"text-bar"}):null]}),Object(l.jsx)("div",{className:"content",children:e.children})]})}var o=n(8),j=function(e){var t=e.id,n=Object(s.b)(),a=Object(s.c)((function(e){return e.color[t]}));return Object(l.jsx)("div",{className:"color-picker",children:Object(l.jsx)(d,{size:"small",children:Object(l.jsx)(o.a,{color:a,onChange:function(e){n({type:"COLOR_CHANGE",payload:{id:t,color:e}})}})})})};function b(){var e=Object(s.c)((function(e){return e.angle})),t=Object(s.c)((function(e){return e.gradientType})),n=Object(s.c)((function(e){return e.color[0]})),a=Object(s.c)((function(e){return e.color[1]})),c=Object(s.c)((function(e){return e.startingPoint})),r=Object(s.c)((function(e){return e.endingPoint})),i=function(e){return"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")"};return Object(l.jsx)("div",{className:"preview",children:Object(l.jsx)(d,{size:"big",children:Object(l.jsx)("div",{className:"preview-gradient",style:{background:function(t){return"linear"===t?t+"-gradient("+e+"deg, "+i(n)+c+"%, "+i(a)+" "+r+"%)":t+"-gradient("+i(n)+c+"%, "+i(a)+" "+r+"%)"}(t)}})})})}function u(){var e=Object(s.c)((function(e){return e.color[0]})),t=Object(s.c)((function(e){return e.color[1]})),n=Object(s.c)((function(e){return e.gradientType})),a=Object(s.c)((function(e){return e.angle})),c=Object(s.c)((function(e){return e.startingPoint})),r=Object(s.c)((function(e){return e.endingPoint})),i=Object(s.b)(),o=function(e){return"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")"};return Object(l.jsx)("div",{className:"settings",children:Object(l.jsxs)(d,{size:"small",children:[Object(l.jsx)("div",{className:"settings-inputs",children:Object(l.jsxs)("div",{className:"settings-inputs-wrapper",children:[Object(l.jsx)("p",{children:"gradient type"}),Object(l.jsxs)("div",{className:"radio-buttons",children:[Object(l.jsx)("input",{type:"radio",id:"linear",name:"gradientType",value:"linear",onChange:function(e){i({type:"GRADIENT_TYPE",payload:e.target.value})},checked:"linear"===n&&"checked"}),Object(l.jsx)("label",{htmlFor:"linear",children:"linear"}),Object(l.jsx)("input",{type:"radio",id:"radial",name:"gradientType",value:"radial",onChange:function(e){i({type:"GRADIENT_TYPE",payload:e.target.value})},checked:"radial"===n&&"checked"}),Object(l.jsx)("label",{htmlFor:"radial",children:"radial"})]}),Object(l.jsxs)("div",{className:"angle-slider",children:[Object(l.jsx)("p",{children:"angle"}),Object(l.jsx)("input",{type:"range",id:"angle",className:"slider",name:"angle",min:"0",max:"360",value:a,step:"1",onChange:function(e){return i({type:"SET_ANGLE",payload:e.target.value})}}),Object(l.jsx)("label",{htmlFor:"angle",children:a})]}),Object(l.jsxs)("div",{className:"shift-sliders",children:[Object(l.jsx)("p",{children:"shift"}),Object(l.jsx)("input",{type:"range",id:"startingPoint",className:"slider",name:"startingPoint",min:"0",max:"100",value:c,step:"1",onChange:function(e){return i({type:"SET_STARTING_POINT",payload:e.target.value})}}),Object(l.jsx)("label",{htmlFor:"starting-point",children:c}),Object(l.jsx)("input",{type:"range",id:"endingPoint",className:"slider",name:"endingPoint",min:"0",max:"100",value:r,step:"1",onChange:function(e){return i({type:"SET_ENDING_POINT",payload:e.target.value})}}),Object(l.jsx)("label",{htmlFor:"endingPoint",children:r})]})]})}),Object(l.jsxs)("div",{className:"gradient-result",children:[Object(l.jsx)("textarea",{value:function(n){return"linear"===n?n+"-gradient("+a+"deg, "+o(e)+" "+c+"%, "+o(t)+" "+r+"%)":n+"-gradient("+o(e)+c+"%, "+o(t)+" "+r+"%)"}(n)+";",readOnly:!0,name:"textarea",id:"textarea",cols:"10",rows:"3",autoCorrect:"off",spellCheck:"false",wrap:"soft"}),Object(l.jsx)("button",{className:"copy-button",onClick:function(){document.getElementById("textarea").select(),document.execCommand("copy")},children:"Copy to clipboard"})]})]})})}n(21);var O=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"background",children:Object(l.jsx)("div",{className:"shape"})}),Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"simple gradient generator"})}),Object(l.jsxs)("main",{children:[Object(l.jsxs)("div",{className:"color-pickers",children:[Object(l.jsx)(j,{id:0}),Object(l.jsx)(j,{id:1})]}),Object(l.jsx)(b,{}),Object(l.jsx)(u,{})]}),Object(l.jsx)("footer",{children:Object(l.jsxs)("p",{children:["made by ",Object(l.jsx)("a",{href:"https://github.com/maximsmajda",children:"Maxim Smajda"})]})})]})},g=n(9),p=n(3),h={color:[{r:255,g:34,b:198,a:1},{r:89,g:15,b:216,a:1}],gradientType:"linear",angle:"307",startingPoint:"0",endingPoint:"81"};var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COLOR_CHANGE":var n=e.color;return n[t.payload.id]=t.payload.color,Object(p.a)({color:n},e);case"GRADIENT_TYPE":return console.log(t.payload),Object(p.a)(Object(p.a)({},e),{},{gradientType:t.payload});case"SET_ANGLE":return Object(p.a)(Object(p.a)({},e),{},{angle:t.payload});case"SET_STARTING_POINT":return Object(p.a)(Object(p.a)({},e),{},{startingPoint:t.payload});case"SET_ENDING_POINT":return Object(p.a)(Object(p.a)({},e),{},{endingPoint:t.payload});default:return e}},m=Object(g.a)(x,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(s.a,{store:m,children:Object(l.jsx)(O,{})})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.0ab2b167.chunk.js.map