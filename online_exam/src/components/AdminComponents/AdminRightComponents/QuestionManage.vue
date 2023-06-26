<template>
    <div class="allfield-body-right-headfield">
        
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="selectedSubjectId">

            <option v-for="subject in $store.state.AdminSubjectList" :key="subject.id" :value=subject.id>{{ subject.name }}</option>
            
        </select>
        
    </div>   
    <div class="card allfield-body-right-bodyfield">
        <div class="card-body scroll-container">

            <div v-for="question in $store.state.AdminQuestionList" :key="question.id" class="question">
                <div class="question-info">
                   <div class="question-info-field">{{ question.content }}</div>
                   <br>
                   <div class="question-info-field">A、{{ question.answerA }}</div>
                   <div class="question-info-field">B、{{ question.answerB }}</div>
                   <div class="question-info-field">C、{{ question.answerC }}</div>
                   <div class="question-info-field">D、{{ question.answerD }}</div>
                   <br>
                   <div class="question-info-field">标准答案：{{question.answerKey}}</div>
                </div>
                <div @click="delete_question(question.id)" class="question-detail question-delete">
                    删除
                </div>
            </div>


        </div>
    </div>


</template>

<script>
import $ from 'jquery';
import { useStore } from 'vuex';
import { ref , watch } from 'vue';
export default{
    name:'QuestionManage',
    components:{
    },
    setup(){
        const store=useStore();
        // $.ajax({
        //     url:store.state.backendIp+'/question/getAll',
        //     type:'get',
        //     success(resp){
        //         //console.log(resp);
        //         store.commit("update_AdminQuestionList",resp.data);
        //     }
        // });
        

        const delete_question= id =>{
            store.commit("delete_question",id);
            $.ajax({
                url:store.state.backendIp+'/question',
                type:'post',
                data:{
                    id
                }
            });
        }

        const selectedSubjectId = ref('');

        watch(selectedSubjectId, (newVal) => {
        query(newVal);
        });

        const query = (courseId) => {
        console.log("执行到此！");
        $.ajax({
            url: store.state.backendIp + '/question/getByCourseId/',
            type: 'get',
            data: {
            courseId
            },
            success(resp) {
                console.log(resp);
                store.commit("update_AdminQuestionList",resp.data);
            },
            error() {
                console.log("获取失败");
            }
        });
        }
        
        return{
            delete_question,selectedSubjectId
        }
    }
}
</script>

<style scoped>
.scroll-container {
  height: 300px;
  overflow-y: auto; 
}
.question-info-field{
    font-size: 15px;
    text-align:left;
}
.allfield-body-right-headfield{
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
}

.allfield-body-right-headfield-box{
    margin:5px 6px 5px 6px;
    border: 1.5px solid black;
    padding: 5px 5px 5px 5px;
    text-align: center;
    border-radius: 7px;
    cursor: pointer;
}

.allfield-body-right-headfield-box:hover{
    transform: scale(1.1);
}


.allfield-body-right-bodyfield{
    height: 355px;
}

.question{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.question-detail{
    margin:10px 12px 10px 12px;
    border: 1.5px solid black;
    padding: 5px 5px 5px 5px;
    text-align: center;
    border-radius: 7px;
    cursor: pointer;
}

.question-info{
    margin:10px 12px 10px 12px;
    border: 1.5px solid black;
    padding: 5px 5px 5px 5px;
    text-align: center;
    border-radius: 7px;
    width: 90%;
}

.question-detail:hover{
    transform: scale(1.1);
}

.question-delete{
    height: 38px;
    width: 50px;
    text-align: center;
}

</style>
