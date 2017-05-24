const Img = ({ alt, url }) => (
  <div className="img-container">
    <img src={url} alt={alt} />
    <style jsx>{`
      .img-container {
        align-items: center;
        align-self: center;
        display: flex;
        height: 500px;
        justify-content: center;
        margin: 5% 0;
        width: 100%;
      }
      img { height: 50vh; }
      @media (max-width: 750px) and (orientation: portrait) {
        .img-container { height: 300px; }
      }
      @media (max-width: 750px) and (orientation: landscape) {
        .img-container {
          height: 200px;
          margin: 10% 0;
        }
        img { height: 80vh; }
      }
    `}</style>
  </div>
)

export default Img
