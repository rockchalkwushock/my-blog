import HeaderContainer from './HeaderContainer'
import Navigation from './navigation'

export const Header = ({ url }) => (
  <HeaderContainer>
    <Navigation location={url} />
  </HeaderContainer>
)

export default Header
