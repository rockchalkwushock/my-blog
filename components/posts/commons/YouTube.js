import YouTube from 'react-youtube'

const YouTubePlayer = props => (
  <div className="youtube-player">
    <YouTube {...withDefault(props)} />
    <style jsx>{`
      .youtube-player {
        margin: 15px 0;
      }
    `}</style>
  </div>
)

const withDefault = props =>
  Object.assign({}, props, {
    opts: Object.assign({}, props.opts || {}, {
      width: '100%'
    })
  })

export default YouTubePlayer
