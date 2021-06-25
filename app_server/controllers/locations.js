// GET homepage

const homelist = (req,res) =>{
    res.render('locations-list',{title:'Home'})
}

// GET location info page

const locationInfo = (req,res) =>{
    res.render('location-info',{title:'Location Info'})

}


// GET Add review page

const addReview = (req,res) =>{
    res.render('location-review',{title:'Add review'})
}






module.exports ={
    homelist,
    locationInfo,
    addReview
}