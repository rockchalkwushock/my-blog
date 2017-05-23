const HeaderContainer = ({ children }) => (
	<div className="header">
		{children}
		<style jsx>{`
      .header {
        align-content: center;
        align-items: center;
        display: flex;
        flex: 1 1 auto;
        justify-content: space-between;
      }
    `}</style>
	</div>
)

export default HeaderContainer
