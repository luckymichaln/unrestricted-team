<template>
  <header class="navigation">
    <div class="container">
      <ul class="navigation-list">
        <li class="list-el list-el--logo">
          <prismic-link :field="navigationData.navigation[0]">
          <img :src="navigationData.logo.url" alt="unrestricted team logotype"/>
          </prismic-link>
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
}
</script>

<style lang="scss">
  .navigation {
    /* background: white; */
    /* border-bottom: 1px solid black; */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    color: white;
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