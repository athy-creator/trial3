const countdown = document.getElementById("countdown");
const rocket = document.getElementById("rocket");
const text = document.getElementById("text");
const lights = document.getElementById("lights");
const letters = document.querySelectorAll(".light");
const envelopeSection = document.getElementById("envelope-section");
const envelope = document.getElementById("envelope");
const letterBox = document.getElementById("letter");
const choice = document.getElementById("choice");
const upsideMsg = document.getElementById("upside-message");
const reply = document.getElementById("reply");

let count = 3;

/* START */
function start() {
  countdown.textContent = count;
  const i = setInterval(() => {
    count--;
    countdown.textContent = count;
    if (count === 0) {
      clearInterval(i);
      countdown.textContent = "";
      launch();
    }
  }, 1000);
}

/* ROCKET */
function launch() {
  rocket.style.opacity = 1;
  rocket.style.transition = "bottom 2s";
  rocket.style.bottom = "60%";
  setTimeout(greeting, 2200);
}

/* GREETING */
function greeting() {
  rocket.style.opacity = 0;
  type(`Happy New Year

This isn’t the end.
It’s the end of the beginning.`, signal);
}

/* SIGNAL */
function signal() {
  type(`…Can you hear me?

Before this year moves too fast,
there’s something I wanted to say.`, lightsOn);
}

/* LIGHTS */
function lightsOn() {
  lights.classList.remove("hidden");
  letters.forEach((l, i) => {
    setTimeout(() => l.classList.add("on"), 1000 + i * 300);
  });
  setTimeout(showEnvelope, 5500);
}

/* ENVELOPE */
function showEnvelope() {
  lights.classList.add("hidden");
  envelopeSection.classList.remove("hidden");
}

envelope.onclick = () => {
  envelope.classList.add("open");
  setTimeout(showLetter, 1200);
};

/* LETTER */
function showLetter() {
  envelopeSection.classList.add("hidden");

  const LETTER_TEXT = `
Hey Dumbo,

I know we didn’t start this year together, but I want to make sure I end this one—and every single one after—right by your side.

Even though we haven't spent a lifetime together yet, everything already feels so right. It feels like something I’ve been waiting for through every 'level' of my life.

There is still so much I want to learn about you, so many secrets to share, and so many experiences waiting for us in the 'Right Side Up.'

We still have a long list to check off:
our first real kiss,
that Harry Potter and Stranger Things marathon we promised,
and that perfect date we haven't had yet.

They say the 'Upside Down' is full of monsters,
but as long as I’m on your team,
I’m not afraid of anything.

You’re my favorite person to explore this world with.

So, let’s make 2026 our best chapter yet.
Friends don't lie,
and I'm never letting you go.

I love you, always.
`;

  type(LETTER_TEXT, () => {
    choice.classList.remove("hidden");
  }, letterBox);
}

/* YES / NO */
document.getElementById("yesBtn").onclick = () => {
  choice.classList.add("hidden");
  document.body.classList.add("upside");
  upsideMsg.classList.remove("hidden");
  setTimeout(() => reply.classList.remove("hidden"), 2000);
};

document.getElementById("noBtn").onclick = () => {
  choice.classList.add("hidden");
  reply.classList.remove("hidden");
};

/* TYPEWRITER */
function type(content, cb, target = text) {
  let i = 0;
  target.textContent = "";
  const t = setInterval(() => {
    target.textContent += content.charAt(i++);
    if (i >= content.length) {
      clearInterval(t);
      if (cb) cb();
    }
  }, 40);
}

start();
