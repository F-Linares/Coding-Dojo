/*
Get 1 to 255
*/
function get_array() {
    var arr = []; 

    for(var i=1; i<256; i++){
        arr.push(i);
    }
    return arr; 
}
/*
Get even 1000
*/
function sum_even_numbers(){
    var sum = 0;
    
    var i=1;
    while(i<=1000){
        if(i%2===0){
            sum = sum+i;
        }
        i++;
    }
    return sum; 
}
/*
Sum odd 5000
*/
function sum_odd_5000() {
    var sum = 0;
    //your code here 
    var i=1
    while(i<=5000){
        if(i%2===1){
            sum = sum+i;
        }
        i++;
    }
    return sum; 
}
/*
Iterate an array
*/
function iterArr(arr) {
    
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
/*
Find max

*/
function findMax(arr) {
     
    var max = Math.max.apply(null, arr);
    return max; 
    /*or for loop
    var max = arr[0];
    for(var i=1;i<arr.length;i++){
        if (max < arr[i]){
            max = arr[i];
        }
    }
    return max;
    */
}

/*
Find average
*/
function findAvg(arr) {
     
    var avg;
    var sum=0;
    arr.forEach(function(elem){
        sum += elem;
    });
    avg = sum/arr.length;
    return avg; 
}

/*
Array odd
*/
function oddNumbers() {
    var arr = [];
    
    var i=1;
    while(i<=50){
        if(i%2===1){
            arr.push(i);
        }
        i++;
    }
    return arr; 
}
/*
Greater than Y
*/
function greaterY(arr, Y) {
    //your code here 
    var count=0;
    arr.forEach(function(elem){
        if (elem>Y){
            count++;
        }
    });
    return count; 
}
/*
Squares
*/
//forEach
function squareVal(arr) {
    
    arr.forEach(function(elem,i, arr){
        arr[i] = elem*elem;
    });
    return arr; 
}
//map
function squareVal1(arr) {
    
   var arr1 = arr.map(function(val){
        return val*val;
    });
    return arr1; 
}
/*
Negatives
*/
function noNeg(arr) {
    
    var noneg = arr.map(function(elem){
        if (elem<0){
            elem = 0;
        }
        return elem;
    });
    return noneg; 
}
/*
Max/Min/Avg
*/
function maxMinAvg(arr) {
    
    var arrnew=[];
    var sum = 0;
    arr.forEach(function(elem){
        sum += elem;
    });
    arrnew.push(Math.max.apply(null,arr));
    arrnew.push(Math.min.apply(null,arr));
    arrnew.push(sum/arr.length);
    return arrnew; 
}
maxMinAvg([1,2,8]);
/*
Swap values
*/
function swap(arr) {
     
    var arrnew = arr.slice();
    var temp = arrnew[0];
    arrnew[0] = arrnew[arrnew.length-1];
    arrnew[arrnew.length-1] = temp;
    return arrnew; 
}


function numToStr(arr){
	arr = arr.map(function(elem){
		if (elem<0){
			return 'Dojo';
		} else {
			return elem;
		}
	});
	return arr;
}