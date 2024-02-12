
let bilettliste=[]
function kjop() {
    let film= document.getElementById("velgFilm").value;

    let fornavn=document.getElementById("Fornavn").value;
    let Etternavn= document.getElementById("Etternavn").value;
    let telfonnr=document.getElementById("Telefonnr").value;
    let Epost=document.getElementById("Epost").value;
    let tall=(document.getElementById("antall").value);

    let bilett = {
        Film:film,
        antall: tall,
        Fornavn: fornavn,
        Etternavn: Etternavn,
        Telefonnr: telfonnr,
        Epost: Epost
    };

    if (!fornavn||!Etternavn||!telfonnr){

        alert("du må fylle ut alle boksende");
    }

    if (Epost==null) {

        alert("Vennligst oppgi en gyldig e-postadresse.");
    }

    if (isNaN(telfonnr)){

        alert("du må skrive inn et tall")
    }

    if (!film){

        alert("du må velge en film")
    }

    let ut="";
    bilettliste.push(bilett);
    for (let i of bilettliste){
        ut+="Film: "+i.Film+"<br>"+"Antall: "+i.antall+"<br>"+"Fornavn: "+i.Fornavn+"<br>"+" Etternavn: "+i.Etternavn+"<br>"+
            "Telefonnr: "+telfonnr+"<br>"+"Epost: "+i.Epost+"<hr>"
    }

    document.getElementById("bytteut").innerHTML=ut

//tømmer fælta
    document.getElementById('Fornavn').value = '';
    document.getElementById('Etternavn').value = '';
    document.getElementById('Telefonnr').value = '';
    document.getElementById('Epost').value = '';
    document.getElementById('antall').value = '';
}
function slett() {
    bilettliste.length=0;
    document.getElementById("bytteut").innerHTML=""

}