import {Client, UserBaseEntity, UserManager} from 'twitter.js';
import Bearer from './secrets.js';

const client = new Client();

client.on("ready", async () => {
    //callback function that gets called when the client is ready to use
 
    const user = await client.users.fetchByUsername({username: 'helloluisj'});
    console.log(user);

    const followerList = await client.users.fetchFollowers(user, 5)
    console.log(followerList);
})

client.loginWithBearerToken(Bearer);