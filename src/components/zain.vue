<template>
  <div>
    <h1>my name is zain</h1>
    <sufyan />
    <numan />
  </div>
</template>

<script>
import sufyan from "./sufyan2.vue";
import numan from "./numan.vue";

export default {
  name: "zain",
  components: {
    sufyan,
    numan,
  },
};
</script>

<style>
h1 {
  background-color: aqua;
}
</style>