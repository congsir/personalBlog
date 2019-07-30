<template>
  <div class="wrapper">
    <div class="card">
      <div class="subTitle">
        点击排行
      </div>
      <a class="picWrapper" href="http://jxhx2.yangqq.com/notice/27.html">
        <picture-with-title
          bgUrl="http://jxhx2.yangqq.com/skin/jxhx/images/b02.jpg"
          title="个人网站做好了，百度不收录怎么办？来，看看他们是怎么做的"
        ></picture-with-title>
      </a>

      <div class="list">
        <ul>
          <li>
            <h3 index="1">安静的做一个爱设计的女子这里纵膈哟交流</h3>
          </li>
          <li>
            <h3 index="2">安静的做一个爱设计的女子sadfasasdf</h3>
          </li>
          <li>
            <h3 index="3">安静的做一个爱设计的女子</h3>
          </li>
          <li>
            <h3 index="4">安静的做一个爱设计的女子</h3>
          </li>
          <li>
            <h3 index="5">安静的做一个爱设计的女子</h3>
          </li>
          <li>
            <h3 index="6">安静的做一个爱设计的女子</h3>
          </li>
          <li>
            <h3 index="7">安静的做一个爱设计的女子</h3>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import pictureWithTitle from "./pictureWithTitle.vue";
export default {
  data() {
    return {};
  },
  components: {
    pictureWithTitle
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  box-sizing: border-box;
  padding: 20px 10px;
  background-color: #fff;
  text-align: left;
  .card {
    .subTitle {
      font-size: 16px;
      line-height: 40px;
      border-bottom: 1px solid #eee;
      color: #484848;
      font-weight: normal;
      position: relative;
      margin-bottom: 20px;
      &:hover:after {
        width: 80px;
      }
      &:after {
        content: "";
        position: absolute;
        width: 60px;
        height: 2px;
        content: "";
        background: #000;
        left: 0;
        bottom: 0;
        transition: all 0.5s ease;
      }
      span {
        display: inline-block;
        border-bottom: 2px solid #222;
      }
    }
    .picWrapper {
      display: block;
      width: 100%;
      height: 110px;
      .wrapper {
        padding: 0;
      }
      margin-bottom: 15px;
    }
    .list {
      font-size: 12px;
      li {
        height: 30px;
        line-height: 30px;
        margin-bottom: 10px;
        padding-left: 5px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        &:nth-of-type(2n){
            background-color: #eee;
        }
        &:nth-of-type(1){
            h3{
                &::before{
                    background-color: #FF6600;
                }
            }
        }
        &:nth-of-type(2){
            h3{
                &::before{
                    background-color: #FF6600;
                }
            }
        }
        &:nth-of-type(3){
            h3{
                &::before{
                    background-color: #FF6600;
                }
            }
        }
        h3 {
          text-align: left;
          font-size: 14px;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break:break-all;
          &::before {
            display: inline-block;
            content: attr(index);
            color: #fff;
            width: 20px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            background-color: #ccc;
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>
