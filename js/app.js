'use strict';
function Employee (FullName,Department,Level){
    this.EmployeeID = id(idnumber);
    this.FullName = FullName;
    this.Department = Department;
    this.Level=Level;
    //this.Image= Image`./images/${this.EmployeeID}.PNG`;
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
employeess.push(new Employee(1000,'Ghazi Samer','Administration','Senior',senior));
employeess.push(new Employee(1001,'Lana Ali','Finance','Senior',senior));
employeess.push(new Employee(1002,'Tamara Ayoub','Marketing','Senior',senior));
employeess.push(new Employee(1003,'Safi Walid','Administration','Mid-Senior',midSenior));
employeess.push(new Employee(1004,'Omar Zaid','Development','Senior',senior));
employeess.push(new Employee(1005,'Rana Saleh','Development','Junior',junior));employees.push(new Employee(1006,'Hadi Ahmad','Finance','Mid-Senior',midSenior);


Employee.prototype.render = function (){
  document.write(`<p>${this.FullName} his salary is ${this.Salary}</p>`)
}
//employee1.render();
//employee2.render();
//employee3.render();
//employee4.render();
//employee5.render();
//employee6.render();  
//employee7.render();
let employeeform = document.getElementById('employeeinformation');
employeeform.addEventListener('')

function id(x) {
  let newid = x + 1;
  idnumber++;
  return newid;
}

for (let index = 0; index < employeess.length; index++) {

  employeess[index].netsalary();
  console.log(employeess[index]);
}


let mysection = document.getElementById('cards');

function render(){

  for (let i =0 ; i < Employee.all.length; i++){
    let employee = Employee.all[i];
 

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

  let newemployee = new Employee(FullName, Department,
    Level,ImageUrl);
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