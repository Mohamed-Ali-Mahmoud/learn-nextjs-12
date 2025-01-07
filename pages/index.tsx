// import sass file just for this page
import styles from "../styles/index.module.scss";

// props for add any data to component
// children for add any component inside component
function Headings(props, children) {
  return (
    <h1 className={styles.greenHeading}>
      {props.heading} {props.children}
    </h1>
  );
}

// this page acccessable at http://localhost:3000/
export default function Home() {
  return (
    <div>
      <Headings heading="Heading 1">
        <span>Sub Heading</span>
      </Headings>
    </div>
  );
}
