import React from 'react';

const HomePage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">

            <header className="bg-blue-600 text-white py-12 text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Online Retail Store</h1>
                <p className="text-lg">Discover products from various sellers in one place. Shop, add to cart, and order with ease!</p>
            </header>

            <section className="max-w-6xl mx-auto mt-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition duration-500">
                        <h2 className="text-xl font-semibold text-blue-600 mb-4">About Us</h2>
                        <p className="text-gray-700">Our online retail store connects customers with trusted sellers. Browse by category or seller and make quick, easy purchases.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition duration-500">
                        <h2 className="text-xl font-semibold text-blue-600 mb-4">Customer Features</h2>
                        
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition duration-500">
                        <h2 className="text-xl font-semibold text-blue-600 mb-4">Admin Features</h2>
                        
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto mt-10 px-4">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition duration-500">
                    <h2 className="text-xl font-semibold text-blue-600 mb-4">Group Project Information</h2>
                    <p className="text-gray-700">Prajwal, Rakesh, Punith, Jeevan</p>
                </div>
            </section>

       
            <footer className="bg-blue-600 text-white py-8 mt-12 text-center">
                <p className="text-lg">Join us today and experience seamless online shopping!</p>
            </footer>
        </div>
    );
};

export default HomePage;
