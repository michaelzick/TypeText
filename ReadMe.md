# What does this do?
This plugin takes a string, parses it to an array and outputs it to the DOM with the following options:  
-type: 'linear' or 'random' (string)  
-speed: how fast the characters are displayed (integer)

## How do I use it?
For each element you want to run the plugin on, give it a class of "typeText":

`<p class="typeText">Wow, this is like the coolest plugin EVER.</p>`
  
Then create the function call at the very bottom of the code:
  
`$('.typeText').typeText({  
    type: 'random',  
    speed: 25  
});`  

Check out the [demo](http://jsfiddle.net/ZICKONEZERO/CqcNV/). 

### Requirements:
jQuery 1.8.3

### Supported Browsers:
Chrome  
Safari  
Firefox  
Opera  
IE 7 - 9