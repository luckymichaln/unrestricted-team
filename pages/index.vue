<template>
  <home
    :data="homePageData"
  />
</template>

<script>

import { mapGetters } from 'vuex';
import home from '~/components/home/home';

export default {
  async asyncData({ store }) {
    if (!store.getters['pages/homePageData']) {
      await store.dispatch('pages/GET_PAGE_DATA', { pageType: 'home_page' })
    }
  },

  computed: {
    ...mapGetters('pages', ['homePageData']),
  },

  components: {
    home
  }
}
</script>
