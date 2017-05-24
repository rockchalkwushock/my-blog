import FontAwesome from 'react-fontawesome'
import page from '../lib'
import { Title } from '../components'

export default page(() => (
  <div className="tutorials-page">
    <Title>Coming Very Soon!!!</Title>
    <a href="https://youtu.be/P-hUV9yhqgY">
      <FontAwesome name="pied-piper-alt" size="5x" />
    </a>
    <style jsx>{`
      .tutorials-page {
        align-items: center;
        display: flex;
        flex: auto;
        flex-direction: column;
        justify-content: center;
      }
      a:hover {
        color: green;
      }
    `}</style>
  </div>
))
