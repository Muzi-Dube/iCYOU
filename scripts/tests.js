export function test(){

    const followersList = async function(){
        const res = await fetch('../data/following.json');
        const followersJson = await res.json();
        const followersArray = followersJson;

        logArray(followersArray);
    }

    function logArray(followersArray){
        console.log(followersArray.relationships_following.length);
    }

    followersList();
}