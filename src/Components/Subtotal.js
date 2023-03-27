import React, { useState, useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate, Link } from "react-router-dom";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseAuth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Subtotal() {
  const [{ basket }] = useStateValue();
  const Navigate = useNavigate();

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
      <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items);
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contain gift~
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to="/login">
        <button onClick={() => Navigate.push("/login")}>
          Proceed to Checkout
        </button>
      </Link>
    </div>
    );
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items);
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contain gift~
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to="/Proceed">
        <button onClick={() => Navigate.push("/Proceed")}>
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}

export default Subtotal;
