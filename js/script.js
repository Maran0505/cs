const SearchWrapper = document.querySelector(".search-input");
const inputBox = SearchWrapper.querySelector("input");
const suggeBox = document.querySelector(".autocom-box");

inputBox.onkeyup = (e) =>{
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
            emptyArray = suggestion.filter((data) => {
                return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
            });
        // console.log(emptyArray)
        emptyArray = emptyArray.map((data) => {
            return data = '<li>'+ data +'<li>';
        });
        console.log(emptyArray);
        
        SearchWrapper.classList.add("active");

        showSuggestion(emptyArray);

        let allList = suggeBox.querySelectorAll("li");

        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onClick","select(this)");
            
        } 
    }
    else{
        SearchWrapper.classList.remove("active");
    }

}
function select (element){
    let selectUserData = element.textcontent;
    console.log(selectUserData);
}

function showSuggestion(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';

    }else{
        listData = list.join('');
    }
    suggeBox.innerHTML = listData;
}