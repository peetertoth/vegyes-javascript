///////////////////////////////////////////////////////
// cbpp programhoz készült szépítő szkript           //
// minden szöveget egy fájlba						 //
// üres sor kijelölése, majd csere # karakterre      //
// ## karakter cseréje #, amíg nincs több találat    //
// ' csere \' " csere \"							 //
// kapott szövegen már lehet js-el műveletet végezni //
///////////////////////////////////////////////////////

str = "szöveg";
lines = str.split('#');
nlines = [];
for (i=0; i< lines.length; i++) {
	if(!(lines[i].includes('/ 4 pont') 
			|| lines[i] == '' 
			|| lines[i] == ' ' 
			|| lines[i] == '  '
			|| lines[i] == '   ' 
			|| lines[i] == '    '
			|| lines[i] == '     ')) {
				nlines.push(lines[i]); 
	}
}

n2lines = [];
for (i=0; i< nlines.length-1; i++) {
	if (nlines[i+1].includes('(Kérdés típus:')) {
		if (Number.isNaN(nlines[i]-0))
			n2lines.push(nlines[i]);
		n2lines.push('\n');
	} else {
		n2lines.push(nlines[i]);
	}
}

for (i=0; i< n2lines.length-1; i++) {
	console.log(n2lines[i]);
}