const LogoContainer = ({ children }) => (
	<div className="logo-container">
		{children}
		<style jsx>{`
      .logo-container {
        display: flex;
        flex: 1 1 auto;
      }
    `}</style>
	</div>
)

export default LogoContainer
