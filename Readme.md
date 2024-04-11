#Listakezelő függvények gyakorlás

##Specifikáció

1.tablazatLetrehoz(lista) --> txt - lista alapján készít html kódot, táblázatot, visszaadja az elkészült html szöveget
2.megjelenit(txt) - megjeleníti a paraméterben kapott szöveget egy adott html elemben
3.rendez(lista) --> rendezettLista - megrendezi a listát adott paraméter szerint, a megrendezett listát visszaadja, akkor fut le
amikor rákattintunk a táblázat fejlécére 4. szures(lista, keresoSzoveg) - akkor fog lefutni ha a szűrő mezőben változás történik (keyup) - a listában a név mezőben keres egyezéseket,
és szűri a listát ez alapján - filter
5.sorBeszur(lista) - ha a submit gombra kattintunk akkor fut le a függvény, űrlapadatokat átalakítjuk objektummá, hozzáadjuk a listához (push)
6.torol(index, lista) - törli a lista indexedik sorát - minden sor mellett lesz egy töröl ikon, amire kattintva megkapjuk az adott sor indexét,
és meghívódik a torol függvény
