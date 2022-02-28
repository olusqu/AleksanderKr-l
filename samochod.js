class Samochod{
    constructor(marka, model, cena, rocznik, spalanie){
        
    this.marka = marka;
    this.model = model;
    this.rocznik = rocznik;
    this.spalanie = spalanie; 
    }
    wiek(){
        const data = new Date();
        const rok = data.getFullYear();
                return rok - this.rocznik;

    }
koszt() {
    //koszt przejechania 100km,cena paliwa 6 zł.
    //...
}
}