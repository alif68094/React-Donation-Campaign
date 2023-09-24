import { useEffect, useState } from "react";
import DonationCard from "../Components/DonationCard/DonationCard";


const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noData, setNoData] = useState("")
        useEffect(() => {
            const donatedCategory = JSON.parse(localStorage.getItem('donations'))

            
            if(donatedCategory){
                setDonation(donatedCategory);
            }
            else{
                setNoData("No Donation Found")
            }
            
            
        },[])
        
    return (
        
        <div>
            {
                noData? <p className="text-center mt-12">{noData}</p> : <div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                        {
                           donation.map(item => <DonationCard item={item} key={item.id}></DonationCard>) 
                        }
                    </div>

                </div>
            }
        </div>
    );
};

export default Donation;