import headers from './header.js';
import footers from './footer.js';
//import fors from './for.js';
//import dataBinding from './for.js';
//import ifs from './if.js';
//import events from './event.js';
//import posts from './post.js';
import todos from './todo.js';
import router from './router.js';
const {createApp} = Vue
const template = /*html*/ `<div> <headers/>
                                  {{name}} {{msg}} 

                                  <!--<dataBinding/>-->
                                  <!--<ifs/>-->
                                  <!--<events/>-->
                                 <!-- <posts/>-->
                                 <RouterView/>
                                <!--<todos/>-->
                                 <footers/>
                            </div>`;
//vue 인스턴스 생성
const component = {
    template,
    name : "모듈연습",
    components:{headers,footers},
    data(){ return {name :'홍길동',msg:'안녕하세요!'}},
    methods : {
        functiona (){}
    },
    created(){},
    mounted(){},
    computed : {
        fullname(){}
    }
}
createApp(component)
.use(router)
.mount("#app")
