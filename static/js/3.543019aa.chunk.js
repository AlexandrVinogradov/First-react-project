(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[3],{505:function(e,a,t){e.exports={usersMessage:"Dialogs_usersMessage__367sT",dialogs_items:"Dialogs_dialogs_items__3jH3z",active:"Dialogs_active__3A4zG",user:"Dialogs_user__1I2vG",messages:"Dialogs_messages__2wBNS"}},506:function(e,a,t){e.exports={btnAddMessage:"AddMessageForm_btnAddMessage__3RC1o"}},507:function(e,a,t){"use strict";t.r(a);var s=t(204),n=t(0),r=t.n(n),i=t(505),c=t.n(i),o=t(13),l=function(e){var a="/dialogs/"+e.id;return r.a.createElement("li",{className:c.a.user,activeClassName:c.a.active},r.a.createElement(o.b,{to:a},e.name))},m=function(e){return r.a.createElement("li",{className:c.a.message},e.message)},u=t(10),d=t(49),g=t(130),b=t(205),p=t(506),f=t.n(p),_=Object(d.a)(50),E=Object(b.a)({form:"dialogAddMessageForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(g.a,{validate:[d.b,_],placeholder:"Enter your message",name:"newMessageBody",component:u.b})),r.a.createElement("div",null,r.a.createElement("button",{className:f.a.btnAddMessage},"Add message")))})),v=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return r.a.createElement(l,{name:e.name,id:e.id,key:e.id})})),s=a.messages.map((function(e){return r.a.createElement(m,{message:e.message,key:e.id})}));a.newMessageText;return r.a.createElement("div",{className:c.a.dialogs},r.a.createElement("div",{className:c.a.usersMessage},r.a.createElement("ul",{className:c.a.dialogs_items},t),r.a.createElement("ul",{className:c.a.messages},s)),r.a.createElement("div",null,r.a.createElement(E,{onSubmit:function(a){e.addMessage(a.newMessageBody)}})))},M=t(11),h=t(31),j=t(32),O=t(34),w=t(33),A=t(35),y=t(43),N=function(e){return{isAuth:e.auth.isAuth}},k=t(8);a.default=Object(k.d)(Object(M.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(a){e(Object(s.a)(a))}}})),(function(e){var a=function(a){function t(){return Object(h.a)(this,t),Object(O.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(A.a)(t,a),Object(j.a)(t,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(y.a,{to:"/login"})}}]),t}(r.a.Component);return Object(M.b)(N)(a)}))(v)}}]);
//# sourceMappingURL=3.543019aa.chunk.js.map