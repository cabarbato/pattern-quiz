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
        <FeaturedProduct {...results[0]} />
        <h4>Here's a few other suggestions based on your answers:</h4>
        <div className="products__list grid">
            {cards.map(d => <ProductCard {...d} />)}
        </div>
    </div>
}

export default connect(mapStateToProps)(Results)