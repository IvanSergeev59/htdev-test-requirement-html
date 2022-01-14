import './styles/main.scss';

const changeSliderItem = (elem1Name, class1Name, elem2Name, class2Name, dots) => {
    let i = 0;
    const elements = document.getElementsByClassName(elem1Name);
    const elements_2 = document.getElementsByClassName(elem2Name);
    const isElements_2 = elements_2.length>0;    
    (dots) ? document.getElementsByClassName(dots)[0].addEventListener('click', (event) => onClickChangeElements(event)) : null;    
    function hiddenOldPicDots(index) {
        elements[index].classList.add(class1Name);
        isElements_2 ? elements_2[index].classList.remove(class2Name): null;
    }

    function showNewPicDots(index) {
        elements[index].classList.remove(class1Name);
        isElements_2 ? elements_2[index].classList.add(class2Name) : null;
    }

    function onClickChangeElements(event) {
        if (event.target.id>0) {
        hiddenOldPicDots(i);
        i=Number(event.target.id)-1;
        showNewPicDots(i)
        }       
    }
   
    function changeElements() {
        if (i >= elements.length - 1){            
            hiddenOldPicDots(i)
            i = 0;
            showNewPicDots(i);
        }
        else {
            hiddenOldPicDots(i);
            showNewPicDots(i+1);
            i++;
        };
    };
    setInterval(() =>  changeElements(), 5000); 
}

changeSliderItem('our-projects__slider_picture', 'slide-hidden');
changeSliderItem('main-principles__main-block', 'text-hidden','main-principles__main-block_dots-image', 'choosen', 'main-principles__main-block_dots');
changeSliderItem('company-offer__main-block_image', 'company-image-hidden', 'company-offer__main-block_dots-image', 'choosen-white', 'company-offer__main-block_dots');