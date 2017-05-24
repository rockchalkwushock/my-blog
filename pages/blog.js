import page from '../lib'
import { PostItem } from '../components'
import data from '../posts.json'

export default page(() => (
  <div className="blog-page">
    <div className="posts">
      {data.map(post => <PostItem key={post.id} {...post} />)}
    </div>
    <style jsx>{`
      .blog-page {
        display: flex;
        flex: auto;
        flex-direction: column;
        padding: 2em;
      }
    `}</style>
  </div>
))
