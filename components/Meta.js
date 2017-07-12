import Head from 'next/head'

import { colors } from '../lib'

export default () =>
  (<div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta
        name="google-site-verification"
        content="9REb3tx03TyhMlN95vlFK6FDBN_ZNwwqzPog3VSlvtU"
      />
      <meta name="apple-mobile-web-app-title" content="RCWS Development" />
      <meta name="application-name" content="RCWS Development" />
      <meta name="msapplication-TileColor" content="#378ee5" />
      <meta
        name="msapplication-TileImage"
        content="../static/mstile-144x144.png"
      />
      <meta name="theme-color" content="#378ee5" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="../static/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="../static/favicon-16x16.png"
      />
      <link rel="manifest" href="../static/manifest.json" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
        async
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        async
      />
      <link
        href="https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister|Source+Code+Pro"
        rel="stylesheet"
        async
      />
      <link
        href="/atom"
        type="application/atom+xml"
        rel="alternate"
        title="Cody Brunner"
      />
      <title>RCWS Development</title>
    </Head>
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      body {
        background-color: ${colors.background.primary};
        color: ${colors.textAndLinks.primary};
        font-family: Source Code Pro, monospace;
        height: 100vh;
        margin: 0;
        overflow-x: hidden;
        padding: 0;
        width: 100vw;
      }
      a {
        color: ${colors.textAndLinks.primary};
        text-decoration: none;
      }
      a:visited {
        color: ${colors.textAndLinks.primary};
      }
      #nprogress {
        pointer-events: none;
      }
      ::selection {
        background-color: ${colors.textAndLinks.primary};
        color: ${colors.background.secondary};
      }
      #nprogress .bar {
        background: ${colors.textAndLinks.headings};
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px red, 0 0 5px ${colors.textAndLinks.headings};
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }
      .hljs {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        color: #abb2bf;
        background: #282c34;
      }
      .hljs-comment,
      .hljs-quote {
        color: #5c6370;
        font-style: italic;
      }
      .hljs-doctag,
      .hljs-keyword,
      .hljs-formula {
        color: #c678dd;
      }
      .hljs-section,
      .hljs-name,
      .hljs-selector-tag,
      .hljs-deletion,
      .hljs-subst {
        color: #e06c75;
      }
      .hljs-literal {
        color: #56b6c2;
      }
      .hljs-string,
      .hljs-regexp,
      .hljs-addition,
      .hljs-attribute,
      .hljs-meta-string {
        color: #98c379;
      }
      .hljs-built_in,
      .hljs-class .hljs-title {
        color: #e6c07b;
      }
      .hljs-attr,
      .hljs-variable,
      .hljs-template-variable,
      .hljs-type,
      .hljs-selector-class,
      .hljs-selector-attr,
      .hljs-selector-pseudo,
      .hljs-number {
        color: #d19a66;
      }
      .hljs-symbol,
      .hljs-bullet,
      .hljs-link,
      .hljs-meta,
      .hljs-selector-id,
      .hljs-title {
        color: #61aeee;
      }
      .hljs-emphasis {
        font-style: italic;
      }
      .hljs-strong {
        font-weight: bold;
      }
      .hljs-link {
        text-decoration: underline;
      }
    `}</style>
  </div>)
