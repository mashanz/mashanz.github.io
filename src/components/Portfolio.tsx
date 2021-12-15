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
        <section className="bg-gray-800">
            <h1 className="font-mono text-center py-4 text-yellow-500 font-bold text-2xl">./projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-2xl md:mx-auto mx-4">
                <PortfolioItem title="Fastrack Academy" description="Learn to Become Full Stack Developer" image="https://www.sgs.co.id/-/media/global/images/structural-website-images/hero-images/hero-agri-forestry.jpg" url="https://fastrack.mashanz.com" />
                <PortfolioItem title="Expanse Tracker" description="Track Your Daily Spanding Easily" image="https://www.treehugger.com/thmb/QolJfOYFmxwIH6Sxv5SBqY8Kq-M=/1885x1414/smart/filters:no_upscale()/GettyImages-1273584292-cbcd5f85f4c646d58f7a7fa158dcaaeb.jpg" url="https://fastrack.mashanz.com" />
                <PortfolioItem title="On Demand Requests" description="Request Anything You Want" image="https://qph.fs.quoracdn.net/main-qimg-c3816870e88d018ed5c3308f2856fabe" url="https://fastrack.mashanz.com" />
            </div>
        </section>
    )
}

export default Portfolio;