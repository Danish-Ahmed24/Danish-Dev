import styles from "./ProjectStyles.module.css";
import ProjectCard from "../../common/ProjectCard";

// images imports

import eliteAuctions from "../../assets/elite-auctions.png";
import FlightManagementSystem from "../../assets/FlightManagementSystem.png";
import ExpenseTrackerBackend from "../../assets/ExpenseTrackerBackend.png";
import ShoppingManagement from "../../assets/ShoppingManagement.png";
import NetworkApp from "../../assets/NetworkApp.jpg";

const projects = {
	eliteAuctions: {
		src: eliteAuctions,
		link: "https://danishahmed2.pythonanywhere.com/",
		h3: "Elite Auctions",
		p: "Django -  Web App",
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
