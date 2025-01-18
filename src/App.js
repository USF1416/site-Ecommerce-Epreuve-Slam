import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ItemList from './components/ItemList';
import Panier from './components/Panier';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Header Section */}
                <header className="header">
                    <div className="">
                        <nav>
                            <h1 className="logo">MyShop</h1>
                            <button className=""><Link to="/">Home</Link></button>
                            <button className=""><Link to="/ItemList">Produits</Link></button>
                            <button className=""><Link to="/Panier">Panier</Link></button>
                        </nav>
                    </div>
                </header>

                {/* Main Section */}
                <main className='main'>
                    <div>
                        <Routes>
                            <Route path="/" element={''}/>
                            <Route path="/ItemList" element={<ItemList />} />
                            <Route path="/Panier" element={<Panier />} />
                        </Routes>
                    </div>
                </main>

                {/* Footer Section */}
                <footer className="footer">
                    <div className="">
                        <p>© 2025 My Shop. Tous droits réservés.</p>
                    </div>
                </footer>
            </div>
        </Router>
        
    );
}

export default App;

