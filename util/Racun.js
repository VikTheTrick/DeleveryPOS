export default function Racun(prodavnica, stavke) {
    let rez = prodavnica + "\n";

    rez += "------------------------------------------\n";
    for (let i in stavke) {
        let levi = stavke[i].kolicina + "x" + stavke[i].naziv;
        let desni = stavke[i].cena.toString();
        let bc = 42 - levi.length - desni.length;
        rez += levi;
        for (let i = 0; i < bc; i++) {
            rez += " ";
        }
        rez += desni;
        rez += "\n";
    }
    rez += "------------------------------------------";
    return rez;
}