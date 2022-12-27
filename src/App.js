import classes from "./App.module.css";
import { useState } from "react";
import ReactPlayer from "react-player";

function App() {
  const [Url, setUrl] = useState("https://youtu.be/7sDY4m8KNLc");
  let images = [
    {
      id: 1,
      src: "/images/images/slide1.jpg",
      vidurl:
        "https://www.youtube.com/watch?v=pN6jk0uUrD8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=1",
    },
    {
      id: 2,
      src: "/images/images/slide2.jpg",
      vidurl: "https://youtu.be/1T2Xuz-2_jY",
    },
    {
      id: 3,
      src: "/images/images/slide3.jpg",
      vidurl: "https://www.youtube.com/watch?v=NDMtMUCSwgc",
    },
    {
      id: 4,
      src: "/images/images/slide4.jpg",
      vidurl: "https://www.youtube.com/watch?v=uULy2rc6YDc",
    },
    {
      id: 5,
      src: "/images/images/slide5.jpg",
      vidurl: "https://www.youtube.com/watch?v=ySk9BcKNQCg",
    },
    {
      id: 6,
      src: "/images/images/slide6.jpg",
      vidurl: "https://www.youtube.com/watch?v=ZDa-Z5JzLYM",
    },
    {
      id: 7,
      src: "/images/images/slide7.jpg",
      vidurl: "https://www.youtube.com/watch?v=pTB0EiLXUC8",
    },
    {
      id: 8,
      src: "/images/images/slide8.jpg",
      vidurl: "https://www.youtube.com/watch?v=4HC_WyBSDGA",
    },
    {
      id: 9,
      src: "/images/images/slide9.jpg",
      vidurl:
        "https://www.youtube.com/watch?v=BNC6slYCj50&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=9",
    },
    {
      id: 10,
      src: "/images/images/slide10.jpg",
      vidurl:
        "https://www.youtube.com/watch?v=lW_erSjyMeM&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=10",
    },
    {
      id: 11,
      src: "/images/images/slide11.jpg",
      vidurl:
        "https://www.youtube.com/watch?v=VIJxU2NYG-Y&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=11",
    },
    {
      id: 12,
      src: "/images/images/slide12.jpg",
      vidurl:
        "https://www.youtube.com/watch?v=qikxEIxsXco&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=12",
    },
    {
      id: 13,
      src: "/images/images/slide13.jpg",
      vidurl:
        "https://www.youtube.com/watch?v=eBTBG4nda2A&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=13",
    },
    {
      id: 14,
      src: "/images/images/slide14.jpg",
      vidurl:
        "https://www.youtube.com/watch?v=t1nFAMws5FI&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=14",
    },
    {
      id: 15,
      src: "/images/images/slide15.jpg",
      vidurl:
        "https://www.youtube.com/watch?v=OJfz6ZHxqZ8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=15",
    },
  ];
  return (
    <div className={classes.App}>
      <ReactPlayer url={Url} />
      <div className={classes.thumbnails}>
        {images.map((item) => (
          <img
            onClick={() => {
              setUrl(item.vidurl);
              console.log(item.vidurl);
            }}
            className={classes.image}
            src={item.src}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
