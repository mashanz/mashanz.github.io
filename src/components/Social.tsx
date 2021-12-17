import linkedin from 'bootstrap-icons/icons/linkedin.svg';
import github from 'bootstrap-icons/icons/github.svg';
import journalCode from 'bootstrap-icons/icons/journal-code.svg';
import twitter from 'bootstrap-icons/icons/twitter.svg';
import youtube from 'bootstrap-icons/icons/youtube.svg';
import envelope from 'bootstrap-icons/icons/envelope.svg';

function SocialItem({ title='', icon=linkedin, link='#' }) {
    return (
        <a className="flex rounded-br-md justify-center md:justify-start m-1 bg-gray-100 rounded-lg" href={link} target='_blank' rel='noreferrer'>
            <img className="m-1 w-10 h-10" src={icon} alt="" />
            <span className="ml-2 font-bold flex items-center justify-center">{title}</span>
        </a>
    );
}

function Social() {
    return (
        <section className="md:pt-0">
            <h1 className="font-mono text-center py-4 text-yellow-500 font-bold text-2xl">./socials</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-2xl md:mx-auto px-4 md:px-0 gap-2">
                <SocialItem title="Blog Posts" icon={journalCode} link={'https://mashanz.com'} />
                <SocialItem title="LinkedIn" icon={linkedin} link={'https://www.linkedin.com/in/mashanz/'} />
                <SocialItem title="GitHub" icon={github} link={'https://github.com/mashanz'} />
                <SocialItem title="Twitter" icon={twitter} link={'https://twitter.com/papanberjalan'} />
                <SocialItem title="YouTube" icon={youtube} link={'https://www.youtube.com/channel/UCoEEOSnEpEIVA8MNz4PxGog'} />
                <SocialItem title="Mail" icon={envelope} link={'mailto:hanjara@centragro.org'} />
            </div>
        </section>
    );
}

export default Social;