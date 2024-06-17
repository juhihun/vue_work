const template = /*html*/`
<!--v-text, v-html 태그 내용(바디)바인딩-->
    <div>{{htmlString}}</div>

    <div v-text="htmlString"></div>
    <div v-html="htmlString"></div>
   <!-- v-model 폼필드 바인딩-->
    <input type="text" class="form-control mb-3" v-model.lazy="memInfo.valueModel">
    <input type="number" class="form-control" v-model.number="memInfo.score">
    <p v-text="valueModel"></p>
    <textarea class="form-control mb-3" v-model = "memInfo.memo" ></textarea>
    <select v-model="memInfo.city" class="form-control mb-3">
     <option value="02">서울</option>
     <option value="21">부산</option>
     <option value="064">제주</option>
    </select>
    <div class="form-check mb-3">
    <label class="form-check-label"> <input type="checkbox" class="form-check-input" value="대전"v-model="memInfo.mainYn">대전</label>
    </div>
    <div class="form-check mb-3">
    <label class="form-check-label"> <input type="checkbox" class="form-check-input" value="대구"v-model="memInfo.mainYn">대구</label>
    </div>
    <div class="form-check mb-3">
    <label class="form-check-label"> <input type="checkbox" class="form-check-input" value="인천"v-model="memInfo.mainYn">인천</label>
    </div>

    <div class="form-check mb-3">
    <label class="form-check-label"> <input type="radio" class="form-check-input" value="대전"v-model="memInfo.picked">대전</label>
    </div>
    <div class="form-check mb-3">
    <label class="form-check-label"> <input type="radio" class="form-check-input" value="대구"v-model="memInfo.picked">대구</label>
    </div>
    <div class="form-check mb-3">
    <label class="form-check-label"> <input type="radio" class="form-check-input" value="인천"v-model="memInfo.picked">인천</label>
    </div>
    <button  type="button" class="btn btn-primary" v-bind:disabled="memInfo.valueModel ==''">등록</button>
   <!-- v-bind 태그 속성 바인딩-->
    <img v-bind:src="memInfo.profile">
    <!--클래스 바인딩-->
    <div class="container mb-3" v-bind:class="{
        'active': isActive, 'text-red':hasError
    }">클래스바인딩</div>
    <div class="container mb-3" v-bind:class="[activeClass, errorClass]">클래스 배열 바인딩</div>
    <div class="container mb-3" v-bind:style="styleObject">클래스 인라인 바인딩</div>
    
    <p> {{memInfo}}</p>
`;
//태그(style)가 있으면 v-html사용
export default{
    template,
    data(){return { htmlString : /*html*/`<p style = "color:red;">이건 빨간색</p>`,
                    memInfo : {valueModel : `south Korea`,
                    score : 100,
                    memo : '메모를 하세요',
                    city : "064",
                    mainYn : ["대전","대구"],
                    picked : "대구",
                    profile : "말티즈.jpg"
                    //어떤데이터가 나타나는지, 또한 초기값을 주기위해 적음
                },
                isActive : true,
                hasError : false,
                activeClass: 'active',
                errorClass : 'text-red',
                //배열은 true,false 조건 못함
                styleObject:{color:'red',fontSize:'13px'}

    }},
    methods : {}
}
//화면, 데이터, 기능 순