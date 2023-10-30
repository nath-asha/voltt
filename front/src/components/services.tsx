import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/Services.css";
import { fetchServices } from "../services/api";

// import axios from 'axios';
// const Services = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/api/services')
//       .then((response) => setServices(response.data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (<div>
    //   <h2>Services</h2>
    //   <div className="container">
    //     <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
    //       {services.map((service) => (
    //         <div key={service.id} className="col">
    //           <Card style={{ width: '18rem' }}>
    //             <Card.Img src={service.image_url} alt={service.name} />
    //             <Card.Body>
    //               <Card.Title>{service.name}</Card.Title>
    //               <Card.Text>{service.description}</Card.Text>
    //             </Card.Body>
    //           </Card>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>)


export interface IService {
  _id: string;
  service_title: string;
  service_description: string;
  service_category: string;
  service_template: string;
  image_url: string;
  created_at: Date;
  created_by: string;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    fetchServices()
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the Services:", error);
      });
  }, []);

  return (
    <div className="container1">
      <div className="head">
        The software development company that puts your needs first
      </div>
      <div className="des">
        Voltix Solution is a software company offering web and mobile app
        development, digital marketing,<br></br> with a skilled team focused on
        tech-driven solutions.
      </div>
      <div className="row">
        {services.map((entry) => (
          <div className="col-md-4" key={entry._id}>
            <div className="card mb-4 c_ser">
              <img
                src={entry.image_url}
                className="card-img-top ser-img"
                alt={entry.service_title}
              />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title text-center ">
                  {entry.service_title}
                </h4>
                <h5 className="card-text text-center">
                  {entry.service_template}
                </h5>
                <div className="text-center mt-3">
                  <Link to={`/services/id?id=${entry._id}`}>
                    <button className="btn btn-primary ser-btn">
                      Know More
                    </button>
                  </Link>
                </div>
                <div className="mt-auto text-end"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
