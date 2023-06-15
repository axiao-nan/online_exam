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
import StudentManage from '@/components/AdminView/StudentManage.vue';
import SheetManage from '@/components/AdminView/SheetManage.vue';
import QuestionManage from '@/components/AdminView/QuestionManage.vue';
import SheetJudge from '@/components/AdminView/SheetJudge.vue';
import ScoreAnalysis from '@/components/AdminView/ScoreAnalysis.vue';
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