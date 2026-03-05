                          import { getProductById, checkStock, reduceStock } from './product.js';
                          
                          let cartItems = [];
                          
                          // TODO: Implement these functions
                          
                          export function addToCart(productId, quantity) {
                            // 1. Get product details
                            let index=products.findIndex(obj=>obj.id=productId)
                            console.log(products[index])
                            // 2. Check stock availability
                            // 3. Check if product already in cart
                            if(checkStock(productId,quantity))
                            {
                              cartProduct=products.findIndex(obj=>obj.name==products[index].name)
                              if(cartProduct)
                              {
                                cartItems[cartProduct].quantity=cartItems[cartProduct].quantity+quantity
                              }
                              else
                              {
                                cartItems.push({productId:productId,name:products[index].name,quantity:quantity,price:products[index].price})
                              }
                              console.log("added to cart successfully")
                            }
                            else
                            {
                              console.log("stock unavailable")
                            }
                            //    - If yes, update quantity
                            //    - If no, add new item
                            // 4. Return success/error message
                          }
                          
                          export function removeFromCart(productId) {
                            let index=products.findIndex(obj=>obj.id=productId)
                            let target=cartItems.findIndex(obj=>obj.name==products[index].name)
                            if(target)
                            {
                              cartItems.splice(target,1)
                            }
                            else
                              console.log("product not found")
                          }
                          
                          export function updateQuantity(productId, newQuantity) {
                            let index=products.findIndex(obj=>obj.id=productId)
                            let target=cartItems.findIndex(obj=>obj.name==products[index].name)
                            if(target)
                            {
                              if(checkStock(productId,newQuantity))
                              {
                                cartItems[target].quantity=newQuantity
                              }
                              else
                                console.log("stock unavailable")
                            }
                            else
                              console.log("product not found")
                          }
                          
                          export function getCartItems() {
                            return (cartItems)
                          }
                          
                          export function getCartTotal() {
                            // Calculate total price of all items in cart
                            return (cartItems.reduce((acc,obj)=>acc=acc+obj.quantity*obj.price,0))
                            // Return total
                          }
                          
                          export function clearCart() {
                            // Empty the cart
                            cartItems=[]

                          }

 