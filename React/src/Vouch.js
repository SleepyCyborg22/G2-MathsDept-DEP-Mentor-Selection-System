import MiniProfile from "./MiniProfile";

export default function Vouch() {
    return (
        <div>
            <MiniProfile
                profileImg='../public/Alanson_Headshot.jpg'
                name='XYZ'
                interests='Coding,Cooking'
                email='XYZ@gmail.com'
                phone='1234567890'
            />
        </div>
    );
}