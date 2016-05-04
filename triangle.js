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