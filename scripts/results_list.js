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
                <div class="action-btns-container">
                    <a href="${user.link}" class="view-btn">
                        <span>View</span>
                        <img src="./assets/eye-svgrepo-com.svg" height="20" width="20" class="view-btn-svg">
                    </a>
                    <button class="remove-profile-btn">
                        <img src="./assets/bin-svgrepo-com.svg" width="25" height="25" class="remove-profile-svg">
                    </button>
                </div>
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

    removeElements();
}

function removeElements(){
    const deleteBtns = document.querySelectorAll('.remove-profile-btn');
    const numNonFollowersHTML = document.querySelector('.non-followers-info-value');

    deleteBtns.forEach(button => {
        button.addEventListener('click', () => {
            const nonFollowerElement = button.closest('.non-follower');
    
            // Get the username from the element
            const username = nonFollowerElement.querySelector('.non-follower-handle').innerText.slice(1); // Remove the handle from the array
            
            // Remove from DOM
            nonFollowerElement.remove();
            
            // Update storage
            const NFBStored = localStorage.getItem('notFollowingBack');
            let nonFollowersList = NFBStored ? JSON.parse(NFBStored) : [];
            
            // Filter out the deleted user
            nonFollowersList = nonFollowersList.filter(user => user.username !== username);

            // Update number of non followers
            numNonFollowersHTML.innerHTML = nonFollowersList.length;

            // Update localStorage
            localStorage.setItem('notFollowingBack', JSON.stringify(nonFollowersList));
            localStorage.setItem('numNonFollowers', JSON.stringify(nonFollowersList.length));
        })
    })
}