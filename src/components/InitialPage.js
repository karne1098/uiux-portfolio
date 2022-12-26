
export function InitialPage(props) {
    return (

        <div className="InitialPage">
            <div className="BodySection">


                <div className="LandingPage">
                    {/* <div className="LandingPageImage">
                        <img src={process.env.PUBLIC_URL + "/" + "images/profilepic.png"} />
                    </div> */}
                    <div className="LandingPageName">
                        <h1>Hi all, I'm Karen Hu.</h1>
                    </div>
                    <div className="LandingPageBlurb">
                        <h2>
                            I am a <span className="PurpleHighlight">UX generalist</span>. I emphasize <span className="PinkHighlight">research</span>, advocate for <span className="PinkHighlight">users first</span>, and center <span className="PinkHighlight">accessibility</span> in my design process to create  <span className="GreenHighlight">meaningful interface solutions to critical problems</span> of our time!
                        </h2>
                    </div>
                    {/* <div className="LandingPageButtons">
                        <button><h3>see my work process</h3></button>
                        <button><h3>learn more about me</h3></button>
                    </div> */}
                </div>

            </div>

            {/* Artwork and Experiments */}
            {/* <div className="BodySection">
                <h2>Experiments/Artwork</h2>
            </div> */}


        </div>

    )
}