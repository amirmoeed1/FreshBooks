const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="card position-relative shadow" style={{ width: "400px " }}>
      <img src={item?.image} className="card-img-top" alt="..." />
      <div className="card-body ">
        <p
          style={{ fontSize: "16px", fontWeight: "600" }}
          className="card-text pb-5  dscr "
        >
          {item?.dscrp}
        </p>
        <p className="pb-5"></p>

        <a
          href="#"
          className="btn btn-outline-primary ms-auto mb-4 me-4 position-absolute bottom-0 end-0"
        >
          Read More
        </a>
      </div>
    </div>
  );
};



export default Card;
