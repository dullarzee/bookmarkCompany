const changeTabs = document.querySelector('#section2').querySelectorAll('.changeIt');
const simple = document.querySelector('#section2').querySelector('#simple');
const speedy = document.querySelector('#section2').querySelector('#speedy');
const easy = document.querySelector('#section2').querySelector('#easy');
const faqs = document.querySelector('#section7').querySelectorAll('.faq');
const arrows = document.querySelector('#section7').querySelectorAll('svg');
const tab1 = document.querySelector('#section3');
const tab2 = document.querySelector('#section4');
const tab3 = document.querySelector('#section5');
const tabs = document.querySelectorAll('.tab');
const closeMenu = document.querySelector('#closeMenu');
const menu = document.querySelector('#menu');
const menuButton = document.querySelector('#menuButton');
const arrowDowns = document.querySelectorAll('.arrowDown');


for(const it of arrowDowns)
{
    it.style.transform = 'rotate(180deg)';
    it.style.display = 'none';
}

simple.style.color = 'hsl(229, 31%, 21%)';
simple.style.borderBottom = '3px solid hsl(0, 94%, 66%)';
speedy.style.borderBottom = '1px solid hsl(229, 8%, 60%)';
easy.style.borderBottom = '1px solid hsl(229, 8%, 60%)';
function displayTab(e)
{
    for(const tab of tabs)
    {
        tab.style.display = 'none';
    }
    e.target.style.display = '';  //e.target.style.display = 'flex';
}
function displayAnswer(e)
{

    const p = e.target.parentNode.parentNode.querySelector('p');
    if(p.style.display === 'none')
    {
         p.style.display = 'block';
         e.target.parentNode.querySelector('.arrowDown').style.display = '';
         e.target.parentNode.querySelector('.arrowUp').style.display = 'none';
    }
    else //if(p.style.display !== 'none')
    {
        p.style.display = 'none';
        e.target.parentNode.querySelector('.arrowUp').style.display = '';
        e.target.parentNode.querySelector('.arrowDown').style.display = 'none';
    }
    console.log(e.target);
}
function changingTab(e)
{
   for(const it of changeTabs)
   {
    it.style.color = 'hsl(229, 8%, 60%)';
   }
   e.target.style.color = 'hsl(229, 31%, 21%)';
}
for(const tab of changeTabs)
{
    tab.addEventListener('click', changingTab);
}
for(const faq of faqs)
{
    faq.addEventListener('click', displayAnswer);
}

for(const arrow of arrows)
{
    arrow.addEventListener('click', displayAnswer);
}


changeTabs[0].addEventListener('click', ()=>{
    for(const tab of tabs)
        {
            tab.style.display = 'none';
        }
        if(window.innerWidth <= 700) tab1.style.display = 'block';
        else
        {
            tab1.style.display = 'flex';
        }

        changeTabs[0].style.borderBottom = '3px solid hsl(0, 94%, 66%)';
        changeTabs[1].style.borderBottom = '1px solid hsl(229, 8%, 60%)';
        changeTabs[2].style.borderBottom = '1px solid hsl(229, 8%, 60%)';
});

changeTabs[1].addEventListener('click', ()=>{
    for(const tab of tabs)
        {
            tab.style.display = 'none';
        }
        if(window.innerWidth <= 700) tab2.style.display = 'block';
        else
        {
            tab2.style.display = 'flex';
        }

        changeTabs[1].style.borderBottom = '3px solid hsl(0, 94%, 66%)';
        changeTabs[0].style.borderBottom = '1px solid hsl(229, 8%, 60%)';
        changeTabs[2].style.borderBottom = '1px solid hsl(229, 8%, 60%)';
});

changeTabs[2].addEventListener('click', ()=>{
    for(const tab of tabs)
        {
            tab.style.display = 'none';
        }
        if(window.innerWidth <= 700) tab3.style.display = 'block';
        else
        {
            tab3.style.display = 'flex';
        }

        changeTabs[2].style.borderBottom = '3px solid hsl(0, 94%, 66%)';
        changeTabs[1].style.borderBottom = '1px solid hsl(229, 8%, 60%)';
        changeTabs[0].style.borderBottom = '1px solid hsl(229, 8%, 60%)';
});

window.addEventListener('resize', ()=>{
    for(const it of tabs)
    {
        if(it.style.display !== 'none')
        {
            if(window.innerWidth <= 700)
            {
                it.style.display = 'block';
            }
            else
            {
                it.style.display = 'flex';
            }
        }
    }
});
menuButton.addEventListener('click', ()=>{
    menu.style.display = 'block';
});
closeMenu.addEventListener('click', ()=>{
    menu.style.display = 'none';
});
for(const it of arrowDowns)
{
    it.addEventListener('click', displayAnswer);
}