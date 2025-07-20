import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const topups = [
  { id: 1, amount: "100 Diamonds", price: "Rs. 100" },
  { id: 2, amount: "210 Diamonds", price: "Rs. 200" },
  { id: 3, amount: "530 Diamonds", price: "Rs. 500" },
  { id: 4, amount: "1100 Diamonds", price: "Rs. 1000" },
  { id: 5, amount: "1600 Diamonds", price: "Rs. 1400" },
  { id: 6, amount: "2200 Diamonds", price: "Rs. 1800" },
  { id: 7, amount: "2750 Diamonds", price: "Rs. 2300" },
  { id: 8, amount: "4000 Diamonds", price: "Rs. 3500" },
  { id: 9, amount: "5000 Diamonds", price: "Rs. 4500" },
  { id: 10, amount: "6000 Diamonds", price: "Rs. 5400" },
];

const levelPass = {
  id: 0,
  amount: "Level Pass (1200 Diamonds)",
  price: "Rs. 300",
  originalPrice: "Rs. 400",
};

const bankAccountNumber = "05007010288330";
const bankName = "NIC Asia Bank";
const accountHolder = "Your Name";

const Home = () => {
  const [selectedTopup, setSelectedTopup] = useState(null);
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);

  const handleBuyNowClick = (item) => {
    setSelectedTopup(item.id);
    setUid("");
    setName("");
    setShowQRCode(false);
  };

  const handleConfirm = (item) => {
    if (uid && name) {
      setShowQRCode(true);
      setSelectedTopup(item.id);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  const handleCancel = () => {
    setSelectedTopup(null);
    setUid("");
    setName("");
    setShowQRCode(false);
  };

  const renderCard = (item, isLevelPass = false) => (
    <div
      key={item.id}
      className="bg-gray-800 bg-opacity-90 rounded-2xl p-6 flex flex-col items-center shadow-xl hover:shadow-yellow-400 transition-all duration-300"
    >
      <img
        src={
          isLevelPass
            ? "https://c2c.fp.guinfra.com/file/646dfa7e9781de7519a6c845W2FsLhzZ03?fop=imageView/2/w/340/h/340"
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjimFLZ1HfsX7Kez9YR0HWWYI3s8sGC19vDw&s"
        }
        alt={item.amount}
        className="w-24 h-24 mb-4 transform transition-transform duration-300 hover:scale-110"
      />
      <h2 className="text-xl font-bold text-yellow-300 mb-1">{item.amount}</h2>
      {isLevelPass && (
        <p className="text-red-400 line-through text-sm">{item.originalPrice}</p>
      )}
      <p className="text-green-400 mb-4 text-sm">{item.price}</p>

      <button
        onClick={() => handleBuyNowClick(item)}
        className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition mb-2"
      >
        Buy Now
      </button>

      {selectedTopup === item.id && !showQRCode && (
        <div className="w-full bg-yellow-100 text-black p-4 rounded-xl mt-3 text-left">
          <label className="block text-sm font-semibold mb-1">Free Fire UID:</label>
          <input
            type="text"
            placeholder="Enter UID"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
            className="w-full px-3 py-2 rounded mb-3 bg-white border border-gray-300"
          />
          <label className="block text-sm font-semibold mb-1">Game Name:</label>
          <input
            type="text"
            placeholder="Enter Game Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded mb-3 bg-white border border-gray-300"
          />

          <div className="flex gap-4">
            <button
              onClick={() => handleConfirm(item)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700"
            >
              Confirm
            </button>
            <button
              onClick={handleCancel}
              className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-10 px-4"
      style={{
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSODDdNvhHDIJM_zbyeXbnnwwZkyOcByRBYxw&s')",
      }}
    >
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-400">
        💎 Free Fire Diamond Top-Up Center 💎
      </h1>

      <div className="max-w-4xl mx-auto mb-10">{renderCard(levelPass, true)}</div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-7xl mx-auto">
        {topups.map((item) => renderCard(item))}
      </div>

      {showQRCode && (
        <div className="max-w-md mx-auto mt-12 bg-gray-800 bg-opacity-90 p-6 rounded-xl shadow-yellow-400 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">Scan & Pay</h2>

          <div className="flex items-center justify-center mb-4">
            <img
              src="https://www.facebook.com/photo/?fbid=751099980642315"
              alt="diamond"
              className="w-16 h-16 mr-4"
            />
            <div>
              <p className="text-xl font-semibold">
                {topups.find((t) => t.id === selectedTopup)?.amount ||
                  levelPass.amount}
              </p>
              <p className="text-green-400">
                {topups.find((t) => t.id === selectedTopup)?.price ||
                  levelPass.price}
              </p>
              <p className="text-sm text-blue-300 mt-1">UID: {uid}</p>
              <p className="text-sm text-blue-300">Name: {name}</p>
            </div>
          </div>

          <QRCodeCanvas
            value={bankAccountNumber}
            size={200}
            bgColor="#1f2937"
            fgColor="#fbbf24"
            className="mx-auto mb-4"
          />

          <div className="text-sm text-yellow-200 mt-4 space-y-1">
            <p>
              <span className="text-white font-semibold">Account Number:</span>{" "}
              {bankAccountNumber}
            </p>
            <p>
              <span className="text-white font-semibold">Bank Name:</span>{" "}
              {bankName}
            </p>
            <p>
              <span className="text-white font-semibold">Account Holder:</span>{" "}
              {accountHolder}
            </p>
          </div>

          <button
            onClick={handleCancel}
            className="mt-6 bg-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Cancel
          </button>
        </div>
      )}

      <div className="max-w-3xl mx-auto mt-16 bg-gray-800 bg-opacity-90 p-6 rounded-xl shadow-md text-yellow-100">
        <h2 className="text-2xl font-bold mb-4 text-yellow-300">About Free Fire Top-Up</h2>
        <p className="mb-2">
          Welcome to the safest Free Fire Diamond Top-Up platform in Nepal. Instantly buy diamonds
          and level passes at the lowest price and fastest delivery.
        </p>
        <p className="mb-2">
          Simply choose your top-up, enter your UID and in-game name, and scan the QR to make your
          payment. We ensure fast delivery within 5-10 minutes of confirmation.
        </p>
        <p>
          For support, contact us through our social handles or directly via in-game chat. Thank you
          for trusting us!
        </p>
      </div>
    </div>
  );
};

export default Home;
