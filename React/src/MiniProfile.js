export default function MiniProfile(profileImg,name,interests,email,phone) {
    return (
    <div>
    <img src={profileImg} style={{height:'100px',width:'100px'}}/>
    <p>Name: {name}
    <br/>Interests: {interests}
    <br/>{email}
    <br/>{phone}</p>
    </div>
    );
}