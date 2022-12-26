export function AboutPage() {
    return (
        <div className="AboutPage">
            <h1> About Me</h1>
            <div className="AboutPagePicAndBlurb">
                {/* <div className="AboutPagePic"> */}
                <img src={process.env.PUBLIC_URL + "/" + "images/testpic.jpg"} />
                {/* </div> */}
                <div clasname="AboutPageBlurb">
                    <h2>Hi all! My name is Karen Hu.</h2>
                    <br />
                    <br />
                    I am a <span className="PinkHighlight">Computer Science</span> and <span className="PinkHighlight">Visual Art</span> student at Brown University.
                    I live by the idea that we must <span className="PinkHighlight">actively create the future</span> that we want to see.
                    Since reality is formed by our collective imagination and action, I approach design with a <span className="PinkHighlight">critical lens</span> and with <span className="PinkHighlight">users and communities</span> as the <span className="PinkHighlight">top priority</span>.
                    I seek and find projects that align with my values and visions for a more equitable, kind world, as I am a <span className="PinkHighlight">mission oriented</span> person.
                    <br />
                    <br />
                    <br />
                    I like to leave no stone unturned, consider as <span className="PurpleHighlight">many perspectives</span> as possible, and always have an <span className="PurpleHighlight">open mind</span>.
                    I believe design should be <span className="PurpleHighlight">research-motivated</span>, checked by <span className="PurpleHighlight">critical thinking</span> from as many people as possible, and  <span className="PurpleHighlight">goal-oriented</span>.
                    <br />
                    <br />
                    <br />
                    Outside of work, you can find me making and seeing <span className="GreenHighlight">art</span> (of all forms), working on <span className="GreenHighlight">side-projects</span>, and obsessing over <span className="GreenHighlight">cats</span>!
                    <br />
                    <br />
                    I'd love to speak with you! Feel free to send me an email at <span className="GreenHighlight">karen.h1098@gmail.com</span> or connect with me on <span className="GreenHighlight"> <a href="https://www.linkedin.com/in/karenh1098/">LinkedIn</a></span>.
                </div>
            </div>
        </div>

    )
}