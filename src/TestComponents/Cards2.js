import "./common.css";
import Prod from '../Components/proditem';

export default function Cards2() {
    return (
        // <div className='col-md-4 col-10 mx-auto'>
        <div className='Cards2 '>
            {contents.map(contents => (
                <Prod
                    key={contents.id}
                    image={contents.image}
                    name={contents.name}
                // price={contents.price}
                // totalSales={contents.totalSales}
                // timeLeft={contents.timeLeft}
                // rating={contents.rating}
                />
            ))}
        </div>
        // </div>
    )
}