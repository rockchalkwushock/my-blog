const SocialContainer = ({ children }) => (
  <div className="social-container">
    {children}
    <style jsx>{`
      .social-container {
        align-items: center;
        display: flex;
        justify-content: space-around;
        width: 7.8em;
      }
    `}</style>
  </div>
)

export default SocialContainer
