/* eslint-disable eqeqeq */
/* eslint-disable no-console */
export default function ({ store, route, redirect }) {
  if (
    (route.fullPath == '/login' || route.fullPath == '/register') &&
    store.state.authenticated
  ) {
    console.log(route.fullPath)
    return redirect('/')
  } else {
    console.log(route.fullPath)
    console.log(store.state.authenticated)
  }
}
