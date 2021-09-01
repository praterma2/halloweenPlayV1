function whl1ForLED() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=on1");
  }

  function whl1ForLEDOff() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=off1");
  }

  function whl2ForLED() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=on2");
  }

  function whl2ForLEDOff() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=off2");
  }

  function whl1RevLED() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=on3");
  }

  function whl1RevLEDOff() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=off3");
  }

  function whl2RevLED() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=on4");
  }

  function whl2RevLEDOff() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=off4");
  }

  function turnOnLED5() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=on5");
  }

  function turnOffLED5() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=off5");
  }

  function crazy() {
    
  }

  function allStop() {
    whl1ForLEDOff();
    whl2ForLEDOff();
    whl1RevLEDOff();
    whl2RevLEDOff();
  }