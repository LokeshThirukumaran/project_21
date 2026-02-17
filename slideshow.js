document.addEventListener("DOMContentLoaded", () => {

  const opening = document.getElementById("opening");
  const openingText = document.getElementById("openingText");
  const slideshow = document.getElementById("show");
  const slideImg = document.getElementById("slide");
  const letterSection = document.getElementById("letterSection");
  const letterBox = document.getElementById("letter");
  const loveBomb = document.getElementById("loveBomb");

  const music = document.getElementById("music");
  const heartbeat = document.getElementById("heartbeat");

  [opening, slideshow, letterSection, loveBomb].forEach(el => {
    el.style.opacity = 0;
    el.style.visibility = "hidden";
  });

  /* OPENING */

  const openingMessage =
`This isn’t just Valentine’s.
This isn’t just an anniversary.
This is a never ending love story
that will live on forever.`;

  let o = 0;
  opening.style.visibility = "visible";
  opening.style.opacity = 1;

  heartbeat.volume = 0.35;
  heartbeat.play().catch(()=>{});

  const openType = setInterval(() => {
    openingText.textContent += openingMessage[o++];
    if (o >= openingMessage.length) {
      clearInterval(openType);
      setTimeout(startSlideshow, 1800);
    }
  }, 70);

  /* SLIDESHOW */

  const images = [];
  for (let i = 1; i <= 40; i++) images.push(`images/pic${i}.jpeg`);

  let imgIndex = 0;

  function startSlideshow() {
    heartbeat.pause();
    opening.style.opacity = 0;

    setTimeout(() => {
      opening.style.visibility = "hidden";
      slideshow.style.visibility = "visible";
      slideshow.style.opacity = 1;

      music.volume = 0.9;
      music.play().catch(()=>{});

      slideImg.src = images[0];

      const interval = setInterval(() => {
        imgIndex++;
        if (imgIndex < images.length) {
          slideImg.classList.remove("fade-in");
          void slideImg.offsetWidth;
          slideImg.src = images[imgIndex];
          slideImg.classList.add("fade-in");
        } else {
          clearInterval(interval);
          setTimeout(startLoveLetter, 2200);
        }
      }, 4200); // ⬅ slower, romantic pacing
    }, 1400);
  }

  /* LOVE LETTER */

  function startLoveLetter() {
    slideshow.style.opacity = 0;

    setTimeout(() => {
      slideshow.style.visibility = "hidden";
      letterSection.style.visibility = "visible";
      letterSection.style.opacity = 1;

      const loveText =
`From: Putttttaaaaa

To: The girl who became my favorite place,
my Valentine, my love,
and my forever ❤️

Subject: Celebrating our love on the 21st,
yesterday, today, and all the days to come.

Hey Puttuuuu thangam ❤️,

From the very first day,
I never knew a person
could become a feeling.

You are my Valentine,
my love anniversary,
my safe place,
and my favorite memory.

Every smile of yours,
every little fight,
every silence —
I choose it all,
because it’s with you.

And remember…
my heart has always been yours.

Forever,
Ur Putttttaaaaa`;

      let i = 0;
      const typing = setInterval(() => {
        letterBox.textContent += loveText.charAt(i++);
        if (i >= loveText.length) {
          clearInterval(typing);
          setTimeout(showLoveBomb, 2600);
        }
      }, 50);

    }, 1500);
  }

  /* LOVE BOMB */

  function showLoveBomb() {
    letterSection.style.opacity = 0;

    setTimeout(() => {
      letterSection.style.visibility = "hidden";
      loveBomb.style.visibility = "visible";
      loveBomb.style.opacity = 1;
    }, 1800);
  }

});
