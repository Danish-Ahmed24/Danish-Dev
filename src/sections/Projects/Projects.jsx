import styles from "./ProjectStyles.module.css";
import ProjectCard from "../../common/ProjectCard";

// images imports

import eliteAuctions from "../../assets/elite-auctions.png";
import FlightManagementSystem from "../../assets/FlightManagementSystem.png";
import ExpenseTrackerBackend from "../../assets/ExpenseTrackerBackend.png";
import ShoppingManagement from "../../assets/ShoppingManagement.png";
import NetworkApp from "../../assets/NetworkApp.jpg";
import InternalTaskPortal from "../../assets/InternalTaskPortal.png"
const projects = {
	eliteAuctions: {
		src: eliteAuctions,
		link: "https://danishahmed2.pythonanywhere.com/",
		h3: "Elite Auctions",
		p: "Django -  Web App",
	},
	InternalTaskPortal: {
		src: InternalTaskPortal,
		link: "https://github.com/Danish-Ahmed24/Internal-Company-Portal",
		h3: "Internal Task Portal",
		// p: "Django - task and project management, developed as an internship project at Lokhandwala Web Solutions House",
		p: "Django - Internal Task Portal at LWWSH",
	},
	NetworkApp: {
		src: NetworkApp,
		link: "https://danish121.pythonanywhere.com/",
		h3: "Network App",
		p: "Django - Social Media App",
	},
	FlightManagementSystem: {
		src: FlightManagementSystem,
		link: "https://github.com/Danish-Ahmed24/Flight-Ticket_Management_sys",
		h3: "Flight Management System",
		p: "Java - Desktop App",
	},
	ExpenseTrackerBackend: {
		src: ExpenseTrackerBackend,
		link: "https://github.com/Danish-Ahmed24/expense-tracker-backend",
		h3: "Expense Tracker",
		p: "Spring - Backend",
	},
	ShoppingManagement: {
		src: ShoppingManagement,
		link: "https://github.com/Danish-Ahmed24/Shopping-Management",
		h3: "Shopping Management",
		p: "C - Console Based",
	},
	
};

function Projects() {
	return (
		<section id="projects" className={styles.container}>
			<h1 className="sectionTitle">Projects</h1>
			<div className={styles.projectsContainer}>
				{Object.values(projects).map((element) => (
					<ProjectCard
						key={element.h3}
						src={element.src}
						link={element.link}
						h3={element.h3}
						p={element.p}
					/>
				))}
			</div>
		</section>
	);
}

export default Projects;
