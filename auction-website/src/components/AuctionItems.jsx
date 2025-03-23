import React from 'react';

const AuctionItems = () => {
  const items = [
    { id: 1, name: "Antique Vase", price: "$150", imageUrl: "./../images/antiqueVase.jpg" },
    { id: 2, name: "Vintage Watch", price: "$200", imageUrl: "./../images/vintageWatch.jpg" },
    { id: 3, name: "Rare Painting", price: "$500", imageUrl: "./../images/painting.jpg" },
    { id: 3, name: "Vintage Car", price: "$300", imageUrl: "./../images/car.jpg" },
    { id: 3, name: "Rare Ring", price: "$500", imageUrl: "./../images/ring.jpg" },
    { id: 3, name: "Coin", price: "$500", imageUrl: "./../images/coin.jpg" },
  ];

  return (
    <div id="auction-items" className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform">
          <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
          <p className="text-gray-700">{item.price}</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Place Bid
          </button>
        </div>
      ))}
    </div>
  );
};

export default AuctionItems;
