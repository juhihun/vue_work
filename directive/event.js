const template=/*html*/`
<select v-model="selValue" class="form-control mb-3" @change="changeSelect">
<option value="">도시 선택</option>
<option v-for="city in cities" :value="city.value" v-text="city.text"></option>
</select>
<input @keyup.down ="doSomething" v-model="firstName">
<input @click.ctrl ="doSomething"  v-model="lastName">
<div>watch:{{fullName}}</div>
<div>computde:{{computedFullName}}</div>
`;

export default{
    template,
    data(){
        return{
            selValue : '21',
            cities : [{value:'02', text:'서울'},
                     {value:'21', text:'부산'},
                        {value:'064', text:'제주'}   ],
            firstName : '길동',
            lastName : '홍',
            fullName: ''
        }},
    watch : {
        firstName (){this.fullName = this.firstName +" "+this.lastName},
        lastName (){this.fullName = this.firstName +" "+this.lastName}
        },
    computed:{
        computedFullName(){ return this.firstName+" "+this.lastName}
    },
    methods : {
        changeSelect(){
           const result =  this.cities.find( a=> this.selValue == a.value);
           // alert(this.selValue)
           alert(result.text)
        },
        doSomething(){
            alert("엔터")
        },
    }
}