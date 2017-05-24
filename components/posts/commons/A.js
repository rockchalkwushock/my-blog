const A = ({ children, href, className }) => (
  <a href={href} className={className}>
    {children}
    <style jsx>{`
      a.inText {
        color: #ffd480;
        text-decoration: underline;
      }
      a.inText:hover {
        color:
      }
      a.small {
        text-decoration: underline;
        text-decoration-color: #ffd480;
      }
      a.small:hover {
        background-color: #ffd480;
        color: #2d3135;
        text-decoration-color: #2d3135;
      }
    `}</style>
  </a>
)

export default A
