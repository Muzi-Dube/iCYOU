importScripts("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js");

onmessage = async function(e) {
  const file = e.data; // blob
  const zip = await JSZip.loadAsync(file);

  //looking for the files
  let instagramFolder = null;
  for (const key in zip.files) {
    if (key.includes("connections")) {
      instagramFolder = key.split("/")[0];
      break;
    }
  }

  if (!instagramFolder) {
    postMessage({ error: "Instagram folder not found in ZIP" });
    return;
  }

  try {
    // Extract followers.json and following.json
    const followersData = await zip.file(`${instagramFolder}/followers_and_following/followers_1.json`).async("string");
    const followingFile = await zip.file(`${instagramFolder}/followers_and_following/following.json`);
    let following = [];
    if (followingFile) {
      const followingData = await followingFile.async("string");
      const followingJson = JSON.parse(followingData);
      following = followingJson.relationships_following.map(f => f.title);
    }

    // Parse followers JSON
    const parsedFollowersData = JSON.parse(followersData);

    const followers = parsedFollowersData.map(f => f.string_list_data[0].value);
    // Compute non-followers (people you follow but don't follow you back)
    const followersSet = new Set(followers);
    const notFollowingBack = following.filter(user => !followersSet.has(user));
  
    const numFollowersAnalyzed = parsedFollowersData.length;

    const notFollowingBackWithLinks = notFollowingBack.map(user => ({
    username: user,
    link: `https://instagram.com/${user}`
    }));

    postMessage({ notFollowingBack: notFollowingBackWithLinks, numFollowersAnalyzed});

  } catch (error) {
    postMessage({ error: error.message });
  }
};
