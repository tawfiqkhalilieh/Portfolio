import { VIcon } from './icon'
import {
  gmailLogo,
  gmailLogoHover,
  linkedInLogo,
  linkedInLogoHover,
  gitHubLogo,
  gitHubLogoHover
} from '../assets'
import styles from './footer.module.scss'

export function VFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.goUpSquare}/>
      <div className={styles.icons}>
        <VIcon
          defaulIcon={linkedInLogo}
          onHoverIcon={linkedInLogoHover}
          href="https://www.linkedin.com/in/tawfiq-khalilieh-b90b22233/"
          height="30px"
          width="30px"
          name="LinkedIn"/>
        <VIcon
          defaulIcon={gmailLogo}
          onHoverIcon={gmailLogoHover}
          href="mailto:taw.coding@gmail.com"
          height="30px"
          width="30px"
          name="Gmail"/>
        <VIcon
          defaulIcon={gitHubLogo}
          onHoverIcon={gitHubLogoHover}
          href="https://github.com/xtawfeeq7k"
          height="30px"
          width="30px"
          name="GitHub"/>
      </div>
    </footer>
  )
}