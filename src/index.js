module.exports = function toReadable (number) {
    if(number == 0) return 'zero';
    let arr = [
        { 
            1: 'one ',
            2: 'two ',
            3: 'three ',
            4: 'four ',
            5: 'five ',
            6: 'six ',
            7: 'seven ',
            8: 'eight ',
            9: 'nine ',
        },
        {
            10: 'ten ',
            11: 'eleven ',
            12: 'twelve ',
            13: 'thirteen ',
            14: 'fourteen ',
            15: 'fifteen ',
            16: 'sixteen ',
            17: 'seventeen ',
            18: 'eighteen ',
            19: 'nineteen ',
            2: 'twenty ',
            3: 'thirty ',
            4: 'forty ',
            5: 'fifty ',
            6: 'sixty ',
            7: 'seventy ',
            8: 'eighty ',
            9: 'ninety ',
        },
        'hundred ',
    ];
    number += '';
    let num = '';
    let res = '';
    for(let i = 0; i < number.length; i++) {
        num = number[i] + num;
    };
	console.log(num);
    for(let i = 0; i < number.length; i++) {
        if(num[i] == '0') continue;  
        if(i == 1 && num[i] == '1') {
            res = arr[i][ num[i] + num[i - 1] ];
            continue;
        };
        if(i == 2){
			res = arr[0][num[i]] + arr[i] + res;
			break;
		};
        res = arr[i][num[i]] + res;
    };
    res = res.slice(0, (res.length - 1) );
    return res;
}
