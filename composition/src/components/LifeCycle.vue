<template>
  <div>lifecycle</div>
</template>
<script setup>
import { onMounted } from 'vue';
import { onUpdated } from 'vue';

onMounted( () => console.log('마운트됨'))
onUpdated(() =>console.log('created'))

//created 훅에 해당
console.log('created')

</script>