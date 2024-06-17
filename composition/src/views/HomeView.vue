<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
     <!-- <Props title="props 전달"
     subject="subject전달"></Props>
     <Props 
     subject="subject2전달"></Props>
     <Props></Props> -->
    <Provide />

    </div>
  <!-- <LifeCycle></LifeCycle> -->
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Provide from "../components/Provide.vue";
import {provide} from 'vue';

export default {
  name: "HomeView",
  components:{ Provide },
  setup(){
    provide('title','vue.js프로젝트');
  }
};
</script>
