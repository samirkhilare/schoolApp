import{Z as s}from"./chunk-TDAYXC56.js";var r=class a{storageKey="students";attendanceKey="attendance";students=[{id:1,name:"John Doe",email:"john@example.com",contact:"1234567890",role:"student",password:"student123",attendance:[{date:"2024-12-15",status:"Present"},{date:"2024-12-16",status:"Absent"},{date:"2024-12-17",status:"Present"}]},{id:2,name:"Jane Smith",email:"jane@example.com",contact:"0987654321",role:"teacher",password:"teacher123",attendance:[]},{id:3,name:"Alice Johnson",email:"alice@example.com",contact:"9876543210",role:"student",password:"student123",attendance:[{date:"2024-12-15",status:"Absent"},{date:"2024-12-16",status:"Present"},{date:"2024-12-17",status:"Present"}]},{id:4,name:"Bob Williams",email:"bob@example.com",contact:"8765432109",role:"student",password:"student123",attendance:[{date:"2024-12-15",status:"Present"},{date:"2024-12-16",status:"Present"},{date:"2024-12-17",status:"Absent"}]},{id:5,name:"Admin User",email:"admin@example.com",contact:"1231231234",role:"admin",password:"admin123",attendance:[]}];constructor(){}getUsers(){return this.students}registerStudent(e){let t=this.getStudents();e.id=t.length+1,t.push(e),localStorage.setItem(this.storageKey,JSON.stringify(t))}getStudents(){return JSON.parse(localStorage.getItem(this.storageKey)||"[]")}markAttendance(e){let t=JSON.parse(localStorage.getItem("attendance")||"[]");t.push(e),localStorage.setItem("attendance",JSON.stringify(t))}getAttendance(){return JSON.parse(localStorage.getItem("attendanceHistory")||"[]")}updateProfile(e){let t=this.getStudents(),n=t.findIndex(d=>d.email===e.email);n!==-1&&(t[n]=e),localStorage.setItem(this.storageKey,JSON.stringify(t))}getStudentById(e){return e&&this.students.find(t=>t.id.toString()===e)||null}static \u0275fac=function(t){return new(t||a)};static \u0275prov=s({token:a,factory:a.\u0275fac,providedIn:"root"})};export{r as a};