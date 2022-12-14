export function PersonasProjectPage() {
    return (
        <div className="PersonasProject">
            <div className="ProjectTitle">
                <h1> who is using the charging station at the rock? (a case study) </h1>
            </div>

            {/* Overview */}
            <div className="ProjectSectionContainer">
                <div className="FirstLevelRow">
                    <div className="FirstLevelName">
                        Overview
                    </div>

                    <div className="FirstLevelBox">

                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>process </mark>
                    </div>
                    <div className="SecondLevelBox">
                        <ol >
                            <li> I step into a user's shoes by observing real users interacting with the charging station and interviewing individuals about their experiences.</li>
                            <li> I create personas based on these users.</li>
                            <li> I <b>storyboard</b> the experience of one of the personas, Randy (Repeat User).</li>
                        </ol>
                    </div>
                </div>



            </div>

            {/* Preparation */}
            <div className="ProjectSectionContainer">
                <div className="FirstLevelRow">

                    <div className="FirstLevelName">
                        Preparation
                    </div>

                    <div className="FirstLevelBox">
                        <ol>
                            <li>I create a good set of user interview questions to gage user experience of the charging station.</li>
                            <li>I get a feel of the charging station interface by creating a sketch and writing a brief description of its key interactive components.</li>
                            <li>I hypothesize the problem that the interface is trying to solve: providing a secure place that students can charge their phone.</li>
                        </ol>


                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>interview questions </mark>
                    </div>
                    <div className="SecondLevelBox">
                        <ol>
                            <li>Walk me through what you were thinking when looking and interacting with the charging station?</li>
                            <li>How did you feel as you were interacting with the charging station?</li>
                            <li>Why are you using the charging station today? Feel free to share as much as is comfortable for you.</li>
                            <li>Do you have any prior experiences with the charging station? Follow up: Why or why not? Do you have a memorable experience with it?</li>
                        </ol>
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>structural sketch</mark>
                    </div>
                    <div className="SecondLevelBox">
                        Here is a sketch of the entire charging station. It has a screen and a box section.
                        <img src={process.env.PUBLIC_URL + "/" + "images/charging station sketch.png"} />
                        <br />
                        <br />
                        There are four states the screen can be in:
                        <br />
                        <br />
                        <img src={process.env.PUBLIC_URL + "/" + "images/screen stages.png"} />
                        <br />
                        <br />
                        And there are three states the boxes can be in:
                        <br />
                        <br />
                        <img src={process.env.PUBLIC_URL + "/" + "images/charging box states sketch.png"} />
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>interaction descriptions </mark>
                    </div>
                    <div className="SecondLevelBox">

                        <b>Screen Interactions:</b>
                        <ul>
                            <li>Users tap on the CHARGE 'button' and then tap a charging box to use. Then, they must enter (by tapping) a PIN that they will act as a 'key' to opening the charging box later.
                            </li>
                            <li>
                                Users tap on the RETRIEVE 'button' and then select a box to open. Then, they must enter the PIN they set initially.

                            </li>
                        </ul>

                        <b>Screen to Box Interactions:</b>

                        <ul>
                            <li>Once a user finishes either the CHARGE or RETREIVE process on the screen, the box they selected will open automatically.</li>
                            <li>Users may use any of the charging wires available inside of the box. The wires come out from a hole in the back of the box, where they are likely connected to a power source.</li>
                            <li>Users must manually close the door in order to lock it.</li>
                        </ul>




                    </div>
                </div>





            </div>

            {/* Gathering Data */}
            <div className="ProjectSectionContainer">

                <div className="FirstLevelRow">
                    <div className="FirstLevelName">
                        Gathering Data
                    </div>
                    <div className="FirstLevelBox">
                        <ol>
                            <li> I carefully observe how users interact with the charging station and summarize the key observations and general patterns in user behavior.</li>
                            <li>I interview select users and note key interview findings in common user goals, feelings, and thoughts</li>
                        </ol>
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>key observations </mark>
                    </div>
                    <div className="SecondLevelBox">
                        <ol>
                            <li><b>Speed:</b> some users approached the charging station with speed and interacted with the charging station for less than 30 seconds, whereas other users spent 2-3 minutes interacting with the charging station.</li>
                            <li> <b>Screen vs. Charging Box Interaction:</b> some users looked at, opened, and closed a few different charging boxes during the whole process. Others did not look at the boxes and directly started interacting with the screen. </li>
                            <li> <b>Retrieval:</b> some people had their backpack and jacket on and did not return them to their study spot after retrieving their phone, whereas other people had nothing with them and put their phone back in the charging box after retrieving it and looking at it for a few minutes.</li>
                        </ol>
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>interview insights </mark>
                    </div>
                    <div className="SecondLevelBox">
                        <ol>
                            <li><b>Diving Line in User-Type: </b> First-time users vs. repeat users</li>
                            <li> <b>Screen vs. Charging Box Interaction: </b>
                                First time users learn the screen component intuitively, but they have a slight learning curve in understanding how the screen and boxes interact with each other, whereas repeat users interact with the machine using muscle memory. Their mental model of the charging station is choosing a box, entering a pin, and putting their phone in.  </li>
                            <li> <b>Reason for Use: </b> First time users typically decide to approach the charging station out of curiosity. Whether their phone is about to die or it is 60%, they decide to interact with the machine because it gets their interest. Most repeat users use the charging station more as a safe to keep their phone away from themselves than as a charger. Some repeat users prefer not to bring a charger with them, and the charging station is their crutch if their phone dies. </li>
                            <li><b>Pain Points: </b>
                                The biggest blockage was when the screen reported a box was vacant, but that box had a phone inside OR that box did not have a working iPhone charger.

                                First time users had to spend longer finding a 'good' charging box, but this did not frustrate them.

                                Repeat users knew which boxes were 'bad' and often didn't care anyway. </li>

                        </ol>

                    </div>
                </div>
            </div>

            {/* Personas */}
            <div className="ProjectSectionContainer">

                <div className="FirstLevelRow">
                    <div className="FirstLevelName">
                        Personas
                    </div>
                    <div className="FirstLevelBox">
                        <ol>
                            <li>I use the data I collected from my observations and interviews and use it to create 2 personas.</li>
                            <li>I summarize these personas with empathy maps, describing what users think, feel, say, and do.</li>
                        </ol>
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>empathy maps (draft) </mark>
                    </div>
                    <div className="SecondLevelBox">
                        Here are the initial drafts I created for the two personas: Randy (a repeat user) and Newt (a new user)
                        <img src={process.env.PUBLIC_URL + "/" + "images/repeat user persona.jpg"} />
                        <img src={process.env.PUBLIC_URL + "/" + "images/new user persona.jpg"} />
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark> critiques </mark>
                    </div>
                    <div className="SecondLevelBox">
                        I gained critiques from my classmates (in UIUX @ Brown University), whose collective and comparative opinions helped grade my work.
                        <ul>
                            <li>didn't have thorough personas that aligned with user
                                observations, but did have different types of persona
                                scenarios</li>
                            <li>oddly formatted empathy maps which were funny but
                                not as portfolio ready</li>
                            <li>wasn't totally sure if the personas
                                fully were centered around the interface, but I could totally
                                see their motivations!</li>

                        </ul>
                    </div>
                </div>

                {/* <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark> empathy maps (revised) </mark>
                    </div>
                    <div className="SecondLevelBox">
                        revised empathy map here


                    </div>
                </div> */}

            </div>

            {/* Storyboard */}
            <div className="ProjectSectionContainer">

                <div className="FirstLevelRow">
                    <div className="FirstLevelName">
                        Storyboard
                    </div>
                    <div className="FirstLevelBox">
                        I <b>storyboard</b> the experience of one of the personas, Randy (Repeat User).
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>randy (repeat user)</mark>
                    </div>
                    <div className="SecondLevelBox">
                        <img src={process.env.PUBLIC_URL + "/" + "images/story1.jpg"} />
                        <img src={process.env.PUBLIC_URL + "/" + "images/story2.jpg"} />
                        <img src={process.env.PUBLIC_URL + "/" + "images/story3.jpg"} />
                        <img src={process.env.PUBLIC_URL + "/" + "images/story4.jpg"} />
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark> critiques </mark>
                    </div>
                    <div className="SecondLevelBox">
                        I received critiques through UX Factor, an experimental form of relative grading wherein students' and TA's comparative assesment of submission-pairs cumulitavely grades all submissions. I took these comments seriously.
                        <ul>
                            <li>"You could address emotion more frequently!"</li>
                            <li>"I like how you split up the storyboard to before they
                                started using the charging station and while they were using it" </li>

                            <li>The storyboard "doesn't finish the interaction with the machine (getting phone
                                back)"</li>
                        </ul>
                    </div>
                </div>

                {/* <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>randy (revised)</mark>
                    </div>
                    <div className="SecondLevelBox">
                        revised storyboard goes here
                    </div>
                </div> */}

            </div>

            {/* Reflection */}
            <div className="ProjectSectionContainer">
                <div className={["FirstLevelRow", "OverviewBorder"].join(' ')}>
                    <div className="FirstLevelName">
                        Reflection
                    </div>
                    <div className="FirstLevelBox">
                        If I had more time, I would recreate the personas to make fewer assumptions and focus solely on the information I got from users. I would also finish up the interaction for the storyboard.
                        I appreciate the critiques my peers gave through UX Factor,
                        because they help me see flaws that I did not see myself.
                    </div>
                </div>

            </div>




        </div>
    )
}