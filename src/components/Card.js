// import logo from "/images/development cover photo.png"

// print(test)
// import logo from test

export function Card(props) {
    return (

        <button className="Card" onClick={() => { props.bodyToProject() }}>
            <div className="CardTitle" >
                <h2>{props.projectTitle}</h2>
            </div>

            <div className="CardDescription">
                {props.description}
            </div>
            <div className="CardImage">
                <img src={process.env.PUBLIC_URL + "/" + props.image} />
            </div>
            <div className="CardTags">
                {props.tags.map((tag) => (
                    <div className="CardTag">
                        {tag}
                    </div>
                ))}
            </div>

        </button>

    )
}