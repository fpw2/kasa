import "../styles/banner.css"

export default function Banner({background, text}) {
    return (
        <div className={`banner-${background}`}>
            <h1 className={`banner-text ${text}`}>Chez vous, partout et ailleurs</h1>
        </div>
    )
}