//ALERTA! CODIGO HORRIVEL ABAIXO!
//REPITO, CODIGO HORRIVEL ABAIXO!

var pacoteNumero = 1
var solsolsol = 1
var soissoissois = 1
var lalalala = 1
var yipe = 1
var talaounaota = 1
    function criar(numero6) {
        vitoria = 1
        document.getElementById("escolha").value = "";
        document.getElementById("div").style.display = "none";
        document.getElementById("escolha").disabled = true;
        document.getElementById("botaodomenu").style.cursor = "default"
        document.getElementById("botaodomenu").setAttribute( "onClick", "" );
        document.getElementById("pause").style.display = "none"
        var DurezaEscolhido, VelocidadeEscolhido, MundoEscolhido, FraquezaEscolhido, specialEscolhido, Ganhou, Perdeu = ""
        var dbRef3 = firebase.database().ref().child('Zumbis/PvZ1/'+numero6)
        dbRef3.on('value', snapshot => {
            MundoEscolhido = snapshot.val().World;
            DurezaEscolhido = snapshot.val().Toughness;
            VelocidadeEscolhido = snapshot.val().Speed;
            FraquezaEscolhido = snapshot.val().Weakness;
            specialEscolhido = snapshot.val().Special;
            NomeEscolhido = snapshot.val().Name;
            Ganhou = snapshot.val().Won; 
            Perdeu = snapshot.val().Wrong; 
        });
        var certoouerrado = ""
        if (MundoEscolhido !== MundoDoDia) {
            errou(numero6)
            certoouerrado = certoouerrado + "🟥"
            if (MundoEscolhido == "Day") {
                Mundao = "Image/Packet Seeds/Plants/WorldDayWrong.webp"
            } else if (MundoEscolhido == "Night") {
                Mundao = "Image/Packet Seeds/Plants/WorldNightWrong.webp"
            } else if (MundoEscolhido == "Pool") {
                Mundao = "Image/Packet Seeds/Plants/WorldPoolWrong.webp"
            } else if (MundoEscolhido == "Fog") {
                Mundao = "Image/Packet Seeds/Plants/WorldFogWrong.webp"
            } else if (MundoEscolhido == "Roof") {
                Mundao = "Image/Packet Seeds/Plants/WorldRoofWrong.webp"
            } else {
                Mundao = "Image/Packet Seeds/Plants/WorldShopWrong.webp"
            }
        } else {
            certoouerrado = certoouerrado + "🟩"
            if (MundoEscolhido == "Day") {
                Mundao = "Image/Packet Seeds/Plants/WorldDay.webp"
            } else if (MundoEscolhido == "Night") {
                Mundao = "Image/Packet Seeds/Plants/WorldNight.webp"
            } else if (MundoEscolhido == "Pool") {
                Mundao = "Image/Packet Seeds/Plants/WorldPool.webp"
            } else if (MundoEscolhido == "Fog") {
                Mundao = "Image/Packet Seeds/Plants/WorldFog.webp"
            } else if (MundoEscolhido == "Roof") {
                Mundao = "Image/Packet Seeds/Plants/WorldRoof.webp"
            } else {
                Mundao = "Image/Packet Seeds/Plants/WorldShop.webp"
            }   
        }
        if (DurezaEscolhido !== DurezaDoDia) {
            errou(numero6)
            certoouerrado = certoouerrado + "🟥"
            if (DurezaEscolhido == "Low") {
                carregou = "Image/Zombies/Icons/ToughnessLowWrong.webp"
            } else if (DurezaEscolhido == "Medium") {
                carregou = "Image/Zombies/Icons/ToughnessMediumWrong.webp"
            } else if (DurezaEscolhido == "High") {
                carregou = "Image/Zombies/Icons/ToughnessHighWrong.webp"
            } else if (DurezaEscolhido == "Very high") {
                carregou = "Image/Zombies/Icons/ToughnessVeryHighWrong.webp"
            } else if (DurezaEscolhido == "Extremely high") {
                carregou = "Image/Zombies/Icons/ToughnessExtremelyHighWrong.webp"
            } else if (DurezaEscolhido == "Extreme") {
                carregou = "Image/Zombies/Icons/ToughnessExtremeWrong.webp"
            } else {
                carregou = "Image/Zombies/Icons/AhnWrong.webp"
            }
        } else {
            certoouerrado = certoouerrado + "🟩"
            if (DurezaEscolhido == "Low") {
                carregou = "Image/Zombies/Icons/ToughnessLow.webp"
            } else if (DurezaEscolhido == "Medium") {
                carregou = "Image/Zombies/Icons/ToughnessMedium.webp"
            } else if (DurezaEscolhido == "High") {
                carregou = "Image/Zombies/Icons/ToughnessHigh.webp"
            } else if (DurezaEscolhido == "Very high") {
                carregou = "Image/Zombies/Icons/ToughnessVeryHigh.webp"
            } else if (DurezaEscolhido == "Extremely high") {
                carregou = "Image/Zombies/Icons/ToughnessExtremelyHigh.webp"
            } else if (DurezaEscolhido == "Extreme") {
                carregou = "Image/Zombies/Icons/ToughnessExtreme.webp"
            } else {
                carregou = "Image/Zombies/Icons/Ahn.webp"
            }
        }
        if (VelocidadeEscolhido !== VelocidadeDoDia) {
            errou(numero6)
            certoouerrado = certoouerrado + "🟥"
            if (VelocidadeEscolhido == "Normal") {
                Areazinha = "Image/Zombies/Icons/SpeedNormalWrong.webp"
            } else if (VelocidadeEscolhido == "Fast") {
                Areazinha = "Image/Zombies/Icons/SpeedFastWrong.webp"
            } else if (VelocidadeEscolhido == "Slow") {
                Areazinha = "Image/Zombies/Icons/SpeedSlowWrong.webp"
            } else if (VelocidadeEscolhido == "Variable") {
                Areazinha = "Image/Zombies/Icons/SpeedVariableWrong.webp"
            } else if (VelocidadeEscolhido == "None") {
                Areazinha = "Image/Zombies/Icons/SpeedNoneWrong.webp"
            } else {
                Areazinha = "Image/Zombies/Icons/AhnWrong.webp"
            }
        } else {
            certoouerrado = certoouerrado + "🟩"
            if (VelocidadeEscolhido == "Normal") {
                Areazinha = "Image/Zombies/Icons/SpeedNormal.webp"
            } else if (VelocidadeEscolhido == "Fast") {
                Areazinha = "Image/Zombies/Icons/SpeedFast.webp"
            } else if (VelocidadeEscolhido == "Slow") {
                Areazinha = "Image/Zombies/Icons/SpeedSlow.webp"
            } else if (VelocidadeEscolhido == "Variable") {
                Areazinha = "Image/Zombies/Icons/SpeedVariable.webp"
            } else if (VelocidadeEscolhido == "None") {
                Areazinha = "Image/Zombies/Icons/SpeedNone.webp"
            } else {
                Areazinha = "Image/Zombies/Icons/Ahn.webp"
            }
        }
        if (FraquezaEscolhido !== FraquezaDoDia) {
            errou(numero6)
            certoouerrado = certoouerrado + "🟥"
            if (FraquezaEscolhido == "No") {
                Doeu = "Image/Zombies/Icons/NoWrong.webp"
            } else if (FraquezaEscolhido == "Yes") {
                Doeu = "Image/Zombies/Icons/YesWrong.webp"
            } else {
                Doeu = "Image/Zombies/Icons/AhnWrong.webp"
            }
        } else {
            certoouerrado = certoouerrado + "🟩"
            if (FraquezaEscolhido == "No") {
                Doeu = "Image/Zombies/Icons/No.webp"
            } else if (FraquezaEscolhido == "Yes") {
                Doeu = "Image/Zombies/Icons/Yes.webp"
            } else {
                Doeu = "Image/Zombies/Icons/Ahn.webp"
            }
        }
        if (specialEscolhido !== specialDoDia) {
            errou(numero6)
            certoouerrado = certoouerrado + "🟥"
            if (specialEscolhido == "No") {
                Legal = "Image/Zombies/Icons/NoWrong.webp"
            } else if (specialEscolhido == "Yes") {
                Legal = "Image/Zombies/Icons/YesWrong.webp"
            } else {
                Legal = "Image/Zombies/Icons/AhnWrong.webp"
            }
        } else {
            certoouerrado = certoouerrado + "🟩"
            if (specialEscolhido == "No") {
                Legal = "Image/Zombies/Icons/No.webp"
            } else if (specialEscolhido == "Yes") {
                Legal = "Image/Zombies/Icons/Yes.webp"
            } else {
                Legal = "Image/Zombies/Icons/Ahn.webp"
            }
        }
        if (talaounaota == 1) {
            emojinumero = "\n1️⃣"
        } else if (talaounaota == 2) {
            emojinumero = "\n2️⃣"
        } else if (talaounaota == 3) {
            emojinumero = "\n3️⃣"
        } else if (talaounaota == 4) {
            emojinumero = "\n4️⃣"
        } else if (talaounaota == 5) {
            emojinumero = "\n5️⃣"
        } else {
            emojinumero = "\n6️⃣"
        }
        if (vitoria <= 0) {
            document.getElementById("compartilharmensagem"+talaounaota).innerText = emojinumero + certoouerrado
           ImagemDaPlanta = Perdeu
        } else {
            ImagemDaPlanta = Ganhou
        }
        talaounaota++
        var carregouNomeEscolhido = document.createElement("a")
        carregouNomeEscolhido.id = "solquantidade"+soissoissois
        soissoissois++
        carregouNomeEscolhido.style = "display: none"
        carregouNomeEscolhido.innerText = NomeEscolhido
        document.getElementById("yayay"+yipe).appendChild(carregouNomeEscolhido);
        var semente  = document.createElement("img")
        semente.src = "Image/Windows/Seed_Slots2dnv.png"
        semente.width = "680"
        semente.height = "115.8"
        semente.classList = "img-fluid"
        semente.style = "margin-top: 2px;"
        document.getElementById("yayay"+yipe).appendChild(semente);
        var pacote1  = document.createElement("img")
        pacote1.src = ImagemDaPlanta
        pacote1.style = "margin-left: -93px; position: relative"
        pacote1.classList = "pacote"
        pacote1.width = "65"
        pacote1.id = "pacote"+pacoteNumero
        pacoteNumero++
        document.getElementById("yayay"+yipe).appendChild(pacote1);
        var pacote2  = document.createElement("img")
        pacote2.src = Mundao
        pacote2.style = "margin-left: 5px; position: relative"
        pacote2.classList = "pacote"
        pacote2.width = "65"
        pacote2.id = "pacote"+pacoteNumero
        pacoteNumero++
        document.getElementById("yayay"+yipe).appendChild(pacote2);
        var pacote3  = document.createElement("img")
        pacote3.src = carregou
        pacote3.style = "margin-left: 5px; position: relative"
        pacote3.classList = "pacote"
        pacote3.width = "65"
        pacote3.id = "pacote"+pacoteNumero
        pacoteNumero++
        document.getElementById("yayay"+yipe).appendChild(pacote3);
        var pacote4  = document.createElement("img")
        pacote4.src = Areazinha
        pacote4.style = "margin-left: 5px; position: relative"
        pacote4.classList = "pacote"
        pacote4.width = "65"
        pacote4.id = "pacote"+pacoteNumero
        pacoteNumero++
        document.getElementById("yayay"+yipe).appendChild(pacote4);
        var pacote5  = document.createElement("img")
        pacote5.src = Doeu
        pacote5.style = "margin-left: 5px; position: relative"
        pacote5.classList = "pacote"
        pacote5.width = "65"
        pacote5.id = "pacote"+pacoteNumero
        pacoteNumero++
        document.getElementById("yayay"+yipe).appendChild(pacote5);
        var pacote6  = document.createElement("img")
        pacote6.src = Legal
        pacote6.style = "margin-left: 5px; position: relative"
        pacote6.classList = "pacote"
        pacote6.width = "65"
        pacote6.id = "pacote"+pacoteNumero
        pacoteNumero++
        document.getElementById("yayay"+yipe).appendChild(pacote6);
        document.getElementById("yayay"+yipe).appendChild(document.createElement("br"));
        yipe++
    }
    function clicar(numero5) {
        criar(numero5)
        gravar(numero5)
        setTimeout(function () { 
            document.getElementById("pacote"+lalalala).classList.add("animation");
            lalalala++
            if (document.getElementById("solquantidade1").innerText == "undefined") {
                let jaganhou = getStreak("JaGanhou");
                if (jaganhou == "") {
                    jaganhou = 0
                }
                if (jaganhou == 0) {
                    let vitoriasdapessoa = getStreak("Vitorias");
                    let streaksdapessoa = getStreak("Streak");
                    if (streaksdapessoa == "") {
                        streaksdapessoa = 0
                    }
                   if (vitoriasdapessoa == "") {
                        vitoriasdapessoa = 0
                    }
                vitoria = parseInt(vitoriasdapessoa) - 1
                document.cookie = `Vitorias=`+vitoria+`; expires=Thu, 01 Jan 3000 12:00:00 UTC; path=/; Secure; SameSite=Lax;`;
                const date = new Date();
                date.setDate(date.getDate() + 2);
                date.setHours(0, 0, 0, 0);
                streakk = parseInt(streaksdapessoa) - 1
                document.cookie = `Streak=`+streakk+`; expires=${date.toUTCString()} path=/;Secure; SameSite=Lax;`;
                }
                document.getElementById("mensagem").innerText = "!!!"
                document.getElementById("tentativas").innerText = "!!!"
                setTimeout(function () { 
                    window.location.reload()
                }, 500)
            }
        }, 500);
        setTimeout(function () { 
            document.getElementById("pacote"+lalalala).classList.add("animation"+lalalala);
            lalalala++
        }, 1000);
        setTimeout(function () { 
            document.getElementById("pacote"+lalalala).classList.add("animation"+lalalala);
            lalalala++
        }, 1500);
        setTimeout(function () { 
            document.getElementById("pacote"+lalalala).classList.add("animation"+lalalala);
            lalalala++
        }, 2000);
        setTimeout(function () { 
            document.getElementById("pacote"+lalalala).classList.add("animation"+lalalala);
            lalalala++
        }, 2500);
        setTimeout(function () { 
            document.getElementById("pacote"+lalalala).classList.add("animation"+lalalala);
            lalalala++
        }, 3000);
        setTimeout(function () { 
            document.getElementById("escolha").disabled = false;
            document.getElementById("botaodomenu").style.cursor = "pointer"
            document.getElementById("botaodomenu").setAttribute( "onClick", "menupause()" );
            if ((vitoria == 1) || (derrota == 6)) {
                document.getElementById("escolha").disabled = true
            }
            document.getElementById("solquantidade1").style.opacity = "1";
            document.getElementById("solquantidade2").style.opacity = "1";
            document.getElementById("solquantidade3").style.opacity = "1";
            document.getElementById("solquantidade4").style.opacity = "1";
            document.getElementById("solquantidade5").style.opacity = "1";
            document.getElementById("solquantidade6").style.opacity = "1";
        }, 4000);
    }
