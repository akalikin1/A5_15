const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
  $.getJSON(dataURL, handleData);
}

function handleData(data) {

  const var1 = $("input[name=var1]")[0].value
  const var2 = $("input[name=var2]")[0].value
  const var3 = $("input[name=var3]")[0].value
  const var4 = $("input[name=var4]")[0].value
  const var5 = $("input[name=var5]")[0].value
  const var6 = $("input[name=var6]")[0].value
  const speach = $("input[name=speach]")[0].value

  // надо сделать так чтобы сообщения подменились на значения из формы
  let maintext = ""

  data["text"].forEach(function(var_replace) {
  
    var_replace = var_replace.replace("{var1}", var1).replace("{var2}", var2).replace("{var3}", var3).replace("{var4}", var4).replace("{var5}", var5).replace("{var6}", var6).replace("{speach}", speach);
  
    maintext = maintext + var_replace + "<BR>"
		});
  
  $("#result").html(maintext);
  
  }

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
