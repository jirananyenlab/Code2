class ToDo{
    constructor (id,description){
        this.id = id
        this.description = description
    }
    getTodo () {
        return {id:this.id ,  description:this.description }
    }
    setDescription (newDescription) {
        this.id = newDescription.id
        this.description = newDescription.description
    }
}
module.exports = ToDo

