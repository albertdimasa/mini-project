import USER_SIGNUP from '~/gql/mutations/UserSignUp'
import USER_SIGNIN from '~/gql/queries/UserSignIn'

export const state = () => ({
  user: [],
  token: {},
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  // SET_TOKEN(state, token) {
  //   state.token = token
  // },
}

export const actions = {
  async SIGN_UP({ commit }, payload) {
    const apollo = this.app.apolloProvider.defaultClient

    try {
      await apollo.mutate({
        mutation: USER_SIGNUP,
        variables: {
          name: payload.name,
          phone_number: payload.phone_number,
          email: payload.email,
          password: payload.password,
        },
      })
      this.$router.push({ path: 'login' })
    } catch (e) {
      alert('Sign Up Error', e)
      throw e
    }
  },
  async SIGN_IN({ commit, dispatch }, payload) {
    const apollo = this.app.apolloProvider.defaultClient

    try {
      // eslint-disable-next-line no-var
      var res = await apollo.query({
        query: USER_SIGNIN,
        variables: {
          email: payload.email,
          password: payload.password,
        },
      })

      // eslint-disable-next-line eqeqeq
      if (res.data.book_barter_users != '') {
        commit('SET_USER', res.data.book_barter_users[0])
        this.$router.push({ path: '/' })
      } else {
        alert('Akun tidak terdaftar')
      }
    } catch (e) {
      alert('Login Error', e)
      throw e
    }
  },
  SIGN_OUT({ commit }) {
    commit('SET_USER', '')
  },
}