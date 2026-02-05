## AKAN NAME GENERATOR
A web-based application that determines a user's Akan name based on their date of birth and gender. Akan names are a traditional naming system used by the Akan people of Ghana, where children are named after the day of the week they were born.
## Author
Ann Maina
## pages
index.html
style.css
script.js
## Technologies
HTML5: For the form structure.
CSS3: For styling the layout and user interface.
JavaScript (ES6): For form validation and name calculation logic.

## Features
Date Validation: Ensures users enter valid dates, months, and years.
Leap Year Support: Specifically validates February 29th only for leap years.
Akan Logic: Uses a mathematical formula to accurately determine the day of the week.
Responsive Design: Works across different screen sizes using CSS.

## How it works
Basically the user enters their date of birth, and their gender and click on the button.The Akan name will be generated according to the day that person was born. The user does not really need to add the actual day but date.

## Mathematical formula
The application uses Zeller’s Congruence (or a variation of it) to find the day of the week.
The formula used is:
d=((4CC​−2×CC−1)+(45×YY​)+(1026×(MM+1)​)+DD)(mod7)
Where:
 CC: The century (e.g., 19 for 1989).
 YY: The year of the century (e.g., 89 for 1989).
 MM: The month of birth.
 DD: The day of the month.

 ## Akan Names
 Day of the Week, Male Name, Female Name
 Sunday            Kwasi        Akosua
 Monday           Kwadwo        Adwoa
 Tuesday          Kwabena      Abenaa
 Wednesday         Kwaku        Akua
 Thursday          Yaw           Yaa
 Friday            Kofi         Afua
 Saturday          Kwame         Ama

## How git clone 
https://github.com/your-username/akan-name-generator.gitto Install
cd akan-name-generator
Open index.html
