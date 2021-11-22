const store = new Vuex.Store({
  modules: {
    account: {
      name: true,
      state: () => ({}),
      getters: {
        isAdmin(){} // getters['account/isAdmin']
      },
      actions: {
        login() {}  // dispatch('account/login')
      },
      mutations: {
        login() {}  // commit('account/login')
      },
      // 嵌套模块
      modules: {
        myPage: {
          state: () => ({}),
          getters: {
            profile() {}  // getters['account/profile']
          }
        },
        posts: {
          namespaced: true,
          state: () => ({}),
          getters: {
            popular(){} // getters['account/posts/popular']
          }
        }
      }
    },
  }
})



辅助函数
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')

export default {
  computed: {
    // 在 `some/nested/module` 中查找
    ...mapState({
      a: state => state.a,
      b: state => state.b
    })
  },
  methods: {
    // 在 `some/nested/module` 中查找
    ...mapActions([
      'foo',
      'bar'
    ])
  }
}