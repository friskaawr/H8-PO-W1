var tanggal = 23;
var bulan = 6;
var tahun = 1996;
var tampil_bulan='';

console.log("Tanggal lahir saya adalah: ")

switch(bulan){
	case 1:
	tampil_bulan = 'Januari';
	break;

	case 2:
	tampil_bulan = 'Februari';
	break;

	case 3:
	tampil_bulan = 'Maret';
	break;

	case 4:
	tampil_bulan = 'April';
	break;

	case 5:
	tampil_bulan = 'Mei';
	break;

	case 6:
	tampil_bulan = 'Juni';
	break;

	case 7:
	tampil_bulan = 'Juli';
	break;

	case 8:
	tampil_bulan = 'Agustus';
	break;

	case 9:
	tampil_bulan = 'September';
	break;

	case 10:
	tampil_bulan = 'Oktiber';
	break;

	case 11:
	tampil_bulan = 'November';
	break;

	case 12:
	tampil_bulan = 'Desember';
	break;
}

console.log(tanggal+" "+tampil_bulan+ " "+tahun);