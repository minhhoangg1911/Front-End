import { useState } from 'react';
import './style.css'
import { useLocation } from 'react-router-dom';
// import axios, { AxiosResponse } from 'axios';

// interface Post {
//     id: number;
//     title: string;
//     content: string;
// }

const Navbar = () => {
    const location = useLocation();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isIcon, setIsIcon] = useState(false);

    // const fetchPosts = async () => {
    //     try {

    //         const response: AxiosResponse<Post[]> = await axios.get('http://localhost:4000/posts');
    //         console.log(response.data);  // response.data có kiểu Post[]
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };



    // const createPost = async () => {
    //     const newPost = {
    //         title: 'Bài viết mới',
    //         views: 0,
    //     };
    //     try {
    //         const response = await axios.post('http://localhost:4000/posts', newPost);
    //         console.log('Bài viết đã được tạo:', response.data);
    //     } catch (error) {
    //         console.error('Lỗi khi tạo bài viết:', error);
    //     }
    // };

    // const deletePost = async (postId: string) => {
    //     try {
    //         await axios.delete(`http://localhost:4000/posts/${postId}`);
    //         console.log(`Bài viết có ID ${postId} đã được xóa`);
    //     } catch (error) {
    //         console.error('Lỗi khi xóa bài viết:', error);
    //     }
    // };


    // useEffect(() => {
    //     fetchPosts();

    // }, [])


    const openCart = () => {
        setIsCartOpen(true);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    const openIcon = () => {
        setIsIcon(true);
    }

    const closeIcon = () => {
        setIsIcon(false);
    }

    return (
        <>
            {/* <button onClick={createPost}>Post</button>
            <button onClick={() => deletePost('7f18')}>Delete</button> */}
            <div className={`${location.pathname === '/' ? '' : 'border-b border-[rgba(0,0,0,0.1)]'} w-full`}>
                <nav className="max-lg:justify-end max-sm:relative max-sm:justify-end flex container-xl justify-between items-center py-4 px-4  ">
                    <div className=" flex items-center space-x-6 ">
                        <a href="/" className="max-lg:hidden max-sm:hidden text-[#000000] text-sm px-3 hover:text-[#f64f02] transition duration-300 font-Switzer">HOME</a>
                        <a href="/about" className="max-lg:hidden max-sm:hidden text-[#000000] text-sm  px-3 hover:text-[#f64f02] transition duration-300 font-Switzer ">ABOUT US</a>
                        <a href="/rooms" className="max-lg:hidden max-sm:hidden text-[#000000] text-sm px-3 hover:text-[#f64f02] transition duration-300 font-Switzer">ROOMS</a>
                        <div className="max-lg:hidden max-sm:hidden relative group">
                            <button className="hover:text-[#f64f02] transition duration-300 text-sm px-2 uppercase font-Switzer">
                                Resources
                            </button>
                            <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66596b60e9133e82b26a9cc5_ix-dropdown.svg" alt="Arrow" className="fas fa-chevron-down"></img>
                            <div className="absolute top-10 left-0 mt-2 w-48 bg-[#fffdf5] text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
                                <a href="/blogs" className="block px-4 py-2 hover:text-[#f64f02] transition duration-300">Blogs</a>
                                <a href="/faq" className="block px-4 py-2 hover:text-[#f64f02] transition duration-300">FAQ's</a>
                                <a href="/reviews" className="block px-4 py-2 hover:text-[#f64f02] transition duration-300">Reviews</a>
                                <a href="/guide" className="block px-4 py-2 hover:text-[#f64f02] transition duration-300">Style Guide</a>
                            </div>
                        </div>
                        <a href="#" className="flex gap-[5px] text-[#000000] text-sm px-3 hover:text-[#f64f02] transition duration-300 font-Switzer" onClick={openCart}>
                            <div>CART</div>
                            <div> (0)</div>
                        </a>
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
                            <span className='text-[14px] text-[#000000]'>
                                <a href='/login'>LOGIN</a>
                            </span>
                        </button>
                        <button className="contact-button border border-black rounded-full px-4 py-1 hover:bg-[#f64f02] hover:text-white hover:scale-105 transition duration-300 hover:border-transparent">
                            <a href='/contact'>
                                Contact us
                            </a>
                        </button>
                    </div>
                </nav>
            </div>
            {isIcon && (
                <nav className='max-lg:block max-sm:block hidden z-50 relative w-full' >
                    <div className='max-lg:flex max-sm:flex p-3 flex-col gap-[20px]  top-[100%] z-50 left-[0%] w-full duration-300  bg-[#fffdf5] hidden '>
                        <a href="/" className=" text-[#000000] text-sm px-3 hover:text-[#f64f02] transition duration-300 font-Switzer">HOME</a>
                        <a href="/about" className=" text-[#000000] text-sm  px-3 hover:text-[#f64f02] transition duration-300 font-Switzer ">ABOUT US</a>
                        <a href="/rooms" className=" text-[#000000] text-sm px-3 hover:text-[#f64f02] transition duration-300 font-Switzer">ROOMS</a>

                        <div className="group">
                            <div className='flex justify-between'>
                                <button className="hover:text-[#f64f02] transition duration-300 text-sm px-2 uppercase font-Switzer">
                                    Resources
                                </button>
                                <img src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/66596b60e9133e82b26a9cc5_ix-dropdown.svg" alt="Arrow" className="fas fa-chevron-down"></img>
                            </div>
                            <div className="hidden top-15 left-0 mt-2 w-full bg-[#fffdf5] text-black rounded-md  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40 group-hover:block ">
                                <a href="/blogs" className="block px-4 py-2 hover:text-[#f64f02] transition duration-300">Blogs</a>
                                <a href="/faq" className="block px-4 py-2 hover:text-[#f64f02] transition duration-300">FAQ's</a>
                                <a href="/reviews" className="block px-4 py-2 hover:text-[#f64f02] transition duration-300">Reviews</a>
                                <a href="/guide" className="block px-4 py-2 hover:text-[#f64f02] transition duration-300">Style Guide</a>
                            </div>
                            <input className='p-2 w-full text-center border-[#f64f02] bg-[#f64f02] text-white flex justify-center items-center mt-3 rounded-[50px]' value="login" />
                            <div className='p-2 w-full text-center text-black border border-black rounded-full py-2.5 px-5 text-sm leading-tight no-underline transition-all duration-300 mt-3'>
                                <button>Contact us</button>
                            </div>
                        </div>
                    </div>
                </nav>
            )}
            <div className="">
                {isCartOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex  justify-center items-center z-50" onClick={closeCart}>
                        <div className="bg-white p-8 rounded-lg shadow-lg w-96" onClick={(e) => e.stopPropagation()}>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">Your Cart</h2>
                                <button className="text-gray-800" onClick={closeCart}><i className="fas fa-times"></i></button>
                            </div>
                            <hr className="mb-4" />
                            <p className="text-center text-gray-600">No items found.</p>

                        </div>
                    </div>
                )}
            </div>
        </>

    )
}

export default Navbar;