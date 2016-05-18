/*
Начиная в вершине треугольника (см. пример ниже) и перемещаясь вниз на смежные числа, максимальная сумма до основания составляет 23.

3
7 4
2 4 6
8 5 9 3

То есть, 3 + 7 + 4 + 9 = 23.

Найдите максимальную сумму пути от вершины до основания следующего треугольника:

75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
*/

function file_get_contents( url ) {
	var req = null;
	try { req = new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {
		try { req = new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {
			try { req = new XMLHttpRequest(); } catch(e) {}
		}
	}
	if (req == null) throw new Error('XMLHttpRequest not supported');

	req.open("GET", url, false);
	req.send(null);

	return req.responseText;
}
var file = file_get_contents('https://dl.dropboxusercontent.com/u/28873424/tasks/simple_triangle.txt');

var arr = file.split('\n');

for (var i = 0; i < arr.length; i++) {
  arr[i] = arr[i].split(' ');
  for (var j = 0 ; j < arr[i].length ; j++) {
    arr[i][j] = parseInt(arr[i][j]);
  }
}

var x = 0;
var y = 1;
var sum = arr[0][0];

for (var i=1; i<arr.length; i++){
	if (arr[i][x] > arr[i][y]){
		sum += arr[i][x];
	} else {
		sum += arr[i][y];
		x = y;
		y = y+1;
	}	
}
console.log(sum);

// максимальная сумма пути от вершины до основания треугольника = 1064
