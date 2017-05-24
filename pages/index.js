import page from '../lib'
import { Img, Title } from '../components'

export default page(() => (
  <div className="home-page">
    <Title>Welcome to RCWS Development</Title>
    <Img alt="rcws-logo" url="../static/text-color.png" />
    <style jsx>{`
      .home-page {
        align-items: center;
        display: flex;
        flex: auto;
        flex-direction: column;
        justify-content: center;
      }
    `}</style>
  </div>
))
