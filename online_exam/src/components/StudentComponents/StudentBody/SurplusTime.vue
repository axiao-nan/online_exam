<template>
    <BaseL>
        <div class="card surplus-time">
        <div class="card-body">
            剩余时间:{{ surplusTime}}
        </div>
        </div>
        <div class="error_message">{{ error_message }}</div>
        <div v-if="$store.state.isExamBegin" @click="submit_ans" class="card finish-exam">
            <div class="card-body">
                交卷
            </div>
        </div>
        <div v-if="!$store.state.isExamBegin" @click="start_test" class="card finish-exam">
            <div class="card-body">
                开始考试
            </div>
        </div>
    </BaseL>
</template>

<script>
import BaseL from '@/components/BaseL.vue';
import { useStore } from 'vuex';
import { ref } from 'vue';
import $ from 'jquery';
export default{
    name:"SurplusTime",
    components:{
        BaseL
    },
    setup(){
        const store=useStore();
        const submit_ans=()=>{
            const questionAnsJSON = JSON.stringify(store.state.questionAns);
            console.log(questionAnsJSON);
            $.ajax({
                url:store.state.backendIp+'/question/getScore',
                type:"post",
                headers: {
                    'Content-Type': 'application/json'
                },
                data:questionAnsJSON,

                success(resp){
                    //console.log("您的分数是:");
                    //console.log(resp.data);
                    store.commit("update_grade",resp.data);
                    store.commit("update_submitSheet");
                    store.commit("update_isExamBegin");
                    store.commit("init_questionList");
                    store.commit("init_questionAns");
                    //console.log(store.state.questionAns);
                    ///init_degreeBox
                    //console.log(store.state.isSubmitSheet);
                },
                error(){
                    console.log("失败了");
                }
            });
        }

        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds));
        }

        const surplusTime=ref(0);
        surplusTime.value=800;//在此修改考试时间
        const countdown=async ()=>{
            for(;surplusTime.value;){
                await sleep(1000);
                surplusTime.value--;
            }
            submit_ans();
        }

        const error_message=ref('');

        const start_test=()=>{
            $.ajax({
             url:store.state.backendIp+"/paper/getPaperQuestionByType",
             type:"get",
             data:{
                paperId:store.state.paperId,
                type:store.state.questionType,
                studentId:store.state.userInfo.id
             },
             success(resp){
                 console.log(resp);
                 if(resp.msg === "你已考过该类型的试卷了"){
                    error_message.value = resp.msg;
                 }
                 else{
                    store.commit("update_questionList",resp.data);
                    store.commit("init_degreeBox");
                    store.commit("update_isExamBegin");
                    //props.onCallInitCc && props.onCallInitCc();
                    console.log(store.state.questionList);
                    surplusTime.value=resp.data[0].paperTime;
                 }
                 
             },
             error(){
                 //console.log("失败了");
             }

             
         });
         
         countdown();
        }
        return{
            submit_ans,start_test,surplusTime,error_message
        }
    },
}
</script>

<style scoped>
.surplus-time{
    margin-bottom: 7px;
}
.finish-exam{
    width: 60%;
    text-align: center;
    cursor: pointer;
    transition: transform 0.1s ease;

}
.finish-exam:hover {
  transform: scale(1.1);
}

.error_message{
    color: red;
    font-size: 10px;
}
</style>