

const Banner = () => {
    return (
        <div className="hidden md:hidden lg:contents">
            <div className="relative">
                <img className="object-cover opacity-10" src="https://i.ibb.co/tPz3tK9/Rectangle-4281.png" alt="" />
                <div>
                    <h1 className="text-4xl font-semibold absolute top-36 left-56">I Grow By Helping People In Need</h1>
                </div>
                <div className="absolute top-48 left-80 mt-5">
                    <input className="py-1 px-10 border" placeholder="Search Here..." type="text" />
                    <button className="bg-[#FF444A] py-1 px-5">Search</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;