
class Personne {
    constructor(nom="John Doe", age=0) {
        this.nom = nom;
        this.age = age;
    }

    afficherDetails() {
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
}


const x = 3;

const maFonction = () => console.log("Allô!");

export {Personne,x,maFonction}