<template>
    <div class="allfield">
        <BaseL>
            
            <div class="allfield-head">
               <div class="card return-home">
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
                    
                        <div class="logout">登出</div>
                    </div>
                </div>
           
            <div class="allfield-mid">
                <div class="card">
                    <div class="card-body">
                        <div class="all-subject">
                            <div class="subject">语文</div>
                            <div class="subject">语文</div>
                            <div class="subject">语文</div>
                            <div class="subject">语文</div>
                            <div class="subject">语文</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="allfield-body">
                
                <div class="card allfield-body-left">
                    <div class="card-body">
                        <div class="card all-ranklist">
                            <div class="card-body">
                                <div>
                                    总成绩排行
                                </div>
                                <br>
                                <div class="rank">姓名 成绩</div>
                                <br>
                                <div class="rank">姓名 成绩</div>
                                <br>
                                <div class="rank">姓名 成绩</div>
                                <br>
                                <div class="rank">姓名 成绩</div>
                                <br>
                                <div class="rank">姓名 成绩</div>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="card allfield-body-right">
                    <div class="card-body">
                        <div class="allfield-body-right-rankinfo">
                            <div class="card rankinfo-title">
                                <div class="card-body">
                                    排名
                                </div>
                            </div>
                            <div class="card rankinfo-title">
                                <div class="card-body">
                                    学号
                                </div>
                            </div>
                            <div class="card rankinfo-title">
                                <div class="card-body">
                                    姓名
                                </div>
                            </div>
                            <div class="card rankinfo-title">
                                <div class="card-body">
                                    成绩
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </BaseL>
    </div>
</template>

<script>
import BaseL from '@/components/BaseL.vue';
export default{
    name:'RankListView',
    components:{
        BaseL
    }
}
</script>

<style scoped>
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
    width: 85%;
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
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
