import WebSocket from 'ws';

// https://binance-docs.github.io/apidocs/futures/en/#diff-book-depth-streams

const socketURL = 'wss://stream.binance.com:9443/ws';

export function subscribeToOrderBook(symbol: string): WebSocket {
  const ws = new WebSocket(`${socketURL}/${symbol.toLowerCase()}@depth@100ms`);

  ws.on('open', () => {
    console.log(`Connected to Binance USDM WebSocket for ${symbol} order book.`);
  });

//   ws.on('message', (data: WebSocket.Data) => {
//     const orderBookData = JSON.parse(data.toString());
//     console.log(orderBookData);
//     // Process the order book data as per your requirements
//   });

  ws.on('error', (error: Error) => {
    console.error('WebSocket error:', error);
  });

  ws.on('close', () => {
    console.log('Connection closed.');
  });

  return ws;
}

