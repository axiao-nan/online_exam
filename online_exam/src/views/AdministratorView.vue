<template>
    <div class="allfield">
        <BaseL>
            <AdminHead /> 
            <div class="allfield-body">
                <AdminLeft />
                <AdminRight />
            </div>
        </BaseL>
    </div>
</template>

<script>
import BaseL from '@/components/BaseL.vue';
import AdminLeft from '@/components/AdminComponents/AdminLeft.vue';
import AdminHead from '@/components/AdminComponents/AdminHead.vue';
import AdminRight from '@/components/AdminComponents/AdminRight.vue';
export default{
    name:'AdministratorView',
    components:{
        BaseL,
        AdminLeft,AdminHead,AdminRight
    },

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
</style>
