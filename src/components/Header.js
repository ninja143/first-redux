import React from "react";

const Header = (props) => {
    const cartLength = props.cardData.cardItems.length
    return (
        <div>
            <div className="add-to-cart">
                <span className="cartCount">{cartLength}</span>
                <img src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Add-Cart-icon.png" alt="Cart,add,512x512 Icon - Online Shopping @clipartmax.com" />
            </div>
            
        </div>
    )
}

export default Header;