// Manipulasi Array

// 1. Menambah isi array
// var arr = ["a", 1, true];
// console.log(arr);

// 2. Menghapuskan isi array
// var arr = ["sabda", "cania", "wilona"]
// arr[1] = undefined;
// console.log(arr);

// // 3. Menampilkan isi array
// var arr = ["sabda", "cania", "wilona"];

// for( var i = 0; i < 3; i++) {
// 	console.log('mahasiswa ke-' + i + ' : ' + arr[i]);
// }


// Method pada array
// var arr = ['sabda', 'cania', 'wilona'];
// 1. join
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('nonie');
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('nonie');
// arr.shift();
// console.log(arr.join(' - '));


// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elementBaru2, ....)
// arr.splice(1, 2, 'nonie', 'salagor');
// console.log(arr.join(' - '));


// 5. slice
// slice(awal,akhir);
// var arr = ['sabda', 'cania', 'wilona', 'nonie', 'fadhil'];
// var arr2 = arr.slice(1,4);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));


// 6. forEach
var angka = [1,2,3,4,5,6,7,8];
var nama = ['sabda', 'wilona', 'nonie']
// for( var i = 0; i < angka.length; i++ ) {
// 	console.log(angka[i]);
// }

// angka.forEach(function(e) {
// 	console.log(e);
// });
// nama.forEach(function(e, i) {
// 	console.log('Mahasiswa ke-' + (i+1) + 'adalah : ' + e);
// })


// 7. map
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e) {
// 	return e * 2;
// });
// console.log(angka2.join(' - '));


// 8. sort
// var angka = [1,20,2,5,10,3,6,8,4];
// angka.sort(function(a,b) {
// 	return a-b;
// });
// console.log(angka.join(' - '));


// 9. filter
var angka = [1,20,2,5,10,3,6,8,4];
var angka2 = angka.filter(function(x) {
	return x > 5;
});
console.log(angka2.join(' - '));
