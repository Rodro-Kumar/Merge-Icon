const share = document.querySelector(".share");
const facebook = document.querySelector(".facebook");
const share2 = document.querySelector(".share-2");
const instragram = document.querySelector(".instragram");
const linkdin = document.querySelector(".linkdin");
const twitter = document.querySelector(".twitter");
const github = document.querySelector(".github");
console.log(share2);

share.addEventListener("click", function () {
  share2.style.opacity = "1";
  share.style.opacity = "0";
  facebook.classList.toggle("facebok_active");
  instragram.classList.toggle("instragram_active");
  linkdin.classList.toggle("linkdin_active");
  twitter.classList.toggle("twitter_active");
  github.classList.toggle("github_active");
  share.classList.toggle("share_active");
});

share2.addEventListener("click", function () {
  share2.style.opacity = "0";
  share.style.opacity = "1";
});
