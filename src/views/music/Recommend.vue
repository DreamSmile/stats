<template>
  <div class="recommend">
    <music-top></music-top>
    <div class="main">
      <div class="list" v-for="(item, i) in 3" :key="i">
        <div class="details">
          <div class="photo">
            <div
              class="imgs"
              :style="{ backgroundImage: 'url(' + $imgsrc + 'recommend.png)' }"
            ></div>
            <img class="play_icon" :src="$imgsrc + 'play_icon.png'" />
          </div>
          <div class="info">
            <h2 class="name">五月天专辑精选-梦一场</h2>
            <p class="author">五月天</p>
            <p class="msg">
              这张专辑于2020.10.15在本音乐平台，进行独
              家发行让听众朋友们感受ALLINE对生活对海洋 的热爱。
            </p>
            <div class="users">
              <div
                v-for="(face, j) in 5"
                :key="j"
                class="faces"
                :style="{ backgroundImage: 'url(' + $imgsrc + 'user.jpg)' }"
              ></div>
              <span class="like">等2333人喜欢</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="roll">
      <ul>
        <!-- <li
          v-for="(item, i) in 6"
          :key="i"
          :class="['lis', { isSelect: i == sel }]"
          :style="{ height: i < 4 ? (i + 1) * 4 + 'px' : (i - 1) * 4 + 'px' }"
        ></li> -->
        <li
          v-for="(item, i) in 11"
          :key="i"
          class="lis"
          :style="{ height: Math.ceil(Math.random() * 20) + 'px' }"
        ></li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="less">
.recommend {
  .main {
    height: calc(100vh - 100px);
    color: #333;
    overflow-y: auto;
    white-space: nowrap;
    box-sizing: border-box;
    .list {
      padding: 0 15px;
      display: flex;
      flex-direction: column;
      width: 300px;
      display: inline-block;
      height: 100%;
      .details {
        height: 100%;
        display: flex;
        flex-direction: column;
        .photo {
          position: relative;
          flex: 1;
          height: 100%;
          .imgs {
            background-position: 50%;
            background-size: cover;
            background-color: #ddd;
            width: 100%;
            height: 100%;
          }
          .play_icon {
            position: absolute;
            height: 60px;
            width: 60px;
            right: -22px;
            bottom: -22px;
          }
        }
        .info {
          .name {
            font-size: 16px;
            font-weight: 600;
            margin-top: 20px;
          }
          .author {
            color: #aaaaaa;
            margin: 6px 0 15px 0;
          }

          .msg {
            color: #c8c8c8;
            white-space: normal;
          }
          .users {
            margin: 26px 0px 60px 0;
            .faces {
              background-position: 50%;
              background-size: cover;
              width: 26px;
              height: 26px;
              background-color: #ddd;
              border-radius: 50%;
              display: inline-block;
              margin-left: -8px;
            }
            .faces:first-child {
              margin-left: 0;
            }
            .like {
              color: #c8c8c8;
              font-size: 12px;
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
  .roll {
    margin: 0 auto;
    position: sticky;
    bottom: 20px;
    left: 0;
    right: 0;
    width: 220px;
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .lis {
        width: 4px;
        border-radius: 8px;
        background-color: #c8c8c8;
        max-height: 30px;
      }
      .sel {
        background-color: #ff2593;
      }
    }
  }
}
</style>
<script>
import MusicTop from "../../components/MusicTop.vue";
import Play from "../../components/Play.vue";
export default {
  data() {
    return {
      sel: 1,
    };
  },
  components: { Play, MusicTop },
};
</script>