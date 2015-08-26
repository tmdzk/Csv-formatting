$(document).ready(function() {
function doStuff(data) {
    //Data is usable here
    // console.log(data);
    var countries = [];
    var states = [];
	for(var i in data){		
				if(countries.indexOf(data[i][0]) === -1 && i != 0){
					countries.push(data[i][0]);
					var countryId = data[i][0].replace(" ", "");
					var country = '\n<div id="first-retailers-list" class="retailers-list">\n<div  class="retailers-list-title-main" id="'+ countryId +'">\n<h3>\n'+ data[i][0] + '\n</div>\n</div>\n';
					$("#data").append(country);
				}
				if((states.indexOf(data[i][1].trim()) === -1 && i != 0) || (data[i][1] == "" && i != 0)){

					states.push(data[i][1].trim());

					var stateId = data[i][1].replace(" ", "");
					stateId = stateId.replace("'", "").replace(" ", "").replace(" ", "");

					console.log(data[i][0] + data[i][1] );
					if(stateId == ""){
						
						stateId = data[i][0].replace("'", "").replace(" ", "") + "state";
						console.log(stateId);
					}
					var state = '\n<div class="retailers-list-title" >\n'+ data[i][1] + '\n<div class=retailers-list-block id="' + stateId +'">\n</div>\n</div>\n';
					countryId = '#' + data[i][0].replace(" ", "");
					$(countryId).append(state);
				}

			if(i != 0){	
			var stateId = data[i][1].replace(" ", "");
					stateId = stateId.replace("'", "").replace(" ", "").replace(" ", "");

					console.log(data[i][0] + data[i][1] );
					if(stateId == ""){
						
						stateId = data[i][0].replace("'", "").replace(" ", "") + "state";
						console.log(stateId);
			}
			statesId = "#" + stateId;
			
			var address = data[i][3] + data[i][4] + data[i][5];
			var infos =  "\n<div class=\"retailers-list-item\">\n<p class=\"retailers-list-details\">\n" + data[i][2] + "<br>" + data[i][3] + "<br>" + data[i][4]+ ", " + data[i][5] + "</br>" + data[i][6] + "<br>\n</p>\n<a href=\"http://maps.google.com/?q="+address+"\" class=\"retailers-list-directions\" target=\"_blank\">\nView Map\n</a>\n</div>\n";
			$(statesId).append(infos);
			}

		}
		console.log(countries);
		console.log(states);
	}



function parseData(url, callBack) {
    Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        complete: function(results) {
            callBack(results.data);
        }
    });
}
parseData("fulllist.csv", doStuff);
console.log("data extracted");

});
