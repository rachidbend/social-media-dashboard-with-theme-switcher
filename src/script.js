


let facebookColor = getComputedStyle(document.documentElement).getPropertyValue('--color-facebook');
console.log(facebookColor);


// document.documentElement.style.setProperty('--color-facebook', 'red');




const themeToggle = () => {

    // reset the theme to dark (to have consistent results)
    document.getElementById('toggle-checkbox').checked = false;
    document.querySelector('.slider').classList.remove('light');
    document.querySelector('.slider').classList.add('dark');

    // set the dark theme colors and dark theme toggle
    const darkTheme = () => {
        let root = document.documentElement;

        root.style.setProperty('--color-dark-bg', 'hsl(230, 17%, 14%)');
        root.style.setProperty('--color-dark-bg-top', 'hsl(232, 19%, 15%)');
        root.style.setProperty('--color-dark-bg-card', 'hsl(228, 28%, 20%)');
        root.style.setProperty('--color-dark-text-primary', 'hsl(0, 0%, 100%)');
        root.style.setProperty('--color-dark-text-secondary', 'hsl(228, 34%, 66%)');

        document.querySelector('.slider').classList.remove('light');
        document.querySelector('.slider').classList.add('dark');
    }

    // set the light theme colors and light theme toggle
    const lightTheme = () => {
        let root = document.documentElement;
    
        root.style.setProperty('--color-dark-bg', 'hsl(0, 0%, 100%)');
        root.style.setProperty('--color-dark-bg-top', 'hsl(225, 100%, 98%)');
        root.style.setProperty('--color-dark-bg-card', 'hsl(227, 47%, 96%)');
        root.style.setProperty('--color-dark-text-primary', 'hsl(230, 17%, 14%)');
        root.style.setProperty('--color-dark-text-secondary', 'hsl(228, 12%, 44%)');

        document.querySelector('.slider').classList.remove('dark');
        document.querySelector('.slider').classList.add('light');
    }

    // check if the box is checked or not   WHEN ever its status is changed
    document.getElementById('toggle-checkbox').addEventListener('change', e => {
        const checkbox = e.target.checked;

         // if it is checked set the theme to light
        if (checkbox) {

           
            lightTheme();
            console.log(getComputedStyle(document.documentElement).getPropertyValue('--color-dark-bg'));

        } 
        // if not set the theme to dark
        else if (!checkbox) {

            // if not keep the default colors
            darkTheme();
            console.log(getComputedStyle(document.documentElement).getPropertyValue('--color-dark-bg'));

        }
    });
}



themeToggle();





















