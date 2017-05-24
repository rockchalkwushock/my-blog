import page, { colors } from '../lib'
import { A, Li, P, SubTitle } from '../components'

const projects = [
  <A
    className="small"
    href="https://github.com/rockchalkwushock/photography-backend"
  >
    Photography-Backend
  </A>,
  <A
    className="small"
    href="https://github.com/rockchalkwushock/photography-frontend"
  >
    Photography-Frontend
  </A>,
  <A
    className="small"
    href="https://github.com/rockchalkwushock/Helios-Weather-App"
  >
    Helios-Weather-App
  </A>,
  <A className="small" href="https://www.npmjs.com/package/how-to-open-source">
    how-to-open-source
  </A>,
  <A
    className="small"
    href="https://hashnode.com/post/why-props-are-your-friend-cizm67r3d000gmc536v61j5rc"
  >
    Why Props Are Your Friend
  </A>,
  <A
    className="small"
    href="https://medium.com/@RockChalkDev/getting-started-as-the-new-guy-in-open-source-d9e28e112e04"
  >
    Getting Started As the New Guy in OSS
  </A>
]

const pipeline = [
  <P className="list">
    Rewrite of Helios-Weather-App
    {' '}
    <em style={{ color: colors.textAndLinks.good }}>[In-Progress]</em>
  </P>,
  <P className="list">Write & Launch my friend's Photography Website</P>,
  <P className="list">Start Web Series on YouTube</P>,
  <P className="list">Build GraphQL Endpoint for future apps to use.</P>,
  <P className="list">Learn React-Native</P>,
  <P className="list">Learn Electron.js</P>
]

export default page(() => (
  <div className="about-page">
    <SubTitle>About the man...behind the website</SubTitle>
    <P>
      My name is Cody Brunner & I'm an aspiring web developer from
      {' '}
      <A
        className="inText"
        href="https://www.google.com/maps/place/Wichita,+KS/@37.6989281,-97.4840407,11z/data=!3m1!4b1!4m5!3m4!1s0x87badb6ad27f182d:0x9396d5bf74d33d3e!8m2!3d37.6871761!4d-97.330053?hl=en"
      >
        Wichita, Kansas
      </A>
      . Yes I totally just linked that because you were wondering
      {' '}
      <em>"Where is Wichita, Kansas?"</em>
      . I specialize in Javascript...well it being basically all I know we will use
      {' '}
      <em style={{ color: colors.textAndLinks.emphasis }}>specialize</em>
      {' '}
      very loosely! My skills include: HTML5, CSS3, Javascript, Node.js, Express.js, MongoDB,
      React.js, Redux.js, Next.js, & GraphQL. I'm sure more can be listed; but those are what
      I feel the most comfortable with and use on a daily basis <em
        style={{ color: colors.textAndLinks.emphasis }}
      >
        except CSS, good Lord I
        hate CSS!
      </em> I'm proficient with Git & a big fan of Github as the meme says:
    </P>
    {/* TODO Add image back!!!*/}
    {/* <Img alt="git-meme" url="https://hikaruzone.files.wordpress.com/2015/10/in-case-of-fire-1-git-commit-2-git-push-3-leave-building2.png?w=640" />*/}
    <SubTitle>So a little about myself...</SubTitle>
    <P>
      I have served in the US Navy & am a veteran of OEF. I've gone to school for more time in my life than I would care to share
      and amazingly enough don't have a whole lot to show for it. I've studied Medicine, Law, & Engineering so I've got my bases
      covered! It was a Programming in C course that really got me going on wanting to write code. The challenge it presented was
      just pure fun. I could fiddle with a piece of code for hours figuring out how and why it did what it was doing. I loved that
      class! So when my last employer was failing to pay me what they owed me & the engineer shindig was really becoming a bore to
      me I thought
      {' '}
      <em style={{ color: colors.textAndLinks.emphasis }}>
        "What was the last thing I did that I really loved & that really challenged me?"
      </em>
      {' '}
      I will take it you know
      what the answer to that question was.
    </P>
    <P>
      So I embarked on the journey to become a web developer in July of 2016. Here we are nearing a year and no I am not a web developer.
      I'm a web-ninja with his blue belt in the majority of his arsenal. I've learned so much in the last year that it's hard to
      believe it's only been a year that I crammed all of this into my head. It has been frustrating, there have been
      {' '}
      <em style={{ color: colors.textAndLinks.emphasis }}>very</em>
      {' '}
      long days/nights,
      & there have been extremely fruitless moments during this journey; but I'm not giving up and that is all that matters. I think the really
      interesting thing now is going back and refactoring projects I built 6-8 months ago and seeing not just how much the Javascript ecosystem
      & tech in general has changed; but how much I have grown and learned in that time to become a better developer. Just look at my first
      website hosted on Github & built using Create-React-App:
      {' '}
      <A
        className="inText"
        href="https://rockchalkwushock.github.io/rcws-development/"
      >
        rcws-development@1.0.0
      </A>
    </P>
    <P>
      In my free time...haha what is
      {' '}
      <em style={{ color: colors.textAndLinks.emphasis }}>free time</em>
      ? Wait no seriously I do have a life outside of this just let me think on it for a moment. I like to spend time with my dog, Miller, &
      any chance I get to see my adorable little niece is always a plus. I am a diehard Jayhawk, so
      {' '}
      <em
        style={{
          backgroundColor: colors.background.jayhawk,
          color: colors.textAndLinks.jayhawk
        }}
      >
        ROCK CHALK!!!
      </em>
      {' '}
      Yes that means all employment
      opportunities in the state of Missouri will be rejected...kidding I'm just kidding. I enjoy fishing, mircobrews, & live music.
      I'd love to relocate anywhere in the Pacific Northwest for those gorgeous views, hiking, & camping...hint hint!
    </P>
    <P>
      I'm always looking for work & willing to relocate,
      {' '}
      <em style={{ color: colors.textAndLinks.alert }}>
        Oh dear Lord please get me out of Kansas!
      </em>
      {' '}
      So if you are in the market for a blue-belt web-ninja trained in the arts of Node, React, & dark beer you sir/ma'am have found your man!
    </P>
    <div style={{ textAlign: 'center' }}>
      <SubTitle>Projects & Articles</SubTitle>
      <Li lists={projects} />
    </div>
    <div style={{ textAlign: 'center' }}>
      <SubTitle>In the future weeks & months...</SubTitle>
      <Li lists={pipeline} />
    </div>
    <style jsx>{`
      .about-page {
        display: flex;
        flex: auto;
        flex-direction: column;
        padding: 2em;
      }
    `}</style>
  </div>
))
