const ref = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class Timer {
  constructor(stopDate) {
    this.stopDate = stopDate;
    this.deltaTime = 0;
    this.interval = "";
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }

  updateClock(time) {
    ref.days.textContent = this.pad(Math.floor(time / 1000 / 60 / 60 / 24));
    ref.hours.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    ref.mins.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    ref.secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }

  start() {
    let currentTime = Date.now();
    this.deltaTime = Date.parse(this.stopDate) - currentTime;
    this.updateClock(this.deltaTime);

    this.interval = setInterval(() => {
      let currentTime = Date.now();
      this.deltaTime = Date.parse(this.stopDate) - currentTime;
      this.updateClock(this.deltaTime);
    }, 1000);
  }
}

const timer = new Timer("Oct 31, 2020");
timer.start();
