import { UserProfile } from "./components/UserProfile";
import "./global.css";

export default function App() {
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
  return (
    <div>
      <h1>Root Component</h1>

      {mockUsers.map((user) => {
        return <UserProfile key={user.id} user={user} />;
      })}
    </div>
  );
}
