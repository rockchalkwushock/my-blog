import { colors } from '../../../lib'

const SubTitle = ({ children }) => (
  <h3>
    {children}
    <style jsx>{`
      h3 {
        color: ${colors.textAndLinks.secondary};
        text-decoration: underline;
      }
    `}</style>
  </h3>
)

export default SubTitle
