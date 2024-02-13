
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
    bilettliste.push(bilett);
    if (tall<=0){

        document.getElementById("bytteut antall").innerHTML="Du må skrive inn et posetift tall";
    }
    if (!fornavn){

        document.getElementById("bytteut fornavn").innerHTML="du må fylle ut fornavnet ditt";
    }
    if (!Etternavn){

        document.getElementById("bytteut etternavn").innerHTML="du må fylle ut etternavnet ditt";
    }

    if (!Epost) {

        document.getElementById("bytteut epost").innerHTML="Vennligst oppgi en gyldig e-postadresse";
    }

    if (telfonnr<=0){

        document.getElementById("bytteuttelefonnr").innerHTML="Du må skrive inn et posetift tall";
    }

    if (!film){

        document.getElementById("bytteut film").innerHTML="du må velge en film"
    }

    let ut="";
    for (let i of bilettliste){
        ut+="Film: "+i.Film+"<br>"+"Antall: "+i.antall+"<br>"+"Fornavn: "+i.Fornavn+"<br>"+" Etternavn: "+i.Etternavn+"<br>"+
            "Telefonnr: "+telfonnr+"<br>"+"Epost: "+i.Epost+"<hr>"
    }

    document.getElementById("bytteut").innerHTML=ut

//tømmær fælta
    document.getElementById('Fornavn').value = "";
    document.getElementById('Etternavn').value = "";
    document.getElementById('Telefonnr').value = "";
    document.getElementById('Epost').value = "";
    document.getElementById('antall').value = "";
}
function slett() {
    bilettliste.length=0;
    document.getElementById("bytteut").innerHTML=""

}