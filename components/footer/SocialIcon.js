import FontAwesome from 'react-fontawesome'

import { colors } from '../../lib'

const SocialIcon = ({ icon, size, url }) => (
  <a className="social-link" href={url}>
    <FontAwesome name={icon} size={size} />
    <style jsx>{`
      .social-link {
        padding: 0 0.25em 0 0.25em;
      }
      .social-link:hover { color: ${colors.textAndLinks.primary}; }
    `}</style>
  </a>
)

export default SocialIcon
