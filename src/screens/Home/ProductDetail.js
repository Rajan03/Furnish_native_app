import {useEffect, useState} from "react";
import {View, Text} from "react-native";
import {Feather, MaterialCommunityIcons} from "@expo/vector-icons";

import {products} from "constants/data";
import {hideTabBar, showTabBar} from "utils";
import {TextWithIconChip, RatingIconText, IncDecBtn} from "components";
import {ScrollableLayout} from "container";
import {
	ActionArea,
	BackIconBtn, CartBtn, PriceBox,
	ProductBannerImage,
	ProductDescriptionContainer,
	ProductDetailsContainer,
	ProductDetailsStyles as styles,
	ProductImageContainer, ProductNameAndSoldContainer, QuantityBtn, QuantityBtnContainer, ratingComponent, soldComponent
} from "./Home.styles";
import {TextBtnContained} from "../../components";


const ProductDetail = ({navigation, route}) => {
	const {productId} = route.params;
	const {
		name,
		rating,
		price,
		image,
		description,
		reviewsCount,
		soldCount,
		reviews
	} = products.find((product) => product.id === productId);
	const [selectedCount, setSelectedCount] = useState(1);

	// Set Tab Bar visibility hidden on Load and visible on Unload
	useEffect(() => {
		hideTabBar(navigation);
		return () => showTabBar(navigation)
	}, []);

	return (
		<ScrollableLayout>

			<ProductImageContainer>
				{/* Back btn */}
				<BackIconBtn onPress={() => navigation.goBack()}>
					<MaterialCommunityIcons name="arrow-left" style={styles.backIcon}/>
				</BackIconBtn>

				{/* Product Image */}
				<ProductBannerImage resizeMode={"cover"} source={image}/>
			</ProductImageContainer>

			<ProductDetailsContainer>
				{/* Product Name, Sold and rating Container */}
				<ProductNameAndSoldContainer>
					{/* Name and Like Icon */}
					<View style={styles.productNameContainer}>
						<Text style={styles.productName}>{name}</Text>
						<MaterialCommunityIcons name="cards-heart-outline" style={styles.icon}/>
					</View>

					{/* Sold and Rating */}
					<View style={styles.rateAndSold}>
						{/* Sold */}
						<TextWithIconChip icon={"ios-cart"} text={`${soldCount}`} styles={soldComponent}/>

						{/* Rating */}
						<RatingIconText rating={rating} reviewsCount={reviewsCount} styles={ratingComponent}/>
					</View>
				</ProductNameAndSoldContainer>

				{/* Description */}
				<ProductDescriptionContainer>
					<Text style={styles.sectionTitle}>Description</Text>
					<Text style={styles.description}>{description || "No description Available!!"}</Text>
				</ProductDescriptionContainer>

				{/* Quantity */}
				<QuantityBtnContainer>
					<Text style={styles.sectionTitle}>Quantity</Text>
					<IncDecBtn selectedCount={selectedCount} onCountChange={setSelectedCount} styles={QuantityBtn}/>
				</QuantityBtnContainer>

				{/* Price and Cart Btn */}
				<ActionArea>
					{/* Price */}
					<PriceBox>
						<Text style={styles.priceHelperText}>Total Price</Text>
						<Text style={styles.price}>${price}</Text>
					</PriceBox>

					{/* Cart Btn */}
					<View style={styles.cartBtn}>
						<TextBtnContained btnText={"Add to Cart"} styles={CartBtn}
															onPress={() => console.log("Cart")}>
							<View style={styles.cartBtnContent}>
								<Feather name="shopping-bag" style={styles.cartIcon}/>
								<Text style={styles.cartBtnTxt}>Add to Cart</Text>
							</View>
						</TextBtnContained>
					</View>

				</ActionArea>
			</ProductDetailsContainer>
		</ScrollableLayout>
	);
}

export default ProductDetail;
