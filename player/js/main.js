function takemethere(timeIndex){
  playerInstance.seek(timeIndex);
}


function PopulateIndex(markerObj){
  // var objl = document.getElementById('listIndex');
  for (var i = 0; i < markerObj.length; i++) {
    var jobj = markerObj[i];
    var strl = '<li class="list-group-item"><a href="#" onclick="takemethere('+jobj['time']+')">'+ jobj['text']+'</a></li>';
    $('#listIndex').append(strl);
    // objl.appendChild(strl);
  }
}


$(document).ready(function functionName() {
  playerInstance = jwplayer("myplayer");
  playerInstance.setup({
      // file: "https://fsiautismteam2.blob.core.windows.net/testpublic/WIN_20180423_12_55_42_Pro.mp4",
      // file: "https://fsiautismteam2.blob.core.windows.net/testpublic/Azure API Management MSRFY18_TECH-CAD203.mp4",
      file: "https://scenario2storage.blob.core.windows.net/asset-7a3e5529-b2ec-4bc2-816e-bfe7e7942cad/Movie on 4-23-18 at 12.36 PM_540x360_AACAudio_1000.mp4?sv=2015-07-08&sr=c&si=5fc7a7c0-209e-4408-bf21-f3401e7b0f0b&sig=7OAt%2F5DX6iTYGJ1hLSoWgkutBY%2FiQu0z16sd3Ih75YA%3D&st=2018-04-23T18%3A28%3A52Z&se=2118-04-23T18%3A28%3A52Z",
      //mediaid: "xxxxYYYY",

  });



  // get the marker data
  var markerObj = [{time:"20",text:"Behaviour 1"},{time:"25",text:"Behaviour 2"},{time:"30",text:"Behaviour 3"}];
  PopulateIndex(markerObj);
});