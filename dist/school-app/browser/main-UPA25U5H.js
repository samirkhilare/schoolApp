import{a as P,b as T,c as E,d as O,e as j,f as x,g as B,i as f}from"./chunk-LHA3554F.js";import{$a as S,Fa as _,Ia as N,Qa as b,Sa as I,W as v,Z as l,_ as d,aa as A,ab as c,ca as R,da as g,ga as C,kc as D,ta as M,wa as F,zb as w}from"./chunk-TDAYXC56.js";var s=class o{constructor(e){this.router=e}canActivate(e,t){let r=JSON.parse(localStorage.getItem("currentUser")||"{}");if(!r||!r.role)return this.router.navigate(["/auth/login"]),!1;let n=r.role,i=this.getRoleFromUrl(t.url);return n===i?!0:(this.navigateBasedOnRole(n),!1)}getRoleFromUrl(e){return e.startsWith("/student")?"student":e.startsWith("/teacher")?"teacher":e.startsWith("/admin")?"admin":""}navigateBasedOnRole(e){e==="student"?this.router.navigate(["/student"]):e==="teacher"?this.router.navigate(["/teacher"]):e==="admin"?this.router.navigate(["/admin"]):this.router.navigate(["/auth/login"])}static \u0275fac=function(t){return new(t||o)(R(B))};static \u0275prov=l({token:o,factory:o.\u0275fac,providedIn:"root"})};var z=[{path:"auth",loadChildren:()=>import("./chunk-FQ4ILSV6.js").then(o=>o.AuthModule)},{path:"student",loadChildren:()=>import("./chunk-WVYNAETP.js").then(o=>o.StudentModule),canActivate:[s]},{path:"teacher",loadChildren:()=>import("./chunk-MQ5PU6NT.js").then(o=>o.TeacherModule),canActivate:[s]},{path:"admin",loadChildren:()=>import("./chunk-X7SD62DW.js").then(o=>o.AdminModule),canActivate:[s]},{path:"",redirectTo:"/auth/login",pathMatch:"full"},{path:"**",redirectTo:"/auth/login"}],u=class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=c({type:o});static \u0275inj=d({imports:[f.forRoot(z),f]})};var h=class o{title="schoolApp";static \u0275fac=function(t){return new(t||o)};static \u0275cmp=S({type:o,selectors:[["app-root"]],standalone:!1,decls:1,vars:0,template:function(t,r){t&1&&w(0,"router-outlet")},dependencies:[x],encapsulation:2})};var L="@",V=(()=>{class o{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=g(M,{optional:!0});loadingSchedulerFn=g(G,{optional:!0});_engine;constructor(t,r,n,i,a){this.doc=t,this.delegate=r,this.zone=n,this.animationType=i,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-3JFRBCZU.js").then(n=>n),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(t):r=t(),r.catch(n=>{throw new v(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:i})=>{this._engine=n(this.animationType,this.doc);let a=new i(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(t,r){let n=this.delegate.createRenderer(t,r);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let i=new y(n);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let U=a.createRenderer(t,r);i.use(U),this.scheduler?.notify(11)}).catch(a=>{i.use(n)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(r){b()};static \u0275prov=l({token:o,factory:o.\u0275fac})}return o})(),y=class{delegate;replay=[];\u0275type=1;constructor(e){this.delegate=e}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,n){this.delegate.insertBefore(e,t,r,n)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,n){this.delegate.setAttribute(e,t,r,n)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,n){this.delegate.setStyle(e,t,r,n)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(n=>n.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(L)}},G=new A("");function k(o="animations"){return N("NgAsyncAnimations"),C([{provide:I,useFactory:(e,t,r)=>new V(e,t,r,o),deps:[D,P,F]},{provide:_,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var m=class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=c({type:o,bootstrap:[h]});static \u0275inj=d({providers:[j(O()),k()],imports:[E,u]})};T().bootstrapModule(m,{ngZoneEventCoalescing:!0}).catch(o=>console.error(o));
