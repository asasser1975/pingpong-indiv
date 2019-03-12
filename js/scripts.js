// Business Logic
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
