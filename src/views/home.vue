<template>
  <div class="home">
    <div>home</div>
    <div>test</div>
    <van-count-down :time="time" />
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const time = ref(30 * 60 * 60 * 1000);

    const count = ref(0);
    return {
      count,
      time,
    };
  },
});
</script>
<style lang="scss" scoped>
.home {
  display: flex;
}
</style>
