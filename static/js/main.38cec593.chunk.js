(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return f}));var a=n(57),r=n(0),o=n.n(r),c=n(23),l=n.n(c),i=n(93),s=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,c=n&&a;return o.a.createElement("div",{className:l.a.formControl+" "+(c?l.a.error:"")},o.a.createElement("div",null,r),c&&o.a.createElement("span",null,a))},u=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n,{className:l.a.textarea})))},m=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},f=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r))," ",c)}},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(36),r=n(13);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={dialogs:[{id:"1",name:"Adriana"},{id:"2",name:"Roberto"},{id:"3",name:"Gabriela"},{id:"4",name:"Gerardo"},{id:"5",name:"Camila"},{id:"6",name:"Silvia"}],messages:[{id:"1",message:"hi"},{id:"2",message:"Hoy are you?"},{id:"3",message:"Yo"}]},i=function(e){return{type:"ADD-MESSAGE",newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n=t.newMessageBody;return c({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:4,message:n}])});default:return e}}},137:function(e,t,n){e.exports=n.p+"static/media/preloader.cfec7f1a.gif"},139:function(e,t,n){e.exports=n.p+"static/media/avatar.0049a098.jpg"},166:function(e,t,n){e.exports=n(293)},171:function(e,t,n){},172:function(e,t,n){},23:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1_eJJ",error:"FormsControls_error__3Bj7o",formSummaryError:"FormsControls_formSummaryError__18Me8",textarea:"FormsControls_textarea__FQuZ9",input:"FormsControls_input__Id7Vv",checkbox:"FormsControls_checkbox__r3VAk"}},27:function(e,t,n){e.exports={avatar:"ProfileInfo_avatar__MtgDS",contact:"ProfileInfo_contact__fOaRI",highBlock:"ProfileInfo_highBlock__dfr1v",btnEdit:"ProfileInfo_btnEdit__265Wj",textarea:"ProfileInfo_textarea__1KGdg",btnSave:"ProfileInfo_btnSave__nnO2B"}},293:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),o=n(68),c=n.n(o),l=(n(171),n(30)),i=n(31),s=n(33),u=n(32),m=n(34),f=(n(172),n(5)),p=n.n(f),d=n(12),b=function(){return r.a.createElement("nav",{className:p.a.nav},r.a.createElement("ul",{className:p.a.ul},r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:"/profile",activeClassName:p.a.active,className:p.a.a},r.a.createElement("i",{class:"fa fa-home","aria-hidden":"true"}),r.a.createElement("div",{className:p.a.name,"data-text":p.a.home},"Profile"))),r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:"/dialogs",activeClassName:p.a.active,className:p.a.a},r.a.createElement("i",{class:"fa fa-comments-o","aria-hidden":"true"}),r.a.createElement("div",{className:p.a.name,"data-text":p.a.home},"Message"))),r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:"/news",activeClassName:p.a.active,className:p.a.a},r.a.createElement("i",{class:"fa fa-globe","aria-hidden":"true"}),r.a.createElement("div",{className:p.a.name,"data-text":p.a.home},"News"))),r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:"/music",activeClassName:p.a.active,className:p.a.a},r.a.createElement("i",{class:"fa fa-play","aria-hidden":"true"}),r.a.createElement("div",{className:p.a.name,"data-text":p.a.home},"Music"))),r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:"/settings",activeClassName:p.a.active,className:p.a.a},r.a.createElement("i",{class:"fa fa-sliders","aria-hidden":"true"}),r.a.createElement("div",{className:p.a.name,"data-text":p.a.home},"Settings"))),r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:"/users",activeClassName:p.a.active,className:p.a.a},r.a.createElement("i",{class:"fa fa-user-plus","aria-hidden":"true"}),r.a.createElement("div",{className:p.a.name,"data-text":p.a.home},"Users")))))},g=function(e){return r.a.createElement("div",null,"Music")},E=function(e){return r.a.createElement("div",null,"Settings")},h=function(e){return r.a.createElement("div",null,r.a.createElement("div",null," Friends"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("img",{src:"https://i.pinimg.com/originals/09/4f/c6/\r 094fc6adfddb1ba0fc6f73083e7c03bf.jpg"})),r.a.createElement("li",null,"\u043f\u0435\u0440\u0435\u0434\u0435\u043b\u0430\u0442\u044c"),r.a.createElement("li",null)))},v=n(38),O=n(36),w=n(13);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={news:[{id:"1",content:"Last month - June 2019 - 10th edition of ECMA-262 standard was officially published. What does it mean? - Well, ECMAScript 2019 is here!"},{id:"2",content:"The latest and greatest specification for JavaScript and other derivatives languages to follow."},{id:"3",content:"And while you may already have heard of some of its new features, we`ll recall all of them! Plus some ECMAScript details and a sneak-peak of what`s coming next!"}]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-NEW":var n=t.newNewsText;return P({},e,{news:[].concat(Object(O.a)(e.news),[{id:5,content:n}]),newsText:""});default:return e}},S=n(56),N=n.n(S),k=function(e){return r.a.createElement("li",{className:N.a.news},e.content)},C=n(93),x=n(130),I=n(10),A=Object(x.a)({form:"profileAddNewPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(C.a,{placeholder:"Enter your news",name:"newNewsText",component:I.b})),r.a.createElement("div",null,r.a.createElement("button",{className:N.a.btnAddNew},"Add news")))})),T=function(e){var t=e.newsPage.news.map((function(e){return r.a.createElement(k,{content:e.content,id:e.id})}));return r.a.createElement("div",null,r.a.createElement("b",null,"News:"),r.a.createElement("div",null,r.a.createElement("div",{className:N.a.newsBlock},t),r.a.createElement("div",null,r.a.createElement(A,{onSubmit:function(t){e.addNew(t.newNewsText)}}))))},U=n(11),D=Object(U.b)((function(e){return{newsPage:e.newsPage}}),{addNew:function(e){return{type:"ADD-NEW",newNewsText:e}}})(T),F=n(7),L=n.n(F),B=n(15),M=n(135).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ae4c3a01-1d12-4498-85df-24268c218e2b"}}),R={requestUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return M.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return M.post("follow/".concat(e))},unfollow:function(e){return M.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object"),z.getProfile(e)}},z={getProfile:function(e){return M.get("profile/"+e)},getStatus:function(e){return M.get("/profile/status/"+e)},updateStatus:function(e){return M.put("/profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),M.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return M.put("/profile",e)}},G=function(){return M.get("auth/me")},H=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return M.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},W=function(){return M.delete("auth/login")},J=function(){return M.get("security/get-captcha-url")};function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Z=function(e,t,n,a){return e.map((function(e){return e[n]===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},a):e}))};function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},X=function(e){return{type:"FOLLOW",userId:e}},K=function(e){return{type:"UNFOLLOW",userId:e}},$=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},ee=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},te=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},ne=function(){var e=Object(B.a)(L.a.mark((function e(t,n,a,r){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(te(!0,n)),e.next=3,a(n);case 3:0==e.sent.data.resultCode&&t(r(n)),t(te(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Y({},e,{users:Z(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Y({},e,{users:Z(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Y({},e,{users:t.users});case"SET_CURRENT_PAGE":return Y({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Y({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Y({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Y({},e,{followingInProgress:t.isFetching?[].concat(Object(O.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},re=n(57),oe=n(42),ce=n(75),le=n.n(ce),ie=n(136),se=n.n(ie),ue=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,l=e.portionSize,i=void 0===l?10:l,s=Math.ceil(t/n),u=[],m=1;m<=s;m++)u.push(m);var f=Math.ceil(s/i),p=Object(a.useState)(1),d=Object(oe.a)(p,2),b=d[0],g=d[1],E=(b-1)*i+1,h=b*i;return r.a.createElement("div",{className:le.a.paginator},b>=1&&r.a.createElement("button",{disabled:b<=1,onClick:function(){g(b-1)}},"prev"),u.filter((function(e){return e>=E&&e<=h})).map((function(e){return r.a.createElement("span",{className:se()(Object(w.a)({},le.a.selectedPage,o===e),le.a.pageNumber),key:e,onClick:function(t){c(e)}},e)})),f>b&&r.a.createElement("button",{onClick:function(){g(b+1)}},"next"))},me=n(43),fe=n.n(me),pe=n(73),de=n.n(pe),be=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,o=e.follow;return r.a.createElement("div",{className:fe.a.userInfo},r.a.createElement("div",null,r.a.createElement(d.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:de.a,className:fe.a.avatar}))),r.a.createElement("div",{className:fe.a.btnFollou},t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow")),r.a.createElement("div",{className:fe.a.userName},r.a.createElement("div",null,"Name: ",t.name),r.a.createElement("div",null,"Status: ",t.status||"nope")))},ge=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,o=e.onPageChanged,c=e.users,l=Object(re.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return r.a.createElement("div",null,r.a.createElement(ue,{currentPage:t,totalItemsCount:n,pageSize:a,onPageChanged:o}),r.a.createElement("div",null,c.map((function(e){return r.a.createElement(be,{key:e.id,followingInProgress:l.followingInProgress,user:e,unfollow:l.unfollow,follow:l.follow})}))))},Ee=n(137),he=n.n(Ee),ve=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:he.a}))},Oe=n(8),we=n(138),_e=Object(we.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Pe=function(e){return e.usersPage.pageSize},ye=function(e){return e.usersPage.totalUsersCount},je=function(e){return e.usersPage.currentPage},Se=function(e){return e.usersPage.isFetching},Ne=function(e){return e.usersPage.followingInProgress},ke=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.requestUsers(e,t)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement("div",{className:fe.a.preloader},r.a.createElement(ve,null)):null,r.a.createElement(ge,{users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,unfollow:this.props.unfollow,follow:this.props.follow,toggleIsFetching:this.props.toggleIsFetching,followingInProgress:this.props.followingInProgress}))}}]),t}(r.a.Component),Ce=Object(Oe.d)(Object(U.b)((function(e){return{users:_e(e),pageSize:Pe(e),totalUsersCount:ye(e),currentPage:je(e),isFetching:Se(e),followingInProgress:Ne(e)}}),{follow:function(e){return function(){var t=Object(B.a)(L.a.mark((function t(n){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ne(n,e,R.follow.bind(R),X);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(B.a)(L.a.mark((function t(n){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ne(n,e,R.unfollow.bind(R),K);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:$,toggleFollowingProgress:te,requestUsers:function(e,t){return function(){var n=Object(B.a)(L.a.mark((function n(a){var r;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(ee(!0)),a($(e)),n.next=4,R.requestUsers(e,t);case 4:r=n.sent,a(ee(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ke),xe=n(27),Ie=n.n(xe),Ae=function(e){var t=Object(a.useState)(!1),n=Object(oe.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(e.status),i=Object(oe.a)(l,2),s=i[0],u=i[1];Object(a.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("b",null,"Status"),": ",r.a.createElement("span",{onDoubleClick:function(){c(!0)}},e.status||"NOPE")),o&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},onBlur:function(){c(!1),e.updateStatus(s)},autoFocus:!0,value:s})))},Te=n(23),Ue=n.n(Te),De=Object(x.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile,a=e.error;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement("button",{className:Ie.a.btnSave},"Save")),a&&r.a.createElement("div",{className:Ue.a.formSummaryError},a),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,"Full name"),": ",Object(I.c)("Full name","fullName",[],I.a)),r.a.createElement("li",null,r.a.createElement("b",null,"About me"),": ",Object(I.c)("About me","aboutMe",[],I.b)),r.a.createElement("li",null,r.a.createElement("b",null,"Looking for a job"),": ",Object(I.c)("","lookingForAJob",[],I.a,{type:"checkbox"})),r.a.createElement("li",null,r.a.createElement("b",null,"My professionals skills"),": ",r.a.createElement("div",{className:Ie.a.field},Object(I.c)("My skills","lookingForAJobDescription",[],I.b))),r.a.createElement("li",null,r.a.createElement("b",null,"Contacts"),": ",Object.keys(n.contacts).map((function(e){return r.a.createElement("div",{key:e,className:Ie.a.contact},r.a.createElement("b",null,e,": ",Object(I.c)(e,"contacts."+e,[],I.a)))})))))})),Fe=function(e){var t=e.profile,n=e.isOwner,a=e.goToEditMode;return r.a.createElement("div",null,r.a.createElement("div",null,n&&r.a.createElement("button",{className:Ie.a.btnEdit,onClick:a},"Edit")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,"Full name"),": ",t.fullName),r.a.createElement("li",null,r.a.createElement("b",null,"About me"),": ",t.aboutMe||" ---"),r.a.createElement("li",null,r.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&r.a.createElement("li",null,r.a.createElement("b",null,"My professionals skills"),": ",t.lookingForAJobDescription),r.a.createElement("li",null,r.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return r.a.createElement(Le,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))))},Le=function(e){var t=e.contactTitle,n=e.contactValue;return""===n||null===n?null:r.a.createElement("div",{className:Ie.a.contact},r.a.createElement("b",null,t),": ",n)},Be=function(e){var t=e.profile,n=e.status,o=e.updateStatus,c=e.isOwner,l=e.savePhoto,i=e.saveProfile,s=Object(a.useState)(!1),u=Object(oe.a)(s,2),m=u[0],f=u[1];if(!t)return r.a.createElement(ve,null);return r.a.createElement("div",null,r.a.createElement("div",{className:Ie.a.description_block},r.a.createElement("div",{className:Ie.a.highBlock},r.a.createElement("div",null,r.a.createElement("img",{className:Ie.a.avatar,src:t.photos.large||de.a}),c&&r.a.createElement("label",{for:"file"},"Choose avatar")),m?r.a.createElement(De,{initialValues:t,profile:t,onSubmit:function(e){i(e).then((function(){f(!1)}))}}):r.a.createElement(Fe,{goToEditMode:function(){f(!0)},profile:t,isOwner:c})),c&&r.a.createElement("input",{type:"file",id:"file",onChange:function(e){e.target.files.length&&l(e.target.files[0])}}),r.a.createElement(Ae,{status:n,updateStatus:o})))},Me=n(50),Re=n.n(Me),ze=n(76),Ge=n.n(ze),He=n(139),We=n.n(He),Je=r.a.memo((function(e){return r.a.createElement("div",{className:Ge.a.item},r.a.createElement("img",{src:We.a}),e.message,r.a.createElement("div",{className:Ge.a.post},r.a.createElement("i",{class:"fa fa-thumbs-up","aria-hidden":"true"}),e.likesCount,r.a.createElement("span",null," like")),r.a.createElement("div",{className:Ge.a.line}))})),Ve=n(41),Ze=Object(Ve.a)(10),qe=Object(x.a)({form:"profileAddNewPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(C.a,{className:Re.a.textarea,validate:[Ve.b,Ze],name:"newPostText",component:I.b})),r.a.createElement("div",null,r.a.createElement("button",{className:Re.a.button},"Add post")))})),Ye=r.a.memo((function(e){var t=e.profilePage.posts.map((function(e){return r.a.createElement(Je,{key:e.id,message:e.message,likesCount:e.likesCount})}));return r.a.createElement("div",{className:Re.a.postsBlock},r.a.createElement("h3",{className:Re.a.title},"My posts"),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(qe,{onSubmit:function(t){e.addPost(t.newPostText)}}))),r.a.createElement("div",{className:Re.a.posts},t))})),Qe=n(22);function Xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Xe(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $e={posts:[{id:"1",message:"Hi, how are you?",likesCount:13},{id:"2",message:"Can you help me with react?",likesCount:19},{id:"3",message:"Looking for a job",likesCount:121}],profile:null,status:"",photos:"3"},et=function(e){return{type:"SET_STATUS",status:e}},tt=function(e){return function(){var t=Object(B.a)(L.a.mark((function t(n){var a;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n=t.newPostText;return Ke({},e,{newPostText:"",posts:[].concat(Object(O.a)(e.posts),[{id:6,message:n,likesCount:0}])});case"DELETE_POST":return Ke({},e,{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"SET_USER_PROFILE":return Ke({},e,{profile:t.profile});case"SET_STATUS":return Ke({},e,{status:t.status});case"SAVE_PHOTO_SUCCESS":return Ke({},e,{profile:Ke({},e.profile,{photos:t.photos})});default:return e}},at=Object(U.b)((function(e){return{profilePage:e.profilePage}}),{addPost:function(e){return{type:"ADD-POST",newPostText:e}}})(Ye),rt=function(e){return r.a.createElement("div",null,r.a.createElement(Be,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),r.a.createElement(at,null))},ot=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(rt,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),t}(r.a.Component),ct=Object(Oe.d)(Object(U.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:tt,getStatus:function(e){return function(){var t=Object(B.a)(L.a.mark((function t(n){var a;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.getStatus(e);case 2:a=t.sent,n(et(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(B.a)(L.a.mark((function t(n){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(et(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(B.a)(L.a.mark((function t(n){var a;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(B.a)(L.a.mark((function t(n,a){var r,o;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,z.saveProfile(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}n(tt(r)),t.next=10;break;case 8:return n(Object(Qe.a)("edit-profile",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),v.g)(ot),lt=n(44),it=n.n(lt),st=function(e){return r.a.createElement("header",{className:it.a.header},r.a.createElement("div",{className:it.a.container},r.a.createElement(d.b,{to:"/"},r.a.createElement("img",{src:"https://img.icons8.com/ios/2x/react-native.png"})),r.a.createElement("div",{className:it.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login,"  ",r.a.createElement("button",{onClick:e.logout,className:it.a.exitBtn},"exit")):r.a.createElement("div",{className:it.a.loginBtnBlock},r.a.createElement(d.b,{to:"/login",className:it.a.loginBtn},"Login")))))};function ut(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function mt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ut(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ut(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ft="react-network/auth/SET_USER_DATA",pt={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},dt=function(e,t,n,a){return{type:ft,payload:{userId:e,email:t,login:n,isAuth:a}}},bt=function(){return function(){var e=Object(B.a)(L.a.mark((function e(t){var n,a,r,o,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.login,c=a.email,t(dt(r,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},gt=function(){return function(){var e=Object(B.a)(L.a.mark((function e(t){var n,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:n=e.sent,a=n.data.url,t({type:"react-network/auth/GET_CAPTCHA_URL_SECCESS",payload:{captchaUrl:a}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ft:case"react-network/auth/GET_CAPTCHA_URL_SECCESS":return mt({},e,{},t.payload);default:return e}},ht=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(st,this.props)}}]),t}(r.a.Component),vt=Object(U.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(B.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:0===e.sent.data.resultCode&&t(dt(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ht),Ot=n(98),wt=n.n(Ot),_t=Object(x.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:Ue.a.input},Object(I.c)("Email","email",[Ve.b],I.a)),r.a.createElement("div",{className:Ue.a.input},Object(I.c)("Password","password",[Ve.b],I.a,{type:"password"})),r.a.createElement("div",{className:Ue.a.checkbox},Object(I.c)(null,"rememberMe",[],I.a,{type:"checkbox"},"remember me")),a&&r.a.createElement("img",{src:a}),a&&Object(I.c)("Symbols","captcha",[Ve.b],I.a,{}),n&&r.a.createElement("div",{className:Ue.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),Pt=Object(U.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,a){return function(){var r=Object(B.a)(L.a.mark((function r(o){var c,l;return L.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,H(e,t,n,a);case 2:if(0!==(c=r.sent).data.resultCode){r.next=7;break}o(bt()),r.next=14;break;case 7:if(10!==c.data.resultCode){r.next=12;break}return r.next=10,J();case 10:r.sent,o(gt());case 12:l=c.data.messages.length>0?c.data.messages[0]:"Some error",o(Object(Qe.a)("login",{_error:l}));case 14:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(v.a,{to:"/profile"}):r.a.createElement("div",{className:wt.a.loginBlock},r.a.createElement("div",null,r.a.createElement("h1",null,"LOGIN"),r.a.createElement(_t,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})),r.a.createElement("div",{className:wt.a.loginInfo},r.a.createElement("p",null,"Hello if you haven`t account you can use:"),r.a.createElement("p",null,"Login: ",r.a.createElement("u",null,"free@samuraijs.com")),r.a.createElement("p",null,"Password: ",r.a.createElement("u",null,"free")),r.a.createElement("p",null,"my id: 1487 you can use ",r.a.createElement("u",null,"...profile/1487"))))}));function yt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function jt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?yt(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var St={initialized:!1},Nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return jt({},e,{initialized:!0});default:return e}},kt=n(129),Ct=n(140),xt=n(131),It=Object(Oe.c)({profilePage:nt,newsPage:j,dialogsPage:kt.b,usersPage:ae,auth:Et,form:xt.a,app:Nt}),At=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Oe.d,Tt=Object(Oe.e)(It,At(Object(Oe.a)(Ct.a)));window.__store__=Tt;var Ut=Tt,Dt=r.a.lazy((function(){return n.e(3).then(n.bind(null,296))})),Ft=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).catchAllUnhandleErrors=function(e,t){},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandleErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandleErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",null,r.a.createElement(vt,null),r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(b,null),r.a.createElement("div",{className:"app-wraper-content"},r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/",render:function(){return r.a.createElement(v.a,{to:"/profile"})}}),r.a.createElement(v.b,{path:"/dialogs",render:(e=Dt,function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(e,t))})}),r.a.createElement(v.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(ct,null)}}),r.a.createElement(v.b,{path:"/news",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(v.b,{path:"/music",render:function(){return r.a.createElement(g,null)}}),r.a.createElement(v.b,{path:"/settings",render:function(){return r.a.createElement(E,null)}}),r.a.createElement(v.b,{path:"/friends",render:function(){return r.a.createElement(h,null)}}),r.a.createElement(v.b,{path:"/users",render:function(){return r.a.createElement(Ce,null)}}),r.a.createElement(v.b,{path:"/login",render:function(){return r.a.createElement(Pt,null)}}),r.a.createElement(v.b,{path:"*",render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}}))))):r.a.createElement(ve,null);var e}}]),t}(r.a.Component),Lt=Object(Oe.d)(Object(U.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(bt());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}),v.g)(Ft),Bt=function(e){return r.a.createElement(d.a,null,r.a.createElement(U.a,{store:Ut},r.a.createElement(Lt,null)))};c.a.render(r.a.createElement(Bt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"max length is ".concat(e," symbols")}}},43:function(e,t,n){e.exports={avatar:"Users_avatar__1WP5U",preloader:"Users_preloader__ToFaR",userInfo:"Users_userInfo__lujA5",btnFollou:"Users_btnFollou__17SWR"}},44:function(e,t,n){e.exports={header:"Header_header__1RC8r",loginBlock:"Header_loginBlock__2BTFH",container:"Header_container__2K3eO",exitBtn:"Header_exitBtn__JutkD",loginBtn:"Header_loginBtn__1BHhd",loginBtnBlock:"Header_loginBtnBlock__2Yb5L"}},5:function(e,t,n){e.exports={nav:"Navbar_nav__8-0-s",ul:"Navbar_ul__1gJEH",item:"Navbar_item__2bByP",active:"Navbar_active__2Fx7s",friends:"Navbar_friends__11O9C",avatar:"Navbar_avatar__ZVwOQ",a:"Navbar_a__3NC05",name:"Navbar_name__3a0zs"}},50:function(e,t,n){e.exports={button:"MyPosts_button__2-nZY",FormsControls_textarea__FQuZ9:"MyPosts_FormsControls_textarea__FQuZ9__2xavX",title:"MyPosts_title__3XO6T"}},56:function(e,t,n){e.exports={btnAddNew:"News_btnAddNew__OclnU",newsBlock:"News_newsBlock__22Saq"}},73:function(e,t,n){e.exports=n.p+"static/media/user.a60fdfaa.jpg"},75:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3DdOt",pages:"Paginator_pages__27S-7",paginator:"Paginator_paginator__1VpJV",pageNumber:"Paginator_pageNumber__2Wz7u"}},76:function(e,t,n){e.exports={item:"Post_item__jVVtY",post:"Post_post__3y9nu",line:"Post_line__1D9jb"}},98:function(e,t,n){e.exports={loginBlock:"Login_loginBlock__1epUZ",loginInfo:"Login_loginInfo__2bBSs"}}},[[166,1,2]]]);
//# sourceMappingURL=main.38cec593.chunk.js.map