var nextURL = "", previousURL = "";
var getCount = 0, resultPushed = 1, method = "GET";

function fetchData(URL) {
	$('table').addClass('loading');
	
	//fetch('http://example.com/movies.json')
   //.then((response) => response.json())
   //.then((data) => console.log(data));
   
	

    fetch(URL).then(res => {
		
		console.log(res);
		
        res.json().then(data => {
			
			console.log("1 : " + data.count + "   2 :"  + data.next);
			console.log("  3 : " + data.previous + "  4 : " + data.results );
			
			
            if (data.previous == null) {
                $("#offset_previous").hide();
            } else {
				$("#offset_previous").show();
                previousURL = data.previous;
            }
			
			
            if (data.next == null) {
				
                $("#offset_next").hide();
            } else {
                nextURL = data.next;
				$("#offset_next").show();
            }
			
			/* for(int i=0; i<data.results.length;i++){
				console.log(data.results[i].name);
				console.log(" 1111111111111111");
				
			} */
			
             console.log("Len : " + data.results.length);
            

                console.log(data.results);
                var temp = "";
				
				/* temp += "<tr role=\"row\" >";
                    temp += "<td role=\"cell\"> Niranja</td>";
                    temp += "<td role=\"cell\"> 6</td>";
                    temp += "<td role=\"cell\">7</td>";
                    temp += "<td role=\"cell\">8</td>";
                    temp += "<td role=\"cell\">8</td>";
                    temp += "<td role=\"cell\">9</td>";
                    temp += "<td role=\"cell\">10</td>";
                    temp += "<td role=\"cell\">11</td>"; 
				temp += "</tr>";*/

                data.results.forEach((itemData) => {
                    temp += "<tr role=\"row\" >";
                    temp += "<td role=\"cell\">" + itemData.name + "</td>";
                    temp += "<td role=\"cell\">" + itemData.height + "</td>";
                    temp += "<td role=\"cell\">" + itemData.mass + "</td>";
                    temp += "<td role=\"cell\">" + itemData.hair_color + "</td>";
                    temp += "<td role=\"cell\">" + itemData.skin_color + "</td>";
                    temp += "<td role=\"cell\">" + itemData.eye_color + "</td>";
                    temp += "<td role=\"cell\">" + itemData.birth_year + "</td>";
                    temp += "<td role=\"cell\">" + itemData.gender + "</td>";
                    temp += "</tr>";
                });
               
                document.getElementById('resultData').innerHTML = temp;
				
				$('table').removeClass('loading');
            

        })
    })
}





$(document).ready(function () {

    //	Previouspage
    $("#offset_previous").click(function () {
		console.log("Button Clicked : " + " Previous");
        fetchData(previousURL);
    });

    //	NextPage
    $("#offset_next").click(function () {
        console.log("Button Clicked : Next ");
		fetchData(nextURL);
		
    });
});
