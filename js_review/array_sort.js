
let fruit = ['banana','오렌지','망고','apple']

//fruit.sort((a,b)=> b.length - a.length);
fruit.sort((a,b)=> {
    if (a > b) return -1;
    else if(a==b) return 0;
    else return 1;
});
console.log(fruit);

//객체배열 정렬
let arrEmp= [{empName :'scott', dept : '개발', hireDate : '2019-11-01',score : 90},
            {empName :'hong', dept : '기획', hireDate : '2020-11-01',score : 95},
            {empName :'choi', dept : '총무', hireDate : '2021-11-01',score : 100}
]
//문자비교
arrEmp.sort((a, b)=> {
    if (a.empName > b.empName) return 1;
    else if(a.empName==b.empName) return 0;
    else return -1;
});

console.log(arrEmp);

//숫자비교(내림차순) 숫자비교 if 없어도됨
arrEmp.sort((a, b)=> b.score - a.score)
console.log('성적순',arrEmp);



//필터
let result = arrEmp.filter( emp => emp.dept == '개발');
console.log('개발부서',result);
//filter 조건에 충족하는 전부, find 첫번째 찾은값
let result1 = arrEmp.find ( emp => emp.score >= 95);
console.log('90점이상',result1)



