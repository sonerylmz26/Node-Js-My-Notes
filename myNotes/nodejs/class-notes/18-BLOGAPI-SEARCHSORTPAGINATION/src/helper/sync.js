"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose / searchsortpagination
------------------------------------------------------- */

const {User} = require('../models/userModel')
const {BlogCategory, BlogPost} = require('../models/blogModel')


module.exports = async () => {

    /* Exampla Data */
    // Deleted All Records:
    await User.deleteMany().collation({ locale: 'en', strength: 2 }).then(() => console.log(' - User Deleted All'))
    await BlogCategory.deleteMany().collation({ locale: 'en', strength: 2 }).then(() => console.log(' - BlogCategory Deleted All'))
    await BlogPost.deleteMany().collation({ locale: 'en', strength: 2 }).then(() => console.log(' - BlogPost Deleted All'))

    // Example User:
    const user = await User.create({
        email: "test@test.com",
        password: "12345678",
        firstName: "Test",
        lastName: "Test"
    })
    // Example Category:
    const blogCategory = await BlogCategory.create({
        name: 'Test Category'
    })
    // Example Posts:
    for (let key in [...Array(200)]) {
        await BlogPost.create({
            userId: user._id,
            categoryId: blogCategory._id,
            title: `test ${key} title`,
            content: `test ${key} content`,
            published: Boolean(key % 2)
        })
    }

    // Finish:
    console.log('* Syncronized.')

}
