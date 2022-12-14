import React from 'react';
import Header from '../../components/header/header';
import Listingcard from '../../components/listingcard/listingcard';
import Footer from '../../components/footer/footer';

function Home() {
    return (
        <div>
            <Header />
            <Listingcard />
            <Footer />
        </div>
    );
}

export default Home;