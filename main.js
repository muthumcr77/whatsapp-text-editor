// $(function(){
//   alert("Hello World!");
//   $("#copyButton").click(function(){
//     $(this).hide();
//     alert("Bye!");
//   })
// });
$(function(){
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  $(tooltipList).tooltip();
});