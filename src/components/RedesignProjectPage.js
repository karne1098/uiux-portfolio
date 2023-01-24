export function RedesignProjectPage() {
    return (
        <div className="PersonasProject">
            <div className="ProjectTitle">
                <h1> what's going on with the design of this x-ray e-commerce site? (a responsive redesign) </h1>
            </div>

            {/* Overview */}
            <div className="ProjectSectionContainer">
                <div className={["FirstLevelRow", "OverviewBorder"].join(' ')}>
                    <div className="FirstLevelName">
                        Overview
                    </div>
                    <div className="FirstLevelBox">
                        I chose to redesign a page of the Pacific Northwest X-Ray Inc because their interface is not <i>responsive</i>. This means that the website page layout does not change or <i>respond to</i> the screen or window size of the user's device.
                        The site's design has severe usability and accessibility problems both related to and unrelated to its lack of responsivity. <br /> <br />
                        The content of the site also allows me to gain experience designing within a domain that I am interested in (medicine and public health).
                        Throughout this page, you'll see how and why I redesigned the X-Ray page from its {" "}
                        <a href="https://www2.pnwx.com/Accessories/LeadProducts/Aprons/TechnoAideFlex/" target="_blank">[existing design]</a> :
                        <img src={process.env.PUBLIC_URL + "/" + "images/redesign old site.png"}
                            alt="This laptop mockup of the existing X-Ray site previews the usability and accessibility issues." />
                        To the {"  "}
                        <a href="https://radicalwaterbear101.github.io/redesign" target="_blank">[my redesign]</a> :
                        <img src={process.env.PUBLIC_URL + "/" + "images/redesign cover.png"}
                            alt="This laptop mockup of my redesign previews my solution to the usability and accessibility issues." />
                        Feel free visit these sites and change the size of your viewing window to see how the different websites behave.
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>process </mark>
                    </div>
                    <div className="SecondLevelBox">
                        <ol >
                            <li>I analyze and identify <b>problems</b> in an existing interface.</li>
                            <li>For various screen sizes, I <b>prepare</b> low-fidelity sketches, a design system, high-fidelity prototypes, and notes for handoff to developers. </li>
                            <li>I <b>code a responsive site</b> according to the design materials I prepared.</li>
                        </ol>
                    </div>
                </div>

            </div>

            {/* Problems */}
            <div className="ProjectSectionContainer">
                <div className="FirstLevelRow">

                    <div className="FirstLevelName">
                        Problems in Existing Site
                    </div>

                    <div className="FirstLevelBox">
                        I analyze and identify <b>problems</b> in an existing interface.
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>usability</mark>
                    </div>
                    <div className="SecondLevelBox">
                        The page is not learnable, memorable, or effecient.
                        <ol>
                            <li>
                                <span class="SecondLevelBoxOrderedList">Pictures are scattered and non-uniform</span>
                                <ul>
                                    <li> Images are placed randomly throughout the page</li>
                                    <li>Images are differently sized</li>
                                    <li>Some images have captions, some do not.</li>
                                    <li>Some pictures can be enlarged by clicking on it, while others cannot. </li>
                                    <li>For each of the images that can be expanded, the indicative "click to expand" text is styled differently. </li>

                                </ul>
                            </li>
                            <li>
                                <span class="SecondLevelBoxOrderedList">There is no affordance for whether an element can be clicked</span>
                                <ul>
                                    <li>There is no indication that certain things are clickable other than the cursor changing from an arrow to a hand. </li>
                                </ul>
                            </li>
                            <li>
                                <span class="SecondLevelBoxOrderedList">It's hard to figure out how to order the product:</span>
                                <ul>
                                    <li>Throughout the page, ordering is mentioned but the deliverable changes: a form, a call, an email... what exactly is it?</li>
                                    <li>The order form is at the bottom of the page as a part of the footer.</li>
                                    <li>The image of the credit cards might lead users to think that they can order on this site, when in fact they cannot.</li>
                                    <li>To truly understand the methods of ordering, one has to navigate to a <a href="http://www2.pnwx.com/Buy/"> separate page</a></li>.
                                </ul>
                            </li>

                            <li>
                                <span class="SecondLevelBoxOrderedList">No visual hierarchy or visual organization</span>
                                <ul>
                                    <li>There is a variety of bolding, color, and text-size changes that are used to draw distinction/attention, but there is no logic to these styles. </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>accessibility</mark>
                    </div>
                    <div className="SecondLevelBox">

                        The page is inaccessible. The website was tested for accessibility using
                        <a href="https://wave.webaim.org/"> WebAIM WAVE</a>. Here are major conclusions from the results:
                        <ol>
                            <li>
                                <span class="SecondLevelBoxOrderedList">Important elements are missing alternative text.</span>
                                <ul>
                                    <li> Most images do not have alternative text </li>
                                    <li> Hotspots like the navigation bar do not have alternative text</li>
                                </ul>
                            </li>
                            <li>
                                <span class="SecondLevelBoxOrderedList">Many low-contrast areas are difficult to read</span>
                                <ul>
                                    <li> The background is a busy pattern in a relatively strong blue, making it hard to read black text.</li>
                                </ul>
                            </li>

                            <li>
                                <span class="SecondLevelBoxOrderedList">Language isn't defined</span>
                                <ul>
                                    <li> This is problematic because users that use screen readers need that to read in the proper language.</li>
                                </ul>
                            </li>

                            <li>
                                <span class="SecondLevelBoxOrderedList">No page regions or first level heading</span>
                                <ul>
                                    <li>This is problematic because users who use assistive technologies require that in order to navigate through the page. .</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>thoughts...</mark>
                    </div>
                    <div className="SecondLevelBox">
                        I  agree with the problems detected and I believe they must be addressed.
                        As somebody who centers accessibility and believes in Universal Design (designing for use by as many people as possible),
                        I think the inaccessibility to people who use assistive technologies and to people who have vision impairments needs to be fixed. <br /> <br />

                        Further, I will add that the page is inaccessible to neurodivergent users.
                        The (lack of) organization of the page is inaccessible to some autistic individuals who have issues processing highly crowded, color-saturated, unorganized, and un-navigatiable pages due to the ways some autistic users process information.
                        Additionally, some users with ADHD will especially struggle with the lack of feedback after interactions, unclear pathway to the goal, and nonexistent hierarchy.
                    </div>


                </div>


            </div>

            {/* Making solutions */}
            <div className="ProjectSectionContainer">

                <div className="FirstLevelRow">
                    <div className="FirstLevelName">
                        Preparation For Coding...
                    </div>
                    <div className="FirstLevelBox">
                        For various screen sizes, I <b>prepare</b> low-fidelity sketches, a design system, high-fidelity prototypes, and notes for handoff to developers.

                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>lofi wireframes </mark>
                    </div>
                    <div className="SecondLevelBox">
                        I created LoFi wireframe sketches for mobile and tablet/desktop screen sizes.
                        <br />
                        <br />
                        <br />
                        <span className="SecondLevelBoxOrderedList">mobile lofi wireframes: </span>
                        <br />
                        <br />
                        <img src={process.env.PUBLIC_URL + "/" + "images/redesign lofi mobile.jpg"} />
                        <br />
                        <br />
                        <br />
                        <span className="SecondLevelBoxOrderedList">tablet/desktop wireframes:</span>
                        <br />
                        <br />
                        <img src={process.env.PUBLIC_URL + "/" + "images/redesign lofi desktop.jpg"}
                            alt="" />
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>design system </mark>
                    </div>
                    <div className="SecondLevelBox">
                        <br />
                        <span className="SecondLevelBoxOrderedList">Atoms: </span> these are the smallest design choices that we build larger components on
                        <br />
                        <br />
                        <img src={process.env.PUBLIC_URL + "/" + "images/redesign atoms.jpg"} />
                        <br />
                        <br />
                        <span className="SecondLevelBoxOrderedList">Molecules: </span> elements that will repeat in the site, comprising of many atoms
                        <br />
                        <br />
                        <img src={process.env.PUBLIC_URL + "/" + "images/redesign molecules.jpg"} />
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>hifi wireframes </mark>
                    </div>
                    <div className="SecondLevelBox">
                        <ol>
                            <li> <span class="SecondLevelBoxOrderedList">Desktop</span></li>
                            <ul>
                                <li> This is the largest screen size. Most users would be viewing with a Destop Device.</li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/" + "images/redesign hifi desktop.jpg"} />
                                </li>
                            </ul>
                            <br />
                            <br />
                            <br />
                            <li> <span class="SecondLevelBoxOrderedList">Tablet</span></li>
                            <ul>
                                <li> This is the size of an iPad, surface Pro, or any other mid-size device.</li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/" + "images/redesign hifi tablet.jpg"} />
                                </li>
                            </ul>
                            <br />
                            <br />
                            <br />
                            <li> <span class="SecondLevelBoxOrderedList">Mobile</span></li>
                            <ul>
                                <li> This is the smallest screen size. It's important to note that few users would be viewing the x-ray equipment using a mobile device.</li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/" + "images/redesign hifi mobile.jpg"} />
                                </li>
                            </ul>
                        </ol>
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>notes on handoff </mark>
                    </div>
                    <div className="SecondLevelBox">
                        <ol>
                            <li> <span class="SecondLevelBoxOrderedList">Mobile</span></li>
                            <ul>
                                <li> I began with notes on the mobile version, since considerations on flex-wrap were necessary.</li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/" + "images/redesign handoff mobile.jpg"} />
                                </li>
                            </ul>
                            <br />
                            <br />
                            <br />
                            <li> <span class="SecondLevelBoxOrderedList">Tablet</span></li>
                            <ul>
                                <li> Then I moved onto any edits to make for a tablet screen. </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/" + "images/redesign handoff tablet.jpg"} />
                                </li>
                            </ul>
                            <br />
                            <br />
                            <br />
                            <li> <span class="SecondLevelBoxOrderedList">Desktop</span></li>
                            <ul>
                                <li> While this is the largest and most common screen size, there aren't many changes necessary because of the way elements were constructed to be 'responsive'.</li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/" + "images/redesign handoff desktop.jpg"} />
                                </li>
                            </ul>
                        </ol>
                    </div>
                </div>


            </div>

            {/* Resulting Redesigned Site */}
            <div className="ProjectSectionContainer">

                <div className="FirstLevelRow">
                    <div className="FirstLevelName">
                        Building the Redesigned Site
                    </div>
                    <div className="FirstLevelBox">
                        I <b>code a responsive site</b> according to the design materials I prepared.
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>redesigned site </mark>
                    </div>
                    <div className="SecondLevelBox">
                        Throughout this page, I've detailed how the practice of responsivity informed my redesigned the X-Ray page from its {" "}
                        <a href="https://www2.pnwx.com/Accessories/LeadProducts/Aprons/TechnoAideFlex/" target="_blank">[existing design]</a> :
                        <img src={process.env.PUBLIC_URL + "/" + "images/redesign old site.png"} />
                        To {"  "}
                        <a href="https://radicalwaterbear101.github.io/redesign" target="_blank">[my redesign]</a> :
                        <img src={process.env.PUBLIC_URL + "/" + "images/redesign cover.png"} />
                        Feel free visit these sites and change the size of your viewing window how the different websites respond.

                    </div>
                </div>
                {/* 
                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark> critiques </mark>
                    </div>
                    <div className="SecondLevelBox">
                        text goes here in a cute little box Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark> redesigned site (revised) </mark>
                    </div>
                    <div className="SecondLevelBox">
                        text goes here in a cute little box Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                        This assignment taught me how to think design responsively with multiple screen sizes in mind.

                        I learned how to use Figma effectively to not only depict but also model the responsiveness of a site.

                        I learned how to use flex boxes and media queries to code responsive designs in HTML and CSS.
                    </div>
                </div>

            </div>

        </div>
    )
}