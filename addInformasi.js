var output = $("#output:visible");
var navBarHeight = $('.right-nav').height();

var isInformasiPembayaran = 0; // informasiPembayaran not exist
var isInformasiPemesanan = 0; // informasiPemesanan not exist
var isRincianPembayaran= 0; // rincianPembayaran not exist
var isInformasiPengiriman = 0; //informasiPengiriman not exist


$(document).ready(function() {
	output.load("email.html");	
});

$(window).on('load', function() {
	var x= output.clone();
});

// $("#Generator").on('click',function() {
// 	 $('html, body').animate({
// 	 	scrollTop: $(".right-menu").offset().top - navBarHeight
// 	 }, 500);
// });


function setActive(id){
	id.css('font-weight',700);
}
function setNotActive(id){
	id.css('font-weight',400);
}

$('#informasiPembayaranButt').on('click',function() {
	if(isInformasiPembayaran) {
		removeInformasiPembayaran();
		setNotActive($(this));
	} else {
		addInformasiPembayaran();
		setActive($(this));
	}
});

$('#informasiPemesananButt').on('click',function() {
	if(isInformasiPemesanan) {
		removeInformasiPemesanan();
		setNotActive($(this));
	} else {
		addInformasiPemesanan();
		setActive($(this));
	}
});

$('#rincianPembayaranButt').on('click',function() {
	if(isRincianPembayaran) {
		removeRincianPembayaran();
		setNotActive($(this));
	} else {
		addRincianPembayaran();
		setActive($(this));
	}
});

$('#informasiPengirimanButt').on('click',function() {
	if(isInformasiPengiriman) {
		removeinformasiPengiriman();
		setNotActive($(this));
	} else {
		addinformasiPengiriman();
		setActive($(this));
	}
});

/* informasi pembayaran */
function addInformasiPembayaran() {
	$("#output table table table tr:eq(3)").after(informasiPembayaran);
	isInformasiPembayaran = 1;
}

function removeInformasiPembayaran() {
	$(".informasiPembayaran").remove();
	isInformasiPembayaran = 0;
}
/* end informasi pembayaran */ 

/* informasi pemesanan */
function addInformasiPemesanan() {
	$("#output table table table tr:eq(5)").after(informasiPemesanan);
	isInformasiPemesanan = 1;
}

function removeInformasiPemesanan() {
	$(".informasiPemesanan").remove();
	isInformasiPemesanan = 0;
} 

/* end of informasi pemesanan */

/* rincian pembayaran */
function addRincianPembayaran() {
	$(".informasiPemesanan").last().after(rincianPembayaran);
	isRincianPembayaran = 1;
}

function removeRincianPembayaran() {
	$(".rincianPembayaran").remove();
	isRincianPembayaran = 0;
}
/* end of rincian pembayaran */

/* informasi Pengiriman */
function addinformasiPengiriman() {
	$(".rincianPembayaran").last().after(informasiPengiriman);
	isRincianPembayaran = 1;
}

function removeinformasiPengiriman() {
	$(".addRincianPembayaran").remove();
	isRincianPembayaran = 0;
}
/* end of Informasi Pengiriman */

var informasiPembayaran = '<tr class="informasiPembayaran">'+
'                           <td style="padding:0 0 8px 0; margin:0; font-size:15px; color:#010101; font-weight:bold;">'+
'                              Informasi Pembayaran'+
'                           </td>'+
'                        </tr>'+
''+
'                        <tr class="informasiPembayaran">'+
'                           <td style="padding:0 0 40px 0; margin:0; border-top:1px solid #333;">'+
'                              <table width="100%" style="padding:0; margin:0; font:12px verdana; line-height:16px;" cellpadding="0" cellspacing="0" border="0">'+
'                                 <tbody style="padding:0; margin:0; ">'+
'                                    <tr>'+
'                                       <th width="162" bgcolor="#f9f9f9" style="padding:15px 5px 13px 20px; color:#404040; font-weight:normal; text-align:left; " >Cara Pembayaran</th>'+
'                                       <td width="162" bgcolor="#ffffff" style="padding:15px 10px 13px 10px; color:#606060; font-family:Tahoma; text-align:left;  ">{:FIELD4:}</td>'+
'                                       <th width="162" bgcolor="#f9f9f9" style="padding:15px 5px 13px 20px; color:#404040; font-weight:normal; text-align:left; " >Batas Waktu<br />Penerimaan</th>'+
'                                       <td width="162" bgcolor="#ffffff" style="padding:15px 10px 13px 10px; color:#606060; font-family:Tahoma; text-align:left;  ">{:FIELD5:}</td>'+
'                                    </tr>'+
'                                    <tr>'+
'                                       <td colspan="4" bgcolor="#e5e5e5" height="1"></td>'+
'                                    </tr>'+
'                                    <tr>'+
'                                       <th width="162" bgcolor="#f9f9f9" style="padding:15px 5px 13px 20px; color:#404040; font-weight:normal; text-align:left; " >Bank Penerima</th>'+
'                                       <td width="162" bgcolor="#ffffff" style="padding:15px 10px 13px 10px; color:#606060; text-align:left;  ">{:FIELD6:}</td>'+
'                                       <th width="162" bgcolor="#f9f9f9" style="padding:15px 5px 13px 20px; color:#404040; font-weight:normal; text-align:left; " >Jumlah Pembayaran</th>'+
'                                       <td width="162" bgcolor="#ffffff" style="padding:15px 10px 13px 10px; line-height:16px; font:12px; color:#ee2b2e; text-align:left; font-weight:bold;">Rp {:FIELD7:}</td>'+
'                                    </tr>'+
'                                    <tr>'+
'                                       <td colspan="4" bgcolor="#e5e5e5" height="1"></td>'+
'                                    </tr>'+
'                                    <tr>'+
'                                       <th width="162" bgcolor="#f9f9f9" style="padding:15px 5px 13px 20px; color:#404040; font-weight:normal; text-align:left; " >Nomor Virtual Account</th>'+
'                                       <td width="162" bgcolor="#ffffff" style="padding:15px 10px 13px 10px; color:#606060; text-align:left;  ">{:FIELD9:}</td>'+
'                                    </tr>'+
'                                    <tr>'+
'                                       <td colspan="4" bgcolor="#e5e5e5" height="1"></td>'+
'                                    </tr>'+
'                                 </tbody>'+
'                              </table>'+
'                           </td>'+
'                        </tr>';

var informasiPemesanan = '<tr class="informasiPemesanan">'+
'                           <td style="padding:0 0 8px 0; margin:0; font:15px verdana; color:#010101; font-weight:bold;">'+
'                              Informasi Pemesanan'+
'                              <span style="font-size:11px; font-weight:normal;margin-left:10px;">Tanggal Pesanan :  {:FIELD10:},  Nomor Pesanan : {:FIELD11:}</span>'+
'                           </td>'+
'                        </tr>'+
''+
'                        <tr class="informasiPemesanan">'+
'                           <td style="padding:0 0 40px 0; margin:0; border-top:1px solid #333;">'+
'                              <table width="100%" style="padding:0; margin:0; font:12px Verdana;" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff">'+
'                                 <thead style="padding:0; margin:0;">'+
'                                    <th width="66" bgcolor="#f9f9f9" style="padding:15px 0 13px 0; color:#404040; font-weight:normal; text-align:center; border-right:1px solid #e5e5e5;">'+
'                                       Nomor'+
'                                    </th>'+
'                                    <th width="*" bgcolor="#f9f9f9" style="padding:15px 0 13px 0; color:#404040; font-weight:normal; text-align:center; border-right:1px solid #e5e5e5;">'+
'                                       Nama Produk (Nama Pilihan)'+
'                                    </th>'+
'                                    <th width="122" bgcolor="#f9f9f9" style="padding:15px 0 13px 0; color:#404040; font-weight:normal; text-align:center; border-right:1px solid #e5e5e5;">'+
'                                       Harga Produk<br />(Kuantitas)'+
'                                    </th>'+
'                                    <th width="100" bgcolor="#f9f9f9" style="padding:15px 0 13px 0; color:#404040; font-weight:normal; text-align:center; border-right:1px solid #e5e5e5;">'+
'                                       Informasi<br />Pengiriman'+
'                                    </th>'+
'                                    <th width="90" bgcolor="#f9f9f9" style="padding:15px 0 13px 0; color:#404040; font-weight:normal; text-align:center;">'+
'                                       Penjual'+
'                                    </th>'+
'                                 </thead>                                   '+
'                                 <tbody style="padding:0; margin:0;">'+
'                                    <MROWS:1>'+
'                                    <MROWSPANHEAD>'+
''+
'                                       <TR>'+
'                                          <td style="border-right:1px solid #e5e5e5; text-align:center;">{:COLUMN1:}</td>'+
'                                          <td style="padding:15px 10px 13px 10px; color:#606060; font-weight:normal; text-align:left; border-right:1px solid #e5e5e5; ">{:COLUMN2:}'+
'                                             <p style="padding:0; margin:0; color:#b45d41; font-size:11px;">{:COLUMN3:}</p>'+
'                                          </td>											'+
'                                          <td style="padding:15px 0 13px 0; color:#606060; font-weight:normal; text-align:center; font-family:Tahoma; border-right:1px solid #e5e5e5;">Rp {:COLUMN4:}<br />({:COLUMN5:})</td>'+
''+
'                                          <td rowSpan={:SPANCNT:} style="padding:15px 0 13px 0; color:#606060; font-weight:normal; text-align:center; font-family:Tahoma; border-right:1px solid #e5e5e5;">{:COLUMN6:}<br />{:COLUMN7:}</td>											'+
''+
'                                          <td rowSpan={:SPANCNT:} style="padding:15px 0 13px 0; color:#606060; font-weight:normal; text-align:center;  ">{:COLUMN8:}</td>'+
'                                       </TR>'+
''+
'                                    </MROWSPANHEAD>'+
''+
'                                    <MROWSPANCHILD>'+
'                                       <TR>'+
'                                          <td style="border-right:1px solid #e5e5e5; text-align:center;">{:COLUMN1:}</td>'+
'                                          <td style="padding:15px 10px 13px 10px; color:#606060; font-weight:normal; text-align:left; border-right:1px solid #e5e5e5; ">{:COLUMN2:}'+
''+
'                                          </td>											'+
'                                          <td style="padding:15px 0 13px 0; color:#606060; font-weight:normal; text-align:center; font-family:Tahoma; border-right:1px solid #e5e5e5;">Rp {:COLUMN4:}<br />({:COLUMN5:})</td>'+
'                                          <td style="border-right:1px solid #e5e5e5; text-align:center;"></td>'+
'                                          <td style="border-right:1px solid #e5e5e5; text-align:center;"></td>'+
''+
'                                       </TR>'+
'                                    </MROWSPANCHILD>'+
''+
'                                    <MROWNORMROW>'+
'                                       <TR>'+
'                                          <td style="border-right:1px solid #e5e5e5; text-align:center;">{:COLUMN1:}</td>'+
'                                          <td style="padding:15px 10px 13px 10px; color:#606060; font-weight:normal; text-align:left; border-right:1px solid #e5e5e5; ">{:COLUMN2:}'+
'                                             <p style="padding:0; margin:0; color:#b45d41; font-size:11px;">{:COLUMN3:}</p>'+
'                                          </td>											'+
'                                          <td style="padding:15px 0 13px 0; color:#606060; font-weight:normal; text-align:center; font-family:Tahoma; border-right:1px solid #e5e5e5;">Rp {:COLUMN4:}<br />({:COLUMN5:})</td>'+
'                                          <td style="padding:15px 0 13px 0; color:#606060; font-weight:normal; text-align:center; font-family:Tahoma; border-right:1px solid #e5e5e5;">{:COLUMN6:}<br />{:COLUMN7:}</td>											'+
'                                          <td style="padding:15px 0 13px 0; color:#606060; font-weight:normal; text-align:center;  ">{:COLUMN8:}</td>'+
''+
'                                       </TR>'+
'                                    </MROWNORMROW>                                            '+
''+
''+
'                                 </MROWS:1>'+
'                              </tbody>'+
'                           </table>'+
'                        </td>'+
'                     </tr>';
	


var rincianPembayaran = '<tr class="rincianPembayaran">'+
'                        <td style="padding:0 0 8px 0; margin:0; font:15px verdana; color:#010101; font-weight:bold;">'+
'                           Rincian Pembayaran'+
'                        </td>'+
'                     </tr>'+
'                     <tr class="rincianPembayaran">'+
'                        <td style="padding:0 0 40px 0; margin:0; border-top:1px solid #333;">'+
'                           <table width="100%" style="padding:0; margin:0; font:12px verdana; line-height:16px;" cellpadding="0" cellspacing="0" border="0">'+
'                              <tbody style="padding:0; margin:0; ">'+
'                                 <tr>'+
'                                    <th width="162" bgcolor="#f9f9f9" style="padding:15px 5px 13px 20px; color:#404040; font-weight:normal; text-align:left; " >Total Jumlah Pesanan</th>'+
'                                    <td width="*" bgcolor="#ffffff" style="padding:15px 10px 13px 10px; color:#606060; font-family:Tahoma; text-align:left;  "><span style="color:#010101">Rp {:FIELD12:}</span></td>'+
'                                 </tr>'+
'                                 <tr>'+
'                                    <td colspan="2" bgcolor="#e5e5e5" height="1"></td>'+
'                                 </tr>'+
'                                 <tr>'+
'                                    <th width="162" bgcolor="#f9f9f9" style="padding:15px 5px 13px 20px; color:#404040; font-weight:normal; text-align:left; " >Jumlah Diskon</th>'+
'                                    <td width="*" bgcolor="#ffffff" style="padding:15px 10px 13px 10px; color:#606060; font-family:Tahoma; text-align:left;  "><span style="color:#010101">- Rp {:FIELD13:}</span></td>'+
'                                 </tr>'+
'                                 <tr>'+
'                                    <td colspan="2" bgcolor="#e5e5e5" height="1"></td>'+
'                                 </tr>'+
'                                 <tr>'+
'                                    <th width="162" bgcolor="#f9f9f9" style="padding:15px 5px 13px 20px; color:#404040; font-weight:normal; text-align:left; " > Jumlah Poin Terpakai</th>'+
'                                    <td width="*" bgcolor="#ffffff" style="padding:15px 10px 13px 10px; color:#606060; font-family:Tahoma; text-align:left;  "><span style="color:#010101">Rp {:FIELD14:}</span></td>'+
''+
'                                 </tr>'+
'                                 <tr>'+
'                                    <td colspan="2" bgcolor="#e5e5e5" height="1"></td>'+
'                                 </tr>'+
'                                 <tr>'+
'                                 </tr>'+
'                                 <th width="162" bgcolor="#f9f9f9" style="padding:15px 5px 13px 20px; color:#404040; font-weight:normal; text-align:left; " >Jumlah Pembayaran<br />Terakhir</th>'+
'                                 <td width="*" bgcolor="#ffffff" style="padding:15px 10px 13px 10px; color:#606060; font-family:Tahoma; text-align:left;  "><strong style="color:#ee2b2e;padding-right:10px">Rp {:FIELD15:}</strong></td>'+
''+
'                                 <tr>'+
'                                    <td colspan="2" bgcolor="#e5e5e5" height="1"></td>'+
'                                 </tr>'+
''+
'                              </tbody>'+
'                           </table>'+
'                        </td>'+
'                     </tr>';


var informasiPengiriman = '<tr class="informasiPengiriman">'+
'                        <td style="padding:0 0 8px 0; margin:0; font:15px verdana; color:#010101; font-weight:bold;">'+
'                           Informasi Pengiriman'+
'                        </td>'+
'                     </tr>'+
'                     <tr class="informasiPengiriman">'+
'                        <td style="padding:0 0 40px 0; margin:0; border-top:1px solid #333;">'+
'                           <table width="100%" style="padding:0; margin:0; font:12px verdana; line-height:16px;" cellpadding="0" cellspacing="0" border="0">'+
'                              <tbody style="padding:0; margin:0; ">'+
'                                 <tr>'+
'                                    <th width="162" bgcolor="#f9f9f9" style="padding:15px 5px 13px 20px; color:#404040; font-weight:normal; text-align:left; " >Nama Penerima</th>'+
'                                    <td width="*" bgcolor="#ffffff" style="padding:15px 10px 13px 10px; color:#606060; font-family:Tahoma; text-align:left;  ">{:FIELD16:}</td>'+
'                                 </tr>'+
'                                 <tr>'+
'                                    <td colspan="2" bgcolor="#e5e5e5" height="1"></td>'+
'                                 </tr>'+
'                                 <tr>'+
'                                    <th width="162" bgcolor="#f9f9f9" style="padding:15px 5px 13px 20px; color:#404040; font-weight:normal; text-align:left; " >Alamat Penerima</th>'+
'                                    <td width="*" bgcolor="#ffffff" style="padding:15px 10px 13px 10px; color:#606060; font-family:Tahoma; text-align:left;  ">{:FIELD17:}</td>'+
'                                 </tr>'+
'                                 <tr>'+
'                                    <td colspan="2" bgcolor="#e5e5e5" height="1"></td>'+
'                                 </tr>'+
'                                 <tr>'+
'                                    <th width="162" bgcolor="#f9f9f9" style="padding:15px 5px 13px 20px; color:#404040; font-weight:normal; text-align:left; " >Nomor Telepon Penerima</th>'+
'                                    <td width="*" bgcolor="#ffffff" style="padding:15px 10px 13px 10px; color:#606060; font-family:Tahoma; text-align:left;  ">{:FIELD18:}</td>'+
'                                 </tr>'+
'                                 <tr>'+
'                                    <td colspan="2" bgcolor="#e5e5e5" height="1"></td>'+
'                                 </tr>'+
'                                 <tr>'+
'                                    <th width="162" bgcolor="#f9f9f9" style="padding:15px 5px 13px 20px; color:#404040; font-weight:normal; text-align:left; " >Email Penerima</th>'+
'                                    <td width="*" bgcolor="#ffffff" style="padding:15px 10px 13px 10px; color:#606060; font-family:Tahoma; text-align:left;  ">{:FIELD19:}</td>'+
'                                 </tr>'+
'                                 <tr>'+
'                                    <td colspan="2" bgcolor="#e5e5e5" height="1"></td>'+
'                                 </tr>'+
'                                 <tr>'+
'                                    <th width="162" bgcolor="#f9f9f9" style="padding:15px 5px 13px 20px; color:#404040; font-weight:normal; text-align:left; " >Catatan</th>'+
'                                    <td width="*" bgcolor="#ffffff" style="padding:15px 10px 13px 10px; color:#606060; font-family:Tahoma; text-align:left;  ">{:FIELD20:}</td>'+
'                                 </tr>'+
'                                 <tr>'+
'                                    <td colspan="2" bgcolor="#e5e5e5" height="1"></td>'+
'                                 </tr>'+
'                              </tbody>'+
'                           </table>'+
'                        </td>'+
'                     </tr>';
	

	
