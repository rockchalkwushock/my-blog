const ContentContainer = ({ children }) => (
	<div className="content-container">
		{children}
		<style jsx>{`
      .content-container {
        display: flex;
        flex-direction: column;
        height: 80vh;
        padding: 0.25em 0 0.25em 0;
      }
    `}</style>
	</div>
)

export default ContentContainer
