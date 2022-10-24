# E-commerce Online Shopping Platform

This is an online shopping website. 

## Features

The platform covers serveral modules including: 
- ``Customer`` : account management such as sign in, sign up, and profile image uploading.
- ``Product`` : prodcut list disaply, reordering and filtering products.
- ``Ordering and Shopping Cart`` : adding or removing items, displaying cart items.

## Skill Stacks

The system uses React as front-end framework, combined with Redux for state management. 

Tools: React, Redux, Ajax, Javascript, CSS, HTML, Docker, Nginx, Ant Design UI components.

## Run locally


The platform can be run with or without a backend service. If you need to run with backend service, please install backend project from [https://github.com/ignitewtk/Web-1-CMS-Groceries-1.0/tree/master/backend] and start it following by the instruction.


#### Run on Docker

Install Docker on your system, or run it on a cloud server with docker installed.

Enter the project root directory, and run following command to build the image in command line:
```
docker build ./ -t mall
```
Build the container from the image and start it: 
```
docker run mall
```
Finally, use [http://localhost:3000] to access to the website.

Stop the container:
```
docker stop mall
```
Restart the container next time:
```
docker start mall
```

#### Run in development mode

After clone the project, install all dependencies: 
```
npm install
```
Then, run the project in development mode:

```
npm start
```
Finally, use [http://localhost:3000] on a browser to access to the website.

## Documentation

To be added.

## License

To be added.

## Contact 

To be added.
