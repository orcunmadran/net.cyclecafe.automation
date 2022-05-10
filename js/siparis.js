$(function() {
       $.getJSON('menu.json', function(data) {
            $.each(data.sicakKahve, function(i, f) {
            document.getElementById('sicakKahve').innerHTML +=
            '<button type="button" class="btn btn-secondary" onclick="ekle(\''+f.urunAdi+'\',\''+f.urunFiyati+'\')">'+f.urunAdi+'</button>';
         });
            $.each(data.sogukKahve, function(i, f) {
            document.getElementById('sogukKahve').innerHTML +=
            '<button type="button" class="btn btn-secondary" onclick="ekle(\''+f.urunAdi+'\',\''+f.urunFiyati+'\')">'+f.urunAdi+'</button>';
         });
            $.each(data.cay, function(i, f) {
            document.getElementById('cay').innerHTML +=
            '<button type="button" class="btn btn-secondary" onclick="ekle(\''+f.urunAdi+'\',\''+f.urunFiyati+'\')">'+f.urunAdi+'</button>';
         });
         $.each(data.sogukIcecek, function(i, f) {
            document.getElementById('sogukIcecek').innerHTML +=
            '<button type="button" class="btn btn-secondary" onclick="ekle(\''+f.urunAdi+'\',\''+f.urunFiyati+'\')">'+f.urunAdi+'</button>';
         });
         $.each(data.mesrubat, function(i, f) {
            document.getElementById('mesrubat').innerHTML +=
            '<button type="button" class="btn btn-secondary" onclick="ekle(\''+f.urunAdi+'\',\''+f.urunFiyati+'\')">'+f.urunAdi+'</button>';
         });
         $.each(data.sandwich, function(i, f) {
            document.getElementById('sandwich').innerHTML +=
            '<button type="button" class="btn btn-secondary" onclick="ekle(\''+f.urunAdi+'\',\''+f.urunFiyati+'\')">'+f.urunAdi+'</button>';
         });
         $.each(data.tatli, function(i, f) {
            document.getElementById('tatli').innerHTML +=
            '<button type="button" class="btn btn-secondary" onclick="ekle(\''+f.urunAdi+'\',\''+f.urunFiyati+'\')">'+f.urunAdi+'</button>';
         });
         $.each(data.salata, function(i, f) {
            document.getElementById('salata').innerHTML +=
            '<button type="button" class="btn btn-secondary" onclick="ekle(\''+f.urunAdi+'\',\''+f.urunFiyati+'\')">'+f.urunAdi+'</button>';
         });
       });
    });

toplamFiyat = 0;
function ekle(urunA,urunB){
    document.getElementById('siparis').innerHTML +=
    '<tr><td>'+urunA+'</td><td>'+urunB+'</td><td><button type="button" class="btn btn-success btn-sm">&#8722</button></td></tr>';
    toplamFiyat += parseInt(urunB);
    document.getElementById('toplamFiyat').innerHTML = toplamFiyat;
}