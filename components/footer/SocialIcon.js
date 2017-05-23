import FontAwesome from 'react-fontawesome'

const SocialIcon = ({ icon, url }) => (
	<a className="social-link" href={url}>
		<FontAwesome name={icon} size="2x" />
		<style jsx>{`
      .social-link {
        color: #cdd7fa;
        padding: 0 0.25em 0 0.25em;
      }
      .social-link:visited { color: #cdd7fa; }
      .social-link:hover { color: #cdd7fa; }
    `}</style>
	</a>
)

export default SocialIcon
