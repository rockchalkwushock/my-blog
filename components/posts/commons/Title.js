import { colors } from '../../../lib'

const Title = ({ children }) => (
  <h1>
    {children}
    <style jsx>{`
      h1 {
        color: ${colors.textAndLinks.headings};
        font-family: Love Ya Like A Sister, cursive;
        margin: 0;
        padding: 0.5em 0 0.5em 0;
        text-align: center;
      }
    `}</style>
  </h1>
)

export default Title
