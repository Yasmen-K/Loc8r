const mongoose = require('mongoose')

const dbURI = 'mongodb://localhost/Loc8r'

const readLine = require('readline')

if(process.platform == 'win32'){
    const rl = readLine.createInterface({
        input:process.stdin,
        output:process.stdout
    });
    rl.on('SIGINT',()=>{
        process.emit('SIGINT')
    })
}

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology: true })

mongoose.connection.on('connected',() =>{
    console.log(`Mongoose connected to ${dbURI}`)
})

mongoose.connection.on('error',(err)=>{
        console.log('Mongoose connection error',err)
})

mongoose.connection.on('disconected',()=>{
    console.log('Mongoose disconected')
})

const gracefulShutdown = (callback =>{
    mongoose.connection.close(() =>{
        console.log(`Mongoose disconected with `);
        callback()
    })
})

// For nodemon restarts
process.once('SIGUSR2',()=>{
    gracefulShutdown('nodemon restart',()=>{
        process.kill(process.pid,'SIGUSR2')
    })
})

// For app termination

process.once('SIGINT',()=>{
    gracefulShutdown('app termination',()=>{
        process.exit(0)
    })
})

// For Heroku app termination
process.once('SIGTERM',()=>{
    gracefulShutdown('Heroku app shutdown',()=>{
        process.exit(0)
    })
})

require('./locations')