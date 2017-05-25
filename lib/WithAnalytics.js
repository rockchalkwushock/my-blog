/* eslint-disable no-undef */

import { Component } from 'react'
import { loadGetInitialProps } from 'next/dist/lib/utils'

// must be in CJS require
const ReactGA = require('react-ga')

export default ComposedComponent =>
  class WithAnalytics extends Component {
    static async getInitialProps(ctx) {
      return loadGetInitialProps(ComposedComponent, ctx)
    }
    componentWillMount() {
      // must look for browser process.
      if (process.browser) ReactGA.initialize(GATRACKINGID)
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
