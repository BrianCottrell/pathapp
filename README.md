###Pathfinding Challenge
###Introduction
This application challenges the user to come up with shortest path that will pass through at least one point from every group on a map made up of a series of clickable points. The concept is inspired by the traveling salesman class of mathematics problems in which the guaranteed shortest path can only be found by calulating the distance of every possible path. This ensures that for a map with many points, it is unlikey that anyone will select the absolute shortest path so users can test their estimation abilities against others and try to make it to the top of the leaderboard. This project was build in one day.
###Technologies
Build with Node.js and HTML/CSS/Javascript and hosted on Heroku.
###Use
The default challenge for the application is a map of the United States in which the user tries to select the shortest path that passes through all 48 connected states. 

To create a custom challenge:
First select a map images and create a set of points using the map creator at https://github.com/BrianCottrell/path-map-creator.
Replace the map element background image in the /stylesheets/styles.css file to the desired map.
Replace the points array in the javascripts/points.js file with the results from running the path map creator
Set the required number of groups in the javascripts/main.js file.
Rename or create a separate highscore database for the new challenge.
