const { useState, useEffect, useCallback } = require("react");

/**
 * FullBackground
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @returns {React.ReactNode}
 * @example
 */
const FullBackground = ({ children, imageTags = null, bgImage = null, overlay = true }) => {
  const [background, setBackground] = useState(null);

  // fetch the image with async/await
  const fetchImage = useCallback(async () => {
    const random = Math.floor(Math.random() * 1000);

    let tags = "nature,water,sky";

    if (imageTags && imageTags.length > 0) {
      tags = imageTags.join(",");
    }

    const url = `https://source.unsplash.com/random/1920x1080?${tags}&sig=${random}`;

    const response = await fetch(url);
    setBackground(response.url);
  }, [imageTags]);

  // fetch the image on mount
  useEffect(() => {
    if (!bgImage) fetchImage();

    // check if the image is already loaded
    if (bgImage) {
      const img = new Image();
      img.src = bgImage;

      img.onload = () => setBackground(bgImage);
    }
  }, [fetchImage, bgImage]);

  const style = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className={`relative w-full h-full ${overlay && "bg-black"}`}>
      <div
        className={`absolute inset-0 w-full h-full z-0 ${overlay && "opacity-70"}`}
        style={style}
      />

      <div className="relative h-full">{children}</div>
    </div>
  );
};

export default FullBackground;
