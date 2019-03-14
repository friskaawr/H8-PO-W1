var nama = '';
var peran = 'Tabib';

if (nama==='' && peran === ''){
	console.log("Nama dan Peran harus di isi!!!");
}
else if(nama==''){
	console.log("Nama harus diisi");
}
else if (peran===''){
	console.log("Halo " +nama+ ", Pilih peranmu untuk memulai game");
}
else if (peran==='Ksatria'){
	console.log("Halo " +nama+ ", kamu dapat menyerang dengan senjatamu");
}
else if (peran==='Tabib'){
	console.log("Selamat datang di DUnia Proxytia, " +nama)
	console.log("Halo Tabib " +nama+ ", kamu akan membantu temanmu yang terluka.");
}
else if (peran==='Penyihir'){
	console.log("Selamat datang di Dunia Proxytia, " +nama)
	console.log("Halo Penyihir " +nama+ ", kamu akan membantu temanmu yang terluka.");
}
else{
	console.log("Invalid Input");
}