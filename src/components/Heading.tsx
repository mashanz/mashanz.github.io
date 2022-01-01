export default function Heading({ title = 'Title' }) {
    return (
        <h1 className="font-mono text-center py-4 text-yellow-500 font-bold text-2xl">{title}</h1>
    )
}