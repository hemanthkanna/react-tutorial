import { UserProfile } from "./components/UserProfile";
import "./global.css";

export default function App() {
  const mockUsers = [
    {
      id: "1",
      username: "kanna",
      age: 20,
      isLoggedIn: false,
      favoriteFoods: [
        {
          name: "Pizza",
        },
      ],
    },
    {
      id: "2",
      username: "jane",
      age: 30,
      isLoggedIn: true,
      favoriteFoods: [
        {
          name: "Burger",
        },
        {
          name: "Fries",
        },
      ],
    },
    {
      id: "3",
      username: "john",
      age: 25,
      isLoggedIn: true,
      favoriteFoods: [
        {
          name: "Pasta",
        },
        {
          name: "Salad",
        },
      ],
    },
  ];
  return (
    <div>
      <h1>Root Component</h1>
      {/* <UserProfile
        username="kanna"
        age={20}
        isLoggedIn={false}
        favoriteFoods={[
          {
            name: "Pizza",
          },
        ]}
      /> */}
      {mockUsers.map((user) => {
        return (
          <UserProfile
            key={user.id}
            id={user.id}
            username={user.username}
            age={user.age}
            isLoggedIn={user.isLoggedIn}
            favoriteFoods={user.favoriteFoods}
          />
        );
        <br />;
      })}
    </div>
  );
}
