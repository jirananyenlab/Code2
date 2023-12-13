//65130500010 จิรนันท์ เย็นลับ

class Movies {
    constructor(){
        this.movies = []
    } 
    getAllMovies() {
        return this.movies
    }
    addMovie(title, director, year, genre){
        if (!title || !director || !year || !genre   ) {
            return undefined
        } else if (this.movies.find(a=>a.title.toLowerCase() === title.toLowerCase()) && this.movies.find(a=> a.director.toLowerCase() === director.toLowerCase()) ) {
            return undefined
        }
        else {
            let newMovie = {title, director, year, genre}
            this.movies.push(newMovie)
            return newMovie
        }
       
    }
    updateMovie(title, updatedDetails){
    if ( this.movies.find(a=>a.title.toLowerCase() === title.toLowerCase()) ) { 
         for (const movie of this.movies) {
            if (movie.title.toLowerCase() === title.toLowerCase()) {
           return  Object.assign(movie, updatedDetails)             
          }      
        } 

    // let foundIndex = this.movies.findIndex(mv => mv.title.toLowerCase() === title.toLowerCase())
    // return this.movies[foundIndex] = {...this.movies[foundIndex] , ...updatedDetails}
        
    //    return this.movies.reduce((newMovie , movies)=> { 
       
    //         if (movies.title.toLowerCase() === title.toLowerCase()) {
    //              newMovie = {title : movies.title, director:movies.director, year:movies.year, genre: movies.genre}
    //           if (updatedDetails.title) {
    //             movies.title = updatedDetails.title
    //             newMovie.title = updatedDetails.title 

    //           } if(updatedDetails.director){
    //             movies.director= updatedDetails.director
    //             newMovie.director = updatedDetails.director 

    //           } if(updatedDetails.year){
    //             movies.year = updatedDetails.year
    //             newMovie.year = updatedDetails.year 
                
    //           } if(updatedDetails.genre){
    //             movies.genre = updatedDetails.genre
    //             newMovie.genre = updatedDetails.genre 
    //           }
              
    //         }
    //         return newMovie 
    //     },{})



        // const toUpdate = this.movies.find(movies => movies.title.toLowerCase() === title.toLowerCase())
        // if (!toUpdate) {return undefined}
        // if (updatedDetails.title) {toUpdate.title = updatedDetails.title}
        // if (updatedDetails.director) {toUpdate.director = updatedDetails.director}
        // if (updatedDetails.year) {toUpdate.year = updatedDetails.year}
        // if (updatedDetails.genre) {toUpdate.genre = updatedDetails.genre}
        // return toUpdate

        // for (const movie of this.movies) {
        //     if (movie.title.toLowerCase() === title.toLowerCase()) {
        //         newMovie = Object.assign(movie, updatedDetails)             
        //   }      
        // } 
        // return newMovie

      
         

    }else {
        return undefined
    }
    }
    deleteMovieByTitle(title){
    if (this.movies.find(a=>a.title.toLowerCase() === title.toLowerCase()) ) {
        this.movies.splice( this.movies.findIndex(a=>a.title.toLowerCase() === title.toLowerCase()) , 1)
    }
    }
} 

module.exports = Movies
