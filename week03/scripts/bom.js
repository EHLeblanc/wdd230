const input=document.querySelector('#favchap');
const button=document.querySelector('button');
const list=document.querySelector('#list');
let chaptersArray= getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});
function displayList(item)
{
    let li =document.createElement('li');
    let deleteB= document.createElement('button');
    li.textContent= item;
    deleteB.textContent="❌";
    li.append(deleteB);
    list.append(li);
    deleteB.addEventListener('click', function ()
        {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();   
        })
    input.focus();
}
function setChapterList()
{
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
function getChapterList()
{
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}
function deleteChapter(chapter)
{
    chapter=chapter.slice(0,chapter.length -1);
    chaptersArray= chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
button.addEventListener('click', function()
{
    if (input.value != "")
    {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value='';
        input.focus();
    }
    else
    {
        alert("Please enter the book and the chapter to add it to the list");
    }
})