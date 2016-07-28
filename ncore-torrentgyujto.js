//////////////////////////////////////////////////////////////
// Story: futtatott torrentek fájljait szeretnéd normális   //
//   formába visszakapni, na ez letölti mindet, csak a      //
//   profilodon legyél mikor lefuttatod a szkriptet (ncore) //
//////////////////////////////////////////////////////////////

divTorrents = document.getElementsByClassName('profile_torrent_lenyilo');
for (i = 0; i < /*divTorrents.length*/5; i++) {
	downloadFile(i);
}
function downloadFile(i) {
	setTimeout(function(){open('torrents.php?action=download&id=' + divTorrents[i].id, '_parent');}, i*2000);
}