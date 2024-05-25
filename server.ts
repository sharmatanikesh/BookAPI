import app from "./src/app"
import { config } from "./src/config/config";
import connectDb from "./src/config/db";
const server = async ()=>{
    const port = config.port || 3000;

    await connectDb();

    app.listen(port,()=>{
        console.log(`Listening on port ${port}`);
    })
}

server()