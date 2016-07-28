///////////////
// Egy minta //
///////////////

ul = document.getElementsByTagName('ul')[12] //listázáshoz
a = ul.children[0].children[0]
a.innerHTML // diák neve
n = a.onmouseover.toString().substring(219,225) //neptunkódja

/////////////////////////////////////////////////////////////////////
// Ez már a teljes lista konzolba, előtte az előzményeket törölni! //
// Konzol tartalma menthető fájlba (Chrome esetén biztos)          //
/////////////////////////////////////////////////////////////////////

uli = document.getElementsByTagName('ul')[13]; // index(13) eltérő lehet
len = uli.children.length;
for (i=0; i<len; i++) {
	a = uli.children[i].children[0];
	nev = a.innerHTML;
	
	omo = a.onmouseover.toString();
	nbe = omo.search(nev);
	nen = nbe + nev.length;
	nep = omo.substring(nen+4, nen+10);
	
	console.log(nep + '\t' + nev);
}