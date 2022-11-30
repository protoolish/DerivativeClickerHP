let HPDCScripts = class {
  ticks = 0;
  load_time;
  

  constructor () {
    this.load_time = new Date();
  }

  update() {
    
  }
}

() => {
  if (window.TMoney) {
    clearInterval(window.TMoney);
    window.TMoney = undefined;
  } else {
    window.TMoney = setInterval(()=>{
      document.getElementById("moneyButton").click();
    }, 100);
  }
}

// Main clock for the scripts
var update = function () {
  // CHECK MEMBERS ARE INITIALISED
  // count : keeps track of cycles
  if (typeof update.count == 'undefined') {
    update.count = 0;
  }

  // load_time : keeps track of time loaded
  if (typeof update.start_time == 'undefined') {
    update.load_time = new Date();
  
  
}