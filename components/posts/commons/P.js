const P = ({ children, className }) => (
  <p className={className}>
    {children}
    <style jsx>{`
      p.list { margin: 0; padding: 0; }
    `}</style>
  </p>
)

export default P
