"use strict";
exports.__esModule = true;
exports.moviebase = void 0;
var Slot = /** @class */ (function () {
    function Slot(id, timings, availableseats) {
        this.id = id;
        this.timings = timings;
        this.availableseats = availableseats;
    }
    return Slot;
}());
var CinemaHall = /** @class */ (function () {
    function CinemaHall(cinemahall_id, cinemahall_name, Slotobj) {
        this.cinemahall_id = cinemahall_id;
        this.cinemahall_name = cinemahall_name;
        this.Slotobj = Slotobj;
    }
    return CinemaHall;
}());
var Movie = /** @class */ (function () {
    function Movie(id, movie_name, duration, language, description, cinemaHallobj) {
        this.id = id;
        this.movie_name = movie_name;
        this.duration = duration;
        this.language = language;
        this.description = description;
        this.cinemaHallobj = cinemaHallobj;
    }
    return Movie;
}());
// For movie 1:
var S1 = new Slot(143, 1, 300);
var S2 = new Slot(144, 3, 250);
var S3 = new Slot(145, 6, 100);
var C1 = new CinemaHall(331, 'PVR Connaught Place', [S1, S3]);
var C2 = new CinemaHall(332, 'M2K Pitampura', [S1, S2]);
var M1 = new Movie(101, 'The Matrix', 180, 'English', 'John wicks', [C1, C2]);
// For movie 2:
var S4 = new Slot(143, 1, 300);
var S5 = new Slot(144, 3, 250);
var S6 = new Slot(145, 6, 100);
var C3 = new CinemaHall(331, 'PVR Connaught Place', [S4, S5]);
var C4 = new CinemaHall(332, 'M2K Pitampura', [S5, S6]);
var M2 = new Movie(102, 'Avatar', 180, 'English', 'Lorem Ipsum', [C3, C4]);
var moviebase = [M1, M2];
exports.moviebase = moviebase;
