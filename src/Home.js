import React from "react";
import { Link } from 'react-router-dom'


export default function Home(){
    
    return(
        <div>
            <h1>Your favorite food, delivered while coding</h1>
            <img src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/69747658_10157574556384555_2443627222221717504_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=XCS-52Z6fCsAX_OiY1d&_nc_ht=scontent-sjc3-1.xx&oh=00_AT8My-iNWE2Kyib_LoiZjxwNE5wDOIruFhQ3lAVM_TgTVQ&oe=61E46667' alt='pizzam'/>
            <Link to='/pizza' id='order-pizza'>
                <h3>Order your pizza here</h3>
            </Link>
        </div>
    )
}