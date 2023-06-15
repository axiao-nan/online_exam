<template>
    <div class="card allfield-body-right-bodyfield">
        <div class="card-body">
            <div class="content">
                <div class="content-field">
                    试卷名称:&nbsp;&nbsp;&nbsp;<input type="text">
                </div>
                <div class="content-field">
                    命题人:&nbsp;&nbsp;&nbsp;<input type="text">
                </div>
            </div>
            <div class="content">
                <div class="content-field">
                    单选题数量:&nbsp;&nbsp;&nbsp;<input type="text">
                </div>
                <div class="content-field">
                    每小题分数:&nbsp;&nbsp;&nbsp;<input type="text">
                </div>
            </div>
            <div class="content">
                <div class="content-field">
                    填空题数量:&nbsp;&nbsp;&nbsp;<input type="text">
                </div>
                <div class="content-field">
                    每小题分数:&nbsp;&nbsp;&nbsp;<input type="text">
                </div>
            </div>
            <div class="content">
                <div class="content-field">
                    简答题数量:&nbsp;&nbsp;&nbsp;<input type="text">
                </div>
                <div class="content-field">
                    每小题分数:&nbsp;&nbsp;&nbsp;<input type="text">
                </div>
            </div>
            <div class="content">
                <div class="content-field">
                    考试日期:&nbsp;&nbsp;&nbsp;&nbsp;{{currentDateTime}}&nbsp;&nbsp;&nbsp;
                </div>
                <div class="content-field">
                    考试时长:&nbsp;&nbsp;&nbsp;<input type="text">
                </div>
            </div>
            <div class="button-field">
                <button type="button" class="btn btn-primary">生成试卷</button>
            </div>
        </div>
    </div>


</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'SheetManage',
  components: {},
  setup() {
    const currentDateTime = ref('');

    // 更新当前日期和时间的方法
    const updateDateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      currentDateTime.value = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };

    // 使用 watch 监听器每秒更新日期和时间
    watch(() => {
      setInterval(updateDateTime, 1000);
    });

    return {
      currentDateTime,
    };
  },
};
</script>

<style scoped>

.allfield-body-right-bodyfield{
    height: 100%;
}

.student{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.student-detail{
    margin:10px 12px 10px 12px;
    border: 1.5px solid black;
    padding: 5px 5px 5px 5px;
    text-align: center;
    border-radius: 7px;
    cursor: pointer;
}

.student-info{
    margin:10px 12px 10px 12px;
    border: 1.5px solid black;
    padding: 5px 5px 5px 5px;
    text-align: center;
    border-radius: 7px;
}

.student-detail:hover{
    transform: scale(1.1);
}

.student-info{
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
