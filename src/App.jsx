import { UserProfile } from "./components/UserProfile";

export default function App() {
  return (
    <div>
      <h1>Root Component</h1>
      <UserProfile
        username="kanna"
        age={20}
        isLoggedIn={false}
        favoriteFoods={[
          {
            name: "Pizza",
          },
        ]}
      />
    </div>
  );
}
