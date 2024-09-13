import React from 'react';
import CustomNavbar from './components/navbar';
import Header from './components/header';
import Products from './components/products';
import RunningLine from './components/marquee';
import DarkModeToggle from './components/darkmode';
function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Header />
      {/* <RunningLine /> */}
      <Products />
      <DarkModeToggle />
    </div>
  );
}

export default App;
