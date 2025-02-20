import { useState } from 'react';
import './style.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore, useShoppingCartStore } from '@/store';
import { jwtDecode } from 'jwt-decode';
// import { loadStripe } from "@stripe/stripe-js";
import { useShoppingCartQuery, useUpdateShoppingCart } from '@/utils/api/query/useShoppingCart';
import { fetchPayment } from '@/utils/api/service/paymentService';
import { toast } from 'react-toastify';

const Navbar = () => {
    const shoppingCartFromStore = useShoppingCartStore((state) => state.cartItems);
    const { updateQuantity, removeFromCart } = useShoppingCartStore.getState();
    const location = useLocation();
    const navigate = useNavigate();
    const [isIcon, setIsIcon] = useState(false);
    const { logout, isAuthenticationUser, isOpen, setIsOpen } = useAuthStore();
    const accessToken = localStorage.getItem('accessToken') ?? '';
    let user: any = null;
    try {
        if (accessToken) {
            user = jwtDecode(accessToken);
        }
    } catch (error) {
        localStorage.removeItem('accessToken');
        console.log(error);

    }


    // const { data } = useShoppingCartQuery(user?.userId)
    const ShoppingCartQuery = useShoppingCartQuery(user?.userId)



    const mutation = useUpdateShoppingCart();

    const handleQuantity = async (updateQuantityBy: number, cartItem: any) => {

        if ((updateQuantityBy === -1 && cartItem.quantity === 1) || updateQuantityBy === 0) {
            // remove the item
            await mutation.mutate({ roomId: cartItem.hotelRoom.id, updateQuantityBy: 0, userId: user.userId });
            removeFromCart(cartItem.hotelRoom.id);
            // console.log("hotel Id", cartItem.hotelRoom.id)
        } else {
            // update the quantity with the new quantity
            await mutation.mutate({ roomId: cartItem.hotelRoom.id, updateQuantityBy, userId: user.userId }); // Cập nhật số lượng món hàng
            updateQuantity(cartItem.hotelRoom.id, cartItem.quantity + updateQuantityBy, cartItem);
        }
        // console.log("updateQuantity", updateQuantity)

    };


    // const stripePromise = loadStripe("pk_test_51PgVjtEIEihN5bYygVXmwOtWYdhNbSIElgNmnfM46Vd7DXDBbV4Zgvw3fPOja2wZnZbKO2WMr59yH6NDaAE9Uhqj00rU4p8P0J");

    const handleSubmit = async () => {

        if (shoppingCartFromStore?.length === 0) {
            toast.warning("Giỏ hàng của bạn chưa có sản phẩm!")
            return;
        }
        console.log("Fetching payment for userId:", user?.userId);

        if (!user?.userId) {
            console.error("Lỗi: userId không hợp lệ", user);
            alert("Có lỗi xảy ra! Vui lòng đăng nhập lại.");
            return;
        }
        if (isAuthenticationUser) {
            try {
                const response = await fetchPayment(user?.userId);
                const paymentUrl = response.data.paymentUrl
                console.log("response", response)
                console.log("response", response.data.paymentUrl)
                window.location.href = paymentUrl
                if (response) {
                    toast.success("Thanh Toán")
                }

            } catch (error) {
                console.error("Error during checkout:", error);
            }
        } else {
            navigate('/login')
        }

    }

    const openCart = () => {
        setIsOpen(true);
    };

    const closeCart = () => {
        setIsOpen(false);
    };

    const openIcon = () => {
        setIsIcon(true);
    }

    const closeIcon = () => {
        setIsIcon(false);
    }

    return (
        <>
            <div className={`${location.pathname === '/' ? '' : 'border-b border-[rgba(0,0,0,0.1)]'} w-full`}>
                <nav className="max-lg:justify-end max-sm:relative max-sm:justify-end flex container-xl justify-between items-center py-4 px-4  ">
                    <div className=" flex items-center space-x-6 ">
                        <NavLink to="/" className="max-lg:hidden max-sm:hidden text-[#000000] text-sm px-3 hover:text-[#f64f02] transition duration-300 font-Switzer">HOME</NavLink>
                        <NavLink to="/about" className="max-lg:hidden max-sm:hidden text-[#000000] text-sm  px-3 hover:text-[#f64f02] transition duration-300 font-Switzer ">ABOUT US</NavLink>
                        <NavLink to="/rooms" className="max-lg:hidden max-sm:hidden text-[#000000] text-sm px-3 hover:text-[#f64f02] transition duration-300 font-Switzer">ROOMS</NavLink>
                        <div className="max-lg:hidden max-sm:hidden relative group">
                            <button className="hover:text-[#f64f02] transition duration-300 text-sm px-2 uppercase font-Switzer">
                                Resources
                            </button>
                            <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66596b60e9133e82b26a9cc5_ix-dropdown.svg" alt="Arrow" className="fas fa-chevron-down"></img>
                            <div className="absolute top-10 left-0 mt-2 w-48 bg-[#fffdf5] text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
                                <NavLink to="/blogs" className="block px-4 py-2 hover:text-[#f64f02] transition duration-300">Blogs</NavLink>
                                <NavLink to="/faq" className="block px-4 py-2 hover:text-[#f64f02] transition duration-300">FAQ's</NavLink>
                                <NavLink to="/reviews" className="block px-4 py-2 hover:text-[#f64f02] transition duration-300">Reviews</NavLink>
                                <NavLink to="/guide" className="block px-4 py-2 hover:text-[#f64f02] transition duration-300">Style Guide</NavLink>
                            </div>
                        </div>
                        <NavLink to="#" className="flex gap-[5px] text-[#000000] text-sm px-3 hover:text-[#f64f02] transition duration-300 font-Switzer" onClick={openCart}>
                            <div>CART</div>
                            <div>
                                {shoppingCartFromStore?.length === 0 ? (
                                    <div> (0)</div>
                                ) : <div> ({shoppingCartFromStore?.length})</div>}
                            </div>

                        </NavLink>
                        <div className='max-lg:left-[0%] max-lg:p-2 max-sm:left-[0%] max-sm:p-2 absolute left-[50%] '>
                            <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66596676a508b89f2d8e0af5_cruise.svg" loading="lazy" alt="Cruise" />
                        </div>

                        {isIcon ?
                            <div className='hidden max-lg:block max-sm:block w-full cursor-pointer' onClick={closeIcon}><i className="fa-solid fa-x"></i></div>
                            : <div className='hidden max-lg:block max-sm:block w-full cursor-pointer' onClick={openIcon}><i className="fa-solid fa-bars"></i></div>}
                    </div>
                    <div className="max-lg:hidden max-sm:hidden flex items-center space-x-4">
                        <button className="flex items-center space-x-2 px-4">
                            <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665968abc64483f660664584_ic-login.svg" loading="lazy" alt="Login Icon"></img>

                            {!user ?
                                <span className='text-[14px] text-[#000000]'>
                                    <NavLink to='/login'>LOGIN</NavLink>
                                </span> :
                                <span className='text-[14px] text-[#000000]'>
                                    <NavLink to='' onClick={logout} >Logout</NavLink>
                                </span>
                            }
                        </button>
                        <button className="contact-button border border-black rounded-full px-4 py-1 hover:bg-[#f64f02] hover:text-white hover:scale-105 transition duration-300 hover:border-transparent">
                            <NavLink to='/contact'>
                                Contact us
                            </NavLink>
                        </button>
                    </div>
                </nav>
            </div>
            {isIcon && (
                <nav className='max-lg:block max-sm:block hidden z-50 relative w-full' >
                    <div className='max-lg:flex max-sm:flex p-3 flex-col gap-[20px]  top-[100%] z-50 left-[0%] w-full duration-300  bg-[#fffdf5] hidden '>
                        <NavLink to="/" className=" text-[#000000] text-sm px-3 hover:text-[#f64f02] transition duration-300 font-Switzer">HOME</NavLink>
                        <NavLink to="/about" className=" text-[#000000] text-sm  px-3 hover:text-[#f64f02] transition duration-300 font-Switzer ">ABOUT US</NavLink>
                        <NavLink to="/rooms" className=" text-[#000000] text-sm px-3 hover:text-[#f64f02] transition duration-300 font-Switzer">ROOMS</NavLink>

                        <div className="group">
                            <div className='flex justify-between'>
                                <button className="hover:text-[#f64f02] transition duration-300 text-sm px-2 uppercase font-Switzer">
                                    Resources
                                </button>
                                <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66596b60e9133e82b26a9cc5_ix-dropdown.svg" alt="Arrow" className="fas fa-chevron-down"></img>
                            </div>
                            <div className="hidden top-15 left-0 mt-2 w-full bg-[#fffdf5] text-black rounded-md  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40 group-hover:block ">
                                <NavLink to="/blogs" className="block px-4 py-2 hover:text-[#f64f02] transition duration-300">Blogs</NavLink>
                                <NavLink to="/faq" className="block px-4 py-2 hover:text-[#f64f02] transition duration-300">FAQ's</NavLink>
                                <NavLink to="/reviews" className="block px-4 py-2 hover:text-[#f64f02] transition duration-300">Reviews</NavLink>
                                <NavLink to="/guide" className="block px-4 py-2 hover:text-[#f64f02] transition duration-300">Style Guide</NavLink>
                            </div>
                            {
                                !user ?
                                    <input className='p-2 w-full text-center border-[#f64f02] bg-[#f64f02] text-white flex justify-center items-center mt-3 rounded-[50px] cursor-pointer' readOnly value="login" onClick={() => navigate("/login")} />
                                    :
                                    <input className='p-2 w-full text-center border-[#f64f02] bg-[#f64f02] text-white flex justify-center items-center mt-3 rounded-[50px] cursor-pointer' readOnly value="logout" onClick={logout} />

                            }
                            {/* <input className='p-2 w-full text-center border-[#f64f02] bg-[#f64f02] text-white flex justify-center items-center mt-3 rounded-[50px] cursor-pointer' readOnly value="login" onClick={() => navigate("/login")} /> */}
                            <div className='p-2 w-full text-center text-black border border-black rounded-full py-2.5 px-5 text-sm leading-tight no-underline transition-all duration-300 mt-3'>
                                <NavLink to='/contact'>
                                    Contact us
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            )}
            <div className="">
                {/*isCartOpen*/}
                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex  justify-center items-center z-50" onClick={closeCart}>
                        <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]" onClick={(e) => e.stopPropagation()}>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">Your Cart</h2>
                                <button className="text-gray-800" onClick={closeCart}><i className="fas fa-times"></i></button>
                            </div>
                            <hr className="mb-4" />

                            {shoppingCartFromStore?.map((cartItem: any, index: number) => {
                                return (
                                    <div key={index}>
                                        <div className='flex gap-5 justify-between item' >
                                            <div className='flex gap-5'>
                                                <div>
                                                    <img className='w-[70px]' src={cartItem.hotelRoom?.image} />
                                                </div>
                                                <div>
                                                    <h1 className='text-[20px] font-bold'>{cartItem.hotelRoom?.roomName}</h1>
                                                    <div>$ {cartItem.hotelRoom?.price} USD</div>
                                                    <div className='group py-4'>
                                                        <div className='group-hover:underline cursor-pointer'
                                                            onClick={() => handleQuantity(0, cartItem)}
                                                        >Remove</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='flex items-start gap-5'>
                                                <button
                                                    onClick={() => handleQuantity(-1, cartItem)}
                                                >
                                                    -
                                                </button>
                                                <div>{cartItem.quantity}</div>
                                                <button
                                                    onClick={() => handleQuantity(+1, cartItem)}
                                                >
                                                    +</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <hr />
                            <div className='flex gap-5 py-5 justify-between'>
                                <div>Subtotal</div>
                                <div className='font-bold'>$ {shoppingCartFromStore?.length === 0 ? 0 : ShoppingCartQuery?.data?.cartTotal}  USD</div>
                            </div>
                            <div className='w-full text-center group '>
                                <button className='group-hover:bg-[#000] duration-300 text-[#fff] bg-color-1 w-full p-2 rounded-[30px] '
                                    onClick={handleSubmit}
                                >Continue to checkout</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>

    )
}

export default Navbar;