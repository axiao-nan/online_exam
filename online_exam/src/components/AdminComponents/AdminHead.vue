<template>
    <div class="allfield-head">
        <div class="allfield-head-left">
            <div class="card">
                <div class="card-body allfield-head-left-title">
                    在线考试系统
                </div>
            </div>
            <div class="allfield-head-left-welcome">
                欢迎,XX管理员
            </div>
        </div>
        <div class="allfield-head-right">
            <div class="allfield-head-right-button allfield-head-right-userinfo">
                <AdminModal />
            </div>
            <div class="allfield-head-right-button allfield-head-right-userinfo">
                <ModifyPassword />
            </div>
            
            <div @click="adminExit()" class="allfield-head-right-button allfield-head-right-exit">
                退出
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import $ from 'jquery';
import AdminModal from './AdminModal.vue';
import ModifyPassword from '@/components/ModifyPassword.vue'
export default {
  name: 'AdminHead',
  components: {
    AdminModal,ModifyPassword
  },
  setup(){
    const router=useRouter();
    const store=useStore();
    const adminExit=()=>{
        store.commit('logout');
        $.ajax({
            url:store.state.backendIp+'/user/logout',
            type:'post',
            success(resp){
                if(resp.code===1){
                    console.log("exit success!");
                    router.push('/register');
                }
            }
        });
    };


    return {
        adminExit
    }
  }
};
</script>

<style scoped>
.allfield-head-left{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0px 0px 10px 15px;
}
.allfield-head-left-title{
    font-size: 20px;
    font-weight: bold;
}
.allfield-head-left-welcome{
    margin-top: 35px;
    margin-left: 30px;
}
.allfield-head-right{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items:center;
    margin-top: 30px;
}
.allfield-head-right-button{
    text-align: center;
    margin: 0px 20px 0px 20px;
}

.allfield-head {
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  height: 80px;
}

.allfield-head-right-exit{
    cursor: pointer;
}

</style>