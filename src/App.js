import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState("");
  if(!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <>
      <Header setUser={setUser} />
      <h1>Header Component</h1>
      <p className="text-green-600">Welcome back {user}</p>
    </>
  );
}

export default App;
