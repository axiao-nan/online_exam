<template>
    <div class="content-field">
      <div class="card">
        <div class="card-body">
          <div class="card question"
               :class="{ 'selected-option': selectedQuestionType === '选择题' }"
               @click="selectQuestionType('选择题')">
            <div class="card-body">
              选择题
            </div>
          </div>
          <div class="card question"
               :class="{ 'selected-option': selectedQuestionType === '填空题' }"
               @click="selectQuestionType('填空题')">
            <div class="card-body">
              填空题
            </div>
          </div>
          <div class="card question"
               :class="{ 'selected-option': selectedQuestionType === '简答题' }"
               @click="selectQuestionType('简答题')">
            <div class="card-body">
              简答题
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  import {ref} from 'vue';
  export default {
    name: "QuestionType",
    setup() {
        const store=useStore();
        const selectedQuestionType=ref(null);
        const selectQuestionType=(questionType)=> {
            selectedQuestionType.value = questionType;

            let option=1;
            if(questionType==="填空题") option=2;
            else
            option=3;
            
            store.commit("update_questionType",option);
      }

      return{
        selectQuestionType,
        selectedQuestionType
      }
    }

    
  };
  </script>
  
  <style scoped>
  .content-field {
    flex: 1;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .question {
    margin-bottom: 15px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.1s ease;
  }
  
  .selected-option {
    color: blue;
  }
  
  .question:hover {
    transform: scale(1.1);
  }
  </style>
  