<template>
    <div class="modal-father modal fade" id="AdminAddSheet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">添加试卷</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="allfield-body-right-bodyfield">
                        <div class="content">
                            <div class="content-field">
                                试卷名称:<br><input v-model="name" type="text">
                            </div>
                            <div class="content-field">
                                命题人:<br><input v-model="createUser" type="text">
                            </div>
                        </div>
                        <div class="content">
                            <div class="content-field">
                                单选题数量: <br> <input v-model="allNum[0]" type="text">
                            </div>
                            <div class="content-field">
                                每小题分数:<br><div class="show-border">2分</div>
                            </div>
                        </div>
                        <div class="content">
                            <div class="content-field">
                                填空题数量:<br><input v-model="allNum[1]" type="text">
                            </div>
                            <div class="content-field">
                                每小题分数:<br><div class="show-border">2分</div>
                            </div>
                        </div>
                        <div class="content">
                            <div class="content-field">
                                简答题数量:<br><input v-model="allNum[2]" type="text">
                            </div>
                            <div class="content-field">
                                每小题分数:<br><div class="show-border">2分</div>
                            </div>
                        </div>
                        <div class="content">
                            <div class="content-field">
                                考试日期:<br>{{currentDateTime}}
                            </div>
                            <div class="content-field">
                                考试时长:<br><input v-model="paperTime" type="text">
                            </div>
                        </div>
                        <div class="content">
                            <div class="content-field">
                                考试科目:&nbsp;&nbsp;&nbsp;<input v-model="courseName" type="text">
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                    <button @click="AddSheet()" type="button" class="btn btn-primary" data-bs-dismiss="modal">提交</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { watch } from 'vue';
import { useStore } from 'vuex';
export default{
    name:"AdminAddSheet",
    setup() {
    const store=useStore();
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

    const getCourseId = Name =>{
        for(let i in store.state.AdminSubjectList){
            if(store.state.AdminSubjectList[i].name === Name){
                return i;
            }
        }
        return -1;
    }

    const name=ref('');
    const createUser=ref('');
    const courseName=ref('');
    const paperTime=ref('');
    const allNum=ref([]);

    const AddSheet=()=>{
        let courseId=getCourseId(courseName.value);
        //console.log(courseId);
        if(courseId === -1){
            console.log("科目不存在");
            return;
        }
        courseId++;
        store.commit("submit_AdminSheetList",{
            name:name.value,
            createUser:createUser.value,
            courseId,
            paperTime:paperTime.value,
            allNum:allNum.value
        });
    }

    return {
      currentDateTime,AddSheet,
      name,createUser,courseName,paperTime,allNum
    };
  },
};
   
</script>

<style scoped>
img{
    border: 1.5px solid black;
    border-radius: 50%;
    width: 25%;
    height: 25%;
}

.modal-father{
    text-align:center;
}

.allfield-body-right-bodyfield{
    height: 100%;
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

.show-border{
    width:184px;
    height: 30px;
    border: 1.5px solid black;
    text-align: center;
}

</style>