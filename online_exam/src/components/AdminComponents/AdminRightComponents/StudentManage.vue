<template>
    <div class="allfield-body-right-headfield">
        <div class="allfield-body-right-leftfield">
            <input v-model="name" type="text">
            <div class="allfield-body-right-button allfield-body-right-leftfield-searchbutton" 
                @click="search_student()">搜索</div>
        </div>
        <div data-bs-toggle="modal" data-bs-target="#AdminAddStudent"
         class="allfield-body-right-button allfield-body-right-rightfield">
            添加
        </div>
        <AdminAddStudent />
    </div>   
    <div class="card allfield-body-right-bodyfield">
        <div class="card-body scroll-container">

            <div v-if="!flag">
                
                <AdminModifyStudent />

            </div>
            
           
            <div v-if="flag" class="student">
                <div class="student-info">
                    姓名:{{ studentName }} &nbsp;&nbsp;&nbsp;学号:"{{ studentNumber }}" &nbsp;&nbsp;&nbsp;
                    性别:{{ studentSex }}
                </div>
            </div>

        </div>
    </div>


</template>

<script>
import $ from 'jquery';
import { useStore } from 'vuex';
import {ref} from 'vue';
import AdminAddStudent from '@/components/AdminComponents/Modal/AdminAddStudent.vue';
import AdminModifyStudent from '@/components/AdminComponents/Modal/AdminModifyStudent.vue';
export default{
    name:'StudentManage',
    components:{
        AdminAddStudent,AdminModifyStudent
    },
    setup(){
        const store=useStore();

        $.ajax({
            url:store.state.backendIp+'/user/getAllStudent',
            type:'get',
            success(resp){
                store.commit("update_AdminStudentList",resp.data);
            }
        });

        

        const flag=ref(false);
        const studentName=ref('');
        const studentNumber=ref('');
        const studentSex=ref('');
        const name=ref('');

        const search_student = () =>{
            for(let i in store.state.AdminStudentList){
                if(store.state.AdminStudentList[i].name === name.value){
                    studentName.value=store.state.AdminStudentList[i].name;
                    studentNumber.value=store.state.AdminStudentList[i].number;
                    studentSex.value=store.state.AdminStudentList[i].sex;
                }  
            }
            flag.value=!flag.value;
            console.log("搜索完成");
        }

        return{
            studentName,studentNumber,
            studentSex,flag,search_student,name
        }
    }
}
</script>

<style scoped>

.scroll-container {
  height: 300px;
  overflow-y: auto; 
}

.allfield-body-right-leftfield{
    display: flex;
    flex-direction: row;
}
.allfield-body-right-rightfield{
    margin-right: 20px;
}
.allfield-body-right-headfield{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
}

.allfield-body-right-leftfield-searchbutton{
    margin-left: 20px;
}

.allfield-body-right-bodyfield{
    height: 360px;
}

.student{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.student-detail{
    margin:10px 12px 10px 12px;
    border: 1.5px solid black;
    padding: 5px 5px 5px 5px;
    text-align: center;
    border-radius: 7px;
    cursor: pointer;
}

.student-info{
    margin:10px 12px 10px 12px;
    border: 1.5px solid black;
    padding: 5px 5px 5px 5px;
    text-align: center;
    border-radius: 7px;
}

.student-detail:hover{
    transform: scale(1.1);
}

.student-info{
    width: 500px;
}

.allfield-body-right-button{
    border: 1.5px solid black;
    padding: 5px 5px 5px 5px;
    text-align: center;
    border-radius: 7px;
    cursor: pointer;
}
.allfield-body-right-button:hover{
    transform: scale(1.1);
}
</style>
