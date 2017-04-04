// Control a servo motor with cordova

var connectedDevice = null;
var data = new Uint8Array(1);
data[0] = 1;

var button = {
  service: "19B10010-E8F2-537E-4F6C-D104768A1214",
  data: "19B10012-E8F2-537E-4F6C-D104768A1214",
  led: "19B10011-E8F2-537E-4F6C-D104768A1214"
};

function init() {
  var connectButton = document.getElementById('connect');
  var moveMotor = document.getElementById('motor');
  connectButton.addEventListener('click', runScan);
  moveMotor.addEventListener('click', move);
}

function runScan() {
  console.log("Really, Running Scan");
  ble.scan([], 20, foundDevice, failure);
}

function failure(err) {
  console.log(err);
}

function move(){
  ble.write(connectedDevice.id, button.service, button.led, data.buffer, doorbellPressed, failure);
  
  if (data[0] == 1){
    data[0] = 0
  }
  else{
    data[0] = 1
  }

}

function foundDevice(device) {
  console.log("Found: " + device.name);

  if (device.name && device.name.match(/ARDUINO 101-A45C/i) != null) {
    ble.stopScan(function() {
      console.log("Stopped Scanning");
    }, failure);

    connectedDevice = device;

    ble.connect(device.id, connectSuccess, failure);
  }
}

function connectSuccess() {
  ble.startNotification(connectedDevice.id, button.service, button.data, doorbellPressed, failure);
  //ble.write(connectedDevice.id, button.service, button.led, data.buffer, doorbellPressed, failure);
}

function doorbellPressed() {
  console.log("Someone's At the Door");
}


window.addEventListener('load', init);
