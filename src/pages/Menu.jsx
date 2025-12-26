import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

function Menu() {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "",
  });

  const menuItems = [
    // Burgers
    { name: "Classic Beef Burger", price: 850, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80" },
    { name: "Cheese Loaded Burger", price: 950, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwR-j3Af2vnCIUEDcE0PPvUejYysDaxAVZcQ&s" },
    { name: "Spicy Chicken Burger", price: 700, img: "https://www.kitchensanctuary.com/wp-content/uploads/2024/09/Buffalo-Chicken-Burger-square-FS-2.jpg" },
    { name: "Double Patty Burger", price: 550, img: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-tall-FS-38.webp" },
    { name: "BBQ Beef Burger", price: 750, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcpPGNS6OMIhJfN05_LFgYsfFQVkTI21PUQ&s" },
    { name: "Creamy Alfredo Pasta", price: 650, img: "https://www.twistandmake.com/hs-fs/hubfs/twist-and-make-images/New-Twist-and-Make-Recipes/640-Images/147-creamy-chicken-alfredo-eden.jpg?width=640&height=640&name=147-creamy-chicken-alfredo-eden.jpg" },

    // Pizzas
    { name: "Margherita Pizza", price: 1200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmomF1DksRYo9MLTC6zi2qx1XjX7R5PSqPYQ&s" },
    { name: "Pepperoni Pizza", price: 1350, img: "https://www.foodandwine.com/thmb/iJw7N_NfcPpd-EB8rpYbzrkSFIM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tomato-mozzarella-pizza-FT-RECIPE0725-e7244e979c504188a049623668c15b2e.jpg" },
    { name: "Veggie Supreme Pizza", price: 1100, img: "https://www.hunts.com/sites/g/files/qyyrlu211/files/uploadedImages/img_6934_48664.jpg" },
    { name: "BBQ Chicken Pizza", price: 1400, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJKJPlaalwOKPpT-IChF_JIU4S8ZMGOiyGQ&s" },

    // Shawarmas
    { name: "Chicken Shawarma", price: 500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWRik6sFuVklzgD7m3JJ8GwTboDP3m4BL8eA&s" },
    { name: "Beef Shawarma", price: 550, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQBjEtjwFi8HHXowSnOibtSfLDmGlh8DaHw&s" },
    { name: "Falafel Shawarma", price: 450, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5PZ-1hq0EmNBNvIhQ3hEMVxQrqQquZCXRQ&s" },

    // Wraps
    { name: "Chicken Wrap", price: 600, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeL_obgyHM-EZfmh30myp-AxWhbGNCMgIJoA&s" },
    { name: "Beef Wrap", price: 650, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeL_obgyHM-EZfmh30myp-AxWhbGNCMgIJoA&s" },
    { name: "Veggie Wrap", price: 500, img: "https://img.freepik.com/free-photo/close-up-fresh-tortilla-wraps-with-vegetables-meat_23-2148614464.jpg?semt=ais_hybrid&w=740&q=80" },

    // Sandwiches
    { name: "Grilled Chicken Sandwich", price: 550, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2Dz_DFLT6AXKX1Bp9Wfzmhf3nGPcRi5o3A&s" },
    { name: "Club Sandwich", price: 650, img: "https://i.ytimg.com/vi/WfGrj7uEhdI/sddefault.jpg" },
    { name: "Veggie Sandwich", price: 500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX0it4D-J2wTSDrTfgRwGG--8YN8B57whooQ&s" },
  ];

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setTimeout(() => setCartItems(JSON.parse(storedCart)), 0);
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (name, delta) => {
    const current = quantities[name] || 1;
    const newQty = current + delta;
    if (newQty < 1) return;
    setQuantities({ ...quantities, [name]: newQty });
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.name] || 1;
    const existing = cartItems.find((ci) => ci.name === item.name);
    if (existing) {
      setCartItems(cartItems.map((ci) =>
        ci.name === item.name ? { ...ci, quantity: ci.quantity + quantity } : ci
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
    }
    setQuantities({ ...quantities, [item.name]: 1 });
  };

  const handleRemoveFromCart = (name) => {
    setCartItems(cartItems.filter(item => item.name !== name));
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }
    setShowOrderForm(true);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.paymentMethod) {
      alert("All fields are required!");
      return;
    }
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    let paymentDetails = "";
    if (formData.paymentMethod === "EasyPaisa") paymentDetails = "Number: 03208083931";
    else if (formData.paymentMethod === "JazzCash") paymentDetails = "Number: 03208083931, Account Title: Umama";
    else if (formData.paymentMethod === "Bank Transfer") paymentDetails = "Bank: Askari Bank, Account #: 00633230001074, Name: Sajawal Baig, IBAN: PK00ASKA00633230001074";

    const orderText = `*New Order*%0AName: ${formData.name}%0APhone: ${formData.phone}%0AAddress: ${formData.address}%0APayment Method: ${formData.paymentMethod}%0A${paymentDetails ? `Payment Details: ${paymentDetails}%0A` : ""}Items:%0A${cartItems.map(item => `${item.name} x ${item.quantity} = Rs. ${item.price * item.quantity}`).join('%0A')}%0ATotal: Rs. ${totalPrice}`;

    const whatsappNumber = "923208083931";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${orderText}`;
    window.open(whatsappURL, "_blank");

    setCartItems([]);
    setShowOrderForm(false);
    setFormData({ name: "", phone: "", address: "", paymentMethod: "" });
  };

  return (
    <section className="w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <h1 className="text-4xl font-bold text-black mb-12">Our Menu</h1>

        {/* Fixed Cart Button */}
        <div className="fixed top-24 right-6 z-50">
          <button
            onClick={() => setShowCart(!showCart)}
            className="bg-black text-yellow-400 px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 shadow-lg relative"
          >
            <FaShoppingCart className="w-5 h-5" />
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                {totalItems}
              </span>
            )}
          </button>

          {/* Cart Dropdown */}
          {showCart && (
            <div className="absolute right-0 mt-2 w-80 bg-yellow-50 rounded-2xl shadow-xl p-4 z-50">
              <h2 className="text-2xl font-bold mb-3 text-red-700">Cart Items</h2>
              {cartItems.length === 0 ? (
                <p className="text-black text-center">Your cart is empty</p>
              ) : (
                <>
                  <ul className="space-y-2 max-h-64 overflow-y-auto">
                    {cartItems.map((item, idx) => (
                      <li key={idx} className="flex justify-between bg-black/80 p-2 rounded-lg shadow items-center text-yellow-300">
                        <span>{item.name} x {item.quantity}</span>
                        <div className="flex items-center gap-2">
                          <span>Rs. {item.price * item.quantity}</span>
                          <button onClick={() => handleRemoveFromCart(item.name)} className="text-red-600 hover:text-red-800">
                            <FaTrash />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 border-t border-gray-300 pt-3 flex justify-between items-center text-red-700">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold">Rs. {totalPrice}</span>
                  </div>
                  <button onClick={handlePlaceOrder} className="w-full mt-4 bg-black text-yellow-400 py-2 rounded-full font-semibold hover:bg-red-700 hover:text-white transition">
                    Place Order
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div key={item.name} className="bg-black/90 rounded-2xl shadow-lg p-4 flex flex-col border-2 border-yellow-400 hover:border-red-700 transition">
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-2xl font-bold text-yellow-300">{item.name}</h3>
              <p className="text-yellow-100 mt-2">Rs. {item.price}</p>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <button onClick={() => handleQuantityChange(item.name, -1)} className="bg-red-700 text-yellow-300 px-3 py-1 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition">-</button>
                  <span className="font-semibold text-yellow-200">{quantities[item.name] || 1}</span>
                  <button onClick={() => handleQuantityChange(item.name, 1)} className="bg-red-700 text-yellow-300 px-3 py-1 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition">+</button>
                </div>
                <button onClick={() => handleAddToCart(item)} className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-red-700 hover:text-yellow-400 transition">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Form Modal */}
        {showOrderForm && (
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
            <div className="bg-black max-w-md w-full rounded-3xl p-6 relative shadow-2xl border-2 border-yellow-400">
              <button onClick={() => setShowOrderForm(false)} className="absolute top-4 right-4 bg-red-700 text-white p-2 rounded-full hover:bg-yellow-400 transition">X</button>
              <h2 className="text-3xl font-bold text-center mb-4 text-yellow-400">Your Order</h2>
              <ul className="space-y-2 mb-4 max-h-40 overflow-y-auto text-yellow-200">
                {cartItems.map((item, idx) => (
                  <li key={idx} className="flex justify-between font-semibold">{item.name} x {item.quantity} = Rs. {item.price * item.quantity}</li>
                ))}
              </ul>
              <p className="text-yellow-300 font-bold mb-4">Total: Rs. {totalPrice}</p>

              <form onSubmit={handleSubmitOrder} className="space-y-4">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-yellow-400 focus:outline-none bg-black text-yellow-300" required />
                <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-yellow-400 focus:outline-none bg-black text-yellow-300" required />
                <textarea name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-yellow-400 focus:outline-none bg-black text-yellow-300" required />
                <select name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-yellow-400 focus:outline-none bg-black text-yellow-300" required>
                  <option value="">Select Payment Method</option>
                  <option value="Cash">Cash</option>
                  <option value="EasyPaisa">EasyPaisa</option>
                  <option value="JazzCash">JazzCash</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                </select>

                {formData.paymentMethod === "EasyPaisa" && <p className="text-red-700 font-semibold">Send payment to EasyPaisa Number: 03208083931</p>}
                {formData.paymentMethod === "JazzCash" && <p className="text-red-700 font-semibold">Send payment to JazzCash Number: 03208083931, Account Title: Umama</p>}
                {formData.paymentMethod === "Bank Transfer" && <p className="text-red-700 font-semibold">Bank: Askari Bank, Account #: 00633230001074, Name: Sajawal Baig, IBAN: PK00ASKA00633230001074</p>}

                <button type="submit" className="w-full bg-yellow-400 text-black py-2 rounded-full font-semibold hover:bg-red-700 hover:text-yellow-400 transition">Submit Order</button>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Menu;
