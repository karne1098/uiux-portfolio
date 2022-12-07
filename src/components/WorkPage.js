import { Card } from "./Card.js"

export function WorkPage(props) {
    return (
        <div className="WorkPage">
            <h1> Work Page</h1>
            <div className="ProjectCards">
                <Card projectTitle="Personas and Storyboarding" description="discovering the goals and pain points of charging station users at Brown University"
                    image="images/testpic.jpg" tags={["UX Research", "Personas", "Storyboarding"]}
                    bodyToProject={props.bodyToPersonas} />
                <Card projectTitle="Responsive Redesign" description="redesigning an X-Ray products website to better align with usability practices"
                    image="images/testpic.jpg" tags={["Heuristic Evaluation", "Usability", "Responsive Site", "Web Development"]}
                    bodyToProject={props.bodyToRedesign} />
                <Card projectTitle="Iterative Design and Evaluation" description="creating and iterating on an interface solution to the problem space defined by Slingshot"
                    image="images/testpic.jpg" tags={["Iterative Design Process", "Design Thinking", "HiFi Wireframing", "Interaction Design"]}
                    bodyToProject={props.bodyToIterative} />
                <Card projectTitle="Barder" description="a bardering website designed with user expectations in mind"
                    image="images/testpic.jpg" tags={["Web Development", "Mental Models", "Competitive Analysis"]}
                    bodyToProject={props.bodyToDevelopment} />
            </div>


        </div>

    )
}