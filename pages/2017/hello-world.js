import Head from 'next/head'

import page, { colors } from '../../lib'
import { A, P, Scrimba, SubTitle, Title, YouTube } from '../../components'

export default page(() => (
  <div style={{ padding: '2em 1.5em 2em 1.5em' }}>
    <Head>
      <title>Hello World from RCWS Development!</title>
    </Head>
    <Title>Hello World from RCWS Development!</Title>
    <div style={{ textAlign: 'center' }}>
      <span style={{ color: colors.textAndLinks.headings }}>
        May 23, 2017 | 117 words
      </span>
    </div>
    <SubTitle>Welcome to my Blog</SubTitle>
    <P>
      Never in my life would I have thought this would be something I would do:
    </P>
    <em style={{ color: colors.textAndLinks.emphasis }}>Make a blog...</em>
    <P>
      Apparently it's what the cool kids in the web development world do and I want
      so badly to be a cool kid too!
    </P>
    <P>
      There will be lots of different blogs about tech, best practices, and things
      that I have found along my journey to become an
      {' '}
      <em style={{ color: colors.textAndLinks.good }}>employed</em>
      {' '}
      web developer.
      I plan to start my own web series on YouTube shortly and will link the content on
      this website. There will also be cool little video/screen casts brought to you by:
      {' '}
      <A href="https://scrimba.com/" className="inText">Scrimba</A>
    </P>
    <Scrimba src="https://scrimba.com/cast/cypWUd.embed" />
    <P>
      There will also be videos...lots and lots of videos! Mostly about coding; but I will
      not rule out any amazing videos like this one!
    </P>
    <YouTube videoId="L59eDcrAk8Q" />
    <P>
      Thanks for stopping by and look for more content soon! Happy Coding!
    </P>
  </div>
))
