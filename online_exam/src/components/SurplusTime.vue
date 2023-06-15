<template>
    <BaseL>
        <div class="card surplus-time">
        <div class="card-body">
            剩余时间:{{ surplusTime}}
        </div>
        </div>
        <div v-if="test_status==='1'" @click="submit_ans" class="card finish-exam">
            <div class="card-body">
                交卷
            </div>
        </div>
        <div v-if="test_status==='2'" @click="start_test" class="card finish-exam">
            <div class="card-body">
                开始考试
            </div>
        </div>
    </BaseL>
</template>

<script>
import BaseL from './BaseL.vue';
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
                    console.log("您的分数是:");
                    console.log(resp.data);
                    store.commit("update_grade",resp.data);
                    store.commit("update_submitSheet");
                    console.log(store.state.isSubmitSheet);
                    
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

        const start_test=()=>{
            $.ajax({
             url:store.state.backendIp+"/question/getByCourseIdAndType",
             type:"get",
             data:{
                courseId:1,
                type:1
             },
             success(resp){
                 console.log(resp);
                 store.commit("update_questionList",resp.data);
                 store.commit("init_degreeBox")
             },
             error(){
                 console.log("失败了");
             }

             
         });
         test_status.value='1';
         countdown();
        }
        const test_status=ref('');
        test_status.value='2';
        return{
            submit_ans,start_test,test_status,surplusTime
        }
    }
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
</style>