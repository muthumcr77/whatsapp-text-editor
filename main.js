$(function(){
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  $(tooltipList).tooltip("show");
});

const copyToClipboard = () => {
  var txt = document.getElementById("myText").value;
  navigator.clipboard.writeText(txt).then(() => {
    alert("Copied to clipboard!");
  });
}

