import React from "react";

// This is the dynamic route
// The name of the file is the name of the dynamic route
//http://localhost:3000/fruit/afghjhk,j => this will work
//http://localhost:3000/fruit/SGRhtsj5867 => this will work
//http://localhost:3000/fruit/ => this will not be work, so you can add index.tsx file or catchAllRoute we will see soon
//http://localhost:3000/fruit/ggeh/fewfgwg => this will not be work because contain two segments (two slashes)

export default function FruitName() {
  return <div>FruitName</div>;
}
