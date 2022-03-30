export function Header(props) {
    return (
        <h2><a name={props.name}></a>{props.value}</h2>
    )
}