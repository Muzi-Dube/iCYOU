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
            instruction: 'Click on the menu button in the top right corner of your screen.'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_2.jpg',
            instruction: 'Click on the menu button in the top right corner of your screen.'
        },
         {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_3.jpg',
            instruction: 'Click on the menu button in the top right corner of your screen.'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_4.jpg',
            instruction: 'Click on the menu button in the top right corner of your screen.'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_5.jpg',
            instruction: 'Click on the menu button in the top right corner of your screen.'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_6.jpg',
            instruction: 'Click on the menu button in the top right corner of your screen.'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_7.jpg',
            instruction: 'Click on the menu button in the top right corner of your screen.'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_8.jpg',
            instruction: 'Click on the menu button in the top right corner of your screen.'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_9.jpg',
            instruction: 'Click on the menu button in the top right corner of your screen.'
        },
        {
            imageLocation: 'Mobile_Screenshots(iCYOU)/step_10.jpg',
            instruction: 'Click on the menu button in the top right corner of your screen.'
        }
    ];

    let imageURL;
    let stepDescription;

    let html = '';
    nextBtn.addEventListener('click', () => {
        i = i < imageData.length-1 ? ++i : i = 0;
        imageURL = imageData[i].imageLocation;
        stepDescription = imageData[1].instruction;
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
        html = `
            <img src="./assets/${imageURL}" alt="step 1" width="300" height="600" class="step-image step-image-inview">
        `;
        stepImageContainer.innerHTML = html;
        stepNumber.innerText = `${i + 1}`;
        instruction.innerText = stepDescription;
    });
        
}