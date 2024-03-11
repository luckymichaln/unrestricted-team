<template>
  <div>
    <navigation />
    <home
      :data="homePageData"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import home from '~/components/home/home';
import navigation from '~/components/navigation/navigation';

export default {
  async asyncData({ store }) {
    if (!store.getters['pages/homePageData']) {
      await store.dispatch('pages/GET_PAGE_DATA', { pageType: 'home_page' })
    }

    if (!store.getters['pages/navigation']) {
      await store.dispatch('pages/GET_NAVIGATION')
    }
  },

  computed: {
    ...mapGetters('pages', ['homePageData']),
  },

  components: {
    home,
    navigation
  }
}
</script>
