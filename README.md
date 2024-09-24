# Project

**Stock Portfolio Assignment**

Link: https://stock-portfolio-invact.vercel.app/

## About the Project

<img width="901" alt="image" src="https://github.com/user-attachments/assets/6ffce84d-5324-426f-93f1-492af5b23448">

Rajsi Traders is a small firm that has launched a platform where it will display a few stocks which is for working employees. In their platform, they have a few stocks mentioned which you can add to your portfolio and it will also generate the “Profit/Loss” scenario based on the market price and current stock price.

They have given this project to you to create the backend of the platform and help them generate the relevant prices.

## Features of Application

The user can see 6 most relevant stocks on the platform.

To move ahead, they need to add at least 4 stocks in their portfolio first. While adding the stocks, the user also needs to mention the quantity of the stocks they wish to purchase.

Once added, it will generate the Market Price and Bought At price automatically. Once you have added all the stocks, the user can see their “Stock Portfolio”

When the user clicks “View Returns” for each stock, they will be able to see the return for each stock they have added in their portfolio. Return = (marketPrice - boughtAt) * quantity

Now, the user will need to calculate the return percentage based on the returns they received which will be: returnPercentage = (returns / boughtAt) * 100

After calculating the Return Percentage, the user can now see the “Status” of their stock portfolio for each stock Profit or Loss and at the end, the user can see their cumulative result of the portfolio, Total Returns or Total Growth.

## API Documentation

### 1. Calculate Returns of Stocks Added
**Endpoint**: `/calculate-returns`  
**Description**: Takes `boughtAt`, `marketPrice`, and `quantity` as query parameters and returns the total return value of the stocks.

### 2. Calculate the Total Returns
**Endpoint**: `/total-returns`  
**Description**: Takes `stock1`, `stock2`, `stock3`, and `stock4` as query parameters and returns the sum of all the returns.

### 3. Calculate the Return Percentage
**Endpoint**: `/calculate-return-percentage`  
**Description**: Takes `boughtAt` and `returns` as query parameters and returns the return percentage of the stock.

### 4. Calculate the Total Return Percentage
**Endpoint**: `/total-return-percentage`  
**Description**: Takes `stock1`, `stock2`, `stock3`, and `stock4` as query parameters and returns the total return percentage of all the stocks.

### 5. Identify the Status of Stocks Based on Return Value
**Endpoint**: `/status`  
**Description**: Takes `returnPercentage` as a query parameter and returns "Profit" if the return percentage is positive, otherwise "Loss".

## How to integrate the Backend APIs with FlipDeal’s Frontend UI?

1. Copy the Dev URL (also known as the Express URL).
2. Once done, go to this link: https://bd1-stocks.vercel.app/
3. Paste your Vercel URL to the Server URL text box.
4. Once you click “Save Changes”, it will show the Stock portfolio section with 6 stocks.
5. Add atleast 4 stocks by clicking the stock image. Note: To enable the next option, you need to add at least 4 Stocks.
6. When you take any user action, you can see the response of your APIs on the bottom right of the screen also known as the “Logger”.

