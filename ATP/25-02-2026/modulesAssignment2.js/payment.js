
                          import { reduceStock } from './product.js';
                          import { getCartItems, getCartTotal, clearCart } from './cart.js';
                          import { applyDiscount } from './discount.js';
                          
                          // TODO: Implement these functions
                          
                          export function processPayment(paymentMethod, couponCode = null) {
                            // 1. Get cart items and total
                            let discount=0
                            let status=""
                            getCartItems()
                            console.log("Total cost:",getCartTotal())
                            // 2. Apply discount if coupon provided
                            if(couponCode)
                            {
                                discount=getCartTotal()*0.2
                            }
                            else
                                return getCartTotal
                            // 3. Validate payment method (card/upi/cod)

                            // 4. Process payment (simulate)
                            if(validatePaymentMethod(paymentMethod))
                            {
                                status="success"
                                return "Payment Successful"
                            }
                            else
                            {
                                status="failed"
                                return "Payment Failed"
                            }
                            // 5. Reduce stock for all items
                            cartItems.map(obj=>{
                                let index=products.findIndex(ind=>ind.productId=obj.productId)
                                products[index].stock=products[index].stock-obj.quantity
                          })
                            // 6. Clear cart
                            clearCart()
                            // 7. Generate order summary
                            
                             Return 
                             {
                               orderId: generateOrderId();
                               items: getCartItems(),
                               subtotal: getCartTotal(),
                               discount: discount,
                               total: getCartTotal-discount,
                               paymentMethod: paymentMethod,
                               status:status,
                               message: 'Thank you for shopping'
                             }
                          }
                          
                          export function validatePaymentMethod(method) {
                            if(method=="upi" || "card" || "cod")
                                return true
                            else
                                return false
                          }
                          
                          function generateOrderId() {
                            // Generate random order ID
                            return 'ORD' + Date.now();
                          }
