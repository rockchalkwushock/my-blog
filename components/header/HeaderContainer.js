const HeaderContainer = ({ children }) => (
  <div className="header">
    {children}
    <style jsx>{`
      .header {
        display: flex;
        font-size: 1.125em;
        height: 2em;
        justify-content: flex-end;
        padding-right: 0.75em;
      }
    `}</style>
  </div>
)

export default HeaderContainer
