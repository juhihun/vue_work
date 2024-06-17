/*
객체 구조분해
*/

//객체 구조분해
let emp = {empName :'scott', dept : '개발', hireDate : '2019-11-01'}
// let empName = emp.empName;
let {empName, dept} = emp
console.log(empName, dept);

//객체복사
let emp1 = {...emp,dt : '2015'};
emp.empName = 'kim';
console.log(emp1.empName, emp.empName)

//배열 구조분해
let arr = ['a','b','c']
let [first] = arr;
console.log(first);
//배열의 첫번째 값을 first 함수에 담아