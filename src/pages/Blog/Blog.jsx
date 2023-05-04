import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center text-decoration-underline mt-3'>Blogs</h1>
            <div className="blog mt-3 border border-primary p-3 rounded mx-3">
                <h2>Differences between uncontrolled and controlled components.</h2>
                <p>In React, uncontrolled components manage their state internally, while controlled components have their state managed by the parent component. Controlled components offer more control over the user interface, while uncontrolled components are simpler to implement.</p>
                <p>The main difference between uncontrolled and controlled components is the way in which they manage state. Uncontrolled components manage their state internally, while controlled components have their state managed by the parent component. Controlled components offer more control and flexibility over the user interface, but they require more code to implement.</p>
            </div>
            <div className="blog mt-3 border border-primary p-3 rounded mx-3">
                <h2>How to validate React props using PropTypes?</h2>
                <p>To validate React props using PropTypes:</p>
                <ol>
                    <li>Import PropTypes library</li>
                    <li>Define expected type for each prop using PropTypes</li>
                    <li>Pass props to component as usual</li>
                    <li>Check console for PropTypes warnings or errors</li>
                </ol>
            </div>
            <div className="blog mt-3 border border-primary p-3 rounded mx-3">
                <h2>Difference between nodejs and express js.</h2>
                <p>Node.js is a runtime environment, while Express.js is a framework built on top of Node.js. While Node.js provides the foundational tools for building web applications and APIs, Express.js provides a more convenient and streamlined way to build them, with features like routing, middleware, and other utilities to simplify the development process.</p>
                <p>Node.js is a runtime environment for running JavaScript code outside of a browser. Express.js is a framework built on top of Node.js that simplifies the process of building web applications and APIs.</p>
            </div>
            <div className="blog mt-3 border border-primary p-3 rounded mx-3 mb-3">
                <h2>What is a custom hook, and why will you create a custom hook?</h2>
                <p>In React, a custom hook is a reusable function that encapsulates some logic and can be shared across multiple components. Custom hooks enable developers to extract common logic from components and keep the code more organized and maintainable.</p>
                <p>To create a custom hook, developers typically start by defining a function that performs a specific task and then uses the built-in hooks or other custom hooks to implement the logic. The custom hook can then be exported and used in other components.</p>
                <p>Overall, custom hooks are a powerful tool that can help developers build more efficient, reusable, and maintainable React components.</p>
            </div>
        </div>
    );
};

export default Blog;