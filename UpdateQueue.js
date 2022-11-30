let UpdateQueue = class {
  #inner = {};

  // PUBLIC FNS
  isEmpty () {
    return (Object.keys(this.#inner).length == 0);
  }

  contains (key) {
    return (typeof this.#inner[key] != 'undefined');
  }

  add (fn, interval) {
    if (typeof fn != 'function') {
      throw new Error('Invalid first argument');
    }

    if (this.#contains(fn.name)) {
      throw new Error(`Function with name ${fn.name} is already scheduled`);
    }

    if (typeof interval != 'undefined') { // If no interval is given, default to 100 ms
      console.warn(`Cannot use interval value ${interval}, defaulting to 100ms`);
      interval = 100;
    }

    let data = new this.#data_ctor(fn, interval);
    this.#inner[fn.name] = data;
    return data;
  }

  remove (fn) {
    let key = (typeof fn == 'function' ? fn.name : fn);
    delete this.#inner[key];
  }

  #data_ctor (fn, i) {
    this.func = fn;
    this.interval = i;
    this.last_run = 0;
  }

}