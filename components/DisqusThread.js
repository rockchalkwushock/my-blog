/* eslint-disable no-undef */

import React from 'react'
import ReactDisqusThread from 'react-disqus-thread'

const DisqusThread = ({ path }) => {
  const postTitle = path.substring(6, path.length)
  return (
    <ReactDisqusThread
      identifier={postTitle}
      shortname={DISQUS}
      title={postTitle}
    />
  )
}

export default DisqusThread
