// variables
var searchEl = $("#input")
var searchBtn = $(".btn")
var searches = []





// functions
function loadSearches (){
   var savedSearches = localStorage.getItem("pastSearches")
   $(savedSearches).each(function(){
        
   })
}









// Event listeners
$(searchBtn).click(function(){
    searches.push(searchEl.val())
    localStorage.setItem("pastSearches", JSON.stringify(searches))
})


// function calls
loadSearches()