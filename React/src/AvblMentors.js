import MiniProfile from "./MiniProfile"
import Profileimg from './Alanson_Headshot.jpg'

export default function AvblMentors() {
    return (
        <div>
            <MiniProfile
                profileImg={Profileimg}
                name='XYZ'
                interests='Coding,Cooking'
                email='XYZ@gmail.com'
                phone='1234567890'
            />
        </div>
    )
}