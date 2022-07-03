const usersSchema = require('./userSchema')
const mongoose = require('mongoose')

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        usersSchema.find({}, (err, usersData) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(usersData)
            }
        })
    })
}

const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        usersSchema.findById(id, (err, user) => {
            if (err) {
                reject(err)
            }
            else {
                if (user !== null) {
                    resolve(user)
                }
                else {
                    resolve("The user not found...")
                }
            }
        })
    })
}

const createNewUser = (newUser) => {
    return new Promise((resolve, reject) => {
        const newUserToAdd = new usersSchema({
            userId: newUser.userId,
            firstName: newUser.userFirstName,
            lastName: newUser.userLastName,
            username: newUser.userUsername,
            role: newUser.userRole,
            email: newUser.userEmail,
            password: newUser.userPassword
        })
        newUserToAdd.save((err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(newUserToAdd)
            }
        })
    })
}

const updateUser = (id, user) => {
    return new Promise((resolve, reject) => {
        const userToUpdate = {
            userId: user.userId,
            firstName: user.userFirstName,
            lastName: user.userLastName,
            username: user.userUsername,
            role: user.userRole,
            email: user.userEmail,
        }
        usersSchema.findByIdAndUpdate(id, userToUpdate, (err) => {
            if (err) 
                reject(err)
            else {
                resolve("User Updated!")
            }
        })
    })
}

const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        usersSchema.findByIdAndDelete(id, (err) => {
            usersSchema.findByIdAndDelete(id, (err) => {
                if (err)
                    reject(err)
                else {
                    resolve("User Deleted!")
                }
            })
        })
    })
}


module.exports = { getAllUsers, getUserById, createNewUser, updateUser, deleteUser };