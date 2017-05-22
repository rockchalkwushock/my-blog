import Head from 'next/head'

export default () => (
	<div>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
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
        background-color: #2d3135;
        color: #cdd7f4;
        font-family: Source Code Pro, monospace;
        height: 100vh;
        margin: 0;
        padding: 0;
        width: 100vw;
      }
    `}</style>
	</div>
)
