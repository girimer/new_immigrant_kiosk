import "./WelcomePage.css";
const WelcomeMessage = () => {
  return (
    <>
      <div className="welcome-message">
        <div className="welcome-message-content">
          <h1>Welcome to Calgary</h1>
          <p>
            Learn more about city services, resources, and other important
            information for newcomers{" "}
          </p>
          <button className="get-started-button">Get Started</button>
        </div>
      </div>
      <div className="welcome-image"></div>
    </>
  );
};

export default WelcomeMessage;
