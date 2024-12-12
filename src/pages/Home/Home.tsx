import Hero from "@/components/shared/Hero/Hero"
import Culture from "./Culture"
import ListRoom from "./ListRoom/ListRoom"
import Service from "../../components/Service"
import Fact from "./Fact"
import Review from "../../components/Review"
import Blog from "../../components/Blog"
import Cta from "../../components/Cta"
import Instagram from "./Instagram"


const Home = () => {

    return (
        <div>
            < Hero />
            <Culture />
            <ListRoom />
            <Service />
            <Fact />
            <Review />
            <Blog />
            <Cta />
            <Instagram />
        </div >
    )
}

export default Home