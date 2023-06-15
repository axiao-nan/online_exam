<template>
    <div class="content-field">
        <div class="card content-field-box">
            <div class="card-body">
                <div class="single-box" v-for="question in $store.state.questionList" :key="question.id">
                    <!-- {{ question.numId }} -->
                    <div v-if="$store.state.degreeBox[question.numId]==='1'" class="single-box-body1"></div>
                    <div v-if="$store.state.degreeBox[question.numId]==='2'" class="single-box-body2"></div>
                </div>
                
            </div>
        </div>
    </div>
    
</template>

<script>
export default{
    name:"FinishDegree",
}
</script>

<style scoped>
.card-body {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  
  .single-box {
    white-space: nowrap;
}
  .single-box-body1 {
    display: inline-block;
    width: 20px; 
    height: 20px; 
    background-color: gray;
    margin: 5px;
    border: 1.5px solid black;
  }
  .single-box-body2 {
    display: inline-block;
    width: 20px; 
    height: 20px; 
    background-color: red;
    margin: 5px;
    border: 1.5px solid black;
  }

  .content-field-box{
    width: 100%;
  }
</style>