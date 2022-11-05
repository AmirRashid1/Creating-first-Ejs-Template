const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');           //EJS (Embadded JavaScript)

app.get("/", function (req, res) {
    var today = new Date();
    var currentday = today.getDay();
    var day = "";

    // if (currentday === 6 || currentday === 0)       //6,5,4,3,2,1,0= 7 days weekend     //it which date is today 6 -0 days
    //  {
    //     day="weekend";

    // } else {
    //     day="weekday"    
    // }

    switch (currentday) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;

        default:
            console.log("Error current day is equal to : " + currentday);
            break;
    }

    res.render('list', {
        Kindofday: day    //Kindofday is in list.ejs
    });

});



app.listen(3000, function () {
    console.log("Server is listing on port 3000");
})