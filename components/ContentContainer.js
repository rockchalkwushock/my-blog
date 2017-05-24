const ContentContainer = ({ children }) => (
  <div className="content-container">
    {children}
    <style jsx>{`
      .content-container {

      }
    `}</style>
  </div>
)

export default ContentContainer

// display: flex;
// flex: 1;
// flex-direction: column;
// overflow-y: auto;
// padding: 0.25em 0 0.25em 0;
