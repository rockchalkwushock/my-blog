import { Component } from 'react'
import Head from 'next/head'
import Highlight from 'react-highlight'

import page, { colors } from '../../lib'
import {
  A,
  DisqusThread,
  P,
  SocialIcon,
  SubTitle,
  Title
} from '../../components'

class Post extends Component {
  render() {
    const { pathname } = this.props.url
    return (
      <div style={{ padding: '2em 1.5em 2em 1.5em' }}>
        <Head>
          <title>What I learned relearning GraphQL</title>
        </Head>
        <Title>What I learned relearning GraphQL</Title>
        <div style={{ textAlign: 'center' }}>
          <span style={{ color: colors.textAndLinks.headings }}>
            July 25, 2017 | 1,210 words
          </span>
        </div>
        <P>
          I learned the basics of{' '}
          <A className="small" href="http://graphql.org/">
            Facebook’s GraphQL
          </A>{' '}
          back in February while going through Mr. Stephen Grider’s excellent{' '}
          <A
            className="small"
            href="https://www.udemy.com/graphql-with-react-course/"
          >
            tutorial
          </A>{' '}
          on Udemy. I loved how flexible and easy to use this was in comparison
          to the rigidness of REST API structures. Getting the data you wanted
          to the client had never been easier. The ability to not under or over
          fetch data is what has sold most developers. I sat it to the side
          while I continued to work on current projects hoping to work with it
          more in the coming months. Five nearly six months later I have come
          back and found that the community, tools, and tech itself has evolved
          and progressed quite a bit. The following article is what I learned
          while getting back up to snuff on the subject matter.
        </P>
        <P>
          Skimming around YouTube I found an excellent little{' '}
          <A
            className="small"
            href="https://www.youtube.com/playlist?list=PLN3n1USn4xlnXfLBuSMFcYM5yei4oxdxB"
          >
            web series
          </A>{' '}
          by Mr. Ben Awad that touched on the basics of how to build a GraphQL
          Server using{' '}
          <A className="small" href="https://expressjs.com/">
            Express.js
          </A>{' '}
          with{' '}
          <em style={{ color: colors.textAndLinks.alert }}>
            graphql-server-express
          </em>
          (now known as{' '}
          <em style={{ color: colors.textAndLinks.alert }}>
            apollo-server-express
          </em>). The series touched on OAuth, GraphQL Subscriptions, &
          integration with{' '}
          <A className="small" href="https://github.com/facebook/dataloader">
            Facebook’s Dataloader
          </A>{' '}
          many of the things I needed to get up to speed on fast and the best
          part was the videos were working with{' '}
          <em style={{ color: colors.textAndLinks.alert }}>postgres</em> &{' '}
          <em style={{ color: colors.textAndLinks.alert }}>sequelize</em> which
          I was planning on using for the first time.
        </P>
        <SubTitle>The Schema</SubTitle>
        <P>
          GraphQL’s Schema Definition Language (SDL) is fantastic for setting up
          what you initially assume your data structure both server & client
          side should look like. I don’t work on a team yet, but this feature
          allows both front and back-end engineers to be working simultaneously
          once the schema is in place. The front end engineers have an idea of
          what will be coming to them and using{' '}
          <em style={{ color: colors.textAndLinks.alert }}>
            mocking methods
          </em>{' '}
          the backend engineers can hand the front end{' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>mock data</em> to
          help them better get a feel for designing the client side. I will note
          at times I did get confused going from my{' '}
          <em style={{ color: colors.textAndLinks.alert }}>typeDefs</em>, to my{' '}
          <em style={{ color: colors.textAndLinks.alert }}>resolvers</em>, to my{' '}
          <em style={{ color: colors.textAndLinks.alert }}>models</em> to keep
          everyone happy and on the same page. It is my personal advice to write
          your GraphQL Schema first getting{' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>
            in the ball park
          </em>{' '}
          for what you expect your data to look like and then proceed to write
          your <em style={{ color: colors.textAndLinks.alert }}>models</em> &
          lastly your{' '}
          <em style={{ color: colors.textAndLinks.alert }}>resolvers</em> to
          avoid a lot of confusion and going back and forth between files
          chasing that *can not allow null value on non-null definition* error.
        </P>
        <SubTitle>Context</SubTitle>
        <P>
          This was really cool, admittedly I had forgotten about it, but the
          ability to pass things you might need as{' '}
          <em style={{ color: colors.textAndLinks.alert }}>context</em> on the {' '}
          <em style={{ color: colors.textAndLinks.alert }}>
            graphqlExpress
          </em>{' '}
          middleware is really really nice!
        </P>
        <Highlight className="javascript">{`
app.use('/graphql', graphqlExpress({
  schema,
  context: { models } // now we can get access to our PSQL Models inside of our GraphQL resolvers!
})
        `}</Highlight>
        <P>
          This concept becomes important when working with OAuth because after
          the user has committed the action of logging in we can retrieve from
          the request object the JWT. By passing it as context we can then
          validate the token and that the user should in fact have access to the
          auth protected routes.
        </P>
        <Highlight className="javascript">{`
app.use('/graphql', graphqlExpress(req => ({
  schema,
  context: {
    models,
    user: req.user
  }
}))
        `}</Highlight>
        <SubTitle>Dataloader</SubTitle>
        <P>
          I had watched{' '}
          <A className="small" href="https://github.com/facebook/dataloader">
            Lee Byron’s YouTube video
          </A>{' '}
          going through the source code on Dataloader before so I had an idea
          about what its purpose was and what it achieved for the end user.
          Seeing just how much it can make a difference performance wise by
          batching and caching requests really makes one wonder why you would
          not want to use this library when you find your code has nested
          relationships. Ben did a demo of the performance enhancements{' '}
          <A className="small" href="https://youtu.be/2cSVIWDUSn4?t=1m46s">
            before
          </A>{' '}
          and{' '}
          <A className="small" href="https://youtu.be/2cSVIWDUSn4?t=12m1s">
            after
          </A>{' '}
          using Dataloader which was great for someone like myself who needs
          visuals.
        </P>
        <SubTitle>Testing</SubTitle>
        <P>
          I had never attempted to test any GraphQL code before, and it’s my
          intent to build a GraphQL API for a friend’s website. Being that I
          will be the one maintaining this website I feel a whole lot better
          knowing the code is covered by tests,{' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>
            that hopefully cover every case and are not prone to failure
            themselves
          </em>.
        </P>
        <P>
          I’m a big fan of using{' '}
          <A className="small" href="http://facebook.github.io/jest/">
            Facebook’s Jest
          </A>{' '}
          testing suite for performing tests on my code and was very happy to
          find an article by Sibelius Seraphini that covered just how he used
          Jest for testing GraphQL code.
        </P>
        <P>
          I did find that code can get very repetitive when writing these tests
          and did my best to dry the code up. When I initially wrote the tests
          in one file it was nearly 1000 lines in length and a terrible mess to
          try and read through. An initial test looked like the below:
        </P>
        <Highlight className="javascript">{`
test('#14: should create a todo', async () => {
  try {
  // Get a user_id since it's a required param for creating a todo.
    const query = \`
      query {
        findAllUsers {
          id
        }
      }
      \`
    const { data: { findAllUsers } } = await graphql(
      schema,
      query,
      {},
      { models }
    )
    // pass that id on in the mutation
    const createMutation = \`
      mutation {
        createTodo(text:"Go on SNL" user_id:"\${findAllUsers[0].id}") {
          id
          text
          completed
        }
      }
    \`
    // extract the createTodo object through destructuring
    const { data: { createTodo } } = await graphql(
      schema,
      createMutation,
      {},
      { models }
    )
    expect(createTodo).toHaveProperty('id')
    expect(createTodo).toHaveProperty('text', 'Go on SNL')
    expect(createTodo).toHaveProperty('completed', false)
  } catch (e) {
    throw e
  }
})
        `}</Highlight>
        <P>
          To dry up the code I created my own mocks object that held the GraphQL
          queries like below making the readability of the code easier and an
          individual test not end up being over 30-50 lines of code!
        </P>
        <Highlight className="javascript">{`
createTodo: (text, user_id) => \`
  mutation {
    createTodo(text:"\${text}", user_id:"\${user_id}") {
      id
      text
      completed
    }
  }
\`,
        `}</Highlight>
        <P>The refactored test looks like this now:</P>
        <Highlight className="javascript">{`
test('#14: should create a todo', async () => {
  try {
    const { data: { findAllUsers } } = await graphql(
      schema,
      mocks.findAllUsers,
      {},
      { models }
    )
    const { data: { createTodo } } = await graphql(
      schema,
      mocks.createTodo('Go on SNL', findAllUsers[0].id),
      {},
      { models }
    )
    expect.assertions(3)
    expect(createTodo).toHaveProperty('id')
    expect(createTodo).toHaveProperty('text', 'Go on SNL')
    expect(createTodo).toHaveProperty('completed', false)
  } catch (e) {
    throw e
  }
})
        `}</Highlight>
        <P>
          I did come to find out that writing a GraphQL query must be done in
          exactly the same format as you would write it in the GraphiQL
          interface. When passing variables into the string template literals
          that makes up a GraphQL Query you{' '}
          <em style={{ color: colors.textAndLinks.jayhawk }}>must</em> still use
          double quotes if the value is a string. In the below mock both{' '}
          <em style={{ color: colors.textAndLinks.alert }}>id</em> &{' '}
          <em style={{ color: colors.textAndLinks.alert }}>user_id</em> are
          string values and must be wrapped in the double quotes where as{' '}
          <em style={{ color: colors.textAndLinks.alert }}>completed</em> is a
          boolean type and does not need them.
        </P>
        <Highlight className="javascript">{`
completeTodo: (id, complete, user_id) => \`
  mutation {
    completeTodo(id:"\${id}", completed:\${complete}, user_id:"\${user_id}")
  }
\`,
        `}</Highlight>
        <SubTitle>Acknowledgements</SubTitle>
        <P>
          I’d like to thank Ben Awad for the great series he put together. It
          was a big help in getting back up to speed and learning some of the
          newer tools available. I’d also like to thank Sibelius Seraphini for
          his article on{' '}
          <A
            className="small"
            href="https://medium.com/entria/testing-a-graphql-server-using-jest-4e00d0e4980e"
          >
            Testing a GraphQL Server using Jest
          </A>.
        </P>
        <P>
          I would love to get other developer’s opinions and feedback on the
          testing of GraphQL code, and I am totally new to the world of SQL so
          if you spot any egregious mistake with and of the{' '}
          <em style={{ color: colors.textAndLinks.alert }}>postgres</em> &{' '}
          <em style={{ color: colors.textAndLinks.alert }}>sequelize</em> code
          please please please open an issue and let me know if I’m headed down
          a bad path or straying from best practices! I would greatly appreciate
          the advice.
        </P>
        <P>
          You can find the code from this article{' '}
          <A
            className="small"
            href="https://github.com/rockchalkwushock/graphql-todo-backend"
          >
            here
          </A>.
        </P>
        <P>Happy Coding!</P>
        <P>
          <em style={{ color: colors.textAndLinks.secondary }}>
            Article can be found on
          </em>{' '}
          <SocialIcon
            icon="medium"
            size="lg"
            url="https://medium.com/@RockChalkDev/what-i-learned-re-learning-graphql-4690b82facfd"
          />
          .
        </P>
        <DisqusThread path={pathname} />
      </div>
    )
  }
}

export default page(Post)
