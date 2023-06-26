<template>

    <div class="modal-father modal fade" id="AdminAddStudent" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">添加学生</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="body-field-single">
                        <div class="single-detail detail-font">学生姓名</div>
                        <input v-model="studentName" class="border-base" type="text">
                    </div>
                    <div class="body-field-single">
                        <div class="single-detail detail-font">学生性别</div>
                        <input v-model="studentSex" class="border-base" type="text">
                    </div>
                    <div class="body-field-single">
                        <div class="single-detail detail-font">学生学号</div>
                        <input v-model="studentNumber" class="border-base" type="text">
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                    <button @click="add_student()" type="button" class="btn btn-primary" data-bs-dismiss="modal">提交</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {useStore} from 'vuex';
import {ref} from 'vue';
import $ from 'jquery';
export default{
    name:"AdminAddStudent",
    setup(){
        const store=useStore();

        const studentName=ref('');
        const studentSex=ref('');
        const studentNumber=ref('');

        const add_student=()=>{
            store.commit("add_AdminStudentList",{
                studentName:studentName.value,
                studentSex:studentSex.value,
                studentNumber:studentNumber.value,
            });

            $.ajax({
                url:store.state.backendIp+'/user/add',
                type:'post',
                data:{
                    name:studentName.value,
                    number:studentNumber.value,
                    sex:studentSex.value
                },
                success(){
                    console.log("添加学生成功");
                },
                error(){
                    console.log("添加学生失败");
                }
            });
        }

        return{
            studentName,studentNumber,studentSex,add_student,
        }
    }
   
}
</script>

<style scoped>
img{
    border: 1.5px solid black;
    border-radius: 50%;
    width: 25%;
    height: 25%;
}

.body-field{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.body-field-single{
    margin:10px 10px 10px 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.single-detail{
    margin: 10px;
}

.modify-photo{
    margin-top: 10px;
}

.detail-font{
    width: 70px;
}

.border-base{
    margin:5px 6px 5px 6px;
    border: 1.5px solid black;
    padding: 5px 5px 5px 5px;
    border-radius: 12px;
    width: 200px;
}

.modify{
    cursor: pointer;
}

.modal-father{
    text-align:center;
}

.score-field{
    height: 150px;
    overflow-y: auto; 
}
</style>