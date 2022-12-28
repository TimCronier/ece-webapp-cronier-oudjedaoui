
# Blogging application - ECE Webtech project

This project, created by Tom, consists in developing a digital application, implementing several features including these :
* Authenticate users using an external provider with OAuth2.
* Navigate through authenticated user articles and comments, and manage them.
* Comment on other user's articles.
* Edit and remove his articles and comments.
* Display the user profile and modify his settings.
* Use the user Gravatar if any or provide a default randomly generated Gravatar, choose an avatar proposed by the application, and upload his avatar.  

We decided to develop this project on the theme of Punchologue, a media dealing with French rap. This media is quite recent and is only present on social networks such as Instagram and YouTube. 

## Production 

- Vercel URL: https://vercel.com/timcronier/ece-webapp-cronier-oudjedaoui-szj4
- Supabase project URL: https://app.supabase.com/project/sdwgogzjpprnyxjqrnua

## Usage

*how to start and use the application, run the tests, ...*

* Clone this repository, from your local machine:
  ```
  git clone https://github.com/TimCronier/ece-webapp-cronier-oudjedaoui
  cd ece-webapp-cronier-oudjedaoui
  ```
* Start the the application
  ```bash
  cd app
  # Install dependencies (use yarn or npm)
  npm install
  npm run build
  npm start
  ```
* Start Supabase
  ```bash
  cd supabase
  docker compose -f ./docker-compose.yml -f ./dev/docker-compose.dev.yml up
  ```

## Authors

* **Timothée Cronier** - timothee.cronier@edu.ece.fr
* **Samy oudjedaoui** - samy.oudjedaoui@edu.ece.fr  

## Tasks
  
**Project management:**

* Naming convention   
    * 2 points | We did respect the naming convention throughout this project.
* Project structure   
    * 2 points | We did respect the project structure.
* Git   
    * 1 points | Unfortunately, we had to create a new repository due to too many issues with the original one. 
* Code quality   
  * 4 points | The code is very clear
* Design, UX, and content   
    *  4 points | Everything is fine, all CSS is hand-made and original, according to the Punchologue's orange signature color. 

**Application development:**

* Home page   
    * 2 points | Simple home page, with a video of Punchologue on YouTube 
* Login and profile page   
    * 4 points | Login/Account button in the header, Github provider, persistant authentication.
* New articles creation   
    *  4 points | Articles persist in database, creation of article ok. However, we didn't implement categories or tags properties.
* New comment creation   
    * 4 points | You can comment only if you are anthenticated, persistent in database. 
* Resource access control   
    * 4 points | RLS are enabled, you can only modify your own comment / article, create article / comment when anthenticated... Not sure about what is the HTTP response tho
* Article modification   
    * 4 points | Clean and working
* Article removal   
    * 2 points | Clean and working
* Comment modification   
    * 2 points | Clean and working
* Comment removal   
    * 2 points | Clean and working
* Account settings   
    * 4 points | Account page ok, the overall theme isn't updated after an update
* WYSIWYG integration   
  * *place your graduation and comments*
* Gravatar integration   
  * 2 points | Clean and working in comments arnd account 
* Light/dark theme   
  * 1 point | Dark theme but not consistent when loading an other page...
* Accent color selection   
     * NA | Changing the theme of the UI isn't really coherent, Punchologue having its famous orange.

## Bonus

* You can access the articles you wrote from your account
* Users who are not registered in Gravatar will have a random profile picture. Sometimes you must refresh the page to see it working normally :(