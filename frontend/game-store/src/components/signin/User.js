class User {
    constructor(userId){
        this.id = userId;
        this.cart = [];
        this.wishlist = [];
    }

    addToCart(item){
        this.cart.push(item);
    }

    addToWishlist(item){
        this.cart.push(item);
    }
}

export default User