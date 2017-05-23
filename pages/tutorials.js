import FontAwesome from 'react-fontawesome'
import page from '../lib'

export default page(() => (
	<div className="tutorials">
		<h1>Coming Very Soon!!!</h1>
		<a href="https://youtu.be/P-hUV9yhqgY">
			<FontAwesome name="pied-piper-alt" size="5x" />
		</a>
		<style jsx>{`
      .tutorials {
        align-self: center;
        flex: 1 1 auto;
        margin-top: 8em;
        text-align: center;
      }
      a {
        color: #cdd7fa;
      }
      a:visited {
        color: #cdd7fa;
      }
      a:hover {
        color: green;
      }
    `}</style>
	</div>
))
