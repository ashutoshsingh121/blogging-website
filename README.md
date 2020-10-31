
# Blogging Website

## PROJECT DESCRIPTION

A simple CRUD application in the form of  blog, written in Node.js,Express, HTML, CSS, JavaScript and MySQL.

Other Specifications

1. Back to Top button: The homepage includes a back to top button which is visible when the user scrolls down and when clicked takes him back to the top of the page. Simple JavaScript code.


2. User Specific Edit/Delete privileges: Only the author of the posts get the additional buttons to edit or delete the post, others can only view the read more button.


3. Authentication: All the endpoints of the blog (except the login and register endpoints) are protected well using express sessions authentication. Passwords are not directly stored in the database, only the encrypted password Hashes are stored. Thus it is not possible to extract the password via SQLi.


4. URL modification protection: Each endpoint has ways to check if the user is eligible to access that endpoint to prevent access by changing parameters in the URL.

5. Follow Me: If any user wants to follow the author he/she can click on GitHub icon, linkedin, kaggle to follow.

6. All pages are responsive.

7. Popular Post: In the popular post section, the popular post are seen.

8. Validation: All the form in this website filled with proper form validation by javascript.