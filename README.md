# Toying-With-Canvas

In a bid to integrate physics and code, I've made a small scale canvas page which generates a few hundred circles and makes them bounce all over the place while under the influence of gravity. 

## How did I do this? 

* I create a class for my circles which will hold all of their data (size, position, speed, acceleration etc)
* Each of these circles has an update and draw function which changes their properties when executed
* Wrote a function which is executed repeatedly. Determines the frame rate of my program. 
* These functions execute the update and draw functions of each circle once per frame.
* Gravity can be added to change the downwards acceleration of these balls. (added to the downwards velocity vector)
* Collision detection added for window frame collisions.

Edging closer to the 8-ball pool dream. 
