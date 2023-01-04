const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          itemsLi = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          imagesAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    
    const typeFilter = (imagesFilter) => {
        imagesAll.forEach(image => {
            image.style.display = "none";
            image.classList.remove('animated', 'fadeIn');
        });

        no.style.display = "none";
        no.classList.remove('animated', 'fadeIn');

        if (imagesFilter.length) {
            imagesFilter.forEach(image => {
                image.style.display = "block";
                image.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = "block";
            no.classList.add('animated', 'fadeIn');
        }
    };

    itemsLi.forEach(li => {
        li.addEventListener('click', (e) => {
            let target = e.target;

            const imagesFilter = wrapper.querySelectorAll(`.${target.classList[0]}`);

            typeFilter(imagesFilter);
        });
    });

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == "LI") {
            itemsLi.forEach(li => li.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;