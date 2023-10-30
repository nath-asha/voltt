import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchTestimonials } from "../services/api";

// const Testimonial = () => {
//   const [testimonial, setTestimonial] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/api/services')
//       .then((response) => setTestimonial(response.data))
//       .catch((error) => console.log(error));
//   }, []);
//   return (
//     <div>
//       <h2>Testimonials</h2>
//       <div className="container">
//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
//           {testimonial.map((testimonials) => (
//             <div key={testimonials.id} className="col">
//               <Card style={{ width: '18rem' }}>
//                 <Card.Img src={testimonials.img_url} alt={testimonials.name} />
//                 <Card.Body>
//                   <Card.Title>{testimonials.name}</Card.Title>
//                   <Card.Text>{testimonials.comment}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


export interface ITestimonial {
    _id:string;
  testimonial_author: string;
  testimonial_content: string;
  testimonial_service: string;
  created_at: Date;
  created_by: string;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
  useEffect(() => {
      fetchTestimonials()
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the testimonials:", error);
      });
  }, []);

  return(
    <div className="container">
        <h1>Testimonials</h1>
        <div className="card-deck">
            {testimonials.map((entry)=>(
                <div className="card" key={entry._id}>
                    <div className="card-body">
                        <p className="card-title">{entry.testimonial_author}</p>
                        <p className="card-text">{entry.testimonial_content}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Testimonials;