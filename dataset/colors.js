const neonColors = [
  "#39ff14", "#1EA300",       // Neon green
  "#8F001D", "#ff0840",       // Neon red-pink
  "#ff6ec7", "#EB47AC",       // Neon pink
  "#ffff33", "#A0A003",       // Neon yellow
  "#00ffff", "#00A3A3",       // Cyan
  "#003A3D", "#ADFFFF",       // Baby blue
  "#ff1493", "#092638",       // Deep pink
  "#ff00ff", "#ffffff",       // Magenta
  "#FF7847", "#ff4800",       // Orange-red
  "#adff2f", "#CCFF00",       // Green-yellow
  "#ADCC00", "#EFFE9A",       // Lime yellow
  "#ffb6c1", "#3a030b",       // Light pink
  "#6b5f65", "#270817",       // Hot pink
  "#668F00", "#FFD21F",       // Bright gold
  "#ff6347", "#FF8A70",       // Tomato
  "#00A383", "#00ffcf",       // Aqua green
  "#ee82ee", "#FFADFF",       // Violet
  "#CCA300"                   // Chartreuse
];

const djColorArray = []

for (let i = 0; i < DJs.length; i++) {
    djColorArray.push({
        id: DJs[i].id,
        color: neonColors[i]
    })
    
}
