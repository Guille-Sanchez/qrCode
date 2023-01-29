import "./App.css";

function App() {
  return (
    <main>
      <div className="w-screen h-screen bg-blue-100 grid place-items-center font-outfit">
        <div className="bg-white rounded-2xl flex flex-col place-items-center min-w-min">
          <img
            src="../images/image-qr-code.png"
            alt="Frontend Mentor QR-code"
            className="w-64 lg:w-80 rounded-3xl p-3 lg:p-4"
          />
          <h1 className="w-60 lg:w-72 font-black text-xl lg:text-2xl p-3 m-0 text-center">
            Improve your front-end skills by building projects
          </h1>
          <p className="w-60 lg:w-72 my-0 pb-8 lg:text-xl text-center text-gray-700">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
