export function rendez(lista, kulcs, rIrany) {
    const RLISTA = lista.sort(function (e1,e2) {
        //returnbe negatív vagy poz érték kell
        // a nev szöveges változó, ezért < > értelmezhető

        return e1[kulcs]<e2[kulcs]?-1*rIrany:1*rIrany   
    })
    
    return RLISTA
}
export function szures(lista, keresoSzoveg) {
    const szLISTA = lista.filter(function (ember) {
        return ember.nev.toUpperCase().includes(keresoSzoveg.toUpperCase())
    })
    return szLISTA
}
