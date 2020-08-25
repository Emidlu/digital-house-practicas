let productsController = {
    cantidad: (req, res) => {
        let respuesta = {
            data: {
                totalProducts: 135,
                totalPrecios: 546.456,
                totalUsuarios: 38
            }
        }
        res.json(respuesta)
    },
    lastprod: (req, res) => {
        let respuesta = {
            data: {
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?'
            }
        }
        res.json(respuesta)
    },
    categories: (req, res) => {
        let respuesta = {
            data: {
                cant : ['01', '02', '03', '04', '05', '06']
            }
        }
        res.json(respuesta)
    },
    grill: (req, res) => {
        let respuesta = {
            data: [
                {name: 'Tiger Nixon', description: 'System Architect', price: 320.800, categories: ['Category 01','Category 02','Category 03'], colors: ['Red', 'Blue', 'Green'], stock: 245},
                {name: 'Jane Doe', description: 'Fullstack developer', price: 320.800, categories: ['Category 01','Category 02','Category 03'], colors: ['Red', 'Blue', 'Green'], stock: 245}
            ]
        }
        res.json(respuesta)
    }
}

module.exports = productsController