import Link from 'next/link'

import { colors } from '../../../lib'

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
          background-color: ${colors.textAndLinks.primary};
          color: ${colors.background.secondary};
        }
      `}</style>
    </a>
  </Link>
)

export default NavLink
