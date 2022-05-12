$(function() {
       $.getJSON('menu.json', function(data) {
            $.each(data.sicakKahve, function(i, f) {
            document.getElementById('sicakKahve').innerHTML +=
            '<button type="button" class="btn btn-secondary" onclick="ekle(\''+f.urunAdi+'\',\''+f.urunFiyati+'\')">'+f.urunAdi+' ('+f.urunFiyati+'&#x20BA)</button>';
         });
            $.each(data.sogukKahve, function(i, f) {
            document.getElementById('sogukKahve').innerHTML +=
            '<button type="button" class="btn btn-secondary" onclick="ekle(\''+f.urunAdi+'\',\''+f.urunFiyati+'\')">'+f.urunAdi+' ('+f.urunFiyati+'&#x20BA)</button>';
         });
            $.each(data.cay, function(i, f) {
            document.getElementById('cay').innerHTML +=
            '<button type="button" class="btn btn-secondary" onclick="ekle(\''+f.urunAdi+'\',\''+f.urunFiyati+'\')">'+f.urunAdi+' ('+f.urunFiyati+'&#x20BA)</button>';
         });
         $.each(data.sogukIcecek, function(i, f) {
            document.getElementById('sogukIcecek').innerHTML +=
            '<button type="button" class="btn btn-secondary" onclick="ekle(\''+f.urunAdi+'\',\''+f.urunFiyati+'\')">'+f.urunAdi+' ('+f.urunFiyati+'&#x20BA)</button>';
         });
         $.each(data.mesrubat, function(i, f) {
            document.getElementById('mesrubat').innerHTML +=
            '<button type="button" class="btn btn-secondary" onclick="ekle(\''+f.urunAdi+'\',\''+f.urunFiyati+'\')">'+f.urunAdi+' ('+f.urunFiyati+'&#x20BA)</button>';
         });
         $.each(data.sandwich, function(i, f) {
            document.getElementById('sandwich').innerHTML +=
            '<button type="button" class="btn btn-secondary" onclick="ekle(\''+f.urunAdi+'\',\''+f.urunFiyati+'\')">'+f.urunAdi+' ('+f.urunFiyati+'&#x20BA)</button>';
         });
         $.each(data.tatli, function(i, f) {
            document.getElementById('tatli').innerHTML +=
            '<button type="button" class="btn btn-secondary" onclick="ekle(\''+f.urunAdi+'\',\''+f.urunFiyati+'\')">'+f.urunAdi+' ('+f.urunFiyati+'&#x20BA)</button>';
         });
         $.each(data.salata, function(i, f) {
            document.getElementById('salata').innerHTML +=
            '<button type="button" class="btn btn-secondary" onclick="ekle(\''+f.urunAdi+'\',\''+f.urunFiyati+'\')">'+f.urunAdi+' ('+f.urunFiyati+'&#x20BA)</button>';
         });
       });
    });

toplamFiyat = 0;
urunListe = [[]];

function guncelle(urunListe){
    siparis = "";
    toplamFiyat = 0;
    for(i=1; i<urunListe.length; i++){
        siparis += '<tr><td>'+urunListe[i][0]+'</td><td>'+urunListe[i][1]+'</td><td><button type="button" class="btn btn-success btn-sm" onclick="sil(\''+i+'\')">&#8722</button></td></tr>';
        toplamFiyat += parseInt(urunListe[i][1]);
    }
    document.getElementById('siparis').innerHTML = siparis;
    document.getElementById('toplamFiyat').innerHTML = toplamFiyat;
}

function ekle(urunA,urunB){
    urunListe.push([urunA,urunB]);
    guncelle(urunListe);
}

function sil(urunNo){
    urunListe.splice(urunNo, 1);
    guncelle(urunListe);
}