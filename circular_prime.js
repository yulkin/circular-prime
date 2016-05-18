/*
Число 197 называется circular prime, потому циклический сдвиг числа дает также простое число: 197, 971 и 719. 
Есть 13 таких чисел в диапазоне до 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79 и 97. 
Сколько таких чисел до 1 миллиона?
*/

var arr = [];

nextPrime:
for (var i = 2; i < 1000000; i++) {
	for (var j = 2; j < i; j++) {
		if (i % j == 0) continue nextPrime;		
	}
	var numb = i.toString();
	var arrNumb = numb.split('');

	for (var k=0; k<arrNumb.length-1; k++) {
		arrNumb.push(arrNumb[0]);
		arrNumb.shift();
		numb = arrNumb.join('');
		
		for (var s=2; s*s<=numb; s++){
			if (numb % s == 0) continue nextPrime;
		}
	}
	arr.push(numb);
}
console.log (arr.length); 

//до миллиона 55 таких чисел
