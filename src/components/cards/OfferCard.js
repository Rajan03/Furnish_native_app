import {Image, Text, View, StyleSheet, ScrollView} from "react-native";
import {useState} from "react";
import {SCREEN_WIDTH} from "../../utils";

const colors = [
    "#9d7e96",
    "#a18e69",
    "#7c9a7c",
]
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

        width: SCREEN_WIDTH - 40,
        minHeight: 160,
        maxHeight: 160,

        borderRadius: 10,
        backgroundColor: "#dadada",
    },

    card: {
        width: SCREEN_WIDTH - 40,
        flexDirection: "row",
        alignItems: "stretch",
        borderRadius: 10,
        padding: 15,
        backgroundColor: "#d7d7d7",
    },

    contentContainer: {
        maxWidth: "80%",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    offCount: {
        fontSize: 32,
        fontWeight: "900",
        color: "#333",
    },
    title: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: "600",
        color: "#333",
    },
    description: {
        maxWidth: 220,
        maxHeight: 30,

        marginTop: 10,
        fontSize: 14,
        fontWeight: "400",
        color: "#525252",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    },

    imageContainer: {
        flex: 1,
        minWidth: 140,
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
