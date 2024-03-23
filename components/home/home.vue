<template>
  <div class="home">
    <div class="hero-image-box section-accent section-accent--light">
      <img
        :src="data.hero_image.url"
        :alt="data.hero_image.alt"
        class="hero-image"
      />
    </div>
    <div
      v-for="(slice, index) in data.slices"
      :key="index"
    >
      <mission v-if="slice.slice_type === 'mission'" :data="slice" />
      <partners v-if="slice.slice_type === 'sponsors'" :data="slice" />
      <team v-if="slice.slice_type === 'team'" :data="slice" />
    </div>
  </div>
</template>

<script>
  import mission from '~/components/slices/mission/mission';
  import partners from '~/components/slices/partners/partners';
  import team from '~/components/slices/team/team';

  export default {
    props: {
      data: {
        type: Object,
        default: () => {}
      },
    },

    mounted() {
      console.dir(this.data)
    },

    components: {
      mission,
      partners,
      team
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
      height: 160px;
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

    .text strong {
      text-decoration-color: rgb(88 76 41 / 76%);
    }
  }

  .heading {
    position: relative;
    text-align: center;
    margin-bottom: 80px;
    /* mix-blend-mode: difference; */

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
      letter-spacing: 13px;
      font-weight: 600;
    }
  }

  .text,
  .text p {
    font-size: 16px;
    line-height: 26px;

    .underline,
    b,
    strong {
      position: relative;
      text-decoration: underline;
      font-style: none;
      text-underline-offset: -0.3em;
      text-decoration-thickness: 0.8em;
      text-decoration-color: rgb(255 221 119 / 25%);
      text-decoration-skip-ink: none;
      text-decoration-skip: none;
    }

    em {
      font-style: italic;
    }

    &--center {
      text-align: center;
    }
    &--boxed {
      margin: 0 auto;
      width: 80%;
    }
  }

  .home-section {
    padding: 180px 0;
  }

  .logotypes {
    display: flex;
    flex-wrap: wrap;
    margin: 120px auto 80px;
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