// Perulangan 1-100

var angka = 1;
console.log("Perulangan 1-100")
while(angka<=100){

    if(angka%2===0){
        console.log(angka + " ini adalah angka genap");
    }
    else{
        console.log(angka + " ini adalah angka ganjil");
    }
    angka++;
}
 // perulangan 1-100 kelipatan 3
 console.log('\nbilangan kelipatan 3 pertambahan 2 : ');
 for (i=1; i<=100; i+=2){
     if(i%3===0){
         console.log(i);
     }
 }

 console.log('\nbilangan kelipatan 6 pertambahan 5 : '); 
 for(x=1; x<=100; x+=5){
    if(x%6===0){
         console.log(x);
     }
    }

console.log('\nbilangan kelipatan 10 pertambahan 9 : ');
for(y=1; y<=100; y+=9){
    if(y%10===0){
        console.log(y);
    }
}



