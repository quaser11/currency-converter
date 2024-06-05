export default function customSelect(firstSelector, secondSelector) {
    const chooseButton = document.querySelector(`.${firstSelector}`);
    const listOfCurrency = document.querySelector(`.${secondSelector}`);

    listOfCurrency.addEventListener('click', onOptionClick)
    chooseButton.addEventListener('click', onButtonClick);

    function onOptionClick(e) {
        let currentOption = null

        if (e.target.classList.contains('option')) {
            currentOption = e.target.textContent
        }

        if (currentOption) {
            chooseButton.textContent = currentOption;
        }

        if (e.target !== listOfCurrency) {
            hideList()
        }
    }

    function onButtonClick(e) {
        if (listOfCurrency.style.opacity === '') {
            showList()
        } else {
            hideList()
        }
        window.addEventListener('keydown', onKeyClick)
        window.addEventListener('click', onWindowClick)
    }

    function hideList() {
        listOfCurrency.style.opacity = '';
        listOfCurrency.style.visibility = 'hidden';
    }

    function showList() {
        listOfCurrency.style.opacity = '1';
        listOfCurrency.style.visibility = 'visible';
    }

    function onWindowClick(e) {
        if (e.target !== chooseButton && e.target !== listOfCurrency) {
            hideList()
            window.removeEventListener('click', onWindowClick)
            window.removeEventListener('keydown', onKeyClick)
        }
    }

    function onKeyClick(e) {
        if (e.keyCode === 27) {
            hideList()
            window.removeEventListener('keydown', onKeyClick)
            window.removeEventListener('click', onWindowClick)
        }
    }

}

