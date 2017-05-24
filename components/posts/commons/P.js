const P = ({ children, className }) => (
  <p className={className}>
    {children}
    <style jsx>{`
      p {

      }
      p.list {
        margin: 0;
        padding: 0;
      }
      p.list::selection {

      }
    `}</style>
  </p>
)

export default P
