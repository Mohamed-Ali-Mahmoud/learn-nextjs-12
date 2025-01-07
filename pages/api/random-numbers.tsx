// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

// this page accessible at http://localhost:3000/api/random-numbers
// this page should not return any raect component, it should return json data
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // go to the console and run the following command
  // and back to the terminal and you will see the name you entered in the console
  // result: REQUEST BODY { name: 'John Doe' }

  // fetch("http://localhost:3000/api/random-numbers", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ name: "John Doe" }),
  // });

  console.log("REQUEST BODY", req.body);

  // got ot network tab in the browser and you will see the header "X-Custome-Header" with the value "we are open to higher pepole"
  res.setHeader("X-Custome-Header", "we are open to higher pepole");

  // got ot network tab in the browser and you will see the header "Set-Cookie" with the value "areyouprogrammer=true"
  // and then go to console and type document.cookie and you will see "areyouprogrammer=true"
  res.setHeader("Set-Cookie", "areyouprogrammer=true");

  // go to network tab in the browser and you will see the status code 404
  //res.statusCode = 404;

  // got to localhost:3000/api/random-numbers and you will send "how are you ?" to the browser
  // it similar to res.send("how are you ?") but it end the response
  //res.end("how are you ?");

  // got to localhost:3000/api/random-numbers and you will send "Hello World" to the browser
  res.send("Hello World");
}
