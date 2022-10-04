import {View, StyleSheet, Image, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {hp, IS_SMALL_DEVICE} from "../../utils";

const ProductCard = ({product, styles: extraStyles}) => {
    const {name, price, image, rating, soldCount} = product;
    return (
        <>
            <View style={[styles.container, extraStyles]}>
                {/* Image ANd Like Btn */}
                <View style={styles.imageContainer}>
                    {/* Like icon */}
                    <View style={styles.likeIconContainer}>
                        <Ionicons name="heart-outline" size={hp(2)} color="#fff"/>
                    </View>
                    {/* Image */}
                    <Image source={image} style={styles.image}/>
                </View>

                {/* Name */}
                <Text style={styles.name}>{name}</Text>

                {/* Rating Stars and sold chip */}
                <View style={styles.rateAndSold}>
                    {/* Rating */}
                    <View style={styles.ratingContainer}>
                        <Ionicons name={rating % 1 === 0 ? "star" : "star-half"} size={hp(1.8)} color="#525252"/>
                        <Text style={styles.rating}>{rating}</Text>
                    </View>

                    {/* Separator */}
                    <View style={styles.separator}/>

                    {/* Sold */}
                    <View style={styles.soldContainer}>
                        <Text style={styles.sold}>{soldCount}</Text>
                        <Ionicons name="cart-outline" size={hp(1.8)} color="#525252"/>
                    </View>
                </View>

                {/* Price */}
                <Text style={styles.price}>Rs. {price}</Text>

            </View>
        </>
    );
}

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },

    imageContainer: {
        position: 'relative',
        height: "60%",
        width: "100%",

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#f2f2f5',
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: 'cover',
    },
    likeIconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,

        backgroundColor: '#525252',
        borderRadius: 50,
        padding: 5,

        zIndex: 1,
    },

    name: {
        paddingVertical: hp(0.8),
        fontSize: hp(2),
        fontWeight: '700',
        color: '#525252',
    },

    rateAndSold: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        marginLeft: 4,
        fontSize: hp(1.8),
        fontWeight: '600',
        color: '#525252',
    },
    separator: {
        height: hp(1.8),
        width: 2,
        backgroundColor: '#525252',
        marginHorizontal: hp(1.3),
    },
    soldContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f5',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    sold: {
        marginRight: 4,
        fontSize: hp(1.8),
        fontWeight: '600',
        color: '#525252',
    },

    price: {
        paddingTop: hp(0.8),
        fontSize: hp(1.8),
        fontWeight: '700',
        color: '#525252',
    }
});
