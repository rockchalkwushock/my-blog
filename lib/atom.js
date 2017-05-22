const posts = require('../posts.json')

const max = 10

module.exports = () => `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>RCWS Development</title>
    <subtitle>Articles</subtitle>
    <link href="https://rcws-development.com/atom" rel="self"/>
    <link href="https://rcws-development.com/"/>
    <updated>${posts[0].date}</updated>
    <id>https://rcws-development.com/</id>
    <author>
      <name>Cody Brunner</name>
      <email>rockchalkwushock@icloud.com</email>
    </author>
    ${posts.slice(0, max).reduce((acc, post) => `${acc}
        <entry>
          <id>${post.id}</id>
          <title>${post.title}</title>
          <link href="https://rcws-development.com/${post.date.match(/\d{4}/)[0]}/${post.id}" />
          <updated>${post.date}</updated>
        </entry>`, '')}
  </feed>
`
