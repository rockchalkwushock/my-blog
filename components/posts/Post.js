const Post = ({ children }) => (
	<div className="post">
		{children}
		<style jsx>{`
      .post {
        background-color: teal;
        display: flex,
        flex-direction: column;
      }
    `}</style>
	</div>
)

export default Post
