self.onmessage = function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'start':
      self.postMessage('Worker gestartet: ' + data.msg);
      break;
    case 'stop':
      self.postMessage('Worker gestoppt: ' + data.msg + ' (Buttons funktionieren nicht mehr)');
      self.close(); // Beendet den Worker.
      break;
    default:
      self.postMessage('Unbekannter Befehl: ' + data.msg);
  };
};