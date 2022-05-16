import USER_SIGNUP from '~/gql/mutations/UserSignUp'
import USER_SIGNIN from '~/gql/queries/UserSignIn'
import ALL_BOOK from '~/gql/queries/AllBook'
import BARTER_BOOK from '~/gql/mutations/BarterBook'

export const state = () => ({
  user: [],
  authenticated: false,
  book: [],
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
    state.authenticated = !state.authenticated
  },
  SET_BOOK(state, slug) {
    state.book = slug
  },
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

  async SIGN_IN({ commit }, payload) {
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

  async GET_BOOK({ commit }, slug) {
    const apollo = this.app.apolloProvider.defaultClient

    // Get All Books
    try {
      // eslint-disable-next-line no-var
      var res = await apollo.query({
        query: ALL_BOOK,
      })
    } catch (e) {
      alert('Get book error', e)
      throw e
    }

    // Find Book by Slug
    const aBook = res.data.book_barter_books.find(
      (item) =>
        item.title
          .toLowerCase() // LowerCase
          .replace(/\s+/g, '-') // space to -
          .replace(/&/g, `-and-`) // & to and
          .replace(/--/g, `-`) === slug
    )
    commit('SET_BOOK', aBook)
  },

  async USER_BARTER({ commit }, payload) {
    const apollo = this.app.apolloProvider.defaultClient

    try {
      await apollo.mutate({
        mutation: BARTER_BOOK,
        variables: {
          book_id: payload.book_id,
          peminjam_id: payload.peminjam_id,
          date: payload.date,
          alasan: payload.alasan,
        },
      })
      this.$router.push('/')
    } catch (e) {
      alert('Barter Book error', e)
      throw e
    }
  },
}
