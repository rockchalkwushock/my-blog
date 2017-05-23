const FooterContainer = ({ children }) => (
	<div className="footer">
		{children}
		<style jsx>{`
      .footer {
        align-items: center;
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        justify-content: center;
      }
    `}</style>
	</div>
)

export default FooterContainer
