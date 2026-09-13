

export default function Button({text}) {
    return (
        <a className={`btn ${text.toLowerCase()}`} href={text === "linkedin"?"https://www.linkedin.com/in/jabez-greenan-60b434271/":"mailto:jabezgreenan@gmail.com"}><img src={`src/assets/images/${text}.png`}/>{text}</a> 
    )
}