import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 w-full flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">AuctionHub</div>
      <div className="space-x-6">
        <a href="#auction-items" className="hover:text-yellow-300">Auction Items</a>
        <a href="#signin" className="hover:text-yellow-300">Sign In</a>
        <a href="#signup" className="hover:text-yellow-300">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
