<template>
    <div class="allfield-body-right-headfield">
        <div class="allfield-body-right-leftfield">
            <input type="text">
            <div class="allfield-body-right-button allfield-body-right-leftfield-searchbutton">搜索</div>
        </div>
        <div class="allfield-body-right-button allfield-body-right-rightfield">
            添加
        </div>
    </div>   
    <div class="card allfield-body-right-bodyfield">
        <div class="card-body scroll-container">

            <div v-for="student in $store.state.AdminStudentList" :key="student.id" class="student">
                <div class="student-info">
                    姓名:{{ student.name }} &nbsp;&nbsp;&nbsp;学号:"{{ student.number }}" &nbsp;&nbsp;&nbsp;课程:chinese
                </div>
                <div class="student-detail student-modify">
                    修改
                </div>
                <div class="student-detail student-delete">
                    删除
                </div>
            </div>
           
        </div>
    </div>


</template>

<script>
import $ from 'jquery';
import { useStore } from 'vuex';
export default{
    name:'StudentManage',
    components:{
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
