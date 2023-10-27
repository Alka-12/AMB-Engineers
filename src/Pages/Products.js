import React from "react";
import img1 from "../assets/davitSystem.png";
import img2 from "../assets/JibSystem.png";
import img3 from "../assets/monorail.png";
import img4 from "../assets/cradle.png";
import img5 from "../assets/eyebolt.png";
import img6 from "../assets/scaffholding.png";
import img7 from "../assets/tsp.png";
import Prod from "../Components/proditem";
import "../Components/common.css"



function Products() {

  const contents = [
    {
      id: 1,
      name: "Temporary Suspended Platforms (TSP)",
      image: img7,
      description: "TSP Systems provide temporary access to heights – for building maintenance, at construction sites or in industrial environments. AMB Engineers offers modular Suspended Platform Systems which are incredibly easy to assemble. Our system offers superior stability and easily fits inside the back of a medium-sized Truck. TSP can be suspended from Beta Jib with Counterweight system or Parapet Clamp System",
    },
    {
      id: 2,
      name: "Davit System",
      image: img1,
      description: "abc",
    },
    {
      id: 3,
      name: "Jib System",
      image: img2,
      description: "abc",
    },
    {
      id: 4,
      name: "Monorail System",
      image: img3,
      description: "abc",
    },
    {
      id: 5,
      name: "Double Suspension Cradles",
      image: img4,
      description: "abc",
    },
    {
      id: 6,
      name: "Eye Bolt System",
      image: img5,
      description: "abc",
    },
    {
      id: 7,
      name: "Quick Access Scaffolding",
      image: img6,
      description: "abc",
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
            desc={contents.description}
          />
        ))}
      </div>





      {/* <div className="my-5">
        <h1 className="text-center" >Our Products</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card title="TEMPORARY SUSPENDED PLATFORMS" imgsrc={img7} />
              <Card title="DAVIT SYSTEM" imgsrc={img1} />
              <Card title="JIB SYSTEM" imgsrc={img2} />
              <Card title="MONORAIL SYSTEM" imgsrc={img3} />
              <Card title="DOUBLE SUSPENSION CRADLES" imgsrc={img4} />
              <Card title="EYE BOLT SYSTEM" imgsrc={img5} />
              <Card title="QUICK ACCESS SCAFFOLDING" imgsrc={img6} />

            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Products;
