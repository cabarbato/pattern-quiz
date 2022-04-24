import { useEffect } from 'react';
import { connect } from "react-redux"

const mapStateToProps = state => ({
results: state.quiz.results
});

const Results = ({results}) => {
    useEffect(() => {
        document.getElementById("results").scrollIntoView()
    }, [])
    
    return <section className="quiz__results container" id="results">
        <div className="grid">
            <div className="grid-item">
                {results.map(d => <></>)}
            </div>
        </div>
    </section>
}

export default connect(mapStateToProps)(Results)