import {useState} from "react";
import {Image, Text, View, StyleSheet, ScrollView} from "react-native";
import {hp, IS_SMALL_DEVICE, SCREEN_WIDTH} from "utils";

const OfferCard = ({offer, styles: extraStyles}) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const onCardScroll = (event) => {
        const {contentOffset} = event.nativeEvent;
        const viewSize = event.nativeEvent.layoutMeasurement;

        const activeSlide = Math.ceil(contentOffset.x / viewSize.width);

        setActiveSlide(activeSlide);
    }

    return (
        <View style={{position: "relative"}}>
            {/* Scroll Cards */}
            <ScrollView style={[styles.container, extraStyles]} showsHorizontalScrollIndicator={false}
                        horizontal pagingEnabled onScroll={onCardScroll}>
                {offer.map(({offCount, title, description, image, backgroundColor}, index) => (
                    // Card
                    <View key={index} style={[styles.card, {backgroundColor}]}>
                        {/* Card Content */}
                        <View style={styles.contentContainer}>
                            <Text style={styles.offCount}>{offCount}%</Text>

                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.description}>{description}</Text>
                        </View>

                        {/* Card Image */}
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={image}/>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Slider Dots */}
            <View style={styles.slider}>
                {offer.map((_, i) => <View key={i} style={activeSlide === i
                    ? [styles.sliderDot, styles.activeSliderDot]
                    : styles.sliderDot}/>)}
            </View>
        </View>
    );
}

export default OfferCard;

const styles = StyleSheet.create({
    container: {
        position: "relative",

        width: SCREEN_WIDTH - (hp(2) * 2),
        maxHeight: !IS_SMALL_DEVICE ? 180 : 130,

        borderRadius: 10,
        backgroundColor: "#dadada",
    },

    card: {
        width: SCREEN_WIDTH - (hp(2) * 2),
        flexDirection: "row",
        alignItems: "stretch",
        borderRadius: 10,
        padding: 15,
        backgroundColor: "#d7d7d7",
    },

    contentContainer: {
        maxWidth: hp(80),
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    offCount: {
        fontSize: hp(3.2),
        fontWeight: "900",
        color: "#333",
    },
    title: {
        marginTop: 12,
        fontSize: hp(2.8),
        fontWeight: "700",
        color: "#333",
    },
    description: {
        maxWidth: (SCREEN_WIDTH - (hp(2) * 2)) / 1.7,
        maxHeight: hp(10),

        marginTop: 10,
        fontSize: hp(1.6),
        fontWeight: "400",
        color: "#525252",
        overflow: "hidden",
    },

    imageContainer: {
        flex: 1,
        minWidth: hp(18),
        minHeight: 150,
        transform: [{scaleX: -1}],
        alignSelf: "center",
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },

    slider: {
        position: "absolute",
        bottom: 10,
        right: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    sliderDot: {
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: "#e3e3e3",
        marginRight: 3,
    },
    activeSliderDot: {
        backgroundColor: "#525252",
    }
});
