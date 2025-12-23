import React, { useEffect, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { CheckCircle } from 'lucide-react';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionId && user) {
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: user.email,
                    transactionId: sessionId,
                    amount: 45,
                    date: new Date(),
                    status: 'Paid'
                })
            });
        }
    }, [sessionId, user]);

    return (
        <div className="h-screen flex flex-col items-center justify-center text-center p-4">
            <CheckCircle size={100} className="text-green-500 mb-6 animate-bounce" />
            <h1 className="text-4xl font-black text-gray-800 mb-2">Payment Successful!</h1>
            <p className="text-gray-500 mb-8 max-w-sm">Thank you for your order. We have received your payment and started processing your fresh products.</p>
            <button 
                onClick={() => navigate('/user/dashboard')}
                className="bg-green-700 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-green-800 transition-all"
            >
                Go to Dashboard
            </button>
        </div>
    );
};

export default PaymentSuccess;