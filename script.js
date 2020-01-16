// variables
var searchEl = $("#input")
var searchBtn = $(".btn")
var searchs = []


$(searchBtn).click(function(){
    searchs.push(searchEl.val())
    localStorage.setItem("pastSearches", JSON.stringify(searchs))
})