import Category from "../Category/Category";


const Categories = ({categories}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-9">
            {
                categories.map(item => <Category item={item} key={item.id}></Category>)
            }
        </div>
    );
};

export default Categories;