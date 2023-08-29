const { useState, useEffect, useCallback } = require("react");

const RandomBackground = ({ children }) => {
  const [background, setBackground] = useState("");

  // fetch the image with async/await
  const fetchImage = useCallback(async () => {
    const random = Math.floor(Math.random() * 1000);
    const url = `https://source.unsplash.com/random/1920x1080?nature,water,sky?sig=${random}`;

    const response = await fetch(url);
    setBackground(response.url);
  }, []);

  // fetch the image on mount
  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  const style = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative w-full h-full bg-black">
      <div
        className="absolute inset-0 w-full h-full bg-black opacity-80"
        style={style}
      />

      {children}
    </div>
  );
};

export default RandomBackground;
