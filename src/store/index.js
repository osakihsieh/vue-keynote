import Vue from 'vue'
import router from '@/router'
import Vuex from 'vuex'

Vue.use(Vuex)

const pageChanger = ({page = 0, pages = []}) => {
  const name = pages[page]
  return router.push({name})
}

export default new Vuex.Store({
  state: {
    page: 0,
    pages: []
  },

  mutations: {
    PAGES (state, payload) {
      state.pages = payload
    },
    WRITE (state, payload) {
      state.page = payload
    },
    NEXT (state) {
      state.page++
      const { page, pages } = state
      return pageChanger({page, pages})
    },
    LAST (state) {
      state.page--
      const { page, pages } = state
      return pageChanger({page, pages})
    }
  },

  actions: {
    onFetch({commit}, {pages}) {
      commit('PAGES', pages)
    },
    setPage({commit}, {name, pages}) {
      const index = pages.indexOf(name)
      if(index >= 0) return commit('WRITE', index)
    },
    onNext({commit, state, getters}, {pages}) {
      if(state.page >= getters.totalPage - 1) return router.push({name: pages[0]})
      commit('NEXT')
    },
    onLast({commit, state}) {
      if(state.page <= 0) return
      commit('LAST')
    }
  },

  getters: {
    totalPage: state => {
      const { length } = state.pages
      return length
    }
  }
})
