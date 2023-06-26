<template>
    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="selectedSubjectId">
      <option v-for="subject in $store.state.AdminSubjectList" :key="subject.id" :value="subject.id">{{ subject.name }}</option>
    </select>

    <div class="card allfield-body-right-bodyfield">
        <div class="card-body scroll-container">

            <div v-for="student in $store.state.ScoreList" :key="student.name" class="student">
                <div class="student-info">
                    姓名:{{ student.username }} &nbsp;&nbsp;&nbsp;学号:{{ student.number }} &nbsp;&nbsp;&nbsp;成绩:{{ student.score }}
                </div>
            </div>
            
           
        </div>
    </div>


</template>

<script>
import $ from 'jquery';
import { useStore } from 'vuex';
import { ref, watch } from 'vue';
export default {
  name: 'StudentManage',
  components: {},
  setup() {
    const store = useStore();
    const selectedSubjectId = ref('');

    watch(selectedSubjectId, (newVal) => {
      query(newVal);
    });

    const query = (courseId) => {
      console.log("执行到此！");
      $.ajax({
        url: store.state.backendIp + '/grade/list',
        type: 'get',
        data: {
          courseId
        },
        success(resp) {
          console.log(resp);
          store.commit("update_ScoreList",resp.data);
        },
        error() {
          console.log("获取失败");
        }
      });
    }

    return {
      selectedSubjectId,
    }
  }
}
</script>

<style scoped>

.scroll-container {
  height: 300px;
  overflow-y: auto; 
}

.allfield-body-right-headfield{
    display: flex;
    flex-direction: row;
    justify-content:left;
    margin-bottom: 10px;
}



.allfield-body-right-bodyfield{
    height: 360px;
}

.student{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
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



.student-info{
    width: 100%;
}

.border-base{
    margin:5px 6px 5px 6px;
    border: 1.5px solid black;
    padding: 7px 7px 7px 7px;
    border-radius: 12px;
}

.allfield-body-right-headfield-box{
    cursor: pointer;
}
.allfield-body-right-headfield-box:hover{
    transform: scale(1.1);
}
</style>
