
export function InitialPage(props) {
    return (

        <div className="InitialPage">
            <div className="BodySection">
                <h1>Welcome!</h1>
                <div className="AboutCard">
                    <div className="AboutCardImage">
                        <img src={process.env.PUBLIC_URL + "/" + "images/profilepic.png"} />
                    </div>
                    <div
                        className="AboutCardBlurb"> I am a UX generalist who centers users and communities to develop impactful interface solutions to social, political, economic, and otherwise critical problems of our time.
                    </div>
                    <div> </div>
                </div>

                <div className="WorkCard">
                </div>
            </div>

            {/* Projects */}
            <div className="BodySection">
                <h2>Work {"-->"}</h2>

                <div className="AboutCard">
                    {/* 2 mini cards */}

                </div>

                <div className="WorkCard">
                </div>
            </div>

            {/* Artwork and Experiments */}
            {/* <div className="BodySection">
                <h2>Experiments/Artwork</h2>
            </div> */}


        </div>

    )
}