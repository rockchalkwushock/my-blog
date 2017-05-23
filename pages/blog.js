import page from '../lib'
import { PostItem } from '../components'
import data from '../posts.json'

export default page(() => (
	<div className="blog">
		<div className="posts">
			{data.map(post => <PostItem key={post.id} {...post} />)}
		</div>
		<style jsx>{`
      .blog {

      }
    `}</style>
	</div>
))
