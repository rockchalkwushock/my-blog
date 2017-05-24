const Img = ({ alt, url }) => (
  <div className="img-container">
    <img src={url} alt={alt} />
    <style jsx>{`
      .img-container {
        align-items: center;
        align-self: center;
        display: flex;
        height: 31.250em;
        justify-content: center;
        margin: 5% 0;
        width: 100%;
      }
      img { height: 50vh; }
      @media (max-width: 46.875em) and (orientation: landscape) {
        .img-container {
          height: 12.500em;
          margin: 10% 0;
        }
        img { height: 80vh; }
      }
    `}</style>
  </div>
)

export default Img
