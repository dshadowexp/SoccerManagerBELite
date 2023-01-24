import { connect, set } from 'mongoose';
import config from 'config';

const dbConnect = function() {
    set('strictQuery', false);
    connect(config.get('db.url'))
        .then(() => console.log('Connected to Mongodb'))
        .catch(err => console.log('Error connecting to Mongodb', err));
}

export default dbConnect;