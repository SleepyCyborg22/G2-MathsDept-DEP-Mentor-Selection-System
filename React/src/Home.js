import MiniProfile from "./MiniProfile";
import Profileimg from './Alanson_Headshot.jpg'
import Freshersimg from './freshers.png'

export default function Home() {
    return (
        <div>
            <div className="row odd">
                <h2 align='center'>Your Profile</h2>
                <MiniProfile
                    profileImg={Profileimg}
                    name='XYZ'
                    interests='Coding,Cooking'
                    email='XYZ@gmail.com'
                    phone='1234567890'
                />
            </div>
            <div className="row even">
                <div className="col-md-6 col-sm-12">
                    <h1 className="section-title">Freshers</h1>
                    <p className="section-subheading">Choose the right mentor for you based on your clubs and interests</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src={Freshersimg} style={{height:'500px',width:'500px'}}/>
                </div>
            </div>
            <div className="row odd">
                <div className="col-md-6 col-sm-12">
                <p>Hello</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h1 className="section-title">Sophomores</h1>
                    <p className="section-subheading">Volunteer to become mentors, and choose your best batchmates to mentor your juniors using our Vouch system</p>
                </div>
            </div>
            <div className="row even">
                <div className="col-md-6 col-sm-12">
                    <h1 className="section-title">Pre-Final Yearites</h1>
                    <p className="section-subheading">Volunteer to become Super-Mentors and guide your Freshers</p>
                </div>
            </div>
    </div>
    );
}