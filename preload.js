window.addEventListener('DOMContentLoaded', () => {

  const ipc = require('electron').ipcRenderer;

  document.getElementById('audiostart').addEventListener('click', () => {
      ipc.send('audiostart');
  });

  const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })