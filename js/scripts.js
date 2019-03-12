// Business Logic
var numberArray = [];
//create loop counter down to 1
var counter = 1;
for (var i = n; i === 1; i--) {
  counter = counter - i;
}

var pingPongResult = function(pingpong) {
  if (pingpong % 15 === 0) {
    return ;
  } else if (pingpong % 3 === 0) {
    return ;
  } else if (pingpong % 5 === 0) {
    return ;
  } else {
    return pingpong;
  }
};

// User Logic
$(document).ready(function() {
  $("form#number-entry").submit(function(event) {
    event.preventDefault();
    var n = parseInt($("input#value").val());
    console.log("user input", n);
    var result = factorialsResult(n);
    console.log("function result", result);
    // $(".year").text(year);
    //
    // if (!result) {    // same as writing if (result ==== false)
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }


    $("#result").text(result);
    console.log(result);
  });
});
