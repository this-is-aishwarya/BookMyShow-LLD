const express = require('express');
const app = express();
const moviebase = require('./models/movie.js');

function ListCinemaHallsWithSlots(movieName){
    const found = moviebase.moviebase.find(element => element.movie_name == movieName);
    if(found === undefined){
        console.log('This movie is not listed.');
    }
    else{
        const foundslots = found.cinemaHallobj;

        const displayresponse = {};

        for(let i = 0; i < foundslots.length; i++){
            const responseData = {};
            const object = foundslots[i];
            responseData["CinemaHall_ID"] = object.cinemahall_id;
            responseData["CinemaHall_Name"] = object.cinemahall_name;

            for(let j=0; j < foundslots[i].Slotobj.length; j++){
                const slotData = {};
                const slotsobj = foundslots[i].Slotobj[j];
                slotData["Slot_ID"] = slotsobj.id;
                slotData["Timings"] = slotsobj.timings;
                responseData["Slot " + j + 1] = slotData;
            }

            displayresponse["Cinema Hall " + parseInt(i + 1)] = responseData;
        }

        console.log(displayresponse);
    }
}

function CreateBooking(movieId, cinemaHallId, slotId, useremail, requiredSeats){
    const checkmovie = moviebase.moviebase.find(element => element.id == movieId);
    const checkcinemahall = checkmovie.cinemaHallobj.find(element => element.cinemahall_id == cinemaHallId);
    const checkslot = checkcinemahall.Slotobj.find(element => element.id == slotId);

    if(checkslot.availableseats >= requiredSeats){
        console.log('Seats are available.');
        checkslot.availableseats -= requiredSeats;
        //console.table(checkcinemahall.Slotobj);
    }
    else{
        console.log('Seats are not available based on your requirement');
    }

}

app.get('/getallmovies', (req, res) => {
    ListCinemaHallsWithSlots("The Matrix");
});

app.get('/createBooking', (req, res) => {
    CreateBooking(101, 331, 143, "aishwarya", 40);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

