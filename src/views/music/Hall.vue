<template>
  <div class="hall">
    <music-top></music-top>
    <!-- 轮播图 -->
    <div class="swipe"><img :src="$imgsrc + 'swipe.png'" /></div>
    <!-- 每周热歌 -->
    <div class="hot">
      <div class="title">
        <span class="name">每周热歌 </span>
        <i class="iconfont">&#xe61f;</i>
      </div>
      <div class="hot_el">
        <ul>
          <li v-for="(item, i) in 5" :key="i">
            <div
              class="imgs"
              :style="{ backgroundImage: 'url(' + $imgsrc + 'hot.png)' }"
            ></div>
            <p class="name">歌曲名称歌曲名称歌曲名称歌曲名称</p>
            <p class="author">歌手歌手歌手歌手歌手歌手</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 精选Mv -->
    <div class="MV">
      <div class="title">
        <span class="name">精选MV</span>
        <i class="iconfont">&#xe61f;</i>
      </div>
      <img :src="$imgsrc + 'MV.png'" v-for="(imgs, j) in 3" :key="j" />
    </div>
    <!-- 底部播放器 -->
    <play></play>
  </div>
</template>
<script>
import MusicTop from '../../components/MusicTop.vue';
import Play from "../../components/Play.vue";
export default {
  components: {
    Play,
    MusicTop,
  },
};
</script>

<style scoped lang="less">
.hall {
  color: #333333;
  .swipe {
    padding: 0 20px;
    img {
      width: 100%;
    }
  }
  //   每周热歌
  .hot {
    margin-top: 20px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      margin-bottom: 16px;
      .name {
        font-size: 16px;
        font-weight: 600;
      }
    }
    .hot_el {
      ul {
        box-sizing: border-box;
        overflow-y: hidden;
        white-space: nowrap;
        li {
          display: inline-block;
          margin-left: 20px;
          .imgs {
            background-position: 50%;
            background-size: cover;
            background-color: #ddd;
            width: 78px;
            height: 94px;
          }
          .name {
            font-size: 12px;
            font-weight: 500;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            width: 6em;
            line-height: 17px;
          }
          .author {
            font-size: 12px;
            font-weight: 500;
            color: #c8c8c8;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            width: 6em;
            line-height: 17px;
          }
        }
      }
    }
  }
}
.MV {
  padding: 0 20px;
  margin-top: 24px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    .name {
      font-size: 16px;
      font-weight: 600;
    }
  }
  img {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>