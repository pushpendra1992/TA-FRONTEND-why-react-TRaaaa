import data from "./data";
function Cards() {
  return (
    <section>
      <div>
        <div className="row">
          {data.map((article) => {
            return <Card {...article} />;
          })}
        </div>
      </div>
    </section>
  );
}

function Card(props) {
  return (
    <div className="col-sm-4 mt-4 width">
      <div className="card">
        <img src={props.urlToImage} alt="01" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="##" className="btn btn-primary">
            Read more...
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
/*

*/

/*
<div>
                <img src={props.urlToImage} alt="01"/>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a href="##">learn more</a>
            </div>
            */
