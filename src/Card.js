
const todoDate= new Date();
const dateName= todoDate.getDate();
const monthName= todoDate.getMonth();
const currentYear= todoDate.getFullYear();
function Card(props){
    const {titleText,descText}=props;
    return  <div className='card'>
            <h3 className='cardTitle'>{titleText}</h3>
            <p className='cardDesc'>{descText}</p>
            <p className='cardFooter'>{dateName + "/" + monthName + "/" + currentYear}</p>
            </div>

}

export default Card;