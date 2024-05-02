'use client'
import CatCard from "./components/CardEnd/Card";

import Header from "./components/Header/Header";
import LoginForm from "./components/Header/LoginForm";

export default function Home() {
  return (
    <main className="">
        <div>
            <Header/>
            <LoginForm/>
            <CatCard />
        </div>
    </main>
  );
}
