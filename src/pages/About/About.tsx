import Service from "@/components/Service"
import AboutWrap from "./AboutWrap"
import Impact from "@/components/Impact"
import Review from "@/components/Review"
import Team from "@/components/Team"
import Blog from "@/components/Blog"
import Question from "@/components/Question"
import Cta from "@/components/Cta"

const About = () => {
    return (
        <div>
            <AboutWrap />
            <Service />
            <Impact />
            <Review />
            <Team />
            <Blog />
            <Question />
            <Cta />
        </div>
    )
}

export default About