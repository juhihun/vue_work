<template>
    <div>
        <input v-model="total.num1">
        <input v-model="total.num2">
        <div>{{ total.result }}</div>
    </div>
</template>

<script setup>
import {watch, reactive} from 'vue';

let total= reactive({num1:0 ,num2:0, result:0})
watch(total , (newN,oldN) => {
    console.log(newN)
    newN.result = parseInt(newN.num1)+parseInt(newN.num2)})


</script>

<style>
</style>