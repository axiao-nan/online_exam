<template>
   <div class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>

    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AdminModifyPassword">
        修改密码
    </button>

    <div class="modal fade" id="AdminModifyPassword" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">修改密码</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                    <div class="body-field">
                        <div class="body-field-single">
                            <div class="single-detail detail-font">旧密码</div>
                            <input class="border-base" v-model="oldPassword" type="text">
                        </div>
                        <div class="body-field-single">
                            <div class="single-detail detail-font">新密码</div>
                            <input class="border-base" v-model="newPassword" type="text">
                        </div>
                        <div class="body-field-single">
                            <div class="single-detail detail-font">确认密码</div>
                            <input class="border-base" v-model="confirmPassword" type="text">
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                    <button @click="submit_modifyPassword()" type="button" class="btn btn-primary"
                    data-bs-dismiss="modal">提交</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import {ref} from 'vue';
import { useStore } from 'vuex';
export default{
    name:'ModifyPassword',
    setup(){
        const store=useStore();
        const oldPassword=ref('');
        const newPassword=ref('');
        const confirmPassword=ref('');
        const error_message=ref('');

        const submit_modifyPassword=()=>{
            if(newPassword.value!==confirmPassword.value){
                error_message.value="两次密码不一致!";
                return;
            }

            $.ajax({
                url:store.state.backendIp+'/user/updatePassword',
                type:'post',
                data:{
                    id:store.state.userInfo.id,
                    oldPassword:oldPassword.value,
                    newPassword:newPassword.value,
                },
                success(){
                    console.log("修改成功");
                }

            });
        }

        return {
            oldPassword,newPassword,confirmPassword,submit_modifyPassword,error_message
        }
    }
}
</script>

<style scoped>
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
</style>