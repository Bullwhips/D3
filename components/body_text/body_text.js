function attendancePerMonthText(left) {
  let textContainer = document.createElement("div")
  textContainer.id = "textContainer"
  left.append(textContainer)

  let text = document.createElement("p")
  text.id = "text"
  text.innerHTML = `Den här grafen visar "Attendance Per Month", altså mängden besökare en Dj drog totalt för varje månad i ett år! <br>
                      Varje DJ representeras av en linje.<br>
                      På X axlen visas månaderna och på Y axlen mänden besökare.<br>
                      När det kommer till frågan "Vilken DJ har varit mest populär?" så är mängden besökare nog den viktigaste statistiken att analysera.<br>
                      En populär DJ kommer att bli mer bokad samt dra mer publik`
  textContainer.append(text)
}