import { useEffect } from 'react';
import { connect } from "react-redux";
import FeaturedProduct from '../components/FeaturedProduct';
import ProductCard from '../components/ProductCard';

const mapStateToProps = state => ({
    results: state.quiz.results
});

const Results = ({ results }) => {
    useEffect(() => {
        const { top } = document.getElementById("results").getBoundingClientRect();
        window.scrollTo(0, top + window.innerHeight)
    }, [])
    
    const cards = results.slice(1)
    return <div className="products">
        <h1>Your New Pattern</h1>
        <FeaturedProduct {...results[0]} />
        <hr />
        <h4>Here's a few other suggestions based on your answers:</h4>
        <div className="products__list grid">
            {cards.map(d => <ProductCard {...d} key={d.id} />)}
        </div>
    </div>
}

export default connect(mapStateToProps)(Results)