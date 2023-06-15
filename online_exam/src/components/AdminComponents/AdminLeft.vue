<template>
    <div class="card">
        <div class="card-body">
            <div class="allfield-body-left">
                <div @click="changeAdminStatus(1)" class="card allfield-body-left-content-area">
                    <div class="card-body">
                        学生管理
                    </div>
                </div>
                <div @click="changeAdminStatus(2)" class="card allfield-body-left-content-area">
                    <div class="card-body">
                        试卷管理
                    </div>
                </div>
                <div @click="changeAdminStatus(3)" class="card allfield-body-left-content-area">
                    <div class="card-body">
                        试题管理
                    </div>
                </div>
                <div @click="changeAdminStatus(4)" class="card allfield-body-left-content-area">
                    <div class="card-body">
                        试卷评判
                    </div>
                </div>
                <div @click="changeAdminStatus(5)" class="card allfield-body-left-content-area">
                    <div class="card-body">
                        成绩统计
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import { useStore } from 'vuex';
export default{
    name:'AdminLeft',
    components:{
    },
    setup(){
        const store=useStore();

        const changeAdminStatus = status => {
            store.commit("changeAdminStatus",status);
        }

        return{
            changeAdminStatus
        }
    }
}
</script>

<style scoped>
.allfield-body-left-content-area{
    font-size: 15px;
    margin: 12px 0px 12px 0px;
    cursor: pointer;  
}

.allfield-body-left-content-area:hover{
    transform: scale(1.1);
}

.allfield-body-left{
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
}
</style>