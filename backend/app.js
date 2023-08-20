const express = require("express")
const ConnecionDb = require("./Connection")
const cors = require("cors")
const productController = require("./Product/ProductController")
const userController = require("./User/UserController")
const { json } = require("express")
const authController = require("./Auth/Auth")
const orderController = require("./Order/OrderController")
const fileUpload = require("express-fileupload")
const AdminRouter = require("./ADMIN/AdminRouter")
require("dotenv").config();


const App = express()

App.use(cors())

App.use(json())

ConnecionDb()



App.use("/uploads", express.static('./uploads'))

App.get("/", (req, res) => {
    return res.status(200).send({ message: "Success" })
})

App.get("/product", productController.GetProduct)

App.get("/product/:id", productController.GetProductById)

App.post("/register", userController.RegisterUser)

App.post("/login", userController.UserLogin)

App.post("/cart", productController.GetCart)

App.post("/neworder", authController.CreatOrderAuth, orderController.CreateOrder)

App.get("/order", authController.CreatOrderAuth, orderController.GetOrder)

App.get("/order/:id", authController.CreatOrderAuth, orderController.getOrderByID)

App.post("/payment/verify", authController.CreatOrderAuth, orderController.PaymentVerify)

// App.get("/product/insert/many", productController.InserProduct)

App.use("/admin", AdminRouter)


App.listen(process.env.PORT, () => {
    console.log("Sever Is Started For Serving");
})