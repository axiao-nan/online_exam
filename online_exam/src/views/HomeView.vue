<template>
  <NavBar />
    <div v-if="!$store.state.isSubmitSheet" class="all-field">
      <SubjectType />
        <BaseL>
          <div class="all-field-body">
            <div class="field-left">
              <QuestionType />
              <AnswerSheet />
            </div>
            <div class="field-right">
              <FinishDegree />
              <SurplusTime />
            </div>
          </div>
        </BaseL>
    </div>
    <div v-if="$store.state.isSubmitSheet" class="show-grade">
      <br>
      <div class="show-grade-head">
        您的分数是
      </div>
      <div class="show-grade-body">
        {{ $store.state.grade }}
      </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import SubjectType from '../components/SubjectType.vue';
import QuestionType from '../components/QuestionType.vue';
import FinishDegree from '../components/FinishDegree.vue';
import BaseL from '../components/BaseL.vue';
import SurplusTime from '../components/SurplusTime.vue';
import AnswerSheet from '../components/AnswerSheet.vue';
export default{
    name:"HomeView",
    components:{
        NavBar,SubjectType,QuestionType,FinishDegree,BaseL,SurplusTime,AnswerSheet
    },
    
}
</script>

<style scoped>
 .all-field-body{
  width: 100%;
  display: flex;
  flex-direction: row;
  
  
}
.field-left{
  flex:3;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.field-right{
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
}

.show-grade-head{
  text-align: center;
  font-size: 60px;
  font-weight: bold;
}

.show-grade-body{
  text-align: center;
  font-size: 55px;
  font-weight: bold;
  color: red;
}
</style>