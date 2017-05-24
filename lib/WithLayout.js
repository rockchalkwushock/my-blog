import { Component } from 'react'
import PropTypes from 'prop-types'
import { loadGetInitialProps } from 'next/dist/lib/utils'

import { FlexContainer, Footer, Header, Meta } from '../components'
import configureProgressBar from './configureProgressBar'

export default ComposedComponent =>
  class WithLayout extends Component {
    static propTypes = {
      url: PropTypes.shape({
        pathname: PropTypes.string.isRequired
      }).isRequired
    }
    static async getInitialProps(ctx) {
      return loadGetInitialProps(ComposedComponent, ctx)
    }
    componentDidMount() {
      configureProgressBar()
    }
    render() {
      return (
        <FlexContainer>
          <Meta />
          <Header url={this.props.url.pathname} />
          <ComposedComponent {...this.props} />
          <Footer />
        </FlexContainer>
      )
    }
  }
