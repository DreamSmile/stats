<template>
  <div class="like">
    <music-top></music-top>
    <div class="main">
      <!-- 歌手分类 -->
      <div class="sort">
        <div class="title">
          <h2>歌手分类</h2>
          <i class="iconfont">&#xe61f;</i>
        </div>
        <div class="singer">
          <div class="list" v-for="(item, i) in 4" :key="i">
            <div
              class="imgs"
              :style="{ backgroundImage: 'url(' + $imgsrc + 'hot.png)' }"
            ></div>
            <p>肖战</p>
          </div>
        </div>
      </div>
      <!-- 歌单列表 -->
      <div class="song_list">
        <div class="title">
          <h2>歌单列表</h2>
          <i class="iconfont">&#xe61f;</i>
        </div>
        <div class="song">
          <div class="list" v-for="(item, i) in 4" :key="i">
            <div class="info">
              <div
                class="imgs"
                :style="{ backgroundImage: 'url(' + $imgsrc + 'album.png)' }"
              ></div>
              <div class="details">
                <p class="name">你的喜欢</p>
                <div class="num">101首</div>
              </div>
            </div>
            <i class="iconfont">&#xe61d;</i>
          </div>
        </div>
      </div>
    </div>
    <play></play>
  </div>
</template>
<style scoped lang="less">
.like {
  .main {
    min-height: calc(100vh - 143px);
    color: #333;
    padding: 0 20px;
    .sort {
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        h2 {
          font-size: 16px;
          font-weight: 600;
        }
        .iconfont {
          font-size: 12px;
        }
      }
      .singer {
        display: flex;
        justify-content: space-between;
        .list {
          width: 22%;
          text-align: center;
          .imgs {
            background-position: 50%;
            background-size: cover;
            width: 100%;
            height: 114px;
            background-color: #ddd;
            border-radius: 8px;
          }
          p {
            color: #aaa;
            margin-top: 10px;
          }
        }
      }
    }
    .song_list {
      margin-top: 20px;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        h2 {
          font-size: 16px;
          font-weight: 600;
        }
        .iconfont {
          font-size: 12px;
        }
      }
      .song {
        .list {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          .info {
            box-sizing: border-box;
            .imgs {
              background-position: 50%;
              background-size: cover;
              width: 52px;
              height: 74px;
              background-color: #ddd;
              border-radius: 8px;
              display: inline-block;
              margin-right: 8px;
            }
            .details {
              display: inline-block;
              box-sizing: border-box;
              vertical-align: super;
              .name {
                font-weight: 500;
              }
              .num {
                margin-top: 4px;
                font-size: 12px;
                color: #c8c8c8;
              }
            }
          }
          .iconfont {
            font-size: 24px;
            color: #333 !important;
          }
        }
      }
    }
  }
}
</style>
<script>
import MusicTop from "../../components/MusicTop.vue";
import Play from "../../components/Play.vue";
export default {
  components: { MusicTop, Play },
};
</script>
