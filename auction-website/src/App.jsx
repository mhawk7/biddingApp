import React from 'react';
import Navbar from './components/Navbar';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import AuctionItems from './components/AuctionItems';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow container mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-indigo-500 drop-shadow-md">Welcome to AuctionHub</h1>

        {/* Sign In and Sign Up Forms */}
        <div className="flex flex-wrap justify-center gap-12">
          <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3">
            <SignInForm />
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3">
            <SignUpForm />
          </div>
        </div>

        {/*Auction Items Section*/}
        <AuctionItems />
      </div>
    </div>
  );
};

export default App;
