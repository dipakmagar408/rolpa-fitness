import React, { useState } from "react";

const Account = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasShownError, setHasShownError] = useState(false); // NEW

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    const correctEmail = "test@example.com";
    const correctPassword = "123456";

    // First wrong attempt shows error
    if (!hasShownError && (email !== correctEmail || password !== correctPassword)) {
      setError("Invalid email or password");
      setHasShownError(true); // show error only once
      return;
    }

    // After that, go to "Home"
    setError("");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setError("");
    setHasShownError(false); // reset error state
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-8">
      {!isLoggedIn ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

          {error && (
            <p className="text-red-600 mb-4 text-center font-semibold">
              {error}
            </p>
          )}

          <form onSubmit={handleLogin}>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded mb-4"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded mb-6"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Welcome, {email}
          </h2>
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Account;
