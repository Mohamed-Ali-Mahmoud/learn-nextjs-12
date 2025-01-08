import { useRouter } from "next/router";
import React from "react";
import styles from "../../../styles/Home.module.css";
// Dynamic Routes
// this page accacept two dynamic route
//http://localhost:3000/vegetables/ggeh/fewfgwg => this will work
// there are 2 segments in the url one in [name] and one in [subname] because of this will look at the file name [subname].tsx

// useRouter
// Similarities
// Both change th url of the adress bar to the new route
// Both will take your user to the new location

// Differences
// router.replace() will prevent the user from going back to previous page. router.back() will not place the user to the previous location
// router.push() adds to the history stack and the user can go to previous location

export default function VegetablesPage() {
  const router = useRouter();

  // takeMeHome function
  function takeMeHome() {
    // router.push("/");
    router.replace("/");
  }
  // router.query.name will give the value of the first segment
  // router.query.subname will give the value of the second segment
  return (
    <div>
      <h1>Vegetables Page</h1>
      <h2>Hello from 2nd segement</h2>
      <span>{`Fisrt Segement is ${router.query.name}, Second Segement is ${router.query.subname}`}</span>
      <div>
        <button className={styles.buttonStyle} onClick={takeMeHome}>
          go to home
        </button>
      </div>
    </div>
  );
}
