function PortfolioItem({ title='Title', description='description', image='/', url='#' }) {
    return (
        <a className="bg-gray-100 max-w-sm m-1 rounded-lg" href={url}>
            <img className="object-cover w-full h-32 rounded-t-lg" src={image} alt="" />
            <div className="pt-2 px-2 font-bold">{title}</div>
            <div className="pb-2 px-2">{description}</div>
        </a>
    )
}

function Portfolio() {
    return (
        <section>
            <h1 className="font-mono text-center py-4 text-yellow-500 font-bold text-2xl">./projects</h1>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 md:max-w-2xl md:mx-auto mx-4">
                <PortfolioItem title="Fastrack Academy" description="Learn to Become Full Stack Developer" image="https://fastrack.mashanz.com/static/course/meta.png" url="https://fastrack.mashanz.com" />
                <PortfolioItem title="Expanse Tracker" description="Track Your Daily Spanding Easily" image="https://user-images.githubusercontent.com/9214059/138811707-abce8f65-4209-483a-a18a-e67ade70216a.png" url="https://fastrack.mashanz.com" />
                <PortfolioItem title="On Demand Requests" description="Request Anything You Want" image="./mashanz_logo.png" url="https://fastrack.mashanz.com" />
            </div>
        </section>
    )
}

export default Portfolio;