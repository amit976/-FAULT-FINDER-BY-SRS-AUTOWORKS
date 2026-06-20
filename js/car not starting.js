const questions = document.getElementById("question");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const video = document.getElementById("diagnosis-video");
const videoSource = document.getElementById("video-source");

yesBtn.addEventListener("click", (function() {
    questions.textContent = "there must be problem related to immobilizer system, fuel system, ignition system or engine got damaged. lets check one by one where the problem is.";
    videoSource.src = "../videos/immobilizer.mp4";
    video.load();
    video.play();
}));

noBtn.addEventListener("click", (function() {
    questions.textContent = "there must be problem related to battery, starter motor or wiring. lets check one by one where the problem is.";
    videoSource.src = "../videos/battery.mp4";
    video.load();
    video.play();
}));