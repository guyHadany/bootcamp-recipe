class Renderer {

    renderIngredients(data){
        $(".recepies").empty()
        const source = $("#first-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({data})
        $(".recepies").append(newHTML)
    }

}
