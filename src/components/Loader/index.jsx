 // Import your spinner CSS here


  return (
    <div className="spinner-container">
      {loading ? (
        <div className="spinner">
          <div class="progress">
            <div class="color"></div>
          </div>
        </div> // You can customize your spinner here
      ) : (
        <div>Content loaded successfully!</div> // Your content goes here
      )}
    </div>
  );
};

export default Spinner;
