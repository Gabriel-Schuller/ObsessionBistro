# ObsessionBistro

## Story
This project is a website for people who want to order pizza from the fizical bistro. The site should contain user and admin pages and should use Jwt Bearer for the registration part of the project. Backend side will use .Net core, with Role-Authentication to separate between normal users and admins. The ORM of choice is Entity Framework, with code first approach. Mapping between backend and frontend items is made with AutoMapper. The frontend side of the project is made with React and react bootstrap. Instead of Redux in this project MobX is used for context management. The project is in the first sprint, each sprint being 1 week.

## What are you going to learn?

>How to create a web API

>Work with Entity Framework

>Work with AutoMapper

>Work with Jwt token on the backend side

>Authorize with roles

>Work with different routes for the controller

>Work with Swagger

>Work with CORS / create cors Policies that will make the results available on the frontend side.

>Work with repository pattern

>Work with React states

>Work with MobX

>Work with React Bootstrap

>Work with Jwt token on the frontend side

>Work with React Router

>Work with Toastify

>Work with axios for the GET/POST calls


## Tasks

1. Implement controllers for product/users pages
    - Controller will contain all CRUD operations
    - There will be validations for all CRUD operations and all possible errors will be handled
    - All the controllers will implement search by id or name/email
    - Calls t  the api with bad input will throw exceptions

2. Implement repository pattern
    - There will be a folder called Repository in the Service folder
    - This folder will implement the repository pattern for the entities in the database and also a base repository for Adding, Deletion and Saving changes to 	the database
    - Repository will work in conjunction with Entity Framework

3. Use EntityFramework for creating a database and manage its entities
    - Project will use entity framework code first for creating tables for products/unsers, and on future sprints for orders.
    - There is a separation between entities/usermodels (can use AutoMapper)
    - Migrations will be used to keep track of changes 

4. Create a login/register page
    
    - There will be a login/register page that allows the user to perform those common actions by interacting with the backend api
    - The login page will automatically redirect the user to the homepage
    - The register page will automatically redirect the user to the homepage
    - Providing bad imput will keep the user on the specific page and indicate failure with a toast

5. Create a Navigation Bar
    - A navbar can be used to move the user around the website
    - Login/Register functionality are visible if the user is not logged in
    - In case the user is logged in, he will see logout
    - There will also be a footer navbar with the same functionality and social media links

6. Create a homepage 
    - The "/" route shows the homepage with a design like a printed add
    - There wil lbe big buttons redirecting to menu/offers

7. Create a menu route
    - The "/menu" route will show all products available in a cart/like system
    - The cart will have a hover effect showing description of product and price
    - On the top it will be an option to sort base of type of product (Ex. Burgers/Pizza.Sweets)

8. Create an offer route 
    - The "offers" route will show a list of offers 


## To do in next spinrt
    - Implement admin page
    - Manage Logout 
    - Save and manage user credentials on session storage	
    - Create product page where user can add product to cart
    - Create Cart

## General requirements

None

## Pictures



![FileSeparation](Images/HomePage.PNG?raw=true "Title")
![FileSeparation](Images/Menu.PNG?raw=true "Title")
![FileSeparation](Images/Register.PNG?raw=true "Title")
![Dependency Packages](Images/DependencyPackages.PNG?raw=true "Title")


