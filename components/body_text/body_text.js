function attendancePerMonthText(left) 
{
  let textContainer = document.createElement("div")
  textContainer.id = "textContainer"
  left.append(textContainer)

  let text = document.createElement("p")
  text.id = "text"
  text.innerHTML = `Den här grafen visar "Attendance Per Month", altså mängden besökare en Dj drog totalt för varje månad i ett år! <br>
                    Varje DJ representeras av en linje.<br>
                    På X axlen visas månaderna och på Y axlen mängden besökare.<br>
                    När det kommer till frågan "Vilken DJ har varit mest populär?" så är mängden besökare nog den viktigaste statistiken att analysera.<br>
                    En populär DJ kommer att få fler bokningar samt dra mer publik.`
  textContainer.append(text)
}

function earningsPerMonthText(left) 
{
  let textContainer = document.createElement("div")
  textContainer.id = "textContainer"
  left.append(textContainer)

  let text = document.createElement("p")
  text.id = "text"
  text.innerHTML = `Den här grafen visar "Earnings Per Month", alltså mängden pengar en DJ tjänat totalt över ett år!<br>
                    Varje DJ representeras av en linje.<br>
                    På X axlen visas månaderna och på Y axlen den totala inkomsten i kr.<br>
                    När det kommer till frågan "Vilken DJ har varit mest populär?" Så är inkomst viktigare än man kanske tror.<br>
                    Man kan tro att inkomst bara är från bokningsavgift och biljettpris, men det kan vara mycket mer.<br>
                    Inkomst kan även innefatta alla typer av merch och streamingförmåner,<br>
                    Så publik är inte allt. En populär DJ kan sälja mycket merch eller ha många spelningar på sina bangers online.`
  textContainer.append(text)
}

function attendanceRateText(left) 
{
  let textContainer = document.createElement("div")
 
  textContainer.id = "textContainer"
  left.append(textContainer)
  let text = document.createElement("p")
  text.id = "text"
  text.innerHTML = `Den här grafen visar "Attendance Rate", alltså mängden besökare en Dj drog totalt för varje gig delat på stadens befolkning! <br>
                    Varje månad representeras av en stapel.<br>
                    På X axlen visas månaderna och på Y axlen besöksfrekvensen i procent.<br>
                    När det kommer till frågan "Vilken DJ har varit mest populär?" så ger besöksfrekvensen viktig kontext. <br>
                    DJ 1 kan ha samma mängd besökare som DJ 2. Men om besöksfrekvensen är högre tyder det på att DJ 1 drog en större del av befolkningen till sit gig och kanske till och med besökare utanför stadens befolkning.<br>
                    En DJ som har stor besöksfrekvensen i stora städer som små är verkligen populär! `
  textContainer.append(text)
}

function fullDataText(left) 
{
  let textContainer = document.createElement("div")
  textContainer.id = "textContainer"
  left.append(textContainer)
    
  let text = document.createElement("p")
  text.id = "text"
  text.innerHTML = `Den här grafen visar "Full Data", altså all data sammlat ifrån alla grafer! <br>
                    Varje DJ representeras av en cirkel.<br>
                    På X axlen visas besökande siffran och på Y axlen besöksfrekvensen i procent för hela året.<br>
                    När det kommer till frågan "Vilken DJ har varit mest populär?" så ger den här grafen en helhets blik på frågan genom att visa datan från varjde graf.<br>
                    Den här grafen gör det helt enkelt lättare att jämföra alla DJs på alla kriterier. `
  textContainer.append(text)
}


function hottest2025Text(left) 
{
  let textContainer2025 = document.createElement("div")
  textContainer2025.id = "textContainer2025"
  left.append(textContainer2025)

  let header2025 = document.createElement("h1")
  header2025.id = "header2025"
  header2025.textContent = "Hottest 2025"
  textContainer2025.append(header2025)
    
  let text2025_0 = document.createElement("p")
  text2025_0.id = "text2025_0"
  text2025_0.innerHTML = `Så vilken DJ tror vi kommer vara mest hetast under 2025? <br>
                          Baserat på statestiken kommer vi att lyfta fram de Djs som imponerade under 2024 och som vi tror kommer gå starkt in i 2025`
  textContainer2025.append(text2025_0)

  let h22025_1 = document.createElement("h2")
  h22025_1.id = "h22025_1"
  h22025_1.classList.add("h2025")
  h22025_1.textContent = "Highest Attendance Month"
  textContainer2025.append(h22025_1)

  let text2025_1 = document.createElement("p")
  text2025_1.id = "text2025_1"
  text2025_1.innerHTML = `DJ Thor hade en fantastisk Oktober 2024 där han samanlagt spelade inför 5835 personer, otroligt! <br>
                          Se up för DJ Thor halloween 2025 då det är då han brukar köra sina dödligaste gigs!`
  textContainer2025.append(text2025_1)

  let h22025_2 = document.createElement("h2")
  h22025_2.id = "h22025_2"
  h22025_2.classList.add("h2025")
  h22025_2.textContent = "Average Attendance Per Gig"
  textContainer2025.append(h22025_2)

  let text2025_2 = document.createElement("p")
  text2025_2.id = "text2025_2"
  text2025_2.innerHTML = `DJ JeyJey hade en publik på 442 i medelsnitt under 2024. Om man räknar med alla hans gigs är det tydligt att han är en av de mäst populäraste DJs!<br>
                          Han är en av de mest eftersökta DJs var han än spelar. Boka biljetter till hans gig snabbt innan de försvinner!`
  textContainer2025.append(text2025_2)

  let h22025_3 = document.createElement("h2")
  h22025_3.id = "h22025_3"
  h22025_3.classList.add("h2025")
  h22025_3.textContent = "Total Attendance"
  textContainer2025.append(h22025_3)

  let text2025_3 = document.createElement("p")
  text2025_3.id = "text2025_3"
  text2025_3.innerHTML = `DJ Thor är tillbaka! Han hade även den högsta totala publiksiffran om man räknar med alla gigs med 47 688 personer!. <br>
                          Se upp för Dj Thor i 2025 där han kan nå ännu högre siffror!`
  textContainer2025.append(text2025_3)

  let h22025_4 = document.createElement("h2")
  h22025_4.id = "h22025_4"
  h22025_4.classList.add("h2025")
  h22025_4.textContent = "Total Gigs"
  textContainer2025.append(h22025_4)

  let text2025_4 = document.createElement("p")
  text2025_4.id = "text2025_4"
  text2025_4.innerHTML = `Gissa vem? DJ Thor igen! Han spelade totalt 110 gig 2024, vilken grinder! <br>
                          Det är tydligt att alla gig vill boka DJ Thor, han drar många besökare och vi ser inte det ändras 2025.`
  textContainer2025.append(text2025_4)

  let h22025_5 = document.createElement("h2")
  h22025_5.id = "h22025_5"
  h22025_5.classList.add("h2025")
  h22025_5.textContent = "Highest Earnings Month"
  textContainer2025.append(h22025_5)

  let text2025_5 = document.createElement("p")
  text2025_5.id = "text2025_5"
  text2025_5.innerHTML = `DJ Drix hade den högst tjänade månaden 2024. Hon tjänade 589 146kr i Juni, mäktigt! <br>
                          Se up för DJ Drix merch och gigs under 2025, de lär bli rykande hetta!`
  textContainer2025.append(text2025_5)

   let h22025_6 = document.createElement("h2")
  h22025_6.id = "h22025_6"
  h22025_6.classList.add("h2025")
  h22025_6.textContent = "Average Earnings Gig"
  textContainer2025.append(h22025_6)

  let text2025_6 = document.createElement("p")
  text2025_6.id = "text2025_6"
  text2025_6.innerHTML = `DJ Truth hade hösta summan tjänad i medelsnitt på alla hans gig. Han fick ihop 45 644kr, wow! <br>
                          När DJ Truth är i stan så öppnas plånböckerna och vi ser inte det sakta ner under 2025.`
  textContainer2025.append(text2025_6)

  let h22025_7 = document.createElement("h2")
  h22025_7.id = "h22025_7"
  h22025_7.classList.add("h2025")
  h22025_7.textContent = "Total Earnings"
  textContainer2025.append(h22025_7)

  let text2025_7 = document.createElement("p")
  text2025_7.id = "text2025_7"
  text2025_7.innerHTML = `Det är DJ Thor här på listan igen och det borde inte chocka någon. <br>
                          Under 2024 tjänade han 4 296 545kr. Han är på sin egen nivå och ingen kan stoppa honom!`
  textContainer2025.append(text2025_7)

  let h22025_8 = document.createElement("h2")
  h22025_8.id = "h22025_8"
  h22025_8.classList.add("h2025")
  h22025_8.textContent = "Highest average attendance rate month"
  textContainer2025.append(h22025_8)


  let text2025_8 = document.createElement("p")
  text2025_8.id = "text2025_8"
  text2025_8.innerHTML = `DJ Yoman hade den bästa besökningsfrekvens månaden 2024. Under Juni drog han sammanlagt 158% av befolkningen från staden till sitt gig totalt, sjukt! <br>
                          När staden och stunden är rätt så kan ingen annan DJ som DJ Yoman dra besökare från hela världen, många kommer att vilja se han 2025!`
  textContainer2025.append(text2025_8)

  let h22025_9 = document.createElement("h2")
  h22025_9.id = "h22025_9"
  h22025_9.classList.add("h2025")
  h22025_9.textContent = "Highest average yearly rate"
  textContainer2025.append(h22025_9)

  let text2025_9 = document.createElement("p")
  text2025_9.id = "text2025_9"
  text2025_9.innerHTML = `DJ Sonic, Moon, Wave och JeyJey hade alla en besökningsfrekvens på 123% totalt för 2024, mr worldwide! <br>
                          När de spelar så drar de folk utanför staden bara för att se dem, de är stora favoriter!`
  textContainer2025.append(text2025_9)

  let h22025_10 = document.createElement("h2")
  h22025_10.id = "h22025_10"
  h22025_10.classList.add("h2025")
  h22025_10.textContent = "Hottest 2025?"
  textContainer2025.append(h22025_10)

  let text2025_10 = document.createElement("p")
  text2025_10.id = "text2025_10"
  text2025_10.innerHTML = `Om vi skulle förutspå bara 1 DJ för att vara mest populär 2025 så måste vi välja DJ Thor. <br>
                           Bästa månaden, högsta totala publiken, mest gigs, hösta totala inkomsten, alla dessa utmärkelser under 2024. <br>
                           Han är verkligen "On Top of The World" just nu, och vi ser inte att han saktar ner inför 2025!`
  textContainer2025.append(text2025_10)


}

function removeText() 
{
    let textContainer = document.querySelector("#textContainer")
    textContainer.remove()
    let textContainer2025 = document.querySelector("#textContainer2025")
    if (textContainer2025) {
      textContainer2025.remove()
    }
}