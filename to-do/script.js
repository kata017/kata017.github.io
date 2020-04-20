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
    var todo = $("#add_text").val();

    if (todo.length > 0)
    {
        listLength = listLength + 1;
        var line = `<li><input type="checkbox" id="todo_${listLength}" /><label for="todo_${listLength}"><span class="check"></span>${todo}</label><img class="delete_button" src="delete.svg" alt="Delete"></li>`;

        $(".todos").append(line);
        $('#add_text').val("");
    }
    else
    {
        const popup = document.querySelector('.js_error-popup');
        popup.classList.toggle('popup--visible');
    }
});

$(".button").click(function()
{
    const popup = document.querySelector('.js_error-popup');
    popup.classList.toggle('popup--visible');
});

$(document).on('click', ".delete_button", function() 
{
    var target = event.target;
    var parent = target.parentElement;

    $(parent).remove();      
});