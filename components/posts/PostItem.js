import Link from 'next/link'

import { colors } from '../../lib'

const PostItem = ({ date, title, id }) => (
  <Link prefetch href={`${new Date(date).getFullYear()}/${id}`}>
    <article>
      <h5>{date}</h5>
      <h4>{title}</h4>
      <style jsx>{`
        article {
          align-items: center;
          align-self: stretch;
          cursor: pointer;
          display: flex;
          flex: 1;
          flex-direction: row;
          height: 2.5em;
        }
        article:hover {
          border-bottom: 0.125em solid ${colors.textAndLinks.headings};
          transition: all .2s ease-in-out;
        }
        h4 {
          margin-left: 3.5em;
          text-align: left;
        }
        @media (max-width: 34.375em) {
          article {
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 0.5em;
          }
          h4, h5 {
            margin-bottom: 0;
            margin-top: 0;
          }
          h4 { margin-left: 0; }
        }
      `}</style>
    </article>
  </Link>
)

export default PostItem
