  function tabSwitcher(tabConteinerCN, tabsCommonCN, tabContentCommonCN) {

        'use strict';
        let tab = document.querySelectorAll('.' + tabsCommonCN),
            info = document.querySelector('.' + tabConteinerCN),
            tabContent = document.querySelectorAll('.' + tabContentCommonCN);
        
            console.log(tab);
            console.log(info);
            console.log(tabContent);

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
    
        hideTabContent(1);
    
        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }
    
        info.addEventListener('click', function(event) {

            let target = event.target;
            if (target && target.classList.contains(tabsCommonCN)) {
                for(let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
    
        });
    }
