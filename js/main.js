$(document).ready(function(){
  console.log('Main.js reporting for duty! :)');
  $('.parallax').parallax();
  // Initialize collapse button
  $('.brand-logo').sideNav({
      menuWidth: 200, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      //onOpen: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is opened
      //onClose: function(el) { /* Do Stuff* / }, //A function to be called when sideNav is closed
    }
  );
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $('.collapsible').collapsible();
});