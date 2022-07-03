const showSchema = require('./showsSchema');

const getAllShows = () => {
    return new Promise((resolve, reject) => {
        showSchema.find({}, (err, showsData) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(showsData)
            }
        })
    })
}

const getShowById = (id) => {
    return new Promise((resolve, reject) => {
        showSchema.findById(id, (err, showData) => {
            if (err) {
                reject(err)
            }
            else {
                if (showData !== null) {
                    resolve(showData)
                }
                else {
                    resolve("The Show Not Found..")
                }
            }
        })
    })
}

const createNewShow = (newShow) => {
    console.log("newShow",newShow); 
    return new Promise((resolve, reject) => {
        const newShowToAdd = new showSchema({
            showId: newShow.showId,
            name: newShow.showName,
            genres: newShow.showGenres,
            status: newShow.showStatus,
            premiered: newShow.showPremiered,
            ended: newShow.showEnded,
            rating: newShow.showRating,
            summary: newShow.showSummary,
            image: newShow.showImage,       
        })

        newShowToAdd.save((err) => {
            if (err) {
                reject(err)
            }
            else {
                console.log("newShowToAdd",newShowToAdd)
                resolve(newShowToAdd)
            }
        })
    })
}

const updateShow = (id, show) => {
    return new Promise((resolve, reject) => {
        const showToUpdate = {
            showId: show.showId,
            name: show.showName,
            genres: show.showGenres,
            status: show.showStatus,
            premiered: show.showPremiered,
            ended: show.showEnded,
            rating: show.showRating,
            summary: show.showSummary,
            image: show.showImage
        }

        showSchema.findByIdAndUpdate(id, showToUpdate, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("Show was updated!")
            }
        })
    })
}

const deleteShow = (id) => {
    return new Promise((resolve, reject) => {
        showSchema.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("Show was deleted!")
            }
        })
    })
}

module.exports = { getAllShows, getShowById, createNewShow, updateShow, deleteShow }