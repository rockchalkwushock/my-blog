import Link from 'next/link'

const NavLink = ({ text, url }) => (
	<Link prefetch href={url}>
		<a className="nav-link">
			{text}
			<style jsx>{`
        .nav-link {
          color: #cdd7fa;
          flex: 1 1 auto;
          font-family: Love Ya Like A Sister, cursive;
          text-decoration: none;
        }
        .nav-link:visited { color: #cdd7fa; }
        .nav-link:hover {
          background-color: #cdd7fa;
          color: #2d3135;
        }
      `}</style>
		</a>
	</Link>
)

export default NavLink
