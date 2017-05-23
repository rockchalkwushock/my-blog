const NavContainer = ({ children }) => (
	<div className="nav-container">
		{children}
		<style jsx>{`
      .nav-container {
        display: flex;
        flex: 1 1 auto;
        text-align: center;
      }
    `}</style>
	</div>
)

export default NavContainer
