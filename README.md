# E-Commerce Back End
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F.svg?&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express-000000?&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/sequelize-52B0E7.svg?&logo=sequelize&logoColor=white)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description
An Express.js API that uses Sequelize to interact with a MySQL database to create the back end for an e-commerce site.

### User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

### Mock-Up

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia Core:

![In Insomnia Core, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./img/13-orm-homework-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia Core:

![In Insomnia Core, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./img/13-orm-homework-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia Core:

![In Insomnia Core, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./img/13-orm-homework-demo-03.gif)

Your walk through video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia Core.


## Installation
After cloning the repository, run the command `npm i` to install the project dependencies.

### Set Up MySQL Credentials
You will need to create a `.env` file in order to store your MySQL user credentials. There is an example file, simply fill in your information and then remove the `.EXAMPLE` from the filename. *Note: the database name is already filled out for you.*

### Create the Schema
The schema file is stored in the `db` folder. To create your database, run the command `mysql -u USERNAME -p` (e.g. `mysql -u root -p` ). You will then be prompted for your password. Next, ensure you are in the root of the directory and run the command `source db/schema.sql`. This will create your database schema.

### Seed the Database
After creating the schema, run `npm run seed` to seed data to your database.


## Usage
- You can get or create Products at `/api/products`
- You can get, update, or delete a specific Product using ID at `/api/products/:id`
- You can get or create Categories at `/api/categories`
- You can get, update, or delete a specific Category using ID at `/api/categories/:id`
- You can get or create Tags at `/api/tags`
- You can get, update, or delete a specific Tag using ID at `/api/tags/:id`

## Credits
This project idea is part of the [Adelaide University Coding Boot Camp](https://bootcamps.adelaide.edu.au).

## License
This project is released under the [MIT License](LICENSE).