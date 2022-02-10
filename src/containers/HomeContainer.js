import {connect} from 'react-redux'
import Home from '../components/Home';
import {addToCart, removeToCart} from '../services/Actions/actions'

const mapStateToProps = state => ({
    cardData:state
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler:data => dispatch(addToCart(data)),
    RemoveToCartHandler:data => dispatch(removeToCart())
})




export default connect(mapStateToProps, mapDispatchToProps)(Home)











// export default Home;