import styles from "./HeroStyles.module.css";
import heroImage from "../../assets/hero-img.png";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import twitterLight from "../../assets/twitter-light.svg";
import githubDark from "../../assets/github-dark.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinDark from "../..//assets/linkedin-dark.svg";
import linkedinLight from "../..//assets/linkedin-light.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
 
function Hero() {
	const { theme, toggleTheme } = useTheme();

	const themeIcon = theme === "light" ? sun : moon;
	const twitterIcon = theme === "light" ? twitterLight : twitterDark;
	const githubIcon = theme === "light" ? githubLight : githubDark;
	const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

	return (
		<section id="hero" className={styles.container}>
			<div className={styles.colorModeContainer}>
				<img
					className={styles.hero}
					src={heroImage}
					alt="Profile Picture of Danish Ahmed"
				/>
				<img
					className={styles.colorMode}
					src={themeIcon}
					alt="Color mode Icon"
					onClick={toggleTheme}	
				/>
			</div>
			<div className={styles.info}>
				<h1>
					Danish <br /> Ahmed
				</h1>
				<h2>Full-Stack Developer</h2>
				<span>
					<a href="https://x.com/Danish_Ahmed24" target="_blank">
						<img src={twitterIcon} alt="twitter icon" />
					</a>
					<a href="https://github.com/Danish-Ahmed24/" target="_blank">
						<img src={githubIcon} alt="github icon" />
					</a>
					<a href="https://www.linkedin.com/in/danish-ahmed-6b46b4343/" target="_blank">
						<img src={linkedinIcon} alt="linkdin icon" />
					</a>
				</span>
				<p className={styles.description}>
					Passionate about creating modern web apps with Django & React.
				</p>
				<a href={CV} download>
					<button className="hover">Resume</button>
				</a>
			</div>
		</section>
	);
}

export default Hero;
