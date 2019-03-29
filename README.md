# dibs

![dibs screenshot](https://i.imgur.com/JYzWn6I.png)

**dibs** is a ReactJs application designed to make the process of creating and signing up for gym classes easier! **dibs** has 2 user types: a trainer and a member.

A trainer has the ability to create and schedule classes with a date and time, description of the class, and set a limit on the number of spots available in the class. If a trainer chooses, they can also edit or delete a class. The change to the editted or deleted class will apply to all users who had an instance of the class. Trainers are also able to see what members have signed up for classes to help determine the level of intinsity to bring to the class. To have a trainer account, another trainer must log in and create the account for the future trainer.

Members have the ability to sign up for classes or drop classes that they have already signed up for. If a member attempts to reserve more than one spot in the class, and alert is sent to remind the member that they have already signed up. If the capacity for the class set up by the trainer has been filled, the member will not be able to reserve a spot in the class. Members have the ability to click the "Add to Calendar" button on a class to add the event to their calendar application of choice (ex: Google Calendar, Apple Calendar, Outlook). When adding the class to their calendar application, the field of the calendar application will be auto-populated with the date, start-time and location of the class.

## Installation
```
git clone the project

npm install

cd to /api folder and launch the json file - json-server -p 5002 -w database.json

cd to the root and run npm start
```

## Usage

You can create a user account on the login page, or use the below account for an account with data pre-populated:
```
    login email: duke@mail.com
    password: pw
```
To view a trainer account, you will need to log in with an existing account. Here is Frank Sinatra's login:
```
    login email: sinatra@mail.com
    password: pw
```
One of my goals in designing this project was to make it super user friendly. I hope that you can find your way around naturally! However, here are some things to try out when you log in.

- Add a class from Available Classes to your class list by clicking the "dibs" button
- Remove a class from your class list by clicking the "Drop" button
- Add a class to your calendar by clicking the "Add to Calendar" button and selecting your preferred calendar application
- When logged into the trainer account, try adding a class, editing, and deleting the class

If you'd like to talk about the project, feel free to message me on LinkedIn: https://www.linkedin.com/in/austin-blade/

Hope you enjoy!

## License
[MIT](https://choosealicense.com/licenses/mit/)
