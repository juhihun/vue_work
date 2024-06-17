<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('질문에는 일반적으로 물음표가 포함됩니다.')

// watch는 ref에서 직접 작동합니다
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = '생각 중...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer === 'yes' ? '네' : '아니오'
    } catch (error) {
      answer.value = '에러! API에 연결할 수 없습니다. ' + error
    }
  }
})
</script>

<template>
  <p>
    예/아니오 질문:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
</template>
