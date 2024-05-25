import {config as conf } from "dotenv"

conf()

const _config={
    port:process.env.PORT
}


// Make the object read only
export const config = Object.freeze(_config);