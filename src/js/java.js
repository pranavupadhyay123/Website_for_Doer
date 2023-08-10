const cardControllers = document.querySelectorAll("[data-card-controller]");

cardControllers.forEach((controller) => {
  controller.addEventListener("click", (e) => {
    const card = e.currentTarget.parentElement.parentElement;
    const isVisible = card.dataset.visible;

    if (isVisible === "false") {
      card.setAttribute("data-visible", true);
    } else {
      card.setAttribute("data-visible", false);
    }
  });
});

//chatbot

jQuery(document).ready(function ($) {
  jQuery(document).on("click", ".iconInner", function (e) {
    jQuery(this).parents(".botIcon").addClass("showBotSubject");
    $("[name='msg']").focus();
  });

  jQuery(document).on("click", ".closeBtn, .chat_close_icon", function (e) {
    jQuery(this).parents(".botIcon").removeClass("showBotSubject");
    jQuery(this).parents(".botIcon").removeClass("showMessenger");
  });

  jQuery(document).on("submit", "#botSubject", function (e) {
    e.preventDefault();

    jQuery(this).parents(".botIcon").removeClass("showBotSubject");
    jQuery(this).parents(".botIcon").addClass("showMessenger");
  });

  /* Chatboat Code */
  $(document).on("submit", "#messenger", function (e) {
    e.preventDefault();

    var val = $("[name=msg]").val().toLowerCase();
    var mainval = $("[name=msg]").val();
    name = "";
    nowtime = new Date();
    nowhoue = nowtime.getHours();

    function userMsg(msg) {
      $(".Messages_list").append(
        '<div class="msg user"><span class="avtr"><figure style="background-image: url(https://mrseankumar25.github.io/Sandeep-Kumar-Frontend-Developer-UI-Specialist/images/avatar.png)"></figure></span><span class="responsText">' +
          mainval +
          "</span></div>"
      );
    }
    function appendMsg(msg) {
      $(".Messages_list").append(
        '<div class="msg"><span class="avtr"><figure style="background-image: url(https://mrseankumar25.github.io/Sandeep-Kumar-Frontend-Developer-UI-Specialist/images/avatar.png)"></figure></span><span class="responsText">' +
          msg +
          "</span></div>"
      );
      $("[name='msg']").val("");
    }

    userMsg(mainval);
    if (
      val.indexOf("hello") > -1 ||
      val.indexOf("hi") > -1 ||
      val.indexOf("good morning") > -1 ||
      val.indexOf("good afternoon") > -1 ||
      val.indexOf("good evening") > -1 ||
      val.indexOf("good night") > -1
    ) {
      if (nowhoue >= 12 && nowhoue <= 16) {
        appendMsg("good afternoon");
      } else if (nowhoue >= 10 && nowhoue <= 12) {
        appendMsg("hi");
      } else if (nowhoue >= 0 && nowhoue <= 10) {
        appendMsg("good morning");
      } else {
        appendMsg("good evening");
      }

      appendMsg("what's you name?");
    } else if (val.indexOf("what is") > -1) {
      if (val.indexOf("doer") > -1 || val.indexOf("startup") > -1) {
        appendMsg("Doer is a company that provides guidance, resources, and marketing support to new entrepreneurs and startups to help them grow their businesses");
        appendMsg("is it helpful? (yes/no)");
      } else if (val.indexOf("seedfund") > -1 || val.indexOf("public funding") > -1) {
        appendMsg("Long story short, Seed funding is the initial capital provided to startups to fuel their early-stage development and growth.");
        appendMsg("is it helpful? (yes/no)");
      } else {
        appendMsg(
          "sorry, i'm not able to get you point, please ask something else."
        );
      }
    } else if (val.indexOf("yes") > -1) {
      var nowtime = new Date();
      var nowhoue = nowtime.getHours();
      appendMsg("it's my pleaser that i can help you");

      saybye();
    } else if (val.indexOf("no") > -1) {
      var nowtime = new Date();
      var nowhoue = nowtime.getHours();
      appendMsg("it's my bad that i can't able to help you. please try later");

      saybye();
    } else if (
      val.indexOf("my name is ") > -1 ||
      val.indexOf("i am ") > -1 ||
      val.indexOf("i'm ") > -1 ||
      val.split(" ").length < 2
    ) {
      /*|| mainval != ""*/
      // var name = "";
      if (val.indexOf("my name is") > -1) {
        name = val.replace("my name is", "");
      } else if (val.indexOf("i am") > -1) {
        name = val.replace("i am", "");
      } else if (val.indexOf("i'm") > -1) {
        name = val.replace("i'm", "");
      } else {
        name = mainval;
      }

      // appendMsg("hi " + name + ", how can i help you?");
      appendMsg("hi " + name + ", how can i help you?");
    } else {
      appendMsg("sorry i'm not able to understand what do you want to say");
    }

    function saybye() {
      if (nowhoue <= 10) {
        appendMsg(" have nice day! :)");
      } else if (nowhoue >= 11 || nowhoue <= 20) {
        appendMsg(" bye!");
      } else {
        appendMsg(" good night!");
      }
    }

    var lastMsg = $(".Messages_list").find(".msg").last().offset().top;
    $(".Messages").animate({ scrollTop: lastMsg }, "slow");
  });
  /* Chatboat Code */
});
