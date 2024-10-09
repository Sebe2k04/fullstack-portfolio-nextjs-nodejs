# Genkart-Ecommerce


<img src="./readme-assets/portfolio.png" alt="" />



Genkart is a sophisticated portfolio platform designed to demonstrate a wide range of web development skills. Unlike traditional portfolio sites, It provides dynamic content for projects , certificartions , testimonials , resume with admin dashboard and robust backend functionality. The project is built using cutting-edge technologies and frameworks to ensure scalability, performance, and maintainability.

### Tech Stack Overview:

Frontend: Built with Next.js, a powerful React-based framework that supports server-side rendering and static site generation, enhancing both performance and SEO.

Backend: Powered by Node.js and Express.js, providing a flexible and efficient environment for handling API requests and managing server-side logic.

Database: Utilizes MongoDB, a NoSQL database, for storing product information, user data, and other critical information. The schema-less nature of MongoDB allows for rapid development and flexibility in data management.

Image Management: Cloudinary is integrated for efficient image storage and delivery, offering responsive images and optimized media assets across the platform.

Styling: The user interface is styled with Tailwind CSS and Material UI, combining the utility-first approach of Tailwind with the component-rich Material UI to create a visually appealing and responsive design. Material Tailwind further enhances the design with additional UI components.

### Key Features:

Admin Dashboard
Dynamic Content
Real time Testimonials
Stunning UI
Animated Content
etc..

### Project Objectives:

This porftolio is to showcase their skills throughout the world to enhance their capability . An Advanced level portfolio project to ensure neccesary details of a person and their services , skills , capabilities , experience etc..
 
### Potential Future Enhancements:

Although this portfolio is  not fully completed , Further enhancements will have to take :

Analytical Dasboard 
chat integration

## Technologies used ...

this project is developed by using

- Next js
- Node js
- Express js
- MongoDB
- Tailwind css
- Cloudinary
- Material UI
- Material Tailwind
  etc...

## How to use

### requirements

create a mongodb atlas account : https://www.mongodb.com/products/platform/atlas-database

create a cloudinary account : https://cloudinary.com/

use visual studio code editor : https://code.visualstudio.com/download

intall git
for windows : https://git-scm.com/download/win
for mac : https://git-scm.com/download/mac

install node js : https://nodejs.org/en/download/package-manager

### get code from github

create a folder and open in visual studio code

open new terminal in vs code then run below command

```bash
git clone https://github.com/Sebe2k04/Genkart-Next-Node-Ecommerce-v2.git ./
```

then provide env files provided below

### Environment Variables

initially create a env file in root folder of next js - location (/client/.env)

important note : you can provide jwt secret based on you wish but provide same secret value for client and server

```bash

# backend url
NEXT_PUBLIC_API='http://localhost:5000/api'
# frontend url
NEXT_PUBLIC_CLIENT_URL="http://localhost:5000/"
# jwt secret for verify user - replace as per you wish -same as backend
NEXT_PUBLIC_JWT_SECRET="adminfksnkzv"
NEXT_PUBLIC_NODE_ENV="development"

```

after that create a env file in root folder of server - location (/server/.env)

```bash
# your mongodb uri - replace username and password and provide yours

MONGO_DB_URI="mongodb+srv://username:password@project.wvpqroq.mongodb.net/genkartv2?retryWrites=true&w=majority&appName=project"
# client url
CLIENT_URL="http://localhost:3000"
# node environment
NODE_ENV="production"
# cloudinary name
CLOUDINARY_CLOUD_NAME=""
# cloudinary api key
CLOUDINARY_API_KEY=""
# cloudinary secret key
CLOUDINARY_API_SECRET=""
# cloudinary folder name to store files in specific folder
CLOUDINARY_FOLDER_NAME="portfolio"
# jwt secret to encode and decode admin token between client and server -provide same value as frontend
JWT_SECRET="adminfksnkzv"
# jwt expiration
JWT_EXPIRES_IN="1d"
```

### how to run it

note : initially the website will be blank because no user , admin or products are not in you database

create two terminals in vs code

in first one

```bash
cd server
npm install
npm start
```

in second one

```bash
cd client
npm install
npm run dev
```

Now you have running your frontend and backend
all the running url will be displayed on respective terminal

### create admin user

Important note :

initially go to below file

/server/routes/authRoutes.js

then uncomment the admin signup route

--

note i didn't provide admin signup ui , due to secure concerns . after create admin comment the respective route in server auth route - (admin signup)

open postman

then create new workspace

then provide url backend url with respective route
for example : if you running in localhost 5000

http://localhost:5555/api/auth/admin/signup

<img src="./readme-assets/postman.png" alt="" />

after that you got a response similar like above image

then in frontend url login with respective email and password to gain access to admin dashboard in ,

http://localhost:3000/admin

then you can add and remove projects ,certifications , resume in admin dashboard

# project authority

this project is developed only by @sebe2k04 , if you have any queries contact me on ,

github :

https://github.com/Sebe2k04

linked in :

https://www.linkedin.com/in/sebe2k04/

gmail :

sebe2k04@gmail.com

website:

https://sebe2k04.vercel.app/

this project is developed only by myself - sebe , to showcase my developing skills , im a fresher and im currently looking full time job oppurtunities , thank you all...
