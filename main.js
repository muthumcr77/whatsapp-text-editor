// Selected text global scope
let fullText = "";
let selText = "";

// JQuery 
$(function(){
  // Initialize tooltips
  const tooltipTriggerList = $('[data-bs-toggle="tooltip"]')
  tooltipTriggerList.each(function(){
    new bootstrap.Tooltip(this);
  })

  $("textarea").focus(function(){
    fullText = $("#myText").val();
    console.log(fullText);
  });

  // Format type selected
  $(".ftBtn").click(function(){
    var myId = $(this).attr("id");
    console.log("My ID: " + myId);
    switch (myId) {
      case "i-Btn":
        $("#myText").val(`_${selText}_`);
        break;
      case "b-Btn":
        $("#myText").val(`*${selText}*`);
        break;
      case "s-Btn":
        $("#myText").val(`~${selText}~`);
        break;
      case "m-Btn":
        $("#myText").val(`\`\`\`${selText}\`\`\``);
        break;
    }
  });
});


// Copy formatted message to clipboard
const copyToClipboard = () => {
  var txt = document.getElementById("myText").value;
  if (txt == "")
    alert('Your message is empty!');
  else
    navigator.clipboard.writeText(txt).then(() => {
      alert("Copied to clipboard!");
    });
}

// Get selected text from document
const getSelectionText = () => {
  var text = "";
  var activeEl = document.activeElement;
  var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
  if (
    (activeElTagName == "textarea") || (activeElTagName == "input" &&
    /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
    (typeof activeEl.selectionStart == "number")
  ) {
      text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
  } else if (window.getSelection) {
      text = window.getSelection().toString();
  }
  return text;
}

// Assign selected text upon event trigger
document.onmouseup /*= document.onkeyup = document.onselectionchange*/ = function() {
  selText = getSelectionText();
  console.log("Checking selected text: " + selText);
};

