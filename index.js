import {Client, UserBaseEntity, UserManager} from 'twitter.js';
import Bearer from './secrets.js';

const client = new Client();

client.on("ready", async () => {
    //callback function that gets called when the client is ready to use
  //  const followerList = await client.users.fetchFollowers({ username: 'helloluisj'}, 5)
    const user = await client.users.fetchByUsername({username: 'helloluisj'});
    console.log(user);
})

client.loginWithBearerToken(Bearer);