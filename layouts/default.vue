<template>
  <v-app class="content">
    <top></top>
    <nuxt />
    <bottom />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import top from "~/components/top.vue";
import bottom from "~/components/footer.vue";

@Component({
  components: {
    top,
    bottom,
  },
})
export default class home extends Vue {
  mounted() {}
}
</script>

<style scoped></style>
