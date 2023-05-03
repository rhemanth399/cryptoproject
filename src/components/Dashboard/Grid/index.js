import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";
import StarBorderIcon from '@mui/icons-material/StarBorder';


function Grid({ coin}) {
 const handleAddToWatchlist=()=>{
  const storedCoins = Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)))||{};
  if(storedCoins[coin.id]){
    delete storedCoins[coin.id];

  }
  else{
    storedCoins[coin.id]=coin;
  }
  localStorage.setItem(coin.id,JSON.stringify(coin))
 }
 const storedCoins = Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)))||{};
  const isAdded=Boolean(storedCoins[coin.id]);
  return (
    
    <Link to={`/coin/${coin.id}`}>
      <div
        className={`grid-container ${
          coin.price_change_percentage_24h < 0 && "grid-container-red"
        }`}
      >
        <div className="info-flex">
          <img src={coin.image} className="coin-logo" alt='coins' />
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
          <div className="watchlist" >
            <StarBorderIcon style={{
                height: "1.5rem",
                width: "1.5rem",
                border: `2px solid ${isAdded ? "blue" : "var(--white)"}`,
                borderRadius: "50%",
                color: isAdded ? "blue" : "",
              }} onClick={handleAddToWatchlist}/>
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
    </Link>
    
  );
}

export default Grid;