import React from 'react';
import ItemList from './components/ItemList';
import './App.css';

function App() {
    return (
        <div className="App">
            {/* Header Section */}
            <header className="header">
                <div className="container">
                    <h1 className="logo">MyShop</h1>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="cart">
                        <a href="#cart">🛒 Cart (0)</a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <h2>Welcome to MyShop</h2>
                    <p>Your one-stop shop for the best products!</p>
                    <a href="#products" className="btn">Shop Now</a>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="products">
                <div className="container">
                    <h2>Our Products</h2>
                    <div className="product-grid">
                        <ItemList/>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <div className="container">
                    <p>&copy; 2025 MyShop. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;

