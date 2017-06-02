import Copyright from './Copyright'
import FooterContainer from './FooterContainer'
import SocialContainer from './SocialContainer'
import SocialIcon from './SocialIcon'

const Footer = () => (
  <FooterContainer>
    <SocialContainer>
      <SocialIcon
        icon="github-square"
        size="2x"
        url="https://github.com/RCWS-Development" // my Github or the Organization????
      />
      <SocialIcon
        icon="twitter-square"
        size="2x"
        url="https://twitter.com/RockChalkDev"
      />
      <SocialIcon
        icon="linkedin-square"
        size="2x"
        url="https://www.linkedin.com/in/cody-brunner-6aaa1880/"
      />
      <SocialIcon
        icon="youtube-play"
        size="2x"
        url="https://www.youtube.com/channel/UCtHoANxQ1Nf5ga_jqf6sm0A"
      />
      <SocialIcon icon="envelope" url="mailto:rockchalkwushock@icloud.com" />
    </SocialContainer>
    <Copyright />
  </FooterContainer>
)

export { Footer, SocialIcon }
