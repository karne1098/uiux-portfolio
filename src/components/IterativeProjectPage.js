export function IterativeProjectPage() {
    return (
        <div className="IterativeProject">
            <div className="ProjectTitle">
                <h1> how can we make an app that monitors overcharged medical bills (an iterative design group project) </h1>
            </div>

            {/* Overview */}
            <div className="ProjectSectionContainer">
                <div className={["FirstLevelRow", "OverviewBorder"].join(' ')}>
                    <div className="FirstLevelName">
                        Overview
                    </div>
                    <div className="FirstLevelBox">
                        A group exercise in designing an interactive interface for an emerging startup.
                        <img src={process.env.PUBLIC_URL + "/" + "images/iterative overview image.png"} />
                        <b> Our Project</b> <br />
                        For this project, we chose to design a mobile interface for Slingshot, a YC startup that utilizes software that automatically monitors and reduces people's medical bills. <br />
                        <b> The Product</b> <br />
                        With Slingshot, users can sign up and connect their insurance.
                        The software will then begin to automatically monitor all claims processed by the user's insurance and will notify the user when they are being overcharged for errors, up-codes, uncovered costs, and negotiable items.
                        From these notifications, users have the option of enabling Slingshot to correct and lower their medical bills.
                        Users can also upload medical bills directly and opt in for automatic insurance claim monitoring.
                    </div>
                </div>
            </div>

            {/* Sketches and Wireframes */}
            <div className="ProjectSectionContainer">
                <div className="FirstLevelRow">
                    <div className="FirstLevelName">
                        Sketches and Wireframes
                    </div>
                    <div className="FirstLevelBox">
                    </div>
                </div>

                {/* Pre-Design Thinking */}
                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>pre-design thinking </mark>
                    </div>
                    <div className="SecondLevelBox">
                        We decided to focus on the direct user interactions of Slingshot, where users easily access information on their medical bill savings.
                        As a result, we decided to create a mobile interface for Slingshot, since mobile interfaces are accessible to any smartphone user, for easy, everyday use, and they allow for real-time state monitoring through push notifications. <br /> <br />
                        Because Slingshot is focused around consumer health services, there's a wide range of potential users who would be impacted by our interface:
                        <ul>
                            <li> Financially stable people with insurance (either through employment or personal payment)</li>
                            <ul>
                                <li>People who are financially stable often can afford receiving regular medical check-ups when ill, which can be hard to keep up with when the frequency of bills received increases. This demographic could be positively impacted by our prototype in that having a mobile interface for the Slingshot software would make checking for extraneous costs on a large batch of bills received much easier to catch and manage accordingly.</li>
                                <li>People who can generally afford care but may be tipped over by a particularly financially strenuous bill would also be positively affected, since having both the Slingshot software and the availability of that software on an easily accessible device like mobile would help to mitigate the adverse effects certain medical bills may have on a user.</li>
                            </ul>
                            <li> Under-served, uninsured populations </li>
                            <ul>
                                <li>People like those experiencing poverty, houselessness, disability, chronic illness(es), mental illness(es), etc. would benefit from such a service and interface, as our prototype would provide these users the option of both the technical details of their cost breakdowns and savings, as well as additional information and resources for them to access, all in one application. For those who wouldn’t have a mobile device to access our prototype from would at least be able to access the information Slingshot would provide through any device supporting the receiving of and access to emails. </li>
                                <li>People who turn to healthcare services as a last resort or in emergency situations would also benefit from a mobile interface for Slingshot, considering ER bills can be extremely costly and oftentimes more damaging than the medical incident itself. With both the ease of access through a mobile application and the Slingshot software available through that interface, these users would be able to easily view detailed descriptions of what they were charged for like they would from an itemized bill, while simultaneously being able to account for and reduce those charges. </li>
                            </ul>
                        </ul>
                    </div>
                </div>

                {/* sketches */}
                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>sketches </mark>
                    </div>
                    <div className="SecondLevelBox">
                        We began our iterative design process by having each member create rough sketches for 3 different screens. We didn't specify what those screens would entail, as we wanted to get an idea of what type of screens each member thought would be the most essential for the prototype. Though some of us had screens that overlapped, we felt that our design concepts overall were substantially different enough to include them in our final sketches. You can find each of our sketches below: <br /> <br />
                        Team Member 1
                        <img src={process.env.PUBLIC_URL + "/" + "images/iterative sketch1.png"} />
                        <br />
                        Team Member 2
                        <img src={process.env.PUBLIC_URL + "/" + "images/iterative sketch2.png"} />
                        <br />
                        Team Member 3
                        <img src={process.env.PUBLIC_URL + "/" + "images/iterative sketch3.png"} />
                        Team Member 4
                        <img src={process.env.PUBLIC_URL + "/" + "images/iterative sketch4.png"} />
                        <br />
                        <br />
                    </div>
                </div>

                {/* Lofi Wireframes */}
                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>lofi wireframes </mark>
                    </div>
                    <div className="SecondLevelBox">
                        After we finished our rough sketches, we incorporated our sketches (overlapping and separate) with additional features we felt were also relevant to Slingshot's mission into one set of wireframes with 4 different screens: a “Home” page, a “Bills” page, a “Trends” page, and a “Resources” page.
                        <img src={process.env.PUBLIC_URL + "/" + "images/iterative lofi wireframes.png"} />

                    </div>
                </div>

            </div>

            {/* Gathering Data */}
            <div className="ProjectSectionContainer">

                <div className="FirstLevelRow">
                    <div className="FirstLevelName">
                        Mockups
                    </div>
                    <div className="FirstLevelBox">
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>initial hifi </mark>
                    </div>
                    <div className="SecondLevelBox">
                        After creating our wireframes, we implemented them into a more polished, Hi-Fi prototype through Figma. In this prototype, we also added a few features not included in our original Lo-Fi design (such as the 'Click to Upload Bill' button on the "Home" page) and included significantly more detail for realistic interactions users would be engaging with.
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>critiques </mark>
                    </div>
                    <div className="SecondLevelBox">
                        We presented this prototype to a critique session with other students in the CSCI1300 course. The main critiques we received regarded:
                        <ol>
                            <li>
                                <b> Lack of User Control and Freedom: </b>Missing “back” functionality on nested pages and “escape” options from drop-down menus made it inconvenient for users to navigate through pages
                            </li>
                            <li>
                                <b> Ineffective Aspects of our Design System: </b> The use of transparency for both cards and buttons takes away from the “Call-to-Action” nature of the buttons.
                            </li>
                            <li>
                                <b> Disrupting User Mental Models: </b>Returning to the “Home” page violated users’ expectations of having an animation that was not distinguishable from the animations of leaving the “Home” page (both actions caused pages to come in from the right).
                            </li>
                            <li>
                                <b> Overlooking Visibility: </b> The subpage tabs displayed on the “Trends” and “Resources” headers were difficult to read, as they required that users scroll horizontally to be able to view all of the offered subpages.
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>iterated prototype </mark>
                    </div>
                    <div className="SecondLevelBox">
                        Once we received our critiques, we further iterated on our design by implementing fixes based on the suggestions offered by our fellow CSCI1300 students. We addressed each main critique in our final, Hi-Fi prototype:
                        <ol>
                            <li>
                                <b> Improving User Control and Freedom: </b>We implemented “back” functionality on nested pages as seen in our “Bills” page, which consisted of the most nested interactions of our prototype, using “back” buttons. We also implemented “back” functionality for the drop-down menus in which they would return to their closed state when users would click on any part of the screen outside of the menus.
                            </li>
                            <li>
                                <b> Improve Upon our Design System: </b> We assigned opaque colors to buttons like “Click to Upload Bills” on the “Home” page and drop-down menus on the “Bills” and “Trends” page, while only using transparent colors for cards.
                            </li>
                            <li>
                                <b> Aligning with User Mental Models: </b>We added an animation for returning to the “Home” page (page comes in from the left) that was the opposite of the animations used for leaving the “Home” page to align with the idea that returning to a page is the opposite of leaving a page.
                            </li>
                            <li>
                                <b> Accounting for Visibility: </b> We removed the scrolling feature and reduced the size of the subpage tab names on both the “Trends” and “Resources pages so users would be able to view all of the subpages offered in one place.
                            </li>
                        </ol>
                        <br />
                        You can find and interact with our final prototype <a href="https://www.figma.com/proto/sPyO1Rdaw9DfFYsvFSV1SB/Slingshot-Iterative-Design?node-id=17%3A16&scaling=scale-down&page-id=16%3A2&starting-point-node-id=17%3A16&show-proto-sidebar=1"> here</a>
                    </div>
                </div>

            </div>

            {/* User Testing */}
            <div className="ProjectSectionContainer">

                <div className="FirstLevelRow">
                    <div className="FirstLevelName">
                        User Testing
                    </div>
                    <div className="FirstLevelBox">
                        After finalizing our hi-fi prototype, we sent the prototype to a <a href="https://www.usertesting.com/"> remote user testing service</a> to gather feedback and data on our design from random users.
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>testing prep </mark>
                    </div>
                    <div className="SecondLevelBox">
                        <ol>
                            <li>
                                <span className="SecondLevelBoxOrderedList">Task: </span>for users to test our prototype, we needed to create a specific task for them to accomplish. We decided on the following:
                            </li>
                            <ul>
                                <li>
                                    Find the cost breakdown of how much you saved in “Physician Services” on your most recently completed bill from RI Hospital."
                                </li>
                            </ul>

                            <li>
                                <span className="SecondLevelBoxOrderedList">Subtasks: </span>to complete this task, we broke down a user's required actions into 4 subtasks:
                            </li>
                            <ul>
                                <li>Navigate to the "Bills" page.</li>
                                <li>Click on the “Sort and Filter” dropdown button to sort the “Completed” bills by “Most Recent.”</li>
                                <li>Find the most recently completed bill from RI Hospital.</li>
                                <li>Click on “Emergency Visit, Level 4” under “Physician Services” to see the cost breakdown of what you saved.</li>
                            </ul>

                            <li>
                                <span className="SecondLevelBoxOrderedList">Context: </span> we included the following blurb for the user to keep in mind:
                            </li>
                            <ul>
                                <li>
                                    "Imagine you are a company employee stressed about medical bills from your emergency room visit in September. You want to check if that medical bill has reduced in cost through the Slingshot app on your phone. Your task is to find the cost breakdown of how much you saved in “Physician Services” on your most recently completed bill from RI Hospital. You are encouraged to think aloud as you perform the task so we can better understand your thought process while navigating the site! Please note that this is an interactive mock-up and not an actual mobile application. Some screens (e.g. the Spendings tab in the Trends page) were not actually created or are unreachable through the mock-up."
                                </li>
                            </ul>

                            <li>
                                <span className="SecondLevelBoxOrderedList">Post-Test Questionnaire: </span> we asked users these questions after they finished the test:
                            </li>
                            <ul>
                                <li>
                                    How would you describe your overall experience with the prototype?
                                </li>
                                <li>
                                    What, if anything, surprised you about the experience?
                                </li>
                                <li>
                                    What, if anything, made you frustrated about the app?
                                </li>
                                <li>
                                    What are your thoughts on the design, color, and/or layout?
                                </li>
                            </ul>


                        </ol>






                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark> results </mark>
                    </div>
                    <div className="SecondLevelBox">
                        We had a total of 3 users test our Hi-Fi prototype, and you can find video captures of their tests below:
                        <ul>
                            <li>
                                <a href="https://app.usertesting.com/v/55924344-b259-4886-a32d-ca6c7f3a4c5a?encrypted_video_handle=e7115a6f-b1cf-4b81-9111-049c9ced1a43&shared_via=email#!/notes" target="_blank" rel="noreferrer">User 1</a>
                            </li>
                            <li>
                                <a href="https://app.usertesting.com/v/c87e4020-6227-4fea-ab4c-852294396ddf?encrypted_video_handle=ce8f0fe0-aa48-4f4d-9b26-c344ce1a74bd&shared_via=email#!/notes" target="_blank" rel="noreferrer">User 2</a>
                            </li>
                            <li>
                                <a href="https://app.usertesting.com/v/847b2b60-af8d-436b-a9dc-76fbad938169?encrypted_video_handle=94eda025-74a2-4df8-9162-adf39f07882f&shared_via=email#!/notes" target="_blank" rel="noreferrer">User 3</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark> analysis </mark>
                    </div>
                    <div className="SecondLevelBox">
                        We analyzed each user testing video by breaking down the subtasks, the errors users had made, overall user performance with the prototype. Then we note some next steps we would take to iterate accordingly:

                        <ul>
                            <li>
                                <span className="SecondLevelBoxOrderedList">Confidence: </span>all users had a general sense of confidence and navigated with ease
                            </li>
                            <br />
                            <li>
                                <span className="SecondLevelBoxOrderedList">Error Handling: </span>any errors they came across, they were eventually able to resolve with some exploration.
                            </li>
                            <br />
                            <li>
                                <span className="SecondLevelBoxOrderedList">Information Clarity: </span>we should pecify exactly what the numerical price values on the cards mean, since one user had an issue with this
                            </li>
                            <br />
                            <li>
                                <span className="SecondLevelBoxOrderedList">Organization: </span>
                            </li>
                            <ul>
                                <li>
                                    Space footer icons out such that the chances of a user clicking on an icon they did not intend to interact with would be reduced
                                </li>
                                <li>
                                    Make the header titles more noticeable and attention-grabbing so users can easily deduce where they are in the app
                                </li>
                            </ul>

                            <li>
                                <span className="SecondLevelBoxOrderedList">Mental Models: </span>change the "Sort and Filter" button into two separate buttons: one for "Filter" and one for "Sort" to better align with user expectations
                            </li>
                            <br />

                            <li>
                                <span className="SecondLevelBoxOrderedList">User Populations: </span>
                                more research will need to be done to further address the needs of those that are in situations where their smartphone use is dependent on aspects like accessibility, financial situation, housing status, or any other factor (what unique issues do they face that we have not designed for in our app?)
                            </li>


                        </ul>
                    </div>



                </div>

            </div>

            {/* Reflection */}
            <div className="ProjectSectionContainer">

                <div className="FirstLevelRow">
                    <div className="FirstLevelName">
                        Reflection
                    </div>
                    <div className="FirstLevelBox">

                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark> what i learned </mark>
                    </div>
                    <div className="SecondLevelBox">
                        <ol>
                            <li> <span className="SecondLevelBoxOrderedList"> I learned how to collaboratively and iteratively design</span> </li>
                            <ul>
                                <li>
                                    Talking through our different opinions and thought processes is key.
                                    By understanding our work and synthesizing our ideas, we were able to collectively construct a better, more well-rounded design than we would have been able to do on our own.
                                </li>
                                <li>
                                    Conducting effective online user testing requires dilligence and strategic planning. While the testing platform and potential users may be easy to get feedback from, that feedback is only as effective as the instructions and questions that we ask them. </li>
                                <li>
                                    Asking for and receiving constructive critiques is a valuable skill. By being open to criticism from peers, I not only practice the skill of critically re-thinking and re-imagining designs, but also the skill of defending design choices that we had made.
                                </li>
                                <li>
                                    Rapidly iterating in the span of 2 weeks requires a highly motivated and cooperative team. Effective communication and task allocation according to priority allowed us to successfully complete the project.
                                </li>
                            </ul>
                            <li> <span className="SecondLevelBoxOrderedList"> I learned interactive prototyping in Figma</span> </li>
                            <ul>
                                Thinking about interaction and motion design is crucial for mobile UX, since users are viewing the screen at such an intimate distance. Figma allows us to visualize these interactions without any code.
                            </ul>
                            <li> <span className="SecondLevelBoxOrderedList"> I understand how my values inform my work.</span> </li>
                            <ul>
                                <li>
                                    I enjoyed working on a project in the domain of public health and healthcare, and I intend to continue working on projects related to the intersection of healthcare and tech.
                                </li>
                            </ul>

                        </ol>
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark> next steps </mark>
                    </div>
                    <div className="SecondLevelBox">
                        My Team and I contacted the Founders of Slingshot and are excited to how their startup develops in the coming years!
                    </div>
                </div>

            </div>




        </div>
    )
}