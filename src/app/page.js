
'user client';
import SignUp from "./components/Create/SignUp";
import CatCard from "./components/CardEnd/Card";

import Header from "./components/Header/Header";
import LoginForm from "./components/Header/LoginForm";

export default function Home() {
  return (
    <main className="">
        <div>
            <Header/>
            <LoginForm/>
            <SignUp/>
           
        </div>
    </main>
  );
}
