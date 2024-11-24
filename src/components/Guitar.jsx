// Guitar component: Displays individual guitar details and includes an "Add to Cart" button
export default function Guitar({ guitar, addToCart }) {
  // Destructure the guitar object to extract properties
  const { id, name, image, description, price } = guitar;

  
  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">

      {/* Guitar card: includes image, details, and action button */}
      <div className="col-4">
        <img
          className="img-fluid img-zoom"
          src={`${image}.jpg`} // Display guitar image
          alt={`Image of ${name}`} // Accessible alternative text
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3> {/* Guitar name */}
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p> {/* Guitar price */}
        <button 
          type="button" 
          className="btn btn-dark w-100" 
          onClick={() => addToCart(guitar)} // Trigger addToCart function on button click
        >
          Agregar al Carrito
        </button>
      </div>

    </div>
  );
};
