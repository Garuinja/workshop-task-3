Link - https://garuinja.github.io/workshop-task-3/

This is was the most difficult project I've had to work through for this course, even the final product is something I'm not that proud of but I lost my patience with it. Unlike most of the other README in my other repositories this one was written after the doing the project (the others are written while working on the project). I ended with a piece of code that would randomly place the images from the image folder 30 times and after it does that it will continue to do that but this time the images all have some type of filter on them which will eventually cause them to lose their orignal image and become squares of colours. This was difficult because my orignal idea was to have a filter over the entire canvas and have the images randomly spawn but trying to figure that out was too difficult so I moved on to trying to make the images have filters that would change colour however while working on this I read the task again and started to think that I didn't understand what the task was. So in the end, I tried to mix the functions that were shown in the workshop video. When rewatching the video, I decided that I wanted to have the loadPixel and updatePixel functions because I liked how it looked like a filter over an image. When trying to implement the loadPixel and updatePixel code segment, it didn't work at first as in the page wasn't loading. I didn't understand why this wasn't working until I had a look at the video again and saw that I wasn't updating some segments to my variables.

### Update
### Brief Account of Experimentation
- With this new update, I decided to remake the project because I wasn't too happy with the previous build. This time I made set coordinates for the photos and randomized what images could be in each spot so that it was more clear what the photos looked like. I then decided to treat each photo differently with the top right photo being made of single coloured squares and the photos on the left side being two different tint randomly changing colours which I found on the p5js (https://p5js.org/reference/p5/tint/). Then finally the bottom right photo would have the same effect as the photos in the original build.

### Problem Solving 
- I wanted to be able to apply the pixeling effect for the specific photo that was meant to be randomized so I made a function that would take in a value and apply the effect to the value but when I tested out the code the function didn't seem to be working the way I intended it. So to remedy this I made it simpler by setting a value exclusively for the cube pixel effect and then randomizing the photo for the value in the setup function and then utilizing the cube pixel effect in the draw function using the value.

### Future Development
- Currently when two of the same photos appear and one of the photos is being affected by the pixel disentegration effect the other is as well. So in the future I want to be able to exclusively apply the effect to only one photo so that way when two of the same photos appear only one is affected by the disentigration. Another thing I want to do, the frog image is larger than the other photos so large in fact that when it is in the top left corner it cuts into the cube pixel photo on the right covering it up, I want to be able to get the cube pixel photo to go over the frog photo so that it doesn't get covered. 
