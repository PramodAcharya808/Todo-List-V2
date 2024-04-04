let ListItems = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.name} className="items row mx-5 my-5">
          <div className="col-lg-6">
            <p>{item.name}</p>
          </div>
          <div className="col-lg-3">
            <p>{item.date}</p>
          </div>
          <div className="col-lg-3">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListItems;
