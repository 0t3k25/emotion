<template>
  <div class="main">
    <template>
      <v-card class="mx-auto text-center" max-width="600" height="480" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline ">
              <h1>今日もトレーニングしたことを世界に伝えよう</h1>
            </div>
            <v-list-item-title class="headline pt-5 mb-1">
              <h1>マッスルツイート</h1>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-btn elevation="2" x-large @click="say(hi)"
          ><h1>お疲れサマンサ</h1></v-btn
        >
        <p>※ 押すと音声が流れます</p>
        <v-card-text>
          <div class="text-center">
            <v-chip color="primary" dark rounded column link
              >マッスルツイートする</v-chip
            >

            <v-chip color="primary" dark rounded column link
              >マスツイをシェアする</v-chip
            >
          </div>
        </v-card-text>
      </v-card>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import sound from "~/components/common/audio";

@Component({
  components: {},
})
export default class top_main extends Vue {
  data() {
    message: "";
  }
  sound() {
    var audio_obj;
    audio_obj = new Audio(
      "https://storage.googleapis.com/my-kutu-data/muscle/otu.mp3"
    );
    return audio_obj.play();
  }
  say(message: string) {
    return console.log("hihi");
  }
}
</script>

<style scoped>
.main {
  padding: 40px 50px 40px 50px;
}
</style>
