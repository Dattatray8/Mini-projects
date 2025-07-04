export default function AllCards({ cards }) {
    return (
        <>
            <div className="flex flex-wrap gap-6 justify-center items-center p-5 w-[90%]">
                {
                    (cards.length === 0) ? 'No product available' :
                        cards.map(card => {
                            return <div className="w-[17em] sm:w-[22em] h-[25em] bg-[#ececec] p-3 flex flex-col justify-center gap-2 rounded-2xl" key={card.id}>
                                <img src={card.images} alt="" className="w-[10em] h-fit self-center" />
                                <div className="flex justify-between">
                                    <p className="opacity-70">{card.title}</p>
                                    <p className="opacity-70">${card.price}</p>
                                </div>
                                <p className="opacity-70">{card.description}</p>
                            </div>
                        })
                }
            </div>
        </>
    )
}