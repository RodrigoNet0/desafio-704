'user client';
import GetCat from "./components/Cat/GetCat";
import SignUp from "./components/Create/SignUp";
import Header from "./components/Header/Header";
import LoginForm from "./components/Header/LoginForm";

export default function Home() {
  return (
    <main className="">
        <div>
            <Header/>
            <LoginForm/>
            <GetCat/>
            <SignUp/>
        </div>
    </main>
  );
}
