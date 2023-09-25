import express from "express";

/* Run npm run loadtest command for a load test.
 - npx loadtest -n 1200 -c 400 -k http://localhost:3000/heavy".
 - -n 1200: This option specifies the total number of requests to be sent during the test
 - -c 400: This specifies the number of concurrent connections to be used in the test. Here, 400 concurrent connections will be made to the server.
 - -k: This option enables the HTTP KeepAlive feature, which allows the HTTP connection to be reused for multiple requests to improve performance.
*/

// For this to work as part of a cluster it cannot be wrapped in a function.
//export default () => {
  const app = express();

  app.use(express.json())
  app.get("/heavy", (_req, response) => {

    const total = Array.from({length: 50_000_000}, (_, i) => i).reduce<number>((p, c) => p + c   , 0)
   
    response.json({data: {
      value: total
    }})
  })
  
  const PORT = process.env.PORT || 3000
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. Process id ${process.pid}`);
  });
//}

export default () => {

}