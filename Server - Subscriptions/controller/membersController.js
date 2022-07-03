const express = require('express');
const membersBL = require('../models/membersBL');
const router = express.Router();

//get all members
router.route('/').get(async (req, resp) => {
    const members = await membersBL.getAllMembers();
    return resp.json(members)
})

//get by ID
router.route('/:id').get(async (req, resp) => {
    const id = req.params.id;
    const member = await membersBL.getById(id);
    return resp.json(member);
})

//post - new member
router.route('/').post(async (req, resp) => {
    const newMember = req.body;
    const answer = await membersBL.createNewMember(newMember);
    return resp.json(answer);

})

//put - uptade member
router.route('/:id').put(async (req, resp) => {
    const id = req.params.id;
    const memberToUpdate = req.body;
    await membersBL.updateMember(id, memberToUpdate);
    return resp.json("The update was successful");
})

//delete member
router.route('/:id').delete(async (req, resp) => {
    const id = req.params.id;
    await membersBL.deleteMember(id);
    return resp.json("The member was deleted");
})

module.exports = router;