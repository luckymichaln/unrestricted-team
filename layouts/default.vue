<template>
  <div class="mighty-wrapper">
    <transition name="page" mode="out-in">
      <nuxt />
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .page-enter-active,
  .page-leave-active {
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    visibility: hidden;
    z-index: 200;
  }
</style>