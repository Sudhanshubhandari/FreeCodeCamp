import React from "react";
import GoogleLogin from "react-google-login";

function App() {
  const handleLoginSuccess = (response) => {
    console.log("Login success:", response);
  };

  const handleLoginFailure = (error) => {
    console.log("Login failed:", error);
  };

  return (
    <div>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID" // Replace with your actual Google client ID
        buttonText="Login with Google"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default App;
