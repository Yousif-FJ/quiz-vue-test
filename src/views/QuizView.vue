<script setup lang="ts">
import * as QuizModule from '../components/quizData'
import { ref } from 'vue'

let quizData = QuizModule.GetSampleQuiz();

let currentQuestionIndex = ref(0);
let currentQuestion = ref(quizData.Questions[0]);

let pickedAnswerIndex = ref(0);
let hasQuizEnded = ref(false);
let score = ref(0);

function CheckButtonClick() {
  if (pickedAnswerIndex.value == currentQuestion.value.CorrectChoiceIndex) {
    score.value++;
  }
  currentQuestionIndex.value++

  if (currentQuestionIndex.value == quizData.Questions.length) {
    hasQuizEnded.value = true;
  } else {
    currentQuestion.value = quizData.Questions[currentQuestionIndex.value];
  }
}

</script>

<template>
  <div class="container">
    <h2>Welcome to quiz app test using Vue</h2>
    <p>This project is to test vue</p>

      <div v-if="hasQuizEnded == false" class="card">
        <div class="card-header">
          <span class="w-50 d-inline-block"> 
            Quiz - {{ quizData.Name }}
          </span>
          <span class="w-50 text-end d-inline-block ">
            Question {{ currentQuestionIndex + 1 }} - {{ quizData.Questions.length }}
          </span>
        </div>

        <div class="card-body">
          <h5 class="card-title">
              {{ currentQuestion.Question }}
          </h5>
          <div class="mb-2">
            <div v-for="(choice, index) in currentQuestion.Choices" class="form-check">
              <input class="form-check-input" type="radio" :id="'choice' + index.toString()" :value="index"
                v-model="pickedAnswerIndex">
              <label class="form-check-label" :for="'choice' + index.toString()">
                {{ choice }}
              </label>
            </div>
          </div>

          <button @click="CheckButtonClick()" class="btn btn-primary">Check answer</button>
        </div>
      </div>
      <div v-else class="alert alert-info" role="alert">
        Your score is {{ score }}
      </div>

  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}


.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
