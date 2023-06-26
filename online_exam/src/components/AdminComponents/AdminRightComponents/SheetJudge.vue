<template>
    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="selectedSubjectId">
        <option v-for="sheet in $store.state.AdminSheetList" :key="sheet.id" :value=sheet.id>{{ sheet.name }}</option>
    </select>
    <div class="all-field">
        <div class="all-field-left border-base">
            <div class="all-field-left-up">{{ show_answer }}</div>
            <div class="all-field-left-down">
                <div @click="change_idx(-1)" class="all-field-left-down-detail">上一题</div>
                <div @click="change_idx(1)" class="all-field-left-down-detail">下一题</div>
            </div>
        </div>
        <div class="all-field-right">
            <div class="question-field border-base">
                {{ show_content }}
            </div>
            <input v-model="now_score" class="border-base" type="text">
            <div class="now-score border-base">
                <div>完成情况:{{ finish_degree }}/{{ allQuestion }}</div>
                <div class="button-field">
                    <button v-if="!is_finishJduge" @click="submit_singleScore()" type="button" class="btn btn-primary">提交</button>
                    <div v-if="is_finishJduge" class="is-finish">已判完所有简答题!</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';
import { useStore } from 'vuex';
import $ from 'jquery';
import {watch} from 'vue'
export default{
    name:'SheetJudge',
    setup(){
        const show_content=ref('');
        const show_answer=ref('');
        const idx=ref(0);
        const store=useStore();
        let len=0;
        const allQuestion=ref(0);
        const is_finishJduge=ref(false);

        const __init = () =>{
            idx.value=0;
            show_content.value=store.state.AdminShortQusetionList[idx.value].content;
            show_answer.value=store.state.AdminShortQusetionList[idx.value].answer;
            len=store.state.AdminShortQusetionList.length;
            allQuestion.value=len;
        }

        const change_idx = t => {

            if(len===0)
            {
                is_finishJduge.value=true;
                return;
            }

            if(idx.value+t<=0) idx.value=0;
            else if(idx.value+t>=len) idx.value=len-1;
            else
            idx.value+=t;

            

            //console.log(idx.value+' '+len)
            show_content.value=store.state.AdminShortQusetionList[idx.value].content;
            show_answer.value=store.state.AdminShortQusetionList[idx.value].answer;
        }

        const selectedSubjectId = ref('');

        watch(selectedSubjectId, (newVal) => {
            query(newVal);
        });

        let Paperid='';
        const query = paperId => {
            Paperid=paperId
            console.log("执行到此！");
            $.ajax({
                url: store.state.backendIp + '/paper/getAnswer',
                type: 'get',
                data: {
                paperId
                },
                success(resp) {
                console.log(resp);
                store.commit("update_AdminShortQusetionList",resp.data);
                __init();
                },
                error() {
                console.log("获取失败");
                }
            });
        }

        const now_score=ref('');
        const finish_degree=ref(0);
        const submit_singleScore=()=>{
            $.ajax({
                url:store.state.backendIp + '/grade/addQuestionGrade',
                type:'post',
                data:{
                    paperId:Paperid,
                    studentId:store.state.AdminShortQusetionList[idx.value].studentId,
                    questionId:store.state.AdminShortQusetionList[idx.value].id,
                    score:now_score.value,
                },
                success(){
                    console.log("添加单个题分数成功");
                    finish_degree.value++;
                    store.commit("delete_AdminShortQusetionList_question",store.state.AdminShortQusetionList[idx.value].id);
                    len--;
                    change_idx(-1);
                },
                error(){
                    console.log("添加单个题分数失败");
                }
            });
        };

        return{
            show_content,change_idx,selectedSubjectId,
            show_answer,now_score,submit_singleScore,
            finish_degree,allQuestion,is_finishJduge
        }
    }
}
</script>

<style scoped>
.all-field{
    display: flex;
    flex-direction: row;
}

.border-base{
    margin:5px 6px 5px 6px;
    border: 1.5px solid black;
    padding: 5px 5px 5px 5px;
    border-radius: 12px;
}

input{
    width: 100%;
}

.is-finish{
    font-size: 16px;
    color: red;
}

.all-field-left{
    width: 70%;
    height: 340px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.question-field{
    height: 200px;
    width: 100%;
}

.all-field-left-up{
    padding: 5px;
}

.all-field-right{
    width: 30%;
}

.all-field-left-down{
    display: flex;
    flex-direction: row;
    justify-content: end;
}

.all-field-left-down-detail{
    margin-right: 15px;
    margin-bottom: 5px;
    cursor: pointer;
}

.now-score{
    width: 100%;
    height: 83px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.button-field{
    display: flex;
    justify-content: center;
}
</style>