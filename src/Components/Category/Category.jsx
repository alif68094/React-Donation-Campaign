import { Link } from "react-router-dom";


const Category = ({ item }) => {
    const { id, picture, title, category, category_bg_color, card_bg_color, text_color, button_bg_color, description, price } = item;


    return (
        <div>
            <Link to={`categories/${id}`}>
                <div style={{ backgroundColor: `${card_bg_color}` }} className="p-3 rounded">

                    <img src={picture} alt="" />
                    <button style={{ backgroundColor: `${button_bg_color}`, color: `${text_color}` }} className="px-3 py-1 rounded mt-3 mb-3 font-semibold" >{category}</button>
                    <h1 style={{ color: `${text_color}` }} className="font-semibold">{title}</h1>
                </div>
            </Link>
        </div>
    );
};

export default Category;