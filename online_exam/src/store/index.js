import { createStore } from 'vuex'
import $ from 'jquery';


export default createStore({
  state: {
    
    degreeBox:[],
    backendIp:'http://192.168.214.24:3000',//在此修改ip地址
    
    grade:0,
    isSubmitSheet:false,

    isExamBegin:false,
    
    
    //用户信息
    userInfo:{},
    isLogin:false,
    
    /*学生部分*/
    questionAns:[],
    questionList:[],
    subjectType:1,
    questionType:1,
    studentId:0,
    SubjectSheetList:[],
    userNote:false,

    /*管理员部分*/
      adminViewStatus:4,
      //试题管理
      AdminQuestionList:[],
      AdminSubjectList:[],

      //学生管理
      AdminStudentList:[],

      //试卷管理
      AdminSheetList:[],
      paperId:23423,

      //试卷评判
      AdminShortQusetionList:[],

      //成绩统计
      ScoreList:[],

    /* 排行榜部分 */
    rankSubjectLisk:[],
  },
  getters: {
    
  },
  mutations: {
    update_SubjectSheetList(state,subject){
      state.SubjectSheetList=[];
      for(let sheet of state.AdminSheetList){
        if(sheet.courseName === subject){
          state.SubjectSheetList.push(sheet);
        }
      }
    },
    update_isExamBegin(state){
      state.isExamBegin=!state.isExamBegin;
    },
    updateAns(state,{questionId,give_ans}){
      for(let i in state.questionAns){
        if(questionId === state.questionAns[i].id){
          state.questionAns[i].answerKey=give_ans;
          return;
        }
      }
      state.questionAns.push({
        id:questionId,
        answerKey:give_ans,
        studentId:this.state.studentId,
        paperId:state.paperId,
        type:state.questionType
      });
    },
    update_userNote(state){
      state.userNote=!state.userNote;
    },
    update_questionList(state,resp){
      state.questionList=resp;
      let t=0;
        for(let i in state.questionList){
          state.questionList[i]={...state.questionList[i],numId:++t};
        }
    },
    update_studentId(state,id){
      state.studentId=id;
      console.log(id);
    },
    init_degreeBox(state){
      let len=state.questionList.length;
      //console.log(len);
        for(let i=0;i<=len+1;i++){
            state.degreeBox.push('1');
        }
    },
    init_questionList(state){
      state.questionList=[];
    },
    init_questionAns(state){
      state.questionAns=[];
    },
    update_degreeBox(state,idx){
      state.degreeBox[idx]='2';
    },
    loginSuccess(state){
      state.isLogin=true;
    },
    logout(state){
      state.isLogin=false;
    },
    update_grade(state,grade){
      state.grade=grade;
    },
    update_submitSheet(state){
      state.isSubmitSheet=!state.isSubmitSheet;
    },
    changeAdminStatus(state,status){
      state.adminViewStatus=status;
    },

    update_AdminQuestionList(state,resp){
      state.AdminQuestionList=resp;
    },
    update_AdminSubjectList(state,resp){
      state.AdminSubjectList=resp;
    },
    update_userInfo(state,resp){
      state.userInfo=resp;
    },
    delete_question(state,id){
      for(let i in state.AdminQuestionList){
        if(state.AdminQuestionList[i].id===id){
          state.AdminQuestionList.splice(i,1);
          break;
        }
      }
    },
    delete_AdminShortQusetionList_question(state,id){
      for(let i in state.AdminShortQusetionList){
        if(state.AdminShortQusetionList[i].id===id){
          state.AdminShortQusetionList.splice(i,1);
          break;
        }
      }
    },
    update_AdminStudentList(state,resp){
      state.AdminStudentList=resp;
    },
    update_AdminShortQusetionList(state,resp){
      state.AdminShortQusetionList=resp;
    },
    add_AdminStudentList(state,{studentName,studentSex,studentNumber}){
      state.AdminStudentList.push({
        name:studentName,
        number:studentNumber,
        sex:studentSex
      });
    },
    delete_AdminStudentList(state,studentName){
      for(let i in state.AdminStudentList){
        if(state.AdminStudentList[i].name === studentName){
          state.AdminStudentList.splice(i,1);
          break;
        }
      }
    },
    update_subjectType(state,option){
      state.subjectType=option;
    },
    update_questionType(state,option){
      state.questionType=option;
    },
    get_AdminSheetList(state,resp){
      state.AdminSheetList=resp;
    },

    //添加试卷的两个ajax
    submit_AdminSheetList(state,{
      name,createUser,courseId,
      paperTime,allNum
    }){
      this.commit("submit_AdminSheetList_create",{
        name,createUser,courseId,
        paperTime
      });
      this.commit("submit_AdminSheetList_question",{
        courseId,allNum
      });
    },
    submit_AdminSheetList_create(state,{
      name,createUser,courseId,
      paperTime
    }){
      $.ajaxSetup({ async: false });
      let outer=this;
      $.ajax({
        url:state.backendIp+'/paper',
        type:'post',
        data:{
          name,
          createUser,
          courseId,
          paperTime,
        },
        success(resp){
          outer.commit("update_paperId",resp.data.id);
          state.AdminSheetList.push({name,createUser,courseId,paperTime});
          console.log("第一个成功");
        },
        error(){
          console.log("第一个失败");
        }
      });
    },
    submit_AdminSheetList_question(state,{allNum,courseId}){
      $.ajaxSetup({ async: false });
      console.log(state.paperId);
      $.ajax({
        url:state.backendIp+'/paper/addQuestion',
        type:'post',
        data:{
          paperId:state.paperId,
          allType:[1,2,3],
          allNum,
          courseId,
        },
        success(resp){
          console.log(resp);
          console.log("第二个成功");
        },
        error(){
          console.log("第二个失败");
        }
      });
    },
    update_paperId(state,id){
      state.paperId=id;
    },
    //
    update_ScoreList(state,resp){
      state.ScoreList=resp;
    },
    update_rankSubjectList(state,resp){
      state.rankSubjectList=resp;
    },
  },
  actions: {
  },
  modules: {
  }
})
