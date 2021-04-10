console.log('JS Ok');
console.log('JQ', $);

$(document).ready(function(){

// Dropdown Menu

// Refs

var dropDown = $('.with-dropdown');

var dropLink = dropDown.find('a');

var dropMenu = dropDown.children('.dropdown-menu');

var dropWindow= dropDown.children('.show');

// Click per sottomenù associato


dropLink.click(function(){
    
    console.log($(this));

    // Metodo a

    // $(this).next().toggle();

    // Metodo b

    var actualMenu = $(this).next();

    dropMenu.not(actualMenu).hide();
    dropWindow.not(actualMenu).hide();
    actualMenu.toggle();
})










    // End Doc Ready
})




/**************************
 * 
 * UTILITIES / FUNCTIONS
 * 
 **************************/