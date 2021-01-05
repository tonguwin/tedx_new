# TEDxUCSD Website
This is the website that homes the future TEDxUCSD website. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions to start
1. Make sure you're a contributor! If you're not one yet, please let me know. 
2. Clone this repository with your command line/terminal! It's much easier than what I taught y'all, here are instructions: (https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)  
3. Once the repository is cloned, make sure it's checked out in a folder. If your folder is still empty once cloning, try `git checkout main` on your terminal 
4. In your command line/terminal you should already be CD'd into the folder but if you're not yet, make sure you are! 
5. Install your node modules folder with `npm install`
6. Start your developmental environment with `npm start`
7. Start coding with the folder open in VS Code! 

## List of things you can do! 
If you choose to start doing something, please let the webDev Slack channel know which task specifically you're doing! Once you finish the task, please let the channel know as well with a funny emoji and I will be sure to update the README.md file so that any updates can be crossed off here. When claiming or addressing a task, call it by name and number so for example "Blog-1" would be referring to the first blog task. The tasks are ordered from easiest to hardest in a top down perspective. Thus a task like About-1 is super easy, while a task like Home/Landing-3 would be much harder. I suggest starting on tasks near the top of the list! 

Please utilize/reference the Figma design while coding! https://www.figma.com/file/kSJ57eXhmbqhTROFbYXyn8/TEDxUCSD-Webpage?node-id=131%3A98 

### About 
1. (NOT CODE) start to gather a list of each member and create a google forms to gather bios/fun facts/links 
2. Make the 'TEDx' in the 'What is TEDxUCSD?' red. This can definitely be googled/stackoverflowed and done easily 
3. Once data is gathered, input/replace data in the data.json file! 

### Blog
1. Create Blog folder in Components - one jsx and one css file  
2. File imported, routing name set in App2.js and place on NavBar 
3. Top title that simply reads 'Events' at the top, equipped with the same CSS as the 'About Us' title on the About page
4. Create a new folder under the blog folder, for blog post files to be (will be empty for now) 
5. Set up the divs/skeleton for this for content to be entered (Todd will handle this) 

### Events 
1. Create Events folder in Components - one jsx and one css file   
2. File imported, routing name set in App2.js and place on NavBar
3. Create a new folder under the blog folder, for blog post files to be (will be empty for now) 
4. Top title that simply reads 'Events' at the top, equipped with the same CSS as the 'About Us' title on the About page
5. Create a skeleton for the main events page
6. Create a skeleton for individual event pages

### Sponsors 
1. Top title that simply reads 'Sponsors' at the top, equipped with the same CSS as the 'About Us' title on the About page 
2. 'Current sponsors' implemented after the title of the page 
3. Title cards to represent sponsors, can be pulled from About Us page 
4. Figure out how to add data into the cards for sponsors that differs from the About Us page
4. Play around with sizing for these boxes, with bigger boxes showing our higher paying sponsors  

### Studio 
1. Create Studio folder in Components - one jsx and one css file   
2. File imported, routing name set in App2.js and place on NavBar
3. Top title that simply reads 'Studio' at the top, equipped with the same CSS as the 'About Us' title on the About page
4. Find out how to integrate this API into the page (https://github.com/codrops/MorphingBackgroundShapes) 

### Home/Landing
1. Fix spacing (most likely w CSS) with the "Ideas Worth Spreading" Title 
2. Make the 'what is TEDxUCSD' lead to the About Us page 
3. Play around/add fun random boxes that are clickable 

### NavBar 
1. Change the HUE logo on Navbar to the TEDxUCSD logo!  
2. Make the NavBar completely white and navbar font black 
3. Change hamburger button from appearing in the middle to appearing in a screen on the right 

### General
1. Change highlighting color to a pretty TEDx red instead of classic blue (google/stackoverflow how to change highlighting color) 
2. Figure out how to take the base grid background that lies on each page! 
3. Take out Marquee moving train at the bottom of each page. Simply need to delete it the marquee tag (currently leaving this here bc it's fun to look at lol)
4. Create a footer that contains IG, FB, etc and push it to each page 

## Tips + Advice 
1. Try to use other CSS files and JS files to gather inspiration
2. Develop with the developmental environment in so you can constantly see if your code is working (this is just the working browser that pops up after you do npm start) 
3. If you're stuck for more than 10 minutes use Google (stackoverflow is your bff), or just slack the chat! 
4. Start off with beginner tasks (the lower the number, the easier the task) and then inch up to trying a hard task if you're up to the challenge :)) 
5. If you're ever get too overwhelmed, anxious about it, maybe even have a smoll headache - feel free to just STOP! This is supposed to be just a learning experience for y'all and no stress should be put into it! 
6. If you're having trouble with a merge or maybe pull, Slack the webDev channel with a screenshot and we'll all try to help out or hop on a call. 
7. Lol, please ignore any extra random folders that you may see. I tried to delete as much as I could but I got to a point where I was confused why deleting won't start up the page... 
8. When starting a new page feel free to copy content from another jsx file so that it just initially launches!
