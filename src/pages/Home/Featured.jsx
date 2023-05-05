// import React from 'react';

// const Featured = () => {
//     return (
//         <div>
//             <h2 className='text-center mt-5 text-danger text-decoration-underline '>Featured Post</h2>
//             <img
//                 className="img-fluid mx-auto d-block mt-3 mb-3"
//                 style={{ height: "450px", width: "90%", borderRadius: "10px" }}
//                 src="https://www.thespruceeats.com/thmb/htgE7CCYS5FaW99oF183gVl7e_Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-639389404-5c450e724cedfd00015b09d5.jpg"
//                 alt="" />
//             <h3 className='mt-3'>Delicious and Nutritious: Why You Should Try a Spinach and Feta Stuffed Chicken Breast</h3>
//             <p className='mt-3'>Are you tired of the same old chicken dinners? Want to spice things up with a dish that's both delicious and nutritious? Look no further than a spinach and feta stuffed chicken breast!</p>
//             <p>Not only does this dish taste amazing, but it's also packed with nutrients that are essential for a healthy diet. Spinach is a great source of iron and vitamin C, while feta cheese provides protein and calcium. Chicken breast is a lean source of protein that can help you build and maintain muscle mass...</p>
//             <button className='btn btn-danger mx-auto d-block'>Read More</button>
//             <p>To make this dish, start by preheating your oven to 375°F. Cut a slit in the center of each chicken breast, being careful not to cut all the way through. Season the chicken with salt, pepper, and garlic powder.

//                 In a bowl, mix together chopped spinach, crumbled feta cheese, and minced garlic. Stuff the mixture into the slit in each chicken breast, and use toothpicks to secure the opening.

//                 Bake the chicken in the oven for 25-30 minutes, or until the internal temperature reaches 165°F. Serve hot and enjoy the delicious flavors of the spinach and feta stuffing.

//                 Not only is this dish easy to make, but it's also a great way to get your daily dose of essential nutrients. So why not give it a try and discover the delicious and nutritious benefits of a spinach and feta stuffed chicken breast?</p>
//         </div>
//     );
// };

// export default Featured;

import React, { useState } from 'react';

const Featured = () => {
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    setShowButton(false);
  };

  return (
    <div>
      <h2 className='text-center mt-5 text-danger text-decoration-underline '>Featured Post</h2>
      <img
        className="img-fluid mx-auto d-block mt-3 mb-3"
        style={{ height: "450px", width: "90%", borderRadius: "10px" }}
        src="https://www.thespruceeats.com/thmb/htgE7CCYS5FaW99oF183gVl7e_Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-639389404-5c450e724cedfd00015b09d5.jpg"
        alt=""
      />
      <h3 className='mt-3'>Delicious and Nutritious: Why You Should Try a Spinach and Feta Stuffed Chicken Breast</h3>
      <p className='mt-3'>Are you tired of the same old chicken dinners? Want to spice things up with a dish that's both delicious and nutritious? Look no further than a spinach and feta stuffed chicken breast!</p>
      <p>Not only does this dish taste amazing, but it's also packed with nutrients that are essential for a healthy diet. Spinach is a great source of iron and vitamin C, while feta cheese provides protein and calcium. Chicken breast is a lean source of protein that can help you build and maintain muscle mass.</p>
      {showButton && <button className='btn btn-danger mx-auto d-block' onClick={handleClick}>Read More</button>}
      {!showButton && (
        <p>
          To make this dish, start by preheating your oven to 375°F. Cut a slit in the center of each chicken breast, being careful not to cut all the way through. Season the chicken with salt, pepper, and garlic powder.

          In a bowl, mix together chopped spinach, crumbled feta cheese, and minced garlic. Stuff the mixture into the slit in each chicken breast, and use toothpicks to secure the opening.

          Bake the chicken in the oven for 25-30 minutes, or until the internal temperature reaches 165°F. Serve hot and enjoy the delicious flavors of the spinach and feta stuffing.

          Not only is this dish easy to make, but it's also a great way to get your daily dose of essential nutrients. So why not give it a try and discover the delicious and nutritious benefits of a spinach and feta stuffed chicken breast?
        </p>
      )}
    </div>
  );
};

export default Featured;
