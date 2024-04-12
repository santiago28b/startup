# startup project
startup app for cs260
[Link to Notes](notes.md)

## Jan App


### Elevator Pitch
it is a web app that you can use to manage your clients in commercial cleaning. In this app you will
be able to create a new account and add clients that you will be working with and manage how much profit you
will be generating. On top of that you can add your employees and view how many hours and what accounts(clients) they clean. The reason I want to build this app is that I have a friend of mine who owns a cleaning company and he struggles with excel spreadsheets to view his income, outcomes and the math to know what is the right amount of money he has to pay his employess to make profit out fo the new client.

### key features
1. Create account
1. add and remove clients
1. add and remove employees
2. graph of profit for each month
3. friendly account calculator that predicts possible profit for new or existing accounts

### what tech will be used and how?
I will use bacis HTML&CSS to make the website and then add JavaScript to add the functionality of calculations and manage clients.
I will also need the use of database, possibly MongoDB to store the information that needs to be saved.

### rough Sketch of the app
<img width="625" alt="Screen Shot 2024-01-10 at 7 53 32 PM" src="https://github.com/santiago28b/startup/assets/111794648/a9bd542a-0d94-44a1-b379-416979490f3c">


## HTML deliverable

➡️ information for the `Startup HTML` deliverable

For this deliverable I built out the structure of my application using HTML.

- [x] **HTML pages** - Four HTML page that represent the home page, clients page, employees page and about page.
- [x] **Links** - The login page automatically links to the clients page. all home pages contain links to the other pages.
- [x] **Text** - Each pages has information about clients or employees depending on what page you are on.
-  [x] **Images** - I added a basic image that shows the ability to include images and modify its size
- [x] **DB/Login** - Input box and submit button for login.
- [x]  **WebSocket** - The count of clients and employees and the money it is generating as a placeholder.

## CSS deliverable
➡️ information for the `Startup CSS` deliverable

For this deliverable I built out the style of my application using CSS and Boostrap framework.

- [x] - done - Prerequisite: Simon CSS deployed to your production environment
- [x] - done - Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page
- [x] - done - Prerequisite: Notes in your startup Git repository README.md file
- [x] - done -  Header, footer, and main content body. Used flex to layout sections.
- [x] - done -  Navigation elements. Links highlight on hover.
- [x] - done -  Responsive to window resizing. Looks great on iPad, desktop, and iPhone.
- [x] - done -  Application elements. Buttons are using bootstrap

## JavaScript deliverable
➡️ information for the `Startup JavaScript` deliverable

For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

- [x] - done - login: When you press the login button it takes you to the clients manager page.
- [x] - done - database: Displayed the client and employee counts. Currently this is stored and retrieved from local storage, but it will be replaced with the database data later.
- [x] - done - application Logic: pull the biggest account based on money or employee number
- [x] - done -  functionality to add, remove based on ID and update the data for employees and clients
- [x] - done - mock Websocket. Clients page will generate mock data every 5 seconds adding a new client

## Service deliverable
➡️ The following is an example of the required information for the Startup Service deliverable

For this deliverable I added backend endpoints that asks riddle everytime you load the about page

- [x] - done -  Node.js/Express HTTP service - done!
 - [x] - done - Static middleware for frontend - done!
- [x] - done -  Calls to third party endpoints - I didn't have time to implement this. 😔
 - [x] - done - Backend service endpoints - Placeholders for login that stores the current user on the server. Endpoints for voting.
- [x] - done -  Frontend calls service endpoints - I did this using the fetch function.


