function display()
{
	let value = document.getElementById('num1').innerText;
	let result = document.getElementById('result');
	result.value = value;
}

let button = document.getElementById('add');

button.addEventListener('click',display())

function display()
{
    result = document.getElementById('result');
    result.value = button.innerText;
}

