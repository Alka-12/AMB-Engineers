import React from "react";
import img1 from "../assets/davitSystem.png";
import img2 from "../assets/JibSystem.png";
import img3 from "../assets/monorail.png";
import img4 from "../assets/cradle.png";
import Prod from "../Components/serviceitems";
import "../Components/common.css"

function Service() {

  const contents = [
    {
      id: 1,
      name: "Facade Access Systems",
      image: img1,
    },
    {
      id: 2,
      name: "Maintenance Contracts",
      image: img2,
    },
    {
      id: 3,
      name: "Consultancy Services",
      image: img3,
    },
    {
      id: 4,
      name: "Rental System Contracts",
      image: img4,
    }
  ];

  return (
    <>

      <div className='Cards2 '>
        {contents.map(contents => (
          <Prod
            key={contents.id}
            image={contents.image}
            name={contents.name}

          />
        ))}
      </div>
    </>
  );
}

export default Service;
