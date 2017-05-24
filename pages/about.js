import page from '../lib'
import { A, Img, Li, P, SubTitle } from '../components'

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
    <em style={{ color: 'green' }}>[In-Progress]</em>
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
      <em style={{ color: 'pink' }}>specialize</em>
      {' '}
      very loosely! My skills include: HTML5, CSS3, Javascript, Node.js, Express.js, MongoDB,
      React.js, Redux.js, Next.js, & GraphQL. I'm sure more can be listed; but those are what
      I feel the most comfortable with and use on a daily basis <em
        style={{ color: 'pink' }}
      >
        except CSS, good Lord I
        hate CSS!
      </em> I'm proficient with Git & a big fan of Github as the meme says:
    </P>
    <Img
      alt="git-meme"
      url="https://hikaruzone.files.wordpress.com/2015/10/in-case-of-fire-1-git-commit-2-git-push-3-leave-building2.png?w=640"
    />
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
