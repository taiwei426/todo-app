(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,n){e.exports=n(224)},224:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(43),i=n.n(a),c=n(6),u=n(5),s=n(98),p=n(9),l=n(10),d=n(12),f=n(11),O=n(226),m=n(225),b=n(16),v=n.n(b),h=n(33),y=n(99),T=n.n(y).a.create({baseURL:"http://localhost:3001"}),D=function(e){return{type:"TODO_GET",payload:e}},E=function(){return{type:"DESELECT_ACTIVE_TODO"}},j=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onCheck=function(t){var n=t.itemId;t.input.value&&e.props.deleteToDo(n)},e.onEditClick=function(t){e.props.getToDo(t)},e.renderCheckMark=function(t){return e.onCheck(t),r.a.createElement("input",Object.assign({},t.input,{type:"checkbox",value:"false"}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.itemProps,n=t.id,o=t.input;return r.a.createElement("form",{id:n},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},style:{display:"inline-block"}},r.a.createElement(O.a,{name:o,component:this.renderCheckMark,item:o,itemId:n}),r.a.createElement("span",{onClick:function(){return e.onEditClick(e.props.itemProps)}},o)))}}]),n}(r.a.Component);j=Object(c.b)((function(e){return{activeToDo:e.activeToDo}}),{deleteToDo:function(e){return function(){var t=Object(h.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.delete("/todos/".concat(e));case 2:console.log("deleting id: ".concat(e)),n({type:"TODO_DELETE",payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getToDo:D})(j);var g=Object(m.a)({form:"items",enableReinitialize:!0})(j),C=n(44),k=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).renderInput=function(t){return r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t.input,{autoComplete:"off",autoFocus:!0,onKeyDown:e.onKeyPress})),t.meta.error)},e.formOnChangeSubmit=function(t){e.props.formOnChangeSubmit(t)},e.formOnSubmit=function(){e.props.formOnSubmit()},e.onKeyPress=function(t){e.props.arrowsKeyPress(t)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initialize(this.props.initialValues)}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onChange:function(){return setTimeout(e.props.handleSubmit(e.formOnChangeSubmit))},onSubmit:this.props.handleSubmit(this.formOnSubmit)},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},style:{display:"inline-block"}},r.a.createElement(O.a,{name:"input",component:this.renderInput})))}}]),n}(r.a.Component);k=Object(m.a)({form:"create-todo",enableReinitialize:!0,validate:function(e){var t={};return e.input||(t.input=" "),t}})(k);var S=Object(c.b)((function(e){return{initialValues:{input:e.activeToDo.input},activeToDo:e.activeToDo,todos:Object.values(e.todos)}}),{deselectActiveToDo:E,getToDo:D})(k),w=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(p.a)(this,n),(o=t.call(this,e)).formOnChangeSubmit=function(e){o.props.editToDo(o.props.activeToDo.id,e)},o.getNextItem=function(e){o.props.todos.forEach((function(t){if(t.id===o.props.activeToDo.id){var n=-1;if("enter"===e||40===e||9===e?n=o.props.todos.indexOf(t)+1:38===e&&(n=o.props.todos.indexOf(t)-1),n===o.props.todos.length)o.props.deselectActiveToDo();else{if(-1===n)return null;o.props.getToDo(o.props.todos[n])}}}))},o.formOnSubmit=function(){o.getNextItem("enter")},o.arrowsKeyPress=function(e){38===e.keyCode?o.getNextItem(38):40===e.keyCode?o.getNextItem(40):e.keyCode},o.handleKeyDown=o.arrowsKeyPress.bind(Object(C.a)(o)),o}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(S,{formOnChangeSubmit:this.formOnChangeSubmit,formOnSubmit:this.formOnSubmit,arrowsKeyPress:this.arrowsKeyPress})}}]),n}(r.a.Component),_=Object(c.b)((function(e){return{activeToDo:e.activeToDo,todos:Object.values(e.todos)}}),{editToDo:function(e,t){return function(){var n=Object(h.a)(v.a.mark((function n(o){var r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T.patch("/todos/".concat(e),t);case 2:r=n.sent,o({type:"TODOS_EDIT",payload:r.data});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},deselectActiveToDo:E,getToDo:D})(w),P=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getToDos()}},{key:"render",value:function(){var e=this;return this.props.todos?this.props.todos.map((function(t){return t.id===e.props.activeToDo.id?r.a.createElement(_,{itemProps:t,key:t.id}):r.a.createElement(g,{itemProps:t,key:t.id})})):r.a.createElement("div",null,"loading...")}}]),n}(r.a.Component),x=Object(c.b)((function(e){return{todos:Object.values(e.todos),activeToDo:e.activeToDo}}),{getToDos:function(){return function(){var e=Object(h.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("/todos");case 2:n=e.sent,t({type:"TODOS_GET",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(P),I=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).formOnChangeSubmit=function(t,n){e.props.createToDo(t).then((function(){return e.props.getToDo(e.props.todos[e.props.todos.length-1])}))},e.arrowsKeyPress=function(t){if(38===t.keyCode){var n=e.props.todos.length-1;e.props.getToDo(e.props.todos[n])}},e}return Object(l.a)(n,[{key:"render",value:function(){return this.props.activeToDo.id?r.a.createElement("input",null):r.a.createElement(S,{formOnChangeSubmit:this.formOnChangeSubmit,arrowsKeyPress:this.arrowsKeyPress})}}]),n}(r.a.Component),K=Object(c.b)((function(e){return{activeToDo:e.activeToDo,todos:Object.values(e.todos)}}),{createToDo:function(e){return function(){var t=Object(h.a)(v.a.mark((function t(n){var o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.post("/todos",e);case 2:o=t.sent,n({type:"TODO_CREATE",payload:o.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getToDo:D})(I),A=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{onClick:function(){return e.props.deselectActiveToDo()},style:{minHeight:"100vh"}},r.a.createElement("h3",null,"To Do"),r.a.createElement(x,null),r.a.createElement(K,null))}}]),n}(r.a.Component),L=Object(c.b)(null,{deselectActiveToDo:E})(A),N=n(32),R=n(47),M=n(66),V=n.n(M),G=n(227),z=Object(u.c)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TODO_CREATE":return Object(R.a)({},e,Object(N.a)({},t.payload.id,t.payload));case"TODOS_GET":return Object(R.a)({},e,{},V.a.mapKeys(t.payload,"id"));case"TODO_DELETE":return V.a.omit(e,t.payload);case"TODOS_EDIT":return Object(R.a)({},e,Object(N.a)({},t.payload.id,t.payload));default:return e}},activeToDo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TODO_GET":return{id:t.payload.id,input:t.payload.input};case"DESELECT_ACTIVE_TODO":return{};default:return e}},form:G.a}),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,U=Object(u.e)(z,J(Object(u.a)(s.a)));i.a.render(r.a.createElement(c.a,{store:U},r.a.createElement(L,null)),document.querySelector("#root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.dda0ade1.chunk.js.map