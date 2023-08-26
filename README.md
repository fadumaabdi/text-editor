# text-editor

This project involved building a text editor that runs in the browser. It is a single-page application that meets PWA criteria. It also functions whilst offline and  features a number of data persistence techniques that serve as redundancy in case one of the options is unsupported in the browser.

## Description

The key areas that were worked upon were:

* Configuration - Adding essential worbox plugins for service worker and manifest files to the webpack.config.js file. 

* Offline Function: Adding asset caching in the src-sw.js file.

* Database Integration: Configuring the database for data management (addition/updating/retrieval) from the IndexedDB

* User-friendly installation: Adding event handlers to the install button.

* Automatically saving of user notes : Once the application is opened, the IndexedDB will persist any notes added to the site. There is no need to save any information as the application automatically updates the IndexedDB -> When the user clicks out of the window and then returns to the site, they will find all of their notes and other information persisted to the page.



## Installation 
Users can view and utilize the application by visiting the deployed application at https://jate-text-editor19-ee17cd5e87fb.herokuapp.com/.

Viewing the application in the browser gives users the ability to download the application for offline-use.

To make any further additions, start by cloning the repo in the command line git clone https://github.com/rmessett15/PWA-Text-Editor.git, or forking the repo.

Open the folder in your terminal and run the following commands:
* npm run install
* npm run build
* npm run start


![Website Screenshot](texteditorscreenshot.png)

# Links
[Click here to access the deployed website.](https://jate-text-editor19-ee17cd5e87fb.herokuapp.com/)

[Click here to access the files on the github repository.](https://github.com/fadumaabdi/text-editor)
