import { subscribeToOrderBook } from "./utils/binance_ws";
import { RedisClient } from "./utils/redis";

const redis_client = new RedisClient();

// Usage example
const symbol_1 = 'BTCUSDT';
const symbol_2 = 'ETHUSDT';
const symbol_3 = 'BNBUSDT';
const symbol_4 = 'XRPUSDT';

const orderbook_1 = subscribeToOrderBook(symbol_1);
    // Listen to messages from the WebSocket API for 
    orderbook_1.on('message', (data: any) => {
    const orderBookData1 = JSON.parse(data.toString());
    console.log(orderBookData1);
    // Send data to Redis Pub/Sub
    redis_client.sendMessage(symbol_1, orderBookData1);

});

const orderbook_2 = subscribeToOrderBook(symbol_2);
    orderbook_2.on('message', (data: any) => {
    const orderBookData2 = JSON.parse(data.toString());
    console.log(orderBookData2);
    // Send data to Redis Pub/Sub
    redis_client.sendMessage(symbol_2, orderBookData2);

})

const orderbook_3 = subscribeToOrderBook(symbol_3);
    orderbook_3.on('message', (data: any) => {
    const orderBookData3 = JSON.parse(data.toString());
    console.log(orderBookData3);
    // Send data to Redis Pub/Sub
    redis_client.sendMessage(symbol_3, orderBookData3);

})

const orderbook_4 = subscribeToOrderBook(symbol_4);
    orderbook_4.on('message', (data: any) => {
    const orderBookData4 = JSON.parse(data.toString());
    console.log(orderBookData4);
    // Send data to Redis Pub/Sub
    redis_client.sendMessage(symbol_4, orderBookData4);

})

