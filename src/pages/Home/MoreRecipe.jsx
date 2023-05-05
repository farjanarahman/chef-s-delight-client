import React from 'react';

const MoreRecipe = () => {
    return (
        <div>
            <h2 className='text-center text-danger text-decoration-underline mt-5'>More Recipes</h2>
            <p>By Chef John</p>
            <div>
                <img src="https://media.gettyimages.com/id/1305516603/photo/shahi-paneer-or-paneer-kadai.jpg?s=612x612&w=gi&k=20&c=H41lV8VHeHHGTlljdfqLCoo733P0tta-3EUnxjtZ5Hg=" alt="" />
                <h1>Butter Chicken: The Creamy and Flavorful Dish You Can't Resist!</h1>
                <p>If you're looking for a dish that's both comforting and full of flavor, look no further than butter chicken! This creamy and delicious Indian dish is sure to please your taste buds and satisfy your cravings.</p>
                <button>Read more</button>
            </div>
        </div>
    );
};

export default MoreRecipe;