$(function() {
       $.getJSON('menu.json', function(data) {
           $.each(data.sicakKahve, function(i, f) {
              var tblRow =
              "<tr>" +
              "<td>" + f.urunNo + "</td>" +
              "<td>" + f.urunAdi + "</td>" +
              "<td>" + f.urunFiyati + "</td>" +
              "<td><button type='button' class='btn btn-success btn-sm'>" + "&#43" + "</button></td>" +
              "</tr>"
               $(tblRow).appendTo("#sicakKahve tbody");
         });
           $.each(data.sogukKahve, function(i, f) {
              var tblRow =
              "<tr>" +
              "<td>" + f.urunNo + "</td>" +
              "<td>" + f.urunAdi + "</td>" +
              "<td>" + f.urunFiyati + "</td>" +
              "<td><button type='button' class='btn btn-success btn-sm'>" + "&#43" + "</button></td>" +
              "</tr>"
               $(tblRow).appendTo("#sogukKahve tbody");
         });
         $.each(data.cay, function(i, f) {
              var tblRow =
              "<tr>" +
              "<td>" + f.urunNo + "</td>" +
              "<td>" + f.urunAdi + "</td>" +
              "<td>" + f.urunFiyati + "</td>" +
              "<td><button type='button' class='btn btn-success btn-sm'>" + "&#43" + "</button></td>" +
              "</tr>"
               $(tblRow).appendTo("#cay tbody");
         });
         $.each(data.sogukIcecek, function(i, f) {
              var tblRow =
              "<tr>" +
              "<td>" + f.urunNo + "</td>" +
              "<td>" + f.urunAdi + "</td>" +
              "<td>" + f.urunFiyati + "</td>" +
              "<td><button type='button' class='btn btn-success btn-sm'>" + "&#43" + "</button></td>" +
              "</tr>"
               $(tblRow).appendTo("#sogukIcecek tbody");
         });
         $.each(data.mesrubat, function(i, f) {
              var tblRow =
              "<tr>" +
              "<td>" + f.urunNo + "</td>" +
              "<td>" + f.urunAdi + "</td>" +
              "<td>" + f.urunFiyati + "</td>" +
              "<td><button type='button' class='btn btn-success btn-sm'>" + "&#43" + "</button></td>" +
              "</tr>"
               $(tblRow).appendTo("#mesrubat tbody");
         });
         $.each(data.sandwich, function(i, f) {
              var tblRow =
              "<tr>" +
              "<td>" + f.urunNo + "</td>" +
              "<td>" + f.urunAdi + "</td>" +
              "<td>" + f.urunFiyati + "</td>" +
              "<td><button type='button' class='btn btn-success btn-sm'>" + "&#43" + "</button></td>" +
              "</tr>"
               $(tblRow).appendTo("#sandwich tbody");
         });
         $.each(data.tatli, function(i, f) {
              var tblRow =
              "<tr>" +
              "<td>" + f.urunNo + "</td>" +
              "<td>" + f.urunAdi + "</td>" +
              "<td>" + f.urunFiyati + "</td>" +
              "<td><button type='button' class='btn btn-success btn-sm'>" + "&#43" + "</button></td>" +
              "</tr>"
               $(tblRow).appendTo("#tatli tbody");
         });
         $.each(data.salata, function(i, f) {
              var tblRow =
              "<tr>" +
              "<td>" + f.urunNo + "</td>" +
              "<td>" + f.urunAdi + "</td>" +
              "<td>" + f.urunFiyati + "</td>" +
              "<td><button type='button' class='btn btn-success btn-sm'>" + "&#43" + "</button></td>" +
              "</tr>"
               $(tblRow).appendTo("#salata tbody");
         });
       });
    });