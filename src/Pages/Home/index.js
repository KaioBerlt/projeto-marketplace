import React from "react";
import ProductList from "../../Components/ProductList";


const Home = () => {
    return (
        <>
        <section className="home-banner w-full">
            <div className="flex flex-col items-center justify-center h-full ">
                <h1 className="text-center text 3xl md:text-4xl lg:text-5xl font-semibold ">Bateu a Fome?</h1>
            </div>
        </section>
        <ProductList/>
        </>
    )
};

export default Home;