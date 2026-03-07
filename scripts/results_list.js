export function results(nonFollowersList, numFollowersAnalyzed, numNonFollowers){
    // Retrieve from sessionStorage if called without parameters
    if (!nonFollowersList && !numFollowersAnalyzed && !numNonFollowers) {
    // List of non followers
      const NFBStored = localStorage.getItem('notFollowingBack');
      nonFollowersList = NFBStored ? JSON.parse(NFBStored) : [];
    // Number of followers analyzed
      const NFAStored = localStorage.getItem('numFollowersAnalyzed');
      numFollowersAnalyzed = NFAStored ? JSON.parse(NFAStored) : [];
    // Number of non followers total
      const NNFStored = localStorage.getItem('numNonFollowers');
      numNonFollowers = NNFStored ? JSON.parse(NNFStored) : [];
    }else{
        return;
    }

    let html =``;

    for(let i = 0; i < nonFollowersList.length; ++i){
        const user = nonFollowersList[i];
        html +=`
            <div class="non-follower">
                <div class="handle-container">
                    <span class="non-follower-handle">@${user.username}</span>
                </div>
                <a href="${user.link}" class="view-btn">
                    <span>View</span>
                    <img src="./assets/eye-svgrepo-com.svg" height="20" width="20" class="view-btn-svg">
                </a>
            </div>
        `;
    }

    const numfollowerContainer = document.querySelector('.followers-info-value');
    const nonFollowersContainer = document.querySelector('.non-followers-info-value');
    
    if(numFollowersAnalyzed > 1000){
        numFollowersAnalyzed = (numFollowersAnalyzed/1000).toFixed(1);
        numfollowerContainer.innerText = `${numFollowersAnalyzed}K`;
    }else {
        numfollowerContainer.innerText = numFollowersAnalyzed;
    }

    if(numNonFollowers > 1000){
        numNonFollowers = (numNonFollowers/1000).toFixed(1);
        nonFollowersContainer.innerText = `${numNonFollowers}K`;
    }else {
        nonFollowersContainer.innerText = numNonFollowers;
    }

    const listContainer = document.querySelector('.unfollowers-list');
    listContainer.innerHTML = html;

}