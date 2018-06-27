import Vue from 'vue'
import vuex from 'vuex'

import people from './modules/people'

Vue.use(vuex)

const store = new vuex.Store({
  modules: {
    people
  },
  strict: true
})

export default store
