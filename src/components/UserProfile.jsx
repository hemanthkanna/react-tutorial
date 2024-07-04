import propTypes from "prop-types";
import { UserFavoriteFoods } from "./UserFavoriteFoods";
import { UserUserName } from "./UserUserName";

export function UserProfile({ user }) {
  return (
    <>
      <UserUserName username={user.username} acc_type="Admin" />
      <br />
      <b>ID :{user.id} </b>
      <br />
      <b>Age : </b>
      <span>{user.age}</span>
      <br />
      <>
        <span>
          <b>Email: </b>
        </span>
        <span>{user.email}</span>
      </>
      <UserFavoriteFoods />
    </>
  );
}

UserProfile.propTypes = {
  user: propTypes.shape({
    username: propTypes.string.isRequired,
    age: propTypes.number.isRequired,
    isLoggedIn: propTypes.bool,
  }),
};
