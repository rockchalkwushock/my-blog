import { colors } from '../../../lib'

const A = ({ children, href, className }) => (
  <a href={href} className={className}>
    {children}
    <style jsx>{`
      a.inText {
        text-decoration: underline;
        text-decoration-color: ${colors.textAndLinks.headings};
      }
      a.inText:hover {
        background-color: ${colors.textAndLinks.headings};
        color: ${colors.background.secondary};
        text-decoration-color: ${colors.background.secondary};
      }
      a.small {
        text-decoration: underline;
        text-decoration-color: ${colors.textAndLinks.headings};
      }
      a.small:hover {
        background-color: ${colors.textAndLinks.headings};
        color: ${colors.background.secondary};
        text-decoration-color: ${colors.background.secondary};
      }
    `}</style>
  </a>
)

export default A
