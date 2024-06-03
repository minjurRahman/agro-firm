import React from "react";

const Banner = () => {
  const styles = {
    backgroundImage:
      'url("https://static.vecteezy.com/system/resources/thumbnails/026/677/433/small_2x/ai-generated-ai-generative-beautiful-young-tittle-calf-on-sunflower-field-at-sunset-nature-landscape-farm-cow-animal-vibe-graphic-art-photo.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // width: "100%",
    height: "70vh", // Adjust the height as needed
  };
  return (
    <div className="hero" style={styles}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Agro Ranch</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
