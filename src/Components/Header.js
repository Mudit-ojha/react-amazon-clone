import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseAuth";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { headerItems } from "./ProductsData";
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
function Header() {
  const [{ basket }] = useStateValue();

  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // yes you are logged in
        setUser(user);
      } else {
        // user is logged out
        console.log("you are logged out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <>
        <div className="header">
          <Link to="/">
            <img
              className="header__logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
            />
          </Link>
          <div className="header-option" style={{ marginRight: "10px" }}>
            <LocationOnIcon />
          </div>
          <div className="header-option">
            <span className="header-option1">Hello</span>
            <span className="header-option2">Select Your Address</span>
          </div>
          <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcons" />
          </div>
          <div className="header__nav">
            <Link to="/login">
              <div className="header__option">
                <span className="header__OptionLineOne">Hello Guest</span>
                <span className="header__OptionLineTwo">Sign In</span>
              </div>
            </Link>
            <div className="header__option">
              <span className="header__OptionLineOne">Returns</span>
              <span className="header__OptionLineTwo">&Orders</span>
            </div>
            <div className="header__option">
              <span className="header__OptionLineOne">Your</span>
              <span className="header__OptionLineTwo">Prime</span>
            </div>
            <Link to="/checkout">
              <div className="header__optionBasket">
                <ShoppingCartCheckoutIcon />
                <span className="header__optionLineTwo header__basketCount">
                  {basket?.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="item-container">
          {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
        <div className="header-option" style={{ marginRight: "10px" }}>
          <LocationOnIcon />
        </div>
        <div className="header-option">
          <span className="header-option1">Hello</span>
          <span className="header-option2">Select Your Address</span>
        </div>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcons" />
        </div>
        <div className="header__nav">
          <div className="header__option">
            <span className="header__OptionLineOne">Hello {user.email}</span>
            <span
              className="header__OptionLineTwo"
              onClick={() => signOut(auth)}
            >
              Sign Out
            </span>
          </div>

          <div className="header__option">
            <span className="header__OptionLineOne">Returns</span>
            <span className="header__OptionLineTwo">&Orders</span>
          </div>
          <div className="header__option">
            <span className="header__OptionLineOne">Your</span>
            <span className="header__OptionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCartCheckoutIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="item-container">
        {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
      </div>
    </>
  );
}

export default Header;
