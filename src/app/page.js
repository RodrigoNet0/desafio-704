'user client';
import Header from "./components/Header/Header";
import LoginForm from "./components/Header/LoginForm";

export default function Home() {
  return (
    <main className="">
        <div>
            <Header/>
            <LoginForm/>
        </div>
    </main>
  );
}
