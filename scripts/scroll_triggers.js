export function onScrollAnimations() {
    headerAnimationsHandler();
    aboutSectionOnView();
    instructionsSectionOnView();
    whyUsSectionOnView();
    footerContainerOnView();
}

const elements = {
    headerContainer: document.querySelector('.header-container'),
    header: document.querySelector('.header'),
    aboutSection: document.querySelector('.about-section'),
    HeroSection: document.querySelector('.hero-section'),
    aboutHeader: document.querySelector('.about-header'),
    aboutIntro: document.querySelector('.about-intro'),
    fileUploadWrapper: document.querySelector('.file-upload-wrapper'),
    noticeText: document.querySelector('.notice-text'),
    uploadBtn: document.querySelector('.upload-btn'),
    instructionsSection: document.querySelector('.instructions-section'),
    instructionsHeader: document.querySelector('.instructions-header'),
    mobileGuide: document.querySelector('.mobile-guide'),
    stepHeader: document.querySelector('.step-header'),
    previousBtn: document.querySelector('.prev-btn'),
    nextBtn: document.querySelector('.next-btn'),
    stepDescription: document.querySelectorAll('.step-description'),
    instructionsImage: document.querySelector('.step-image'),
    instructionsNoticeText: document.querySelector('.instructions-notice-text'),
    whyUsSection: document.querySelector('.why-us-section'),
    whyUsHeader: document.querySelector('.why-us-header'),
    whyUsPoint: document.querySelectorAll('.why-us-points'),
    footerContainer: document.querySelector('.footer'),
}


/*This Function handles the header animations when the user
scrolls through the page. It uses IntersectionObserver to detect
when the about section is in view and changes the header's
appearance accordingly. When the user scrolls back to the hero
section, it reverts the header to its original state.*/
function headerAnimationsHandler() {

    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                elements.headerContainer.classList.add('header-container-changed');
                headerObserver.unobserve(elements.aboutSection);
                elements.header.classList.add('header-changed');
            }
        });
    }, { threshold: 0.1 });

    headerObserver.observe(elements.aboutSection);

    const headerReturnObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                elements.headerContainer.classList.remove('header-container-changed');
                elements.header.classList.remove('header-changed');
            } else {
                elements.headerContainer.classList.add('header-container-changed');
                elements.header.classList.add('header-changed');
            }
        });
        }, { threshold: 0.3 });
    headerReturnObserver.observe(elements.HeroSection);

}

function aboutSectionOnView() {

    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                elements.aboutHeader.classList.add('about-header-inview');
                setTimeout(() => {
                elements.aboutIntro.classList.add('about-intro-inview');
                }, 500);
                setTimeout(() => {
                    elements.fileUploadWrapper.classList.add('file-upload-wrapper-inview');
                    elements.noticeText.classList.add('notice-text-inview');
                }, 1000);
                setTimeout(() => {
                    elements.uploadBtn.classList.add('upload-btn-inview');
                }, 1500);
                aboutObserver.unobserve(elements.aboutSection);

            }
        });
    }, { threshold: 0.3 });

    aboutObserver.observe(elements.aboutSection);
}

function instructionsSectionOnView() {
    const instructionsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                elements.instructionsHeader.classList.add('instructions-header-inview');
                setTimeout(() => {
                    elements.mobileGuide.classList.add('mobile-guide-inview');
                }, 500);
                setTimeout(() => {
                    elements.stepHeader.classList.add('step-header-inview');
                }, 1000);
                setTimeout(() => {
                    elements.previousBtn.classList.add('prev-btn-inview');
                }, 1500);
                setTimeout(() => {
                    elements.nextBtn.classList.add('next-btn-inview');
                }, 1700);
                setTimeout(() => {
                    elements.stepDescription.forEach(description => {
                        description.classList.add('step-description-inview');
                    });
                }, 1400);
                setTimeout(() => {
                    elements.instructionsImage.classList.add('step-image-inview');
                    elements.instructionsNoticeText.classList.add('instructions-notice-text-inview');
                }, 2000);

                instructionsObserver.unobserve(elements.instructionsSection);
            }
        });
    }, { threshold: 0.1 });

    instructionsObserver.observe(elements.instructionsSection);
}

function whyUsSectionOnView() {
    const whyUsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                elements.whyUsHeader.classList.add('why-us-header-inview');
                setTimeout(() => {
                    elements.whyUsPoint.forEach(point => {
                        point.classList.add('why-us-points-inview');
                    });
                }, 500);
                whyUsObserver.unobserve(elements.whyUsSection);
            }
        });
    }, { threshold: 0.1 }); 
    whyUsObserver.observe(elements.whyUsSection);
}

function footerContainerOnView() {
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                elements.footerContainer.classList.add('footer-inview');
                footerObserver.unobserve(elements.footerContainer);
            }
        });
    }, { threshold: 0.1 });
    footerObserver.observe(elements.footerContainer);
}