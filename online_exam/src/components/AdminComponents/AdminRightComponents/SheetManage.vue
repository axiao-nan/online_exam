<template>
    
    <div class="allfield-body-right-headfield">
        <div data-bs-toggle="modal" data-bs-target="#AdminAddSheet"
         class="allfield-body-right-button allfield-body-right-rightfield">
            添加试卷
        </div>
        <AdminAddSheet />
    </div> 
    <div class="card allfield-body-right-bodyfield">
        <div class="card-body scroll-container">

            <AdminModifySheet />
        </div>
    </div>

</template>

<script>
import AdminAddSheet from '@/components/AdminComponents/Modal/AdminAddSheet.vue';
import AdminModifySheet from '@/components/AdminComponents/Modal/AdminModifySheet.vue'
import { useStore } from 'vuex';
import $ from 'jquery';

export default {
  name: 'SheetManage',
  components: {
    AdminAddSheet,AdminModifySheet
  },
  setup(){
    const store=useStore();
    $.ajax({
        url:store.state.backendIp+'/paper/list',
        type:'get',
        success(resp){
            store.commit("get_AdminSheetList",resp.data);
            console.log(store.state.AdminSheetList);
        },
        error(){
            console.log("接收失败！");
        }
    });

    const delete_sheet = id =>{
        $.ajax({
            url:store.state.backendIp+'/paper/delete',
            type:'post',
            data:{
                id
            },
            success(){
                console.log("删除试卷成功!");
            },
            error(){
                console.log("删除试卷失败");
            }
        });
    }

    return {
        delete_sheet
    }
  }
}
</script>

<style scoped>
.allfield-body-right-headfield{
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin-bottom: 10px;
}

.allfield-body-right-leftfield{
    display: flex;
    flex-direction: row;
}
.scroll-container {
  height: 300px;
  overflow-y: auto; 
}
.allfield-body-right-rightfield{
    margin-right: 20px;
}

.allfield-body-right-button{
    width: 100px;
    border: 1.5px solid black;
    padding: 5px 5px 5px 5px;
    text-align: center;
    border-radius: 7px;
    cursor: pointer;
}
.allfield-body-right-button:hover{
    transform: scale(1.1);
}

.allfield-body-right-bodyfield{
    height: 360px;
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

.content{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.content-field{
    margin: 15px 10px 15px 10px;
}

.button-field{
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
