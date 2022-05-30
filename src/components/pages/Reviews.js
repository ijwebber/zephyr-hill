import './Reviews.css';
import imgCollab from '../../assets/review-imgs/everycollab.png'

function Reviews() {
    return (
        <div className='Reviews'>
            <img src={imgCollab} alt="Photos of collaborators" className="img-collab"></img>
            <div className='bg-main'>
                <div className='gradient'></div>
                <div className='white'></div>
            </div>
            <div className='title'>
                REVIEWS
            </div>
        </div>
    );
}

export default Reviews;