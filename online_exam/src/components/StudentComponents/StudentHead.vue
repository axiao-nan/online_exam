<template>
    <BaseL>
      <div class="navbar-field">
      
          <div class="card">
              <div class="card-body theme">
                  在线考试系统
              </div>
          </div>
      
          
          <router-link :to="{name:'ranklist'}" class="rankList">
            <div class="card">
              <div class="card-body">
                排行榜
              </div>
            </div>
          </router-link>


          <div class="card">
            <div class="card-body">
              <div class="userCard">
                <div class="userCard-head">Author Jan 24, 2017 at 9:46</div>
                  <div class="userCard-body">
                      <div class="userCard-body-photo">
                          <a href="https://www.acwing.com/user/myspace/index/123008/" target="_blank"></a>
                              <img src="https://cdn.acwing.com/media/user/profile/photo/93679_lg_c871e15988.jpg" alt="userCard-body-photo"></div>

                      <div class="userCard-body-info">
                          <div data-bs-toggle="modal" data-bs-target="#exampleModal" class="userCard-body-info-username">
                              {{ $store.state.userInfo.name }}
                          </div>

                          <div class="userCard-body-info-reputation">
                              <span style="color: 6A737C; font-weight: bold;">235k</span>
                              <div class="userCard-body-info-reputation-item" style="background-color: #FFCC01;"></div>
                                50
                              <div class="userCard-body-info-reputation-item" style="background-color: #B4B8BC;"></div>
                                485
                              <div class="userCard-body-info-reputation-item" style="background-color: #D1A684;"></div>
                                566
                          </div>
                      </div>
                  </div>
               </div>
            </div>
          </div>

          <StudentInfoModal />

        </div>
      
    </BaseL>
</template>

<script>
import BaseL from '@/components/BaseL.vue';
import StudentInfoModal from '@/components/StudentComponents/StudentInfoModal.vue';
export default{
  name:'StudentHead',
  components:{
    BaseL,StudentInfoModal
  }
}
</script>

<style scoped>
.navbar-field{
  display: flex;
  flex-direction: row;
  justify-content:space-between;
}

.theme,
.rankList {
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: transform 0.1s ease;
  text-decoration:none;
}

.rankList:hover{
  transform: scale(1.1);
}

.theme{
  font-size: 25px;
  font-weight: bold;
}


.userCard-body-photo img {
    width: 32px;
    height: 32px;
    border-radius: 3px;
}

.userCard {
    width: 200px;
    height: 67.69px;
    background-color: #D9EAF7;
    padding: 5px 6px 7px 7px;
    box-sizing: border-box;
}

.userCard-head {
    font-size: 12px;
    color: #6A737C;
    margin: 1px 0 4px 0;
}

.userCard-body-photo {
    float: left;
}

.userCard-body-info {
    float: left;
    margin-left: 8px;
}

.userCard-body-info-username {
    height: 14px;
    line-height: 14px;
    margin-bottom: 4px;
    font-size: 13px;
    color: #0074CC;
    cursor: pointer;
}


.userCard-body-info-reputation {
    font-size: 12px;
    color: #838C95;
    height: 14px;
    line-height: 14px;
    margin-bottom: 4px;
}

.userCard-body-info-reputation-item {
    width: 6px;
    height: 6px;
    display: inline-block;
    border-radius: 50%;
    margin: 0 3px 0 2px;
    position: relative;
    top: -1px;
}

</style>