const express = require('express');
const showsBL = require('../models/showsBL');
const router = express.Router();

//get all shows
router.route('/').get(async (req, resp) => {
    const shows = await showsBL.getAllShows();
    return resp.json(shows);
})

//get by ID
router.route('/:id').get(async (req, resp) => {
    const id = req.params.id;
    const show = await showsBL.getShowById(id);
    return resp.json(show);
})

//post - new show
router.route('/').post(async (req, resp) => {
    const newShow = req.body;
    await showsBL.createNewShow(newShow);
    return resp.json(`Show Added Successful`);

})

//put - uptade show
router.route('/:id').put(async (req, resp) => {
    const id = req.params.id;
    const showToUpdate = req.body;
    await showsBL.updateShow(id, showToUpdate);
    return resp.json("The update was successful");
})

//delete show
router.route('/:id').delete(async (req, resp) => {
    var id = req.params.id;
    // console.log(id);
    await showsBL.deleteShow(id);
    return resp.json("The show was deleted");
})

module.exports = router;
