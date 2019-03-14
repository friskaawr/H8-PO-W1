//  Let's Form a Sentence

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh)

// access 1 by 1

var w = 'wow JavaScript is so cool';
var firstw = w[0] + w[1] + w[2];
var secondw = w[4]+w[5]+w[6]+w[7]+w[8]+w[9]+w[10]+w[11]+w[12]+w[13];
var thirdw = w[15]+w[16];
var fourthw = w[18]+w[19];
var fifthw = w[21]+w[22]+w[23]+w[24];

console.log("first word = " + firstw);
console.log("second word = " + secondw);
console.log("third word = " + thirdw);
console.log("fourth word = " + fourthw);
console.log("fifth word = " + fifthw);

// breaking sentence 

var w = 'wow JavaScript is so cool';
var firstw = w.substring(0,3);
var secondw = w.substring(4, 14);
var thirdw = w.substring(15, 17);
var fourthw = w.substring(18, 20);
var fifthw = w.substring(21, 25);

console.log("first word = " + firstw);
console.log("second word = " + secondw);
console.log("third word = " + thirdw);
console.log("fourth word = " + fourthw);
console.log("fifth word = " + fifthw);

// Breaking Sentence (yet Again) and Count Each Length

var w = 'wow JavaScript is so cool';
var firstw = w.substring(0,3);
var secondw = w.substring(4, 14);
var thirdw = w.substring(15, 17);
var fourthw = w.substring(18, 20);
var fifthw = w.substring(21, 25);

var firstwlength = firstw.length;
var secondwlength = secondw.length;
var thirdwlength = thirdw.length;
var fourthwlength = fourthw.length;
var fifthwlength = fifthw.length;

console.log("first word = " + firstw + " word length : " +firstwlength);
console.log("second word = " + secondw + " word length : " +secondwlength);
console.log("third word = " + thirdw + " word length : " +thirdwlength);
console.log("fourth word = " + fourthw + " word length : " +fourthwlength);
console.log("fifth word = " + fifthw + " word length : " +fifthwlength);