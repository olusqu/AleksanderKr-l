class komis{
    constructor(nazwa) {
        this.nazwa = nazwa;
    
    }
    samochody = [];
//metody
dodajSamochod(auto){
this.samochody.push(auto);
}
wyswietlSamochody(){
this.samochody.forEach((s)=> {
console.log(s.marka);
console.log(s.model);
console.log(s.rocznik);
console.log(s.cena);
console.log("////////////")
return `${this.samochody.map((s) => ` <div>Marka: ${s.marka}, model: ${s.model}, rocznik: ${s.rocznik}, cena: ${s.model} </div>`).join('')}`;
})
}
}
