import Head from 'next/head'
import Highlight from 'react-highlight'

import page, { colors } from '../../lib'
import { A, Li, P, SubTitle, Title } from '../../components'

const examples = [
  <A
    className="small"
    href="https://github.com/rockchalkwushock/my-blog/tree/master/lib"
  >
    This website
  </A>,
  <A
    className="small"
    href="https://github.com/relatenow/relate/tree/master/hocs"
  >
    Relate
  </A>
]

export default page(() => (
  <div style={{ padding: '2em 1.5em 2em 1.5em' }}>
    <Head>
      <title>Higher Order Components</title>
    </Head>
    <Title>
      Higher Order Components
    </Title>
    <div style={{ textAlign: 'center' }}>
      <span style={{ color: colors.textAndLinks.headings }}>
        May 24, 2017 | 377 words
      </span>
    </div>
    <SubTitle>Using HOC's to make life easier</SubTitle>
    <P>
      No lie I love me some Higher Order Components(HOC)! It makes life so much easier to be able to apply whatever
      business logic, layout, styling, data, etc to components by wrapping them in an HOC. Think of an HOC as just that:
      a wrapper for your component that lifts up the logic that would normally be present making it reusable with other
      components needing the same data, layout, etc. It lends itself to more composable code & less writing of the same
      logic across multiple files. This very blog uses 2 HOC's. One for setting the global layout of the application
      & another for applying Google Analytics throughout all views.
    </P>
    <SubTitle>What is a HOC?</SubTitle>
    <P>
      A Higher Order Component is in all reality a Higher Order Function; which is nothing more than
      a function that does one of the following or both: takes in another function as an argument &/or
      returns a function.
    </P>
    <Highlight className="javascript">{`
      function myHigherOrderFunction(x) {
        return function(y) {
          console.log(x + y);
        }
      }
      var AdditionWithHofs = myHigherOrderFunction(2)(4)
      console.log(AdditionWithHofs) // returns 6
    `}</Highlight>
    <P>
      That syntax might look familiar if you use the connect() method (HOC!) from the React-Redux library:
    </P>
    <Highlight className="javascript">{`
      import React, { Component } from 'react'
      import { connect } from 'react-redux'
      import { someAction } from '../actions'

      class App extends Component {
        async componentDidMount() {
          try {
            await this.props.someAction()
          } catch(e) {
            console.log(e)
          }
        }
        render() {
          return <SomeHTML />
        }
      }
      /**
       * NOTE: connect() takes two arguments the first being the traditional
       * mapStateToProps() & the second being mapDispatchToProps(). Both of
       * these functions return an object so we can skip creating both and
       * provide instead the object that would be returned.
       *
       * i.e. mapStateToProps => ({ foo: state.bar })
       * i.e. mapDispatchToProps => ({ actions: someAction })
       */
      export default connect(null, { someAction })(App)
    `}</Highlight>
    <SubTitle>Thinking in React</SubTitle>
    <P>
      In React.js components are nothing more than your typical javascript function that returns
      some amount of HTML. This was one of the core concepts applied to Next.js. When writing a
      <em style={{ color: colors.textAndLinks.emphasis }}> page </em>
      {' '}
      in Next.js you are exporting
      a function that will return some amount of HTML to the DOM. Our HOC accepts a component which
      is nothing more than a function so we can wrap the function with the WithLayout HOC and
      it will return our page with the applied layout settings.
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
    <P>
      Note that I could create a component called HomePage and write the syntax like below,
      or if you like decorators like I do you can use them as well. Just make sure you are using the
      proper babel-plugins so they work.
    </P>
    <Highlight className="javascript">{`
      // /pages/index.js
      import { Component } from 'react'
      import WithLayout from '../lib'

      class HomePage extends Component {
        ...
      }

      export default WithLayout()(HomePage)
    `}</Highlight>
    <Highlight className="javascript">{`
      // /pages/index.js
      import { Component } from 'react'
      import WithLayout from '../lib'

      @WithLayout()
      export default class HomePage extends Component {
        ...
      }
    `}</Highlight>
    <SubTitle>Examples of HOC's</SubTitle>
    <Li lists={examples} />
    <P>
      The next time you see yourself writing a lot of the same business logic code across
      multiple files in your application it might be time to think about using an HOC instead!
    </P>
    <P>
      Happy Coding!
    </P>
  </div>
))
