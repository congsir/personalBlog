<template>
  <div class="wrapper">
    <div class="header">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">个人博客日记</el-menu-item>
        <el-menu-item index="2">html/css</el-menu-item>
        <el-menu-item index="3">网站设计</el-menu-item>
        <el-menu-item index="4"><a href="#">设计心得</a></el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>
    <div class="content">
      <div class="left">
        <a href="http://jxhx2.yangqq.com/notice/27.html">
          <picture-with-title
            bgUrl="http://jxhx2.yangqq.com/skin/jxhx/images/h1.jpg"
            title="为什么说10月24日是程序猿的节日？"
          ></picture-with-title>
        </a>
        <a href="http://jxhx2.yangqq.com/notice/27.html">
          <picture-with-title
            bgUrl="http://jxhx2.yangqq.com/skin/jxhx/images/h2.jpg"
            title="个人网站做好了，百度不收录怎么办？来，看看他们是怎么做的"
          ></picture-with-title>
        </a>
      </div>
      <div class="right">
        <div @mouseleave="toLiActive(1)" class="list">
          <ul>
            <li @mouseenter="toLiActive(1)" :class="{ active: liActive == 1 }">
              <h3 index="1">安静的做一个爱设计的女子</h3>
              <p class="intro">
                自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当因为我觉得在这个教程泛滥的时代
              </p>
            </li>
            <li @mouseenter="toLiActive(2)" :class="{ active: liActive == 2 }">
              <h3 index="2">安静的做一个爱设计的女子</h3>
              <p class="intro">
                自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当因为我觉得在这个教程泛滥的时代
              </p>
            </li>
            <li @mouseenter="toLiActive(3)" :class="{ active: liActive == 3 }">
              <h3 index="3">安静的做一个爱设计的女子</h3>
              <p class="intro">
                自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当因为我觉得在这个教程泛滥的时代
              </p>
            </li>
            <li @mouseenter="toLiActive(4)" :class="{ active: liActive == 4 }">
              <h3 index="4">安静的做一个爱设计的女子</h3>
              <p class="intro">
                自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当因为我觉得在这个教程泛滥的时代
              </p>
            </li>
            <li @mouseenter="toLiActive(5)" :class="{ active: liActive == 5 }">
              <h3 index="5">安静的做一个爱设计的女子</h3>
              <p class="intro">
                自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当因为我觉得在这个教程泛滥的时代
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pictureWithTitle from "../common/pictureWithTitle.vue";
export default {
  data() {
    return {
      activeIndex: "1",
      liActive: 1
    };
  },
  components: {
    pictureWithTitle
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toLiActive(index) {
      this.liActive = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #000;
  color: #303133;
}
.wrapper {
  box-sizing: border-box;
  padding: 0 20px 20px 20px;
  background-color: #fff;
  .content {
    height: 220px;
    position: relative;
    .left {
      position: absolute;
      height: 100%;
      width: 275px;
      a {
        height: 100px;
        display: block;
        &:nth-of-type(1) {
          margin: 10px 0;
        }
        .wrapper {
          padding: 0;
        }
      }
    }
    .right {
      padding-left: 295px;
      padding-top: 10px;
      .list {
        height: 210px;
        // border: 1px solid #ccc;
        li {
          margin-bottom: 10px;
          padding: 0 10px;
          p {
            line-height: 24px;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            height: 48px;
            display: none;
          }
          h3 {
            text-align: left;
            font-size: 14px;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: break-all;
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
          &.active {
            background-color: #eee;
            padding: 8px 10px 12px 10px;
            h3 {
              color: #000;
              font-weight: bold;
              &::before {
                background-color: #000;
              }
            }
            p {
              display: -webkit-box;
            }
          }
        }
      }
    }
  }
}
</style>

