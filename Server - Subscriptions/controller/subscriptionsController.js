const express = require('express');
const subscriptionsBL = require('../models/subscriptionsBL');
const router = express.Router();

//get all subscriptions
router.route('/').get(async (req, resp) => {
    const deleteSubscriptions = await subscriptionsBL.getAllSubscriptions();
    return resp.json(deleteSubscriptions)
})

//get by ID
router.route('/:id').get(async (req, resp) => {
    const id = req.params.id;
    const deleteSubscription = await subscriptionsBL.getSubscriptionById(id);
    return resp.json(deleteSubscription);
})

//post - new subscription
router.route('/').post(async (req, resp) => {
    const newSubscription = req.body;
    const answer = await subscriptionsBL.createNewSubscription(newSubscription);
    return resp.json(`${answer} Adding New subscription Was Successful`);

})

//put - uptade subscription
router.route('/:id').put(async (req, resp) => {
    const id = req.params.id;
    const subscriptionToUpdate = req.body;
    await subscriptionsBL.updateSubscription(id, subscriptionToUpdate);
    return resp.json("The update was successful");
})

//delete subscription
router.route('/:id').delete(async (req, resp) => {
    const id = req.params.id;
    await subscriptionsBL.deleteSubscription(id);
    return resp.json("The show was deleted");
})

module.exports = router;