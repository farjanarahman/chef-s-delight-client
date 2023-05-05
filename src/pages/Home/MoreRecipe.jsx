import React from 'react';

const MoreRecipe = () => {
    return (
        <div>
            <div className='border border-danger px-4 py-1 rounded mb-3' style={{marginTop: '0px'}}>
                <div className='d-flex justify-content-center'>
                    <img className='rounded' width='600' src="https://media.gettyimages.com/id/1305516603/photo/shahi-paneer-or-paneer-kadai.jpg?s=612x612&w=gi&k=20&c=H41lV8VHeHHGTlljdfqLCoo733P0tta-3EUnxjtZ5Hg=" alt="" />
                </div>
                <h1>Butter Chicken: The Creamy and Flavorful Dish You Can't Resist!</h1>
                <p className='text-secondary'>By Chef John</p>

                <p>If you're looking for a dish that's both comforting and full of flavor, look no further than butter chicken! This creamy and delicious Indian dish is sure to please your taste buds and satisfy your cravings.</p>
                <button className='btn btn-danger'>Read more</button>
            </div>
            <div className='border border-danger px-4 py-1 rounded' style={{marginTop: '0px'}}>
                <div className='d-flex justify-content-center'>
                    <img className='rounded' width='600' src="https://myfoodbook.com.au/sites/default/files/styles/schema_img/public/recipe_photo/Perf20159134_0.jpg" alt="" />
                </div>
                <h1> Mouthwatering Mushroom Risotto Recipe</h1>
                <p className='text-secondary'>By Chef Lisa</p>

                <p>Are you a fan of creamy and savory dishes? Look no further than this delicious mushroom risotto recipe that will tantalize your taste buds. With its rich and flavorful ingredients, this recipe is perfect for impressing dinner guests or enjoying a cozy night in.</p>
                <button className='btn btn-danger'>Read more</button>
            </div>
        </div>
    );
};

export default MoreRecipe;