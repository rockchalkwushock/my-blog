const NavContainer = ({ children }) => (
  <div className="nav-container">
    {children}
    <style jsx>{`
      .nav-container {
        align-self: center;
        display: flex;
      }
    `}</style>
  </div>
)

export default NavContainer
