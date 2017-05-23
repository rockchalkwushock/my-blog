import NavLink from './NavLink'
import NavigationContainer from './NavigationContainer'

const Navigation = () => (
	<NavigationContainer>
		{' | '}
		<NavLink text="About" url="/about" />
		{' | '}
		<NavLink text="Blog" url="/blog" />
		{' | '}
		<NavLink text="Tutorials" url="/tutorials" />
		{' | '}
	</NavigationContainer>
)

export default Navigation
