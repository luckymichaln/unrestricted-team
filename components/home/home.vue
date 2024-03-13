<template>
  <div class="home">
    <div class="hero-image-box section-accent section-accent--light">
      <img
        :src="data.hero_image.url"
        :alt="data.hero_image.alt"
        class="hero-image"
      />
    </div>
    <section class="home-section mission">
      <div class="container">
        <h1 class="heading heading--big">Nasza misja</h1>
        <p class="text text-box">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
    <section class="home-section partners section-accent section-accent--dark">
      <div class="container">
        <h1 class="heading heading--big">Partnerzy</h1>
        <p class="text text-box">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ul class="logotypes">
          <li>Logo 1</li>
          <li>Logo 2</li>
          <li>Logo 3</li>
          <li>Logo 4</li>
          <li>Logo 5</li>
          <li>Logo 6</li>
          <li>Logo 7</li>
          <li>Logo 8</li>
        </ul>
      </div>
    </section>
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
  @import '~/assets/styles/variables/colors';

  .hero-image {
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 40%;

    &-box {
      height: 40vw;
      max-height: 600px;
      z-index: -1;
    }
  }

  .section-accent {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: -83px;
      left: -20px;
      z-index: 0;
      display: block;
      width: 115%;
      height: 120px;
      transform: rotate(-2deg);
      z-index: 0;
    }
  }

  .section-accent--light {
    color: $color-text;
    background-color: $color-background;

    &::before {
      background-color: $color-background;
    }
  }

  .section-accent--dark {
    color: $color-background;
    background-color: $color-text;

    &::before {
      background-color: $color-text;
    }
  }

  .heading {
    position: relative;
    text-align: center;
    margin-bottom: 80px;

    &::before {
      content: '';
      display: block;
      height: 100px;
      width: 100px;
      position: absolute;
      top: -74px;
      left: calc(50% - (450px / 2));
      border: 2px solid black;
      transform: rotate(45deg);
      opacity: .1;
    }

    &--big {
      font-size: 40px;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 600;
    }
  }

  .text {
    font-size: 16px;
    line-height: 26px;
  }

  .text-box {
    margin: 0 auto;
    width: 80%;
  }

  .home-section {
    padding: 180px 0;
  }

  .logotypes {
    display: flex;
    flex-wrap: wrap;
    margin: 80px auto;
    width: 100%;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: calc((100% / 4) - 80px);
      text-align: center;
      border: 1px solid $color-background;
      border-radius: 4px;
      margin: 40px;
      height: 100px;
    }
  }
</style>