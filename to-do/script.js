const list = document.querySelectorAll('.todos li');

let listLength = list.length;
var refreshRate = 30000;

setInterval(function() 
{
    $('.cover-img').hide();
    $('.cover-img').css({'background' : 'url("https://source.unsplash.com/320x190/?todo,note")'}).fadeIn(1000);
}, refreshRate);

$("#add_button").click(function()
{
    listLength = listLength + 1;

    var todo = $("#add_text").val();
    var line = `<li><input type="checkbox" id="todo_${listLength}" /><label for="todo_${listLength}"><span class="check"></span>${todo}</label></li>`;
    
    $(".todos").append(line);
    $('#add_text').val(""); 
});