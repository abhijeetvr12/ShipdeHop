export default function Login({ setLoggedIn }) {
    const handleLogin = () => {
      localStorage.setItem("loggedIn", "true");
      setLoggedIn(true);
    };
  
    return (
      <div className="h-screen flex justify-center items-center bg-gray-100">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            ShipdeHop Admin Login
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Please click the button below to continue as admin.
          </p>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Login as Admin
          </button>
        </div>
      </div>
    );
  }
  