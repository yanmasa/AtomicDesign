import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { ThirdButton } from "./components/atoms/button/ThirdButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "masa",
  image:
    "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "testcompany"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton children="test" />
      <SecondaryButton children="検索" />
      <ThirdButton children="test" />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
