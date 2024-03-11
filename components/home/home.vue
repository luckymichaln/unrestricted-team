<template>
  <div>
    <div class="hero-image-box">
      <img
        :src="data.hero_image.url"
        :alt="data.hero_image.alt"
        class="hero-image"
      />
    </div>
    <div class="container">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => {}
      },
    },

    mounted() {
      console.dir(this.data)
    }
  }
</script>

<style lang="scss">
  .hero-image {
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

    &-box {
      height: 30vw;
      max-height: 600px;
    }
  }
</style>