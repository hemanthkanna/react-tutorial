import propTypes from "prop-types";
import { UserFavoriteFoods } from "./UserFavoriteFoods";
import { UserUserName } from "./UserUserName";

export function UserProfile(props) {
  return (
    <>
      <UserUserName username={props.username} acc_type="Admin" />
      <br />
      <b>ID :{props.id} </b>
      <br />
      <b>Age : </b>
      <span>{props.age}</span>
      <br />
      <>
        <span>
          <b>Email: </b>
        </span>
        <span>kanna@gmail.com</span>
      </>
      <UserFavoriteFoods />
    </>
  );
}

UserProfile.propTypes = {
  username: propTypes.string.isRequired,
  age: propTypes.number.isRequired,
  isLoggedIn: propTypes.bool,
};
