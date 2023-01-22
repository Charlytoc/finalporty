const Article = (props) => {
    return (
        <div className="article">
            <h1 className="color-changing">{props.title}</h1>
            <div><span>{props.user}</span>
            <span>|</span>
            <span>{props.category}</span></div>
            <p>{props.description}</p>
        </div>
    );
};

export default Article;