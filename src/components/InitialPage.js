import { Card } from "./Card.js"

export function InitialPage(props) {
    return (

        <div className="InitialPage">
            <div className="BodySection">
                <h2>Blurb</h2>
            </div>

            {/* Projects */}
            <div className="BodySection">
                <h2>Projects</h2>

                {/* ToDo: fill out information for these cards, change links to be correct too*/}
                <div className="ProjectCards">
                    <Card projectTitle="Personas and Storyboarding" description="discovering the goals and pain points of charging station users at Brown University"
                        image="images/testpic.jpg" tags={["UX Research", "Personas", "Storyboarding"]}
                        link="https://www.google.com/" setBody={props.setBody} />
                    <Card projectTitle="Responsive Redesign" description="redesigning an X-Ray products website to better align with usability practices"
                        image="images/testpic.jpg" tags={["Heuristic Evaluation", "Usability", "Responsive Site", "Web Development"]}
                        link="https://www.google.com/" />
                    <Card projectTitle="Iterative Design and Evaluation" description="creating and iterating on an interface solution to the problem space defined by Slingshot"
                        image="images/testpic.jpg" tags={["Iterative Design Process", "Design Thinking", "HiFi Wireframing", "Interaction Design"]}
                        link="https://www.google.com/" />
                    <Card projectTitle="Barder" description="a bardering website designed with user expectations in mind"
                        image="images/testpic.jpg" tags={["Web Development", "Mental Models", "Competitive Analysis"]}
                        link="https://www.google.com/" />
                </div>


            </div>

            {/* Artwork and Experiments */}
            {/* <div className="BodySection">
                <h2>Experiments/Artwork</h2>
            </div> */}


        </div>

    )
}