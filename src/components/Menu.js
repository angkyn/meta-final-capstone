import React from "react";
import { Link } from "react-router-dom"; 
import recipes from "../recipes";
import Swal from "sweetalert2";

const Menu = () => {
  const handleOrder = (id) => {
    console.log(id);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Do you want to confirm order?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: false,
        confirmButtonText: "Yes, order it!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Ordered!",
            "Your order has been confirmed.",
            "success"
          );
        }
      });
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This week's specials!</h2>
        <Link to="/online-menu">
          <button>Online Menu</button>
        </Link>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt={recipe.title} />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>${recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button
                className="orderbtn"
                onClick={() => handleOrder(recipe.id)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
