function carregar() {
  var days = document.getElementById('days')
  var data = new Date() 
  var day = data.getDay()

  if (day === 0 || day === 6) {
    days.innerHTML = `Fechado`
  }
}