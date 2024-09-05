import AddUser from "@/components/AddUser";
import Navbar from "@/components/Navbar";
import UserList from "@/components/UserList";
import Head from "next/head";


export default function Home() {
  return (
    <div>
      <Head>
        <title>User Management App</title>
      </Head>
      <main className="bg-slate-300 h-screen">
        <Navbar />
        <AddUser />
        <UserList />
      </main>
    </div>
  );
}
