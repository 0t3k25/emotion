<template>
  <top_main />
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import top from "~/components/top.vue";
import top_main from "~/components/top_main.vue";

@Component({
  components: {
    top,
    top_main,
  },
})
export default class home extends Vue {
  mounted() {}
}
</script>

<style scoped></style>
