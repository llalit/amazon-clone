import React from "react";
import "./Profile.css";

function Profile() {
  let Userd = JSON.parse(localStorage.getItem("User"));

  return (
    <>
      <div className="user__profile">
        <div className="header__userProfile">
          <p>User Profile</p>
        </div>

        <div className="user__profileCenter">
          <div className="profile__pictureRound">
            <img
              src="https://mk0omfourop3d6at17y.kinstacdn.com/wp-content/uploads/grapes-800.jpg"
              alt="Image_userProfile"
              className="profile__photo"
            />
          </div>

          <div className="User__info">
            <div className="Profile__username">
                Name :
            </div>
            <div className="User__Password">
                Password :
            </div>
            <div className="user__email">
                Email :
            </div>
            <div className="user__PhoneNo">
                Contact :
            </div>
          </div>

          <div className="User__info2">
            {Userd.map((d, i) => (
              <div className="User__info">
                <div className="title">{d.name}</div>
                <div className="title">{d.password}</div>
                <div className="title">{d.email}</div>
                <div className="title">{d.PhoneNo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
