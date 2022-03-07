class przechowalnia{
    constructor(nazwa,){
        this.nazwa = nazwa;
kontakty=[];

}
dodajKontakt(kontakt){
this.kontakty.push(kontakt);
}
wyswietlKontakt(){
this.kontakty.forEach((s)=> {
console.log(s.nazwa)
console.log(s.numer)
})
}
}