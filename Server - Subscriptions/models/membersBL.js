const memberSchema = require('./membersSchema');

const getAllMembers = () => {
    return new Promise((resolve, reject) => {
        memberSchema.find({}, (err, membersData) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(membersData)
            }
        })
    })
}

const getById = (id) => {
    return new Promise((resolve, reject) => {
        memberSchema.findById(id, (err, memberData) => {
            if (err) {
                reject(err)
            }
            else {
                if (memberData !== null) {
                    resolve(memberData)
                }
                else {
                    resolve("The Member Not Found..")
                }
            }
        })
    })
}

const createNewMember = (newMember) => {
    return new Promise((resolve, reject) => {
        const newMemberToAdd = new memberSchema({
            memberId: newMember.memberId,
            firstName: newMember.memberFirstName,
            lastName: newMember.memberLastName,
            username: newMember.memberUsername,
            email: newMember.memberEmail,
            password: newMember.memberPassword
            // date: newMember.date
        })

        newMemberToAdd.save((err) => {
            if(err) {
                reject(err)
            }
            else {
                resolve(newMemberToAdd)
            }
        })
    })
}

const updateMember = (id, member) => {
    return new Promise((resolve, reject) => {
        const memberToUpdate = {
            memberId: member.memberId,
            firstName: member.memberFirstName,
            lastName: member.memberLastName,
            username: member.memberUsername,
            email: member.memberEmail
        }
        memberSchema.findByIdAndUpdate(id, memberToUpdate, (err) => {
            if(err) {
                reject(err)
            }
            else {
                resolve("The Member Updated!")
            }
        })
    })
}

const deleteMember = (id) => {
    return new Promise((resolve, reject) => {
        memberSchema.findByIdAndDelete(id, (err) => {
            if(err) {
                reject(err)
            }
            else {
                resolve("Member Deleted!")
            }
        })
    })
}

module.exports = { getAllMembers, getById, createNewMember, updateMember, deleteMember }