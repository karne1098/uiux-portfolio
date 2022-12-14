import { Card } from "./Card.js"
export function WorkPage(props) {
    return (
        <div className="WorkPage">
            <h1> My Work</h1>
            <div className="ProjectCards">
                <Card projectTitle="Barder" description="a bardering website designed with user expectations, coding expectations, and context in mind"
                    image="images/development cover.jpg" tags={["Context Research", "Web Development", "Competitor Analysis", "Task Management"]}
                    bodyToProject={props.bodyToDevelopment} />
                <Card projectTitle="Pacific Northwest X-Ray Inc." description="redesigning an X-Ray products website to better align with screen responsivity and accessibility practices"
                    image="images/redesign cover.png" tags={["Screen Responsiveness", "Usability", "Accessibility", "Web Development"]}
                    bodyToProject={props.bodyToRedesign} />
                <Card projectTitle="Charging Station @ the Rock" description="discovering the goals and pain points of charging station users at Brown University"
                    image="images/charging station sketch.png" tags={["Ethnographic Research", "User Interview", "Personas", "Storyboarding"]}
                    bodyToProject={props.bodyToPersonas} />

                <Card projectTitle="Slingshot" description="creating and iterating on an interface solution to the problem space defined by Slingshot"
                    image="images/iterative overview image.png" tags={["Iterative Design Process", "HiFi Wireframing", "Interaction Design", "Group Work"]}
                    bodyToProject={props.bodyToIterative} />

            </div>


        </div>

    )
}