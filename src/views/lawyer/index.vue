<template>
  <div class="lawyer">
    <!-- 律师个人信息 -->
    <div class="lawyer_info">
      <div class="lawyer_face">
        <div
          class="face"
          :style="{ backgroundImage: 'url(' + $imgsrc + 'user.jpg)' }"
        ></div>
        <div class="btns">
          <!-- <img :src="$imgsrc + 'follow.png'" class="icon_follow" /> -->
          <button class="btn btn_blue">
            <i class="iconfont">&#xe607;</i>
            关注
          </button>
          <button class="btn">分享名片</button>
        </div>
      </div>
      <div class="lawyer_name">
        <span class="name">七七六</span>
        <div class="talent_bg">
          <span class="talent"
            ><img
              :src="$imgsrc + 'talent.png'"
              class="icon_talent"
            />认证达人</span
          >
        </div>
      </div>
      <div class="summary_data">
        <div class="summary_el" v-for="(item, i) in 3" :key="i">
          <span class="num">131</span>关注
        </div>
      </div>
      <hr />
      <div class="introduce">
        “全国律师行业创先争优先进个人，北京优秀知识产权律师”
      </div>
    </div>
    <!-- 身份信息 -->
    <div class="lawyer_other">
      <p class="title">专业身份</p>
      <div class="list">
        <div
          class="imgs"
          :style="{ backgroundImage: 'url(' + $imgsrc + 'icon1.png)' }"
        ></div>
        <div class="info">
          <p class="name">认证身份</p>
          <p class="msg">北京天达共和律师事务所</p>
        </div>
      </div>
      <div class="list">
        <div
          class="imgs"
          :style="{ backgroundImage: 'url(' + $imgsrc + 'icon2.png)' }"
        ></div>
        <div class="info">
          <p class="name">教育背景</p>
          <p class="msg">北京大学法学博士</p>
        </div>
      </div>
      <div class="list">
        <div
          class="imgs"
          :style="{ backgroundImage: 'url(' + $imgsrc + 'icon1.png)' }"
        ></div>
        <div class="info">
          <p class="name">认证身份</p>
          <p class="msg">北京天达共和律师事务所</p>
        </div>
      </div>
      <div class="list">
        <div
          class="imgs"
          :style="{ backgroundImage: 'url(' + $imgsrc + 'icon2.png)' }"
        ></div>
        <div class="info">
          <p class="name">教育背景</p>
          <p class="msg">北京大学法学博士</p>
        </div>
      </div>
    </div>
    <!-- 评论 -->
    <div class="lawyer_comment">
      <div class="flex">
        <div class="title">
          <span>法律咨询 136</span>
        </div>
        <div class="all">
          <span>查看全部 </span>
          <i class="iconfont">&#xe61f;</i>
        </div>
      </div>
      <div class="stars">
        <i class="iconfont yellow" v-for="(item, i) in 4" :key="i">&#xe642;</i>
        <i class="iconfont grey">&#xe642;</i>
        <span>4.0分</span>
      </div>
      <div class="list" v-for="(lists, j) in 3" :key="j">
        <div class="content">
          <p class="title">
            你好，这是标题标题标题标题标题标题标题标题标题标题标题标题标题标题
          </p>
          <p class="msg">
            这是具体案件内容具体案件内容具体案件内容具体案件内容具体案件内容具体案件内容
          </p>
        </div>
        <div class="flex">
          <div class="user_data">
            <div
              class="face"
              :style="{ backgroundImage: 'url(' + $imgsrc + 'user.jpg)' }"
            ></div>
            <span>匿名用户</span>
          </div>
          <div class="stars">
            <i class="iconfont yellow" v-for="(item, i) in 4" :key="i"
              >&#xe642;</i
            >
            <i class="iconfont grey">&#xe642;</i>
            <span>4.0分</span>
          </div>
        </div>
        <hr v-if="j < 2" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.lawyer {
  background-color: #3c94ff;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  // 律师个人信息
  .lawyer_info {
    padding: 0 20px 20px 20px;
    background-color: #eef7ff;
    margin-top: 30px;
    border-radius: 20px;

    .lawyer_face {
      position: relative;
      height: 80px;
      .face {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background-position: 50%;
        background-size: cover;
        background-color: #ddd;
        position: absolute;
        top: -30px;
        left: 0px;
      }
      .btns {
        position: absolute;
        right: 0px;
        top: 30px;
        .btn {
          font-size: 12px;
          border: none;
          padding: 8px 18px;
          border-radius: 20px;
          font-weight: 500;
          color: #2c7efe;
          background-color: #fff;
        }
        .iconfont {
          font-size: 12px;
        }
        .btn_blue {
          background-color: #2c7efe;
          color: #fff;
          margin-right: 20px;
        }
      }
    }
    .lawyer_name {
      margin-top: 16px;
      .name {
        font-size: 24px;
        font-weight: 500;
        vertical-align: middle;
      }
      .talent_bg {
        background-color: #191a14;
        display: inline-block;
        padding: 4px 6px;
        border-radius: 20px;
        margin-left: 10px;
        vertical-align: middle;
        .icon_talent {
          width: 16px;
          height: 16px;
          display: inline-block;
          vertical-align: bottom;
          margin-right: 2px;
        }
        .talent {
          font-size: 12px;
          background-image: linear-gradient(to right, #a19e97, #e9e8e4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
    .summary_data {
      margin: 20px 0;
      font-size: 0;
      .summary_el {
        display: inline-block;
        margin-right: 16px;
        font-size: 12px;
        font-weight: 500;
        color: #676c70;
        .num {
          display: inline-block;
          color: #000207;
        }
      }
    }
    hr {
      background-color: #e9ecf3;
      border: none;
      height: 2px;
    }
    .introduce {
      margin-top: 20px;
    }
  }
  //   律师其他标签
  .lawyer_other {
    padding: 0 20px 20px 20px;
    background-color: #fff;
    margin-top: 20px;
    border-radius: 20px;
    padding-top: 10px;
    .title {
      font-size: 18px;
      font-weight: 500;
      padding: 10px 0;
    }
    .list {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      height: 60px;
      .imgs {
        height: 30px;
        width: 30px;
        background-size: cover;
        background-position: 50%;
        margin-right: 20px;
      }
      .info {
        .name {
          font-weight: 500;
          font-size: 16px;
        }
        .msg {
          font-size: 12px;
          color: #b1b1b1;
          margin-top: 6px;
        }
      }
    }
  }
  //   评论区
  .lawyer_comment {
    padding: 0 20px 20px 20px;
    background-color: #fff;
    margin-top: 20px;
    border-radius: 20px;
    .flex {
      display: flex;
      vertical-align: middle;
      align-items: center;
      justify-content: space-between;
      padding-top: 10px;

      .title {
        font-size: 18px;
        font-weight: 500;
        line-height: 40px;
      }
      .all {
        span {
          color: #9e9e9e;
        }
        .iconfont {
          color: #cacaca;
          font-size: 12px;
        }
      }
    }
    .stars {
      .yellow {
        color: #fdb723;
      }
      .grey {
        color: #e9edf0;
      }
      span {
        padding-left: 10px;
      }
    }
    .list {
      .content {
        padding: 16px 0;
        .title {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-weight: 500;
          line-height: 32px;
          font-size: 16px;
        }
        .msg {
          color: #9a9a9a;
          line-height: 22px;
          font-size: 14px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      .flex {
        display: flex;
        vertical-align: middle;
        align-items: center;
        justify-content: space-between;
        padding-top: 0px;
        .user_data {
          .face {
            background-position: 50%;
            background-size: cover;
            width: 28px;
            height: 28px;
            display: inline-block;
            margin-right: 10px;
            border-radius: 50%;
            background-color: #ddd;
            vertical-align: middle;
          }
          span {
            font-weight: 500;
            vertical-align: middle;
          }
        }
      }
      hr {
        background-color: #ededed;
        border: none;
        height: 2px;
        margin: 20px 0 10px 0;
      }
    }
  }
}
</style>