<template>
  <section class="home-section team section-accent section-accent--dark" id="team">
    <div class="container">
      <prismic-rich-text class="heading heading--big" :field="data.primary.heading" />
      <prismic-rich-text class="text text--boxed text--center" :field="data.primary.description" />
      <ul class="team-members">
        <li
          v-for="(item, index) in data.items"
          :key="index"
          class="team-member"
        >
          <div class="team-member-image">
            <img :src="item.member_image.url" :alt="item.member_image.alt" />
          </div>
          <div class="team-member-text">
            <p class="team-member-name">{{ item.member_name }}</p>
            <prismic-rich-text :field="item.member_text" />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
        type: Object,
        default: () => {}
      },
  }
}
</script>

<style lang="scss">
  .team-members {
    display: flex;
    flex-direction: column;
    margin-top: 180px;
  }

  .team-member {
    position: relative;
    display: flex;
    padding: 0px 20px 100px 20px;
    margin: 0 auto 100px;
    /* width: 80%; */

    &:nth-child(2n) {
      flex-direction: row-reverse;

      .team-member-image {
        margin: 0 0 0 40px;
      }
    }

    &:not(:last-child) {
      border-bottom: 1px solid #303030;
    }

    &-name {
      margin: 20px 0 0 40px;
      font-size: 28px;
      font-weight: 600;
      line-height: 1.8;
      letter-spacing: 3px;
      text-transform: uppercase;
      /* mix-blend-mode: difference; */
      /* background: -webkit-linear-gradient(2deg, #00faff3b, #ff00bc63 70%); */
      /* -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; */
    }

    &-image {
      position: relative;
      flex-shrink: 0;
      width: 300px;
      height: 300px;
      border-radius: 10px;
      margin-right: 40px;

      &::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        display: block;
        height: 100%;
        width: 100%;
        background: linear-gradient(39deg, #ff00bc63, #00faff3b 70%);
      }

      img {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &-text {
      div {
        display: flex;
        height: 100%;
        padding: 0px 40px 40px;
      }

      div p {
        display: flex;
        /* align-items: center;
        justify-content: center; */
        height: 100%;
        width: 100%;
        margin-top: 20px;
        font-size: 16px;
        line-height: 26px;
        color: rgba(#fff, .75)
      }
    }
  }
</style>