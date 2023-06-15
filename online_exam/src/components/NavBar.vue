<template>
    <BaseL>
      <div class="navbar-field">
        <div class="theme">
          <div class="card">
              <div class="card-body">
                  在线考试系统
              </div>
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
                          <div class="userCard-body-info-username">
                              <a href="https://www.acwing.com/user/myspace/index/123008/" target="_blank">william</a>
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

        </div>
      
    </BaseL>
</template>

<script>
import BaseL from './BaseL.vue';
export default{
  name:'NavBar',
  components:{
    BaseL
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


/*new*/
.userCard-body-photo img {
    /* 设置内的元素 图片大小   */
    width: 32px;
    height: 32px;
    border-radius: 3px;
}

.userCard {
    width: 200px;
    height: 67.69px;
    background-color: #D9EAF7;
    /* margin: 10% auto; */
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
    /* 元素行高与元素大小一致，就可以实现 垂直居中 */
    line-height: 14px;
    margin-bottom: 4px;
}

.userCard-body-info-username>a {
    /* 因为这里的username使用的是超链接，所以需要选择a标签，而不是简单的选择div */
    font-size: 13px;
    color: #0074CC;
    /* 去掉下划线 */
    text-decoration: none;
}

.userCard-body-info-reputation {
    font-size: 12px;
    color: #838C95;
    height: 14px;
    /* 元素行高与元素大小一致，就可以实现 垂直居中 */
    line-height: 14px;
    margin-bottom: 4px;
}

.userCard-body-info-reputation-item {
    width: 6px;
    height: 6px;
    /* 浮动来实现在同一行中 */
    /* float: left; */
    display: inline-block;
    border-radius: 50%;
    margin: 0 3px 0 2px;
    position: relative;
    top: -1px;
}

</style>