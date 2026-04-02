import { fileUploadHandler } from './file_upload.js';
import { onScrollAnimations } from './scroll_triggers.js';
import { menuToggleHandler } from './menu_toggle.js';
import { instructionsHandler } from './instructions.js';
import { darkModeToggler } from './dark-mode.js';

// Initialize menu toggle functionality
onScrollAnimations();   
// Initialize file upload functionality
fileUploadHandler();
// Menu toggler
menuToggleHandler();
// Instructions handler function
instructionsHandler();
// Theme Switcher
darkModeToggler();