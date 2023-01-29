import { connect, set } from 'mongoose';
import config from 'config';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const dbConnect = function() {
    set('strictQuery', false);
    connect(`mongodb+srv://${config.get('db.username')}:${config.get('db.password')}@cluster0.dczyixi.mongodb.net/?retryWrites=true&w=majority`, options)
        .then(() => console.log('Connected to Mongodb'))
        .catch(err => console.log('Error connecting to Mongodb', err));
}

export default dbConnect;