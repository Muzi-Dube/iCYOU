import { results } from './results_list.js';

export function fileUploadHandler() {

    // File upload functionality for display
    const fileInput = document.getElementById('zipInput');
    const fileNameDisplay = document.querySelector('.file-name');
    const analysisContainer = document.querySelector('.analysis-execution-container');
    let file = null;

    fileInput.addEventListener('change', (event) => {
        file = event.target.files[0];
        if (file) {
            fileNameDisplay.innerHTML = `<span class="uploaded-file-name">${file.name}</span>`;
            fileNameDisplay.classList.add('file-selected');
            analysisContainer.innerHTML = `
              <div class="analysis-container">
                <button class="analyze-btn">Analyze</button>
                <p class="analyze-text">All Set! Ready When You Are</p>
              </div>
            `;
            analyze()
        }
        else { 
                fileNameDisplay.innerHTML = '<span>No File Selected</span>';
        }
    });

    function analyze(){

    const analyzeBtn = document.querySelector('.analyze-btn');
    // Worker for processing ZIP file
    const worker = new Worker("./scripts/zipWorker.js");

    analyzeBtn.addEventListener("click", () => {

      if (file) {
        worker.postMessage(file);
        analysisContainer.innerHTML = `
          <div class="processing-screen">
            <p class="processing-text">Processing 
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </p>
            <p class="processing-notice">
                    Your Information Will Be Ready Soon.
            </p>
          </div>
        `;
      }

    });

    worker.onmessage = (event) => {
      const { notFollowingBack, numFollowersAnalyzed, error } = event.data;
      if(error){
        analysisContainer.innerHTML = `
          <div class="error-container">
            <div class="error-message-container">
              <p class="error-message">
                Hmm...Looks Like We Couldn't Process Your File. Try Again?
              </p>
              <img src="./assets/man-thinking-svgrepo-com.svg" width="120" height="120">
            </div>
            <div class="caution-container">
              <p class="error-caution">If this error persists, please check the file format or try again later.</p>
                <a href="page-unavailable.html" class="help-link">Get Help</a>
            </div>
          </div>
        `;
      }else{
      analysisContainer.innerHTML = `
        <div class="done-container">
          <div class="done-message">
              <p class="done-text">Analysis Complete
              </p>
              <img src="./assets/tick-circle-svgrepo-com.svg" width="30" height="30" class="complete-tick">
          </div>
          <div class="click-to-view-container">
              <a href="results.html" class="click-to-view-link">
              <span class="click-to-view">Click To View</span>
              <img src="./assets/arrow-up-right-from-square-svgrepo-com.svg" width="20" height="20">
          </a>
          </div>
        </div>
      `;
    }

      const numNonFollowers = notFollowingBack.length;
      localStorage.setItem('notFollowingBack', JSON.stringify(notFollowingBack));
      localStorage.setItem('numFollowersAnalyzed', JSON.stringify(numFollowersAnalyzed));
      localStorage.setItem('numNonFollowers', JSON.stringify(numNonFollowers));

      results(notFollowingBack, numFollowersAnalyzed, numNonFollowers);
    }

  }
}