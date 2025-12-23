import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/admin/all-payments')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    return (
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-black mb-6">Manage All Orders</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-gray-400 border-b border-gray-50 uppercase text-xs font-black">
                            <th className="pb-4">Order ID</th>
                            <th className="pb-4">Customer</th>
                            <th className="pb-4">Total Price</th>
                            <th className="pb-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 font-bold">
                        {orders.map((order) => (
                            <tr key={order._id} className="border-b border-gray-50 last:border-0">
                                <td className="py-4 text-xs font-mono">{order._id}</td>
                                <td className="py-4">{order.email}</td>
                                <td className="py-4 text-green-600">${order.amount}</td>
                                <td className="py-4">
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Paid</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default AllOrders;