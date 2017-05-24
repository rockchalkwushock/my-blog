import Copyright from './Copyright'
import FooterContainer from './FooterContainer'
import SocialContainer from './SocialContainer'
import SocialIcon from './SocialIcon'

export const Footer = () => (
  <FooterContainer>
    <SocialContainer>
      <SocialIcon
        icon="github-square"
        url="https://github.com/rockchalkwushock"
      />
      <SocialIcon
        icon="twitter-square"
        url="https://twitter.com/RockChalkDev"
      />
      <SocialIcon
        icon="linkedin-square"
        url="https://www.linkedin.com/in/cody-brunner-6aaa1880/"
      />
      <SocialIcon
        icon="youtube-play"
        url="https://www.youtube.com/channel/UCtHoANxQ1Nf5ga_jqf6sm0A"
      />
      <SocialIcon icon="envelope" url="mailto:rockchalkwushock@icloud.com" />
    </SocialContainer>
    <Copyright />
  </FooterContainer>
)
