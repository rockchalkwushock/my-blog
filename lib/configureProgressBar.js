import Router from 'next/router'
import NProgress from 'nprogress'

export default () => {
  Router.onRouteChangeStart = () => NProgress.start()
  Router.onRouteChangeComplete = () => NProgress.done()
  Router.onRouteChangeError = () => NProgress.done()
}
