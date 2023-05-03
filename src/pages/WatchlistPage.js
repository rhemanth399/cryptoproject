import React from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import '../components/Dashboard/Grid/styles.css'
function WatchlistPage() {
  const storedCoins = Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)));

  
  console.log(storedCoins)
  return (
    <div style={{display:'flex', flexWrap:'wrap'}}>
      {storedCoins.map((coin)=>
      
      
     <div 
        className={`grid-container ${
          coin.price_change_percentage_24h < 0 && "grid-container-red"
        }` }  style={{margin:'1rem'}}
       >
        <div className="info-flex" >
          <img src={storedCoins[0].image} className="coin-logo" alt='coins' />
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
          <div className="watchlist" style={{heigth:'1.5rem',width:'1.5rem',border:'2px solid var(--white)',borderRadius:'50%'}} >
            <StarBorderIcon/>
            </div>
        </div>
        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip chip-red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        <div className="info-container">
          <h3
            className="coin-price"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
          <p className="total_volume">
            Total Volume : {coin.total_volume.toLocaleString()}
          </p>
          <p className="total_volume">
            Market Cap : ${coin.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
      )}    
      </div>

  )
}
      
  
export default WatchlistPage;
