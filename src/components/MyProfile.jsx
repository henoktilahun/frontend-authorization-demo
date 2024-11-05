import NavBar from "./NavBar";
import "./styles/MyProfile.css";

function MyProfile({
  userData = { username: "Username here", email: "Email here" },
  setIsLoggedIn,
}) {
  const { username, email } = userData;
  return (
    <>
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <div className="my-profile">
        <div className="my-profile__container">
          <div className="my-profile__header">
            <p>My profile</p>
            <hr className="my-profile__rule" />
          </div>
          <div className="my-profile__info">
            <div className="my-profile__user">
              <p className="my-profile__key">Username:</p>
              <p className="my-profile__value">{username}</p>
            </div>
            <div className="my-profile__user">
              <p className="my-profile__key">Email:</p>
              <p className="my-profile__value">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
