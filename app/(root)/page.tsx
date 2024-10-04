import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';


const Home = () => {
  const loggedIn = { firstName: 'Mert' , lastName : "Seker", email: "meertseker@gmail.com"};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently" // Fixed here
          />

          <TotalBalanceBox
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {1250.35}
          
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
      user = {loggedIn}
      transactions = {[]}
      banks = {[{currentBalance:122},{currentBalance:233}]}
      
      />
    </section>
  );
};

export default Home;
