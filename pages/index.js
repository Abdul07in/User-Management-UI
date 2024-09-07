import AddUser from "@/components/AddUser";
import Navbar from "@/components/Navbar";
import UserList from "@/components/UserList";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>User Management App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A user management application" />
        <meta name="author" content="Abdul Majeed Kanoor" />
        <meta name="keywords" content="user management, app, users" />
        <meta charSet="UTF-8" />
      </Head>
      <main className=" bg-slate-300 pb-5 h-screen">
        <Navbar />
        <AddUser />
      </main>
    </div>
  );
}
