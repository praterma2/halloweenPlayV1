function turnOnLED1() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/290037001347393334363636/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=onA");
  }

  function turnOffLED1() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/290037001347393334363636/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=offA");
  }

  function turnOnLED2() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/3e0024000c47393334363636/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=onB");
  }

  function turnOffLED2() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/3e0024000c47393334363636/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=offB");
  }

  function turnOnLED3() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/3e0024000c47393334363636/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=onC");
  }

  function turnOffLED3() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/3e0024000c47393334363636/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=offC");
  }

  function turnOnLED4() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/3e0024000c47393334363636/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=onD");
  }

  function turnOffLED4() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/3e0024000c47393334363636/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=offD");
  }

 

  function crazy() {
    
  }

  function allOn() {
    turnOnLED1();
    turnOnLED2();
    turnOnLED3();
    turnOnLED4();
    turnOnLED4();
  }