const FlexContainer = ({ children }) => (
	<div className="flex-container">
		{children}
		<style jsx>{`
      .flex-container {
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 50em;
        max-height: 100vh;
        min-height: 100vh;
        padding: 0.75em;
      }
    `}</style>
	</div>
)

export default FlexContainer
