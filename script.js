    var nnwkl = 0;
    var nnw = 0;
    var workHourForeign=0;//zagraniczne
    var workHoursDomestic=0;//krajowe
    var workHours = 0;


        function wyczysc(){
            nnw=0;
            nnwkl=0;
            workHourForeign=0;
            workHoursDomestic=0;
            document.getElementById('nnwkl').innerHTML=nnwkl;
            document.getElementById('nnw').innerHTML=nnw;
            document.getElementById('zagraniczne').innerHTML=workHourForeign;
            document.getElementById('krajowe').innerHTML=workHoursDomestic;
            alert("Wyczyszczono dane.");
            block=document.getElementsByClassName('block');
            for (let index = 3; index < block.length; index++) {
                block[index].style.border="2px solid blue";
            }

        }

        

        function bulgaria(){
            var popyt=parseInt(document.getElementById('popytBulgaria').value);
            var p=document.getElementById('bulgariaKalk');
           

            if(popyt!=0){
                nnwkl+=popyt;
                workHourForeign=(popyt*2)+workHourForeign;
                p.innerHTML="BILET NA SAMOLOT (OBIE STRONY): <b>"+popyt+"</b> <br>"+
                "DOBOWE WYŻYWIENIE: <b>"+popyt*7+"</b> <br>"+
                "NOCLEG: <b>"+popyt*6+"</b> <br>"+
                "REZYDENT: <b>"+popyt/80+"</b> <br>"+
                "TRANSFER NA LOTNISKO I Z POWROTEM: <b>"+popyt/40+"</b> <br>"+
                "UBEZPIECZENIE NNW + KL - ZAGRANICZNE: <b>"+popyt+"</b> <br>";
                document.getElementById('nnwkl').innerHTML=nnwkl;
                document.getElementById('zagraniczne').innerHTML=workHourForeign;
                alert("Dodano wartość.");
                document.getElementById('bulgaria').style.border="2px solid red";
            }
            else
                alert("Podaj liczbę wyższą od 0.");
        }

        function chorwacja(){
            var popyt=parseInt(document.getElementById('popytChorwacja').value);
            var p=document.getElementById('chorwacjaKalk');

            if(popyt!=0){
                nnwkl+=popyt;
                workHourForeign=(popyt*2)+workHourForeign;
                p.innerHTML="BILET NA SAMOLOT (OBIE STRONY): <b>"+popyt+"</b> <br>"+
                "DOBOWE WYŻYWIENIE: <b>"+popyt*7+"</b> <br>"+
                "NOCLEG: <b>"+popyt*6+"</b> <br>"+
                "REZYDENT: <b>"+popyt/80+"</b> <br>"+
                "TRANSFER NA LOTNISKO I Z POWROTEM: <b>"+popyt/40+"</b> <br>"+
                "UBEZPIECZENIE NNW + KL - ZAGRANICZNE: <b>"+popyt+"</b> <br>";
                document.getElementById('nnwkl').innerHTML=nnwkl;
                document.getElementById('zagraniczne').innerHTML=workHourForeign;
                alert("Dodano wartość.");
                document.getElementById('chorwacja').style.border="2px solid red";
            }
            else
                alert("Podaj liczbę wyższą od 0.");

        }

        function egipt(){
            var popyt=parseInt(document.getElementById('popytEgipt').value);
            var p=document.getElementById('egiptKalk');

            if(popyt!=0){
                nnwkl+=popyt;
                workHourForeign=(popyt*2)+workHourForeign;
                p.innerHTML="BILET NA SAMOLOT (OBIE STRONY): <b>"+popyt+"</b> <br>"+
                "DOBOWE WYŻYWIENIE: <b>"+popyt*7+"</b> <br>"+
                "NOCLEG: <b>"+popyt*6+"</b> <br>"+
                "REZYDENT: <b>"+popyt/80+"</b> <br>"+
                "TRANSFER NA LOTNISKO I Z POWROTEM: <b>"+popyt/40+"</b> <br>"+
                "UBEZPIECZENIE NNW + KL - ZAGRANICZNE: <b>"+popyt+"</b> <br>";
                document.getElementById('nnwkl').innerHTML=nnwkl;
                document.getElementById('zagraniczne').innerHTML=workHourForeign;
                alert("Dodano wartość.");
                document.getElementById('egipt').style.border="2px solid red";
            }
            else
                alert("Podaj liczbę wyższą od 0.");
        }

        function grecja(){
            var popyt=parseInt(document.getElementById('popytGrecja').value);
            var p=document.getElementById('grecjaKalk');

            if(popyt!=0){
                nnwkl+=popyt;
                workHourForeign=(popyt*2)+workHourForeign;
                p.innerHTML="BILET NA SAMOLOT (OBIE STRONY): <b>"+popyt+"</b> <br>"+
                "DOBOWE WYŻYWIENIE: <b>"+popyt*7+"</b> <br>"+
                "NOCLEG: <b>"+popyt*6+"</b> <br>"+
                "REZYDENT: <b>"+popyt/80+"</b> <br>"+
                "TRANSFER NA LOTNISKO I Z POWROTEM: <b>"+popyt/40+"</b> <br>"+
                "UBEZPIECZENIE NNW + KL - ZAGRANICZNE: <b>"+popyt+"</b> <br>";
                document.getElementById('nnwkl').innerHTML=nnwkl;
                document.getElementById('zagraniczne').innerHTML=workHourForeign;
                alert("Dodano wartość.");
                document.getElementById('grecja').style.border="2px solid red";
            }
            else
                alert("Podaj liczbę wyższą od 0.");
        }

        function rumunia(){
            var popyt=parseInt(document.getElementById('popytRumunia').value);
            var p=document.getElementById('rumuniaKalk');

            if(popyt!=0){
                nnwkl+=popyt;
                workHourForeign=(popyt*2)+workHourForeign;
                p.innerHTML="BILET NA SAMOLOT (OBIE STRONY): <b>"+popyt+"</b> <br>"+
                "DOBOWE WYŻYWIENIE: <b>"+popyt*7+"</b> <br>"+
                "NOCLEG: <b>"+popyt*6+"</b> <br>"+
                "REZYDENT: <b>"+popyt/80+"</b> <br>"+
                "TRANSFER NA LOTNISKO I Z POWROTEM: <b>"+popyt/40+"</b> <br>"+
                "UBEZPIECZENIE NNW + KL - ZAGRANICZNE: <b>"+popyt+"</b> <br>";
                document.getElementById('nnwkl').innerHTML=nnwkl;
                document.getElementById('zagraniczne').innerHTML=workHourForeign;
                alert("Dodano wartość.");
                document.getElementById('rumunia').style.border="2px solid red";
            }
            else
                alert("Podaj liczbę wyższą od 0.");
        }

        function turcja(){
            var popyt=parseInt(document.getElementById('popytTurcja').value);
            var p=document.getElementById('turcjaKalk');

            if(popyt!=0){
                nnwkl+=popyt;
                workHourForeign=(popyt*2.5)+workHourForeign;
                p.innerHTML="BILET NA SAMOLOT (OBIE STRONY): <b>"+popyt+"</b> <br>"+
                "DOBOWE WYŻYWIENIE: <b>"+popyt*7+"</b> <br>"+
                "NOCLEG: <b>"+popyt*6+"</b> <br>"+
                "REZYDENT: <b>"+popyt/80+"</b> <br>"+
                "TRANSFER NA LOTNISKO I Z POWROTEM: <b>"+popyt/40+"</b> <br>"+
                "UBEZPIECZENIE NNW + KL - ZAGRANICZNE: <b>"+popyt+"</b> <br>";
                document.getElementById('nnwkl').innerHTML=nnwkl;
                document.getElementById('zagraniczne').innerHTML=workHourForeign;
                alert("Dodano wartość.");
                document.getElementById('turcja').style.border="2px solid red";
            }
            else
                alert("Podaj liczbę wyższą od 0.");
        }

        function jezyk(){
            var popyt=parseInt(document.getElementById('popytJezyk').value);
            var p=document.getElementById('jezykKalk');

            if(popyt!=0){
                nnw+=popyt;
                workHoursDomestic+=popyt;
                p.innerHTML="AUTOKAR: <b>"+popyt/40+"</b> <br>"+
                "DOBOWE WYŻYWIENIE: <b>"+popyt*14+"</b> <br>"+
                "KIEROWNIK OBOZU JĘZYKOWEGO: <b>"+popyt/40+"</b> <br>"+
                "NAUCZYCIEL JĘZYKA: <b>"+popyt/15+"</b> <br>"+
                "NOCLEG: <b>"+popyt*13+"</b> <br>"+
                "UBEZPIECZENIE NNW - KRAJOWE: <b>"+popyt+"</b> <br>"+
                "WYCHOWAWCA - OBÓZ JĘZYKOWY: <b>"+popyt/15+"</b> <br>";
                document.getElementById('nnw').innerHTML=nnw;
                document.getElementById('krajowe').innerHTML=workHoursDomestic;
                alert("Dodano wartość.");
                document.getElementById('jezyk').style.border="2px solid red";
            }
            else
                alert("Podaj liczbę wyższą od 0.");
        }


        function narty(){
            var popyt=parseInt(document.getElementById('popytNarty').value);
            var p=document.getElementById('nartyKalk');

            if(popyt!=0){
                nnw+=popyt;
                workHoursDomestic=(popyt*0.6)+popyt;
                p.innerHTML="AUTOKAR: <b>"+popyt/40+"</b> <br>"+
                "DOBOWE WYŻYWIENIE: <b>"+popyt*7+"</b> <br>"+
                "INSTRUKTOR NARCIARSTWA: <b>"+popyt/15+"</b><br>"+
                "KIEROWNIK OBOZU NARCIARSKIEGO: <b>"+popyt/40+"</b><br>"+
                "NOCLEG: <b>"+popyt*6+"</b> <br>"+
                "UBEZPIECZENIE NNW - KRAJOWE: <b>"+popyt+"</b> <br>";
                document.getElementById('nnw').innerHTML=nnw;
                document.getElementById('krajowe').innerHTML=workHoursDomestic;
                alert("Dodano wartość.");
                document.getElementById('narty').style.border="2px solid red";
            }
            else
                alert("Podaj liczbę wyższą od 0.");
        }

        function jazda(){
            var popyt=parseInt(document.getElementById('popytJezdziecki').value);
            var p=document.getElementById('jezdzieckiKalk');

            if(popyt!=0){
                nnw+=popyt;
                workHoursDomestic+=popyt;
                p.innerHTML="AUTOKAR: <b>"+popyt/40+"</b> <br>"+
                "DOBOWE WYŻYWIENIE: <b>"+popyt*14+"</b> <br>"+
                "INSTRUKTOR JEŹDZIECTWA: <b>"+popyt/15+"</b> <br>"+
                "KIEROWNIK OBOZU JEŹDZIECKIEGO: <b>"+popyt/40+"</b> <br>"+
                "NOCLEG: <b>"+popyt*13+"</b> <br>"+
                "UBEZPIECZENIE NNW - KRAJOWE: <b>"+popyt+"</b> <br>"+
                "WYCHOWAWCA - OBÓZ JEŹDZIECKI: <b>"+popyt/15+"</b> <br>";
                document.getElementById('nnw').innerHTML=nnw;
                document.getElementById('krajowe').innerHTML=workHoursDomestic;
                alert("Dodano wartość.");
                document.getElementById('jazda').style.border="2px solid red";
            }
            else
                alert("Podaj liczbę wyższą od 0.");
        }

        function morze(){
            var popyt=parseInt(document.getElementById('popytMorze').value);
            var p=document.getElementById('morzeKalk');

            if(popyt!=0){
                nnw+=popyt;
                workHoursDomestic=(popyt*1.2)+workHoursDomestic;
                p.innerHTML="AUTOKAR: <b>"+popyt/50+"</b> <br>"+
                "BILET WSTĘPU DO OCEANARIUM: <b>"+popyt+"</b> <br>"+
                "DOBOWE WYŻYWIENIE: <b>"+popyt*10+"</b> <br>"+
                "NOCLEG: <b>"+popyt*9+"</b> <br>"+
                "PILOT: <b>"+popyt/40+"</b> <br>"+
                "PRZEWODNIK: <b>"+popyt/40+"</b> <br>"+
                "UBEZPIECZENIE NNW - KRAJOWE: <b>"+popyt+"</b> <br>";
                document.getElementById('nnw').innerHTML=nnw;
                document.getElementById('krajowe').innerHTML=workHoursDomestic;
                alert("Dodano wartość.");
                document.getElementById('morze').style.border="2px solid red";
            }
            else
                alert("Podaj liczbę wyższą od 0.");
        }

        function gory(){
            var popyt=parseInt(document.getElementById('popytGory').value);
            var p=document.getElementById('goryKalk');

            if(popyt!=0){
                nnw+=popyt;
                workHoursDomestic=(popyt*1.2)+workHoursDomestic;
                p.innerHTML="AUTOKAR: <b>"+popyt/50+"</b> <br>"+
                "DOBOWE WYŻYWIENIE: <b>"+popyt*10+"</b> <br>"+
                "NOCLEG: <b>"+popyt*9+"</b> <br>"+
                "PILOT: <b>"+popyt/40+"</b> <br>"+
                "PRZEWODNIK: <b>"+popyt/40+"</b> <br>"+
                "UBEZPIECZENIE NNW - KRAJOWE: <b>"+popyt+"</b> <br>";
                document.getElementById('nnw').innerHTML=nnw;
                document.getElementById('krajowe').innerHTML=workHoursDomestic;
                alert("Dodano wartość.");
                document.getElementById('gory').style.border="2px solid red";
            }
            else
                alert("Podaj liczbę wyższą od 0.");
        }

        function stolice(){
            var popyt=parseInt(document.getElementById('popytStolice').value);
            var p=document.getElementById('stoliceKalk');

            if(popyt!=0){
                nnwkl+=popyt;
                workHourForeign=(popyt*2.5)+workHourForeign;
                p.innerHTML="AUTOKAR: <b>"+popyt/60+"</b> <br>"+
                "BILET WSTĘPU DO MUZEUM: <b>"+popyt+"</b> <br>"+
                "DOBOWE WYŻYWIENIE: <b>"+popyt*10+"</b> <br>"+
                "NOCLEG: <b>"+popyt*9+"</b> <br>"+
                "PILOT: <b>"+popyt/40+"</b> <br>"+
                "PRZEWODNIK: <b>"+popyt/40+"</b> <br>"+
                "UBEZPIECZENIE NNW + KL - ZAGRANICZNE: <b>"+popyt+"</b> <br>";
                document.getElementById('nnwkl').innerHTML=nnwkl;
                document.getElementById('zagraniczne').innerHTML=workHourForeign;
                alert("Dodano wartość.");
                document.getElementById('stolica').style.border="2px solid red";
            }
            else
                alert("Podaj liczbę wyższą od 0.");
        }


function popyt() {
    var num = document.getElementById('numer').value;
    var mnoz = document.getElementById('mnoznik').value;
    var pro = document.getElementById('procent').value;
    var plus = document.getElementById('plusjeden').checked;

    var wyn = num/12;
    wyn *= mnoz;
    var mn = wyn*(pro/100);
    wyn += mn;
    if (plus == true) {
        wyn += 1;
    }
    
    var gdzie = document.getElementById('wybor').value;

// -----Wczasy-----
// 1 Wczasy w Bułgarii = 0
// 2 Wczasy w Chorwacji = 1
// 3 Wczasy w Egipcie = 2
// 4 Wczasy w Grecji = 3
// 5 Wczasy w Ruminii = 4
// 6 Wczasy w Turcji = 5
// -----Obozy-----
// 7 Krajowy obóz językowy = 6
// 8 Krajowy obóz jeździecki = 7
// 9 Krajowy obóz narciarski = 8
// -----Wycieczki----- 
// 10 Krajowa wycieczka nad morze = 9
// 11 Krajowa wycieczka w góry = 10
// 12 Wycieczka do stolicy europejskiej = 11



    switch (gdzie) {
        case '1':
            workHours = Math.ceil(wyn)*2;
            break;
        case '2':
            workHours = Math.ceil(wyn)*2;
            break;
        case '3':
            workHours = Math.ceil(wyn)*2;
            break;
        case '4':
            workHours = Math.ceil(wyn)*2;
            break;
        case '5':
            workHours = Math.ceil(wyn)*2;
            break;
        case '6':
            workHours = Math.ceil(wyn)*2.5;
            break;
        case '7':
            workHours = Math.ceil(wyn)*1;
            break;
        case '8':
            workHours = Math.ceil(wyn)*1;
            break;
        case '9':
            workHours = Math.ceil(wyn)*0.6;
            break;
        case '10':
            workHours = Math.ceil(wyn)*1.2;
            break;
        case '11':
            workHours = Math.ceil(wyn)*1.2;
            break;
        case '12':
            workHours = Math.ceil(wyn)*2.5;
            break;
    }
    
    document.getElementById('wynik').innerHTML = "Wynik: <b>" + Math.ceil(wyn)+"</b><br>Liczba roboczogodzin: <b>"+workHours+"</b>";


}



       