


function cek() {

    let b = ['anak kami']
    let a = 'bi';

    if (!a) return;


    const hasil = b.find((c) => c.toLowerCase().includes(a.toLowerCase()));

    if ( a.length < 3 ){
        console.log('data min 3 karakter')
    }
    else if(hasil){
        console.log('hasil',hasil)
    }else {
        console.log('data notfound')
    }
}





const lihat = cek()




