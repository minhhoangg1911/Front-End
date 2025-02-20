import { useNavigate, useParams } from "react-router-dom";
import SimilarRoom from "./SimilarRoom"
import { useHotelQuery } from "@/utils/api/query/useRoom";
import { jwtDecode } from 'jwt-decode';
import { useShoppingCartInItemQuery, useUpdateShoppingCart } from "@/utils/api/query/useShoppingCart";
import { useAuthStore, useShoppingCartStore } from "@/store";
import { toast } from "react-toastify";

const RoomDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { updateQuantity } = useShoppingCartStore.getState();
    const { setIsOpen } = useAuthStore();
    // const addToCart = useCartStore((state) => state.addToCart);
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
    const hotelId = parseInt(id || '0', 10);

    // Gọi query với id
    const { data } = useHotelQuery(hotelId);


    const { data: shoppingCartInItemData } = useShoppingCartInItemQuery(id as any)


    const { mutate: updateShoppingCart } = useUpdateShoppingCart();


    const handleAddToCart = async (event: any) => {
        event.preventDefault();

        if (!user?.userId) {
            navigate("/login");
            return;
        }
        // setIsAddingToCart(true);
        const payload = {
            userId: user.userId,
            roomId: parseInt(id || '0', 10),
            updateQuantityBy: 1,
        };

        updateShoppingCart(payload as any);
        updateQuantity(payload.roomId, shoppingCartInItemData?.quantity, { roomId: payload.roomId, name: data?.roomName, quantity: shoppingCartInItemData?.quantity || 1, price: data?.price })
        toast.success("Đã thêm vào giỏ hàng")
        setIsOpen(true)
    }




    return (
        <div className="container-xl">
            <div className="mb-[100px]">
                <div className="my-[50px]">
                    <div className="flex items-center gap-[6px] text-[#f64f02] uppercase mb-2 text-sm leading-[1.2]">
                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659b299906d5895eeb0229b_ic-subtitle.svg' />
                        <div className="font-Switzer">Explore Room</div>
                    </div>
                    <h1 className="text-black text-[48px] font-Switzer font-normal max-sm:text-[30px] ">{data?.roomName}
                    </h1>
                </div>
                <div className="flex gap-x-[50px] justify-between items-start max-lg:flex-col">
                    <div className="flex flex-col gap-y-[60px] w-full max-w-74%">
                        <div>
                            <img className="rounded-[10px]" src='https://cdn.prod.website-files.com/665ad48cef8cc551376f7777/665d6e20c8d590035eff1b4b_room-main-01.jpg' />
                        </div>
                        <div>
                            <p className="mb-[10px]">In morbi urna diam non. Nam egestas id odio arcu bibendum ipsum eleifend. Tellus posuere mattis gravida sed. Lacus neque morbi ornare faucibus quam tincidunt velit urna adipiscing. Commodo sit ut quis sed vitae. Mauris tristique placerat pharetra imperdiet fringilla magna mollis tristique volutpat. In cras egestas sagittis amet eleifend nullam nisi tempor posuere. Nec pulvinar vitae fusce vulputate fusce metus senectus dui mi. Potenti ut dolor amet blandit nulla.</p>
                            <p className="mb-[10px]">Diam faucibus nisi arcu non in. Dui diam ut risus justo semper. Adipiscing orci nec nunc faucibus lacus. Nec iaculis eu metus dapibus. Risus consequat purus cursus quis sem. Commodo justo vulputate ipsum pretium metus dolor pellentesque. In orci velit odio sed massa est et etiam.</p>
                        </div>
                        <div>
                            <h3 className="text-[#000] mt-0 text-[28px] font-medium leading-[150%]">Amenities</h3>
                            <div>
                                <div className="grid gap-[30px] auto-cols-[1fr] grid-cols-3 grid-rows-auto max-md:grid-cols-2">
                                    <div className="flex flex-col gap-y-[40px] border border-[rgba(0,0,0,0.1)] rounded-[10px] justify-between items-stretch w-full p-5 text-[14px] leading-[150%]">
                                        <div className="flex gap-x-[60px] justify-between items-center">
                                            <div>Airport Pickup</div>
                                            <div>
                                                <img src='https://cdn.prod.website-files.com/665ad48cef8cc551376f7777/665d63c894951391d2497a8a_ic-airplane.svg' />
                                            </div>
                                        </div>
                                        <div>Vestibulum pretium tortor purus ut nulla pulvinar neque.</div>
                                    </div>
                                    <div className="flex flex-col gap-y-[40px] border border-[rgba(0,0,0,0.1)] rounded-[10px] justify-between items-stretch w-full p-5 text-[14px] leading-[150%]">
                                        <div className="flex gap-x-[60px] justify-between items-center">
                                            <div>Fiber Internet</div>
                                            <div>
                                                <img src='https://cdn.prod.website-files.com/665ad48cef8cc551376f7777/665d63ecbc07a265e7fe79c5_ic-fiber.svg' />
                                            </div>
                                        </div>
                                        <div>Diam euismod purus sagittis magna donec pellentesque arcu.</div>
                                    </div>
                                    <div className="flex flex-col gap-y-[40px] border border-[rgba(0,0,0,0.1)] rounded-[10px] justify-between items-stretch w-full p-5 text-[14px] leading-[150%]">
                                        <div className="flex gap-x-[60px] justify-between items-center">
                                            <div>Fitness Center</div>
                                            <div>
                                                <img src='https://cdn.prod.website-files.com/665ad48cef8cc551376f7777/665d6419431bcc1d02533e6a_ic-fitness.svg' />
                                            </div>
                                        </div>
                                        <div>Gravida morbi dictum hendrerit id etiam duis dignissim vitae arcu.</div>
                                    </div>
                                    <div className="flex flex-col gap-y-[40px] border border-[rgba(0,0,0,0.1)] rounded-[10px] justify-between items-stretch w-full p-5 text-[14px] leading-[150%]">
                                        <div className="flex gap-x-[60px] justify-between items-center">
                                            <div>Laundry Services</div>
                                            <div>
                                                <img src='https://cdn.prod.website-files.com/665ad48cef8cc551376f7777/665d6427d7ee4269a7511f8e_ic-laundry.svg' />
                                            </div>
                                        </div>
                                        <div>Id cras sit molestie eget a que tempus blandit sed ultricies sed.</div>
                                    </div>
                                    <div className="flex flex-col gap-y-[40px] border border-[rgba(0,0,0,0.1)] rounded-[10px] justify-between items-stretch w-full p-5 text-[14px] leading-[150%]">
                                        <div className="flex gap-x-[60px] justify-between items-center">
                                            <div>Lunch & Breakfast</div>
                                            <div>
                                                <img src='https://cdn.prod.website-files.com/665ad48cef8cc551376f7777/665d6449bc07a265e7feced8_ic-lunch.svg' />
                                            </div>
                                        </div>
                                        <div>Odio felis vitae nullam ipsum oncus eu vestibulum.</div>
                                    </div>
                                    <div className="flex flex-col gap-y-[40px] border border-[rgba(0,0,0,0.1)] rounded-[10px] justify-between items-stretch w-full p-5 text-[14px] leading-[150%]">
                                        <div className="flex gap-x-[60px] justify-between items-center">
                                            <div>Swimming Pool</div>
                                            <div>
                                                <img src='https://cdn.prod.website-files.com/665ad48cef8cc551376f7777/665d6439f6fe408cd0697b72_ic-swimming.svg' />
                                            </div>
                                        </div>
                                        <div>Sit feugiat ac odio fermentum eleifend viverra enim velit risus.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-[20px] text-[#000] text-[28px] font-normal leading-[150% mt-0]">Room Rules</h3>
                            <div>
                                <ul className="list-disc flex flex-col gap-y-[15px] pl-[30px]">
                                    <li>Check-in time is 3:00 PM; check-out time is 11:00 AM.</li>
                                    <li>No smoking allowed inside the room. Designated smoking areas are available outside.
                                    </li>
                                    <li>Please conserve water and electricity by turning off lights and appliances when not in use.</li>
                                    <li>Guests are responsible for locking the doors and securing their belongings.</li>
                                    <li>Room keys must be returned at check-out. Lost keys incur a replacement fee.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex sticky flex-col gap-y-[40px] border border-[rgba(0,0,0,0.1)] rounded-[10px] max-w-[26%] p-10 w-full justify-start items-stretch top-[20px] max-lg:max-w-[54%] max-lg:mt-[10px] max-sm:max-w-[100%] max-sm:mt-[10px]">
                        <div>
                            <div>
                                <h5 className="mb-[26px] text-black font-bold leading-[150%] text-[18px] mt-0">Information</h5>
                                <div className="grid gap-[25px] grid-rows-auto grid-cols-2 auto-cols-[1fr]">
                                    <div className="flex gap-x-2 items-center leading-[150%] text-[14px]">
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d8362f53f09871d3569a0_ic-sq.svg' />
                                        <div className="text-[14px]">{data?.areaSqFt} sq ft</div>
                                    </div>
                                    <div className="flex gap-x-2 items-center leading-[150%] text-[14px]">
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d8362f53f09871d3569a0_ic-sq.svg' />
                                        <div className="text-[14px]">{data?.capacity} People</div>
                                    </div>
                                    <div className="flex gap-x-2 items-center leading-[150%] text-[14px]">
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d8362f53f09871d3569a0_ic-sq.svg' />
                                        <div className="text-[14px]">{data?.bed} Bed</div>
                                    </div>
                                    <div className="flex gap-x-2 items-center leading-[150%] text-[14px]">
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d8362f53f09871d3569a0_ic-sq.svg' />
                                        <div className="text-[14px]">2 Bathrooms</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-[40px] text-[#000] border-y border-[rgba(0,0,0,0.1)] justify-between items-center my-[26px] py-[26px] ">
                                <div>Per Night:</div>
                                <div className="text-[20px] font-medium leading-[150%] max-sm:text-[18px]">$&nbsp;{data?.price}&nbsp;USD</div>
                            </div>
                            <div>
                                <h5 className="mb-[26px] text-[#000] text-[18px] font-bold leading-[150%]">Extra Services</h5>
                                <div className="flex flex-col gap-y-[16px]">
                                    <div className="flex gap-x-[40px] justify-between items-center leading-[150%]">
                                        <div className="text-[14px]">Free Private Parking</div>
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d938c26b835330a45ccc4_ic-parking.svg' />
                                    </div>
                                    <div className="flex gap-x-[40px] justify-between items-center leading-[150%]">
                                        <div className="text-[14px]">Kids Play Area</div>
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d938cd7a7c76f6bb4324f_ic-child.svg' />
                                    </div>
                                    <div className="flex gap-x-[40px] justify-between items-center leading-[150%]">
                                        <div className="text-[14px]">Free Early Check in</div>
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d938cd81f75be3ca17c71_ic-cehck-in.svg' />
                                    </div>
                                    <div className="flex gap-x-[40px] justify-between items-center leading-[150%]">
                                        <div className="text-[14px]">Delicious Meals & Snacks</div>
                                        <img src='https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/665d938cba91c9808c3b2760_ic.svg' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form className="flex flex-col mb-0 group" >
                                <button
                                    onClick={handleAddToCart}
                                    className="bg-color-1 text-[#fff] rounded-[50px] py-[10px] px-[20px] text-[14px] leading-[120%] cursor-pointer no-underline group-hover:bg-[#000] duration-300"
                                >
                                    Book Room
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <SimilarRoom />
        </div>
    )
}

export default RoomDetail