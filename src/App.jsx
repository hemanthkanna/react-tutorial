import { UserProfile } from "./components/UserProfile";
import "./global.css";

export default function App() {
  //NOT_VERIFIED | VERIFIED | DISABLED
  const USER_STATUS = "VERIFIED";

  const mockUsers = [
    {
      id: "1",
      username: "kanna",
      age: 20,
      isLoggedIn: false,
      email: "kanna@gmail.com",
    },
    {
      id: "2",
      username: "jane",
      age: 30,
      isLoggedIn: true,
      email: "jane@gmail.com",
    },
    {
      id: "3",
      username: "john",
      age: 25,
      isLoggedIn: true,
      email: "john@gmail.com",
    },
  ];

  //NOTE: Alternatively we could use switch case instead of If else
  if (USER_STATUS === "NOT_VERIFIED") {
    return (
      <div>
        <h1>User Verification Required</h1>
        <p>Please verify your account to access the app.</p>
      </div>
    );
  } else if (USER_STATUS === "VERIFIED") {
    return (
      <div>
        <h1>User Verification success . Welcome</h1>
        {mockUsers.map((user) => {
          return <UserProfile key={user.id} user={user} />;
        })}
      </div>
    );
  } else if (USER_STATUS === "DISABLED") {
    return (
      <div>
        <h1>User Account Disabled</h1>
        <p>Your account has been disabled. Please contact support.</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>An Error Occurred</h1>
        <p>An unexpected error occurred. Please try again later.</p>
      </div>
    );
  }
}
