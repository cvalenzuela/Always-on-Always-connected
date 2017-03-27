var accelerometer = {
  service: "F000AA10-0451-4000-B000-000000000000",
  data: "F000AA11-0451-4000-B000-000000000000", // read/notify 3 bytes X : Y : Z
  configuration: "F000AA12-0451-4000-B000-000000000000", // read/write 1 byte
  period: "F000AA13-0451-4000-B000-000000000000" // read/write 1 byte Period = [Input*10]ms
};

var peripheralId = null;
var previous_y_val = 10;

function onPageLoad() {
  document.addEventListener("deviceready", onDeviceReady, false);
  console.log('page ready')
}

function onDeviceReady() {
  console.log('listening to devices!')
  ble.scan([], 10, scanSuccess, scanFailure);
}

function scanSuccess(peripheral) {
  console.log(peripheral);
  //document.body.innerHTML = document.innerHTML + peripheral.name;

  if (peripheral.name == "TI BLE Sensor Tag") {
    ble.stopScan(stopScanSuccess, stopScanFailure);
    console.log(peripheral);
    console.log("Connecting");
    ble.connect(peripheral.id, connectSuccess, connectFailure);
  }
}

function scanFailure(err) {
  console.log(err);
}

function stopScanSuccess() {
  console.log("Stop Scan Success");
}

function stopScanFailure() {
  console.log("Stop Scan Failure");
}

function connectSuccess(peripheral) {
  console.log("Connected");
  console.log(peripheral);

  peripheralId = peripheral.id;
  //console.log(foundPeripheral);

  //Turn the accelerometer on
  var configData = new Uint8Array(1);
  configData[0] = 0x01;
  ble.write(peripheral.id, accelerometer.service, accelerometer.configuration, configData.buffer,
    function() { console.log("Started accelerometer."); },function() { console.log("Start accelerometer error");});

    // Do a read
    ble.read(peripheral.id, accelerometer.service, accelerometer.data, readSuccess, readFailure);

    // We want to be notified
    ble.startNotification(peripheral.id, accelerometer.service, accelerometer.data, notifySuccess, notifyError);

  }

  function connectFailure() {
    console.log("Connection Failed");
  }


  function readSuccess(data) {
    //console.log(data)
    var a = new Uint8Array(data);

    var message = "X: " + a[0]/64 + "<br/>" +
    "Y: " + a[1]/64 + "<br/>" +
    "Z: " + a[2]/64 * -1;

    console.log('------------')
    // console.log('X: ' + a[0]/64)
    // console.log('Y: ' + a[1]/64)
    // console.log('Z: ' + a[2]/64)
    //document.body.innerHTML = message;

    setTimeout(readAccel, 200);
    var y_value =  parseInt(map_range(a[1]/64, 3, 4.0, 0, synthNotes.length));
    y_value = Math.min(Math.max(parseInt(y_value), 0), synthNotes.length);

    console.log(a[1]/64 + ' to: ' + y_value);
    console.log('previous: ' + previous_y_val);

    if(y_value !== previous_y_val){
      console.log('Value has changed!')
      synth.triggerRelease();
      synth.triggerAttack(synthNotes[y_value]);
    }
    else{
      console.log('The value is the same')
      synth.triggerRelease();
    }
    previous_y_val = y_value;

  }

  function readAccel() {
    ble.read(peripheralId, accelerometer.service, accelerometer.data, readSuccess, readFailure);
  }

  function readFailure(err) {
    console.log(err);
  }

  function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function notifySuccess(data) {
    //console.log(data)
    var a = new Uint8Array(data);

    var message = "X: " + a[0]/64 + "<br/>" +
    "Y: " + a[1]/64 + "<br/>" +
    "Z: " + a[2]/64 * -1;


    //document.body.innerHTML = message;
  }

  function notifyError(err) {
    console.log(err);
  }
