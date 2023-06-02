# **Synthetic Derivatives Algorithm Task**
 
## **Summary**
This task revolves around algorithmic execution of a basket of derivatives or assets. Imagine you are an institutional investor and want to enter a custom strategy involving four different positions consisting of longs/shorts in different sizes. There are multiple ways to enter this on the market, but in this task I want you to minimise execution costs and slippage (entry price vs mid price of market).


In this case, let's say you have four cryptocurrency derivatives. In this task we will be listening to four high frequency trading orderbooks from Binance (a cryptocurrency trading venue). We want to enter $10,000 of long positions and $10000 of short positions, pick a couple of proportions to simulate.
> For example, we could trade $7500 of ETHUSDT long, $2500 BTCUSDT long, $5000 BNBUSDT short and $5000 XRPUSDT short.

I want you to think about executing this with the least market impact possible whilst also not being left too net long or net short overall as all the derivatives are correlated. Imagine you are filling up two buckets of water trying to keep the volumes the same as you get to full volume. Clipping the full sizes of $10k into smaller clip sizes is a first stage, then we want to be buying and selling these small clips simultaneously using statistics to decide which orderbooks we should be entering first to buy then sell and so on...

---
### Tasks
> 1) I have started the project off for you. Connecting to Binance orderbooks and sending the data to a local redis server.
> 2) Next steps, you will need to read from your local redis in Java or C++, the data.
> 3) Using the four orderbooks, come up with a real-time methodology for our algorithmic decision making of which orderbooks to enter bids and offers in, and following actions once each clip is dealt.
> 4) The goal is to MINIMISE market impact (remember all the derivatives are correlated and so we do not want to be caught too net long / short in $ terms) and MINIMISE execution costs (rather than aggressing the market, we prefer to place limit orders into the orderbook, which is cheaper)
> 5) Try your best to demonstrate this in code and a summary of the methodology you implemented.
> 6) Do not worry about exeucting real trades, but you can setup a simulation for testing.

---
Helper:
Pairing up 4 orderbooks into 2 synthetic orderbooks (where bids comprise of buying 1 thing / selling the other and asks vice versa) may be useful. 

### Setup
> 1) Download docker desktop if you have not already.
> 2) In the terminal run "docker run -d --name redis-test -p 6379:6379 redis"
> 3) Run 'npm run dev' and the orderbook data will start being sent to your local redis container