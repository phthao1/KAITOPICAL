$(document).ready(function () {
    $("#postButton").click(function () {
      var postContent = $("#message").val();
      console.log("Posted content: " + postContent);

      // Here you can send the post content to your server or perform any other actions
      // For now, let's just clear the textarea
      $("#message").val('');
   });
});

