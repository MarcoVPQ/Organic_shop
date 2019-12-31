import React, { useState, useEffect } from "react";

const ImageWidget = ({ images }) => {
  const [activeImg, setActiveImg] = useState(images[0]);

  useEffect(() => {
    //console.log("rendering image widget");
  }, []);

  return (
    <React.Fragment>
      <img src={activeImg} className={`feature`} alt={'Product'}/>

      <div className="row pt-5">
        <div className="col-md-12  d-flex justify-content-center align-items-center px-3">
          {images.map((image, index) => {
            return (
              <div className="m-1 thumbnail shadow-sm" key={index}>
                <img
                  src={image}
                  className="img-fluid"
                  alt={'Product'}
                  onClick={() => {
                    setActiveImg(image);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageWidget;
