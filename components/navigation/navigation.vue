<template>
  <header class="navigation">
    <div class="container">
      <ul class="navigation-list">
        <li class="list-el list-el--logo">
          <nuxt-link to="/">
            <img
              :src="navigationData.logo_light.url"
              alt="unrestricted team logotype"
              class="logo logo--light"
            />
            <img
              :src="navigationData.logo_dark.url"
              alt="unrestricted team logotype"
              class="logo logo--dark"
            />
          </nuxt-link>
        </li>
        <li
          class="list-el"
          v-for="el in navigationData.navigation.slice(1)"
          :key="el.link_label"
        >
          <prismic-link :field="el.navigation_link">
            {{ el.link_label }}
          </prismic-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('pages', ['navigationData']),
  },

   data() {
    return {
      savedScroll: 0,
      triggerDownValue: 81,
      triggerUpValue: 2,
    }
  },

  methods: {
    stickyNav() {
      const body = document.getElementsByClassName('mighty-wrapper')[0];
      const navigation = document.getElementsByClassName('navigation')[0]
      const sT = window.pageYOffset || document.documentElement.scrollTop;

      if (sT === 0) {
        navigation.classList.remove('navigation--sticky');
        navigation.classList.remove('navigation--ready');
        navigation.classList.remove('navigation--visible');
      }

      if (window.pageYOffset > this.triggerDownValue) {

        if (!body.classList.contains('stamp-top') && !navigation.classList.contains('navigation--sticky')) {
          body.classList.add('stamp-top');
          navigation.classList.add('navigation--sticky');

          setTimeout(function () {
            navigation.classList.add('navigation--ready');
          }, 10)
        }

        if (sT > this.savedScroll) {
          navigation.classList.remove('navigation--visible');
        } else {
          navigation.classList.add('navigation--visible');
        }

      } if (window.pageYOffset <= this.triggerUpValue) {
        body.classList.remove('stamp-top');
        navigation.classList.remove('navigation--sticky', 'navigation--ready');
      }

      this.savedScroll = sT <= 0 ? 0 : sT;
    }
  },

  mounted() {
    if (window) {
      window.addEventListener('scroll', this.stickyNav);
    }
  }
}
</script>

<style lang="scss">
  .navigation {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    color: white;
    transition: color .2s ease-out, background-color .2s ease-out;

    .logo--dark {
      display: none;
    }

    .logo--light {
      display: flex;
    }

    &--sticky {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000099;
      transform: translateY(-160px);
      background-color: white;
      box-shadow: 0px 16px 32px rgba(33, 78, 146, 0.08), 0px 2px 8px rgba(33, 78, 146, 0.1);
    }

    &--ready {
      transition: transform .4s;
    }

    &--visible {
      background: white;
      border-bottom: 1px solid black;
      color: black;
      transform: translateY(0);

      .logo--light {
        display: none;
      }

      .logo--dark {
        display: flex;
      }
    }
  }

  .navigation-list {
    display: flex;
    justify-content: center;
    padding: 16px 0;
  }

  .list-el {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:not(:first-child) {
      margin-left: 24px;
    }

    &--logo {
      width: 100%;
      max-width: 160px;
      margin-right: auto;
    }
  }
</style>