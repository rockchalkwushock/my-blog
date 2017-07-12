import { Component } from 'react'
import Head from 'next/head'

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

const resources = [
  <P className="list">1) free,</P>,
  <P className="list">2) quality,</P>,
  <P className="list">3) plentiful</P>
]

const acknowledgements = [
  <P className="list">
    1) First and foremost my family for putting up with me.
  </P>,
  <P className="list">
    2) My best friend in the world, Masha. I cannot begin to thank you enough
    for believing in me when I do not.
  </P>,
  <P className="list">
    3) My buddy{' '}
    <A className="small" href="https://twitter.com/QuimperEmanuel">
      Emanuel Quimper
    </A>{' '}
    for teaching me so much and being a positive reinforcement when I have felt
    so dumb.
  </P>,
  <P className="list">
    4){' '}
    <A className="small" href="https://twitter.com/ste_grider">
      Stephen Grider
    </A>, dude your courses have saved me, keep educating you are amazing at it!
  </P>,
  <P className="list">
    5){' '}
    <A className="small" href="https://twitter.com/zeithq">
      Zeit
    </A>, the Zeit community is a whole other level of amazing. From the dev
    teams that support the great tech to the community surrounding that tech,
    it's been an absolute pleasure working with, learning, and helping others.
  </P>,
  <P className="list">
    6) Anyone in the community that took the time to respond to a question...no
    matter how stupid. Your contribution to me moving forward will not be
    forgotten.
  </P>
]

const goals = [
  <P className="list">
    1) First and foremost love me and quite being so self-destructive.
  </P>,
  <P className="list">2) Go through Eric Elliot's Javascript Courses.</P>,
  <P className="list">
    3) Build Masha's Photography website...really this time, I swear, and it
    will be damn good!
  </P>,
  <P className="list">
    4) Refactor my website to be more...user appealing/friendly.
  </P>,
  <P className="list">5) Learn Elixir.</P>,
  <P className="list">6) Learn Electron.</P>,
  <P className="list">
    7) Give back to this amazing community by helping others more.
  </P>,
  <P className="list">8) An OSS project.</P>
]

class Post extends Component {
  render() {
    const { pathname } = this.props.url
    return (
      <div style={{ padding: '2em 1.5em 2em 1.5em' }}>
        <Head>
          <title>One Year of Learning & Writing Code</title>
        </Head>
        <Title>One Year of Learning & Writing Code</Title>
        <div style={{ textAlign: 'center' }}>
          <span style={{ color: colors.textAndLinks.headings }}>
            July 11, 2017 | 1,762 words
          </span>
        </div>
        <P>
          It was a year ago today that I started this journey of becoming a web
          developer. Roughly a month removed from leaving my job as a robotic
          technician I decided this was the future I would hang my hat on. I'd
          had previous experience with HTML/CSS3/JS through a Udemy course out
          of curiosity and some C/C++ from a course in college, but I had never
          really looked at coding as a career. I decided to join a boot camp
          program and did my research on what was around and what was deemed the
          best for your dollar. I settled on{' '}
          <A className="small" href="https://www.thinkful.com">
            Thinkful
          </A>. I can not say my experience with the program was very good and
          will leave it at that. I left the program after 4 months and never
          looked back. I've since forged ahead on my own using various resources
          and cheap courses I have found or been recommended by other aspiring
          or seasoned developers. Hindsight will always be 20/20; but after a
          year this is what I know I would have done differently, what I'm not
          satisfied with, what I am, and my goals for the future:
        </P>
        <SubTitle>Shoulda, Coulda, Woulda</SubTitle>
        <P>
          I had seen{' '}
          <A className="small" href="https://www.freecodecamp.org">
            freeCodeCamp
          </A>{' '}
          floating around and I really wish I would have gone that route from
          the beginning. The community is magnificent and the resources are:
        </P>
        <Li lists={resources} />
        <P>
          This do-it-yourself boot camp gets the number one thing right in my
          opinion: community involvement & education. The best way to learn is
          to teach what you know and there will always be someone behind you in
          the curriculum that needs a helping hand. Not only are you sharpening
          your own skills, but who knows what friendship you can build or even
          better a networking asset you will have later on. There will always be
          someone ahead of you as well that is there to answer your questions or
          help you out when you have a brain fart for the umpteenth time. I'm
          not saying this was not present in Thinkful's program, but the
          cultivation of this was sorely lacking during my tenor.
        </P>
        <P>
          I really wish I would have focused on one side of the coin or the
          other. I know being a full-stack developer is more appealing these
          days, but how many full-stack developers enter the job market standing
          on solid ground on all the topics you are expected to understand, my
          guess is not very many. I'm definitely no front-end developer, or at
          least when it comes to UI/UX development. I deplore it and it takes
          little bits of my soul to do this work. I'm not saying that it is
          horrible and is not something you should choose to learn. What I am
          saying is I know what I'm good at and what I'm not, or more
          importantly what really interests me and I can apply 110% of myself to
          versus what kills my will to keep going. I really do my best to steer
          clear of positions that make it sound like UI/UX development would be
          more than 20% of my work week because I know I would not be happy and
          although it would present a challenge, it would be the kind of
          challenge that depletes me as a person and employee.
        </P>
        <P>
          I would have focused solely on becoming a sound Node.js developer and
          really learned the nuances of being a backend developer. It is far
          more interesting to me. I would have branched out into Python & Elixir
          a lot sooner to learn a few more backend languages{' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>
            (Elixir really has me interested and when I can find the time I will
            learn this)
          </em>. I still have a lot to learn here, but I'm more confident in my
          skills and understanding on the backend.
        </P>
        <P>
          I would have absolutely not gone at this like a sprint. Reading,
          watching, learning, and coding for 15-18 hours a day every day even
          when you are unemployed is ridiculous. So many topics were lost on me
          because I did not take the time to invest in practicing those topics
          for muscle memory purpose or even delving further into what was
          actually going on. This is 100% my fault and if I had it to do over
          again I would implement a schedule for learning, coding, and enjoying
          life instead of killing myself.
        </P>
        <P>
          I would have gotten my knowledge on a topic to 60-70% and then started
          teaching people that topic. Maybe take an hour or 2 a day and sit in a
          chatroom answering questions or helping other newbies debug programs.
          It's not that I did not do this, but I really just lent what I knew
          and kept it at that. Once we started traveling down and avenue I was
          not strong in it was "Bye Felicia!".
        </P>
        <P>
          I would have started reading source code earlier. This has been the
          wealth of knowledge in my honest opinion. Just taking the time one
          evening to run a{' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>yarn eject</em> on{' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>
            create-react-app
          </em>{' '}
          and read through all the source code was eye opening. I say that not
          only in the sense of "holy crap this is what goes into really making
          something"; but just reading the code and having "aha" moments as to
          why some things work the way they do. I even saw better methods of
          doing things I'd been doing and was like "mental note Cody, mental
          note".
        </P>
        <P>
          I feel like if you want to get a job in the industry quit learning
          frameworks, tools, etc and focus solely on code challenges. I mean
          seriously I was not prepared at all for my first code challenge. I, no
          lie, figuratively s*** down my leg when I read the question{' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>
            (using literally would have made this weird)
          </em>. It was not that I did not know what was being asked of me, it
          was that I had no idea how to perform the manipulations to the data I
          was being asked to perform. Not a clue. I will say I was never a solid
          test taker in my defense. Ask me to do multi-variable calculus in a
          classroom and I will stare at you uncomfortably until you walk away.
          Give me a physics or engineering problem that puts context to
          multi-variable calculus and I'm off to the races. Something about
          being asked to run multiple transformations on an array of strings to
          get back an array of strings that must contain a substring of 'can'
          just has no real context to me. "What is the purpose of this?" That is
          what my internal voice is asking. I perform algorithms on API data all
          the time. I sit down and critically think about what I want it to
          achieve and the best possible way to go about doing it. I don't know
          what is all that different in my mind about the two scenarios but it
          just is.
        </P>
        <P>
          I think though the number one thing I missed out on early was
          engaging. Engaging with other developers. There's not a big dev scene
          in Wichita, Kansas; but I could still be chatting with other
          developers in person or even taking the time to just start a thread
          about a topic I want to know more about and creating a dialog with
          better-versed developers in that area. This is a community and it is
          important to engage with that community to grow not just in your
          knowledge of whatever it is you are learning but also as a person. The
          connections that can be gained can really be priceless. I really
          dropped the ball here and it is a major regret.
        </P>
        <SubTitle>Unsatisfied</SubTitle>
        <P>
          Generally my "memory" of{' '}
          <em style={{ color: colors.textAndLinks.emphasis }}>jQuery</em>, HTML,
          CSS is Charles Barkley in March "Turrible" with a capital "T". It's my
          fault and no one else is to blame. I'm setting goals to go back and
          brush up on these topics.
        </P>
        <P>
          My JavaScript-fu is very sub-par and it leaves me asking questions
          that at this point in the game I should not be asking unless my brain
          seriously farts. I've decided to invest in Eric Elliot's JavaScript
          fundamental courses to get on the path to black-belt status.
        </P>
        <SubTitle>Satisfied</SubTitle>
        <P>
          I can't say I'm happy about the fact it's been a year and I'm still
          unemployed and searching for work. What I can say I'm happy about is
          that I'm still fighting for what I want. Sure there have been plenty
          of moments I have agreed with the voice in my head screaming "F***
          this!". It's been the ability to take a deep breath, step away for a
          moment, regroup, and come at the problem again from a different angle
          that has been a saving grace and a real personal improvement for me.
        </P>
        <P>
          I'm gonna get there and someone will hire me. Not sure when, nor do I
          have a timetable for this happening, but I am going to keep waking up
          every day and going at it because of one reason:
        </P>
        <P>
          I love what I'm doing because I am challenged mentally every moment of
          my day.
        </P>
        <SubTitle>Acknowledgements</SubTitle>
        <P>I want to thank a few people for helping me along this last year:</P>
        <Li lists={acknowledgements} />
        <P>
          <em style={{ color: colors.textAndLinks.alert }}>
            "If I have seen further, it is by standing on the shoulder of
            giants."
          </em>
        </P>
        <P>
          <em style={{ color: colors.textAndLinks.alert }}>
            - Sir Isaac Newton
          </em>
        </P>
        <SubTitle>Goals</SubTitle>
        <Li lists={goals} />
        <P>And most of all land that first dev job!</P>
        <P>Happy Coding everyone!</P>
        <P>
          <em style={{ color: colors.textAndLinks.secondary }}>
            Article can be found on
          </em>{' '}
          <SocialIcon
            icon="medium"
            size="lg"
            url="https://medium.com/@RockChalkDev/one-year-of-learning-writing-code-e3f47437c4fe"
          />
          .
        </P>
        <DisqusThread path={pathname} />
      </div>
    )
  }
}

export default page(Post)
