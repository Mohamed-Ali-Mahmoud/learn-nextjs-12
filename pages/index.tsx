import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// this page acccessable at http://localhost:3000/
//styles-jsx
// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <h1>Hello from index.tsx File</h1>
//       <style>
//         {`

//       h1{
//         color:green;
//       }
//       `}
//       </style>
//     </div>
//   );
// }

// Local Styles
// function Heading(props) {
//   return (
//     <div>
//       <h1>{props.heading}</h1>
//       <style jsx>
//         {`
//           h1 {
//             color: red;
//           }
//         `}
//       </style>
//     </div>
//   );
// }
// export default function Home() {
//   return (
//     <div>
//       <Heading heading="Hello from index.tsx File" /> {/* Will be red */}
//       <h1>hello</h1>;{/* Will be Black! why because in <style jsx> is not global to effect all h1's*/}
//     </div>
//   );
// }

//Global styles
// function Heading(props) {
//   return (
//     <div>
//       <h1>{props.heading}</h1>
//       <style jsx global>
//         {`
//           h1 {
//             color: red;
//           }
//         `}
//       </style>
//     </div>
//   );
// }
// export default function Home() {
//   return (
//     <div>
//       <Heading heading="Hello from index.tsx File" /> {/* Will be red */}
//       <h1>hello</h1>;
//       {/* Will be Red! why because in <style jsx globla> is global and will effect all h1's*/}
//     </div>
//   );
// }

// use Variables in styles-jsx
function Heading(props) {
  let variable = Math.random() > 0.5 ? "green" : "red";
  return (
    <div>
      <h1>{props.heading}</h1>
      <style jsx global>
        {`
          h1 {
            color: ${variable};
          }
        `}
      </style>
    </div>
  );
}
export default function Home() {
  return (
    <div>
      <Heading heading="Hello from index.tsx File" /> {/* Will be red */}
      <h1>hello</h1>;
      {/* Will be Red! why because in <style jsx globla> is global and will effect all h1's*/}
    </div>
  );
}
