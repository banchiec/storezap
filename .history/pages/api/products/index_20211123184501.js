const products = (req, res) => {
    fetch('https://fakestoreapi.com/users')
        .then(data => console.log(data.json()))
        .catch(error => {
            console.log(error)
        })
}
export default products