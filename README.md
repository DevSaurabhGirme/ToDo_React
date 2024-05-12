# React ToDo App with Firebase:

This is a ReactJS todo application with CRUD (Create, Read, Update, Delete) functionalities for managing your tasks.  The application utilizes Tailwind CSS for styling and Firebase for real-time data storage.

## Features:

- #### Create new tasks    :
Users can easily add new tasks to their list.   
The interface should provide a clear way to enter the task description, possibly with a text input field.   
Consider offering options to set due dates and priorities for newly created tasks.

- #### View a list of existing tasks :
The app should display a comprehensive list of all existing tasks.                                  Each task entry should clearly show the task description.
You can enhance the view by including:  
* Due dates: Displaying due dates alongside each task helps users prioritize their workload.
* Priorities: Visually differentiate tasks based on their priority (high, medium, low) to facilitate efficient task management.
* Completion status: Clearly indicate whether a task is completed (checked) or pending.

- #### Mark tasks as completed :
Users should be able to mark tasks as completed to track their progress.    
This can be achieved with a checkbox or a toggle button next to each task.  
Marking a task as complete could visually distinguish it from incomplete tasks (e.g., strikethrough for completed tasks).

- #### Edit existing tasks :     
Users should have the ability to edit existing tasks.
This could involve allowing them to:
* Modify the task description.
* Change the due date or priority.

- #### Delete tasks : 
The app should allow users to remove tasks they no longer need.     
Implement a confirmation step before permanently deleting a task to prevent accidental removals.


## Technologies Used:

ReactJS: A JavaScript library for building user interfaces. https://legacy.reactjs.org/     

Tailwind CSS: A utility-first CSS framework for rapid UI development. https://tailwindcss.com/docs/installation 

Firebase: Google's mobile app development platform that provides backend services like databases, authentication, and more. https://firebase.google.com/

### Installation :
1. Clone this repository:
```Bash
git clone https://github.com/DevSaurabhGirme/ToDo_React.git
```
2. Install required dependencies :
```Bash
cd ToDo_React
npm install
```
3. Create a Firebase project and configure the app with your Firebase project credentials. Refer to the official Firebase documentation for detailed instructions: https://firebase.google.com/docs/projects/api/workflow_set-up-and-manage-project

### Usage :

Start the development server:
```Bash
npm start
```
The application will run on http://localhost:3000 by default.

## Contributing
We welcome contributions to this project! Please refer to the CONTRIBUTING.md file for guidelines on how to contribute.
## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Acknowledgements

[ReactJS](https://react.dev/)     
[Tailwind CSS](https://tailwindcss.com/)    
[Firebase](https://firebase.google.com/)
