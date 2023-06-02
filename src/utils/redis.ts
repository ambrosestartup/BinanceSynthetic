import { createClient } from "redis";
import { Emitter } from "@socket.io/redis-emitter";


export class RedisClient {
    public client: any;
    public server: any;
    private emitter!: Emitter;

    constructor(server?: any) {
    this.server = server
    this.setup();
    }

    private setup = async() => {
        console.log("Setting up Redis Producer...");
        //  Setup Redis Producer
        this.client = createClient({
                url: process.env.REDIS_ENDPOINT
            })

        this.client.on('error', (err: any) => {
            console.log(`Error: ${err}`)
        })
        
        // For Private just load the emitter
        this.client.connect().then(()=>{
            console.log(`Connected to Redis Cluster @ ${process.env.REDIS_ENDPOINT}`);
            this.emitter = new Emitter(this.client)
        }).catch((error: any) => {console.log(error)})
        

    };

    public async sendMessage(prim_key: string, msg: any) {
        const data = {'key': prim_key, 'value': msg}
        try {
            this.emitter.to(prim_key).emit('data', data)
        } catch (err) {
            console.error(err)
        }
    }

}
