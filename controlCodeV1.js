function turnOnLED1() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=on1");
  }

  function turnOffLED1() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=off1");
  }

  function turnOnLED2() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=on2");
  }

  function turnOffLED2() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=off2");
  }

  function turnOnLED3() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=on3");
  }

  function turnOffLED3() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=off3");
  }

  function turnOnLED4() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/led?access_token=d6590b20e52cc3463be7c8aeb2f351730baf775b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=on4");
  }

  function turnOffLED4() {
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

  function allOn() {
    turnOnLED1();
    turnOnLED2();
    turnOnLED3();
    turnOnLED4();
    turnOnLED4();
  }