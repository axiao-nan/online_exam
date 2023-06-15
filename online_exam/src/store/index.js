import { createStore } from 'vuex'

export default createStore({
  state: {
    
    degreeBox:[],
    backendIp:'http://192.168.237.24:3000',//在此修改ip地址
    
    grade:0,
    isSubmitSheet:false,
    
    
    //用户信息
    userInfo:{},
    isLogin:false,
    
    /*学生部分*/
    questionAns:[],
    questionList:[],
    subjectType:1,
    questionType:1,

    /*管理员部分*/
      adminViewStatus:3,
      //试题管理
      AdminQuestionList:[],
      AdminSubjectList:[],

      //学生管理
      AdminStudentList:[],

    
  },
  getters: {
    
  },
  mutations: {
    updateAns(state,{questionId,give_ans}){
      for(let i in state.questionAns){
        if(questionId === state.questionAns[i].id){
          state.questionAns[i].answerKey=give_ans;
          return;
        }
      }
      state.questionAns.push({
        id:questionId,
        answerKey:give_ans
      });
    },
    update_questionList(state,resp){
      state.questionList=resp;
      let t=0;
        for(let i in state.questionList){
          state.questionList[i]={...state.questionList[i],numId:++t};
        }
    },
    init_degreeBox(state){
      let len=state.questionList.length;
      //console.log(len);
        for(let i=0;i<=len+1;i++){
            state.degreeBox.push('1');
        }
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
      state.isSubmitSheet=true;
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
    update_AdminStudentList(state,resp){
      state.AdminStudentList=resp;
    },
    update_subjectType(state,option){
      state.subjectType=option;
    },
    update_questionType(state,option){
      state.questionType=option;
    }

  },
  actions: {
  },
  modules: {
  }
})
