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
      .img-container
      @media (max-width: 750px) {
        .img-container { height: 200px; }
      }
      @media (max-width: 550px) {
        .img-container { height: 300px; }
      }
      @media (max-width: 450px) {
        .img-container { height: 250px; }
      }
      img { height: 50vh; }
    `}</style>
  </div>
)

export default Img
