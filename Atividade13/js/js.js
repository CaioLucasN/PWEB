function altCase() {
  var chkMai = document.getElementById('checkMaiusculo');
  var chkMin = document.getElementById('checkMinusculo');

  if(chkMai.checked){
    document.getElementById('texto').value = document.forms.form1.elements.texto.value.toUpperCase();
  }
  if(chkMin.checked){
    document.getElementById('texto').value = document.forms.form1.elements.texto.value.toLowerCase();
  }

}
