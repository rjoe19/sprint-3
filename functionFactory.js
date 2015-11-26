/*i) Create a function called cube that takes a number and cubes it (multiplies it by itself twice) 
and returns the cubed number. 
For example, if we called cube(3) the output would be 27, and cube(5) would return 125. */

var cube = function (x) {
    
    return Math.pow(x,3);
    
};


cube(4);




/*ii) Create a function called absolute that takes a number and returns 
the same number if it's positive, or returns the number multiplied by -1 if it's negative. 
In other words, it returns the absolute value of the number.
 Hint: maybe this calls for a conditional? We're just sayin'. */


 var absolute = function(x) {
    
    
    if (x<0  )  {
        
        return Math.abs(x);
    }
    
    else {
        
        return Math.abs(x);
    }
    
    
  };

absolute(-5);





/*iii) Create an array of first names at least five items in length. 
Then "map" the array, passing in an anonymous function that returns the name with "y" appended to it. 
In other words, if my array is ['Joe', 'Chuck'], then the output of the call to map should be ['Joey', 'Chucky']. 
Except with at least five names, of course. */


var firstNames = ["Joe", "Chuck","John", "Smith", "Smile"];

var addName = firstNames.map(function(x)  {return x +"y"});

addName;


/* iv Create a function called makeKiaOra(name) that returns a function that logs to the console "KiaOra, [name]" 
where [name] is the name with which we called makeKiaOra. For example, if I set var kiaOraJoe = makeKiaOra('Joe'), 
and then called KiaOraJoe(), 
I'd see "Kia ora, Joe" appear in the console.)  */


function makeKiaOra(name) {
    return function (myName){
        
        console.log("Kia Ora," + " " + name);
    };
    
    
}


var kiaOraJoe = makeKiaOra('Joe');

kiaOraJoe();

kiaOraRichard = makeKiaOra('Richard');
kiaOraRichard();





/*
v) [Next level bonus challenge]: Create a function that takes a Date object and returns another function. 
The function returned, when called, should output the number of seconds since the original function was called. 
Call the outer function makeSince(d) such that if I create a function var since = makeSince(new Date()), when 
I call since() it returns the number of seconds since 
I created the since variable and assigned the output of makeSince(new Date()) to it.
*/



