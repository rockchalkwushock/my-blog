import { Component } from 'react'
import Head from 'next/head'
import Highlight from 'react-highlight'

import page, { colors } from '../../lib'
import {
  A,
  DisqusThread,
  Li,
  P,
  SocialIcon,
  SubTitle,
  Title
} from '../../components'

const deployments = [
  <P className="list">
    <em style={{ color: colors.textAndLinks.secondary }}>static:</em>
    {' '}
    easy peasy, no build process so just run
    {' '}
    <em style={{ color: colors.textAndLinks.alert }}>now</em>!
  </P>,
  <P className="list">
    <em style={{ color: colors.textAndLinks.secondary }}>npm:</em>
    {' '}
    <em style={{ color: colors.textAndLinks.alert }}>now</em>
    {' '}
    specifically looks for 1 of 3 options:
    {' '}
    <em style={{ color: colors.textAndLinks.alert }}>npm start</em>
    ,
    {' '}
    <em style={{ color: colors.textAndLinks.alert }}>now-start</em>
    ,
    {' '}
    /server.js
    {' '}
    <em style={{ color: colors.textAndLinks.emphasis }}>
      please take note the naming of this file is implicit!
    </em>
    {' '}
    If none are present then you will get a nasty error message.
  </P>,
  <P className="list">
    <em style={{ color: colors.textAndLinks.secondary }}>docker:</em>
    {' '}
    <em style={{ color: colors.textAndLinks.alert }}>now</em>
    {' '}
    will be searching for a
    {' '}
    <em>DockerFile</em>.
  </P>,
  <P className="list">
    <em style={{ color: colors.textAndLinks.secondary }}>git-repository:</em>
    {' '}
    will depend on which of the above 3 types the repository happens to be.
    {' '}
    <em style={{ color: colors.textAndLinks.alert }}>
      now username/repository
    </em>
    {' '}
    will be enough unless there are environment variables that must be passed as well.
  </P>
]
const caveats = [
  <P className="list">
    {' '}
    1) the syntax does not require the
    {' '}
    <em style={{ color: colors.textAndLinks.alert }}>@</em>
    {' '}
    character prefix, and
  </P>,
  <P className="list"> 2) <em>ONLY</em> your dependencies will be installed.</P>
]

class Post extends Component {
  render() {
    const { pathname } = this.props.url
    return (
      <div style={{ padding: '2em 1.5em 2em 1.5em' }}>
        <Head>
          <title>Deploying with Zeit's Now-Cli</title>
        </Head>
        <Title>
          Deploying with Zeit's Now-Cli
        </Title>
        <div style={{ textAlign: 'center' }}>
          <span style={{ color: colors.textAndLinks.headings }}>
            June 02, 2017 | 1,500 words
          </span>
        </div>
        <P>
          I am a huge fan of what
          {' '}
          <A className="small" href="https://zeit.co">Zeit.co</A>
          {' '}
          is doing these days. Seems whatever they put out is a winner & the
          {' '}
          <A className="small" href="https://zeit.co/now">now-cli</A>
          {' '}
          is no different. One three letter word can deploy your product in literally a matter of seconds.
          In this post I will walk through the basics of deploying using the now-cli as well as touch on some of the configurations,
          aliasing, buying domains, & scaling with the new
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>now scale</em>
          {' '}
          command.
          {' '}
          <em>
            Please note this is being written from the standpoint of deploying node based projects;
            however information on static & docker deployments can be found as well.
          </em>
        </P>
        <P>
          The now-cli offers developers the ability to deploy immutable instances of their code base instead
          of updating the same deployment over and over again as changes are made to the code base. This
          provides the developer the ability to 1) see their product in a live production sandbox, 2) catch any
          bugs before aliasing to the production domain, & 3) the ability to provide a functional product instance for
          testing or review by other developers &/or customers. Developers can deploy git repositories, static, npm,
          & docker projects via urls ending with now.sh. These instances of your project can easily be generated using,
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>now</em>
          , & removed using,
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>now rm url</em>
          . When you are ready to show the world your new shiny toy aliasing the now.sh to a domain is a breeze:
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>
            now alias set instanceUrl domain
          </em>
          . I have cooked up a few examples in this
          {' '}
          <A
            className="small"
            href="https://github.com/RCWS-Development/deploying-with-now"
          >
            repository
          </A>
          {' '}
          that demonstrate deploying
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>next.js</em>
          ,
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>static</em>
          ,
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>
            create-react-app
          </em>
          , &
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>docker</em>
          {' '}
          projects.
        </P>
        <SubTitle>Downloading the CLI</SubTitle>
        <P>
          The first thing you will need to do is to install the now-cli, or use the
          {' '}
          <A className="small" href="https://zeit.co/download">
            now-desktop-client
          </A>
          .
        </P>
        <Highlight className="bash">{`
  npm install now -g
  # or
  yarn global add now
        `}</Highlight>
        <P>
          If you are wanting to use pre-built binaries they can be found
          {' '}
          <A className="small" href="https://zeit.co/download#command-line">
            here
          </A>
          {' '}
          as a third option for installation. Now that we have now-cli installed we can get started. From your user directory you can run either
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>now</em>
          {' '}
          or
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>now login</em>
          :
        </P>
        <Highlight className="bash">{`
  rcws-dev in ~ $ now login
  > Enter your email: rockchalkwushock@icloud.com
  > Please follow the link sent to rockchalkwushock@icloud.com to log in.
  > Verify that the provided security code in the email matches Calm Zebu.

  Confirmed email address!

  > Logged in successfully. Token saved to ~/.now.json.
  > Run now to deploy the current directory, or now --help for usage info.
        `}</Highlight>
        <P>
          Now that you have an account set up with Zeit it is as easy as navigating to your project directory and running the command
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>now</em>
          .
        </P>
        <Highlight className="bash">{`
  rcws-dev in deploying-with-now on master $ now
  > Deploying ~/Desktop/deploying-with-now under rockchalkwushock
  > Using Node.js 8.0.0 (default)
  > Ready! https://now-deployment-elnwzhlhee.now.sh (copied to the clipboard) [2s]
  > Initializing...
  > Building
  > npm install
  > Using "yarn.lock"
  > Installing 8 main dependencies..
  > Installed 591 modules [11s]
  > npm run build
  > deploying-with-now@0.1.0 build /home/nowuser/src
  > next build
  > Using external babel configuration
  > location: "/home/nowuser/src/.babelrc"
  > Using "webpack" config funciton defined in next.config.js.
  > Webpack Bundle Analyzer saved stats file to /tmp/045587b0-a8a5-4a66-aaff-1718a11a1167/.next/stats.json
  > npm start
  > deploying-with-now@0.1.0 start /home/nowuser/src
  > next start
  > Deployment complete!
        `}</Highlight>
        <P>
          You will see the following logs indicating the deployment was successful and upon navigating
          to the now.sh url present in the logs you will see your project live and in production!
          It is seriously that easy...however there are some caveats when it comes to the
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>
            type of deployment
          </em>
          {' '}
          that we will need to touch on:
        </P>
        <Li lists={deployments} />
        <P>
          As long as the criteria for your given type of deployment are met
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>now</em>
          {' '}
          will do its job & deploy your project. As an aside the now-cli does offer commands to enforce a
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>type</em>
          {' '}
          of deployment:
        </P>
        <Highlight className="bash">{`
  now --npm
  now --docker
  now --static
        `}</Highlight>
        <SubTitle>Configuring Environment Variables</SubTitle>
        <P>
          Through the cli options you can set your env vars in the cloud with Zeit by performing:
        </P>
        <Highlight className="bash">{`
  now secrets add ENV_VAR "env_var"
  # other useful now secrets commands
  now secrets rm ENV_VAR
  now secrets ls
        `}</Highlight>
        <P>
          When using this env var you will need to reference it via
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>@env_var</em>
          {' '}
          for the now-cli to recognize it. So as an example from a script in your
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>package.json</em>
          {' '}
          you would run:
        </P>
        <Highlight className="bash">{`  now -e ENV_VAR=@env_var`}</Highlight>
        <P>
          passing the
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>-e</em>
          {' '}
          flag tells
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>now</em>
          {' '}
          to utilize this env var in the deployment at runtime.
        </P>
        <SubTitle>Naming Deployments</SubTitle>
        <P>
          <em style={{ color: colors.textAndLinks.alert }}>now</em>
          {' '}
          by default will look at
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>package.main</em>
          {' '}
          in the
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>package.json</em>
          {' '}
          when naming your deployment; but should you want to name it something different,
          perhaps this deployment is a mock up for your customer to review you can run the following:
        </P>
        <Highlight className="bash">{`  now -n "mock-up"`}</Highlight>
        <P>When you see your deployment url you would now see the following:</P>
        <Highlight className="markdown">{`  https://mock-up-8t6u7t5o3n0e9.now.sh`}</Highlight>
        <SubTitle>Creating Aliases for your Deployments</SubTitle>
        <P>
          Should you be ready to show the world your new and improved Facebook or Medium you probably
          do not want to hand them a url with a hash in it and ending in now.sh. Zeit makes it easy to alias your shell instance to a domain using the cli:
        </P>
        <Highlight className="bash">{`
  now alias set https://now-deployment-elnwzhlhee.now.sh nowDep.com
  # other useful now alias commands
  now alias rm <aliasId>
  now alias ls
        `}</Highlight>
        <SubTitle>No repeating commands with now.json</SubTitle>
        <P>
          We tend to do a lot of typing and unfortunately at times a lot of repetitive typing.
          You can save yourself those keystrokes by placing those commands in a
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>now.json</em>
          . This file will be the first thing that
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>now</em>
          {' '}
          looks for & any runtime configurations that have been set here will be taken into account for the deployment.
          You can also create
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>package.now</em>
          {' '}
          in your
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>package.json</em>
          {' '}
          to achieve the same. The following is an example of the
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>now.json</em>
          :
        </P>
        <Highlight className="json">{`
  {
    "alias": "nowDep.com",
    "env": {
      "ENV_VAR": "@env_var",
      "NODE_ENV": "production"
    },
    "files": [
      "components",
      "pages",
      ".babelrc",
      ".env-config.js",
      "next.config.js",
      "now.json",
      "package.json",
      "yarn.lock"
    ],
    "name": "now-deployment"
  }
        `}</Highlight>
        <P>
          For more information on the
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>now.json</em>
          {' '}
          you can refer to the documentation found
          {' '}
          <A
            className="small"
            href="https://zeit.co/docs/features/configuration"
          >
            here
          </A>
          .
        </P>
        <P>
          <em style={{ color: colors.textAndLinks.jayhawk }}>NOTE</em>
          {' '}
          when setting
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>
            NODE_ENV=production
          </em>
          :
        </P>
        <Li lists={caveats} />
        <P>
          For more information on this topic look
          {' '}
          <A
            className="small"
            href="https://zeit.co/docs/deployment-types/node#ignoring-%5Bobject-object%5D"
          >
            here.
          </A>
        </P>
        <P>
          <em style={{ color: colors.textAndLinks.jayhawk }}>NOTE:</em>
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>now</em>
          {' '}
          by default looks at the
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>.gitignore</em>
          {' '}
          file for referencing what should and should not be deployed from your project directory. Should the project contain a
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>.npmignore</em>
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>now</em>
          {' '}
          will default to what has been set inside of it and disregard the
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>.gitignore</em>
          . In all cases however if you have set the files to implicitly be added in the
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>now.json</em>
          {' '}
          the prior files will be ignored completely. So if you absolutely want some file or directory deployed then you should list it in the
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>now.json</em>
          {' '}
          under the
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>files</em>
          {' '}
          array or in
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>
            package.now.files
          </em>
          . For more information on this topic look
          {' '}
          <A
            className="small"
            href="https://zeit.co/docs/features/now-cli#selecting-files-and-directories-to-be-uploaded"
          >
            here.
          </A>
        </P>
        <SubTitle>Buying Domains through the CLI</SubTitle>
        <P>
          Zeit has its own global DNS available to you through
          {' '}
          <A className="small" href="https://zeit.co/world">zeit.world</A>
          . Of course you can bring your own domain if you would like and you can find info on how to do that
          {' '}
          <A
            className="small"
            href="https://zeit.co/docs/features/aliases#custom-domains"
          >
            here
          </A>
          . To use the Zeit DNS you will need to put a credit card on file using the CLI:
        </P>
        <Highlight className="bash">{`
  now billing add
  # other useful now billing commands
  now billing rm <id>
  now billing ls
        `}</Highlight>
        <P>One you have a credit card on file you can simply run:</P>
        <Highlight className="bash">{`
  now domains buy <url>
  # other useful now domains commands
  now domains rm <url | domainId>
  now domains ls
        `}</Highlight>
        <P>
          The Zeit DNS will search to make sure the domain is available for purchase and tell you the cost of the domain.
          After purchasing you can alias the domain as discussed above.
        </P>
        <SubTitle>Scaling with Now</SubTitle>
        <P>
          On May 22nd Zeit introduced
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>now scale</em>
          {' '}
          a command for developers to use for scaling their deployments with ease by giving them access to some of Zeit's scaling capabilities.
          To read what the dev team has to say about this feature
          {' '}
          <A className="small" href="https://zeit.co/blog/scale">read this</A>
          . In short scaling is now as easy as:
        </P>
        <Highlight className="bash">{`  now scale <url>`}</Highlight>
        <P>
          You are able to declare added options like the minimum & maximum number of instances to be running and can use the
          {' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>auto</em>
          {' '}
          option with these to tell Zeit to auto-scale the range of instances given based on traffic to your site.
        </P>
        <Highlight className="bash">{`
  now scale <url> 1 5
  # a minimum of 1 instance should always be running.
  # a maximum of 5 instances should be running when traffic increases.
        `}</Highlight>
        <SubTitle>Pricing Plans</SubTitle>
        <P>
          Zeit recently restructured their
          {' '}
          <A className="small" href="https://zeit.co/pricing">pricing plans</A>
          {' '}
          making it possible even on the free OSS plan to deploy infinite instances & static deployments are free & unlimited,
          {' '}
          <A className="small" href="https://zeit.co/blog/unlimited-static">
            more here
          </A>
          . The way this works is that you may deploy N number of instances;
          but depending on your plan you can only have X number of concurrent instances running,
          X being a finite number defined by your plan. As an example I am on the Premium plan.
          I can deploy as many instances as my heart desires; however I can only have 10 concurrently running instances.
          Should I exceed that number all instance in excess are now priced via the on-demand plan.
        </P>
        <P>
          If a deployment has not been scaled using
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>now scale</em>
          {' '}
          it will go to a frozen state after being inactive for X amount of time.
          It will now no longer be an active instance so it does not count against you anymore on your number of concurrent instances.
          You can check the number of active instance you have running via
          {' '}
          <em style={{ color: colors.textAndLinks.alert }}>now ls</em>
          :
        </P>
        <Highlight className="bash">{`
  rcws-dev in deploying-with-now on master $ now ls
  > 5 deployments found under rockchalkwushock [507ms]

  now-deployment (1 of 1 total)
  url                                        inst #    state                 age
  now-deployment-jxcaxfnyza.now.sh                1    READY                  3d

  static (1 of 1 total)
  url                                        inst #    state                 age
  static-eqlwnjuwht.now.sh                        ✖    READY                  3d

  docker (1 of 1 total)
  url                                        inst #    state                 age
  docker-ztczsemvmg.now.sh                        0    FROZEN                 3d

  create-react-app (1 of 1 total)
  url                                        inst #    state                 age
  create-react-app-lblarmapmp.now.sh              0    FROZEN                 3d

  rcws-blog (1 of 1 total)
  url                                        inst #    state                 age
  rcws-blog-piswirhdom.now.sh                     1    READY                  9d
        `}</Highlight>
        <P>
          As talked about before all static deployments are free so you see the X for the static deployment
          and you can see that I have 2 instances that are running.
          These being scaled to never sleep. You can also see this from your dashboard on Zeit’s website.
        </P>
        <P>
          As the supporting dev team & the open source community work together this amazing tool from
          Zeit will only continue to get better and better.
          The next time you are thinking about who to deploy one of your projects with my hope is you will join the Zeit community & deploy with now!
        </P>
        <P>Happy Coding!</P>
        <P>
          <em style={{ color: colors.textAndLinks.secondary }}>
            Article can be found on
          </em>
          {' '}
          <SocialIcon
            icon="medium"
            size="lg"
            url="https://medium.com/@RockChalkDev/deploying-with-zeits-now-cli-796e41f05102"
          />
          .
        </P>
        <DisqusThread path={pathname} />
      </div>
    )
  }
}

export default page(Post)
