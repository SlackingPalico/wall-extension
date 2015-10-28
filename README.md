# Wall, the front cover of the internet

Wall relies on a chrome-extension. Having this 'extension' allows one to turn Google's homepage into what it has always been, the most prominent neighborhood-wallfront in the global village. What good is a wall without graffiti?

Wall's civic rehabilitation of Google's homepage is ensured by two modes of user-experience:

(1) in which a visitor to the page is greeted with an elaboration of it - we'll call it 'a canvas' - passed on to them by someone else in the Wall network. Here, they have three choices: (i) pass it further onward to four more users nearby in the network, (ii) not pass it on, (iii) add to it and pass it on (to four users). Of course, they can always initiate their own canvas, and send it off, fingers crossed.

(2) in which a visitor to the page is greeted by the canvas that has been the most passed-along within some (user specified) geographical boundary.

The user will only be prompted to contribute to the network, through the first mode, every five or so visits to Google's homepage. Otherwise, they can sit back and enjoy the fruits of this liquid democracy, through the second mode, whenever they happen to visit the most visited page on the internet.

Wall will also have an accompanying website that will carry many supplementary features, chief of which will be user pages for interaction among members and for the recording of previous successful additions to Wall.

Inspired by Banksy. "Tonight the streets are ours."

* * *

# MVP 1 :
Target for Completion: Tuesday, November 2, 2015

The website, made with Angular, will be deployed at wallsite.net. At the top right corner, the mainpage will have (i) a signup/signin button that opens a signup/signin modal, which, used successfully, redirects the user to their profile, and (ii) a button that opens the download page for the chrome extension in a new tab. Note that the modal should require an address, and should handle errors responsively (like notifying the user a username is taken, or that the address does not correspond to a valid geo-locale). 

Each user page should be sharable, like Twitter, but only editable by the user when logged in. The design is 'in the air', but it should have the basic info: 
  - location
  - username
  - name
  - profile pic
  - a little, optional, 'about me' section
  - background pic


This is much like Twitter, but user pages should also include:

  1) a 'Make Canvas' button that redirects to Google's homepage, where, if they have the extension installed, they     can format a canvas, save it by sending the canvas data back to wallsite.net, so that:

  2) they can see all their past canvases in miniature. Note, clicking on the miniature should redirect them to       Google, where they can see it in full. There should also be a delete option for removing a canvas from the database.

The chrome extension should add a button next to the line of buttons Google already has at the top right corner of its homepage. The button will say 'Wall.' Clicking on the button should pop out a modal that has two options, 'Upload Image' and 'Publish.' The user should be able to upload, place, and resize images on the screen. When they click 'Publish', the image's data should be sent to Wall's server.


