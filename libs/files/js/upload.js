  function _(el) {
  return document.getElementById(el);
}

function uploadFile() {
  var file = _("userfile").files[0];
  var formdata = new FormData();
  formdata.append("userfile", file);
  var ajax = new XMLHttpRequest();
  ajax.upload.addEventListener("progress", progressHandler, false);
  ajax.open("POST", "");
  ajax.send(formdata);
}

function progressHandler(event) {
  _("uploadstatus").innerHTML = "Uploaded " + event.loaded + " bytes of " + event.total;
  var percent = (event.loaded / event.total) * 100;
  _("progressBar").value = Math.round(percent);
}