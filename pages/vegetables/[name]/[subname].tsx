import React from "react";

// this page accacept two dynamic route
//http://localhost:3000/vegetables/ggeh/fewfgwg => this will work
// there are 2 segments in the url one in [name] and one in [subname] because of this will look at the file name [subname].tsx
export default function VegetablesPage() {
  return (
    <div>
      <h1>Vegetables Page</h1>
      <h2>Hello from 2nd segement</h2>
    </div>
  );
}
