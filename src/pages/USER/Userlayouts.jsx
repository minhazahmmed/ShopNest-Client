import React from 'react';
import { Outlet } from 'react-router';// আপনার ফোল্ডার পাথ অনুযায়ী দিন
import Footer from '../../components/Footer';
import UserNav from './userNav';

const Userlayouts = () => {
    return (
        <div className="flex flex-col min-h-screen">
            
            <UserNav />
            
            <main className="flex-1">
                <Outlet /> 
            </main>

            <Footer />
        </div>
    );
};

export default Userlayouts;

