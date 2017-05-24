const Scrimba = ({ src }) => (
  <div className="scrimba">
    <iframe width="600" height="400" src={src} />
    <style jsx>{`
      .scrimba {
        align-items: center;
        align-self: center;
        display: flex;
        justify-content: center;
      }
    `}</style>
  </div>
)

export default Scrimba
