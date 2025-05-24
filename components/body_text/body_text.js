function attendancePerMonthText(left) {
  let textContainer = document.createElement("div")
  textContainer.innerHTML = ""
  textContainer.id = "textContainer"
  left.append(textContainer)

  let text = document.createElement("p")
  text.id = "text"
  text.innerHTML = `Den här grafen visar "Attendance Per Month", altså mängden besökare en Dj drog totalt för varje månad i ett år! <br>
                    Varje DJ representeras av en linje.<br>
                    På X axlen visas månaderna och på Y axlen mänden besökare.<br>
                    När det kommer till frågan "Vilken DJ har varit mest populär?" så är mängden besökare nog den viktigaste statistiken att analysera.<br>
                    En populär DJ kommer att bli mer bokad samt dra mer publik.`
  textContainer.append(text)
}

function earningsPerMonthText(left) {
  let textContainer = document.createElement("div")
  textContainer.id = "textContainer"
  left.append(textContainer)

  let text = document.createElement("p")
  text.id = "text"
  text.innerHTML = `Den här grafen visar "Earnings Per Month", altså mängden pengar en DJ tjänat totalt över ett år!<br>
                    Varje DJ representeras av en linje.<br>
                    På X axlen visas månaderna och på Y axlen den totala inkomsten i kr.<br>
                    När det kommer till frågan "Vilken DJ har varit mest populär?" Så är inkomst viktigare än man kanske tror.<br>
                    Man kanske tror att inkomst bara är från bokningsavgift och biljettpris, men det kan vara mycket mer.<br>
                    Inkomst kan även innefatta alla typer av merch och streaming förmåner,<br>
                    Så publik är inte allt. En DJ sälja mycket populär merch eller ha många spelningar på sinna bangers online.`
  textContainer.append(text)
}

function attendanceRateText(left) {
  let textContainer = document.createElement("div")
  textContainer.innerHTML = ""
  textContainer.id = "textContainer"
  left.append(textContainer)
    
  let text = document.createElement("p")
  text.id = "text"
  text.innerHTML = `Den här grafen visar "Attendance Rate", altså mängden besökare en Dj drog totalt för varje gig delat på stadens befolkning! <br>
  Varje månad representeras av en stapel.<br>
  På X axlen visas månaderna och på Y axlen besöksfrekvensen i procent.<br>
  När det kommer till frågan "Vilken DJ har varit mest populär?" så ger besöksfrekvensen viktig kontext. <br>
  DJ 1 kan ha samma mängd besökare som DJ 2. Men om besöksfrekvensen är högre tyder det på att DJ 1 drog en större del av befolkningen till sit gig och kanske till och med besökare utanför stadens befolkning.<br>
  En DJ som har stor besöksfrekvensen i stora städer som små är verkligen populär! `
  textContainer.append(text)
}

function fullDataText() {
  let textContainer = document.createElement("div")
  textContainer.innerHTML = ""
  textContainer.id = "textContainer"
  left.append(textContainer)
    
  let text = document.createElement("p")
  text.id = "text"
  text.innerHTML = `Den här grafen visar "Full Data", altså all data sammlat ifrån alla grafer! <br>
  Varje DJ representeras av en cirkel.<br>
  På X axlen visas besökande siffran och på Y axlen besöksfrekvensen i procent för hela året.<br>
  När det kommer till frågan "Vilken DJ har varit mest populär?" så ger den här grafen en helhets blik på frågan genom att visa datan från varjde graf.<br>
  Den här grafen gör det helt enkelt lättare att gemföra alla DJs på alla kriterier. `
  textContainer.append(text)
}
function removeText() {
    let textContainer = document.querySelector("#textContainer")
    textContainer.remove()
}