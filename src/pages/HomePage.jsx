import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";
import PawsomeImage from "../assets/images/pawsome.png";

function HomePage() {
  const { projects } = useProjects();    
   return (
       <div >
        <header> Save a life, adopt a dog </header> 
        <img src={PawsomeImage} alt="pawsome logo" />
        
       <div id="project-list">
           {projects.map((projectData, key) => {
               return <ProjectCard key={key} projectData={projectData} />; 
            })}
       </div>

        </div>

   );


}

export default HomePage;