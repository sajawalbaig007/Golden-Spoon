import React from "react";

function Food() {
  const menuItems = [
    { name: "Burger", desc: "Juicy grilled burger with fresh ingredients, served with crispy fries.", img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80" },
    { name: "Pasta", desc: "Creamy pasta cooked with herbs, cheese, and fresh vegetables.", img: "https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png" },
    { name: "Chicken Wings", desc: "Crispy and spicy wings, perfect for sharing with friends.", img: "https://tastesbetterfromscratch.com/wp-content/uploads/2014/09/Baked-Chicken-Wings-3.jpg" },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-400 py-20 px-5 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-10">

        <div className="md:w-1/3 flex flex-col gap-5 pl-5 md:pl-0">
          <h2 className="text-5xl font-bold text-black">On the Menu</h2>
          <p className="text-black/80 text-lg">
            Explore our delicious offerings. Fresh, hot, and made with love.
          </p>
          <a href="/menu">
            <button className="bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold mt-3 hover:bg-red-700 hover:text-white transition-all duration-300 shadow-lg">
              View Full Menu
            </button>
          </a>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div key={item.name} className="bg-black/80 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition transform duration-300">
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-yellow-400 font-bold text-xl mb-2">{item.name}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Food;
