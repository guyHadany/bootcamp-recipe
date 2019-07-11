const renderer = new Renderer

$("button").on("click", function(){
    getIngridient()
    $("#input").val("")
})

$(".recepies").on("click", ".image", function(){
    // let firstIngridient = this.closest("div").find("li")
    console.log(this)
})



const getIngridient = function(){
    let ingridient = $("#input").val()
    $.get(`http://localhost:8080/recipes/${ingridient}`, function(response){
        renderer.renderIngredients(response)
    })
}