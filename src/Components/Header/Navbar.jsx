import "./Navbar.css";
import logo from "/logo.png";
import cart_icon from "/cart_icon.png";
import { useState } from "react";
import { useCart } from "../../Context/UseCart";
// import { Link } from "react-router-dom"
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>QuickMart</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          {" "}
          Shop{menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          {" "}
          Men{menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          Women{menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          {" "}
          Kids{menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <div style={{ position: "relative" }}>
          <div onClick={() => setIsOpen(!isOpen)}>
            <img src={cart_icon} alt="" />
            <span className="nav-cart-cout">{cartItems.length}</span>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "0",
            background: "white",
            border: "1px solid #ccc",
            padding: "10px",
            width: "200px",
            zIndex: 10,
          }}
        >
          {cartItems.length === 0 ? (
            <p>The Cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item, i) => (
                <li style={{ listStyle: "none" }} key={i}>
                  {item.title} — ${item.price} × {item.quantity} = $
                  {item.price * item.quantity}
                </li>
              ))}
            </ul>
          )}
          <p>
            <strong>
              Total Price: $
              {cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              )}
            </strong>
          </p>
          <p className="checkout">Checkout</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
