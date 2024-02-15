
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
    let feil=false;
    if (tall<=0){
        feil=true
        document.getElementById("bytteut_antall").innerHTML="Du må skrive inn et posetift tall";
    }
    if (!fornavn){
        feil=true
        document.getElementById("bytteut_fornavn").innerHTML="du må fylle ut fornavnet ditt";
    }
    if (!Etternavn){
        feil=true
        document.getElementById("bytteut_etternavn").innerHTML="du må fylle ut etternavnet ditt";
    }

    if (!Epost) {
        feil=true
        document.getElementById("bytteut_epost").innerHTML="Vennligst oppgi en gyldig e-postadresse";
    }

    if (telfonnr<=0){
        feil=true
        document.getElementById("bytteut_telefonnr").innerHTML="Du må skrive inn et posetift tall";
    }

    if (!film){
        feil=true
        document.getElementById("bytteut_film").innerHTML="du må velge en film"
    }
    if (feil===false) {//pusher biletten hvis det ikke er noe feil i inputstedene
        bilettliste.push(bilett);
    }

    let ut=""; //her så leger jeg til alle variablene man skriver inn til ut objektet
    for (let i of bilettliste){
        ut+="Film: "+i.Film+"<br>"+"Antall: "+i.antall+"<br>"+"Fornavn: "+i.Fornavn+"<br>"+" Etternavn: "+i.Etternavn+"<br>"+
            "Telefonnr: "+telfonnr+"<br>"+"Epost: "+i.Epost+"<hr>"
    }

    document.getElementById("bytteut").innerHTML=ut

//tømmer felta
    document.getElementById('Fornavn').value = "";
    document.getElementById('Etternavn').value = "";
    document.getElementById('Telefonnr').value = "";
    document.getElementById('Epost').value = "";
    document.getElementById('antall').value = "";
    document.getElementById('velgFilm').value = "";
}

function slett() {
    bilettliste.length=0;
    document.getElementById("bytteut").innerHTML=""

}