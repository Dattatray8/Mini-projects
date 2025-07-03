export default function AllCards({ cards }) {
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', margin: '20px' }}>
                {
                    (cards.length === 0) ? 'No product available' :
                        cards.map(card => {
                            return <div style={{ backgroundColor: 'gray', width: '300px', padding: '10px' }} key={card.id}>
                                <img src={card.images} alt="" style={{ width: '100px' }} />
                                <p>Name: {card.title}</p>
                                <p>Price: ${card.price}</p>
                                <p>Description: {card.description}</p>
                            </div>
                        })
                }
            </div>
        </>
    )
}