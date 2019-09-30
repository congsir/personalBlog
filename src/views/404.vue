<template>
    <div class="indexContent">
        <el-scrollbar class="scroller-box" id="scroller-box" >
            <div class="cover">
                <div class="userInfo">
                    <h1>404 Not Found</h1>
                    <div class="btnWrapper">
                      <router-link to="/"><div class="btn">首页</div></router-link>
                      <div @click="goBack()" class="btn">返回上一页</div>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>
<script>
// @ is an alias to /src


export default {
  components: {
  },
  data() {
      return {
      }
  },
  methods: {
    goBack(){
      this.$route.go(-1)
    }
  },
}
</script>
<style lang="scss" scoped>
    .indexContent{
        height: 100vh;
        .scroller-box{
            height: 100%;
            .cover{
                height: 100vh;
                background-image: url('../static/img/sky.jpg');
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
                position: relative;
                .userInfo{
                    position: absolute;
                    background-color: rgba(255,255,255,.25);
                    width: 500px;
                    height: 500px;
                    left:50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    h1{
                      font-size: 40px;
                      color: #fff;
                      text-align: center;
                      margin-top: 15%;
                    }
                    .btnWrapper{
                      margin-top: 40px;
                      .btn{
                        width: 60%;
                        margin: 0 auto;
                        background-color: #f2f2f2;
                        color: #222;
                        text-align: center;
                        height: 40px;
                        line-height: 40px;
                        margin-bottom: 20px;
                        cursor: pointer;
                        border-radius: 4px;
                        &:hover{
                              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                              color: #478cdc;
                              transition: all .3s ease-in-out;
                        }
                      }
                    }
                }
            }
        }
    }
</style>

