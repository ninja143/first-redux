import {connect} from 'react-redux'
import Header from '../components/Header';

const mapStateToProps = state => ({
    cardData:state
})

const mapDispatchToProps = dispatch => ({
    // addToCartHandler:data => dispatch(addToCart(data))
})




export default connect(mapStateToProps, mapDispatchToProps)(Header)











// export default Home;