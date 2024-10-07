import "./style.css";

function CardHome() {

    const cardData = [
        {
          id: 1,
          title: "Card 1",
          text: "This is a description for card 1.",
          imageUrl: "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J"
        },
        {
          id: 2,
          title: "Card 2",
          text: "This is a description for card 2.",
          imageUrl: "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J"
        },
        {
          id: 3,
          title: "Card 3",
          text: "This is a description for card 3.",
          imageUrl: "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J"
        },
        {
          id: 4,
          title: "Card 4",
          text: "This is a description for card 4.",
          imageUrl: "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J"
        },
        {
          id: 5,
          title: "Card 5",
          text: "This is a description for card 5.",
          imageUrl: "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J"
        },
        {
          id: 6,
          title: "Card 6",
          text: "This is a description for card 6.",
          imageUrl: "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J"
        }
      ];
    

  return (
    <>
  <section className="section-container">
    
  <div className="grid-container">
        {cardData.map((card) => (
          <div className="card" key={card.id}>
            <div className="card-img" style={{ backgroundImage: `url(${card.imageUrl})` }}></div>
            <div className="card-body">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
  </section>
</>
  );
}

export default CardHome;