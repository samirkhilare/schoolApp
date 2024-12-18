import './polyfills.server.mjs';
import{a as G,b as l,d as J,e as R,g as z,h as q,i as B,j as $,n as L,o as W,p as H}from"./chunk-ER6LOFAP.mjs";import{m as S}from"./chunk-BZKT6K7Y.mjs";import{$a as h,Bb as p,Bc as j,Cb as f,Cc as V,Ec as K,Mb as i,Na as c,Nb as _,Oa as x,Ob as y,Pb as F,Qb as E,Rb as k,W as I,X as u,_a as T,db as v,ia as O,ja as P,ob as m,pb as U,wb as r,xb as a,yb as N,zb as D}from"./chunk-GX4N3NIQ.mjs";import{a as g,b as A}from"./chunk-X2SEQXRR.mjs";var C=class o{storageKey="students";constructor(){}getAllUsers(){return JSON.parse(localStorage.getItem(this.storageKey)||"[]")}addTeacher(t){let e=this.getAllUsers();t.id=e.length>0?e[e.length-1].id+1:1,t.active=!0,e.push(t),localStorage.setItem(this.storageKey,JSON.stringify(e))}updateUser(t){let e=this.getAllUsers(),n=e.findIndex(d=>d.id===t.id);n!==-1?(e[n]=g(g({},e[n]),t),localStorage.setItem(this.storageKey,JSON.stringify(e))):console.error(`User with ID ${t.id} not found.`)}deleteUser(t){let e=this.getAllUsers();e=e.filter(n=>n.id!==t),localStorage.setItem(this.storageKey,JSON.stringify(e))}toggleUserStatus(t){let e=this.getAllUsers(),n=e.find(d=>d.id===t);n?(n.active=!n.active,localStorage.setItem(this.storageKey,JSON.stringify(e))):console.error(`User with ID ${t} not found.`)}changePassword(t,e){let n=this.getAllUsers(),d=n.find(s=>s.id===t&&s.role==="admin");d?(d.password=e,localStorage.setItem(this.storageKey,JSON.stringify(n))):console.error(`Admin with ID ${t} not found.`)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=I({token:o,factory:o.\u0275fac,providedIn:"root"})};function Y(o,t){if(o&1){let e=D();r(0,"tr")(1,"td"),i(2),a(),r(3,"td"),i(4),a(),r(5,"td"),i(6),a(),r(7,"td")(8,"span"),i(9),a()(),r(10,"td")(11,"button",12),p("click",function(){let d=O(e).$implicit,s=f(2);return P(s.toggleStatus(d))}),i(12),a(),r(13,"button",12),p("click",function(){let d=O(e).$implicit,s=f(2);return P(s.deleteUser(d.id))}),i(14,"Delete"),a()()()}if(o&2){let e=t.$implicit;c(2),_(e.name),c(2),_(e.email),c(2),_(e.role),c(2),U("active",e.active)("inactive",!e.active),c(),y(" ",e.active?"Active":"Inactive"," "),c(3),y(" ",e.active?"Deactivate":"Activate"," ")}}function Z(o,t){if(o&1&&(r(0,"table")(1,"thead")(2,"tr")(3,"th"),i(4,"Name"),a(),r(5,"th"),i(6,"Email"),a(),r(7,"th"),i(8,"Role"),a(),r(9,"th"),i(10,"Status"),a(),r(11,"th"),i(12,"Actions"),a()()(),r(13,"tbody"),v(14,Y,15,9,"tr",11),a()()),o&2){let e=f();c(14),m("ngForOf",e.filteredUsers)}}function ee(o,t){o&1&&(r(0,"p"),i(1,"No users found."),a())}var b=class o{constructor(t,e){this.fb=t;this.adminService=e;this.addTeacherForm=this.fb.group({name:["",l.required],email:["",[l.required,l.email]],contact:["",l.required],password:["",l.required],active:[!0]})}addTeacherForm;users=[];filteredUsers=[];searchTerm="";ngOnInit(){this.loadUsers()}loadUsers(){this.users=this.adminService.getAllUsers(),this.filteredUsers=[...this.users]}filterUsers(){this.searchTerm?this.filteredUsers=this.users.filter(t=>t.name.toLowerCase().includes(this.searchTerm.toLowerCase())):this.filteredUsers=[...this.users]}addTeacher(){if(this.addTeacherForm.invalid){alert("Please fill out the form correctly.");return}let t=A(g({},this.addTeacherForm.value),{role:"teacher",id:Date.now()});this.adminService.addTeacher(t),alert("Teacher added successfully!"),this.addTeacherForm.reset(),this.loadUsers()}toggleStatus(t){t.active=!t.active,this.adminService.updateUser(t),alert("User status updated.")}deleteUser(t){this.adminService.deleteUser(t),alert("User deleted successfully!"),this.loadUsers()}static \u0275fac=function(e){return new(e||o)(x(L),x(C))};static \u0275cmp=T({type:o,selectors:[["app-admin-dashboard"]],standalone:!1,decls:19,vars:5,consts:[[1,"admin-dashboard-container"],[1,"add-teacher-container"],[3,"ngSubmit","formGroup"],["type","text","formControlName","name","placeholder","Name"],["type","email","formControlName","email","placeholder","Email"],["type","text","formControlName","contact","placeholder","Contact"],["type","password","formControlName","password","placeholder","Password"],["type","submit",3,"disabled"],[1,"user-management-container"],["type","text","placeholder","Search users by name...",3,"ngModelChange","ngModel"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"h1"),i(2,"Admin Dashboard"),a(),r(3,"div",1)(4,"h2"),i(5,"Add New Teacher"),a(),r(6,"form",2),p("ngSubmit",function(){return n.addTeacher()}),N(7,"input",3)(8,"input",4)(9,"input",5)(10,"input",6),r(11,"button",7),i(12,"Add Teacher"),a()()(),r(13,"div",8)(14,"h2"),i(15,"Manage Users"),a(),r(16,"input",9),k("ngModelChange",function(s){return E(n.searchTerm,s)||(n.searchTerm=s),s}),p("ngModelChange",function(){return n.filterUsers()}),a(),v(17,Z,15,1,"table",10)(18,ee,2,0,"p",10),a()()),e&2&&(c(6),m("formGroup",n.addTeacherForm),c(5),m("disabled",!n.addTeacherForm.valid),c(5),F("ngModel",n.searchTerm),c(),m("ngIf",n.filteredUsers.length>0),c(),m("ngIf",n.filteredUsers.length===0))},dependencies:[j,V,q,G,J,R,z,B,$],styles:[".admin-dashboard-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:20px;font-family:Arial,sans-serif}.admin-dashboard-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px}.admin-dashboard-container[_ngcontent-%COMP%]   .add-teacher-container[_ngcontent-%COMP%]{background-color:#f9f9f9;padding:20px;border-radius:8px;box-shadow:0 4px 8px #0000001a;margin-bottom:30px}.admin-dashboard-container[_ngcontent-%COMP%]   .add-teacher-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:20px}.admin-dashboard-container[_ngcontent-%COMP%]   .add-teacher-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:15px}.admin-dashboard-container[_ngcontent-%COMP%]   .add-teacher-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1 1 200px;padding:10px;border:1px solid #ddd;border-radius:4px;font-size:14px}.admin-dashboard-container[_ngcontent-%COMP%]   .add-teacher-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:14px}.admin-dashboard-container[_ngcontent-%COMP%]   .add-teacher-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:#ccc;cursor:not-allowed}.admin-dashboard-container[_ngcontent-%COMP%]   .user-management-container[_ngcontent-%COMP%]{background-color:#fff;padding:20px;border-radius:8px;box-shadow:0 4px 8px #0000001a}.admin-dashboard-container[_ngcontent-%COMP%]   .user-management-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:20px}.admin-dashboard-container[_ngcontent-%COMP%]   .user-management-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:10px;margin-bottom:20px;border:1px solid #ddd;border-radius:4px;font-size:14px}.admin-dashboard-container[_ngcontent-%COMP%]   .user-management-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.admin-dashboard-container[_ngcontent-%COMP%]   .user-management-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:#f1f1f1}.admin-dashboard-container[_ngcontent-%COMP%]   .user-management-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;padding:10px;border-bottom:1px solid #ddd}.admin-dashboard-container[_ngcontent-%COMP%]   .user-management-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #ddd}.admin-dashboard-container[_ngcontent-%COMP%]   .user-management-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#f9f9f9}.admin-dashboard-container[_ngcontent-%COMP%]   .user-management-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px}.admin-dashboard-container[_ngcontent-%COMP%]   .user-management-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:green}.admin-dashboard-container[_ngcontent-%COMP%]   .user-management-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .inactive[_ngcontent-%COMP%]{color:red}.admin-dashboard-container[_ngcontent-%COMP%]   .user-management-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:10px;padding:5px 10px;border:none;border-radius:4px;cursor:pointer;font-size:12px}.admin-dashboard-container[_ngcontent-%COMP%]   .user-management-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{background-color:#007bff;color:#fff}.admin-dashboard-container[_ngcontent-%COMP%]   .user-management-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{background-color:#dc3545;color:#fff}.admin-dashboard-container[_ngcontent-%COMP%]   .user-management-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;color:#777;font-size:14px}"]})};var te=[{path:"",pathMatch:"full",component:b}],M=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=h({type:o});static \u0275inj=u({imports:[S.forChild(te),S]})};var Q=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=h({type:o});static \u0275inj=u({imports:[K,M,W,H]})};export{Q as AdminModule};