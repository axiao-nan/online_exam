<template>
    <div class="all-field">
        <div class="all-field-left border-base">
            <div class="all-field-left-up">sdadasdasdsdadasdasdsdadasdasdsdadasdasdsdadasdasdsdadasdasd</div>
            <div class="all-field-left-down">
                <div class="all-field-left-down-detail">上一题</div>
                <div class="all-field-left-down-detail">下一题</div>
            </div>
        </div>
        <div class="all-field-right">
            <div class="finish-degree border-base"></div>
            <input class="border-base" type="text">
            <div class="now-score border-base">
                <div>当前得分:</div>
                <div class="button-field">
                    
                    <button type="button" class="btn btn-primary">提交</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.all-field{
    display: flex;
    flex-direction: row;
}

.border-base{
    margin:5px 6px 5px 6px;
    border: 1.5px solid black;
    padding: 5px 5px 5px 5px;
    border-radius: 12px;
}

input{
    width: 100%;
}

.all-field-left{
    width: 70%;
    height: 400px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.finish-degree{
    height: 250px;
    width: 100%;
}

.all-field-left-up{
    padding: 5px;
}

.all-field-right{
    width: 30%;
}

.all-field-left-down{
    display: flex;
    flex-direction: row;
    justify-content: end;
}

.all-field-left-down-detail{
    margin-right: 15px;
    margin-bottom: 5px;
}

.now-score{
    width: 100%;
    height: 93px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.button-field{
    display: flex;
    justify-content: center;
}
</style>