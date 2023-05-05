import React from 'react';

const MoreRecipe = () => {
    return (
        <div>
            <div className='border border-danger px-4 py-1 rounded' style={{marginTop: '0px'}}>
                <div className='d-flex justify-content-center'>
                    <img className='rounded' width='600' src="https://media.gettyimages.com/id/1305516603/photo/shahi-paneer-or-paneer-kadai.jpg?s=612x612&w=gi&k=20&c=H41lV8VHeHHGTlljdfqLCoo733P0tta-3EUnxjtZ5Hg=" alt="" />
                </div>
                <h1>Butter Chicken: The Creamy and Flavorful Dish You Can't Resist!</h1>
                <p className='text-secondary'>By Chef John</p>

                <p>If you're looking for a dish that's both comforting and full of flavor, look no further than butter chicken! This creamy and delicious Indian dish is sure to please your taste buds and satisfy your cravings.</p>
                <button className='btn btn-danger'>Read more</button>
            </div>
        </div>
    );
};

export default MoreRecipe;