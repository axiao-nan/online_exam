<template>
    <div class="card allfield-body-right">
        <div class="card-body">
            <StudentManage v-if="$store.state.adminViewStatus===1" />
            <SheetManage v-if="$store.state.adminViewStatus===2" />
            <QuestionManage v-if="$store.state.adminViewStatus===3" />
            <SheetJudge v-if="$store.state.adminViewStatus===4" />
            <ScoreAnalysis v-if="$store.state.adminViewStatus===5" />
        </div>
    </div>
</template>

<script>
import StudentManage from '@/components/AdminComponents/AdminRightComponents/StudentManage.vue';
import SheetManage from '@/components/AdminComponents/AdminRightComponents/SheetManage.vue';
import QuestionManage from '@/components/AdminComponents/AdminRightComponents/QuestionManage.vue';
import SheetJudge from '@/components/AdminComponents/AdminRightComponents/SheetJudge.vue';
import ScoreAnalysis from '@/components/AdminComponents/AdminRightComponents/ScoreAnalysis.vue';
export default{
    name:'AdminRight',
    components:{
        StudentManage,SheetManage,QuestionManage,SheetJudge,ScoreAnalysis,
    }
}
</script>

<style scoped>
.allfield-body-right{
    width: 85%;
    height: 440px;
}
</style>