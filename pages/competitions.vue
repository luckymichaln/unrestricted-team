<template>
  <div>
    <navigation />
    <competitions />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import navigation from '~/components/navigation/navigation';
import competitions from '~/components/competitions/competitions';

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
    competitions,
    navigation
  }
}
</script>

<style>

</style>