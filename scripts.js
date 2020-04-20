var imagesData = [
  {
    photo: "./images/basketball.jpg",
    title: "Basketball",
    description:
      "Basketball is a game in which two teams of five players each try to score goals by throwing a large ball through a circular net fixed to a metal ring at each end of the court.",
  },
  {
    photo: "./images/football.jpg",
    title: "Football",
    description:
      "Football is a game played by two teams of eleven players using a round ball. Players kick the ball to each other and try to score goals by kicking the ball into a large net.",
  },
  {
    photo: "./images/ice-hockey.jpg",
    title: "Ice hockey",
    description:
      "Ice hockey is a game played on ice between two teams of 11 players who use long curved sticks to hit a small rubber disk, called a puck, and try to score goals.",
  },
  {
    photo: "./images/rugby.jpg",
    title: "Rugby",
    description:
      "Rugby or rugby football is a game played by two teams using an oval ball. Players try to score points by carrying the ball to their opponents' end of the field, or by kicking it over a bar fixed between two posts.",
  },
  {
    photo: "./images/skiing.jpg",
    title: "Skiing",
    description: "When people ski, they move over snow or water on skis.",
  },
  {
    photo: "./images/swimming.jpg",
    title: "Swimming",
    description:
      "Swimming is the activity of swimming, especially as a sport or for pleasure.",
  },
  {
    photo: "./images/tennis.jpg",
    title: "Tennis",
    description:
      "Tennis is a game played by two or four players on a rectangular court. The players use an oval racket with strings across it to hit a ball over a net across the middle of the court.",
  },
  {
    photo: "./images/volleyball.jpg",
    title: "Volleyball",
    description:
      "Volleyball is a game in which two teams hit a large ball with their hands backwards and forwards over a high net. If you allow the ball to touch the ground, the other team wins a point.",
  },
];

// first picture as default
var currentPhoto = 0;
displayPhoto(imagesData[currentPhoto]);

//user clicked on the left arrow
$(".arrow-l").click(function () {
  currentPhoto = currentPhoto - 1;
  if (currentPhoto === -1) {
    currentPhoto = 7;
  }
  displayPhoto(imagesData[currentPhoto]);
});

//user clicked on the right arrow
$(".arrow-r").click(function () {
  currentPhoto = currentPhoto + 1;
  if (currentPhoto === 8) {
    currentPhoto = 0;
  }
  displayPhoto(imagesData[currentPhoto]);
});

// function for displaying main picture
function displayPhoto(element) {
  console.log(currentPhoto);
  $("#photo").attr("src", element.photo);
  $("#photo-title").text(element.title);
  $("#photo-description").text(element.description);
}
