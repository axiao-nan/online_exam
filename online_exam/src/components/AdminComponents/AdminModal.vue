<template>

    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        个人信息
    </button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">管理员信息</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                    <div class="userInfo">
                        
                        <img src="https://cdn.acwing.com/media/user/profile/photo/93679_lg_c871e15988.jpg" alt="">
                        <div class="modify-photo modify">修改头像</div>
                        <div class="body-field">
                            <div class="body-field-single">
                                <div class="single-detail detail-font">用户姓名</div>
                                <div class="border-base">{{ $store.state.userInfo.name }}</div>
                            </div>
                            <div class="body-field-single">
                                <div class="single-detail detail-font">性别</div>
                                <div class="border-base">{{ $store.state.userInfo.sex }}</div>
                            </div>
                            <div class="body-field-single">
                                <div class="single-detail detail-font">学号</div>
                                <div class="border-base">{{ $store.state.userInfo.number }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default{
    name:"AdminModal",
    setup(){

    }
   
}
</script>

<style scoped>
img{
    border: 1.5px solid black;
    border-radius: 50%;
    width: 25%;
    height: 25%;
}

.body-field{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.body-field-single{
    margin:10px 10px 10px 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.single-detail{
    margin: 10px;
}

.modify-photo{
    margin-top: 10px;
}

.detail-font{
    width: 70px;
}

.border-base{
    margin:5px 6px 5px 6px;
    border: 1.5px solid black;
    padding: 5px 5px 5px 5px;
    border-radius: 12px;
    width: 200px;
}

.modify{
    cursor: pointer;
}
</style>