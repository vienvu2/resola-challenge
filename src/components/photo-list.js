import { useEffect, useRef, useState } from "react";
import { photoService } from "../service/photo";
import PhotoSlide from "./photo-slide";

export default function PhotoList() {
  const [list, setList] = useState([]);
  const page = useRef(0);

  const [imageSlide, chooseImage] = useState();

  const getMore = () => {
    page.current = page.current + 1;
    photoService.getList(page.current).then((res) => {
      setList((e) => [...e, ...res]);
    });
  };
  useEffect(() => {
    const handleScroll = (e) => {
      const bottom =
        document.documentElement.scrollHeight -
          document.documentElement.scrollTop ===
        document.documentElement.clientHeight;

      if (bottom) {
        getMore();
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="photo-list">
        {list.map((i) => (
          <div
            className="photo-item"
            key={i.id}
            style={{ background: i.color }}
            onClick={() => chooseImage(i)}
          >
            <img src={i.urls.small} />
            <div className="photo-content">
              <p>{i.description}</p>
            </div>
          </div>
        ))}
      </div>
      <PhotoSlide image={imageSlide} list={list} getMore={getMore} chooseImage={chooseImage} />
    </>
  );
}
