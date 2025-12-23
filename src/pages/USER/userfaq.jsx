import React from "react";

const userfaq = () => {
  return (
    <div>
      <section className="max-w-4xl mx-auto py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {/* FAQ 1: Delivery Policy */}
          <div className="collapse collapse-arrow border border-green-300 bg-green-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title font-semibold text-xl text-green-800">
              What is your standard delivery policy?
            </div>
            <div className="collapse-content text-green-700 text-lg py-3">
              Our standard delivery time is usually <strong>30 to 60 </strong>
              minutes within the city limits after placing the order. Delivery
              charges may apply based on your location and order total.
            </div>
          </div>

          {/* FAQ 2: Return Policy */}
          <div className="collapse collapse-arrow border border-green-300 bg-green-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-xl text-green-800">
              What is the return and refund policy?
            </div>
            <div className="collapse-content text-green-700 text-lg py-3">
              We accept returns for spoiled, damaged, or incorrect items upon
              delivery. Please check your items immediately. Refunds or
              replacements are processed within <strong>24 hours</strong> after
              verification.
            </div>
          </div>

          {/* FAQ 3: Payment Methods */}
          <div className="collapse collapse-arrow border border-green-300 bg-green-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-xl text-green-800">
              What payment methods do you accept?
            </div>
            <div className="collapse-content text-green-700 text-lg py-3">
              We accept <strong>Cash on Delivery (COD)</strong>, as well as all
              major local mobile payment services like{" "}
              <strong>bKash, Nagad, and Rocket.</strong> Credit/debit card
              payments are also supported.
            </div>
          </div>

          {/* FAQ 4: Minimum Order Value */}
          <div className="collapse collapse-arrow border border-green-300 bg-green-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-xl text-green-800">
              Is there a minimum order value?
            </div>
            <div className="collapse-content text-green-700 text-lg py-3">
              Yes, there is a minimum order value of <strong>BDT 200</strong>{" "}
              for all delivery orders to ensure efficiency in our logistics
              network.
            </div>
          </div>

          {/* FAQ 5: Delivery Areas */}
          <div className="collapse collapse-arrow border border-green-300 bg-green-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-xl text-green-800">
              Which areas do you currently serve?
            </div>
            <div className="collapse-content text-green-700 text-lg py-3">
              We currently serve all major neighborhoods in{" "}
              <strong>Chittagong</strong>. You can check if your area is covered
              by entering your postcode on the checkout page.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default userfaq;
