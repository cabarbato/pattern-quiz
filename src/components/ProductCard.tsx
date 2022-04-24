const ProductCard = props => {
const thumbnail = decodeURIComponent(props.thumbnail)

return <a href={`https://www.spoonflower.com/en/fabric/${props.slug}`} className="products__list-card secondary" target="_blank">
    <article>
    <img src={`https://garden.spoonflower.com/c/${props.designId}/p/f/m/${thumbnail}`} />
    </article>
</a>}

export default ProductCard;