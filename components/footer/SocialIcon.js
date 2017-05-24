import FontAwesome from 'react-fontawesome'

const SocialIcon = ({ icon, url }) => (
  <a className="social-link" href={url}>
    <FontAwesome name={icon} size="2x" />
    <style jsx>{`
      .social-link {
        padding: 0 0.25em 0 0.25em;
      }
      .social-link:hover { color: #cdd7fa; }
    `}</style>
  </a>
)

export default SocialIcon
