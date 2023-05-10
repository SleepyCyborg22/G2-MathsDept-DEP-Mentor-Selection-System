export default function MiniProfile(props) {
    return (
    <div>
        <div style={{textAlign:"center"}}>
            <img src={props.profileImg} style={{height:'100px',width:'100px'}}/>
            <p>Name: {props.name}
            <br/>Interests: {props.interests}
            <br/>{props.email}
            <br/>{props.phone}</p>
        </div>
    </div>
    );
}