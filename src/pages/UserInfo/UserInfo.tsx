import { jwtDecode } from "jwt-decode";

const UserInfo = () => {
    // const accessToken = localStorage.getItem('accessToken') ?? '';
    // const user: any = jwtDecode(accessToken);
    // console.log(JSON.stringify(user))
    // console.log(user.userId);
    const accessToken = localStorage.getItem('accessToken') ?? '';
    let user: any = null;
    try {
        if (accessToken) {
            user = jwtDecode(accessToken);
        }
    } catch (error) {
        // localStorage.removeItem('accessToken'); 
        console.log(error);
    }

    return (
        <div className="text-center p-2">
            <h1 className="font-bold text-[30px]" >UserInfo</h1>
            <div>UserId: {user?.userId}</div>
            <div>Name: {user?.name}</div>
            <div>Email: {user?.email}</div>
            <div>Role: {user?.role}</div>
        </div>
    )
}

export default UserInfo