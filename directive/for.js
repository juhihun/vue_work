const template=/*html*/`
    <table class="table table-hover table-striped">
        <thead><tr><th>순번</th><th>제품명</th><th>가격</th></tr></thead>
        <tbody>
            <tr v-for="(prod,i) in prod">
            <td>{{i}}</td><td>{{prod.prodNm}}</td><td>{{prod.price}}</td></tr>
        </tbody>
    </table>
`;
export default{
    template,
    data(){
        return{
            prod : [{prodNm:'키보드', price:3000},
                  {prodNm:'마우스', price:5000},
                   {prodNm:'모니터', price:7000},

            ]
        };
    },
    methods:{}
}