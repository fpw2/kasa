import "../styles/banner.css"

export default function Banner({type}) {
    return (
        <div className={`banner-${type}`}>
            <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
        </div>
    )
}