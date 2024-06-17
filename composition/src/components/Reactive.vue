<template>
    <div>{{ state.nested.count }} {{state.arr}}</div>
    <button @click="plusHandler">증가</button>
</template>

<script setup>
import { reactive } from 'vue';

let state = reactive ({ 
    nested: { count: 0 },
    arr: ['foo', 'bar']})
   
const plusHandler = ()=>{
    state.nested.count ++
}

</script>

<style>
</style>