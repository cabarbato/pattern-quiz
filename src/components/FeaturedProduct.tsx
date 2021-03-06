import { removeSpecial, decodeThumbnail } from "../helpers";

const FeaturedProduct = props => {

    return <div className="products__featured grid">
        <img src={`https://garden.spoonflower.com/c/${props.designId}/i/m/${props.thumbnail}`} />
        <article>

            <header className="products__featured-title">
                <h3>{props.name}</h3>
                <p>by <a href={`https://www.spoonflower.com/profiles/${props.user.screenName}`} target="_blank">{[props.user.firstName, props.user.lastName].join(' ')}</a></p>
            </header>



            <div className="tags">{props.tags.map(d => <a href={`https://www.spoonflower.com/en/shop/${removeSpecial(d)}`} target="_blank" className="tags__item">{d.replaceAll(/[^a-z0-9]/gi, " ")}</a>)}</div>

            <footer className="products__featured-footer"><a href={`https://www.spoonflower.com/en/fabric/${props.slug}`} target="_blank">See more about this pattern</a></footer>
        </article>
    </div>
}

export default FeaturedProduct;