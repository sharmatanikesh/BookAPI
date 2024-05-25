import app from "./src/app"
import { config } from "./src/config/config";
const server =()=>{
    const port = config.port || 3000;


    app.listen(port,()=>{
        console.log(`Listening on port ${port}`);
    })
}

server()