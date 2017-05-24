const FooterContainer = ({ children }) => (
  <div className="footer">
    {children}
    <style jsx>{`
      .footer {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 5em;
        justify-content: center;
      }
    `}</style>
  </div>
)

export default FooterContainer
