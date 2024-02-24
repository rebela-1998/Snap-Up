// import React from 'react'
import './Profile.css';

const Profile = () => {
    return (
        <div className='edit-profile'>
            <label id='firstName' htmlFor="fname">First name:</label>
            <input type="text" id="fname" name="fname"/>
            <label id='lastName' htmlFor="lname">Last name:</label>
            <input type="text" id="lname" name="lname"/>
            <label id='email' htmlFor="email">Email Id:</label>
            <input type="text" id="email" name="email"/>
            <label id='mobile' htmlFor="mobile">Mobile Number:</label>
            <input type="text" id="mobile" name="mobile"/>
            <button className='save-details' type="submit">Update</button>
        </div>
                    )
}

                    export default Profile
