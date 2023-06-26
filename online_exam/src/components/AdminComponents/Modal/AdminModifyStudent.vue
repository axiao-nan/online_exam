<template>
    

    <div v-for="student in $store.state.AdminStudentList" :key="student.id" class="student">
        <div class="student-info">
            姓名:{{ student.name }} &nbsp;&nbsp;&nbsp;学号:"{{ student.number }}" &nbsp;&nbsp;&nbsp;
            性别:{{ student.sex }}
        </div>
        <div class="student-detail student-modify" 
        data-bs-toggle="modal" data-bs-target="#AdminModifyStudent"
        @click="returnShow(student.id)">
            修改
        </div>
        <div @click="delete_student(student.name,student.id)" class="student-detail student-delete"
         >
            删除
        </div>
    </div>
            


    <div class="modal-father modal fade" id="AdminModifyStudent" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">修改学生信息</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="allfield-body-right-bodyfield">
                        <div class="content">
                            <div class="content-field">
                                学生姓名:<br><input v-model="studentName" type="text">
                            </div>
                            <div class="content-field">
                                学号:<br><input v-model="studentNumber" type="text">
                            </div>
                        </div>
                        
                        <div class="content">
                            <div class="content-field">
                                性别:<br><input v-model="studentSex" type="text">
                            </div>
                        </div>
                       
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                    <button @click="modify_student()" type="button" class="btn btn-primary" data-bs-dismiss="modal">提交</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
// import { watch } from 'vue';
import { useStore } from 'vuex';
import $ from 'jquery';
export default{
    name:"AdminModifyStudent",
    setup() {
    const store=useStore();
    const studentName=ref('');
    const studentNumber=ref('');
    const studentSex=ref('');

    let nowId=0;

    const returnShow = id =>{
        nowId=id;
        $.ajax({
            url:store.state.backendIp+'/user/getById/'+id,
            type:'get',
            success(resp){
                console.log(resp);
                studentName.value=resp.data.name;
                studentNumber.value=resp.data.number;
                studentSex.value=resp.data.sex;
            },
            error(){
                console.log("回显失败");
            }
        });
    }


    const delete_student= (studentName,id) =>{
        store.commit("delete_AdminStudentList",studentName);
        $.ajax({
            url:store.state.backendIp+'/user/delete',
            type:"post",
            data:{
                id
            },
            success(){
                console.log("删除成功!");
            },
            error(){
                console.log("删除失败");
            }
        });
    }

    const modify_student = () =>{
        $.ajax({
            url:store.state.backendIp+'/user/update',
            type:'post',
            data:{
                id:nowId,
                name:studentName.value,
                number:studentNumber.value,
                sex:studentSex.value
            },
            success(){
                console.log("修改学生信息成功");
            }
        });
        
    }

    return {
      modify_student,returnShow,
      delete_student,
      studentName,studentNumber,studentSex
    };
  },
};
   
</script>

<style scoped>
img{
    border: 1.5px solid black;
    border-radius: 50%;
    width: 25%;
    height: 25%;
}

.sheet-detail{
    margin:10px 12px 10px 12px;
    border: 1.5px solid black;
    padding: 5px 5px 5px 5px;
    text-align: center;
    border-radius: 7px;
    cursor: pointer;
}

.modal-father{
    text-align:center;
}

.allfield-body-right-bodyfield{
    height: 100%;
}
.content{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.content-field{
    margin: 15px 10px 15px 10px;
}

.sheet{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.sheet-detail{
    margin:10px 12px 10px 12px;
    border: 1.5px solid black;
    padding: 5px 5px 5px 5px;
    text-align: center;
    border-radius: 7px;
    cursor: pointer;
}

.sheet-info{
    margin:10px 12px 10px 12px;
    border: 1.5px solid black;
    padding: 5px 5px 5px 5px;
    text-align: center;
    border-radius: 7px;
}

.sheet-detail:hover{
    transform: scale(1.1);
}

.sheet-info{
    width: 500px;
}

.button-field{
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.show-border{
    width:184px;
    height: 30px;
    border: 1.5px solid black;
    text-align: center;
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

</style>