'use strict';
let idnumber = 1000;
function Employee (FullName,Department,Level,ImageUrl = null){
    this.EmployeeID = id(idnumber);
    this.FullName = FullName;
    this.Department = Department;
    this.Level=Level;
    this.Image= Image`./images/${this.EmployeeID}.PNG`;
    this.Salary = 0
    Employee.all.push(this);
}
if (this.Level ='Senior') {
 let max =2000;
 let min =1500;
    var senior= (Math.floor(Math.random() * (max - min) + min))*0.075;
  };
  if (this.Level ='Mid-Senior') {
    let max =1500;
    let min =1000;
       var midSenior= (Math.floor(Math.random() * (max - min) + min))*0.075;
     };
     if (this.Level ='Mid-Senior') {
      let max =1000;
      let min =500;
         var junior= (Math.floor(Math.random() * (max - min) + min))*0.075;
       };
       Employee.all  = [];
       const employeess = [];
employeess.push(new Employee('Ghazi Samer','Administration','Senior','./pic/Ghazi.jpg'));
employeess.push(new Employee('Lana Ali','Finance','Senior','./pic/Lana.jpg'));
employeess.push(new Employee('Tamara Ayoub','Marketing','Senior','./pic/Tamara.jpg'));
employeess.push(new Employee('Safi Walid','Administration','Mid-Senior','./pic/Safi.jpg'));
employeess.push(new Employee('Omar Zaid','Development','Senior','./pic/Omar.jpg'));
employeess.push(new Employee('Rana Saleh','Development','Junior','./pic/Rana.jpg'));
employees.push(new Employee('Hadi Ahmad','Finance','Mid-Senior','./pic/Hadi.jpg'));


//Employee.prototype.render = function (){
 // document.write(`<p>${this.FullName} his salary is ${this.Salary}</p>`)
//}
//employee1.render();
//employee2.render();
//employee3.render();
//employee4.render();
//employee5.render();
//employee6.render();  
//employee7.render();
let employeeform = document.getElementById('employeeinformation');
employeeform.addEventListener('submit', addemployeeform)

function id(x) {
  let newid = x + 1;
  idnumber++;
  return newid;
}

for (let i = 0; i < employeess.length; i++) {

  employeess[i].netsalary();
  console.log(employeess[i]);
}


let mysection = document.getElementById('cards');

function render(){

  for (let i =0 ; i < Employee.all.length; i++){
    let employee = Employee.all[i];
 
    mysection.style = 'display: flex; flex-wrap: wrap' ;
    let divEl = document.createElement('div');
    mysection.appendChild(divEl);
    divEl.style = 'padding: 15px; margin:10px; width:180px; height: 1fr; background-color: #7CFC00; display:flex; align-items: center; flex-direction: column';

    let imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src',employee.ImagePath);
    imgEl.style = 'width: 170px; height: 170px; border-radius: 50%';

    let p1El = document.createElement('p');
    divEl.appendChild(p1El);
    p1El.textContent = `Name: ${employee.FullName}  ID:${employee.EmployeeID}`;
    p1El.style = 'display: flex; margin:5px; width:138px;';

    let p2El = document.createElement('p');
    divEl.appendChild(p2El);
    p2El.textContent = `Department: ${employee.Department}     Level: ${employee.Level}`;
    p2El.style = ' margin: 0px; display: flex; width:138px;';

    let p3El = document.createElement('p');
    divEl.appendChild(p3El);
    p3El.textContent = `Salary: ${employee.Salary}`;
    p3El.style = 'width:138px;';


  }}

  


let employeeform = document.getElementById('employeeform');
employeeform.addEventListener('submit', add );

function add (event){
  event.preventDefault();

  let FullName = event.target.name.value;
  let Department = event.target.Department.value;
  let Level = event.target.level.value;
  let ImageUrl = event.target.ImageUrl.value;

  let newemployee = new Employee(FullName, Department,Level,ImageUrl);
  newemployee.netsalary();
  mysection.textContent = '';
  render();
  setting();
  console.log(newemployee);
}


function setting(){
  let data = JSON.stringify(Employee.all);
  localStorage.setItem('employees',data);


}

function get() {
  let s  = localStorage.getItem('employees');  
  let z = JSON.parse(s);
  if (z !== null){
    Employee.all = z;
  }
  render();
}

get();