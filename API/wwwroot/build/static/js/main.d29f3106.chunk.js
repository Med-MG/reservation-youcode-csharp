(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{177:function(e,t,n){},204:function(e,t,n){"use strict";n.r(t),n.d(t,"history",(function(){return fe}));var r=n(0),a=n(46),s=n.n(a),c=(n(176),n(177),n(216)),i=n(13),o=n(225),l=n(224),u=n(139),d=n(161),j=n(218),h=n(19),b=n(43),p=n(71),v=n(10),O=function(){function e(){var t=this;Object(b.a)(this,e),this.token=window.localStorage.getItem("jwt"),this.appLoaded=!1,this.admin=!1,this.setToken=function(e){t.token=e},this.setAppLoaded=function(){t.appLoaded=!0},this.setAdmin=function(){t.admin=!0},Object(v.d)(this),Object(v.g)((function(){return t.token}),(function(e){e?window.localStorage.setItem("jwt",e):window.localStorage.removeItem("jwt")}))}return Object(p.a)(e,[{key:"isAdmin",get:function(){return this.admin}}]),e}(),x=n(130),f=n(12),g=n.n(f),m=n(14),R=n(23),y=n(63),w=n.n(y);w.a.defaults.baseURL="/api",w.a.interceptors.request.use((function(e){var t=D.commonStore.token;return t&&(e.headers.Authorization="Bearer ".concat(t)),e})),w.a.interceptors.response.use(function(){var e=Object(R.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,e.next=4;break;case 4:return e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.next=12,Promise.reject(e.t0);case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}());var k=function(e){return e.data},S=function(e){return w.a.get(e).then(k)},C=function(e,t){return w.a.post(e,t).then(k)},I=function(e,t){return w.a.put(e,t).then(k)},A=function(e){return w.a.delete(e).then(k)},F={Reservations:{list:function(){return S("/Reservations")},listResUser:function(){return S("/Reservations/UserReservations")},details:function(e){return S("/Reservations/".concat(e))},create:function(e){return C("/Reservations",e)},update:function(e){return I("/Reservations/".concat(e.id),e)},updateStatus:function(e){return I("/Reservations/status/".concat(e.id),e)},delete:function(e){return A("/Reservations/".concat(e))}},Account:{current:function(){return S("/account")},login:function(e){return C("/account/login",e)},register:function(e){return C("/account/register",e)}}},M=n(222),L=function(){function e(){var t=this;Object(b.a)(this,e),this.reservationRegistry=new Map,this.selectedReservation=void 0,this.editMode=!1,this.loading=!1,this.loadingInitial=!0,this.pendinApproval="",this.FilterMode="pending",this.setFilterMode=function(e){t.FilterMode=e},this.ApproveReservation=function(){var e=Object(R.a)(g.a.mark((function e(n){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=t.reservationRegistry.get(n))&&t.reservationRegistry.set(n,Object(m.a)(Object(m.a)({},r),{},{status:1})),e.prev=2,e.next=5,F.Reservations.updateStatus({id:n,status:1});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),this.DenyReservation=function(){var e=Object(R.a)(g.a.mark((function e(n){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=t.reservationRegistry.get(n))&&t.reservationRegistry.set(n,Object(m.a)(Object(m.a)({},r),{},{status:0})),e.prev=2,e.next=5,F.Reservations.updateStatus({id:n,status:0});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),this.loadingReservations=Object(R.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.Reservations.list();case 3:e.sent.forEach((function(e){e.date=e.date.split("T")[0],t.reservationRegistry.set(e.id,e)})),t.setLoadingInitial(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),t.setLoadingInitial(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),this.loadingUserReservations=Object(R.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.Reservations.listResUser();case 3:e.sent.forEach((function(e){e.date=e.date.split("T")[0],t.reservationRegistry.set(e.id,e)})),t.setLoadingInitial(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),t.setLoadingInitial(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),this.setLoadingInitial=function(e){t.loadingInitial=e},this.selectReservation=function(e){t.selectedReservation=t.reservationRegistry.get(e)},this.cancelSelectedReservation=function(){t.selectedReservation=void 0},this.openForm=function(e){e?t.selectReservation(e):t.cancelSelectedReservation(),t.editMode=!0},this.closeForm=function(){t.editMode=!1},this.createReservation=function(){var e=Object(R.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n.id=Object(M.a)(),e.prev=2,e.next=5,F.Reservations.create(n);case 5:Object(v.h)((function(){t.reservationRegistry.set(n.id,n),t.selectedReservation=n,t.editMode=!1,t.loading=!1})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0),Object(v.h)((function(){t.loading=!1}));case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),this.updateReservation=function(){var e=Object(R.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,F.Reservations.update(n);case 4:Object(v.h)((function(){t.reservationRegistry.set(n.id,n),t.cancelSelectedReservation(),t.editMode=!1,t.loading=!1})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),Object(v.h)((function(){t.loading=!1}));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),this.deleteReservation=function(){var e=Object(R.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,F.Reservations.delete(n);case 4:Object(v.h)((function(){var e;t.reservationRegistry.delete(n),(null===(e=t.selectedReservation)||void 0===e?void 0:e.id)===n&&t.cancelSelectedReservation(),t.loading=!1})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),Object(v.h)((function(){t.loading=!1}));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),this.InitStates=function(){t.reservationRegistry=new Map,t.selectedReservation=void 0,t.editMode=!1,t.loading=!1,t.loadingInitial=!0,t.pendinApproval="",t.FilterMode="pending"},Object(v.d)(this)}return Object(p.a)(e,[{key:"reservationsByDate",get:function(){return Array.from(this.reservationRegistry.values()).sort((function(e,t){return Date.parse(e.date)-Date.parse(t.date)}))}},{key:"ApprovedReservations",get:function(){return Object(x.a)(Array.from(this.reservationRegistry.values()).filter((function(e){return 1==e.status})))}},{key:"DeniedReservations",get:function(){return Object(x.a)(Array.from(this.reservationRegistry.values()).filter((function(e){return 0==e.status})))}},{key:"PendingReservations",get:function(){return Object(x.a)(Array.from(this.reservationRegistry.values()).filter((function(e){return 2==e.status})))}},{key:"FilteredReservation",get:function(){return"pending"===this.FilterMode?this.PendingReservations:"approved"===this.FilterMode?this.ApprovedReservations:"denied"===this.FilterMode?this.DeniedReservations:[]}}]),e}(),T=function(){function e(){var t=this;Object(b.a)(this,e),this.user=null,this.login=function(){var e=Object(R.a)(g.a.mark((function e(n){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.Account.login(n);case 3:r=e.sent,D.commonStore.setToken(r.token),Object(v.h)((function(){t.user=r,"admin"===r.tempRole&&D.commonStore.setAdmin()})),"admin"===r.tempRole?fe.push("/adminRes"):fe.push("/Reservations"),D.modalStore.closeModal(),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),this.logout=function(){D.commonStore.setToken(null),D.reservationStore.InitStates(),window.localStorage.removeItem("jwt"),t.user=null,fe.push("/")},this.register=function(){var e=Object(R.a)(g.a.mark((function e(n){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.Account.register(n);case 3:r=e.sent,D.commonStore.setToken(r.token),Object(v.h)((function(){return t.user=r})),fe.push("/Reservations"),D.modalStore.closeModal(),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),this.getUser=Object(R.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.Account.current();case 3:n=e.sent,Object(v.h)((function(){t.user=n,"admin"===n.tempRole&&D.commonStore.setAdmin()})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),Object(v.d)(this)}return Object(p.a)(e,[{key:"isLoggedIn",get:function(){return!!this.user}}]),e}(),D={reservationStore:new L,adminStore:new function e(){var t=this;Object(b.a)(this,e),this.FilterMode="pending",this.setFilterMode=function(e){t.FilterMode=e},Object(v.d)(this)},userStore:new T,commonStore:new O,modalStore:new function e(){var t=this;Object(b.a)(this,e),this.modal={open:!1,body:null},this.openModal=function(e){t.modal.open=!0,t.modal.body=e},this.closeModal=function(){t.modal.open=!1,t.modal.body=null},Object(v.d)(this)}},P=Object(r.createContext)(D);function E(){return Object(r.useContext)(P)}var z=n(2),U=Object(i.a)((function(){var e=E(),t=e.userStore,n=t.user,r=t.logout,a=e.commonStore.isAdmin,s=e.reservationStore;return Object(z.jsx)(o.a,{inverted:!0,fixed:"top",children:Object(z.jsxs)(c.a,{children:[Object(z.jsxs)(o.a.Item,{as:h.b,exact:!0,to:"/",header:!0,children:[Object(z.jsx)("img",{src:"/assets/logo.png",alt:"logo",style:{marginRight:"1rem"}}),"Reservation"]}),a?Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(o.a.Item,{as:h.b,to:"/adminRes",name:"Reservations"})}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(o.a.Item,{as:h.b,to:"/reservations",name:"Reservations"}),Object(z.jsx)(o.a.Item,{children:Object(z.jsx)(l.a,{onClick:function(){return s.openForm()},positive:!0,content:"Create Reservation"})})]}),Object(z.jsxs)(u.a,{position:"right",children:[Object(z.jsx)(d.a,{src:(null===n||void 0===n?void 0:n.image)||"/assets/users/1.jpg",avatar:!0,spaced:"right"}),Object(z.jsx)(j.a,{pointing:"top left",text:null===n||void 0===n?void 0:n.displayName,children:Object(z.jsxs)(j.a.Menu,{children:[Object(z.jsx)(j.a.Item,{as:h.a,to:"/profile/".concat(null===n||void 0===n?void 0:n.username),text:"My profile",icon:"user"}),Object(z.jsx)(j.a.Item,{onClick:r,text:"Logout",icon:"power"})]})})]})]})})})),N=n(231),B=n(226),H=n(217),W=function(e){var t=e.inverted,n=void 0===t||t,r=e.content,a=void 0===r?"Loading...":r;return Object(z.jsx)(B.a,{active:!0,inverted:n,children:Object(z.jsx)(H.a,{content:a})})},G=n(228),J=n(229),Y=function(){var e=E().reservationStore.setFilterMode;return Object(z.jsxs)(G.a,{children:[Object(z.jsx)(J.a,{as:"h2",children:"Filter Reservations"}),Object(z.jsx)(l.a,{color:"green",onClick:function(){return e("approved")},children:"Approved "}),Object(z.jsx)(l.a,{color:"orange",onClick:function(){return e("denied")},children:"Denied "}),Object(z.jsx)(l.a,{color:"grey",onClick:function(){return e("pending")},children:"Pending "})]})},q=n(49),K=n(37),Q=n(219),V=Object(i.a)((function(){var e=E().reservationStore,t=e.selectedReservation,n=e.closeForm,a=e.createReservation,s=e.updateReservation,c=e.loading,i=null!==t&&void 0!==t?t:{id:"",title:"",description:"",reservationType:"",date:"",status:2},o=Object(r.useState)(i),u=Object(K.a)(o,2),d=u[0],j=u[1],h=function(e){var t=e.target,n=t.name,r=t.value;j(Object(m.a)(Object(m.a)({},d),{},Object(q.a)({},n,r)))};return Object(z.jsx)(G.a,{clearing:!0,children:Object(z.jsxs)(Q.a,{onSubmit:function(){d.id?s(d):a(d)},autoComplete:"off",children:[Object(z.jsxs)(Q.a.Field,{children:[Object(z.jsx)("label",{children:"Full Name"}),Object(z.jsx)("input",{placeholder:"Full Name",value:d.title,name:"title",onChange:h})]}),Object(z.jsxs)(Q.a.Field,{children:[Object(z.jsx)("label",{children:"Description"}),Object(z.jsx)("textarea",{placeholder:"Description",name:"description",value:d.description,onChange:h})]}),Object(z.jsx)(Q.a.Input,{placeholder:"Date",type:"date",name:"date",value:d.date,onChange:h}),Object(z.jsx)(Q.a.Input,{placeholder:"Reservation Type",name:"reservationType",value:d.reservationType,onChange:h}),Object(z.jsx)(l.a,{loading:c,floated:"right",positive:!0,type:"submit",content:"Submit"}),Object(z.jsx)(l.a,{onClick:n,floated:"right",type:"button",content:"Cancel"})]})})})),X=n(158),Z=n(160),$=n(120),_=Object(i.a)((function(){var e=E().reservationStore,t=e.FilteredReservation,n=e.deleteReservation,a=e.loading,s=Object(r.useState)(""),c=Object(K.a)(s,2),i=c[0],o=c[1];return Object(z.jsx)(G.a,{children:Object(z.jsx)(X.a,{divided:!0,children:t.length>0?t.map((function(t){return Object(z.jsx)(Z.a,{children:Object(z.jsxs)(Z.a.Content,{children:[Object(z.jsx)(Z.a.Header,{as:"a",children:t.title}),Object(z.jsx)(Z.a.Meta,{children:t.date}),Object(z.jsx)(Z.a.Description,{children:Object(z.jsx)("div",{children:t.description})}),2==t.status&&Object(z.jsxs)(Z.a.Extra,{children:[Object(z.jsx)(l.a,{onClick:function(){e.openForm(t.id)},floated:"right",color:"blue",content:"Edit"}),Object(z.jsx)(l.a,{loading:a&&i===t.id,onClick:function(e){return r=t.id,o(r),void n(r);var r},floated:"right",content:"Delete",color:"red"}),Object(z.jsx)($.a,{basic:!0,content:t.reservationType})]}),1==t.status&&Object(z.jsxs)(Z.a.Extra,{children:[Object(z.jsx)($.a,{basic:!0,content:t.reservationType}),Object(z.jsx)($.a,{as:"a",color:"teal",floated:"right",tag:!0,children:"Reservation Approved"})]}),0==t.status&&Object(z.jsxs)(Z.a.Extra,{children:[Object(z.jsx)($.a,{basic:!0,content:t.reservationType}),Object(z.jsx)($.a,{as:"a",color:"red",floated:"right",tag:!0,children:"Reservation Denied"})]})]})},t.id)})):Object(z.jsx)(J.a,{as:"h3",children:"You don't have any reservation"})})})})),ee=Object(i.a)((function(){var e=E().reservationStore,t=e.editMode;return Object(r.useEffect)((function(){e.loadingUserReservations()}),[e]),e.loadingInitial?Object(z.jsx)(W,{content:"Loading content"}):Object(z.jsxs)(N.a,{children:[Object(z.jsx)(N.a.Column,{width:"10",children:Object(z.jsx)(_,{})}),Object(z.jsxs)(N.a.Column,{width:"6",children:[Object(z.jsx)(Y,{}),t&&Object(z.jsx)(V,{})]})]})})),te=n(15),ne=n(223),re=Object(i.a)((function(){var e=E().userStore,t=Object(r.useState)({email:"",password:""}),n=Object(K.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(!1),i=Object(K.a)(c,2),o=i[0],u=i[1],d=Object(r.useState)({status:!1,header:"",content:""}),j=Object(K.a)(d,2),b=j[0],p=j[1],v=function(){var t=Object(R.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,e.login(a);case 4:u(!1),p({status:!1,header:"",content:""}),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),p({status:!0,header:"login failed",content:"Incorrect username or password"}),u(!1);case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}(),O=function(e){var t=e.target,n=t.name,r=t.value;s(Object(m.a)(Object(m.a)({},a),{},Object(q.a)({},n,r)))};return Object(z.jsx)(N.a,{textAlign:"center",style:{height:"100%"},verticalAlign:"middle",children:Object(z.jsxs)(N.a.Column,{style:{maxWidth:450,width:450},children:[Object(z.jsx)(J.a,{as:"h2",color:"teal",textAlign:"center",children:"Log-in to your account"}),Object(z.jsx)(Q.a,{onSubmit:v,size:"large",error:b.status,children:Object(z.jsxs)(G.a,{stacked:!0,children:[Object(z.jsx)(Q.a.Input,{fluid:!0,icon:"user",iconPosition:"left",name:"email",placeholder:"E-mail address",onChange:O}),Object(z.jsx)(Q.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",name:"password",placeholder:"Password",type:"password",onChange:O}),Object(z.jsx)(ne.a,{error:!0,header:b.header,content:b.content}),Object(z.jsx)(l.a,{color:"teal",fluid:!0,size:"large",loading:o,children:"Login"})]})}),Object(z.jsxs)(ne.a,{children:["New to us? ",Object(z.jsx)(h.a,{to:"/SignUp",children:"Sign Up"})]})]})})})),ae=Object(i.a)((function(){var e=E().userStore,t=Object(r.useState)({displayName:"",username:"",email:"",password:""}),n=Object(K.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(!1),i=Object(K.a)(c,2),o=i[0],u=i[1],d=Object(r.useState)({status:!1,header:"",content:""}),j=Object(K.a)(d,2),b=j[0],p=j[1],v=function(){var t=Object(R.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,e.register(a);case 4:u(!1),p({status:!1,header:"",content:""}),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),p({status:!0,header:"Register failed",content:"Please try again later"}),u(!1);case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}(),O=function(e){var t=e.target,n=t.name,r=t.value;s(Object(m.a)(Object(m.a)({},a),{},Object(q.a)({},n,r)))};return Object(z.jsx)(N.a,{textAlign:"center",style:{height:"100%"},verticalAlign:"middle",children:Object(z.jsxs)(N.a.Column,{style:{maxWidth:450,width:450},children:[Object(z.jsx)(J.a,{as:"h2",color:"teal",textAlign:"center",children:"Sign-up to your account"}),Object(z.jsx)(Q.a,{onSubmit:v,size:"large",error:b.status,autoComplete:!1,children:Object(z.jsxs)(G.a,{stacked:!0,children:[Object(z.jsx)(Q.a.Input,{fluid:!0,icon:"mail",iconPosition:"left",name:"email",placeholder:"E-mail address",onChange:O}),Object(z.jsx)(Q.a.Input,{fluid:!0,icon:"address card",iconPosition:"left",name:"displayName",placeholder:"display name",onChange:O}),Object(z.jsx)(Q.a.Input,{fluid:!0,icon:"user",iconPosition:"left",name:"username",placeholder:"username",onChange:O}),Object(z.jsx)(Q.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",name:"password",placeholder:"Password",type:"password",onChange:O}),Object(z.jsx)(ne.a,{error:!0,header:b.header,content:b.content}),Object(z.jsx)(l.a,{color:"teal",fluid:!0,size:"large",loading:o,children:"Register"})]})}),Object(z.jsxs)(ne.a,{children:["Existing user? ",Object(z.jsx)(h.a,{to:"/Login",children:"Login"})]})]})})})),se=Object(i.a)((function(){var e=E(),t=e.userStore,n=e.modalStore;return Object(z.jsx)(G.a,{inverted:!0,textAlign:"center",vertical:!0,className:"masthead",children:Object(z.jsxs)(c.a,{text:!0,children:[Object(z.jsxs)(J.a,{as:"h1",inverted:!0,children:[Object(z.jsx)(d.a,{size:"massive",src:"/assets/logo.png",alt:"logo",style:{marginBottom:12}}),"Reservations"]}),t.isLoggedIn?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(J.a,{as:"h2",inverted:!0,content:"Welcome to YC Reservations"}),Object(z.jsx)(l.a,{as:h.a,to:"/reservations",size:"huge",inverted:!0,children:"Go to reservations!"})]}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(l.a,{onClick:function(){return n.openModal(Object(z.jsx)(re,{}))},size:"huge",inverted:!0,children:"Login!"}),Object(z.jsx)(l.a,{onClick:function(){return n.openModal(Object(z.jsx)(ae,{}))},size:"huge",inverted:!0,children:"Register"})]})]})})})),ce=n(220),ie=Object(i.a)((function(){var e=E().modalStore;return Object(z.jsx)(ce.a,{open:e.modal.open,onClose:e.closeModal,style:{width:"max-content"},children:Object(z.jsx)(ce.a.Content,{children:e.modal.body})})})),oe=n(125),le=function(e){var t=e.component,n=Object(oe.a)(e,["component"]),r=E().userStore.isLoggedIn;return Object(z.jsx)(te.b,Object(m.a)(Object(m.a)({},n),{},{render:function(e){return r?Object(z.jsx)(t,Object(m.a)({},e)):Object(z.jsx)(te.a,{to:"/"})}}))},ue=function(){return Object(z.jsx)(c.a,{style:{marginTop:"7em"},children:Object(z.jsxs)(N.a,{children:[Object(z.jsx)(N.a.Column,{width:10,children:Object(z.jsxs)("div",{style:{paddingTop:"7em"},children:[Object(z.jsx)(J.a,{as:"h1",content:"Access Denied"}),Object(z.jsx)(J.a,{as:"h5",content:"It seems that you're lost. Let us help guide you out and get you back home."}),Object(z.jsx)(l.a,{color:"teal",as:h.a,to:"/",children:"Home"}),Object(z.jsx)(l.a,{color:"blue",children:"Login"})]})}),Object(z.jsx)(N.a.Column,{width:6,children:Object(z.jsx)(d.a,{src:"assets/access.png"})})]})})},de=function(e){var t=e.component,n=Object(oe.a)(e,["component"]),r=E(),a=r.commonStore.isAdmin,s=r.userStore.isLoggedIn;return Object(z.jsx)(te.b,Object(m.a)(Object(m.a)({},n),{},{render:function(e){return a&&s?Object(z.jsx)(t,Object(m.a)({},e)):Object(z.jsx)(te.a,{to:"/RestrictedAccess"})}}))},je=n(159),he=n(221),be=Object(i.a)((function(){var e=E().reservationStore,t=e.FilteredReservation,n=e.ApproveReservation,r=e.DenyReservation;return Object(z.jsx)(he.a.Group,{children:t.map((function(e){return Object(z.jsxs)(he.a,{children:[Object(z.jsxs)(he.a.Content,{children:[Object(z.jsx)(d.a,{floated:"right",size:"mini",src:"assets/users/".concat((t=1,a=7,Math.floor(Math.random()*(a-t)+t)),".jpg")}),Object(z.jsx)(he.a.Header,{children:e.title}),Object(z.jsx)(he.a.Meta,{children:e.date}),Object(z.jsx)(he.a.Description,{children:e.reservationType})]}),Object(z.jsx)(he.a.Content,{extra:!0,children:Object(z.jsxs)("div",{className:"ui two buttons",children:[Object(z.jsx)(l.a,{onClick:function(){return n(e.id)},basic:!0,color:"green",children:"Approve"}),Object(z.jsx)(l.a,{onClick:function(){return r(e.id)},basic:!0,color:"red",children:"Deny"})]})})]},e.id);var t,a}))})})),pe=Object(i.a)((function(){var e=E().reservationStore,t=e.loadingReservations;return Object(r.useEffect)((function(){t()}),[t]),e.loadingInitial?Object(z.jsx)(W,{content:"Loading content"}):Object(z.jsxs)(N.a,{children:[Object(z.jsx)(je.a,{width:"10",children:Object(z.jsx)(be,{})}),Object(z.jsx)(je.a,{width:"6",children:Object(z.jsx)(Y,{})})]})}));var ve=Object(i.a)((function(){var e=E(),t=e.userStore,n=e.commonStore;return Object(r.useEffect)((function(){n.token?t.getUser().finally((function(){return n.setAppLoaded()})):n.setAppLoaded()}),[n,t]),n.appLoaded?Object(z.jsxs)(r.Fragment,{children:[Object(z.jsx)(ie,{}),Object(z.jsxs)(te.d,{children:[Object(z.jsx)(te.b,{exact:!0,path:"/",component:se}),Object(z.jsx)(te.b,{exact:!0,path:"/RestrictedAccess",component:ue}),Object(z.jsx)(te.b,{component:function(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(U,{}),Object(z.jsx)(c.a,{style:{marginTop:"7em"},children:Object(z.jsxs)(te.d,{children:[Object(z.jsx)(te.b,{exact:!0,path:"/Login",component:re}),Object(z.jsx)(de,{exact:!0,path:"/adminRes",component:pe}),Object(z.jsx)(le,{exact:!0,path:"/reservations",component:ee})]})})]})}})]})]}):Object(z.jsx)(W,{content:"loading app ..."})})),Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,232)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},xe=n(30),fe=Object(xe.a)();s.a.render(Object(z.jsx)(P.Provider,{value:D,children:Object(z.jsx)(te.c,{history:fe,children:Object(z.jsx)(ve,{})})}),document.getElementById("root")),Oe()}},[[204,1,2]]]);
//# sourceMappingURL=main.d29f3106.chunk.js.map