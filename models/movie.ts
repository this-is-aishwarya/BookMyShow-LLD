class Slot{
    id: number
	timings: number
    availableseats: number 

    constructor(id: number, timings: number, availableseats: number ){
        this.id = id;
        this.timings = timings;
        this.availableseats = availableseats;
    }
}

class CinemaHall{
	cinemahall_id: number
    cinemahall_name: string
    Slotobj: Slot[]

    constructor(cinemahall_id: number, cinemahall_name: string, Slotobj: Slot[]){
        this.cinemahall_id = cinemahall_id;
        this.cinemahall_name = cinemahall_name;
        this.Slotobj = Slotobj;
    }
}

class Movie{
	id: number
    movie_name: string
    duration: number
    language: string
    description: string
    cinemaHallobj: CinemaHall[]; 
   

    constructor(id: number,movie_name: string,
        duration: number,
        language: string,
        description: string,
        cinemaHallobj: CinemaHall[]){
            this.id = id;
            this.movie_name = movie_name;
            this.duration = duration;
            this.language = language;
            this.description = description;
            this.cinemaHallobj = cinemaHallobj;
        }

}

class Booking{
    movie_name:string
    movie_duration: number
    cinemahall_name: string
    slot: number
    seats_booked: number
    useremail: string

    constructor(movie_name:string,
        movie_duration: number,
        cinemahall_name: string,
        slot: number,
        seats_booked: number,
        useremail: string){
            this.movie_name = movie_name;
            this.movie_duration = movie_duration;
            this.cinemahall_name = cinemahall_name;
            this.slot = slot;
            this.seats_booked = seats_booked;
            this.useremail = useremail;
        }
}


// ----------- Dummy Data -----------------
// For movie 1:
const S1 = new Slot(143, 1, 300);
const S2 = new Slot(144, 3, 250);
const S3 = new Slot(145, 6, 100);

const C1 = new CinemaHall(331, 'PVR Connaught Place', [S1, S3])
const C2 = new CinemaHall(332, 'M2K Pitampura', [S1, S2])

const M1 = new Movie(101, 'The Matrix', 180, 'English', 'John wicks', [C1, C2]);

// For movie 2:
const S4 = new Slot(143, 1, 300);
const S5 = new Slot(144, 3, 250);
const S6 = new Slot(145, 6, 100);

const C3 = new CinemaHall(331, 'PVR Connaught Place', [S4, S5])
const C4 = new CinemaHall(332, 'M2K Pitampura', [S5, S6])

const M2 = new Movie(102, 'Avatar', 180, 'English', 'Lorem Ipsum', [C3, C4]);


const moviebase = [M1, M2];

export { moviebase };