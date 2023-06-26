<template>
    <div class="content-field">
      <div v-if="$store.state.isExamBegin && $store.state.questionType === 1" class="card">
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

      <div v-if="$store.state.isExamBegin && ($store.state.questionType === 2 || $store.state.questionType === 3) && $store.state.userNote" class="card">
        <div class="card-body">
          <div class="card question">
            <div class="card-body">
              <div class="question-content">{{ idx+1 }}.{{ show_content }}</div>
                <div class="ans-field">

                  <div class="ans-field-left">
                    <div>您的答案:</div>
                    <textarea v-model="fill_ans"></textarea>
                  </div>
                  <div class="ans-field-right">
                    <div class="ans-field-right-button">
                      <div @click="change_idx(-1)"
                       style="cursor: pointer;">上一题</div>
                    </div>
                    <div class="ans-field-right-button">
                      <div @click="change_idx(1)"
                       style="cursor: pointer;">下一题</div>
                    </div>
                  </div>

                </div>
              
            </div>
          </div>
        </div>
      </div>

      <div v-if="$store.state.isExamBegin && ($store.state.questionType === 2||$store.state.questionType === 3) && !$store.state.userNote" class="card">
        <div class="card-body text-field">
          <div style="text-align: center;">考试须知</div>
          <span>1. 确认技术要求：在参加考试前，请确保你的计算机和网络连接符合考试要求。检查你的操作系统、浏览器版本和其他必要的软件。</span>
          <br><br>
          <span>2. 测试设备和网络连接：确保你的电脑或移动设备在考试期间能够保持良好的运行状态。连接到一个稳定的高速互联网网络，避免在考试期间发生网络断线或其他技术问题。</span>
          <br><br>
          <span>3. 遵守考试规则：仔细阅读并理解考试规则和要求，包括考试时间限制、允许使用的辅助工具或资源，以及禁止的行为。确保你清楚地了解哪些行为被视为作弊或违反考试规定。</span>
          <br><br>
          <span>4. 考试环境：选择一个安静、整洁的考试环境，减少干扰和噪音。关闭与考试无关的应用程序和通知，以避免干扰你的注意力和专注力。</span>
          <br><br>
          <span>5. 遇到问题：如果你在考试期间遇到任何技术问题或其他困扰，不要慌张。尝试重新启动设备或重新连接网络。如果问题无法解决，立即与考试管理员或技术支持团队联系，寻求帮助和指导。</span>
          <br><br>
          <div style="display: flex;flex-direction: row;justify-content: center;">
            <div @click="userKnow()" class="border-base" 
            style="width: 20%;cursor: pointer;text-align: center;">我已知晓</div>
          </div>
        </div>
      </div>


      <div v-if="!$store.state.isExamBegin" class="card">
        <div class="card-body sheet-field">

          <div class="sheet-detail border-base" 
          v-for="sheet in $store.state.SubjectSheetList" :key="sheet.id"
          @click="update_paperId(sheet.id)" :class="{ 'selected-option1': isSelected1(sheet.id) }" 
          >
            <div class="sheet-detail-info">试卷名:{{ sheet.name }}</div>
            <div class="sheet-detail-info">命题人:{{ sheet.createUser }}</div>
            <div class="sheet-detail-info">考试时间:{{ sheet.paperTime }}</div>
          </div>
          

        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  import $ from 'jquery';
  import { ref } from 'vue';

  
  export default {
    name: "AnswerSheet",
    setup() {
      const store = useStore();

      const selectedSubjectId1 = ref(null);
  
      const isSelected1 = (subjectId) => {
        return subjectId === selectedSubjectId1.value;
      };
  
      const get_ans = (questionId, give_ans, numId) => {
        store.commit("updateAns", { questionId, give_ans });
        store.commit("update_degreeBox", numId);
      };
  
      const isSelected = (questionId, option) => {
        const questionAns = store.state.questionAns.find((ans) => ans.id === questionId);
        return questionAns && questionAns.answerKey === option;
      };

      $.ajax({
        url:store.state.backendIp+'/paper/list',
        type:'get',
        success(resp){
            store.commit("get_AdminSheetList",resp.data);
        },
        error(){
            console.log("接收失败！");
        }
     });

     const update_paperId = id =>{
      selectedSubjectId1.value = id;
      store.commit("update_paperId",id);
      //console.log(store.state.paperId);
     }

      const fill_ans=ref('');//答题区域

      //填空题做题逻辑
      const get_fill_ans=()=>{
        const give_ans=fill_ans.value;
        const questionId=cheatId.value;
        //console.log(give_ans+' '+questionId);
        store.commit("updateAns", { questionId, give_ans });
        store.commit("update_degreeBox", idx.value+1);

      }


     //显示当前题目内容（填空和简答）
    const show_content=ref('');
    const idx=ref(0);
    let len=0;//可能报错

    //填空和简答的伪全局id
    const cheatId=ref('');

    //初始化第一题的题面和伪id
    const init_cc=()=>{
      show_content.value=store.state.questionList[idx.value].content;
      cheatId.value=store.state.questionList[idx.value].id;
    }

    const userKnow=()=>{
      store.commit("update_userNote");
      init_cc();
      len=store.state.questionList.length;
    }

    let maxr=0;
    const change_idx = t =>{

        
        get_fill_ans();
        if(idx.value === len-1) maxr=len;
        
        console.log(idx.value+' '+maxr+' '+t+" "+len);
//console.log(store.state.questionAns[idx.value]);
        if(idx.value+t<=0) idx.value=0;
        else if(idx.value+t>=len) idx.value=len-1;
        else
        idx.value+=t;

        maxr=Math.max(maxr,idx.value);
        //if(maxr === len-1) maxr=len;

console.log(idx.value+' '+maxr+' '+fill_ans.value);
        //题面刷新
        show_content.value=store.state.questionList[idx.value].content;

        //伪id更新
        cheatId.value=store.state.questionList[idx.value].id;

        //复盘已作答内容
        
        
        if(idx.value < maxr) fill_ans.value=store.state.questionAns[idx.value].answerKey;
        else
        fill_ans.value='';


    }
   // console.log(show_content.value);

      return {
        get_ans,
        isSelected,
        update_paperId,
        change_idx,
        idx,
        show_content,
        fill_ans,
        userKnow,
        isSelected1
      };
    },
  };
  </script>
  
  <style scoped>
  .selected-option1 {
    transform: scale(1.1);
  }

  .sheet-detail{
    cursor: pointer;
  }
  .sheet-detail-info{
    white-space: nowrap;
  }

  .text-field{
    font-size: 18px;
  }

  textarea{
    width: 300px;
    height: 200px;
    border-radius: 10px;
    resize: none; /* 禁止用户调整文本框大小 */
    overflow-y: auto; /* 添加垂直滚动条，以防止内容溢出 */
    white-space: pre-wrap; /* 保留换行符和空格 */
    word-wrap: break-word; /* 在单词内部换行 */
  }

  .border-base{
    margin:5px 6px 5px 6px;
    border: 1.5px solid black;
    padding: 7px 7px 7px 7px;
    border-radius: 12px;
  }
  .content-field {
    flex: 4;
    margin-left: 10px;
    width: 100%;
  }
  
  .ans-field{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .ans-field-left{
    display: flex;
    flex-direction: column;
  }

  .ans-field-right{
    display: flex;
    flex-direction: row;
  }

  .ans-field-right-button{
    margin: 0px 10px 0px 10px;
    display: flex;
    flex-direction: column;
    justify-content: end;
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

  .sheet-field{
    display: flex;
    flex-direction: row;
    justify-content: left;
    overflow-x: scroll;
    width: 526px;
  }
  </style>
  