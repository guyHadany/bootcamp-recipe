// const renderer = new Renderer

$("button").on("click", function(){
    getIngridient()
    $("#input").val("")
})


const getIngridient = function(){
    let ingridient = $("#input").val()
    $.get(`http://localhost:8080/recipes/${ingridient}`, function(response){
        console.log(response)
    })
}