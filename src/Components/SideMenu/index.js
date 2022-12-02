import { Explore_SVG, Home_SVG, Messages_SVG, Notification_SVG, Profile_SVG, Twitter_SVG } from "./images";
import MenuItem from "./MenuItem";

export default function SideMenu(){

    const menu = [
        {
            icon: Home_SVG,
            name: 'Home'
        },
        {
            icon: Explore_SVG,
            name: 'Explore'
        },
        {
            icon: Notification_SVG,
            name: 'Notification'
        },
        {
            icon: Messages_SVG,
            name: 'Messages'
        },
        {
            icon: Profile_SVG,
            name: 'Profile'
        }
    ]
    return(
        <div className="w-20 mt-3 mx-5"> 
        {Twitter_SVG}
{menu.map((item,index)=>
        <MenuItem item={item} key={index}/> )}
        </div>

       
    )
}