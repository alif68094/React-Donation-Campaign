import { useEffect, useState } from "react";
import DonationCard from "../Components/DonationCard/DonationCard";


const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noData, setNoData] = useState("")
    const [isShow,setIsShow] = useState(false)
    useEffect(() => {
        const donatedCategory = JSON.parse(localStorage.getItem('donations'))


        if (donatedCategory) {
            setDonation(donatedCategory);
        }
        else {
            setNoData("No Donation Found")
        }


    }, [])

    return (

        <div>
            {
                noData ? <p className="text-center mt-12">{noData}</p> : <div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                        {
                            isShow? donation.map(item => <DonationCard item={item} key={item.id}></DonationCard>) : 
                            donation.slice(0,4).map(item => <DonationCard item={item} key={item.id}></DonationCard>)
                        }
                    </div>

                </div>
            }
            {
                donation.length > 4 && <div className="flex justify-center">
                <button
                    onClick={()=>setIsShow(!isShow)}
                    className="bg-[#009444] px-5 py-2 mt-6 text-center text-white rounded">
                    {!isShow? "See All" : "Show Less"}</button>
            </div>
            }
            
            
        </div>
    );
};

export default Donation;