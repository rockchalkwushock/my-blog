import HeaderContainer from './HeaderContainer'
import Navigation from './navigation'
import Logo from './logo'

export const Header = ({ url }) => (
	<HeaderContainer>
		<Logo />
		<Navigation location={url} />
	</HeaderContainer>
)

export default Header
