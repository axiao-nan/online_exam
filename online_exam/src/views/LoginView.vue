<template>
    <BaseL>
        <div class="all-field">
            <div class="all-field-head">
                <div class="card all-field-head-content">
                    <div class="card-body">
                        <div class="all-field-head-content-body">
                            <div class="theme">在线考试系统</div>
                            <div class="message">欢迎登录</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="all-field-body">
                <!-- <div style="margin: 0px 0px 0px 90px;" class="photo-field">
                    <img src="https://th.bing.com/th/id/OIP.UQsW-G6p-VJVSd4Y-L4KkgHaEo?w=290&h=181&c=7&r=0&o=5&dpr=2&pid=1.7"
                     alt="">
                </div> -->
                <div style="margin: 0px 0px 0px 20px;" class="card all-field-body-content">
                    <div class="card-body">
                        <div class="login">
                            <div class="login-login"> 
                                <div class="login-title"> 
                                    用户登录
                                </div>
                                <div class="login-username">
                                    <div class="login-item">
                                        <input v-model="username" type="text" placeholder="请输入学号"> 
                                    </div>
                                </div>
                                <div class="login-password"> 
                                    <div class="login-item">
                                        <input v-model="password" type="password" placeholder="请输入密码">
                                    </div>
                                </div>
                                
                                <div class="login-error-message">
                                    {{ error_message }}
                                </div>

                                <div class="login-submit"> 
                                    <div class="login-button">
                                        <button @click="submit_login()">登录</button>
                                    </div>
                                </div>
                                
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </BaseL>
</template>

<script>
import BaseL from '@/components/BaseL.vue';
import { useStore } from 'vuex';
import { ref } from 'vue';
import $ from 'jquery';
import { useRouter } from 'vue-router';
export default{
    name:'LoginView',
    components:{
        BaseL
    },
    setup(){
        const store=useStore();
        const router=useRouter();

        const username=ref('');
        const password=ref('');
        const error_message=ref('');

        const submit_login=()=>{
            $.ajax({
                url:store.state.backendIp+'/user/login',
                type:'post',
                data:{
                    number:username.value,
                    password:password.value
                },
                success(resp){
                    console.log(resp);

                    if(resp.code===0){
                        error_message.value=resp.msg;
                    }else if(resp.code===1){
                        store.commit("update_userInfo",resp.data);
                        store.commit("loginSuccess");
                        store.commit("update_studentId",resp.data.id);
                        //更新科目列表
                        $.ajax({
                            url:store.state.backendIp+'/course/list',
                            type:'get',
                            success(resp){
                                //console.log(resp);
                                store.commit("update_AdminSubjectList",resp.data);
                            },
                            error(){
                                console.log("shibai");
                            }
                        });

                        if(resp.data.type===2){
                            router.replace("/administrator/");
                        }else if(resp.data.type===1){
                            router.replace("/student");
                        }
                    }
                },  
                error(){
                    console.log("登录失败");
                }
            });
        }

        return{
            username,password,submit_login,error_message
        }
    }
}
</script>

<style scoped>
.login-title{
    color: black;
    font-size: 3vh;
    text-align: center;
    height: 7vh;
    padding-top: 1vh;
}

.login-username{
    display: block;
    height: 12vh;
}

.login-password{
    display: block;
    height: 12vh;
}

.login-submit{
  display: block;
  height: 7vh;
  width: 100%;
  
}

.photo-field{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.login-item{
    width: 100%;
    height: 100%;
}

.login-item > input{
    width: 90%;
    line-height: 6vh; /* 调整输入框文字的垂直居中位置 */
    font-size: 2.5vh; /* 调整输入框文字的大小 */
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1vh;
}

.login-item > button{
  color: white;
  background-color: royalblue;
  width: 90%;
  line-height: 3vh;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1vh;
  cursor: pointer;
}

.login-error-message{
  color: red;
  font-size: 1vh;
  display: inline;
  float: left;
  padding-left: 1vw;
}

.login-option{
  color: white;
  font-size: 1.5vh;
  display: inline;
  float: right;
  padding-right: 1.5vw;
  cursor: pointer;
}

img{
    transform: scale(1.2);
}

.all-field-body{
    display: flex;
    justify-content:end;
    margin-top: 20px;
    height: 500px;
    margin-right: 40px;
}

.all-field{
    display: flex;
    flex-direction: column;
}
.theme{
    font-size: 30px;
    font-weight: bold;
}
.message{
    display: flex;
    align-items: flex-end;
    margin-left: 30px;
}
.all-field-head-content-body{
    display: inline-flex;
    flex-direction: row;
}

.all-field-head-content{
    width: 100%;
}

.all-field-body-content{
    width: 35%;
}

.button-field{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
}

.button-field-administrator{
    margin-left: 20px;
}

.button-field-student{
    margin-right: 20px;
}

.login-button{
    display: flex;
    justify-content: center;
}
.login-button > button{
  color: white;
  background-color: royalblue;
  width: 50%;
  border-radius: 1vh;
  cursor: pointer;
  margin-top: 25px;
}
</style>