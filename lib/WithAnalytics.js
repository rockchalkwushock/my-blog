/* eslint-disable no-undef */

import { Component } from 'react'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import ReactGA from 'react-ga'

export default ComposedComponent =>
  class WithAnalytics extends Component {
    static async getInitialProps(ctx) {
      return loadGetInitialProps(ComposedComponent, ctx)
    }
    componentWillMount() {
      if (process.browser) ReactGA.initialize(process.env.GATRACKINGID)
    }
    componentDidMount() {
      const page = window.location.pathname
      ReactGA.set({ page })
      ReactGA.pageview(page)
    }
    render() {
      return <ComposedComponent {...this.props} />
    }
  }
