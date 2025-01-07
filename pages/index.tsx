// Global Style

function Headings(props) {
  return <h1 className="orange-heading">{props.heading}</h1>;
}

// this page acccessable at http://localhost:3000/
export default function Home() {
  return (
    <div>
      <Headings heading="Hello from index.tsx File" />
    </div>
  );
}
