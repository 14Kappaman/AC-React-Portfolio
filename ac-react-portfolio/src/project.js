export function Project(props) {
    return (
        <a href={props.link} className={`${props.image} application`}>
                    <div>
                        <h3>{props.name}</h3>
                        <span>{props.languages}</span>
                    </div>
                </a>
    )
}

/*
<a href="https://14kappaman.github.io/CheapDate/" className="application cheap">
                    <div>
                        <h3>Cheap Date</h3>
                        <span>javascript/html/bulma</span>
                    </div>
                </a>
*/