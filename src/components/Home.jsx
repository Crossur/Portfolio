import React from "react";

const Home = () => {
  return (
    <div
      className="flex items-center justify-center w-full h-screen"
      style={{ fontFamily: "richgold", textAlign: "center" }}
    >
      <div>
        <div
          className="text-3xl md:text-5xl font-bold"
          style={{
            color: "white",
            animation: "flowDown 1s ease-out forwards",
          }}
        >
          Hi, I am{" "}
          <span
            className="text-amber-300"
            style={{
              animation: "flowDown 1.2s ease-out forwards",
            }}
          >
            Luis
          </span>
          , a full-stack web developer
        </div>
      </div>
    </div>
  );
};

export default Home;
