# Local Event Planner

 - [Live Site Link (Netlify)]( https://local-event-planner.netlify.app/)
- [Client Site Repo](https://github.com/AALabonya/Local-Event-Planner)

# Application features and brief overview:

- The "Local Event Planner" application, built on React.js, Ant Design, Redux, and React Router, aims to provide a user-friendly platform for discovering, planning, and managing local events (e.g., meetups, workshops, community gatherings) within a city, showcasing the app's ability to work with React ecosystem tools and libraries.

- I stored events data in localstorage and also set them in redux store by dispatch event. Then when I re-render or reload the page I am fetching the data from localstorage and again set the data in redux store by dispatching event..Which functionality done on MainLayout.jsx(layout) page...and when I need data I just call the data from redux store by using useSelector.

- This website include topbar and navbar
- Hero section 
- Event Organization form: Create Event button you will redirect to Event-Form page. If someone create event it will appear in the event listing.
- I used demo picture in the event listing so that it attracts users. Besides all picture used in this website are dummy. 

- Once user will click event details they also can see other recent event.

 - User Authentication : I have used firebase.

## Additinoals features:

 - I have added Home Page that included Story and About Us .
- I have added Contact Page 
- I have added Footer section which included Social Media links , Address and Menu items.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/AALabonya/Local-Event-Planner.git
   ```

2. Navigate to the project directory:

   ```
   cd Local-Event-Planner
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

## Used Technology :
 - ant-design/icons(Design icons)

 - reduxjs/toolkit(global state management)

 - react-redux(global state management)

 - antd(Design)

 - firebase(Authentication)

 - moment(Date & Time)

 - react-router-dom
    

## Contact

For any inquiries, feel free to contact me at [1aklimakter@gmail.com](mailto:1aklimakter@gmail.com).

