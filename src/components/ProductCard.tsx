const ProductCard = props => <a href={`https://www.spoonflower.com/en/fabric/${props.slug}`} className="products__list-card secondary" target="_blank">
    <article key={props.id}>
    <header><img src={`https://garden.spoonflower.com/c/${props.designId}/p/f/m/${props.thumbnail}`} /></header>
    {props.name}
    </article>
</a>

export default ProductCard;