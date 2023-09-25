

const DonationCard = ({ item }) => {
    const { id, picture, title, category, category_bg_color, card_bg_color, text_color, button_bg_color, description, price } = item;
    return (
       <div>
         <div style={{ backgroundColor: `${card_bg_color}` }} className="flex gap-3 p-4 items-center rounded">
            <div>
                <img src={picture} alt="" />
            </div>
            <div>
                <button
                    style={{ backgroundColor: `${button_bg_color}`, color: `${text_color}` }}
                    className="py-1 px-3 rounded text-lg font-semibold">
                    {category}</button>
                <h1 className="font-semibold text-xl">{title}</h1>
                <p style={{ color: `${text_color}` }} className="mb-2">${price}</p>
                <button style={{ backgroundColor: `${text_color}` }} className="px-4 py-1 rounded text-white">View Details</button>
            </div>
            
        </div>
        
       </div>
    );
};

export default DonationCard;