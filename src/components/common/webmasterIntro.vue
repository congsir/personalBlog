<template>
  <div class="wrapper">
    <div class="card">
      <div class="subTitle">
        站长推荐
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
            <div class="left">
              <img src="http://www.yangqq.com/d/file/jstt/css3/2018-03-20/718b56be9dbf920cc0a6124545216654.jpg" alt="">
            </div>
            <div class="right">十条设计原则教会你如何进行网页布局,人家进行两行打点测试</div>
          </li>
          <li>
            <div class="left">
              <img src="http://www.yangqq.com/d/file/jstt/css3/2018-03-20/718b56be9dbf920cc0a6124545216654.jpg" alt="">
            </div>
            <div class="right">十条设计原则教会你如何进行网页布局,人家进行两行打点测试</div>
          </li>
          <li>
            <div class="left">
              <img src="http://www.yangqq.com/d/file/jstt/css3/2018-03-20/718b56be9dbf920cc0a6124545216654.jpg" alt="">
            </div>
            <div class="right">十条设计原则教会你如何进行网页布局,人家进行两行打点测试</div>
          </li>
          <li>
            <div class="left">
              <img src="http://www.yangqq.com/d/file/jstt/css3/2018-03-20/718b56be9dbf920cc0a6124545216654.jpg" alt="">
            </div>
            <div class="right">十条设计原则教会你如何进行网页布局,人家进行两行打点测试</div>
          </li>
          <li>
            <div class="left">
              <img src="http://www.yangqq.com/d/file/jstt/css3/2018-03-20/718b56be9dbf920cc0a6124545216654.jpg" alt="">
            </div>
            <div class="right">十条设计原则教会你如何进行网页布局,人家进行两行打点测试</div>
          </li>
          <li>
            <div class="left">
              <img src="http://www.yangqq.com/d/file/jstt/css3/2018-03-20/718b56be9dbf920cc0a6124545216654.jpg" alt="">
            </div>
            <div class="right">十条设计原则教会你如何进行网页布局,人家进行两行打点测试</div>
          </li>
          <li>
            <div class="left">
              <img src="http://www.yangqq.com/d/file/jstt/css3/2018-03-20/718b56be9dbf920cc0a6124545216654.jpg" alt="">
            </div>
            <div class="right">十条设计原则教会你如何进行网页布局,人家进行两行打点测试</div>
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
          overflow: hidden;
          margin-bottom: 10px;
          height: 60px;
          position: relative;
          padding-left: 80px;
          cursor: pointer;
          &:hover{
            .left{
              img{
              width: 110%;
              height: 110%;
            }
            }
          }
          .left{
            width: 70px;
            height: 70px;
            position: absolute;
            left: 0;
            right: 0;
            img{
              width: 100%;
              height: 100%;
              transition: all .5s ease;
              transition: all 0.5s;
            }
          }
          .right{
            padding-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            font-size: 14px;
            line-height: 18px;
            color: #222;
          }
      }
    }
  }
}
</style>
