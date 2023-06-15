<template>
     <div class="allfield-body-right-headfield">
        <div class="allfield-body-right-headfield-box border-base">科目下拉列表</div>
    </div>   
    <div class="card allfield-body-right-bodyfield">
        <div class="card-body scroll-container">

            <div class="student">
                <div class="student-info">
                    学生id:1 &nbsp;&nbsp;&nbsp;姓名:小明 &nbsp;&nbsp;&nbsp;学号:2020102 &nbsp;&nbsp;&nbsp;课程:语文&nbsp;&nbsp;&nbsp;成绩:100
                </div>
            </div>
            <div class="student">
                <div class="student-info">
                    学生id:1 &nbsp;&nbsp;&nbsp;姓名:小明 &nbsp;&nbsp;&nbsp;学号:2020102 &nbsp;&nbsp;&nbsp;课程:语文&nbsp;&nbsp;&nbsp;成绩:100
                </div>
            </div>
            <div class="student">
                <div class="student-info">
                    学生id:1 &nbsp;&nbsp;&nbsp;姓名:小明 &nbsp;&nbsp;&nbsp;学号:2020102 &nbsp;&nbsp;&nbsp;课程:语文&nbsp;&nbsp;&nbsp;成绩:100
                </div>
            </div>
            <div class="student">
                <div class="student-info">
                    学生id:1 &nbsp;&nbsp;&nbsp;姓名:小明 &nbsp;&nbsp;&nbsp;学号:2020102 &nbsp;&nbsp;&nbsp;课程:语文&nbsp;&nbsp;&nbsp;成绩:100
                </div>
            </div>
            <div class="student">
                <div class="student-info">
                    学生id:1 &nbsp;&nbsp;&nbsp;姓名:小明 &nbsp;&nbsp;&nbsp;学号:2020102 &nbsp;&nbsp;&nbsp;课程:语文&nbsp;&nbsp;&nbsp;成绩:100
                </div>
            </div>
            <div class="student">
                <div class="student-info">
                    学生id:1 &nbsp;&nbsp;&nbsp;姓名:小明 &nbsp;&nbsp;&nbsp;学号:2020102 &nbsp;&nbsp;&nbsp;课程:语文&nbsp;&nbsp;&nbsp;成绩:100
                </div>
            </div>
            <div class="student">
                <div class="student-info">
                    学生id:1 &nbsp;&nbsp;&nbsp;姓名:小明 &nbsp;&nbsp;&nbsp;学号:2020102 &nbsp;&nbsp;&nbsp;课程:语文&nbsp;&nbsp;&nbsp;成绩:100
                </div>
            </div>
            <div class="student">
                <div class="student-info">
                    学生id:1 &nbsp;&nbsp;&nbsp;姓名:小明 &nbsp;&nbsp;&nbsp;学号:2020102 &nbsp;&nbsp;&nbsp;课程:语文&nbsp;&nbsp;&nbsp;成绩:100
                </div>
            </div>
            <div class="student">
                <div class="student-info">
                    学生id:1 &nbsp;&nbsp;&nbsp;姓名:小明 &nbsp;&nbsp;&nbsp;学号:2020102 &nbsp;&nbsp;&nbsp;课程:语文&nbsp;&nbsp;&nbsp;成绩:100
                </div>
            </div>
            <div class="student">
                <div class="student-info">
                    学生id:1 &nbsp;&nbsp;&nbsp;姓名:小明 &nbsp;&nbsp;&nbsp;学号:2020102 &nbsp;&nbsp;&nbsp;课程:语文&nbsp;&nbsp;&nbsp;成绩:100
                </div>
            </div>
            <div class="student">
                <div class="student-info">
                    学生id:1 &nbsp;&nbsp;&nbsp;姓名:小明 &nbsp;&nbsp;&nbsp;学号:2020102 &nbsp;&nbsp;&nbsp;课程:语文&nbsp;&nbsp;&nbsp;成绩:100
                </div>
            </div>
            <div class="student">
                <div class="student-info">
                    学生id:1 &nbsp;&nbsp;&nbsp;姓名:小明 &nbsp;&nbsp;&nbsp;学号:2020102 &nbsp;&nbsp;&nbsp;课程:语文&nbsp;&nbsp;&nbsp;成绩:100
                </div>
            </div>
            
           
        </div>
    </div>


</template>

<script>
export default{
    name:'StudentManage',
    components:{
    },
    setup(){
        
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
