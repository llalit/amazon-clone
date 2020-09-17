import React, { useEffect } from "react";
import "./Header.css";
import "../amazon__logo.png";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "../StateProvider";

function Header(className) {
  
  const [{ basket }] = useStateValue();

  let dat = 0;
  let hname = null;
  var storedNames = JSON.parse(localStorage.getItem("myData"));
  hname = JSON.parse(localStorage.getItem("User"));

  if (storedNames != null) {
    dat = storedNames.length;
  } else {
    dat = 0;
  }

  return (
    <nav className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo amazon"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="haeder__nav">
        <Link to={!hname ? ('/login'):('')} className="header__link">
          <div className="header__option">

           
            {!hname ? (
              <>
               <span className="header__optionLineOne" >Login/</span>
              <span className="header__optionLineTwo">Signup</span>
              </>
              ) : (<>
               <span className="header__optionLineOne" onClick={()=>{localStorage.clear()}} >hello</span>
              <span className="header__optionLineTwo" onClick={()=>{localStorage.clear()}} >
                {hname.map((v) => {
                  return <p>{v.name}</p>;
                })}
              </span>
                </>
            )}
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {dat}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
