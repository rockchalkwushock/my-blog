const FlexContainer = ({ children }) => (
  <div className="flex-container">
    {children}
    <style jsx>{`
      .flex-container {
        background-color: #2d3135;
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 50em;
        min-height: 100vh;
      }
    `}</style>
  </div>
)

export default FlexContainer
