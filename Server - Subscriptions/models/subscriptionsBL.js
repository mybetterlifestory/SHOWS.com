const subscriptionSchema = require('./subscriptionsSchema');
const mongoose = require('mongoose')

const getAllSubscriptions = () => {
    return new Promise((resolve, reject) => {
        subscriptionSchema.find({}, (err, subscriptionsData) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(subscriptionsData)
            }
        })
    })
}

const getSubscriptionById = (id) => {
    return new Promise((resolve, reject) => {
        subscriptionSchema.findById(id, (err, subscriptionData) => {
            if (err) {
                reject(err)
            }
            else {
                if (subscriptionData !== null) {
                    resolve(subscriptionData)
                }
                else {
                    resolve("The Subscription Not Found..")
                }
            }
        })
    })
}

const createNewSubscription = (newSubscription) => {
    return new Promise((resolve, reject) => {
        let newSubscriptionToAdd = new subscriptionSchema({
            memberId: newSubscription.memberId,
            showName: newSubscription.name,
            image: newSubscription.image,
            date: newSubscription.date,
        })

        newSubscriptionToAdd.save((err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(newSubscriptionToAdd)
            }
        })
    })
}

const updateSubscription = (id, subscription) => {
    return new Promise((resolve, reject) => {
        const subscriptionToUpdate = {
            name: subscription.name,
            genres: subscription.genres,
            image: subscription.image,
            premiered: subscription.premiered,
        }
        subscriptionSchema.findByIdAndUpdate(id, subscriptionToUpdate, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("The Subscription Updated!")
            }
        })
    })
}

const deleteSubscription = (id) => {
    return new Promise((resolve, reject) => {
        subscriptionSchema.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("Subscription was deleted!")
            }
        })
    })
}

module.exports = { getAllSubscriptions, getSubscriptionById, createNewSubscription, updateSubscription, deleteSubscription }