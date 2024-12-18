import './polyfills.server.mjs';
import{a as j}from"./chunk-MDBZO74I.mjs";import"./chunk-6CP37KDW.mjs";import{a as F}from"./chunk-7POPKGSH.mjs";import{a as C,b as r,d as b,e as S,h as M,i as _,j as O,k,l as D,m as G,n as P,o as I,p as E}from"./chunk-ER6LOFAP.mjs";import{k as v,l as h,m as L}from"./chunk-BZKT6K7Y.mjs";import{$a as R,Bb as f,Ec as w,Mb as n,Na as d,Oa as s,X as N,_a as g,ob as c,wb as e,xb as a,yb as p}from"./chunk-GX4N3NIQ.mjs";import"./chunk-X2SEQXRR.mjs";var u=class l{constructor(o,t,i){this.fb=o;this.studentService=t;this.router=i;this.loginForm=this.fb.group({email:["",[r.required,r.email]],password:["",[r.required]]})}loginForm;onLogin(){if(this.loginForm.invalid){alert("Please enter valid credentials.");return}let{email:o,password:t}=this.loginForm.value,i=this.studentService.getStudents();console.log("Students:",i);let m=i.find(x=>x.email===o&&x.password===t);console.log("User Found:",m),m?(localStorage.setItem("currentUser",JSON.stringify(m)),this.navigateBasedOnRole(m.role)):alert("Invalid credentials!")}navigateBasedOnRole(o){o==="student"?this.router.navigate(["/student"]):o==="teacher"?this.router.navigate(["/teacher"]):o==="admin"?this.router.navigate(["/admin"]):alert("Invalid role detected!")}static \u0275fac=function(t){return new(t||l)(s(P),s(F),s(v))};static \u0275cmp=g({type:l,selectors:[["app-login"]],standalone:!1,decls:13,vars:2,consts:[[1,"login-container"],[1,"form-container"],[3,"ngSubmit","formGroup"],["type","email","placeholder","Email","formControlName","email"],["type","password","placeholder","Password","formControlName","password"],["type","submit",3,"disabled"],[1,"register-link"],["routerLink","/auth/register"]],template:function(t,i){t&1&&(e(0,"div",0)(1,"div",1)(2,"h2"),n(3,"Login"),a(),e(4,"form",2),f("ngSubmit",function(){return i.onLogin()}),p(5,"input",3)(6,"input",4),e(7,"button",5),n(8,"Login"),a()(),e(9,"div",6),n(10," Don't have an account? "),e(11,"a",7),n(12,"Register"),a()()()()),t&2&&(d(4),c("formGroup",i.loginForm),d(3),c("disabled",!i.loginForm.valid))},dependencies:[M,C,b,S,_,O,h],encapsulation:2})};var y=class l{constructor(o,t,i){this.fb=o;this.studentService=t;this.router=i;this.registerForm=this.fb.group({name:["",[r.required]],email:["",[r.required,r.email]],contact:["",[r.required,r.pattern(/^[0-9]{10}$/)]],password:["",[r.required,r.minLength(6)]],role:["student",[r.required]]})}registerForm;onRegister(){if(this.registerForm.valid){let o=this.registerForm.value;this.studentService.registerStudent(o),alert("Registration Successful!"),this.router.navigate(["/auth/login"])}}static \u0275fac=function(t){return new(t||l)(s(P),s(F),s(v))};static \u0275cmp=g({type:l,selectors:[["app-register"]],standalone:!1,decls:25,vars:2,consts:[[1,"registration-container"],[1,"form-container"],[3,"ngSubmit","formGroup"],["type","text","placeholder","Full Name","formControlName","name"],["type","email","placeholder","Email","formControlName","email"],["type","password","placeholder","Password","formControlName","password"],["type","text","placeholder","Contact","formControlName","contact"],[1,"role-selection"],["for","role","value","Select Role"],["formControlName","role"],["value","student"],["value","teacher"],["value","admin"],["type","submit",3,"disabled"],[1,"login-link"],["routerLink","/auth/login"]],template:function(t,i){t&1&&(e(0,"div",0)(1,"div",1)(2,"h2"),n(3,"Register"),a(),e(4,"form",2),f("ngSubmit",function(){return i.onRegister()}),p(5,"input",3)(6,"input",4)(7,"input",5)(8,"input",6),e(9,"div",7),p(10,"label",8),e(11,"select",9)(12,"option",10),n(13,"Student"),a(),e(14,"option",11),n(15,"Teacher"),a(),e(16,"option",12),n(17,"Admin"),a()()(),p(18,"br"),e(19,"button",13),n(20,"Register"),a()(),e(21,"div",14),n(22," Already have an account? "),e(23,"a",15),n(24,"Login"),a()()()()),t&2&&(d(4),c("formGroup",i.registerForm),d(15),c("disabled",!i.registerForm.valid))},dependencies:[M,D,G,C,k,b,S,_,O,h],styles:[".dashboard-container[_ngcontent-%COMP%]{font-family:Arial,sans-serif;padding:20px}.dashboard-header[_ngcontent-%COMP%]{background-color:#f4f4f9;padding:20px;border-radius:8px;box-shadow:0 2px 5px #0000001a}.dashboard-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#333}.profile-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0;color:#666}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;margin-top:10px;width:200px}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:#dcdcdc;cursor:not-allowed}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.attendance-history[_ngcontent-%COMP%]{margin-top:30px}.attendance-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.attendance-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .attendance-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px;text-align:center;border:1px solid #ddd}.attendance-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#f8f9fa;color:#333}.attendance-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:#fff}.attendance-history[_ngcontent-%COMP%]   .no-records[_ngcontent-%COMP%]{color:#888;text-align:center;font-size:1.1em}"]})};var q=class l{static \u0275fac=function(t){return new(t||l)};static \u0275mod=R({type:l});static \u0275inj=N({imports:[w,j,I,E,L.forChild([{path:"",pathMatch:"full",component:u},{path:"login",component:u},{path:"register",component:y}])]})};export{q as AuthModule};