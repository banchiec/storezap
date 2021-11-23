const products = async (req, res) => {
    await fetch('https://fakestoreapi.com/products')
        .then(data => console.log(data.json()))
        .catch(error => {
            console.log(error)
        })
}
export default products