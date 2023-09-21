import express from "express";

export default () => {
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
}