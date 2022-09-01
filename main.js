// Selected text global scope
let fullText = "";
let selText = "";
let oldString = "";
let newString = "";
let editedString = ""; 
let formattedString = "";


// JQuery 
$(function(){
  // Initialize clipboard target
  var clipboard = new ClipboardJS('#copyButton', {
    container: document.getElementById("myText")
  });    
  
  clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    
    e.clearSelection();
  });      
  
  clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });      
  
  // Initialize tooltips
  const tooltipTriggerList = $('[data-bs-toggle="tooltip"]')
  tooltipTriggerList.each(function(){
    new bootstrap.Tooltip(this);
  })  
  
  // Get fullText on input
  $("#myText").on("input", function(){
    fullText = $(this).val();
    console.log("Full Text: " + fullText);
  });  

  
  // Get selText on mouseout
  $("#myText").on("mouseout", function(){
    selText = window.getSelection().toString();
    console.log("Selected Text: " + selText);
    // Trim selected text if any spaces
    oldString = selText.trim();
    console.log("Old string: " + oldString);
    newString = fullText.replace(oldString, "");
    console.log("New string: " + newString);
  });  
  

  // Format type selected
  $(".ftBtn").click(function(){
    var myId = $(this).attr("id");
    console.log("My ID: " + myId);
    switch (myId) {
      case "i-Btn":
        editedString = `_${selText}_`;
        break;
      case "b-Btn":
        editedString = `*${selText}*`;
        break;
      case "s-Btn":
        editedString = `~${selText}~`;
        break;
      case "m-Btn":
        editedString = `\`\`\`${selText}\`\`\``;
        break;
    }
    console.log("Edited string: " + editedString);
    formattedString = newString.concat(editedString);
    console.log("Formatted string: " + formattedString);
    // Change element's value to formattedString
    $("#myText").val(formattedString);
  });
});


