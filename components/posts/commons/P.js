const P = ({ children, className }) => (
  <p className={className}>
    {children}
    <style jsx>{`
      p {
        line-height: 1.5;
      }
      p.list { line-height: 1.5em; margin: 0; padding: 0; }
    `}</style>
  </p>
)

export default P
