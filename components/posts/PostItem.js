import Link from 'next/link'

const PostItem = ({ date, title, id }) => (
	<Link prefetch href={`${new Date(date).getFullYear()}/${id}`}>
		<article>
			<h5>{date}</h5>
			<h4>{title}</h4>
			<style jsx>{`
        article {
          height: 2.5em;
          display: flex;
          align-items: center;
          flex-direction: row;
          flex: 1;
          align-self: stretch;
          cursor: pointer;
        }
        article:hover {
          border-bottom: 0.125em solid #cdd7f4;
          transition: all .2s ease-in-out;
        }
        h4 {
          margin-left: 3.5em;
          text-align: left;
        }
      `}</style>
		</article>
	</Link>
)

export default PostItem
