export const state = () => ({
  singlePageData: {
    home_page: null,
  },
  navigation: null,
})

export const actions = {
  async GET_PAGE_DATA({ commit }, { pageType, uid }) {
    console.log(pageType, 'pageType');
    try {
      let doc = {}
      const result = uid ? await this.$prismic.api.getByUID(`${pageType}`, `${uid}`) : await this.$prismic.api.getSingle(`${pageType}`)
      console.log(result, 'result')
      doc = result.data
      if (doc && uid) {
        commit('SET_PROJECT_PAGE_DATA', { data: doc, uid });
        return;
      }
      if (doc && !uid) {
        commit('SET_SINGLE_PAGE_DATA', { data: doc, pageType });
        return;
      }
      console.error('unable to retrieve pageData:', pageType, uid);
      return doc
    } catch (err) {
      console.error('error retrieving single page data:', { err, pageType })
    }
  },

  async GET_NAVIGATION({ commit }) {
    try {
      let doc = {}
      const result = await this.$prismic.api.getSingle('header')
      doc = result.data

      if (doc) {
        commit('SET_NAVIGATION', { data: doc })
      }

    } catch (err) {
      console.error('error retrieving main navigation text', { err })
    }
  }
}

export const mutations = {
  SET_SINGLE_PAGE_DATA(state, { data, pageType }) {
    console.log(pageType, data, 'llds')
    state.singlePageData[`${pageType}`] = data
  },

  SET_NAVIGATION(state, { data }) {
    state.navigation = data
  },
}

export const getters = {
  homePageData: state => {
    if (!state.singlePageData.home_page) { return null }

    return state.singlePageData.home_page
  },
  navigationData: state => {
    if (!state.navigation) { return null }

    return state.navigation
  }
}
