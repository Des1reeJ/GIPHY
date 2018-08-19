        var ninentiesMusicians = ["Aaliyah", "Missy Elliot", "Timbaland", "Usher", "Lil' Kim", "Monica", "702", "Tupac", "Mariah Carey", "Foxy Brown", 
        "TLC", "Lauryn Hill", "Boyz II Men", "BabyFace", "Digable Planets", "Bell Biv DeVoe", "The Fugees", "Destiny's Child", "En Vogue", "Patti Labelle", 
        "New Edition", "Tribe Called Quest", "Snoop Dogg", "Salt N' Pepa", "Warren G", "Ice Cube", "Mya", "Guy"];
        // Adding click event listen listener to all buttons
        $("button").on("click", function () {
         // Grabbing and storing the data-person property value from the button
         var nineties = $(this).attr("data-person");


         // Constructing a queryURL using the animal name
         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
             nineties + "&api_key=uVxYM5PxvMP5ZjEAIYB5S9DyJZk94EZL&limit=10";

         // Performing an AJAX request with the queryURL
         $.ajax({
                 url: queryURL,
                 method: "GET"
             })
             // After data comes back from the request
             .then(function (response) {
                 console.log(queryURL);

                 console.log(response);
                 // storing the data from the AJAX request in the results variable
                 var results = response.data;

                 // Looping through each result item
                 for (var i = 0; i < results.length; i++) {

                     // Creating and storing a div tag
                     var ninetiesDiv = $("<div>");

                     // Creating a paragraph tag with the result item's rating
                     var p = $("<p>").text("Rating: " + results[i].rating);

                     // Creating and storing an image tag
                     var ninetiesImage = $("<img>");
                     // Setting the src attribute of the image to a property pulled off the result item
                     ninetiesImage.attr("src", results[i].images.fixed_height.url);

                     // Appending the paragraph and image tag to the animalDiv
                     ninetiesDiv.append(p);
                     ninetiesDiv.append(ninetiesImage);

                     // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                     $("#gifs-appear-here").prepend(ninetiesDiv);
                 }

             });
     });
     //Add a submit button
     $(document).ready(function () {
         $('.musicianname').on('click', "#Submit", function (event) {
             alert ("something happens", "anyhing happens");
             event.preventDefault();
             console.log("something");

            // Add an input variable
            var ninentiesMusician = $("input").val().trim();
            ninentiesMusicians.push(ninentiesMusician);
            console.log(ninentiesMusician);

         })
     });