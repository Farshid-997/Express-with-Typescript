
import mongoose from "mongoose"

import app from "./app"
const port:number = 5000

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-ts');
  
        console.log("db connection successfully")
        app.listen(port, () => {
            console.log(`server is listening on port ${port}`)
          })
    } catch (error) {
        console.log("db failed",error)
    }
  
  }
  main()


