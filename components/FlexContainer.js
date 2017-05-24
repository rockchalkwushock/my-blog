import { colors } from '../lib'

const FlexContainer = ({ children }) => (
  <div className="flex-container">
    {children}
    <style jsx>{`
      .flex-container {
        background-color: ${colors.background.secondary};
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
