class user {
    constructor (name, email, date, city, phone, cpf){
    this.name = name,
    this.email = email,
    this.date = date,
    this.city = city, 
    this.phone = phone, 
    this.cpf = cpf
    }
}
class userlist{
    constructor(){
        this.user = []
    }
    addUserlist(user){
        this.user.push(user)   
     }
}
const userlist = new userlist();

function createUser() {
    const nameinpt = document.getElementById("name").value
    const emailinpt = document.getElementById("email").value
    const dateinput = document.getElementById("birthdate").value
    const city = document.getElementById("address").value
    const phone =  document.getElementById("phone").value
    const cpf = document.getElementById("cpf").value
    const newuser = new user(nameinpt, emailinpt , dateinput , city , phone , cpf )
    
}
