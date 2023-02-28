//display current day
$(document).ready(function() {
    var currentDay = dayjs().format("dddd, MMMM D, YYYY");
    $("#currentDay").text(currentDay);
});

// color-code the time blocks to indicate past, present, or future
var currentTime = dayjs().hour();
$(".time-block").each(function() {
  var hour = parseInt($(this).attr("id").split("-")[1]);
  if (hour < currentTime) {
    $(this).addClass("past");
  } else if (hour === currentTime) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

// save time block content in local storage with the save button
$(".saveBtn").on("click", function() {
  var id = $(this).parent().attr("id");
  var data = $(this).siblings(".description").val();
  localStorage.setItem(id, data);
});

// saved events remain on the page when refreshed
$(".time-block").each(function() {
  var id = $(this).attr("id");
  var data = localStorage.getItem(id);
  $(this).children(".description").val(data);
});
