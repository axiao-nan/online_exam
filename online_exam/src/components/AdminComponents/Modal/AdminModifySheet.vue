<template>
    

    <div v-for="sheet in $store.state.AdminSheetList" :key="sheet.id" class="sheet">
        <div class="sheet-info">
            试卷名称:{{ sheet.name }} &nbsp; 命题人:{{ sheet.createUser }}&nbsp;
            科目:{{ sheet.courseName }}&nbsp;
            考试时长:{{ sheet.paperTime }}
        </div>
        <div @click="returnShow(sheet.id)" data-bs-toggle="modal" data-bs-target="#AdminModifySheet" 
            class="sheet-detail sheet-modify">
                修改
        </div>
        <div @click="delete_sheet(sheet.id)" class="sheet-detail sheet-delete">
            删除
        </div>
    </div>
            


    <div class="modal-father modal fade" id="AdminModifySheet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">修改试卷</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="allfield-body-right-bodyfield">
                        <div class="content">
                            <div class="content-field">
                                试卷名称:<br><input v-model="sheetName" type="text">
                            </div>
                            <div class="content-field">
                                命题人:<br><input v-model="createUser" type="text">
                            </div>
                        </div>
                        
                        <div class="content">
                            <div class="content-field">
                                考试时长:<br><input v-model="paperTime" type="text">
                            </div>
                            <div class="content-field">
                                考试科目:<br><input v-model="courseName" type="text">
                            </div>
                        </div>
                       
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                    <button @click="modify_sheet()" type="button" class="btn btn-primary" data-bs-dismiss="modal">提交</button>
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
    name:"AdminModifySheet",
    setup() {
    const store=useStore();
    const sheetName=ref('');
    const createUser=ref('');
    const paperTime=ref('');
    const courseName=ref('');

    let nowId=0;


    const returnShow = id =>{
        nowId=id;
        $.ajax({
            url:store.state.backendIp+'/paper/getById/'+id,
            type:'get',
            success(resp){
                console.log(resp);
                sheetName.value=resp.data.name;
                createUser.value=resp.data.createUser;
                paperTime.value=resp.data.paperTime;
                courseName.value=resp.data.courseName;
            },
            error(){
                console.log("回显失败");
            }
        });
    }


    const getCourseId = Name =>{
        for(let i in store.state.AdminSubjectList){
            if(store.state.AdminSubjectList[i].name === Name){
                return i;
            }
        }
        return -1;
    }

    const modify_sheet = () =>{
        let courseId=getCourseId(courseName.value);
        courseId++;
        //console.log(courseId);
        if(courseId === -1){
            console.log("科目不存在");
            return;
        }

        $.ajax({
            url:store.state.backendIp+'/paper/update',
            type:'post',
            data:{
                name:sheetName.value,
                createUser:createUser.value,
                paperTime:paperTime.value,
                courseId,
                id:nowId,
            }
        });
    }

    const delete_sheet = id =>{
        $.ajax({
            url:store.state.backendIp+'/paper/delete',
            type:'post',
            data:{
                id
            },
            success(){
                console.log("删除成功");
            },
            error(){
                console.log("删除失败");
            }
        });
    }

    return {
      sheetName,createUser,paperTime,
      courseName,modify_sheet,returnShow,
      delete_sheet
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

</style>