import Link from 'next/link'

const NavLink = ({ text, url }) => (
  <Link prefetch href={url}>
    <a className="nav-link">
      {text}
      <style jsx>{`
        .nav-link {
          flex: 1 1 auto;
          font-family: Love Ya Like A Sister, cursive;
        }
        .nav-link:hover {
          background-color: #cdd7fa;
          color: #2d3135;
        }
      `}</style>
    </a>
  </Link>
)

export default NavLink
