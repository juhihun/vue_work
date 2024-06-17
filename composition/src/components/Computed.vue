<template>
    <input type="text" v-model="firstname"></input>
    <input type="text" v-model="lastname"></input>
    <div>{{ fullname }}</div>
    <hr>
    <input type="text" v-model="name.firstname"></input>
    <input type="text" v-model="name.lastname"></input>
    <div>{{ fullname2 }}</div>
    <hr>
    <input type="text" v-model="reactivename.firstname"></input>
    <input type="text" v-model="reactivename.lastname"></input>
    <div>{{ fullname3 }}</div>

</template>

<script setup>
import {ref, computed, reactive} from 'vue';
let firstname = ref('hong')
let lastname = ref('gildong')
let fullname = computed(()=>{
    return firstname.value + ' '+ lastname.value
})

let name = ref({firstname:'길동',lastname:'hong'})
let fullname2 = computed(()=> name.value.firstname +' ' + name.value.lastname);


let reactivename = reactive({firstname:'길동',lastname:'hong'})
let fullname3 = computed(()=> reactivename.firstname +' ' +reactivename.lastname);
</script>

<style>
</style>