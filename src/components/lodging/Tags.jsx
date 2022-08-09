export default function Tags({tags}) {
    return tags.map((tag,index) => <span key={index} className="tag primary-white">{tag}</span>)
}