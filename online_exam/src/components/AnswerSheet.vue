<template>
    <div class="content-field">
      <div class="card">
        <div class="card-body">
          <div class="card question" v-for="question in $store.state.questionList" :key="question.id">
            <div class="card-body">
              <div class="question-content">{{ question.numId }}.{{ question.content }}</div>
              <div class="option" @click="get_ans(question.id, 'A', question.numId)" :class="{ 'selected-option': isSelected(question.id, 'A') }">A:{{ question.answerA }}</div>
              <div class="option" @click="get_ans(question.id, 'B', question.numId)" :class="{ 'selected-option': isSelected(question.id, 'B') }">B:{{ question.answerB }}</div>
              <div class="option" @click="get_ans(question.id, 'C', question.numId)" :class="{ 'selected-option': isSelected(question.id, 'C') }">C:{{ question.answerC }}</div>
              <div class="option" @click="get_ans(question.id, 'D', question.numId)" :class="{ 'selected-option': isSelected(question.id, 'D') }">D:{{ question.answerD }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  
  export default {
    name: "AnswerSheet",
    setup() {
      const store = useStore();
  
      const get_ans = (questionId, give_ans, numId) => {
        store.commit("updateAns", { questionId, give_ans });
        store.commit("update_degreeBox", numId);
      };
  
      const isSelected = (questionId, option) => {
        const questionAns = store.state.questionAns.find((ans) => ans.id === questionId);
        return questionAns && questionAns.answerKey === option;
      };
  
      return {
        get_ans,
        isSelected,
      };
    },
  };
  </script>
  
  <style scoped>
  .content-field {
    flex: 4;
    margin-left: 10px;
    width: 100%;
  }
  
  .option {
    height: 30px;
    cursor: pointer;
    transition: transform 0.5s ease;
    margin-bottom: 10px;
  }
  
  .option:hover {
    transform: translate(-2px, -2px);
  }
  
  .selected-option {
    color: red;
  }
  
  .question-content {
    margin-bottom: 10px;
  }
  
  .question {
    margin-bottom: 7px;
    font-size: 17px;
  }
  </style>
  