import swal from "sweetalert";



const DonationDetailsCard = ({ category }) => {
    const { id, picture, title, text_color, description, price } = category;


        const handleAddToDonation = () => {
            const donationArray = [];
            const donatedCategory = JSON.parse(localStorage.getItem('donations'))
            if(!donatedCategory){
                donationArray.push(category);
                localStorage.setItem('donations', JSON.stringify(donationArray))
                swal("Done!", " Thanks For Your Donation!", "success");
            }
            else{
                donationArray.push(...donatedCategory, category)
                localStorage.setItem('donations', JSON.stringify(donationArray))
                swal("Done!", " Thanks For Another Donation!", "success");
            }
        }


    return (
        <div>
            <div className="w-full relative">
                <img className="w-2/4 mx-auto" src={picture} alt="" />
                <div 
                className="absolute h-[50px] md:h-[75px] w-2/4 bg-[#0b0b0b80] left-[107px] top-[83px] md:left-48 md:top-[164px] lg:left-64 lg:top-[220px] lg:h-[100px]">
                    <button
                    onClick={handleAddToDonation}
                        style={{ backgroundColor: `${text_color}` }}
                        className="px-5 py-1 rounded text-white  mx-auto mt-2 ml-2 md:mt-6 lg:mt-9 lg:ml-6">
                        Donate $ {price}</button>
                </div>
            </div>
            <h1 className="text-3xl font-semibold mt-6 w-2/4 mx-auto">{title}</h1>
            <p className="w-2/4 mx-auto text-sm mt-3">{description}</p>
        </div>
    );
};

export default DonationDetailsCard;