const neonColors = [
  "#39ff14", "#41ff17",       // Neon green
  "#ff073a", "#ff0840",       // Neon red-pink
  "#ff6ec7", "#ee66b9",       // Neon pink
  "#ffff33", "#fbfb32",       // Neon yellow
  "#00ffff", "#00ffff",       // Cyan
  "#7df9ff", "#8affff",       // Baby blue
  "#ff1493", "#ff16a4",       // Deep pink
  "#ff00ff", "#ff00ff",       // Magenta
  "#ff4500", "#ff4800",       // Orange-red
  "#adff2f", "#c5ff36",       // Green-yellow
  "#daff01", "#d9fe01",       // Lime yellow
  "#ffb6c1", "#fbb3be",       // Light pink
  "#ff69b4", "#ff71c2",       // Hot pink
  "#ffcc00", "#fcca00",       // Bright gold
  "#ff6347", "#ff7151",       // Tomato
  "#00ffcc", "#00ffcf",       // Aqua green
  "#ee82ee", "#ff8cff",       // Violet
  "#ccff00"                   // Chartreuse
];

const djColorArray = []

for (let i = 0; i < DJs.length; i++) {
    djColorArray.push({
        id: DJs[i].id,
        color: neonColors[i]
    })
    
}
