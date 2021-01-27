import data from "./data";
import propTypes from "prop-types";

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

Card.propTypes = {
  title : propTypes.string.isRequired,
  description : propTypes.string.isRequired,
};

export default Cards;

