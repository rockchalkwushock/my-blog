import { Component } from 'react'
import PropTypes from 'prop-types'
import { loadGetInitialProps } from 'next/dist/lib/utils'

import { FlexContainer, Meta } from '../components'

export default ComposedComponent =>
	class WithLayout extends Component {
		static propTypes = {
			url: PropTypes.shape({
				pathname: PropTypes.string.isRequired,
			}).isRequired,
		}
		static async getInitialProps(ctx) {
			return loadGetInitialProps(ComposedComponent, ctx)
		}
		state = {}
		render() {
			return (
				<FlexContainer>
					<Meta />
					<ComposedComponent {...this.props} />
				</FlexContainer>
			)
		}
	}
