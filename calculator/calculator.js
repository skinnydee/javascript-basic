function display()
{
	let value = document.getElementById('num1').innerText;
	let result = document.getElementById('result');
	result.value = value;
}

let button = document.getElementById('num2');

button.addEventListener('click',function()
	{
		let result = document.getElementById('result');
		result.value = button.value
	}
)
