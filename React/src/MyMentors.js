import MiniProfile from "./MiniProfile";
import ProfileImg from './Alanson_Headshot.jpg'

export default function MyMentors() {
    return (
        <div>
            <section className="odd">
            <MiniProfile
                profileImg={ProfileImg}
                name='XYZ'
                interests='Coding,Cooking'
                email='XYZ@gmail.com'
                phone='1234567890'
            />
            </section>
            <section className="even">
                <div style={{alignContent:"center"}}>
                    <h1 className="section-title">Suggestions</h1>
                    <p>Based on your interests...</p>
                </div>
            </section>
        </div>
        
    )
}