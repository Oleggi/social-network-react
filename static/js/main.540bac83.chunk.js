(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(11),r=n(12),o=n(14),c=n(13),i=n(0),s=n.n(i),l=n(15),u=n(10),p=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){Object(o.a)(i,t);var n=Object(c.a)(i);function i(){return Object(a.a)(this,i),n.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(l.a,{to:"login"})}}]),i}(s.a.Component);return Object(u.b)(p)(t)}},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(30),r=n(4),o="social-network/dialogs/SEND_MESSAGE",c="https://www.c7creative.com/wp-content/uploads/2015/05/Lee_C7_Avatar-01.png",i={dialogs:[{id:1,name:"Kiril",message:"How're you?",photo:c},{id:2,name:"John",message:"Hello!",photo:c},{id:3,name:"Smith",message:"Long time no see!",photo:c},{id:4,name:"Vasil",message:"Long time no see!",photo:c},{id:5,name:"Peter",message:"Long time no see!",photo:c}],messages:[{id:1,status:"received",message:"Hey, how are you doing?"},{id:2,status:"sent",message:"I'm great, thanks!"},{id:3,status:"received",message:"what are you doing?"},{id:4,status:"sent",message:"I'm learning React!"},{id:5,status:"received",message:"Let's go out today!"},{id:6,status:"sent",message:"Let me think..."}]},s=function(e){return{type:o,message:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:7,status:"sent",message:t.message};return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}}},131:function(e,t,n){e.exports={content:"Profile_content__3PjYT"}},132:function(e,t,n){},135:function(e,t,n){e.exports={myPosts_wrapper:"MyPosts_myPosts_wrapper__3-W77"}},136:function(e,t,n){e.exports={lds_roller:"Preloader_lds_roller__2qacZ"}},138:function(e,t,n){e.exports={avatar:"ProfileAvatar_avatar__1kOCa"}},139:function(e,t,n){e.exports=n.p+"static/media/avatar-placeholder.d874068d.png"},140:function(e,t,n){e.exports=n.p+"static/media/logo.70666700.png"},16:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__12QkB",nav:"Sidebar_nav__P7ixU",item:"Sidebar_item__3amBP",active:"Sidebar_active__3eqgc",friends:"Sidebar_friends__16A44",friends_wrap:"Sidebar_friends_wrap__9WRMn",friend:"Sidebar_friend__3Jj8-",title:"Sidebar_title__1RDPg"}},167:function(e,t,n){e.exports=n(293)},172:function(e,t,n){},173:function(e,t,n){},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var a=n(95),r=n(0),o=n.n(r),c=n(41),i=n.n(c),s=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),c=n.touched&&n.error;return o.a.createElement("div",{className:i.a.formControl+" "+(c?i.a.error:"")},o.a.createElement("textarea",Object.assign({},t,r)),c&&o.a.createElement("div",{className:i.a.error_message},n.error))},l=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),c=n.touched&&n.error;return o.a.createElement("div",{className:i.a.formControl+" "+(c?i.a.error:"")},o.a.createElement("input",Object.assign({},t,r)),c&&o.a.createElement("span",{className:i.a.error_message},n.error))}},293:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),c=n.n(o),i=(n(172),n(11)),s=n(12),l=n(14),u=n(13),p=(n(173),n(131)),m=n.n(p),f=n(71),d=n.n(f),h=function(e){return r.a.createElement("div",{className:d.a.item},r.a.createElement("div",null,r.a.createElement("img",{className:d.a.avatar,src:"https://cdn0.iconfinder.com/data/icons/sexy-portrait-girl-avatar-cute-beautiful-young-gir/283/female-138-512.png",alt:""})),r.a.createElement("div",{className:d.a.body},e.body),r.a.createElement("div",null,"Like ",e.likes),r.a.createElement("button",{onClick:function(t){e.deletePost(e.id)}},"delete"))},g=n(132),b=n.n(g),E=n(29),v=n(128),_=n(129),O=n(24),w=n(31),j=Object(w.a)(50),P=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).submit=function(t,n){e.props.addPost(t.post),n(Object(E.a)("newPost"))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.submit),className:b.a.new_post},r.a.createElement(v.a,{name:"post",component:O.b,validate:[w.c,j],placeholder:"Title"}),r.a.createElement("div",null,r.a.createElement("button",null,"Add new post")))}}]),n}(r.a.Component),y=Object(_.a)({form:"newPost"})(P),C=n(135),S=n.n(C),k=n(70),I=n(73),N=n.n(I),A=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=e.portionSize,i=e.onPageChange,s=Math.ceil(t/n),l=[],u=1;u<=s;u++)l.push(u);var p=Math.ceil(s/c),m=Object(a.useState)(1),f=Object(k.a)(m,2),d=f[0],h=f[1],g=(d-1)*c,b=d*c;return r.a.createElement("div",{className:N.a.pages_wrapper},d>2&&r.a.createElement("button",{onClick:function(){h(d=1)}},"<<"),d>1&&r.a.createElement("button",{onClick:function(){h(d-=1)}},"<"),l.filter((function(e){return e>=g&&e<=b})).map((function(e,t){return r.a.createElement("div",{key:t,className:e===o?N.a.active_page:N.a.page_item,onClick:function(){return i(e)}},e)})),p>d&&r.a.createElement("button",{onClick:function(){h(d+=1)}},">"),p-d>1&&r.a.createElement("button",{onClick:function(){h(d=p)}},">>"))},U=function(e){return r.a.createElement("div",{className:S.a.myPosts_wrapper},r.a.createElement("div",null,r.a.createElement(y,{addPost:e.addPost})),r.a.createElement("h3",null,"My posts:"),r.a.createElement(A,{totalCount:e.totalPostsCount,pageSize:e.pageSize,onPageChange:e.onPageChange,currentPage:e.currentPage,setCurrentPage:e.setCurrentPage}),r.a.createElement("div",null,e.posts.map((function(t,n){return r.a.createElement(h,{deletePost:e.deletePost,key:t.id,likes:t.likes,body:t.body})}))))},F=n(136),T=n.n(F),M=function(e){return r.a.createElement("div",{className:T.a.lds_roller},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},x=n(7),D=n.n(x),L=n(19),z=n(30),G=n(4),H=n(137).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"0301776c-06d0-4380-a26b-7f129554ed6f"}}),R=function(e,t){return H.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},J={followUser:function(e){return H.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return H.delete("follow/".concat(e)).then((function(e){return e.data}))}},q=function(){return H.get("auth/me").then((function(e){return e.data}))},W=function(e,t,n,a){return H.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e}))},B=function(){return H.delete("auth/login").then((function(e){return e}))},K=function(e){return H.get("profile/".concat(e)).then((function(e){return e.data}))},Z=function(e){return H.get("profile/status/".concat(e)).then((function(e){return e.data}))},V=function(e){return H.put("profile/status",{status:e}).then((function(e){return e.data}))},X=function(e){var t=new FormData;return t.append("image",e),H.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e}))},Y=function(e){return H.put("profile",e).then((function(e){return e}))},Q=function(){return H.get("security/get-captcha-url").then((function(e){return e}))},$="social-network/profile/ADD_POST",ee="social-network/profile/DELETE_POST",te="social-network/profile/SET_POSTS",ne="social-network/profile/SET_CURRENT_PAGE",ae="social-network/profile/CHECK_IS_FETCHING",re="social-network/profile/SET_PROFILE",oe="social-network/profile/GET_STATUS",ce="social-network/profile/SET_USER_PHOTO_COMPLETE",ie="social-network/profile/SET_IS_PROFILE_UPDATING",se={totalPostsCount:20,pageSize:5,currentPage:1,profile:null,isProfileInfoUpdating:"",status:"",posts:[{id:1,body:"Be yourself everyone else is already taken. \u2015 Oscar Wilde",likes:75},{id:2,body:"Be who you are and say what you feel, \n             because those who mind don't matter, and those who matter don't mind.\u2015 Bernard M. Baruch",likes:66},{id:3,body:"A room without books is like a body without a soul.\u201d\n            \u2015 Marcus Tullius Cicero",likes:102}],isFetching:!1},le=function(e){return{type:oe,statusData:e}},ue=function(e){return{type:ie,isUpdating:e}},pe=function(e){return function(){var t=Object(L.a)(D.a.mark((function t(n){var a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K(e);case 2:a=t.sent,n({type:re,profileData:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:var n={id:e.posts.length+1,body:t.payload,likes:0};return Object(G.a)(Object(G.a)({},e),{},{posts:[].concat(Object(z.a)(e.posts),[n])});case ee:return Object(G.a)(Object(G.a)({},e),{},{posts:Object(z.a)(e.posts.filter((function(e){return e.id!==t.id})))});case te:return Object(G.a)(Object(G.a)({},e),{},{posts:[].concat(Object(z.a)(e.posts),Object(z.a)(t.posts))});case ne:return Object(G.a)(Object(G.a)({},e),{},{currentPage:t.page});case ae:return Object(G.a)(Object(G.a)({},e),{},{isFetching:t.isFetching});case re:return Object(G.a)(Object(G.a)({},e),{},{profile:t.profileData});case oe:return Object(G.a)(Object(G.a)({},e),{},{status:t.statusData});case ce:return Object(G.a)(Object(G.a)({},e),{},{profile:Object(G.a)(Object(G.a)({},e.profile),{},{photos:t.photos})});case ie:return Object(G.a)(Object(G.a)({},e),{},{isProfileInfoUpdating:t.isUpdating});default:return e}},fe=n(10),de=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChange=function(t){e.props.setCurrentPage(t)},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(M,null):null,r.a.createElement(U,{posts:this.props.posts,totalPostsCount:this.props.totalPostsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,addPost:this.props.addPost,deletePost:this.props.deletePost,setCurrentPage:this.props.setCurrentPage}))}}]),n}(r.a.Component),he=Object(fe.b)((function(e){return{posts:e.profilePage.posts,totalPostsCount:e.profilePage.totalPostsCount,pageSize:e.profilePage.pageSize,currentPage:e.profilePage.currentPage,isFetching:e.profilePage.isFetching}}),{addPost:function(e){return{type:$,payload:e}},deletePost:function(e){return{type:ee,id:e}},setPosts:function(e){return{type:te,posts:e}},setCurrentPage:function(e){return{type:ne,page:e}},checkIsFetching:function(e){return{type:ae,isFetching:e}}})(de),ge=n(36),be=n.n(ge),Ee=n(138),ve=n.n(Ee),_e=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.profileAvatar;return r.a.createElement("div",{className:ve.a.avatar},e?r.a.createElement("img",{src:e,alt:""}):r.a.createElement("img",{src:"https://images.squarespace-cdn.com/content/v1/5a7a17897131a579be261747/1530282889879-NMIJEPETRKHL6RWHZGH0/ke17ZwdGBToddI8pDm48kHhlTY0to_qtyxq77jLiHTtZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7T-j82ScS_xjTqFYGqFrT72qZ_E0ELtHpOZiWcSG1QwIMeEVreGuQ8F95X5MZTW1Jw/avatar-placeholder.png\r ",alt:""}))}}]),n}(a.Component),Oe=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={statusData:e.props.status,editMode:!1},e.editModeOn=function(){e.setState({editMode:!0})},e.editModeOff=function(){e.setState({editMode:!1}),e.props.setUserStatus(e.state.statusData)},e.onStatusChange=function(t){e.setState({statusData:t.currentTarget.value})},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,!this.state.editMode&&r.a.createElement("span",{onDoubleClick:this.editModeOn,className:be.a.status},this.props.status||"-------"),r.a.createElement("div",null,this.state.editMode&&r.a.createElement("input",{onChange:this.onStatusChange,onBlur:this.editModeOff,autoFocus:!0,type:"text",value:this.state.statusData})))}}]),n}(r.a.Component),we=function(e){var t=e.profile,n=e.isOwner,a=e.toEditMode;return r.a.createElement("div",null,r.a.createElement("h2",null,t.fullName),r.a.createElement("div",null,r.a.createElement("b",null,"About me:  "),t.aboutMe),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job: "),t.lookingForAJob?"yes":"no"),t.lookingForAJob&&r.a.createElement("div",null,r.a.createElement("b",null,"My professional skills: "),t.lookingForAJobDescription),r.a.createElement("div",null,Object.keys(t.contacts).map((function(e){return r.a.createElement(Ce,{key:e,title:e,description:t.contacts[e]})}))),n&&r.a.createElement("button",{onClick:a},"Edit"))},je=n(40),Pe=n.n(je),ye=Object(_.a)({form:"edit-info"})((function(e){var t=e.handleSubmit,n=e.profile,a=e.error,o=e.editModeOff;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement("label",null,"Full name:"),r.a.createElement(v.a,{name:"fullName",component:O.a,placeholder:"Full name"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"About me:"),r.a.createElement(v.a,{name:"aboutMe",component:O.b,placeholder:"About me"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Looking for a job:"),r.a.createElement(v.a,{name:"lookingForAJob",component:O.a,type:"checkbox"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Professional skills and goals"),r.a.createElement(v.a,{name:"lookingForAJobDescription",component:O.b,placeholder:"Professional skills"}),r.a.createElement("div",null,Object.keys(n.contacts).map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("label",{htmlFor:""},e),r.a.createElement(v.a,{name:"contacts."+e,component:O.a,placeholder:e}))}))),a&&r.a.createElement("div",{className:Pe.a.commonError},a)),r.a.createElement("button",null,"Save"),r.a.createElement("button",{onClick:o},"Cancel"))})),Ce=function(e){var t=e.title,n=e.description;return r.a.createElement("div",null,r.a.createElement("b",null,t,": ")," ",n)},Se=function(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),o=n[0],c=n[1];if(!e.profile)return r.a.createElement(M,null);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:be.a.container},r.a.createElement("div",{className:be.a.avatar},r.a.createElement(_e,{profileAvatar:e.profile.photos.large}),e.isOwner&&r.a.createElement("div",{className:be.a.input_photo},r.a.createElement("input",{onChange:e.onPhotoSelectedChange,type:"file"}))),r.a.createElement("div",{className:be.a.profileInfo},"fetching"===e.isProfileInfoUpdating?r.a.createElement("div",null,r.a.createElement(M,null)):r.a.createElement("div",{className:be.a.info},r.a.createElement(Oe,{status:e.status,setUserStatus:e.setUserStatus,userId:e.profile.userId}),o?r.a.createElement(ye,{editModeOff:function(){c(!1)},profile:e.profile,initialValues:e.profile,onSubmit:function(t){e.setProfileInfo(t),"success"===e.isProfileInfoUpdating&&c(!1)}}):r.a.createElement(we,{toEditMode:function(){c(!0)},isOwner:e.isOwner,profile:e.profile})))))},ke=n(15),Ie=n(126),Ne=n(9),Ae=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).refreshUserInfo=function(){var t=e.props.match.params.userId;t||(t=e.props.authUserId),e.props.getProfileData(t),e.props.getUserStatus(t)},e.onPhotoSelectedChange=function(t){t.target.files.length&&e.props.setUserPhoto(t.target.files[0])},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.refreshUserInfo()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.refreshUserInfo()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Se,Object.assign({},this.props,{status:this.props.status,profile:this.props.profile,setUserStatus:this.props.setUserStatus,isOwner:!this.props.match.params.userId,onPhotoSelectedChange:this.onPhotoSelectedChange,setProfileInfo:this.props.setProfileInfo,isProfileInfoUpdating:this.props.isProfileInfoUpdating})))}}]),n}(r.a.Component),Ue=Object(Ne.d)(Object(fe.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserId:e.auth.id,isAuth:e.auth.isAuth,isProfileInfoUpdating:e.profilePage.isProfileInfoUpdating}}),{getProfileData:pe,getUserStatus:function(e){return function(){var t=Object(L.a)(D.a.mark((function t(n){var a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z(e);case 2:a=t.sent,n(le(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUserStatus:function(e){return function(){var t=Object(L.a)(D.a.mark((function t(n){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V(e);case 2:0===t.sent.resultCode&&n(le(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUserPhoto:function(e){return function(){var t=Object(L.a)(D.a.mark((function t(n){var a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X(e);case 2:0===(a=t.sent).data.resultCode&&n((r=a.data.data.photos,{type:ce,photos:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},setProfileInfo:function(e){return function(){var t=Object(L.a)(D.a.mark((function t(n,a){var r,o,c;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(ue("fetching")),r=a().auth.id,t.next=4,Y(e);case 4:0===(o=t.sent).data.resultCode?(n(pe(r)),n(ue("success"))):(n(ue("error")),c=o.data.messages.length>0?o.data.messages[0]:"Something went wrong",n(Object(E.b)("edit-info",{_error:c})));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),ke.g,Ie.a)(Ae),Fe=function(e){return r.a.createElement("div",{className:m.a.content},r.a.createElement(Ue,null),r.a.createElement(he,null))},Te=n(17),Me=n(16),xe=n.n(Me),De=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("nav",{className:xe.a.nav},r.a.createElement("div",{className:xe.a.item},r.a.createElement(Te.b,{activeClassName:xe.a.active,to:"/profile"},"My profile")),r.a.createElement("div",{className:xe.a.item},r.a.createElement(Te.b,{activeClassName:xe.a.active,to:"/dialogs"},"Messages")),r.a.createElement("div",{className:xe.a.item},r.a.createElement(Te.b,{activeClassName:xe.a.active,to:"/news"},"News")),r.a.createElement("div",{className:xe.a.item},r.a.createElement(Te.b,{activeClassName:xe.a.active,to:"/music"},"Music")),r.a.createElement("div",{className:xe.a.item},r.a.createElement(Te.b,{activeClassName:xe.a.active,to:"/users"},"Users")),r.a.createElement("div",{className:xe.a.item},r.a.createElement(Te.b,{activeClassName:xe.a.active,to:"/settings"},"Settings")))}}]),n}(a.Component),Le=function(e){return r.a.createElement("div",{className:xe.a.friend},r.a.createElement("div",null,r.a.createElement("img",{src:e.photo,alt:""}),r.a.createElement("div",null,e.name)))},ze=function(e){return r.a.createElement("div",{className:xe.a.friends},r.a.createElement("span",{className:xe.a.title},"Friends"),r.a.createElement("span",null,r.a.createElement(Te.b,{to:"/friends"},"See All")),r.a.createElement("div",{className:xe.a.friends_wrap},e.friends.map((function(e,t){return r.a.createElement(Le,{key:t,name:e.name,photo:e.photo})}))))},Ge=Object(fe.b)((function(e){return{friends:e.sidebar.friends}}),null)((function(e){return r.a.createElement("div",null,r.a.createElement(ze,{friends:e.friends}))})),He=function(e){return r.a.createElement("div",{className:xe.a.sidebar},r.a.createElement(De,null),r.a.createElement(Ge,null))},Re=n(47),Je=n.n(Re),qe=n(139),We=n.n(qe),Be=function(e){return r.a.createElement("div",{className:Je.a.container},r.a.createElement(A,{onPageChange:e.onPageChange,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,portionSize:e.portionSize}),e.users.map((function(t){return r.a.createElement("div",{key:t.id,className:Je.a.user_item},r.a.createElement(Te.b,{to:"/profile/"+t.id},r.a.createElement("span",null,t.photos.small?r.a.createElement("img",{src:t.photos.small,alt:""}):r.a.createElement("img",{src:We.a,alt:""}))),r.a.createElement("span",{className:Je.a.user_name},t.name),t.followed?r.a.createElement("button",{disabled:e.isFollowingActive.some((function(e){return e===t.id})),className:Je.a.btn,onClick:function(){e.unfollow(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.isFollowingActive.some((function(e){return e===t.id})),className:Je.a.btn,onClick:function(){e.follow(t.id)}},"Follow"))})))},Ke=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(G.a)(Object(G.a)({},e),a):e}))},Ze="social-network/users/FOLLOW",Ve="social-network/users/UNFOLLOW",Xe="social-network/users/SET_USERS",Ye="social-network/users/SET_TOTAL_USERS_COUNT",Qe={totalUsersCount:0,pageSize:30,page:1,users:[],portionSize:7,isFetching:!1,isFollowingActive:[]},$e=function(e){return{type:Ze,userID:e}},et=function(e){return{type:Ve,userID:e}},tt=function(e){return{type:"social-network/users/CHECK_IS_FETCHING",isFetching:e}},nt=function(e,t){return{type:"social-network/users/TOGGLE_FOLLOWING_PROCESS",isFetching:e,userId:t}},at=function(){var e=Object(L.a)(D.a.mark((function e(t,n,a,r){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(nt(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(r(n)),t(nt(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ze:return Object(G.a)(Object(G.a)({},e),{},{users:Ke(e.users,t.userID,"id",{followed:!0})});case Ve:return Object(G.a)(Object(G.a)({},e),{},{users:Ke(e.users,t.userID,"id",{followed:!1})});case Xe:return Object(G.a)(Object(G.a)({},e),{},{users:Object(z.a)(t.users)});case"social-network/users/SET_CURRENT_PAGE":return Object(G.a)(Object(G.a)({},e),{},{page:t.page});case"social-network/users/CHECK_IS_FETCHING":return Object(G.a)(Object(G.a)({},e),{},{isFetching:t.isFetching});case Ye:return Object(G.a)(Object(G.a)({},e),{},{totalUsersCount:t.totalCount});case"social-network/users/TOGGLE_FOLLOWING_PROCESS":return Object(G.a)(Object(G.a)({},e),{},{isFollowingActive:t.isFetching?[].concat(Object(z.a)(e.isFollowingActive),[t.userId]):e.isFollowingActive.filter((function(e){return e!==t.userId}))});default:return e}},ot=function(e){return e.usersPage.users},ct=function(e){return e.usersPage.totalUsersCount},it=function(e){return e.usersPage.pageSize},st=function(e){return e.usersPage.page},lt=function(e){return e.usersPage.isFetching},ut=function(e){return e.usersPage.isFollowingActive},pt=function(e){return e.usersPage.portionSize},mt=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChange=function(t){e.props.requestUsers(e.props.pageSize,t)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.pageSize,this.props.currentPage)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(M,null):null,r.a.createElement(Be,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.follow,unfollow:this.props.unfollow,onPageChange:this.onPageChange,checkIfFollowingActive:this.props.checkIfFollowingActive,isFollowingActive:this.props.isFollowingActive,portionSize:this.props.portionSize}))}}]),n}(r.a.Component),ft=Object(fe.b)((function(e){return{users:ot(e),totalUsersCount:ct(e),pageSize:it(e),currentPage:st(e),isFetching:lt(e),isFollowingActive:ut(e),portionSize:pt(e)}}),{follow:function(e){return function(){var t=Object(L.a)(D.a.mark((function t(n){var a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=J.followUser.bind(J),at(n,e,a,$e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(L.a)(D.a.mark((function t(n){var a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=J.unfollowUser.bind(J),at(n,e,a,et);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},checkIsFetching:tt,requestUsers:function(e,t){return function(){var n=Object(L.a)(D.a.mark((function n(a){var r;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(tt(!0)),n.next=3,R(e,t);case 3:r=n.sent,a((c=r.items,{type:Xe,users:c})),a((o=r.totalCount,{type:Ye,totalCount:o})),a(tt(!1)),a({type:"social-network/users/SET_CURRENT_PAGE",page:t});case 8:case"end":return n.stop()}var o,c}),n)})));return function(e){return n.apply(this,arguments)}}()},checkIfFollowingActive:nt})(mt),dt=n(57),ht=n.n(dt),gt=function(e){var t=e.isAuth,n=e.login,a=e.logOutUser;return r.a.createElement("div",null,t?r.a.createElement("div",{className:ht.a.login},n," | ",r.a.createElement("button",{onClick:a},"Sign Out")):r.a.createElement(Te.b,{to:"/login"},r.a.createElement("div",{className:ht.a.login},"Sign In")))},bt="social-network/auth/SET_AUTH_DATA",Et={id:null,email:null,login:null,isAuth:!1,captcha:null},vt=function(e,t,n,a){return{type:bt,payload:{id:e,email:t,login:n,isAuth:a}}},_t=function(){return function(){var e=Object(L.a)(D.a.mark((function e(t,n){var a,r,o,c,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:0===(a=e.sent).resultCode&&(r=a.data,o=r.id,c=r.email,i=r.login,t(vt(o,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},Ot=function(){return function(){var e=Object(L.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:0===e.sent.resultCode&&_t();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},wt=function(){return function(){var e=Object(L.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:n=e.sent,t({type:"social-network/GET_CAPTCHA_URL_SUCCESS",payload:{captcha:n.data}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case bt:case"social-network/GET_CAPTCHA_URL_SUCCESS":return Object(G.a)(Object(G.a)({},e),t.payload);default:return e}},Pt=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(gt,{login:this.props.login,isAuth:this.props.isAuth,setAuthMeData:this.props.setAuthMeData,logOutUser:this.props.logOutUser}))}}]),n}(r.a.Component),yt=Object(fe.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{logOutUser:Ot,setAuthMeData:_t})(Pt),Ct=n(140),St=n.n(Ct),kt=function(){return r.a.createElement("header",{className:ht.a.header},r.a.createElement("img",{src:St.a,alt:"logo"}),r.a.createElement("div",null,r.a.createElement(yt,null)))},It=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(kt,null)}}]),n}(a.Component),Nt=Object(fe.b)(null,{logOutUser:Ot})(It),At=Object(w.a)(20),Ut=Object(w.b)(6),Ft=function(e){var t=e.captcha,n=e.getCaptcha;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:Pe.a.captchaImg},r.a.createElement("img",{src:t.url,alt:""}),r.a.createElement("div",{title:"Refresh image",onClick:function(){n()},className:Pe.a.refreshIcon},r.a.createElement("img",{src:"https://cdn.iconscout.com/icon/free/png-512/reload-91-475019.png",alt:""})))),r.a.createElement("div",null,r.a.createElement(v.a,{name:"captcha",component:O.a,validate:w.c,placeholder:"Type symbols here"})))},Tt=Object(_.a)({form:"login"})((function(e){e.logInUser;var t=e.getCaptcha,n=e.captcha,a=(e.onSubmit,e.handleSubmit),o=e.error,c=void 0===o?null:o;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",null,r.a.createElement(v.a,{name:"email",component:O.a,validate:[w.c,At,Ut],type:"email",placeholder:"login"})),r.a.createElement("div",null,r.a.createElement(v.a,{name:"password",component:O.a,validate:[w.c,At,Ut],type:"password",placeholder:"password"})),r.a.createElement("div",null,r.a.createElement(v.a,{name:"rememberMe",component:"input",type:"checkbox"}),"remember me"),n&&r.a.createElement(Ft,{getCaptcha:t,captcha:n}),r.a.createElement("button",null,"Sign In"),c&&r.a.createElement("div",{className:Pe.a.commonError},c))})),Mt=Object(fe.b)((function(e){return{isAuth:e.auth.isAuth,captcha:e.auth.captcha}}),{logInUser:function(e,t,n,a){return function(){var r=Object(L.a)(D.a.mark((function r(o){var c,i;return D.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,W(e,t,n,a);case 2:0===(c=r.sent).data.resultCode?o(_t()):(10===c.data.resultCode&&o(wt()),i=c.data.messages.length>0?c.data.messages[0]:"Something went wrong",o(Object(E.b)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},getCaptcha:wt})((function(e){return e.isAuth?r.a.createElement(ke.a,{to:"/profile"}):r.a.createElement("div",{className:Pe.a.login_container},r.a.createElement("h2",null,"Sign in"),r.a.createElement(Tt,{onSubmit:function(t,n){var a=t.email,r=t.password,o=t.rememberMe,c=t.captcha;e.logInUser(a,r,o,c),n(Object(E.a)("login"))},props:e}))})),xt={authSucced:!1},Dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGIN_DATA":return Object(G.a)(Object(G.a)({},e),{},{authSucced:!0});default:return e}},Lt=n(127),zt="https://www.c7creative.com/wp-content/uploads/2015/05/Lee_C7_Avatar-01.png",Gt={friends:[{id:1,name:"Kiril",photo:zt},{id:2,name:"John",photo:zt},{id:3,name:"Smith",photo:zt},{id:4,name:"Vasil",photo:zt},{id:5,name:"Peter",photo:zt},{id:6,name:"Karl",photo:zt},{id:7,name:"Elon",photo:zt},{id:8,name:"Fibby",photo:zt},{id:9,name:"Tom",photo:zt}]},Ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt;arguments.length>1&&arguments[1];return e},Rt=n(130),Jt=n(141),qt=Object(Ne.c)({dialogsPage:Lt.a,profilePage:me,sidebar:Ht,usersPage:rt,auth:jt,form:Rt.a,app:Dt}),Wt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ne.d,Bt=Object(Ne.e)(qt,Wt(Object(Ne.a)(Jt.a)));window.__store__=Bt;var Kt=Bt,Zt=function(e){return function(t){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(M,null)},r.a.createElement(e,t))}},Vt=r.a.lazy((function(){return n.e(3).then(n.bind(null,300))})),Xt=r.a.lazy((function(){return n.e(5).then(n.bind(null,297))})),Yt=r.a.lazy((function(){return n.e(4).then(n.bind(null,298))})),Qt=r.a.lazy((function(){return n.e(6).then(n.bind(null,299))})),$t=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.authSucced?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Nt,null),r.a.createElement(He,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(ke.d,null,r.a.createElement(ke.b,{exact:!0,path:"/",render:function(){return r.a.createElement(ke.a,{to:"/profile"})}}),r.a.createElement(ke.b,{path:"/dialogs",render:Zt(Vt)}),r.a.createElement(ke.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Fe,null)}}),r.a.createElement(ke.b,{path:"/news",render:Zt(Xt)}),r.a.createElement(ke.b,{path:"/music",render:Zt(Yt)}),r.a.createElement(ke.b,{path:"/settings",render:Zt(Qt)}),r.a.createElement(ke.b,{path:"/users",render:function(){return r.a.createElement(ft,null)}}),r.a.createElement(ke.b,{path:"/login",render:function(){return r.a.createElement(Mt,null)}})))):r.a.createElement("div",{className:"preloader"},r.a.createElement(M,null))}}]),n}(r.a.Component),en=Object(Ne.d)(ke.g,Object(fe.b)((function(e){return{authSucced:e.app.authSucced}}),{initializeApp:function(){return function(e){e(_t()).then((function(){e({type:"SET_LOGIN_DATA"})}))}}}))($t),tn=function(){return r.a.createElement(Te.a,null,r.a.createElement(fe.a,{store:Kt},r.a.createElement(en,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(tn,null)),document.getElementById("root"))},31:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=function(e){return e?void 0:"This field is required"},r=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}},o=function(e){return function(t){return t&&t.length<e?"Must be ".concat(e," characters or more"):void 0}}},36:function(e,t,n){e.exports={container:"ProfileInfo_container__1KBZr",profileInfo:"ProfileInfo_profileInfo__1gpj6",status:"ProfileInfo_status__MMZcv"}},40:function(e,t,n){e.exports={login_container:"Login_login_container__3lH5N",commonError:"Login_commonError__3XqFP",captchaImg:"Login_captchaImg__1930S",refreshIcon:"Login_refreshIcon__c-2_4"}},41:function(e,t,n){e.exports={formControl:"formControls_formControl__3onKJ",error:"formControls_error__3-OrB",error_message:"formControls_error_message__3hjCL"}},47:function(e,t,n){e.exports={user_item:"Users_user_item__3cFH8",container:"Users_container__3zTfj",user_name:"Users_user_name__1v6go",pages_container:"Users_pages_container__2tOpP",active_page:"Users_active_page__16D-v"}},57:function(e,t,n){e.exports={header:"Header_header__KMDu3",login:"Header_login__3MMWH"}},71:function(e,t,n){e.exports={item:"Post_item__1_U5D",title:"Post_title__2s8hJ",body:"Post_body__3NiyX"}},73:function(e,t,n){e.exports={pages_wrapper:"Paginator_pages_wrapper__1yi0I",active_page:"Paginator_active_page__8Z5cy"}}},[[167,1,2]]]);
//# sourceMappingURL=main.540bac83.chunk.js.map