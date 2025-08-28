function NightDayHandler(btn) {
  const bodyStyle = document.body.style;
  const h1LinkStyle = document.querySelector("h1 a").style;
  const articleElems = document.querySelectorAll("#ARTICLE, #ARTICLE *");
  const menuLinks = document.querySelectorAll("#grid ol a");

  var Body = {
    BackGroundColor: function (color) {
      bodyStyle.backgroundColor = color;
    },
    Color: function (color) {
      bodyStyle.color = color;
    },
  };

  var Link = {
    Color: function (color) {
      h1LinkStyle.color = color;
    },
  };

  var Article = {
    Color: function (color) {
      articleElems.forEach((el) => (el.style.color = color));
    },
  };

  var MenuLink = {
    Color: function (color) {
      menuLinks.forEach((el) => (el.style.color = color));
    },
  };

  var Status = {
    set: function (time) {
      btn.value = time;
    },
  };

  if (btn.value === "night") {
    Body.BackGroundColor("black");
    Body.Color("white");
    Link.Color("white");
    Article.Color("white");
    MenuLink.Color("white");
    Status.set("day");
  } else {
    Body.BackGroundColor("white");
    Body.Color("black");
    Link.Color("black");
    Article.Color("black");
    MenuLink.Color("black");
    Status.set("night");
  }
}
