const heartsContainer =
    document.querySelector(".hearts");


function createHeart() {

    const heart =
        document.createElement("span");

    heart.classList.add(
        "floating-heart"
    );

    heart.innerHTML = "♥️";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 15 + 10 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 6 + "s";

    heartsContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 11000);
}


setInterval(
    createHeart,
    1200
);


/* =========================
   CODE MESSAGE
========================= */

const progressBar =
    document.querySelector(
        ".progress-bar"
    );


const loadingText =
    document.querySelector(
        ".loading-text"
    );


const finalMessage =
    document.querySelector(
        "#finalMessage"
    );


const codeSection =
    document.querySelector(
        ".code-section"
    );


let started = false;


function startCodeAnimation() {

    if (started) {
        return;
    }

    started = true;

    let progress = 0;


    const loading =
        setInterval(() => {

            progress += 1;

            progressBar.style.width =
                progress + "%";


            loadingText.textContent =
                "Loading my heart... "
                + progress
                + "%";


            if (progress >= 100) {

                clearInterval(loading);


                loadingText.textContent =
                    "Message unlocked ❤️";


                setTimeout(() => {

                    finalMessage.classList.add(
                        "show"
                    );

                }, 700);

            }

        }, 30);
}


/* =========================
   START CODE WHEN VISIBLE
========================= */

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        startCodeAnimation();

                    }

                }
            );

        },
        {
            threshold: 0.35
        }
    );


observer.observe(
    codeSection
);


/* =========================
   BUTTON
========================= */

const startButton =
    document.querySelector(
        ".start-btn"
    );


startButton.addEventListener(
    "click",
    function () {

        document
            .querySelector("#message")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);