export default function Name({name}) {
    const fullName = name.split(" ")
    const firstName = fullName[0]
    const lastName = fullName[1]

    return(<>
        <span>{firstName}</span>
        <span>{lastName}</span>
    </>)
}