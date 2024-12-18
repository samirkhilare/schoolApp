import './polyfills.server.mjs';
import{a as D}from"./chunk-7POPKGSH.mjs";import{a as E,d as T,g as w,o as B}from"./chunk-ER6LOFAP.mjs";import{k as y,m as z}from"./chunk-BZKT6K7Y.mjs";import{$a as x,Bb as u,Bc as P,Cb as g,Cc as v,Ec as H,Mb as o,Na as d,Nb as m,Oa as f,Ob as h,Pb as C,Qb as M,Rb as b,X as O,_a as _,db as p,ha as j,ia as F,ja as A,ob as c,sa as R,wb as n,xb as t,yb as V,zb as W}from"./chunk-GX4N3NIQ.mjs";import"./chunk-X2SEQXRR.mjs";var I=class i{student;closeModal=new R;close(){this.closeModal.emit()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-student-modal"]],inputs:{student:"student"},outputs:{closeModal:"closeModal"},standalone:!1,decls:27,vars:5,consts:[[1,"modal-overlay",3,"click"],[1,"modal-content",3,"click"],[3,"click"]],template:function(e,a){e&1&&(n(0,"div",0),u("click",function(){return a.close()}),n(1,"div",1),u("click",function(l){return l.stopPropagation()}),n(2,"h2"),o(3,"Student Details"),t(),n(4,"div")(5,"p")(6,"strong"),o(7,"ID:"),t(),o(8),t(),n(9,"p")(10,"strong"),o(11,"Name:"),t(),o(12),t(),n(13,"p")(14,"strong"),o(15,"Email:"),t(),o(16),t(),n(17,"p")(18,"strong"),o(19,"Contact:"),t(),o(20),t(),n(21,"p")(22,"strong"),o(23,"Attendance:"),t(),o(24),t()(),n(25,"button",2),u("click",function(){return a.close()}),o(26,"Close"),t()()()),e&2&&(d(8),h(" ",a.student==null?null:a.student.id,""),d(4),h(" ",a.student==null?null:a.student.name,""),d(4),h(" ",a.student==null?null:a.student.email,""),d(4),h(" ",a.student==null?null:a.student.contact,""),d(4),h(" ",(a.student==null||a.student.attendance[0]==null?null:a.student.attendance[0].status)||"No records",""))},styles:[".modal-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:1000}.modal-content[_ngcontent-%COMP%]{background-color:#fff;padding:20px;border-radius:10px;box-shadow:0 0 15px #0000004d;max-width:400px;width:100%;text-align:left}button[_ngcontent-%COMP%]{margin-top:20px;padding:10px;background-color:#007bff;color:#fff;border:none;border-radius:5px;cursor:pointer}"]})};function Y(i,r){if(i&1&&(n(0,"tr")(1,"td"),o(2),t(),n(3,"td"),o(4),t(),n(5,"td"),o(6),t()()),i&2){let e=r.$implicit;d(2),m(e.date),d(2),m(e.studentName),d(2),m(e.status)}}function Z(i,r){if(i&1&&(n(0,"table")(1,"thead")(2,"tr")(3,"th"),o(4,"Date"),t(),n(5,"th"),o(6,"Student Name"),t(),n(7,"th"),o(8,"Status"),t()()(),n(9,"tbody"),p(10,Y,7,3,"tr",9),t()()),i&2){let e=g();d(10),c("ngForOf",e.filteredAttendance)}}function $(i,r){i&1&&(n(0,"div")(1,"p"),o(2,"No attendance records found."),t()())}function tt(i,r){if(i&1){let e=W();n(0,"tr",4),u("click",function(){let s=F(e).$implicit,l=g(2);return A(l.openModal(s))}),n(1,"td"),o(2),t(),n(3,"td"),o(4),t(),n(5,"td"),o(6),t()()}if(i&2){let e=r.$implicit;d(2),m(e==null?null:e.name),d(2),m(e==null?null:e.email),d(2),m((e==null||e.attendance[0]==null?null:e.attendance[0].status)||"Absent")}}function et(i,r){if(i&1&&(n(0,"table")(1,"thead")(2,"tr")(3,"th"),o(4,"Name"),t(),n(5,"th"),o(6,"Email"),t(),n(7,"th"),o(8,"Attendance"),t()()(),n(9,"tbody"),p(10,tt,7,3,"tr",10),t()()),i&2){let e=g();d(10),c("ngForOf",e.filteredStudents)}}function nt(i,r){i&1&&(n(0,"div")(1,"p"),o(2,"No students found."),t()())}function ot(i,r){if(i&1){let e=W();n(0,"app-student-modal",11),u("closeModal",function(){F(e);let s=g();return A(s.closeModal())}),t()}if(i&2){let e=g();c("student",e.selectedStudent)}}var S=class i{constructor(r,e){this.teacherService=r;this.router=e}teacher={};attendanceHistory=[];filteredAttendance=[];startDate="";endDate="";students;filteredStudents=[];searchTerm="";selectedStudent;showModal=!1;ngOnInit(){this.teacher=JSON.parse(localStorage.getItem("currentUser")||"{}"),this.attendanceHistory=this.teacherService.getAttendance(),this.filteredAttendance=[...this.attendanceHistory],this.students=this.teacherService.students,this.filteredStudents=[...this.students]}filterAttendance(){if(this.startDate&&this.endDate){let r=new Date(this.startDate),e=new Date(this.endDate);this.filteredAttendance=this.attendanceHistory.filter(a=>{let s=new Date(a.date);return s>=r&&s<=e})}else this.filteredAttendance=[...this.attendanceHistory]}onSearchChange(){let r=this.searchTerm.trim().toLowerCase();r?this.filteredStudents=this.students.filter(e=>e.name.toLowerCase().includes(r)||e.email.toLowerCase().includes(r)):this.filteredStudents=[...this.students]}viewStudents(){this.router.navigate(["/student-list"])}openModal(r){this.selectedStudent=r,this.showModal=!0}closeModal(){this.showModal=!1}static \u0275fac=function(e){return new(e||i)(f(D),f(y))};static \u0275cmp=_({type:i,selectors:[["app-teacher-dashboard"]],standalone:!1,decls:26,vars:9,consts:[[1,"dashboard-container"],[1,"dashboard-header"],[1,"attendance-history"],["type","date",3,"ngModelChange","ngModel"],[3,"click"],[4,"ngIf"],[1,"student-list-container"],["type","text","placeholder","Search students...",3,"ngModelChange","ngModel"],[3,"student","closeModal",4,"ngIf"],[4,"ngFor","ngForOf"],[3,"click",4,"ngFor","ngForOf"],[3,"closeModal","student"]],template:function(e,a){e&1&&(n(0,"div",0)(1,"div",1)(2,"h2"),o(3),t()(),n(4,"div",2)(5,"h3"),o(6,"Attendance Overview"),t(),n(7,"div")(8,"label"),o(9,"Start Date:"),t(),n(10,"input",3),b("ngModelChange",function(l){return M(a.startDate,l)||(a.startDate=l),l}),t(),n(11,"label"),o(12,"End Date:"),t(),n(13,"input",3),b("ngModelChange",function(l){return M(a.endDate,l)||(a.endDate=l),l}),t(),n(14,"button",4),u("click",function(){return a.filterAttendance()}),o(15,"Filter"),t()(),p(16,Z,11,1,"table",5)(17,$,3,0,"div",5),t()(),V(18,"hr"),n(19,"div",6)(20,"h2"),o(21,"Student List"),t(),n(22,"input",7),b("ngModelChange",function(l){return M(a.searchTerm,l)||(a.searchTerm=l),l}),u("ngModelChange",function(){return a.onSearchChange()}),t(),p(23,et,11,1,"table",5)(24,nt,3,0,"div",5),t(),p(25,ot,1,1,"app-student-modal",8)),e&2&&(d(3),h("Welcome, ",a.teacher.name,""),d(7),C("ngModel",a.startDate),d(3),C("ngModel",a.endDate),d(3),c("ngIf",a.attendanceHistory.length>0),d(),c("ngIf",a.filteredAttendance.length===0),d(5),C("ngModel",a.searchTerm),d(),c("ngIf",a.filteredStudents.length>0),d(),c("ngIf",a.filteredStudents.length===0),d(),c("ngIf",a.showModal))},dependencies:[P,v,E,T,w,I],styles:[".dashboard-container[_ngcontent-%COMP%]{padding:20px;background-color:#f4f7fb;border-radius:8px;box-shadow:0 4px 8px #0000001a}.dashboard-container[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:30px}.dashboard-container[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.8rem;color:#333}.dashboard-container[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;padding:10px 20px;font-size:1rem;border-radius:5px;cursor:pointer}.dashboard-container[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.dashboard-container[_ngcontent-%COMP%]   .attendance-history[_ngcontent-%COMP%]{margin-bottom:40px}.dashboard-container[_ngcontent-%COMP%]   .attendance-history[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.6rem;color:#444;margin-bottom:20px}.dashboard-container[_ngcontent-%COMP%]   .attendance-history[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:20px}.dashboard-container[_ngcontent-%COMP%]   .attendance-history[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1rem;margin-right:10px}.dashboard-container[_ngcontent-%COMP%]   .attendance-history[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:10px;margin-right:15px;border-radius:4px;border:1px solid #ccc;font-size:1rem}.dashboard-container[_ngcontent-%COMP%]   .attendance-history[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#007bff;outline:none;box-shadow:0 0 5px #007bff80}.dashboard-container[_ngcontent-%COMP%]   .attendance-history[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 20px;background-color:#28a745;color:#fff;font-size:1rem;border:none;border-radius:4px;cursor:pointer}.dashboard-container[_ngcontent-%COMP%]   .attendance-history[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#218838}.dashboard-container[_ngcontent-%COMP%]   .attendance-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-top:20px}.dashboard-container[_ngcontent-%COMP%]   .attendance-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:#007bff;color:#fff}.dashboard-container[_ngcontent-%COMP%]   .attendance-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px;text-align:left;font-weight:700}.dashboard-container[_ngcontent-%COMP%]   .attendance-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f9f9f9}.dashboard-container[_ngcontent-%COMP%]   .attendance-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#e9ecef}.dashboard-container[_ngcontent-%COMP%]   .attendance-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px;border:1px solid #ddd}.dashboard-container[_ngcontent-%COMP%]   .attendance-history[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;color:#777}.student-list-container[_ngcontent-%COMP%]{margin-top:40px;padding:20px;background-color:#f9f9f9;border-radius:8px;box-shadow:0 4px 8px #0000001a}.student-list-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.8rem;color:#333;margin-bottom:20px;text-align:center}.student-list-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{width:100%;padding:10px;font-size:1rem;border-radius:4px;border:1px solid #ccc;margin-bottom:20px}.student-list-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus{border-color:#007bff;outline:none;box-shadow:0 0 5px #007bff80}.student-list-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.student-list-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;font-size:1.2rem}.student-list-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px;text-align:left;font-weight:700}.student-list-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}.student-list-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#e9ecef}.student-list-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px;border:1px solid #ddd}.student-list-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;color:#777;font-size:1.2rem}"]})};function it(i,r){if(i&1&&(n(0,"tr")(1,"td"),o(2),t(),n(3,"td"),o(4),t(),n(5,"td"),o(6),t()()),i&2){let e=r.$implicit;d(2),m(e.name),d(2),m(e.email),d(2),m(e.attendanceStatus)}}function at(i,r){if(i&1&&(n(0,"table")(1,"thead")(2,"tr")(3,"th"),o(4,"Name"),t(),n(5,"th"),o(6,"Email"),t(),n(7,"th"),o(8,"Attendance"),t()()(),n(9,"tbody"),p(10,it,7,3,"tr",3),t()()),i&2){let e=g();d(10),c("ngForOf",e.filteredStudents)}}function rt(i,r){i&1&&(n(0,"div")(1,"p"),o(2,"No students found."),t()())}var N=class i{constructor(r,e){this.studentService=r;this.router=e}students=[];filteredStudents=[];searchTerm="";ngOnInit(){this.students=this.studentService.students,this.filteredStudents=[...this.students]}ngOnChanges(){this.filterStudents()}filterStudents(){this.searchTerm?this.filteredStudents=this.students.filter(r=>r.name.toLowerCase().includes(this.searchTerm.toLowerCase())):this.filteredStudents=[...this.students]}static \u0275fac=function(e){return new(e||i)(f(D),f(y))};static \u0275cmp=_({type:i,selectors:[["app-student-list"]],standalone:!1,features:[j],decls:6,vars:3,consts:[[1,"student-list-container"],["type","text","placeholder","Search students...",3,"ngModelChange","ngModel"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(e,a){e&1&&(n(0,"div",0)(1,"h2"),o(2,"Student List"),t(),n(3,"input",1),b("ngModelChange",function(l){return M(a.searchTerm,l)||(a.searchTerm=l),l}),t(),p(4,at,11,1,"table",2)(5,rt,3,0,"div",2),t()),e&2&&(d(3),C("ngModel",a.searchTerm),d(),c("ngIf",a.filteredStudents.length>0),d(),c("ngIf",a.filteredStudents.length===0))},dependencies:[P,v,E,T,w],encapsulation:2})};var dt=[{path:"",component:S},{path:"teacher-dashboard",component:S},{path:"student-list",component:N}],L=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=x({type:i});static \u0275inj=O({imports:[z.forChild(dt),z]})};var U=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=x({type:i});static \u0275inj=O({imports:[H,L,B]})};export{U as TeacherModule};
