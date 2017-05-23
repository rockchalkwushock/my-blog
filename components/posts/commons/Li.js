/* eslint-disable react/no-array-index-key */

const Li = ({ lists }) => (
	<lists>
		{lists.map((item, i) => <div key={i}>{item}</div>)}
		<style jsx>{`
      lists {

      }
    `}</style>
	</lists>
)

export default Li
