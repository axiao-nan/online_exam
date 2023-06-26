<template>
  <StudentHead />
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
    <div v-if="$store.state.isSubmitSheet && $store.state.questionType !== 3" class="show-grade">
      <br>
      <div class="show-grade-head">
        您的分数是
      </div>
      <div class="show-grade-body">
        {{ $store.state.grade }}
      </div>
      <div class="return-field">
        <div class="card return-home">
          <div @click="update_submitSheet()" class="card-body">
            返回主页
          </div>
        </div>
      </div>
    </div>

    <div v-if="$store.state.isSubmitSheet && $store.state.questionType === 3" class="show-grade">
      <br>
      <div class="show-grade-head">
        提交成功!
      </div>
      <div class="return-field">
        <div class="card return-home">
          <div @click="update_submitSheet()" class="card-body">
            返回主页
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import StudentHead from '../components/StudentComponents/StudentHead.vue';
import SubjectType from '../components/StudentComponents/StudentBody/SubjectType.vue';
import QuestionType from '../components/StudentComponents/StudentBody/QuestionType.vue';
import FinishDegree from '../components/StudentComponents/StudentBody/FinishDegree.vue';
import BaseL from '../components/BaseL.vue';
import SurplusTime from '../components/StudentComponents/StudentBody/SurplusTime.vue';
import AnswerSheet from '../components/StudentComponents/StudentBody/AnswerSheet.vue';
import { useStore } from 'vuex';
export default{
    name:"StudentView",
    components:{
        StudentHead,SubjectType,QuestionType,FinishDegree,BaseL,SurplusTime,AnswerSheet
    },
    setup(){
      const store=useStore();
      const update_submitSheet=()=>{
        store.commit("update_submitSheet");
      }

      return{
        update_submitSheet
      }
    }
    
}
</script>

<style scoped>
.return-field{
  display: flex;
  justify-content: center;
}
 .all-field-body{
  width: 100%;
  display: flex;
  flex-direction: row;
}

.return-home{
  cursor: pointer;
  width: 100px;
}
.return-home:hover{
  transform: scale(1.1);
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