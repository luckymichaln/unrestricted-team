export const state = () => ({
  singlePageData: {
    home_page: null,
  },
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
}

export const mutations = {
  SET_SINGLE_PAGE_DATA(state, { data, pageType }) {
    console.log('SINGLE DATA', data, pageType)
    state.singlePageData[`${pageType}`] = data
  },
}

export const getters = {
  homePageData: state => {
    if (!state.singlePageData.home_page) { return null }

    return {
      ...state.singlePageData.home_page,
    }
  },
}
