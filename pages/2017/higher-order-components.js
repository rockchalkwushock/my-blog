import Head from 'next/head'
import Highlight from 'react-highlight'

import page from '../../lib'
import { Meta, P, SubTitle, Title } from '../../components'

export default page(() => (
  <div style={{ padding: '2em 1.5em 2em 1.5em' }}>
    <Meta date="2017-05-23" />
    <Head>
      <title>Higher Order Components</title>
    </Head>
    <Title>
      Higher Order Components
    </Title>
    <SubTitle>Using HOC's to make life easier</SubTitle>
    <P>
      No lie I love me some Higher Order Components(HOC)! It makes life so much easier to be able to apply whatever
      business logic, layout, styling, data, etc to components by wrapping them in an HOC. This very blog uses 2 HOC's.
      One for setting the global layout of the application & another for applying Google Analytics throughout all views.
    </P>
    <P>
      In this short tutorial we will use create-next-app to spin up a Next.js boilerplate in a jiffy so we can get started!
    </P>
    <Highlight className="bash">{`
      creat-next-app hoc-playground
      cd hoc-playground && mkdir lib
      cd lib && touch index.js WithLayout.js && cd ..
      open vscode
    `}</Highlight>
    <SubTitle>Writing the WithLayout HOC</SubTitle>
    <Highlight className="javascript">{`
      import { Component } from 'react'
      import PropTypes from 'prop-types'
      import { loadGetInitialProps } from 'next/dist/lib/utils'

      import {
        ContentContainer,
        FlexContainer,
        Footer,
        Header,
        Meta,
      } from '../components'

      // Export our function that will take a component as an argument.
      export default ComposedComponent => (
        class WithLayout extends Component {
          static propTypes = {
            url: PropTypes.shape({
              pathname: PropTypes.string.isRequired
            }).isRequired
          }
          static async getInitialProps(ctx) {
            return loadGetInitialProps(ComposedComponent, ctx)
          }
          render() {
            // Return the component passed to WithLayout wrapped
            // by the following Components for setting the layout.
            // NOTE: <Meta /> is setting global css & all <head></head>
            // related elements.
            return (
              <FlexContainer>
                <Meta />
                <Header url={this.props.url.pathname} />
                <ContentContainer>
                  <ComposedComponent {...this.props} />
                </ContentContainer>
                <Footer />
              </FlexContainer>
            )
          }
        }
      )
    `}</Highlight>
    <SubTitle>Thinking in React & Next</SubTitle>
    <P>
      In React.js components are nothing more than your typical javascript function that returns
      some amount of HTML. This was one of the core concepts applied to Next.js. When writing a page
      in Next.js you are exporting a function that will return some amount of HTML to the DOM. Our HOC
      accepts a component which is nothing more than a function so we can wrap the function with the
      WithLayout HOC and it will return our page with the applied layout settings.
    </P>
    <SubTitle>Using our HOC in the Application</SubTitle>
    <Highlight className="javascript">{`
      // /pages/index.js
      import WithLayout from '../lib'

      // WithLayout takes the argument of a component
      // which is nothing more than a function!
      export default WithLayout(() => (
        <div className="home-page">
          <h1>Hello HOC's in Next!</h1>
        </div>
      ))
    `}</Highlight>
  </div>
))
