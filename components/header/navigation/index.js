import NavLink from './NavLink'
import NavigationContainer from './NavigationContainer'

const Navigation = ({ location }) => {
  const component = location === '/'
    ? (<NavigationContainer>
        {' | '}
        <NavLink text="About" url="/about" />
        {' | '}
        <NavLink text="Blog" url="/blog" />
        {' | '}
        <NavLink text="Tutorials" url="/tutorials" />
        {' | '}
      </NavigationContainer>)
    : (<NavigationContainer>
        {' | '}
        <NavLink text="Home" url="/" />
        {' | '}
        <NavLink text="About" url="/about" />
        {' | '}
        <NavLink text="Blog" url="/blog" />
        {' | '}
        <NavLink text="Tutorials" url="/tutorials" />
        {' | '}
      </NavigationContainer>)
  return component
}

export default Navigation
