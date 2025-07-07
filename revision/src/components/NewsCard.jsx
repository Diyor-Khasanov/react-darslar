import { Link } from "react-router-dom";

function NewsCard({ item, onDelete }) {
  return (
    <div className="news-card">
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <div>
        <Link to={`/edit/${item.id}`}>Edit</Link>
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    </div>
  );
}

export default NewsCard;
