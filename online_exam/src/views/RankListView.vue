<template>
    <div class="allfield">
        <BaseL>
            
            <div class="allfield-head">
               <div @click="return_home()" class="card return-home">
                    <div class="card-body">
                        返回主页
                    </div>
               </div>
               <div class="card theme">
                    <div class="card-body">
                        成绩排行榜
                    </div>
               </div>
               
                    
                <div class="allfield-head-userinfo">
                    <div class="photo">
                        <img src="https://cdn.acwing.com/media/user/profile/photo/93679_lg_c871e15988.jpg" alt="">
                    </div>
                        <div @click="adminExit()" class="logout">登出</div>
                    </div>
                </div>
           
            <div class="allfield-mid">
                <div class="card">
                    <div class="card-body">
                        <div class="all-subject">
                            <div v-for="subject in $store.state.AdminSubjectList" :key="subject.id" 
                            class="subject" 
                            @click="query(subject.id)" 
                            :class="{ 'selected-option': isSelected(subject.id) }">{{ subject.name }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="allfield-body">
                
                <div class="card allfield-body-right">
                    <div class="card-body">
                        <div class="allfield-body-right-rankinfo">

                            <div v-for="student in $store.state.rankSubjectList" 
                            :key="student.id" class="user border-base">
                                <div class="user-info">分数:{{ student.score }}</div>
                                <div class="user-info">姓名:{{ student.username }}</div>
                                <div class="user-info">学号:{{ student.number }}</div>
                                <div class="user-info">性别:{{ student.sex }}</div>
                            </div>
                            

                        </div>
                    </div>
                </div>
                
            </div>
        </BaseL>
    </div>
</template>

<script>
import { ref } from 'vue';
import BaseL from '@/components/BaseL.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import $ from 'jquery';
export default{
    name:'RankListView',
    components:{
        BaseL
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
                        router.push('/login');
                    }
                }
            });
        };

        const selectedSubjectId = ref(null);
  
        const isSelected = (subjectId) => {
            return subjectId === selectedSubjectId.value;
        };


        const query = courseId => {
            selectedSubjectId.value = courseId;

            //console.log("执行到此！");
            $.ajax({
                url: store.state.backendIp + '/grade/list',
                type: 'get',
                data: {
                    courseId
                },
                success(resp) {
                    console.log(resp);
                    store.commit("update_rankSubjectList",resp.data);
                },
                error() {
                    console.log("获取排行信息失败");
                }
            });
        };

        const return_home=()=>{
            router.replace("/student");
        }
        return{
            adminExit,query,isSelected,return_home
        }
    } 
}
</script>

<style scoped>
.subject{
    cursor: pointer;
}
.user{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.user-info{
    margin: 0px 60px 0px 60px;
    white-space: nowrap;
}
.border-base{
    margin:10px 6px 10px 6px;
    border: 1.5px solid black;
    padding: 7px 7px 7px 7px;
    border-radius: 12px;
}

.return-home{
    cursor: pointer;
}

.return-home:hover{
    transform: scale(1.1);
}

.selected-option {
    color: blue;
  }
  
.allfield{
    height: 100%;
    width:100%;
}
.allfield-body{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 440px;
}
.allfield-body-left{
    display: flex;
    flex-direction:column;
    width: 15%;
}

.allfield-body-right{
    width: 100%;
    height: 440px;
}

.allfield-head {
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  height: 80px;
}

.allfield-head-userinfo{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 10px;
    margin-right: 10px;
}

img{
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}
.photo{
    height: 70px;
    width: 70px;
    border: 1.5px solid black;
    margin-right: 10px;
}

.logout{
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
    cursor: pointer;
}

.allfield-mid{
    margin: 5px 0px 10px 0px;
}
.all-subject{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.all-ranklist{
    height: 100%;
}

.allfield-body-right-rankinfo{
    height: 406px;
    overflow-y: scroll;
}
.rankinfo-title{
    height: 100%;
    width: 100px;
    margin: 0px 50px 0px 50px;
    text-align: center;
}

.theme{
    font-size: 26px;
    font-weight: bold;
}
</style>
