$(document).ready(function(){
    $("#dropFiles").on('dragenter', function(ev) {
        $("#dropFiles").addClass("highlightDropArea");
    });
    
    $("#dropFiles").on('dragleave', function(ev) {
      $("#dropFiles").removeClass("highlightDropArea");
    });
    
    $("#dropFiles").on('drop', function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      $("#messages").empty();
      if(ev.originalEvent.dataTransfer){
        if(ev.originalEvent.dataTransfer.files.length) {
          var droppedFiles = ev.originalEvent.dataTransfer.files;
          for(var i = 0; i < droppedFiles.length; i++)
          {
            console.log(droppedFiles[i]);
            $("#messages").append("<br/> <b>Dropped File: </b>"+ droppedFiles[i].name);
          }
        }
      }
  
      $("#dropFiles").removeClass("highlightDropArea");
      return false;
    });
    
    $("#dropFiles").on('dragover', function(ev) {
        ev.preventDefault();
    });
  })