import mongoose from 'mongoose';

export const mongoDB = {
    connect: () => mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then(() => { console.log('Database connected') }).catch(err => { console.log(err.message) })
};