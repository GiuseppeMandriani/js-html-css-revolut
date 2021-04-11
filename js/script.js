console.log('JS Ok');
console.log('JQ', $);

$(document).ready(function(){

// Dropdown Menu

// Refs

var dropDown = $('.with-dropdown');

var dropLink = dropDown.find('a');

var dropMenu = dropDown.children('.dropdown-menu');

var dropWindow = dropDown.find('.drop-show');


// Click per sottomenù associato


dropLink.click(function(){
    
//      console.log($(this));

//      // Metodo a

//      // $(this).next().toggle();

//      // Metodo b Utilizzare sempre questo

     var actualMenu = $(this).next();

     // Reset
     dropMenu.not(actualMenu).hide();
     dropWindow.not(actualMenu).hide();
     actualMenu.toggle();



})

// // Hover per sottomenù mouseenter/mouseleave


// dropDown.hover(function(){
//     $(this).children('.dropdown-menu').toggle();
//     $(this).children('.drop-show').toggle();


// })










    // End Doc Ready
})




/**************************
 * 
 * UTILITIES / FUNCTIONS
 * 
 **************************/