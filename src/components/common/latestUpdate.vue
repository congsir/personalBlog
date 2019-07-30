<template>
  <div class="wrapper">
    <div class="card">
      <div class="subTitle">
        最近更新
      </div>
      <div class="list">
        <ul>
          <li><a href="#">[个人博客空间申请]金牛云服，这里就有；甲山路的福利</a></li>
          <li><a href="#">[个人博客空间申请]金牛云服，这里就有；甲山路的福利</a></li>
          <li><a href="#">[个人博客空间申请]金牛云服，这里就有；甲山路的福利</a></li>
          <li><a href="#">[个人博客空间申请]金牛云服，这里就有；甲山路的福利</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
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
    .list {
      font-size: 12px;
      li {
            font-size: 12px;
            line-height: 30px;
            margin-bottom: 12px;
            display: block;
            border-radius: 4px;
            background: #f6f6f6;
            padding: 4px 12px 4px 30px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            position: relative;
            transition: all .2s ease;
            &:before {
                position: absolute;
                content: "";
                width: 3px;
                height: 3px;
                background: #000;
                border-radius: 10px;
                left: 15px;
                top: 20px;
            }
            &:hover{
                box-shadow: 0 0 16px rgba(0,0,0,.2);
            }
            a{
                color: #222;
            }
      }
    }
  }
}
</style>
