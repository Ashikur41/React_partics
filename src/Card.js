const todoTitle="Call Family";
const todoDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const todoDate= new Date();
const dateName= todoDate.getDate();
const monthName= todoDate.getMonth();
const currentYear= todoDate.getFullYear();
function Card(){
    return  <div className='card'>
            <h3 className='cardTitle'>{todoTitle}</h3>
            <p className='cardDesc'>{todoDesc}</p>
            <p className='cardFooter'>{dateName + "/" + monthName + "/" + currentYear}</p>
            </div>

}

export default Card;