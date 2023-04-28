import { useEffect } from "react";

export default function PhotoSlide({ list, image, getMore, chooseImage }) {
  const index = image ? list.findIndex((a) => a.id === image.id) : 0;

  useEffect(() => {
    if (index > list.length - 7) {
      getMore();
    }
  }, [index]);

  if (!image) {
    return <div />;
  }
  return (
    <div className="photo-slide">
      <div className="photo-main" key={image.id}>
        <img
          alt={image.description}
          src={image.urls.full}
          style={{ backgroundImage: `url(${image.urls.thumb})` }}
        />
        <div className="photo-content">
          <p>
            Author: <strong>{image.user?.name}</strong>
          </p>
          <p>
            Size:{" "}
            <strong>
              {image.width}x{image.height}
            </strong>
          </p>
          <p>
            Description: <strong>{image.description}</strong>
          </p>
        </div>
      </div>
      {index > 0 && (
        <button
          className="photo-prev"
          onClick={() => chooseImage(list[index - 1])}
        >
          <img src="/left-arrow.png" />
        </button>
      )}
      {index < list.length - 1 && (
        <button
          className="photo-next"
          onClick={() => chooseImage(list[index + 1])}
        >
          <img src="/right-arrow.png" />
        </button>
      )}
      <div className="photo-line">
        {list
          .filter((i, idx) => idx < index + 5 && idx > index - 5)
          .map((i) => (
            <div
              tabIndex={i.id}
              className={"photo-item " + (i.id == image.id ? "active" : "")}
              key={i.id}
              onClick={() => chooseImage(i)}
            >
              <img src={i.urls.thumb} />
            </div>
          ))}
      </div>
      <button
        className="close"
        onClick={() => chooseImage(undefined)}
        alt="close"
      >
        &times;
      </button>
    </div>
  );
}
