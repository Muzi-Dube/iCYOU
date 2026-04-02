export function instructionsHandler(){

    const stepImageContainer = document.querySelector('.slide-image-container');
    const previousBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const stepNumber = document.querySelector('.step-number');
    const instruction = document.querySelector('.step-description');
    let i = 0;
    const imageData =[
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_1.jpg',
            instruction: 'Click on the menu button on the top right corner of your screen.'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_2.jpg',
            instruction: 'Go to your "Accounts Center" to access account settings.'
        },
         {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_3.jpg',
            instruction: 'Go to "Your information and permissions".'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_4.jpg',
            instruction: 'Go to "Export your information".'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_5.jpg',
            instruction: 'Click "Create export" to create a new export file.'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_6.jpg',
            instruction: 'Choose the instagram profile you want to analyze.'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_7.jpg',
            instruction: 'Go to "Export to device" to finalize your export.'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_8.jpg',
            instruction: 'Go to "Customise information".'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_9.jpg',
            instruction: 'Make sure only "Followers and following" (under Connections) is selected, then save.'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_10.jpg',
            instruction: 'Go to the "Format" option.'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_11.jpg',
            instruction: 'Change the format to "JSON", then save. This is important!'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_12.jpg',
            instruction: 'Make sure all your setting are identical to those in the illustration, then click "Start Export".'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_13.jpg',
            instruction: "Instagram does not immidietly make the export file. They may notify you when it's ready(Regularly check if not)."
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_14.jpg',
            instruction: `Click "Download", and that's it! You can now upload that file to iCYOU and let the magic happen.`
        }];

    let imageURL;
    let stepDescription;

    let html = '';
    nextBtn.addEventListener('click', () => {
        i = i < imageData.length-1 ? ++i : i = 0;
        imageURL = imageData[i].imageLocation;
        stepDescription = imageData[i].instruction;
        html = `
            <img src="./assets/${imageURL}" alt="step 1" width="300" height="600" class="step-image step-image-inview">
        `;
        stepImageContainer.innerHTML = html;
        stepNumber.innerText = `${i + 1}`;
        instruction.innerText = stepDescription;
    });

    previousBtn.addEventListener('click', () => {

        if(i === 0){
            i = imageData.length - 1;
        }
        else{
            --i;
        }
        imageURL = imageData[i].imageLocation;
        stepDescription = imageData[i].instruction;
        html = `
            <img src="./assets/${imageURL}" alt="step 1" width="300" height="600" class="step-image step-image-inview">
        `;
        stepImageContainer.innerHTML = html;
        stepNumber.innerText = `${i + 1}`;
        instruction.innerText = stepDescription;
    });
        
}