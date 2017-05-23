import FontAwesome from 'react-fontawesome'

const CopyRight = () => (
	<div className="copyright">
		<span>
			<FontAwesome name="copyright" size="lg" />
			{' '}
			2017 RCWS Development
		</span>
		<style jsx>{`
      .copyright {
        padding-top: 1em;
      }
    `}</style>
	</div>
)

export default CopyRight
