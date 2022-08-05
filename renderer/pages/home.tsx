import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { ipcRenderer } from "electron";
import { addUser } from "../data/user";

function Home() {
  useEffect(() => {
    addUser({
      name: "sujan",
    }).then((user) => {
      console.log("USER", user);
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <img src="/images/logo.png" />
      </div>
    </React.Fragment>
  );
}

export default Home;
