const count = document.getElementById("count");
const head = document.getElementById("head");
const giftbox = document.getElementById("merrywrap");

const config = {
  birthdate: "AUGUST 10, 2023",
  name: "TEAMODORO BABY ❤️",
};

function hideEverything() {
  head.style.display = "none";
  count.style.display = "none";
  giftbox.style.display = "none";
}

hideEverything();

const confettiSettings = { target: "confetti" };
const confetti = new window.ConfettiGenerator(confettiSettings);
confetti.render();

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date(`${config.birthdate} 00:00:00`).getTime();
x = setInterval(function () {
  let now = new Date().getTime(),
    distance = countDown - now;

  document.getElementById("day").innerText = Math.floor(distance / day);
  document.getElementById("hour").innerText = Math.floor(
    (distance % day) / hour
  );
  document.getElementById("minute").innerText = Math.floor(
    (distance % hour) / minute
  );
  document.getElementById("second").innerText = Math.floor(
    (distance % minute) / second
  );

  if (distance > 0) {
    head.style.display = "initial";
    count.style.display = "initial";
  } else {
    head.style.display = "none";
    count.style.display = "none";
    giftbox.style.display = "initial";
    clearInterval(x);
    let merrywrap = document.getElementById("merrywrap");
    let box = merrywrap.getElementsByClassName("giftbox")[0];
    let step = 1;
    let stepMinutes = [2000, 2000, 1000, 1000];

    function init() {
      box.addEventListener("click", openBox, false);
      box.addEventListener("click", showfireworks, false);
    }

    function stepClass(step) {
      merrywrap.className = "merrywrap";
      merrywrap.className = "merrywrap step-" + step;
    }

    function openBox() {
      if (step === 1) {
        box.removeEventListener("click", openBox, false);
      }
      stepClass(step);
      if (step === 4) {
        return;
      }
      setTimeout(openBox, stepMinutes[step - 1]);
      step++;
    }

    function showfireworks() {
      setTimeout(() => {
        window.location.href = "https://angelorubio.github.io/Dayana_git/Collague.html";
      }, 5200);
    }

    init();
  }
}, second);