

const Player = ({player}) => {
    console.log(player)
    const{banner_image, player_name, country, position,preferred_foot, price}=player;
    return (
        <div className="p-4 border-1 border-gray-300 mt-9 rounded-xl">
            <img className="w-250 h-60 rounded-xl" src={banner_image} alt="Profile image" />
            <div className="flex items-center gap-4 mt-4">
                <img className="w-14 h-14 rounded-full" src={banner_image} alt="" />
                <h2 className="text-xl font-bold">{player_name}</h2>
            </div>
            <div className="flex justify-between mt-4">
                <p className="text-gray-400">{country}</p>
                <p className="text-gray-400">{position}</p>
            </div>
            <h3 className="font-bold mt-4">Rating</h3>
            <div className="flex justify-between mt-1">
                <p className="font-bold">Preferred Foot</p>
                <p className="text-gray-400">{preferred_foot}</p>
            </div>
            <div className="flex justify-between mt-1">
                <p className="font-bold">Price: ${price}</p>
                <button className="border-1 border-gray-300 px-2 rounded-sm"><a href="#">Choose Player</a></button>
            </div>
        </div>
    );
};

export default Player;