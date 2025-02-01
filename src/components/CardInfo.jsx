function CardInfo({info, info2, ChartComponent, onDetailClick}) {
    return (
        <div className="flex items-center">
            <div className="w-[90%] h-72 bg-black rounded-xl flex flex-col">
                <div className="">
                    {info.map((data, index) => (
                        <div key={index} className="flex items-center p-4 gap-3">
                        <img src={data.Icon} alt={data.title} />
                        <p className="text-white font-jakarta text-xl">{data.title}</p>
                    </div>
                        ))}
                        </div>

                <div className="">
                    {info2 && info2.map((data, index) => (
                        <div key={index} className="flex items-center p-4 gap-3">
                            <img src={data.Icon} alt={data.title} />
                            <p className="text-white font-jakarta text-xl">{data.title}</p>
                        </div>
                    ))}
                </div>
                            {ChartComponent && <ChartComponent/>}
                        <div className="flex justify-between items-center mt-4">
                            <div></div>
                            <button
                            className="text-white  w-32 rounded-md text-lg font-jakarta"
                            onClick={onDetailClick}
                            >
                        Detail &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CardInfo;