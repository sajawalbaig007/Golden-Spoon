import React from "react";

function OrderForm() {
  return (
    <section
      id="order-form"
      className="w-full bg-gradient-to-b from-yellow-300 via-yellow-200 to-yellow-300 py-20 px-4 flex justify-center"
    >
      <div className="w-full max-w-lg bg-white p-10 rounded-3xl border border-black/10 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-black tracking-wide">
          Place Your <span className="text-red-700">Order</span>
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-black">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white border border-black/20 px-5 py-3 rounded-xl focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 shadow-sm"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-black">Phone</label>
            <input
              type="text"
              placeholder="Your Phone Number"
              className="w-full bg-white border border-black/20 px-5 py-3 rounded-xl focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 shadow-sm"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-black">Order Type</label>
            <select className="w-full bg-white border border-black/20 px-5 py-3 rounded-xl focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 shadow-sm">
              <option>Dine In</option>
              <option>Takeaway</option>
              <option>Delivery</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-black">Select Item</label>
            <select className="w-full bg-white border border-black/20 px-5 py-3 rounded-xl focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 shadow-sm">
              <option>Grilled Chicken</option>
              <option>Beef Burger</option>
              <option>Pizza</option>
              <option>Pasta</option>
              <option>French Fries</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-black">Quantity</label>
            <input
              type="number"
              placeholder="1"
              className="w-full bg-white border border-black/20 px-5 py-3 rounded-xl focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 shadow-sm"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-black">Delivery Address</label>
            <input
              type="text"
              placeholder="Your Address"
              className="w-full bg-white border border-black/20 px-5 py-3 rounded-xl focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 shadow-sm"
            />
          </div>

          <button className="w-full bg-black text-yellow-400 py-3 rounded-full font-extrabold tracking-widest hover:bg-red-700 hover:text-white transition-all duration-300 shadow-xl">
            CONFIRM ORDER
          </button>
        </form>
      </div>
    </section>
  );
}

export default OrderForm;
