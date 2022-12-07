import { PersonasProjectPage } from "./PersonasProjectPage.js"

export function Card(props) {
    return (
        <button className="Card" onClick={() => { console.log(props); props.bodyToProject() }}>
            <div className="CardTitle" >
                {props.projectTitle}
            </div>
            <div className="CardDescription">
                {props.description}
            </div>
            <div className="CardImage">
                <img src={process.env.PUBLIC_URL + "/" + props.image} />
            </div>
            <div className="CardTags">
                {props.tags.map((tag) => (
                    <div className="ProjectTag">
                        {tag}
                    </div>
                ))}
            </div>
        </button>

    )
}