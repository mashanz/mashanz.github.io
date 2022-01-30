import Heading from './Heading';
import { Link } from "react-router-dom";

function PortfolioItem({ title = 'Title', description = 'description', image = '/', url = '#', is_link = false }) {
    if (is_link) {
        return (
            <Link className="bg-gray-100 max-w-sm mx-auto w-full rounded-lg" to={url}>
                <img className="object-cover w-full h-32 rounded-t-lg" src={image} alt="" />
                <div className="pt-2 px-2 font-bold">{title}</div>
                <div className="pb-2 px-2">{description}</div>
            </Link>
        )
    } else {
        return (
            <a className="bg-gray-100 max-w-sm mx-auto w-full rounded-lg" href={url}>
                <img className="object-cover w-full h-32 rounded-t-lg" src={image} alt="" />
                <div className="pt-2 px-2 font-bold">{title}</div>
                <div className="pb-2 px-2">{description}</div>
            </a>
        )
    }
}

function Portfolio() {
    return (
        <section>
            <Heading title='./projects' />
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl md:max-w-2xl mx-auto">
                <PortfolioItem title="Profile CLI" description="Show my simple profilefrom Node CLI" image="https://static.npmjs.com/338e4905a2684ca96e08c7780fc68412.png" url="https://www.npmjs.com/package/mashanz" />
                <PortfolioItem title="Fastrack Academy" description="Learn to Become Full Stack Developer" image="https://fastrack.mashanz.com/static/course/meta.png" url="https://fastrack.mashanz.com" />
                <PortfolioItem title="Expanse Tracker" description="Track Your Daily Spanding Easily" image="https://user-images.githubusercontent.com/9214059/138811707-abce8f65-4209-483a-a18a-e67ade70216a.png" url="https://mashanz.com/logbook-django/" />
                <PortfolioItem title="On Demand Requests" description="Request Anything You Want" image="./mashanz_logo.png" url="/ondemand" is_link={true} />
                <PortfolioItem title="KBBI versi CLI" description="Kamus Besar Bahasa Indonesia versi Command Line" image="https://pbs.twimg.com/media/FKAGK46aMAEr-x7?format=jpg&name=medium" url="https://github.com/mashanz/kbbi-cli" />
            </div>
        </section>
    )
}

export default Portfolio;
