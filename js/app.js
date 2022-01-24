'use strict';
function Employee (EmployeeID,FullName,Department,Level,Salary){
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level=Level;
    //this.Image= Image`./images/${this.EmployeeID}.PNG`;
    this.Salary = Salary
}
if (this.Level ='Senior') {
 let max =2000;
 let min =1500;
    var senior= (Math.floor(Math.random() * (max - min) + min))*0.925;
  };
  if (this.Level ='Mid-Senior') {
    let max =1500;
    let min =1000;
       var midSenior= (Math.floor(Math.random() * (max - min) + min))*0.925;
     };
     if (this.Level ='Mid-Senior') {
      let max =1000;
      let min =500;
         var junior= (Math.floor(Math.random() * (max - min) + min))*0.925;
       };
const employee1 = new Employee(1000,'Ghazi Samer','Administration','Senior',senior);
const employee2 = new Employee(1001,'Lana Ali','Finance','Senior',senior);
const employee3 = new Employee(1002,'Tamara Ayoub','Marketing','Senior',senior);
const employee4 = new Employee(1003,'Safi Walid','Administration','Mid-Senior',midSenior);
const employee5 = new Employee(1004,'Omar Zaid','Development','Senior',senior);
const employee6 = new Employee(1005,'Rana Saleh','Development','Junior',junior);
const employee7 = new Employee(1006,'Hadi Ahmad','Finance','Mid-Senior',midSenior);


Employee.prototype.render = function (){
  document.write(`<p>${this.FullName} his salary is ${this.Salary}</p>`)
}
employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();  
employee7.render();
