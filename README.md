 Commerce Website - MERN Stack Project (Currently cyclic is shutting down so I am looking for another alternative for deployment)

Welcome to the Commerce Website project! This application is built with the MERN stack (MongoDB, Express.js, React, Node.js) and includes a range of features designed to provide a robust e-commerce experience. Whether you're browsing products, managing inventory, or handling transactions, this app covers it all.

Features

- Admin and User Login: Secure login functionality for both administrators and users.
- Add to Cart: Users can easily add products to their cart for streamlined shopping.
- Payment Gateway: Integrated payment system for processing transactions.
- Price Filter: Allows users to filter products based on price ranges.
- Category Filter: Users can filter products by categories to find what they're looking for quickly.

Installation Guide

Follow these steps to get the project up and running on your local machine.

Prerequisites

- Node.js (v14 or later)
- npm or yarn (Node package managers)
- MongoDB (local or cloud instance)

1. Clone the Repository

First, clone the repository from GitHub:
cd Ecommerce-Site

2. Install Dependencies

Navigate to the root directory of the project and install backend dependencies:


cd to the server directory
npm install or npm i 


Then, navigate to the client directory and install frontend dependencies:


cd ../client
npm install

3. Set Up Environment Variables

Create a `.env` file in the `server` directory to set up environment variables. Here's a template:

PORT=8080
MONGO_URL=mongodb+srv://example:example@example.mongodb.net/example
JWT_SECRET=exampleToken
BRAINTREE_MERCHANT_ID=exampleToken
BRAINTREE_PUBLIC_KEY=exampleToken
BRAINTREE_PRIVATE_KEY=exampleToken

Make sure to replace the placeholders with your actual values.

4. Start the MongoDB Server

Ensure that MongoDB is running. If you’re using a local MongoDB instance, you can start it with:

If you’re using MongoDB Atlas, make sure your connection string is correct in the `.env` file.

5. Seed the Database (Optional)

If you want to seed the database with initial data, navigate to the `server` directory and run:

6. Start the Application

First, start the backend server:

`npm run dev`
both the client and server run on this command concurrently

The frontend application should now be running on [http://localhost:3000](http://localhost:3000), and the backend API should be running on [http://localhost:5000](http://localhost:5000).

Usage

Admin Login

1. Navigate to the admin login page.
2. Enter your admin credentials to access the admin dashboard.
3. you have to change the user role to 1 for admin access.
User Login

1. Navigate to the user login page.
2. Enter your user credentials to access the shopping area.

Add to Cart

- Browse products and use the "Add to Cart" button to add items to your shopping cart.

Payment Gateway

- Go through the checkout process and enter payment details to complete purchases.

Filters

- Use the price and category filters to narrow down your product search.

Contributing

We welcome contributions to enhance the project! If you have suggestions or find issues, please open an issue or submit a pull request on GitHub.

Contact

For any questions or support, please reach out to [pranavcherkar.2002@gmail.com](mailto:pranavcherkar.2002@gmail.com).

---

Thank you for checking out the Commerce Website project. Happy coding! 🚀
