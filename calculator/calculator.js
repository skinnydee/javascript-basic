function display()
{
	let value = document.getElementById('num1').innerText;
	let result = document.getElementById('result');
	result.value = value;
}

let button = document.getElementsByClassName('num');


for (var i = 0; i < button.length; i++)
{

    button[i].addEventListener('click',function()
	{
	    let result = button[i];
	    let result = button[i].innerHTML;
	    console.log(result);
	}
    )
}

